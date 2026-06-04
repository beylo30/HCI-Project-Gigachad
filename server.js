const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const rootDir = __dirname;
const port = Number(process.env.PORT || 4174);

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon"
};

function loadLocalEnv() {
  const envPath = path.join(rootDir, ".env");
  if (!fs.existsSync(envPath)) return;

  const lines = fs.readFileSync(envPath, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const separator = trimmed.indexOf("=");
    if (separator === -1) continue;
    const key = trimmed.slice(0, separator).trim();
    const value = trimmed.slice(separator + 1).trim().replace(/^["']|["']$/g, "");
    if (key && !process.env[key]) process.env[key] = value;
  }
}

function sendJson(response, status, payload) {
  response.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8"
  });
  response.end(JSON.stringify(payload));
}

function getAccessCode() {
  return String(process.env.APP_ACCESS_CODE || "").trim();
}

function parseCookies(request) {
  return Object.fromEntries(String(request.headers.cookie || "")
    .split(";")
    .map(cookie => cookie.trim())
    .filter(Boolean)
    .map(cookie => {
      const separator = cookie.indexOf("=");
      if (separator === -1) return [cookie, ""];
      return [cookie.slice(0, separator), decodeURIComponent(cookie.slice(separator + 1))];
    }));
}

function hasAppAccess(request) {
  const accessCode = getAccessCode();
  if (!accessCode) return true;
  return parseCookies(request).mapmeet_access === accessCode;
}

function serveAccessGate(response, errorMessage = "") {
  response.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8"
  });
  response.end(`<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>MapMeet Access</title>
  <style>
    body { margin: 0; min-height: 100vh; display: grid; place-items: center; font-family: Arial, sans-serif; background: linear-gradient(135deg, #f7eadf, #e7f3ed); color: #18233d; }
    main { width: min(92vw, 420px); padding: 28px; border-radius: 28px; background: rgba(255,255,255,.82); box-shadow: 0 24px 70px rgba(24,35,61,.18); }
    h1 { margin: 0 0 8px; font-size: 1.6rem; }
    p { color: #65708a; line-height: 1.5; }
    form { display: grid; gap: 12px; margin-top: 18px; }
    input, button { border: 0; border-radius: 16px; padding: 14px 16px; font: inherit; }
    input { background: #f4f6f8; outline: 2px solid transparent; }
    input:focus { outline-color: #0f7e68; }
    button { background: #14213d; color: white; font-weight: 800; cursor: pointer; }
    .error { color: #b42318; font-weight: 700; }
  </style>
</head>
<body>
  <main>
    <h1>MapMeet private test</h1>
    <p>Enter the access code before opening the prototype. This protects the AI and Naver API quota while we test on phones.</p>
    ${errorMessage ? `<p class="error">${errorMessage}</p>` : ""}
    <form method="get" action="/unlock">
      <input name="code" type="password" placeholder="Access code" autocomplete="off" autofocus />
      <button type="submit">Open MapMeet</button>
    </form>
  </main>
</body>
</html>`);
}

function handleUnlock(request, response) {
  const accessCode = getAccessCode();
  const url = new URL(request.url, `http://${request.headers.host || "localhost"}`);
  const submittedCode = String(url.searchParams.get("code") || "").trim();

  if (!accessCode || submittedCode === accessCode) {
    response.writeHead(302, {
      "Location": "/",
      "Set-Cookie": `mapmeet_access=${encodeURIComponent(submittedCode || accessCode)}; Path=/; HttpOnly; SameSite=Lax; Max-Age=604800`
    });
    response.end();
    return;
  }

  serveAccessGate(response, "That access code is not correct.");
}

function readRequestBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";
    request.on("data", chunk => {
      body += chunk;
      if (body.length > 1_000_000) {
        reject(new Error("Request body is too large."));
        request.destroy();
      }
    });
    request.on("end", () => resolve(body));
    request.on("error", reject);
  });
}

function extractOutputText(openAiResponse) {
  if (openAiResponse.output_text) return openAiResponse.output_text;

  return (openAiResponse.output || [])
    .flatMap(item => item.content || [])
    .filter(content => content.type === "output_text" && content.text)
    .map(content => content.text)
    .join("\n");
}

function extractGeminiText(geminiResponse) {
  return (geminiResponse.candidates || [])
    .flatMap(candidate => candidate.content?.parts || [])
    .map(part => part.text || "")
    .filter(Boolean)
    .join("\n");
}

function parseJsonModelOutput(text) {
  const cleaned = String(text || "")
    .trim()
    .replace(/^```(?:json)?/i, "")
    .replace(/```$/i, "")
    .trim();

  try {
    return JSON.parse(cleaned);
  } catch {
    const match = cleaned.match(/\{[\s\S]*\}/);
    if (!match) throw new Error("AI returned text instead of JSON.");
    return JSON.parse(match[0]);
  }
}

function buildFallbackAiResult(prompt, activities, places = []) {
  const firstStudy = activities.find(activity => String(activity.category || "").toLowerCase().includes("study"));
  const firstActivity = firstStudy || activities[0];
  const firstPlace = places.find(place => place?.verifiedOnNaver && place?.source === "naver-local");

  if (firstPlace) {
    return normalizeAiResult({
      reply: "I found a nearby place from Naver Local Search.",
      recommendations: [],
      placeRecommendations: [{
        placeName: firstPlace.name,
        reasons: [
          firstPlace.distanceKm ? `${Number(firstPlace.distanceKm).toFixed(1)} km from the map center` : "Best nearby place match",
          "From Naver Local Search"
        ],
        confidence: 0.72
      }],
      createIdea: null
    });
  }

  return normalizeAiResult({
    reply: firstActivity
      ? `I found a likely fit for "${prompt}".`
      : `I can help create a low-pressure plan for "${prompt}".`,
    recommendations: firstActivity
      ? [{ activityId: firstActivity.id, reasons: ["It is the closest available match from the current activity list."], confidence: 0.55 }]
      : [],
    placeRecommendations: [],
    createIdea: {
      title: "Low-pressure meetup",
      place: "Anam Station area",
      description: `A comfort-first activity based on: ${prompt}`,
      category: "Other",
      fit: "Newcomers welcome",
      level: "Beginner-friendly",
      languages: ["English", "Korean"],
      vibe: "Casual small group",
      hostNote: "People can message first and join quietly if arriving alone feels easier."
    }
  });
}

function normalizeAiResult(result) {
  return {
    reply: String(result.reply || "I found some activity options for you.").slice(0, 900),
    recommendations: Array.isArray(result.recommendations)
      ? result.recommendations.slice(0, 3).map(item => ({
        activityId: String(item.activityId || ""),
        reasons: Array.isArray(item.reasons) ? item.reasons.slice(0, 3).map(String) : [],
        confidence: Number(item.confidence || 0)
      })).filter(item => item.activityId)
      : [],
    placeRecommendations: Array.isArray(result.placeRecommendations)
      ? result.placeRecommendations.slice(0, 3).map(item => ({
        placeName: String(item.placeName || ""),
        reasons: Array.isArray(item.reasons) ? item.reasons.slice(0, 3).map(String) : [],
        confidence: Number(item.confidence || 0)
      })).filter(item => item.placeName)
      : [],
    createIdea: result.createIdea && typeof result.createIdea === "object"
      ? {
        title: String(result.createIdea.title || "Small casual meetup").slice(0, 80),
        place: String(result.createIdea.place || "Anam Station area").slice(0, 100),
        description: String(result.createIdea.description || "A low-pressure meetup suggested by AI.").slice(0, 400),
        category: String(result.createIdea.category || "Other"),
        fit: String(result.createIdea.fit || "Newcomers welcome"),
        level: String(result.createIdea.level || "Beginner-friendly"),
        languages: Array.isArray(result.createIdea.languages) ? result.createIdea.languages.slice(0, 4).map(String) : ["English", "Korean"],
        vibe: String(result.createIdea.vibe || "Casual small group"),
        hostNote: String(result.createIdea.hostNote || "New people are welcome.").slice(0, 220)
      }
      : null
  };
}

function stripHtml(value) {
  return String(value || "").replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").trim();
}

function uniqueValues(values) {
  return [...new Set(values.map(value => String(value || "").trim()).filter(Boolean))];
}

function buildPlaceSearchTerms(prompt) {
  const text = String(prompt || "").toLowerCase();
  const terms = [];
  const add = (...values) => terms.push(...values);
  const nearAnam = term => [`${term} Anam Korea University`, `${term} Seongbuk-gu`, `${term} \uc548\uc554 \uace0\ub824\ub300\ud559\uad50`];

  if (/\b(basketball|court|hoop|nba)\b|\ub18d\uad6c/.test(text)) {
    add("basketball court", "\ub18d\uad6c\uc7a5", ...nearAnam("\ub18d\uad6c\uc7a5"));
  }

  if (/\b(flower|flowers|blossom|cherry blossom|garden|park|picnic)\b|\uaf43|\ubc9a\uaf43|\uacf5\uc6d0/.test(text)) {
    add("flower park", "garden", "cherry blossom", "\uaf43 \uacf5\uc6d0", "\ubc9a\uaf43 \uba85\uc18c", ...nearAnam("\uacf5\uc6d0"));
  }

  if (/\b(cafe|coffee|study|quiet|library)\b|\uce74\ud398|\uacf5\ubd80|\ub3c4\uc11c\uad00/.test(text)) {
    add("study cafe", "quiet cafe", "library", "\uc2a4\ud130\ub514\uce74\ud398", "\uce74\ud398", ...nearAnam("\uce74\ud398"));
  }

  if (/\b(food|restaurant|dinner|lunch|meal|eat|drink)\b|\ub9db\uc9d1|\uc2dd\ub2f9|\uc74c\uc2dd/.test(text)) {
    add("restaurant", "food street", "\ub9db\uc9d1", ...nearAnam("\ub9db\uc9d1"));
  }

  if (/\b(hike|walk|walking|trail|outdoor)\b|\uc0b0\ucc45|\ub4f1\uc0b0/.test(text)) {
    add("walking trail", "park", "\uc0b0\ucc45\ub85c", "\uacf5\uc6d0", ...nearAnam("\uacf5\uc6d0"));
  }

  add(prompt, ...nearAnam(prompt));
  return uniqueValues(terms).slice(0, 10);
}

function getDistanceKm(from, to) {
  if (!from || !Number.isFinite(from.lat) || !Number.isFinite(from.lng) || !Number.isFinite(to.lat) || !Number.isFinite(to.lng)) {
    return Number.POSITIVE_INFINITY;
  }

  const radiusKm = 6371;
  const toRadians = degrees => degrees * Math.PI / 180;
  const dLat = toRadians(to.lat - from.lat);
  const dLng = toRadians(to.lng - from.lng);
  const lat1 = toRadians(from.lat);
  const lat2 = toRadians(to.lat);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return radiusKm * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function getPlaceIntent(prompt) {
  const text = String(prompt || "").toLowerCase();
  if (/\b(basketball|court|hoop|nba)\b|\ub18d\uad6c/.test(text)) return "basketball";
  if (/\b(flower|flowers|blossom|cherry blossom|garden|park|picnic)\b|\uaf43|\ubc9a\uaf43|\uacf5\uc6d0/.test(text)) return "flowers";
  if (/\b(cafe|coffee|study|quiet|library)\b|\uce74\ud398|\uacf5\ubd80|\ub3c4\uc11c\uad00/.test(text)) return "study";
  if (/\b(food|restaurant|dinner|lunch|meal|eat|drink)\b|\ub9db\uc9d1|\uc2dd\ub2f9|\uc74c\uc2dd/.test(text)) return "food";
  if (/\b(hike|walk|walking|trail|outdoor)\b|\uc0b0\ucc45|\ub4f1\uc0b0/.test(text)) return "outdoor";
  return "general";
}

function isRelevantNaverPlace(place, intent) {
  const haystack = [place.name, place.shortName, place.category, place.address, ...(place.tags || [])]
    .join(" ")
    .toLowerCase();

  if (intent === "basketball") {
    return /basketball|court|hoop|\ub18d\uad6c|\uc2a4\ud3ec\uce20|\uccb4\uc721|\uc6b4\ub3d9/.test(haystack);
  }

  if (intent === "flowers") {
    return /\uaf43|\ubc9a\uaf43|flower|garden|\uc815\uc6d0|\uc218\ubaa9\uc6d0|\uacf5\uc6d0|\uc0dd\ud0dc/.test(haystack)
      && !/\uaf43\uc9d1|\uaf43\ubc30\ub2ec|flower shop|florist|\ucf00\uc774\ud06c|\uc74c\uc2dd\uc810|\ud0a4\uc988\uce74\ud398|\ubc18\ub824\ub3d9\ubb3c|\ubbf8\uc6a9|\uc560\uacac|\uac15\uc544\uc9c0/.test(haystack);
  }

  if (intent === "study") {
    return /study|library|cafe|coffee|\uc2a4\ud130\ub514|\ub3c4\uc11c\uad00|\uce74\ud398|\ucee4\ud53c/.test(haystack);
  }

  if (intent === "food") {
    return /restaurant|food|cafe|\ub9db\uc9d1|\uc2dd\ub2f9|\uc74c\uc2dd|\uce74\ud398|\ubd84\uc2dd|\ud55c\uc2dd|\uc591\uc2dd|\uc77c\uc2dd|\uc911\uc2dd/.test(haystack);
  }

  if (intent === "outdoor") {
    return /park|trail|walk|hike|\uacf5\uc6d0|\uc0b0\ucc45|\ub4f1\uc0b0|\ub458\ub808\uae38|\uc0b0/.test(haystack);
  }

  return true;
}

function normalizeNaverLocalItem(item) {
  const lng = Number(item.mapx) / 10000000;
  const lat = Number(item.mapy) / 10000000;
  return {
    name: stripHtml(item.title),
    shortName: stripHtml(item.title),
    category: stripHtml(item.category || "Place"),
    address: stripHtml(item.roadAddress || item.address || ""),
    lat,
    lng,
    link: item.link || "",
    telephone: item.telephone || "",
    tags: [stripHtml(item.category || ""), stripHtml(item.description || "")].filter(Boolean),
    aliases: [stripHtml(item.title), stripHtml(item.category || "")].filter(Boolean),
    source: "naver-local",
    verifiedOnNaver: true,
    naverMapUrl: `https://map.naver.com/p/search/${encodeURIComponent(stripHtml(item.title))}`
  };
}

async function searchNaverLocalPlaces(query) {
  if (!process.env.NAVER_SEARCH_CLIENT_ID || !process.env.NAVER_SEARCH_CLIENT_SECRET) {
    return [];
  }

  const searchQuery = String(query || "").trim();
  if (!searchQuery) return [];

  const url = new URL("https://openapi.naver.com/v1/search/local.json");
  url.searchParams.set("query", searchQuery);
  url.searchParams.set("display", "5");
  url.searchParams.set("start", "1");
  url.searchParams.set("sort", "random");

  const naverResponse = await fetch(url, {
    headers: {
      "X-Naver-Client-Id": process.env.NAVER_SEARCH_CLIENT_ID,
      "X-Naver-Client-Secret": process.env.NAVER_SEARCH_CLIENT_SECRET
    }
  });

  const body = await naverResponse.text();
  if (!naverResponse.ok) {
    throw new Error(`Naver Local Search failed: ${body.slice(0, 200)}`);
  }

  const data = JSON.parse(body);
  return (data.items || [])
    .map(normalizeNaverLocalItem)
    .filter(place => Number.isFinite(place.lat) && Number.isFinite(place.lng));
}

async function handlePlaceSearch(request, response) {
  const rawBody = await readRequestBody(request);
  const payload = JSON.parse(rawBody || "{}");
  const query = String(payload.query || "").trim().slice(0, 120);
  const origin = payload.mapCenter && Number.isFinite(Number(payload.mapCenter.lat)) && Number.isFinite(Number(payload.mapCenter.lng))
    ? { lat: Number(payload.mapCenter.lat), lng: Number(payload.mapCenter.lng) }
    : null;
  if (!query) {
    sendJson(response, 400, { error: "missing_query", message: "Query is required." });
    return;
  }

  if (!process.env.NAVER_SEARCH_CLIENT_ID || !process.env.NAVER_SEARCH_CLIENT_SECRET) {
    sendJson(response, 503, {
      error: "missing_naver_search_key",
      message: "NAVER_SEARCH_CLIENT_ID and NAVER_SEARCH_CLIENT_SECRET are not set on the server."
    });
    return;
  }

  const searchTerms = [
    query,
    `${query} 안암 고려대학교`,
    `${query} 성북구`
  ];
  const intent = getPlaceIntent(query);
  const effectiveSearchTerms = buildPlaceSearchTerms(query);
  const seen = new Set();
  const places = [];

  for (const term of effectiveSearchTerms) {
    let results = [];
    try {
      results = await searchNaverLocalPlaces(term);
    } catch (error) {
      console.warn(`Skipping Naver Local Search term "${term}": ${error.message}`);
      continue;
    }
    for (const place of results) {
      if (!isRelevantNaverPlace(place, intent)) continue;
      const key = `${place.name}-${place.address}`;
      if (seen.has(key)) continue;
      seen.add(key);
      places.push(place);
      if (places.length >= 8) break;
    }
    if (places.length >= 8) break;
  }

  if (origin) {
    places.sort((a, b) => getDistanceKm(origin, a) - getDistanceKm(origin, b));
    const nearbyPlaces = places.filter(place => getDistanceKm(origin, place) <= 20);
    if (nearbyPlaces.length) {
      places.length = 0;
      places.push(...nearbyPlaces);
    }
  }

  sendJson(response, 200, { places });
}

async function handleAiMatch(request, response) {
  const geminiApiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
  const provider = process.env.AI_PROVIDER || (geminiApiKey ? "gemini" : "openai");
  const hasProviderKey = provider === "gemini" ? Boolean(geminiApiKey) : Boolean(process.env.OPENAI_API_KEY);

  if (!hasProviderKey) {
    sendJson(response, 503, {
      error: "missing_api_key",
      message: provider === "gemini"
        ? "GEMINI_API_KEY or GOOGLE_API_KEY is not set on the server."
        : "OPENAI_API_KEY is not set on the server."
    });
    return;
  }

  const rawBody = await readRequestBody(request);
  const payload = JSON.parse(rawBody || "{}");
  const activities = Array.isArray(payload.activities) ? payload.activities.slice(0, 20) : [];
  const places = Array.isArray(payload.places) ? payload.places.slice(0, 30) : [];
  const prompt = String(payload.prompt || "").trim().slice(0, 500);
  if (!prompt) {
    sendJson(response, 400, { error: "missing_prompt", message: "Prompt is required." });
    return;
  }

  const aiPayload = {
    prompt,
    user: payload.user || {},
    mapCenter: payload.mapCenter || null,
    activities,
    places
  };

  const instructions = [
    "You are MapMeet's activity-matching assistant for an HCI prototype.",
    "Recommend existing activities that fit the user's mood, social comfort, timing, language, and activity preferences.",
    "Also answer nearby place questions such as where to see flowers, find a basketball court, study, eat, or walk by recommending places from the provided places array.",
    "Only recommend activity IDs that appear in the provided activities array.",
    "Only recommend placeName values that exactly match a name or shortName in the provided places array.",
    "Only recommend places where verifiedOnNaver is true and source is naver-local. If no verified Naver place fits, say you could not verify a reliable Naver Maps place and return no placeRecommendations.",
    "Prefer low-pressure, comfort-first explanations for socially hesitant users.",
    "Use distanceKm when the user asks for nearest or nearby.",
    "Be brief. reply: max 160 characters. recommendations: max 2. placeRecommendations: max 2. each reasons array: max 2 short strings. createIdea.description and hostNote: max 120 characters.",
    "Return compact JSON only with this shape:",
    "{\"reply\":\"short friendly answer\",\"recommendations\":[{\"activityId\":\"id\",\"reasons\":[\"reason\"],\"confidence\":0.0}],\"placeRecommendations\":[{\"placeName\":\"exact place name\",\"reasons\":[\"reason\"],\"confidence\":0.0}],\"createIdea\":{\"title\":\"...\",\"place\":\"...\",\"description\":\"...\",\"category\":\"...\",\"fit\":\"...\",\"level\":\"...\",\"languages\":[\"English\"],\"vibe\":\"...\",\"hostNote\":\"...\"}}"
  ].join("\n");

  if (provider === "gemini") {
    const geminiModel = process.env.GEMINI_MODEL || "gemini-2.5-flash";
    const geminiResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(geminiModel)}:generateContent?key=${encodeURIComponent(geminiApiKey)}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        systemInstruction: {
          parts: [{ text: instructions }]
        },
        contents: [
          {
            role: "user",
            parts: [{ text: JSON.stringify(aiPayload) }]
          }
        ],
        generationConfig: {
          temperature: 0.2,
          maxOutputTokens: 1200,
          responseMimeType: "application/json"
        }
      })
    });

    const responseText = await geminiResponse.text();
    if (!geminiResponse.ok) {
      sendJson(response, 502, {
        error: "gemini_error",
        message: "Gemini request failed.",
        details: responseText.slice(0, 500)
      });
      return;
    }

    const geminiJson = JSON.parse(responseText);
    const outputText = extractGeminiText(geminiJson);
    try {
      const parsed = parseJsonModelOutput(outputText);
      sendJson(response, 200, normalizeAiResult(parsed));
    } catch (error) {
      console.warn("Gemini JSON parse failed:", error.message, outputText.slice(0, 300));
      sendJson(response, 200, buildFallbackAiResult(prompt, activities, places));
    }
    return;
  }

  const openAiModel = process.env.OPENAI_MODEL || "gpt-5.2";
  const openAiResponse = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: openAiModel,
      instructions,
      input: JSON.stringify(aiPayload),
      max_output_tokens: 900
    })
  });

  const responseText = await openAiResponse.text();
  if (!openAiResponse.ok) {
    sendJson(response, 502, {
      error: "openai_error",
      message: "OpenAI request failed.",
      details: responseText.slice(0, 500)
    });
    return;
  }

  const openAiJson = JSON.parse(responseText);
  const outputText = extractOutputText(openAiJson);
  try {
    const parsed = parseJsonModelOutput(outputText);
    sendJson(response, 200, normalizeAiResult(parsed));
  } catch (error) {
    console.warn("OpenAI JSON parse failed:", error.message, outputText.slice(0, 300));
    sendJson(response, 200, buildFallbackAiResult(prompt, activities));
  }
}

function serveStatic(request, response) {
  const url = new URL(request.url, `http://${request.headers.host || "localhost"}`);
  let requestedPath = decodeURIComponent(url.pathname);
  if (requestedPath === "/") requestedPath = "/index.html";

  const filePath = path.normalize(path.join(rootDir, requestedPath));
  if (!filePath.startsWith(rootDir) || path.basename(filePath).startsWith(".")) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      response.writeHead(404);
      response.end("Not found");
      return;
    }

    response.writeHead(200, {
      "Content-Type": mimeTypes[path.extname(filePath).toLowerCase()] || "application/octet-stream"
    });
    response.end(content);
  });
}

function serveClientConfig(response) {
  response.writeHead(200, {
    "Content-Type": "application/javascript; charset=utf-8"
  });
  response.end(`window.MAPMEET_CONFIG = ${JSON.stringify({
    naverMapClientId: process.env.NAVER_MAP_CLIENT_ID || process.env.NAVER_NCP_KEY_ID || ""
  })};`);
}

loadLocalEnv();

const server = http.createServer(async (request, response) => {
  try {
    if (request.method === "GET" && request.url?.startsWith("/unlock")) {
      handleUnlock(request, response);
      return;
    }

    if (!hasAppAccess(request)) {
      if (request.url?.startsWith("/api/")) {
        sendJson(response, 401, {
          error: "access_required",
          message: "Enter the MapMeet access code before using API features."
        });
        return;
      }
      serveAccessGate(response);
      return;
    }

    if (request.method === "POST" && request.url?.startsWith("/api/ai-match")) {
      await handleAiMatch(request, response);
      return;
    }

    if (request.method === "POST" && request.url?.startsWith("/api/place-search")) {
      await handlePlaceSearch(request, response);
      return;
    }

    if (request.method === "GET" || request.method === "HEAD") {
      if (request.url?.startsWith("/config.js")) {
        serveClientConfig(response);
        return;
      }
      serveStatic(request, response);
      return;
    }

    response.writeHead(405);
    response.end("Method not allowed");
  } catch (error) {
    sendJson(response, 500, {
      error: "server_error",
      message: error.message || "Server error."
    });
  }
});

server.listen(port, "0.0.0.0", () => {
  const geminiApiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
  const provider = process.env.AI_PROVIDER || (geminiApiKey ? "gemini" : "openai");
  console.log(`MapMeet server running at http://127.0.0.1:${port}`);
  if (provider === "gemini") {
    console.log(geminiApiKey ? `Real AI enabled with ${process.env.GEMINI_MODEL || "gemini-2.5-flash"}.` : "GEMINI_API_KEY is missing, so the frontend will use fallback recommendations.");
  } else {
    console.log(process.env.OPENAI_API_KEY ? `Real AI enabled with ${process.env.OPENAI_MODEL || "gpt-5.2"}.` : "OPENAI_API_KEY is missing, so the frontend will use fallback recommendations.");
  }
});
