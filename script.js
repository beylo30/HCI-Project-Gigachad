const categoryMeta = [
  {
    name: "All",
    icon: "✨",
    description: "Show every kind of activity",
    keywords: [],
    colors: ["#ffe2d6", "#ffd7a6"]
  },
  {
    name: "Food & Drinks",
    icon: "🧋",
    description: "Coffee, meals, and casual hangouts",
    keywords: ["food", "dinner", "lunch", "brunch", "cafe", "coffee", "restaurant", "meal", "drink"],
    colors: ["#ffd36e", "#ff9f7a"]
  },
  {
    name: "Nightlife",
    icon: "🎉",
    description: "Bars, parties, and evening plans",
    keywords: ["party", "club", "night", "bar", "concert"],
    colors: ["#f7c6ff", "#cb8dff"]
  },
  {
    name: "Outdoor & Active",
    icon: "🌿",
    description: "Walks, hiking, and movement",
    keywords: ["hike", "hiking", "walk", "football", "sports", "run", "cycle", "cycling", "picnic", "park"],
    colors: ["#c5f4d8", "#69d1ad"]
  },
  {
    name: "Sightseeing",
    icon: "📍",
    description: "Exploring the city together",
    keywords: ["tour", "museum", "palace", "explore", "landmark"],
    colors: ["#b9e7ff", "#7aa8ff"]
  },
  {
    name: "Entertainment",
    icon: "🎬",
    description: "Shows, games, and movies",
    keywords: ["movie", "game", "karaoke", "show", "cinema"],
    colors: ["#ffd1ec", "#b995ff"]
  },
  {
    name: "Shopping",
    icon: "🛍️",
    description: "Markets, stores, and browsing",
    keywords: ["shop", "shopping", "market", "store", "mall"],
    colors: ["#ffe2a6", "#ffb86b"]
  },
  {
    name: "Study",
    icon: "📖",
    description: "Study sessions and project time",
    keywords: ["study", "library", "assignment", "project", "homework", "exam", "reading"],
    colors: ["#bfe3ff", "#72c4ff"]
  },
  {
    name: "Other",
    icon: "🫶",
    description: "Something more open-ended",
    keywords: [],
    colors: ["#e7d6ff", "#ffbad6"]
  }
];

const activityLanguageOptions = [
  "English",
  "Korean",
  "Japanese",
  "Mandarin Chinese",
  "Cantonese",
  "Arabic",
  "Spanish",
  "French",
  "German",
  "Portuguese",
  "Russian",
  "Hindi",
  "Urdu",
  "Bengali",
  "Punjabi",
  "Indonesian",
  "Malay",
  "Vietnamese",
  "Thai",
  "Tagalog",
  "Italian",
  "Turkish",
  "Persian",
  "Hebrew",
  "Swahili",
  "Dutch",
  "Polish",
  "Ukrainian",
  "Greek",
  "Czech",
  "Romanian",
  "Hungarian",
  "Swedish",
  "Norwegian",
  "Danish",
  "Finnish",
  "Nepali",
  "Tamil",
  "Telugu",
  "Marathi",
  "Gujarati",
  "Kannada",
  "Malayalam",
  "Sinhala",
  "Burmese",
  "Khmer",
  "Lao",
  "Mongolian",
  "Kazakh",
  "Uzbek",
  "Afrikaans",
  "Amharic",
  "Somali",
  "Yoruba",
  "Igbo",
  "Hausa",
  "Zulu"
];

const friendProfiles = {
  You: {
    name: "You",
    age: 24,
    avatar: "◉",
    handle: "@mapmeet_you",
    mood: "Available",
    about: ["MapMeet participant", "Interested in joining activities"],
    interests: ["hiking", "music", "foodie", "study"],
    languages: "English · Korean",
    photos: ["☁️", "🌳", "🚲"]
  },
  John: {
    name: "John",
    age: 26,
    avatar: "☺",
    handle: "@john26",
    mood: "Training for a weekend hike",
    about: ["International student", "Usually responds fast", "Prefers morning outdoor plans"],
    interests: ["Hiking", "Cycling", "Foodie"],
    languages: "English · Korean",
    photos: ["⛰️", "🥾", "🚲"]
  },
  Emma: {
    name: "Emma",
    age: 24,
    avatar: "🌟",
    handle: "@emma.s",
    mood: "Looking for a relaxed cafe catch-up",
    about: ["Music lover", "Enjoys coworking in cafes", "Likes cozy places"],
    interests: ["Coffee", "Study", "Music"],
    languages: "English · Japanese",
    photos: ["☕", "🎧", "📚"]
  },
  Alex: {
    name: "Alex",
    age: 25,
    avatar: "⚡",
    handle: "@alexgo",
    mood: "Always hungry after class",
    about: ["Knows good local spots", "Walks everywhere", "Often joins last-minute plans"],
    interests: ["Foodie", "Walking", "Cafe"],
    languages: "English · Korean",
    photos: ["🍜", "🥐", "📍"]
  },
  Sarah: {
    name: "Sarah",
    age: 23,
    avatar: "🫧",
    handle: "@sarahkm",
    mood: "New on campus and trying to meet people",
    about: ["Recently joined MapMeet", "Enjoys low-pressure activities", "Often free in evenings"],
    interests: ["Study", "Coffee", "City walks"],
    languages: "English · Korean",
    photos: ["🌆", "☕", "📖"]
  }
};

const knownPlaces = [
  {
    name: "Nice Caffein Club Korea University Anam Branch",
    shortName: "Nice Caffein Club",
    branchName: "Anam",
    address: "Near Anam Station, Seongbuk-gu, Seoul",
    lat: 37.5867,
    lng: 127.0295,
    aliases: ["nice caffein club", "nice caffeine club", "anam cafe", "nice caffein club anam", "ku anam cafe"]
  },
  {
    name: "Korea University Central Library",
    shortName: "Central Library",
    branchName: "",
    address: "145 Anam-ro, Seongbuk-gu, Seoul",
    lat: 37.5896,
    lng: 127.0328,
    aliases: ["library", "central library", "korea university library"]
  },
  {
    name: "Inwangsan Trail Entrance",
    shortName: "Inwangsan Entrance",
    branchName: "",
    address: "Jongno-gu, Seoul",
    lat: 37.5928,
    lng: 126.9609,
    aliases: ["inwangsan", "inwangsan trail", "hiking entrance"]
  },
  {
    name: "Anam Station Food Street",
    shortName: "Anam Food Street",
    branchName: "",
    address: "Anam-dong 5-ga, Seongbuk-gu, Seoul",
    lat: 37.5864,
    lng: 127.0294,
    aliases: ["anam station food street", "anam food", "anam dinner"]
  },
  {
    name: "Campus Sports Field",
    shortName: "Sports Field",
    branchName: "",
    address: "Korea University sports field area",
    lat: 37.5835,
    lng: 127.0318,
    aliases: ["sports field", "football field", "campus field"]
  },
  {
    name: "Cheonggyecheon Riverside Path",
    shortName: "Cheonggyecheon",
    branchName: "",
    address: "Cheonggyecheon stream access point",
    lat: 37.5704,
    lng: 127.0071,
    aliases: ["cheonggyecheon", "riverside path", "cycling riverside"]
  },
  {
    name: "Anam-dong Park",
    shortName: "Anam Park",
    branchName: "",
    address: "Anam-dong neighborhood park",
    lat: 37.5872,
    lng: 127.03,
    aliases: ["park", "anam park", "picnic park"]
  },
  {
    name: "Korea University Cherry Blossom Walk",
    shortName: "KU Flower Walk",
    branchName: "Main campus",
    address: "Korea University main campus paths",
    lat: 37.5891,
    lng: 127.0326,
    category: "Flowers",
    tags: ["flowers", "cherry blossoms", "spring", "walk", "photo", "campus"],
    aliases: ["flowers", "flower", "cherry blossom", "cherry blossoms", "campus flowers", "see flowers"]
  },
  {
    name: "Anam-dong Park Flower Beds",
    shortName: "Anam Flower Beds",
    branchName: "",
    address: "Anam-dong Park area",
    lat: 37.5872,
    lng: 127.0300,
    category: "Flowers",
    tags: ["flowers", "park", "walk", "quiet", "photo"],
    aliases: ["flower beds", "park flowers", "anam flowers", "quiet flowers"]
  },
  {
    name: "Korea University Sports Field Basketball Court",
    shortName: "KU Basketball Court",
    branchName: "Sports field",
    address: "Korea University sports field area",
    lat: 37.5839,
    lng: 127.0316,
    category: "Sports",
    tags: ["basketball", "court", "sports", "outdoor", "active"],
    aliases: ["basketball", "basketball court", "nearest basketball court", "court", "hoops"]
  },
  {
    name: "Anam Neighborhood Outdoor Court",
    shortName: "Anam Outdoor Court",
    branchName: "",
    address: "Anam neighborhood sports area",
    lat: 37.5862,
    lng: 127.0288,
    category: "Sports",
    tags: ["basketball", "court", "sports", "near anam station"],
    aliases: ["anam basketball", "outdoor court", "nearby court", "sports court"]
  }
];

const seedActivities = [
  {
    id: "act-hike",
    icon: "⛰️",
    category: "Outdoor & Active",
    status: "present",
    host: "John",
    title: "John wants to go hiking at Inwangsan",
    shortTitle: "Hiking Inwangsan",
    place: "Inwangsan Trail Entrance",
    timeLabel: "Tomorrow · 10:00 AM",
    description: "Easy morning hike with a beginner-friendly pace. Meet near the entrance and head up together.",
    capacity: 12,
    difficulty: "Beginner-friendly",
    openness: "Newcomers welcome",
    languages: ["English", "Korean"],
    vibe: "Casual small group",
    hostNote: "New people are welcome. We will meet at the entrance first, so nobody has to arrive alone.",
    boundary: "Activity-only chat by default; add friends only if both people want to stay connected.",
    joined: 10,
    members: ["John", "Alex", "Sofia", "James", "Chris", "Maya", "Olivia"],
    coords: [37.5928, 127.0368],
    messages: [
      { name: "John", text: "Hi everyone, I made this activity for a relaxed morning hike." },
      { name: "Sofia", text: "Morning works for me. Should we bring water and snacks?" },
      { name: "Alex", text: "Yes, and maybe a light jacket because the top gets windy." }
    ]
  },
  {
    id: "act-study",
    icon: "📖",
    category: "Study",
    status: "past",
    host: "Anna",
    title: "Anna wants to study together at the library",
    shortTitle: "Study at library",
    place: "Korea University Central Library",
    timeLabel: "Yesterday · 7:00 PM",
    description: "Quiet coworking session for people who want accountability and company while studying.",
    capacity: 8,
    difficulty: "Low-pressure",
    openness: "Join silently okay",
    languages: ["English", "Korean"],
    vibe: "Quiet focus",
    hostNote: "You can join without introducing yourself to everyone. We will work quietly and take one short break.",
    boundary: "No friend request expected after the session.",
    joined: 6,
    members: ["Anna", "Liam", "Chloe", "Owen", "Lily"],
    coords: [37.5883, 127.0342],
    messages: [
      { name: "Anna", text: "I will reserve a quiet corner on the second floor." },
      { name: "Liam", text: "Perfect, I am bringing my notes and laptop." }
    ]
  },
  {
    id: "act-picnic",
    icon: "🌿",
    category: "Outdoor & Active",
    status: "present",
    host: "Lisa",
    title: "Lisa wants to have a picnic at the park",
    shortTitle: "Picnic at park",
    place: "Anam-dong Park",
    timeLabel: "Today · 4:30 PM",
    description: "Bring a snack or drink and spend an hour relaxing together after class.",
    capacity: 6,
    difficulty: "Very easy",
    openness: "First-timers welcome",
    languages: ["English"],
    vibe: "Relaxed chat",
    hostNote: "Come as you are. If you are nervous, message first and I will wave when you arrive.",
    boundary: "Stay in the activity chat only, or add friends afterward if it feels natural.",
    joined: 3,
    members: ["Lisa", "Mia", "Ryan"],
    coords: [37.5871, 127.03],
    messages: [{ name: "Lisa", text: "I found a shady spot and can bring a blanket." }]
  },
  {
    id: "act-cycle",
    icon: "🚴",
    category: "Outdoor & Active",
    status: "present",
    host: "David",
    title: "David wants to cycle around the riverside",
    shortTitle: "Cycling meetup",
    place: "Cheonggyecheon Riverside Path",
    timeLabel: "Today · 6:00 PM",
    description: "Casual cycling pace with beginner-friendly stops along the route.",
    capacity: 6,
    difficulty: "Beginner route",
    openness: "No racing",
    languages: ["English", "Korean"],
    vibe: "Active but relaxed",
    hostNote: "We will wait at each stop and keep the pace comfortable for everyone.",
    boundary: "One-time ride is completely fine.",
    joined: 5,
    members: ["David", "Zoe", "Ben", "Rachel"],
    coords: [37.5853, 127.0356],
    messages: [{ name: "David", text: "Let us keep the pace easy and regroup every few minutes." }]
  },
  {
    id: "act-dinner",
    icon: "🍱",
    category: "Food & Drinks",
    status: "present",
    host: "Daniel",
    title: "Daniel wants to eat dinner near Anam",
    shortTitle: "Dinner near Anam",
    place: "Anam Station Food Street",
    timeLabel: "Tonight · 7:30 PM",
    description: "Choose a restaurant together and make it easy for newcomers to join the table.",
    capacity: 10,
    difficulty: "Easy join",
    openness: "Open table",
    languages: ["English", "Korean", "Japanese"],
    vibe: "Food-first",
    hostNote: "You do not need to know anyone. We will decide the restaurant together in chat.",
    boundary: "Activity chat remains optional after dinner.",
    joined: 8,
    members: ["Daniel", "Ava", "Kevin", "Julia", "Nathan"],
    coords: [37.5868, 127.0387],
    messages: [{ name: "Daniel", text: "Open to Korean food or something fast and cozy." }]
  },
  {
    id: "act-football",
    icon: "🏆",
    category: "Outdoor & Active",
    status: "present",
    host: "Michael",
    title: "Michael wants to play football at the field",
    shortTitle: "Football at field",
    place: "Campus Sports Field",
    timeLabel: "Today · 5:00 PM",
    description: "Friendly game with mixed skill levels. We still need a few more players.",
    capacity: 12,
    difficulty: "Mixed skill",
    openness: "Beginners okay",
    languages: ["English", "Korean"],
    vibe: "Team play",
    hostNote: "This is casual, not competitive. We will balance teams so nobody feels out of place.",
    boundary: "No pressure to join future games.",
    joined: 7,
    members: ["Michael", "Adam", "Peter", "Jason"],
    coords: [37.5835, 127.0318],
    messages: [{ name: "Michael", text: "We need two more people for teams to feel balanced." }]
  },
  {
    id: "act-coffee",
    icon: "🧋",
    category: "Food & Drinks",
    status: "past",
    host: "Emma",
    title: "Emma wants to get coffee near campus",
    shortTitle: "Coffee near campus",
    place: "Nice Caffein Club Korea University Anam Branch",
    timeLabel: "Yesterday · 3:00 PM",
    description: "Low-pressure coffee meetup near campus with room for a quick chat before class.",
    capacity: 5,
    difficulty: "Easy conversation",
    openness: "Solo joiners welcome",
    languages: ["English", "Japanese"],
    vibe: "Small cafe table",
    hostNote: "If you are coming alone, that is exactly what this meetup is for.",
    boundary: "Short meetup; no obligation to exchange contacts.",
    joined: 4,
    members: ["Emma", "Noah", "Grace", "Ethan"],
    coords: [37.5909, 127.0289],
    messages: [
      { name: "Emma", text: "I am already at the cafe and found a big table." },
      { name: "Noah", text: "Nice, I will be there in 10 minutes." }
    ]
  },
  {
    id: "act-night-market",
    icon: "🌙",
    category: "Nightlife",
    status: "present",
    host: "Minji",
    title: "Minji wants to explore a night market together",
    shortTitle: "Night market walk",
    place: "Dongdaemun Night Market",
    timeLabel: "Tonight · 8:30 PM",
    description: "Browse food stalls, see the evening lights, and stop wherever the group finds something interesting.",
    capacity: 8,
    difficulty: "Easy evening plan",
    openness: "New people welcome",
    languages: ["English", "Korean"],
    vibe: "Lively but flexible",
    hostNote: "We will meet outside the main entrance. It is fine to leave early or join only for food.",
    boundary: "One-night plan with no expectation to continue afterward.",
    joined: 4,
    members: ["Minji", "Leo", "Hana", "Sam"],
    coords: [37.5878, 127.0408],
    messages: [{ name: "Minji", text: "Let us start with the street-food section and decide from there." }]
  },
  {
    id: "act-palace-photo",
    icon: "📸",
    category: "Sightseeing",
    status: "present",
    host: "Sofia",
    title: "Sofia wants to take photos around the palace",
    shortTitle: "Palace photo walk",
    place: "Gyeongbokgung Palace Gate",
    timeLabel: "Tomorrow · 2:00 PM",
    description: "A relaxed photo walk for phone cameras and beginners. We will explore slowly and share good viewpoints.",
    capacity: 7,
    difficulty: "Gentle walking",
    openness: "Come with any camera",
    languages: ["English", "Korean", "Spanish"],
    vibe: "Curious and creative",
    hostNote: "No photography experience is needed. I will wait by the ticket booth with a blue tote bag.",
    boundary: "Photos can be shared in the activity chat; adding friends is optional.",
    joined: 3,
    members: ["Sofia", "Mateo", "Yuna"],
    coords: [37.5938, 127.0295],
    messages: [{ name: "Sofia", text: "Cloudy weather is okay too; the palace colors still look great." }]
  },
  {
    id: "act-board-games",
    icon: "🎲",
    category: "Entertainment",
    status: "present",
    host: "Chris",
    title: "Chris wants to play beginner board games",
    shortTitle: "Board game evening",
    place: "Anam Board Game Cafe",
    timeLabel: "Tomorrow · 6:30 PM",
    description: "Learn two short games with simple rules. The group will vote before starting each round.",
    capacity: 6,
    difficulty: "Beginner games",
    openness: "Rules explained first",
    languages: ["English", "Korean"],
    vibe: "Playful small group",
    hostNote: "You can watch the first round before deciding whether to play.",
    boundary: "This is a one-session game night; future invitations are optional.",
    joined: 4,
    members: ["Chris", "Maya", "Jun", "Ella"],
    coords: [37.5899, 127.0374],
    messages: [{ name: "Chris", text: "I will bring a cooperative game and one quick card game." }]
  },
  {
    id: "act-vintage-shopping",
    icon: "🛍️",
    category: "Shopping",
    status: "present",
    host: "Ava",
    title: "Ava wants to browse vintage shops",
    shortTitle: "Vintage shop browsing",
    place: "Seongbuk Vintage Street",
    timeLabel: "Saturday · 1:00 PM",
    description: "Casual window-shopping with no pressure to buy anything. We can stop for a snack afterward.",
    capacity: 5,
    difficulty: "Easy walking",
    openness: "Browsing only is okay",
    languages: ["English", "Korean", "Japanese"],
    vibe: "Relaxed discovery",
    hostNote: "Set your own budget and skip any shop you are not interested in.",
    boundary: "Everyone can head home separately after the final shop.",
    joined: 2,
    members: ["Ava", "Rina"],
    coords: [37.5847, 127.0397],
    messages: [{ name: "Ava", text: "I made a short route with three shops close to each other." }]
  },
  {
    id: "act-study-sprint",
    icon: "💻",
    category: "Study",
    status: "present",
    host: "Liam",
    title: "Liam wants to do a focused study sprint",
    shortTitle: "Quiet study sprint",
    place: "Korea University Study Lounge",
    timeLabel: "Today · 7:00 PM",
    description: "Two focused 40-minute sessions with a short break between them. Quiet participation is encouraged.",
    capacity: 10,
    difficulty: "Bring your own task",
    openness: "Join silently okay",
    languages: ["English", "Korean"],
    vibe: "Quiet accountability",
    hostNote: "No introductions are required. Choose a seat, work quietly, and join the break only if you want.",
    boundary: "The chat will be muted after the study session.",
    joined: 6,
    members: ["Liam", "Chloe", "Owen", "Nora", "Kai", "Ivy"],
    coords: [37.5904, 127.0334],
    messages: [{ name: "Liam", text: "The first focus timer starts at 7:10, so arriving a little late is fine." }]
  },
  {
    id: "act-language-swap",
    icon: "💬",
    category: "Other",
    status: "present",
    host: "Nora",
    title: "Nora wants to host a casual language swap",
    shortTitle: "Language swap circle",
    place: "Anam Community Lounge",
    timeLabel: "Friday · 5:30 PM",
    description: "Practice short conversations in different languages using simple topic cards and small rotating groups.",
    capacity: 12,
    difficulty: "Any language level",
    openness: "Listening is welcome",
    languages: ["English", "Korean", "Mandarin Chinese", "Japanese"],
    vibe: "Friendly and flexible",
    hostNote: "You can participate by listening first. Mistakes and mixed languages are completely okay.",
    boundary: "Sharing contact details after the activity is always optional.",
    joined: 5,
    members: ["Nora", "Ken", "Mei", "Jisoo", "Amir"],
    coords: [37.5861, 127.0332],
    messages: [{ name: "Nora", text: "I will bring easy conversation cards so nobody has to think of a topic alone." }]
  }
];

const state = {
  activities: structuredClone(seedActivities),
  filteredCategory: "All",
  selectedActivityId: "act-hike",
  currentView: "map",
  previousView: "map",
  profileName: "John",
  currentMessageType: "activity",
  currentChatFilter: "present",
  selectedPlaceLocation: null,
  placeCandidates: [],
  placeLookupTimer: null,
  map: null,
  mapProvider: "",
  mapMarkers: [],
  userMarker: null,
  userAccuracyCircle: null,
  aiPlaceMarker: null,
  aiLivePlaces: [],
  aiPlaceTargets: {},
  joinedActivities: new Set(),
  leftActivities: new Set(),
  deletedChatIds: new Set(),
  friends: new Set(["John", "Emma", "Alex"]),
  activeChatId: "act-hike",
  notifications: [
    { id: "note-john", type: "accepted", name: "John", text: "John accepted your friend request", time: "10 minutes ago" },
    { id: "note-sarah", type: "pending", name: "Sarah", text: "Sarah sent you a friend request", time: "1 hour ago" }
  ],
  selectedCategory: "Other",
  currentModal: null,
  pendingProfilePhoto: "",
  pendingDeletePhotoIndex: null,
  pendingDeclineNotificationId: null,
  pendingLeaveActivityId: null,
  pendingRemoveFriendName: null,
  pendingDeleteChatId: null,
  photoViewerReturnToGallery: false,
  authMode: "login",
  toastTimer: null,
  aiCreateIdeas: {},
  aiMatching: false,
  createStep: 0,
  aiMessages: [
    { sender: "bot", text: "Hi, I can recommend existing activities or suggest a new one based on your mood and timing." }
  ]
};

const viewHistory = [];

function qs(selector) {
  return document.querySelector(selector);
}

function qsa(selector) {
  return Array.from(document.querySelectorAll(selector));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderAvatarContent(value, altText = "Profile picture") {
  if (typeof value === "string" && value.startsWith("data:image")) {
    return `<img class="avatar-image" src="${value}" alt="${escapeHtml(altText)}" />`;
  }
  return escapeHtml(value || "");
}

function renderOwnAvatar() {
  const profile = friendProfiles.You;
  qs("#topProfileButton").innerHTML = renderAvatarContent(profile.avatar, "Your profile picture");
}

function formatProfileHandle(value) {
  const cleaned = String(value || "")
    .trim()
    .replace(/^@+/, "")
    .replace(/\s+/g, "_")
    .replace(/[^a-zA-Z0-9._]/g, "");
  return `@${cleaned || "mapmeet_you"}`;
}

function setSelectValue(selector, value, fallback) {
  const select = qs(selector);
  const values = Array.from(select.options).map(option => option.value);
  select.value = values.includes(value) ? value : fallback;
}

function parseLanguageText(value) {
  return String(value || "")
    .replaceAll(String.fromCharCode(183), ",")
    .split(/[,/|]+/)
    .map(language => language.trim())
    .filter(Boolean);
}

function getCategory(name) {
  return categoryMeta.find(category => category.name === name) || categoryMeta[categoryMeta.length - 1];
}

function getActivityById(activityId) {
  return state.activities.find(activity => activity.id === activityId);
}

function getPlaceKey(place) {
  return [
    place.source || "mapmeet",
    place.name || "",
    place.address || "",
    Number(place.lat).toFixed(7),
    Number(place.lng).toFixed(7)
  ].join("|");
}

function getAiPlaceTarget(key) {
  if (state.aiPlaceTargets[key]) return state.aiPlaceTargets[key];
  return [...state.aiLivePlaces, ...knownPlaces].find(place => getPlaceKey(place) === key);
}

function getOpenActivities() {
  return state.activities.filter(activity => {
    if (activity.status !== "present") return false;
    if (state.filteredCategory === "All") return true;
    return activity.category === state.filteredCategory;
  });
}

function showToast(message, duration = 2200) {
  const toast = qs("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(state.toastTimer);
  state.toastTimer = setTimeout(() => toast.classList.remove("show"), duration);
}

function enterApp(mode) {
  qs("#authScreen").classList.add("hidden");
  showToast(mode === "signup" ? "Welcome to MapMeet." : "Logged in.");
  setTimeout(refreshMapSize, 120);
}

function setAuthMode(mode) {
  state.authMode = mode;
  qsa(".auth-tab").forEach(tab => tab.classList.toggle("active", tab.dataset.authMode === mode));
  qs("#authNameField").classList.toggle("hidden", mode !== "signup");
  qs("#authSubmitButton").textContent = mode === "signup" ? "CREATE ACCOUNT" : "LOGIN";
  qs("#authPasswordInput").autocomplete = mode === "signup" ? "new-password" : "current-password";
  qs("#authError").classList.add("hidden");
}

function handleAuthSubmit(event) {
  event.preventDefault();
  const name = qs("#authNameInput").value.trim();
  const email = qs("#authEmailInput").value.trim();
  const password = qs("#authPasswordInput").value.trim();
  const error = qs("#authError");

  if (state.authMode === "signup" && !name) {
    error.textContent = "Add your name to create an account.";
    error.classList.remove("hidden");
    return;
  }
  if (!email || !email.includes("@")) {
    error.textContent = "Enter a valid email address.";
    error.classList.remove("hidden");
    return;
  }
  if (password.length < 6) {
    error.textContent = "Password must be at least 6 characters.";
    error.classList.remove("hidden");
    return;
  }

  if (state.authMode === "signup") {
    friendProfiles.You.name = name;
    friendProfiles.You.handle = `@${name.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "") || "mapmeet_you"}`;
  }

  enterApp(state.authMode);
}

function openView(viewName, keepHistory = true) {
  if (state.currentView === viewName) return;
  if (keepHistory) {
    if (viewHistory[viewHistory.length - 1] !== state.currentView) {
      viewHistory.push(state.currentView);
    }
    state.previousView = state.currentView;
  }
  state.currentView = viewName;
  qsa(".view").forEach(view => view.classList.toggle("view-active", view.dataset.view === viewName));
  qsa(".nav-button").forEach(button => {
    const isMap = button.dataset.nav === "map" && viewName === "map";
    const isMessages = button.dataset.nav === "messages" && viewName === "messages";
    button.classList.toggle("active", isMap || isMessages);
  });
  if (viewName === "messages") renderConversationList();
  if (viewName === "chat") renderChat();
  if (viewName === "map") {
    setTimeout(refreshMapSize, 220);
  }
}

function returnToMapHome() {
  qs("#activitySheet").classList.add("hidden");
  state.selectedActivityId = null;
  openView("map");
  setTimeout(refreshMapSize, 120);
}

function switchView(viewName) {
  state.currentView = viewName;
  qsa(".view").forEach(view => view.classList.toggle("view-active", view.dataset.view === viewName));
  qsa(".nav-button").forEach(button => {
    const isMap = button.dataset.nav === "map" && viewName === "map";
    const isMessages = button.dataset.nav === "messages" && viewName === "messages";
    button.classList.toggle("active", isMap || isMessages);
  });
  if (viewName === "messages") renderConversationList();
  if (viewName === "chat") renderChat();
  if (viewName === "map") setTimeout(refreshMapSize, 220);
}

function goBack() {
  if (state.currentModal) {
    closeModal(state.currentModal);
    return;
  }
  if (state.currentView === "messages") {
    viewHistory.length = 0;
    switchView("map");
    return;
  }
  if (viewHistory.length > 1) {
    const previous = viewHistory.pop();
    switchView(previous);
  } else if (viewHistory.length === 1) {
    const previous = viewHistory.pop();
    switchView(previous);
  } else {
    switchView("map");
  }
}

function openModal(modalId) {
  qs(`#${modalId}`).classList.add("show");
  qs(`#${modalId}`).setAttribute("aria-hidden", "false");
  state.currentModal = modalId;
  if (modalId === "createModal") setCreateStep(state.createStep || 0);
}

function closeModal(modalId) {
  qs(`#${modalId}`).classList.remove("show");
  qs(`#${modalId}`).setAttribute("aria-hidden", "true");
  if (state.currentModal === modalId) state.currentModal = null;
}

function renderMapStats() {
  const openCount = state.activities.filter(activity => activity.status === "present").length;
  const joinedCount = state.activities.filter(activity => activity.status === "present" && activity.members.includes("You")).length;
  const friendCount = state.friends.size;

  qs("#mapStats").innerHTML = [
    { value: openCount, label: "Open activities", type: "open" },
    { value: joinedCount, label: "Joined by you", type: "joined" },
    { value: friendCount, label: "Friends nearby", type: "friends" }
  ].map(stat => `
    <button class="stat-card" type="button" data-map-stat="${stat.type}" aria-label="Show ${stat.label.toLowerCase()}">
      <strong>${stat.value}</strong>
      <span>${stat.label}</span>
    </button>
  `).join("");
}

function renderStatActivityCards(activities, emptyText) {
  if (!activities.length) {
    return `<div class="empty-state">${emptyText}</div>`;
  }

  return activities.map(activity => {
    const joinedNames = (activity.members || []).slice(0, 4).join(", ");
    const extraCount = Math.max((activity.members || []).length - 4, 0);
    return `
      <button class="stat-detail-card" type="button" data-stat-activity="${activity.id}">
        <strong>${escapeHtml(activity.shortTitle || activity.title)}</strong>
        <span>${escapeHtml(activity.host)} · ${escapeHtml(activity.timeLabel)} · ${escapeHtml(activity.place)}</span>
        <small>${escapeHtml(joinedNames)}${extraCount ? `, +${extraCount} more` : ""}</small>
      </button>
    `;
  }).join("");
}

function renderStatFriendCards() {
  const friends = Array.from(state.friends).map(name => [name, friendProfiles[name]]).filter(([, profile]) => profile);
  if (!friends.length) {
    return `<div class="empty-state">No friends nearby yet.</div>`;
  }

  return friends.map(([name, profile]) => `
    <button class="stat-detail-card friend-stat-card" type="button" data-stat-friend="${escapeHtml(name)}">
      <span class="friend-avatar">${renderAvatarContent(profile.avatar || name.charAt(0), `${profile.name || name} profile picture`)}</span>
      <span>
        <strong>${escapeHtml(profile.name || name)}</strong>
        <small>${escapeHtml(profile.mood || "Nearby")} · ${escapeHtml(profile.languages || "Languages not set")}</small>
      </span>
    </button>
  `).join("");
}

function openMapStat(type) {
  const titles = {
    open: ["Open activities", "Tap one to see what it is"],
    joined: ["Joined by you", "Activities where you are inside"],
    friends: ["Friends nearby", "Tap a person to see who"]
  };
  const [title, eyebrow] = titles[type] || titles.open;

  qs("#mapStatTitle").textContent = title;
  qs("#mapStatEyebrow").textContent = eyebrow;
  if (type === "joined") {
    qs("#mapStatList").innerHTML = renderStatActivityCards(
      state.activities.filter(activity => activity.status === "present" && activity.members.includes("You")),
      "You have not joined any activities yet."
    );
  } else if (type === "friends") {
    qs("#mapStatList").innerHTML = renderStatFriendCards();
  } else {
    qs("#mapStatList").innerHTML = renderStatActivityCards(
      state.activities.filter(activity => activity.status === "present"),
      "No open activities right now."
    );
  }
  openModal("mapStatModal");
}

function openCategoryActivityList(categoryName) {
  const activities = state.activities.filter(activity => {
    if (activity.status !== "present") return false;
    if (categoryName === "All") return true;
    return activity.category === categoryName;
  });

  qs("#mapStatTitle").textContent = categoryName === "All" ? "All open activities" : categoryName;
  qs("#mapStatEyebrow").textContent = "Tap one activity to see details";
  qs("#mapStatList").innerHTML = renderStatActivityCards(
    activities,
    `No open activities under ${categoryName} right now.`
  );
  openModal("mapStatModal");
}

function renderCategoryStrip() {
  qs("#categoryStrip").innerHTML = categoryMeta.map((category, index) => `
    ${index === 3 ? '<span class="category-break" aria-hidden="true"></span>' : ""}
    <button class="filter-chip ${index < 3 ? "category-primary" : "category-bubble"} ${state.filteredCategory === category.name ? "active" : ""}" type="button" data-filter-category="${category.name}">
      ${category.icon} ${category.name}
    </button>
  `).join("");
}

function getActivityMarkerHtml(activity) {
  const category = getCategory(activity.category);
  return `<div class="map-activity-marker" style="--marker-start:${category.colors[0]}; --marker-end:${category.colors[1]};" title="${escapeHtml(category.name)}">${category.icon}</div>`;
}

function createMarkerIcon(activity) {
  return L.divIcon({
    className: "",
    html: getActivityMarkerHtml(activity),
    iconSize: [52, 52],
    iconAnchor: [26, 26]
  });
}

function setMapCenter(coords, zoom = 15) {
  if (!state.map) return;
  if (state.mapProvider === "naver") {
    state.map.setCenter(new naver.maps.LatLng(coords[0], coords[1]));
    state.map.setZoom(zoom);
    return;
  }
  state.map.setView(coords, zoom);
}

function getMapCenterCoordinates() {
  if (!state.map) return { lat: 37.5894, lng: 127.0325 };
  if (state.mapProvider === "naver") {
    const center = state.map.getCenter();
    return { lat: center.lat(), lng: center.lng() };
  }
  const center = state.map.getCenter();
  return { lat: center.lat, lng: center.lng };
}

function refreshMapSize() {
  if (!state.map) return;
  if (state.mapProvider === "naver") {
    naver.maps.Event.trigger(state.map, "resize");
    return;
  }
  state.map.invalidateSize();
}

function loadNaverMapScript(clientId) {
  return new Promise((resolve, reject) => {
    if (window.naver?.maps?.Map) {
      resolve();
      return;
    }

    const callbackName = `mapmeetNaverReady${Date.now()}`;
    const script = document.createElement("script");
    window[callbackName] = () => {
      delete window[callbackName];
      resolve();
    };
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${encodeURIComponent(clientId)}&language=en&callback=${callbackName}`;
    script.async = true;
    script.onerror = () => {
      delete window[callbackName];
      reject(new Error("Naver Maps script failed to load."));
    };
    document.head.appendChild(script);
  });
}

function initLeafletMap() {
  state.map = L.map("liveMap", { zoomControl: false, attributionControl: false }).setView([37.5894, 127.0325], 15);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(state.map);
  state.mapProvider = "leaflet";
  qs("#mapProviderBadge").textContent = "OpenStreetMap";
  renderMapMarkers();
}

async function initMap() {
  const naverClientId = window.MAPMEET_CONFIG?.naverMapClientId;
  if (naverClientId) {
    try {
      await loadNaverMapScript(naverClientId);
      state.mapProvider = "naver";
      state.map = new naver.maps.Map("liveMap", {
        center: new naver.maps.LatLng(37.5894, 127.0325),
        zoom: 15,
        zoomControl: false,
        mapDataControl: false,
        scaleControl: false
      });
      qs("#mapProviderBadge").textContent = "Naver Map";
      renderMapMarkers();
      setTimeout(() => {
        refreshMapSize();
        setMapCenter([37.5894, 127.0325], 15);
      }, 250);
      return;
    } catch (error) {
      console.warn(error);
      qs("#mapProviderBadge").textContent = "Naver unavailable";
    }
  }

  initLeafletMap();
}

function clearMapMarker(marker) {
  if (state.mapProvider === "naver") {
    marker.setMap(null);
  } else {
    marker.remove();
  }
}

function createActivityMarker(activity) {
  if (state.mapProvider === "naver") {
    const marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(activity.coords[0], activity.coords[1]),
      map: state.map,
      icon: {
        content: getActivityMarkerHtml(activity),
        size: new naver.maps.Size(52, 52),
        anchor: new naver.maps.Point(26, 26)
      }
    });
    naver.maps.Event.addListener(marker, "click", () => showActivity(activity.id, true));
    return marker;
  }

  const marker = L.marker(activity.coords, { icon: createMarkerIcon(activity) }).addTo(state.map);
  marker.on("click", () => showActivity(activity.id, true));
  return marker;
}

function getPlaceMarkerHtml(place) {
  const icon = place.category === "Sports" ? "🏀" : place.category === "Flowers" ? "🌸" : "📍";
  return `<div class="map-place-marker">${icon}</div>`;
}

function clearMarker(marker) {
  if (!marker) return;
  if (state.mapProvider === "naver") {
    marker.setMap(null);
  } else {
    marker.remove();
  }
}

function showAiPlaceOnMap(placeKey) {
  const place = getAiPlaceTarget(placeKey);
  if (!place) {
    showToast("Place is not available on the map yet.");
    return;
  }

  openView("map");
  qs("#activitySheet").classList.add("hidden");
  clearMarker(state.aiPlaceMarker);

  if (state.mapProvider === "naver") {
    state.aiPlaceMarker = new naver.maps.Marker({
      position: new naver.maps.LatLng(place.lat, place.lng),
      map: state.map,
      icon: {
        content: getPlaceMarkerHtml(place),
        size: new naver.maps.Size(42, 42),
        anchor: new naver.maps.Point(21, 21)
      }
    });
  } else {
    const icon = L.divIcon({
      className: "",
      html: getPlaceMarkerHtml(place),
      iconSize: [42, 42],
      iconAnchor: [21, 21]
    });
    state.aiPlaceMarker = L.marker([place.lat, place.lng], { icon }).addTo(state.map);
  }

  const centerOnPlace = () => {
    refreshMapSize();
    setMapCenter([Number(place.lat), Number(place.lng)], 17);
  };
  centerOnPlace();
  requestAnimationFrame(() => requestAnimationFrame(centerOnPlace));
  setTimeout(centerOnPlace, 350);

  showToast(`Showing ${place.shortName || place.name} on the map.`, 4000);
}

function createUserMarker(latitude, longitude) {
  if (state.mapProvider === "naver") {
    return new naver.maps.Marker({
      position: new naver.maps.LatLng(latitude, longitude),
      map: state.map,
      icon: {
        content: "<div class='map-user-marker'></div>",
        size: new naver.maps.Size(22, 22),
        anchor: new naver.maps.Point(11, 11)
      }
    });
  }

  const userIcon = L.divIcon({
    className: "",
    html: "<div class='map-user-marker'></div>",
    iconSize: [22, 22],
    iconAnchor: [11, 11]
  });

  return L.marker([latitude, longitude], { icon: userIcon }).addTo(state.map);
}

function setMarkerPosition(marker, latitude, longitude) {
  if (state.mapProvider === "naver") {
    marker.setPosition(new naver.maps.LatLng(latitude, longitude));
  } else {
    marker.setLatLng([latitude, longitude]);
  }
}

function createAccuracyCircle(latitude, longitude, accuracy) {
  if (state.mapProvider === "naver") {
    return new naver.maps.Circle({
      map: state.map,
      center: new naver.maps.LatLng(latitude, longitude),
      radius: accuracy,
      strokeColor: "#2563eb",
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: "#2563eb",
      fillOpacity: 0.1
    });
  }

  return L.circle([latitude, longitude], {
    radius: accuracy,
    color: "#2563eb",
    fillColor: "#2563eb",
    fillOpacity: 0.1,
    weight: 1
  }).addTo(state.map);
}

function updateAccuracyCircle(circle, latitude, longitude, accuracy) {
  if (state.mapProvider === "naver") {
    circle.setCenter(new naver.maps.LatLng(latitude, longitude));
    circle.setRadius(accuracy);
  } else {
    circle.setLatLng([latitude, longitude]);
    circle.setRadius(accuracy);
  }
}

function renderMapMarkers() {
  state.mapMarkers.forEach(clearMapMarker);
  state.mapMarkers = [];
  if (!state.map) return;

  getOpenActivities().forEach(activity => {
    state.mapMarkers.push(createActivityMarker(activity));
  });
}

function showActivity(activityId, panToMarker = false) {
  state.selectedActivityId = activityId;
  const activity = getActivityById(activityId);
  if (!activity) return;
  qs("#activitySheet").classList.remove("hidden");

  const category = getCategory(activity.category);
  qs("#sheetIcon").textContent = activity.icon;
  qs("#sheetCategory").textContent = activity.category;
  qs("#sheetTitle").textContent = activity.title;
  qs("#sheetTime").textContent = activity.timeLabel;
  qs("#sheetPlace").textContent = activity.place;
  qs("#sheetDescription").textContent = activity.description;
  const remainingSpots = Math.max((activity.capacity || activity.joined) - activity.joined, 0);
  qs("#sheetJoined").textContent = `${activity.joined}/${activity.capacity || activity.joined} joined · ${remainingSpots} ${remainingSpots === 1 ? "spot" : "spots"} left`;
  qs("#sheetIcon").style.background = `linear-gradient(145deg, ${category.colors[0]}, ${category.colors[1]})`;
  qs("#hostNote").textContent = `"${activity.hostNote || "New people are welcome to join this activity."}"`;
  qs("#comfortPanel").innerHTML = [
    { label: "Fit", value: activity.openness || "Open to join" },
    { label: "Level", value: activity.difficulty || "Beginner-friendly" },
    { label: "Language", value: (activity.languages || ["English"]).join(" / ") },
    { label: "Vibe", value: activity.vibe || "Casual" }
  ].map(item => `
    <div class="comfort-item">
      <strong>${item.label}</strong>
      <span>${item.value}</span>
    </div>
  `).join("");

  const members = activity.members.includes("You")
    ? ["You", ...activity.members.filter(member => member !== "You")]
    : activity.members;
  const visibleMembers = members.slice(0, 5);
  const remainingCount = members.length - visibleMembers.length;
  qs("#memberRow").innerHTML = visibleMembers.map(member => `
    <button class="member-pill" type="button" data-open-profile="${member}">
      <span class="member-avatar">${renderAvatarContent(friendProfiles[member]?.avatar || member.charAt(0), `${member} profile picture`)}</span>
      ${member}
    </button>
  `).join("") + (remainingCount > 0 ? `<span class="member-pill">+${remainingCount} more</span>` : "");

  const joinButton = qs("#joinActivityBtn");
  const hasJoined = activity.members.includes("You");
  joinButton.textContent = hasJoined ? "Open Chat" : "Join Activity";
  joinButton.classList.remove("ghost");

  if (panToMarker) {
    setMapCenter(activity.coords, activity.status === "present" ? 16 : 15);
  }
}

function updateActivityInfoModal() {
  const activity = getActivityById(state.selectedActivityId);
  if (!activity) return;
  qs("#activityInfoTitle").textContent = activity.shortTitle;
  qs("#activityInfoWhere").textContent = activity.place;
  qs("#activityInfoTime").textContent = activity.timeLabel;
  qs("#activityInfoDescription").textContent = activity.description;
  qs("#activityInfoComfort").innerHTML = [
    activity.openness,
    activity.difficulty,
    activity.vibe,
    ...(activity.languages || []).map(language => `Speaks ${language}`)
  ].filter(Boolean).map(item => `<span class="filter-chip">${item}</span>`).join("");
  qs("#activityInfoBoundary").textContent = activity.boundary || "Activity-only chat by default, with friendship optional after the meetup.";
  const canLeaveFromChat = state.currentView === "chat" && activity.status === "present";
  qs("#activityInfoLeaveBtn").classList.toggle("hidden", !canLeaveFromChat);
  const canDeletePastChat = state.currentView === "chat" && activity.status === "past";
  qs("#activityInfoDeleteChatBtn").classList.toggle("hidden", !canDeletePastChat);
}

function renderFriendList() {
  const friends = Array.from(state.friends).filter(name => friendProfiles[name]);
  if (!friends.length) {
    qs("#friendList").innerHTML = `<div class="empty-state">No friends yet.</div>`;
    return;
  }
  qs("#friendList").innerHTML = friends.map(name => {
    const friend = friendProfiles[name];
    return `
      <article class="friend-card">
        <button class="friend-avatar" type="button" data-open-profile="${name}">${renderAvatarContent(friend.avatar, `${friend.name} profile picture`)}</button>
        <div class="friend-content">
          <strong>${friend.name}</strong>
          <span>${friend.interests.join(" · ")}</span>
        </div>
        <div class="friend-actions">
          <button class="mini-button friend-message-button" type="button" data-start-direct-chat="${name}">Message</button>
          <button class="friend-settings-button" type="button" data-action="request-remove-friend" data-friend-name="${escapeHtml(name)}" aria-label="Remove ${escapeHtml(name)} from friends" title="Remove friend">🗑️</button>
        </div>
      </article>
    `;
  }).join("");
}

function renderNotifications() {
  const pendingCount = state.notifications.filter(notification => notification.type === "pending").length;
  qs("#notificationBadge").textContent = String(pendingCount);
  qs("#notificationBadge").classList.toggle("hidden", pendingCount === 0);
  qs("#notificationSummary").textContent = pendingCount > 0
    ? `${pendingCount} request${pendingCount > 1 ? "s need" : " needs"} your attention`
    : "You are all caught up.";

  qs("#notificationList").innerHTML = state.notifications.map(notification => {
    const avatar = friendProfiles[notification.name]?.avatar || "•";
    const actions = notification.type === "pending"
      ? `
        <div class="notification-actions">
          <button class="mini-button" type="button" data-notification-action="decline" data-notification-id="${notification.id}">Decline</button>
          <button class="mini-button accept" type="button" data-notification-action="accept" data-notification-id="${notification.id}">Accept</button>
        </div>
      `
      : `
        <div class="notification-actions">
          <button class="mini-button" type="button" data-start-direct-chat="${notification.name}">Message</button>
        </div>
      `;

    return `
      <article class="notification-card">
        <div class="notification-avatar">${renderAvatarContent(avatar, `${notification.name} profile picture`)}</div>
        <div class="notification-content">
          <strong>${notification.text}</strong>
          <span>${notification.time}</span>
        </div>
        ${actions}
      </article>
    `;
  }).join("");

  qs("#notificationEmpty").classList.toggle("hidden", state.notifications.length > 0);
}

function renderProfilePhotos(profile, isOwnProfile) {
  const photos = profile.photos?.length ? profile.photos : ["＋", "＋", "＋"];
  const hasMorePhotos = photos.length > 6;
  const visiblePhotos = hasMorePhotos ? photos.slice(0, 5) : photos.slice(0, 6);
  const hiddenCount = Math.max(photos.length - visiblePhotos.length, 0);
  qs("#profilePhotos").innerHTML = visiblePhotos.map((photo, index) => {
    const photoAction = isOwnProfile ? `button type="button" data-select-photo="${index}" aria-label="Open photo options"` : `div`;
    if (typeof photo === "string" && photo.startsWith("data:image")) {
      return `<${photoAction} class="photo-box"><img src="${photo}" alt="Profile photo" /></${isOwnProfile ? "button" : "div"}>`;
    }
    return `<${photoAction} class="photo-box">${escapeHtml(photo)}</${isOwnProfile ? "button" : "div"}>`;
  }).join("") + (hasMorePhotos ? `
    <button class="photo-box photo-more-button" type="button" data-action="show-more-photos">
      +${hiddenCount}<span>more</span>
    </button>
  ` : "");
  qs("#profilePhotoUploadLabel").classList.toggle("hidden", !isOwnProfile);
}

function openPhotoViewer(index) {
  const photo = friendProfiles.You.photos[index];
  if (!photo) return;
  state.pendingDeletePhotoIndex = index;
  state.photoViewerReturnToGallery = state.currentModal === "photoGalleryModal";
  closeModal("photoGalleryModal");
  const image = qs("#photoViewerImage");
  const emoji = qs("#photoViewerEmoji");
  if (typeof photo === "string" && photo.startsWith("data:image")) {
    image.src = photo;
    image.classList.remove("hidden");
    emoji.classList.add("hidden");
    emoji.textContent = "";
  } else {
    image.removeAttribute("src");
    image.classList.add("hidden");
    emoji.classList.remove("hidden");
    emoji.textContent = photo;
  }
  openModal("photoViewerModal");
}

function openPhotoDeleteConfirm(index = state.pendingDeletePhotoIndex) {
  const photo = friendProfiles.You.photos[index];
  if (!photo) return;
  state.pendingDeletePhotoIndex = index;
  const preview = qs("#photoDeletePreview");
  const emojiPreview = qs("#photoDeleteEmojiPreview");
  if (typeof photo === "string" && photo.startsWith("data:image")) {
    preview.src = photo;
    preview.classList.remove("hidden");
    emojiPreview.classList.add("hidden");
    emojiPreview.textContent = "";
    preview.alt = "Photo selected for deletion";
  } else {
    preview.removeAttribute("src");
    preview.classList.add("hidden");
    emojiPreview.classList.remove("hidden");
    emojiPreview.textContent = photo;
    preview.alt = photo;
  }
  closeModal("photoViewerModal");
  openModal("photoDeleteModal");
}

function confirmProfilePhotoDelete() {
  if (state.pendingDeletePhotoIndex === null) return;
  friendProfiles.You.photos.splice(state.pendingDeletePhotoIndex, 1);
  state.pendingDeletePhotoIndex = null;
  closeModal("photoDeleteModal");
  renderProfilePhotos(friendProfiles.You, true);
  showToast("Photo deleted.");
}

function cancelProfilePhotoDelete() {
  state.pendingDeletePhotoIndex = null;
  qs("#photoDeletePreview").removeAttribute("src");
  qs("#photoDeleteEmojiPreview").textContent = "";
  closeModal("photoDeleteModal");
}

function closePhotoViewer() {
  qs("#photoViewerImage").removeAttribute("src");
  qs("#photoViewerEmoji").textContent = "";
  closeModal("photoViewerModal");
  if (state.photoViewerReturnToGallery) {
    state.photoViewerReturnToGallery = false;
    showMorePhotos();
  }
}

function showMorePhotos() {
  const photos = friendProfiles.You.photos || [];
  qs("#photoGalleryGrid").innerHTML = photos.map((photo, index) => {
    const content = typeof photo === "string" && photo.startsWith("data:image")
      ? `<img src="${photo}" alt="Profile photo ${index + 1}" />`
      : `<span>${escapeHtml(photo)}</span>`;
    return `<button class="photo-box gallery-photo-box" type="button" data-select-photo="${index}">${content}</button>`;
  }).join("");
  openModal("photoGalleryModal");
}

function openProfile(name) {
  state.profileName = name;
  const profile = friendProfiles[name] || {
    name,
    age: 24,
    avatar: name.charAt(0),
    handle: `@${name.toLowerCase()}`,
    mood: "Open to meeting new people",
    about: ["Active on MapMeet", "Likes social plans"],
    interests: ["Meetups"],
    languages: "English",
    photos: ["✨", "📍", "💬"]
  };

  const isOwnProfile = name === "You";
  if (isOwnProfile) renderOwnAvatar();
  qs("#profileHeaderTitle").textContent = profile.name;
  qs("#profileAvatar").innerHTML = renderAvatarContent(profile.avatar, `${profile.name} profile picture`);
  qs("#profileName").textContent = `${profile.name}, ${profile.age}`;
  qs("#profileHandle").textContent = profile.handle;
  qs("#profileMood").textContent = profile.mood;
  qs("#profileAbout").innerHTML = profile.about.map(item => `<li>${escapeHtml(item)}</li>`).join("");
  qs("#profileInterests").innerHTML = profile.interests.map(interest => `<span class="filter-chip">${escapeHtml(interest)}</span>`).join("");
  qs("#profileLanguage").textContent = `🌐 ${profile.languages}`;
  renderProfilePhotos(profile, isOwnProfile);
  qs("#profilePrimaryAction").textContent = isOwnProfile ? "Edit Preferences" : "Add Friend";
  qs("#profilePrimaryAction").disabled = false;
  qs("#profilePrimaryAction").dataset.action = isOwnProfile ? "edit-preferences" : "add-friend";
  openView("profile");
}

function openPreferencesModal() {
  const profile = friendProfiles.You;
  qs("#preferenceNameInput").value = profile.name;
  qs("#preferenceHandleInput").value = profile.handle;
  setSelectValue("#preferenceMoodInput", profile.mood, "Available");
  qs("#preferenceAboutInput").value = profile.about.join("\n");
  qs("#preferenceInterestsInput").value = profile.interests.join(", ");
  qs("#preferenceLanguageSearch").value = "";
  setSelectedProfileLanguages(parseLanguageText(profile.languages));
  openModal("preferencesModal");
}

function savePreferences(event) {
  event.preventDefault();
  const name = qs("#preferenceNameInput").value.trim() || "You";
  const handle = qs("#preferenceHandleInput").value.trim();
  const selectedLanguages = getSelectedProfileLanguages();
  friendProfiles.You.name = name;
  friendProfiles.You.handle = formatProfileHandle(handle || name);
  friendProfiles.You.mood = qs("#preferenceMoodInput").value || "Available";
  friendProfiles.You.about = qs("#preferenceAboutInput").value
    .split("\n")
    .map(item => item.trim())
    .filter(Boolean);
  if (!friendProfiles.You.about.length) {
    friendProfiles.You.about = ["MapMeet participant", "Interested in joining activities"];
  }
  friendProfiles.You.interests = qs("#preferenceInterestsInput").value
    .split(",")
    .map(item => item.trim())
    .filter(Boolean);
  if (!friendProfiles.You.interests.length) {
    friendProfiles.You.interests = ["hiking", "music", "foodie", "study"];
  }
  friendProfiles.You.languages = selectedLanguages.length ? selectedLanguages.join(" · ") : "English";
  closeModal("preferencesModal");
  openProfile("You");
  showToast("Preferences updated.");
}

function handleProfilePhotoUpload(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    state.pendingProfilePhoto = reader.result;
    qs("#photoConfirmPreview").src = reader.result;
    openModal("photoConfirmModal");
  });
  reader.readAsDataURL(file);
  event.target.value = "";
}

function confirmProfilePhotoUpload() {
  if (!state.pendingProfilePhoto) return;
  friendProfiles.You.avatar = state.pendingProfilePhoto;
  state.pendingProfilePhoto = "";
  closeModal("photoConfirmModal");
  qs("#profileAvatar").innerHTML = renderAvatarContent(friendProfiles.You.avatar, "Your profile picture");
  renderOwnAvatar();
  renderProfilePhotos(friendProfiles.You, true);
  showToast("Profile picture updated.");
}

function cancelProfilePhotoUpload() {
  state.pendingProfilePhoto = "";
  qs("#photoConfirmPreview").removeAttribute("src");
  closeModal("photoConfirmModal");
}

function createDirectChat(name) {
  const existing = state.activities.find(activity => activity.status === "friend" && activity.shortTitle === name);
  if (existing) return existing.id;

  const profile = friendProfiles[name] || { avatar: name.charAt(0) };
  const directChat = {
    id: `friend-${name.toLowerCase()}`,
    icon: profile.avatar,
    category: "Other",
    status: "friend",
    host: name,
    title: `Chat with ${name}`,
    shortTitle: name,
    place: "Direct message",
    timeLabel: "Now",
    description: `Direct chat with ${name}.`,
    joined: 2,
    capacity: 2,
    difficulty: "Direct message",
    openness: "Friend chat",
    languages: [friendProfiles[name]?.languages?.split(" · ")[0] || "English"],
    vibe: "Private",
    hostNote: `This is a direct chat with ${name}.`,
    boundary: "Direct messages remain separate from activity chats.",
    members: [name, "You"],
    coords: (() => {
      const center = getMapCenterCoordinates();
      return [center.lat, center.lng];
    })(),
    messages: [
      { name, text: "Hi! Nice to connect on MapMeet." },
      { name: "You", text: `Hi ${name}! Glad we connected.` }
    ]
  };
  state.activities.push(directChat);
  return directChat.id;
}

function openDirectChat(name) {
  state.activeChatId = createDirectChat(name);
  qs("#activitySheet").classList.add("hidden");
  openView("chat");
}

function renderConversationList() {
  const cards = state.activities.filter(activity => {
    if (state.currentMessageType === "friends") return activity.status === "friend";
    return activity.status === state.currentChatFilter && !state.leftActivities.has(activity.id) && !state.deletedChatIds.has(activity.id);
  });

  if (!cards.length) {
    qs("#conversationList").innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">💬</div>
        <p>No conversations in this section yet.</p>
      </div>
    `;
    return;
  }

  qs("#conversationList").innerHTML = cards.map(activity => {
    const lastMessage = activity.messages[activity.messages.length - 1]?.text || "No messages yet";
    return `
      <button class="conversation-card" type="button" data-open-chat="${activity.id}">
        <div class="conversation-avatar">${renderAvatarContent(activity.icon, `${activity.shortTitle} picture`)}</div>
        <div class="conversation-content">
          <div class="conversation-row">
            <strong>${activity.shortTitle}</strong>
            <span class="conversation-meta">${activity.timeLabel}</span>
          </div>
          <div class="conversation-preview">${lastMessage}</div>
        </div>
      </button>
    `;
  }).join("");

  qs("#chatFilterTabs").classList.toggle("hidden", state.currentMessageType === "friends");
}

function renderChat() {
  const activity = getActivityById(state.activeChatId || state.selectedActivityId);
  if (!activity) return;
  state.activeChatId = activity.id;
    qs("#chatIcon").innerHTML = renderAvatarContent(activity.icon, `${activity.shortTitle} picture`);
  qs("#chatTitle").textContent = activity.shortTitle;
  qs("#chatMeta").textContent = activity.status === "friend"
    ? `Direct chat with ${activity.shortTitle}`
    : `${activity.joined} people in this activity`;

  qs("#messageList").innerHTML = activity.messages.map(message => {
    const mine = message.name === "You";
    const avatar = friendProfiles[message.name]?.avatar || message.name.charAt(0);
    return `
      <div class="message-row ${mine ? "me" : ""}">
        ${mine ? "" : `<button class="message-avatar" type="button" data-open-profile="${message.name}">${renderAvatarContent(avatar, `${message.name} profile picture`)}</button>`}
        <div class="message-stack">
          ${mine ? "" : `<p class="message-name">${message.name}</p>`}
          <div class="message-bubble">${message.text}</div>
        </div>
      </div>
    `;
  }).join("");

  qs("#messageList").scrollTop = qs("#messageList").scrollHeight;
}

function joinSelectedActivity() {
  const activity = getActivityById(state.selectedActivityId);
  if (!activity) return;

  if (!activity.members.includes("You")) {
    activity.members.push("You");
    activity.joined += 1;
    activity.messages.push({ name: "You", text: `I just joined ${activity.shortTitle}. Looking forward to it!` });
    state.joinedActivities.add(activity.id);
    state.leftActivities.delete(activity.id);
    state.activeChatId = activity.id;
    showActivity(activity.id);
    renderMapStats();
    renderConversationList();
    openModal("boundaryModal");
    showToast("Joined activity. Choose your comfort level for after the meetup.");
    return;
  }

  state.activeChatId = activity.id;
  openView("chat");
}

function leaveSelectedActivity() {
  const activity = getActivityById(state.pendingLeaveActivityId || state.activeChatId || state.selectedActivityId);
  if (!activity || activity.status === "friend") return;

  if (activity.members.includes("You")) {
    activity.members = activity.members.filter(member => member !== "You");
    activity.joined = Math.max(activity.joined - 1, 0);
  }
  state.joinedActivities.delete(activity.id);
  state.leftActivities.add(activity.id);
  state.pendingLeaveActivityId = null;
  closeModal("leaveActivityModal");
  closeModal("activityInfoModal");
  renderMapStats();
  renderConversationList();
  showToast(`You left ${activity.shortTitle}.`);
  openMessagesView();
}

function requestLeaveActivity() {
  const activity = getActivityById(state.activeChatId || state.selectedActivityId);
  if (!activity || activity.status !== "present") return;
  state.pendingLeaveActivityId = activity.id;
  qs("#leaveActivityMessage").textContent = `Are you sure you want to leave ${activity.shortTitle} and its chat?`;
  openModal("leaveActivityModal");
}

function cancelLeaveActivity() {
  state.pendingLeaveActivityId = null;
  closeModal("leaveActivityModal");
}

function requestDeleteChat() {
  const activity = getActivityById(state.activeChatId || state.selectedActivityId);
  if (!activity || activity.status !== "past") return;
  state.pendingDeleteChatId = activity.id;
  qs("#deleteChatMessage").textContent = `Delete the past activity chat for ${activity.shortTitle}?`;
  openModal("deleteChatModal");
}

function cancelDeleteChat() {
  state.pendingDeleteChatId = null;
  closeModal("deleteChatModal");
}

function confirmDeleteChat() {
  const activity = getActivityById(state.pendingDeleteChatId);
  if (!activity || activity.status !== "past") {
    cancelDeleteChat();
    return;
  }
  state.deletedChatIds.add(activity.id);
  state.pendingDeleteChatId = null;
  closeModal("deleteChatModal");
  closeModal("activityInfoModal");
  renderConversationList();
  showToast(`${activity.shortTitle} chat was deleted.`);
  openMessagesView();
}

function requestRemoveFriend(name) {
  if (!state.friends.has(name)) return;
  state.pendingRemoveFriendName = name;
  qs("#removeFriendMessage").textContent = `Are you sure you want to remove ${name} from your friends?`;
  openModal("removeFriendModal");
}

function cancelRemoveFriend() {
  state.pendingRemoveFriendName = null;
  closeModal("removeFriendModal");
}

function confirmRemoveFriend() {
  const name = state.pendingRemoveFriendName;
  if (!name || !state.friends.has(name)) {
    cancelRemoveFriend();
    return;
  }

  state.friends.delete(name);
  state.activities = state.activities.filter(activity => !(activity.status === "friend" && activity.shortTitle === name));
  state.pendingRemoveFriendName = null;
  closeModal("removeFriendModal");
  renderFriendList();
  renderConversationList();
  renderMapStats();
  showToast(`${name} was removed from your friends.`);
}

function chooseBoundaryOption(choice) {
  const labels = {
    "activity-only": "Activity-only chat selected.",
    "add-friends": "You are marked as open to new friends.",
    "leave-after": "The chat will be muted after the activity."
  };
  closeModal("boundaryModal");
  showToast(labels[choice] || "Connection preference saved.");
  openView("chat");
}

function sendMessage(event) {
  event.preventDefault();
  const input = qs("#chatInput");
  const text = input.value.trim();
  if (!text) return;
  const activity = getActivityById(state.activeChatId);
  if (!activity) return;
  activity.messages.push({ name: "You", text });
  input.value = "";
  renderChat();
  renderConversationList();
}

function updateMessageTabs() {
  qsa("[data-message-type]").forEach(button => {
    button.classList.toggle("active", button.dataset.messageType === state.currentMessageType);
  });
  qsa("[data-chat-filter]").forEach(button => {
    button.classList.toggle("active", button.dataset.chatFilter === state.currentChatFilter);
  });
}

function openChatInfo() {
  state.selectedActivityId = state.activeChatId;
  updateActivityInfoModal();
  openModal("activityInfoModal");
}

async function getGeolocationPermissionState() {
  if (!navigator.permissions?.query) return "unknown";

  try {
    const permission = await navigator.permissions.query({ name: "geolocation" });
    return permission.state;
  } catch {
    return "unknown";
  }
}

async function locateUser() {
  if (!navigator.geolocation) {
    showToast("Geolocation is not available in this browser.", 6000);
    return;
  }

  qs("#activitySheet").classList.add("hidden");
  qs("#locateUserButton").classList.add("locating");
  qs("#locateUserButton").disabled = true;
  const permissionState = await getGeolocationPermissionState();
  showToast("Finding your current location...", 3000);

  const explainLocationError = error => {
    if (error.code === error.PERMISSION_DENIED) {
      return permissionState === "granted"
        ? "The site is allowed, but the browser app may not have OS Location permission. Open this link in Safari/Chrome and enable Location Services for that app."
        : `Location permission is blocked (${permissionState}). Allow location for this site and browser app.`;
    }
    if (error.code === error.POSITION_UNAVAILABLE) {
      return "Your phone could not determine GPS yet. Turn on Location Services and try again near a window.";
    }
    if (error.code === error.TIMEOUT) {
      return "GPS took too long. Try again after enabling precise location.";
    }
    return "Location is unavailable on this device/browser.";
  };

  navigator.geolocation.getCurrentPosition(
    position => {
      const { latitude, longitude, accuracy } = position.coords;
      refreshMapSize();
      renderUserLocation(latitude, longitude, accuracy);
      setMapCenter([latitude, longitude], accuracy <= 100 ? 17 : 16);
      qs("#locateUserButton").classList.remove("locating");
      qs("#locateUserButton").disabled = false;
      showToast(`You are here · accuracy about ${Math.round(accuracy)}m`, 4500);
    },
    error => {
      qs("#locateUserButton").classList.remove("locating");
      qs("#locateUserButton").disabled = false;
      showToast(explainLocationError(error), 8000);
    },
    {
      enableHighAccuracy: true,
      maximumAge: 10000,
      timeout: 12000
    }
  );
}

function renderUserLocation(latitude, longitude, accuracy) {
  if (!state.map) return;

  if (state.userMarker) {
    setMarkerPosition(state.userMarker, latitude, longitude);
  } else {
    state.userMarker = createUserMarker(latitude, longitude);
  }

  if (state.userAccuracyCircle) {
    updateAccuracyCircle(state.userAccuracyCircle, latitude, longitude, accuracy);
  } else {
    state.userAccuracyCircle = createAccuracyCircle(latitude, longitude, accuracy);
  }
}

function normalizePlaceText(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function getDistanceKm(a, b) {
  const earthRadiusKm = 6371;
  const toRadians = value => value * Math.PI / 180;
  const dLat = toRadians(b.lat - a.lat);
  const dLng = toRadians(b.lng - a.lng);
  const lat1 = toRadians(a.lat);
  const lat2 = toRadians(b.lat);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return 2 * earthRadiusKm * Math.asin(Math.sqrt(h));
}

function getSearchOrigin() {
  return getMapCenterCoordinates();
}

function withDistance(candidate) {
  return {
    ...candidate,
    distanceKm: getDistanceKm(getSearchOrigin(), { lat: Number(candidate.lat), lng: Number(candidate.lng) })
  };
}

function findKnownPlaceCandidates(query) {
  const normalizedQuery = normalizePlaceText(query);
  if (!normalizedQuery) return [];

  return knownPlaces
    .map(place => {
      const names = [place.name, place.shortName, ...place.aliases].map(normalizePlaceText);
      const score = Math.max(...names.map(name => {
        if (name.includes(normalizedQuery) || normalizedQuery.includes(name)) return 1;
        const queryWords = normalizedQuery.split(" ").filter(Boolean);
        const matches = queryWords.filter(word => name.includes(word)).length;
        return matches / Math.max(queryWords.length, 1);
      }));
      return { ...place, score };
    })
    .filter(place => place.score >= 0.45)
    .map(withDistance)
    .sort((a, b) => b.score - a.score || a.distanceKm - b.distanceKm);
}

function createPrototypePlaceCandidate(query) {
  const center = getMapCenterCoordinates();
  const hash = Array.from(query).reduce((total, character) => total + character.charCodeAt(0), 0);
  const latOffset = ((hash % 9) - 4) * 0.00045;
  const lngOffset = (((hash / 9) % 9) - 4) * 0.00045;

  return withDistance({
    name: query,
    shortName: query,
    branchName: "",
    address: "Near current MapMeet area, Seoul",
    lat: center.lat + latOffset,
    lng: center.lng + lngOffset,
    score: 0.25
  });
}

function updatePlaceStatus(text, kind = "") {
  const status = qs("#placeStatus");
  status.textContent = text;
  status.className = `helper-text ${kind}`.trim();
}

function renderPlaceCandidates(candidates) {
  state.placeCandidates = candidates;
  qs("#placeSuggestions").innerHTML = candidates.map((candidate, index) => `
    <button class="place-option ${state.selectedPlaceLocation?.name === candidate.name ? "selected" : ""}" type="button" data-place-index="${index}">
      <strong>${candidate.shortName}${candidate.branchName ? ` · ${candidate.branchName}` : ""}</strong>
      <span>${candidate.address} · ${candidate.distanceKm.toFixed(1)} km away</span>
    </button>
  `).join("");
}

async function lookupPlaceLocation() {
  const query = qs("#activityPlaceInput").value.trim();
  if (!query) {
    state.selectedPlaceLocation = null;
    state.placeCandidates = [];
    qs("#placeSuggestions").innerHTML = "";
    updatePlaceStatus("Type a place and select the best match so MapMeet can pin it accurately.");
    return null;
  }

  updatePlaceStatus("Looking for the best match...");
  const knownCandidates = findKnownPlaceCandidates(query);

  if (knownCandidates.length) {
    renderPlaceCandidates(knownCandidates.slice(0, 6));
    updatePlaceStatus("Select the correct place before creating the activity.", "success");
    return knownCandidates[0];
  }

  const prototypeCandidate = createPrototypePlaceCandidate(query);
  renderPlaceCandidates([prototypeCandidate]);
  updatePlaceStatus("No verified match found, but you can confirm this demo pin for the prototype.", "success");
  return prototypeCandidate;
}

function detectCategoryFromText(text) {
  const lower = text.toLowerCase();
  const words = lower.split(/[^a-z]+/).filter(Boolean);
  const best = categoryMeta.slice(1).map(category => ({
    category,
    score: category.keywords.reduce((score, keyword) => {
      if (keyword.includes(" ")) {
        return score + (lower.includes(keyword) ? 2 : 0);
      }
      return score + (words.includes(keyword) ? 2 : lower.includes(keyword) ? 1 : 0);
    }, 0)
  })).sort((a, b) => b.score - a.score)[0];

  return best && best.score > 0 ? best.category.name : "Other";
}

function renderCategoryGrid() {
  qs("#categoryGrid").innerHTML = categoryMeta.filter(category => category.name !== "All").map(category => `
    <button class="category-card ${state.selectedCategory === category.name ? "active" : ""}" type="button" data-select-category="${category.name}">
      <div>${category.icon}</div>
      <strong>${category.name}</strong>
      <span>${category.description}</span>
    </button>
  `).join("");
}

function formatDateInputValue(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function updateQuickDateButtons() {
  const selectedDate = qs("#activityDateInput").value;
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const quickDates = {
    today: formatDateInputValue(today),
    tomorrow: formatDateInputValue(tomorrow)
  };

  qsa("[data-quick-date]").forEach(button => {
    button.classList.toggle("active", quickDates[button.dataset.quickDate] === selectedDate);
  });
}

function setQuickDate(type) {
  const dateInput = qs("#activityDateInput");
  const date = new Date();
  if (type === "tomorrow") date.setDate(date.getDate() + 1);
  dateInput.value = formatDateInputValue(date);
  updateQuickDateButtons();
}

function formatTimeLabel(dateValue, timeValue) {
  let dayLabel = "Today";
  if (dateValue) {
    const selected = new Date(`${dateValue}T00:00:00`);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const diffDays = Math.round((selected - today) / 86400000);
    if (diffDays === 1) dayLabel = "Tomorrow";
    else if (diffDays === 0) dayLabel = "Today";
    else {
      dayLabel = selected.toLocaleDateString([], { month: "short", day: "numeric" });
    }
  }

  if (!timeValue) return `${dayLabel} · Flexible time`;
  const timeLabel = new Date(`2000-01-01T${timeValue}`).toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit"
  });
  return `${dayLabel} · ${timeLabel}`;
}

function confirmPlaceCandidate(index) {
  const candidate = state.placeCandidates[index];
  if (!candidate) return;
  state.selectedPlaceLocation = {
    name: candidate.name,
    label: candidate.address,
    lat: Number(candidate.lat),
    lng: Number(candidate.lng),
    branchName: candidate.branchName || ""
  };
  qs("#activityPlaceInput").value = candidate.shortName;
  renderPlaceCandidates(state.placeCandidates);
  updatePlaceStatus(`Confirmed: ${candidate.shortName}${candidate.branchName ? ` · ${candidate.branchName}` : ""}`, "success");
}

const createStepMeta = [
  {
    eyebrow: "Step 1 of 4",
    title: "Start a plan others can join",
    hint: "Add the activity name and a real meeting point."
  },
  {
    eyebrow: "Step 2 of 4",
    title: "When and why",
    hint: ""
  },
  {
    eyebrow: "Step 3 of 4",
    title: "Make it feel safe to join",
    hint: ""
  },
  {
    eyebrow: "Step 4 of 4",
    title: "Final details",
    hint: ""
  }
];

function setCreateStep(step) {
  const nextStep = Math.max(0, Math.min(createStepMeta.length - 1, step));
  state.createStep = nextStep;
  const meta = createStepMeta[nextStep];

  qs("#createStepEyebrow").textContent = meta.eyebrow;
  qs("#createStepTitle").textContent = meta.title;
  qs("#createStepHint").textContent = meta.hint;
  qs("#createStepHint").classList.toggle("hidden", !meta.hint);

  qsa("[data-create-step]").forEach(section => {
    section.classList.toggle("active", Number(section.dataset.createStep) === nextStep);
  });
  qsa("[data-create-progress]").forEach(dot => {
    const dotStep = Number(dot.dataset.createProgress);
    dot.classList.toggle("active", dotStep === nextStep);
    dot.classList.toggle("complete", dotStep < nextStep);
  });

  const backButton = qs("[data-action='create-back']");
  const nextButton = qs("[data-action='create-next']");
  const submitButton = qs("#createForm button[type='submit']");
  backButton.disabled = nextStep === 0;
  backButton.classList.toggle("disabled", nextStep === 0);
  nextButton.classList.toggle("hidden", nextStep === createStepMeta.length - 1);
  submitButton.classList.toggle("hidden", nextStep !== createStepMeta.length - 1);

  qs("#createModal .modal-panel")?.scrollTo({ top: 0, behavior: "smooth" });
}

async function validateCreateStep(step) {
  if (step !== 0) return true;

  const title = qs("#activityTitleInput").value.trim();
  const placeText = qs("#activityPlaceInput").value.trim();
  if (!title || !placeText) {
    showToast("Add a title and meeting place first.");
    return false;
  }

  if (!state.selectedPlaceLocation) {
    await lookupPlaceLocation();
    showToast("Select the exact place suggestion before continuing.");
    return false;
  }

  return true;
}

async function goToNextCreateStep() {
  if (!(await validateCreateStep(state.createStep))) return;
  setCreateStep(state.createStep + 1);
}

function goToPreviousCreateStep() {
  setCreateStep(state.createStep - 1);
}

function resetCreateForm() {
  qs("#createForm").reset();
  qs("#activityLimitInput").value = 6;
  qs("#activityLanguageSearch").value = "";
  qs("#activityLanguageSearchRow")?.classList.add("hidden");
  renderLanguageChoices();
  setSelectedActivityLanguages(["English", "Korean"]);
  state.selectedPlaceLocation = null;
  state.placeCandidates = [];
  state.selectedCategory = "Other";
  qs("#placeSuggestions").innerHTML = "";
  updatePlaceStatus("Type a place and select the best match so MapMeet can pin it accurately.");
  renderCategoryGrid();
  setQuickDate("today");
  updateCustomActivityChoices();
  setCreateStep(0);
}

function updateCustomActivityChoices() {
  ["Fit", "Level", "Vibe"].forEach(field => {
    const select = qs(`#activity${field}Input`);
    const customInput = qs(`#activity${field}OtherInput`);
    const isOther = select.value === "Other";
    customInput.classList.toggle("hidden", !isOther);
    customInput.required = isOther;
    if (!isOther) customInput.value = "";
  });
}

function getActivityChoiceValue(field, fallback) {
  const selected = qs(`#activity${field}Input`).value.trim();
  if (selected !== "Other") return selected || fallback;
  return qs(`#activity${field}OtherInput`).value.trim() || fallback;
}

function getSelectedActivityLanguages() {
  return qsa("#activityLanguageInput input:checked").map(input => input.value);
}

function renderLanguageChoices(selectedValues = getSelectedActivityLanguages()) {
  const query = (qs("#activityLanguageSearch")?.value || "").trim().toLowerCase();
  const selected = new Set(selectedValues);
  const normalized = language => language.toLowerCase();
  const filtered = activityLanguageOptions.filter(language => {
    return !query || normalized(language).includes(query);
  });
  const visibleLanguages = query
    ? filtered
    : activityLanguageOptions.filter(language => selected.has(language) || ["English", "Korean", "Japanese", "Mandarin Chinese", "Spanish", "French", "Arabic"].includes(language));
  const languagesToRender = visibleLanguages.length ? visibleLanguages : activityLanguageOptions;

  qs("#activityLanguageInput").innerHTML = languagesToRender.map(language => `
    <label class="language-choice">
      <input type="checkbox" value="${escapeHtml(language)}" ${selected.has(language) ? "checked" : ""} />
      ${escapeHtml(language)}
    </label>
  `).join("");

  const visibleSelected = qsa("#activityLanguageInput input:checked").map(input => input.value);
  selected.forEach(language => {
    if (!visibleSelected.includes(language)) {
      qs("#activityLanguageInput").insertAdjacentHTML("afterbegin", `
        <label class="language-choice">
          <input type="checkbox" value="${escapeHtml(language)}" checked />
          ${escapeHtml(language)}
        </label>
      `);
    }
  });
}

function setSelectedActivityLanguages(languages) {
  const selected = new Set(languages);
  const missingLanguages = languages.filter(language => !activityLanguageOptions.includes(language));
  missingLanguages.forEach(language => activityLanguageOptions.push(language));
  renderLanguageChoices(languages);
  qsa("#activityLanguageInput input").forEach(input => {
    input.checked = selected.has(input.value);
  });
}

function getSelectedProfileLanguages() {
  return qsa("#preferenceLanguageInput input:checked").map(input => input.value);
}

function renderProfileLanguageChoices(selectedValues = getSelectedProfileLanguages()) {
  const query = (qs("#preferenceLanguageSearch")?.value || "").trim().toLowerCase();
  const selected = new Set(selectedValues);
  const filtered = activityLanguageOptions.filter(language => !query || language.toLowerCase().includes(query));
  const defaultVisible = ["English", "Korean", "Japanese", "Mandarin Chinese", "Spanish", "French", "Arabic"];
  const visibleLanguages = query
    ? filtered
    : activityLanguageOptions.filter(language => selected.has(language) || defaultVisible.includes(language));
  const selectedLanguages = activityLanguageOptions.filter(language => selected.has(language));
  const languagesToRender = [...selectedLanguages, ...(visibleLanguages.length ? visibleLanguages : activityLanguageOptions)]
    .filter((language, index, languages) => languages.indexOf(language) === index);

  qs("#preferenceLanguageInput").innerHTML = languagesToRender.map(language => `
    <label class="language-choice">
      <input type="checkbox" value="${escapeHtml(language)}" ${selected.has(language) ? "checked" : ""} />
      ${escapeHtml(language)}
    </label>
  `).join("");
}

function setSelectedProfileLanguages(languages) {
  const selected = new Set(languages);
  const missingLanguages = languages.filter(language => !activityLanguageOptions.includes(language));
  missingLanguages.forEach(language => activityLanguageOptions.push(language));
  renderProfileLanguageChoices(languages);
  qsa("#preferenceLanguageInput input").forEach(input => {
    input.checked = selected.has(input.value);
  });
}

function writeDescriptionWithAiHelp() {
  const title = qs("#activityTitleInput").value.trim() || "this activity";
  const place = qs("#activityPlaceInput").value.trim();
  const fit = getActivityChoiceValue("Fit", "newcomers welcome");
  const level = getActivityChoiceValue("Level", "beginner-friendly");
  const vibe = getActivityChoiceValue("Vibe", "casual small group");
  const languages = getSelectedActivityLanguages();
  const languageText = languages.length ? languages.join(" / ") : "any shared language";
  const placeText = place ? ` at ${place}` : "";
  const category = state.selectedCategory && state.selectedCategory !== "Other" ? `${state.selectedCategory.toLowerCase()} ` : "";
  const description = `A ${vibe.toLowerCase()} ${category}meetup${placeText} for people who want something ${level.toLowerCase()} and ${fit.toLowerCase()}. We can use ${languageText}, keep it relaxed, and coordinate in the chat before meeting.`;

  qs("#activityDescInput").value = description;
  applyCategorySuggestion();
  showToast("AI drafted a short description.");
}

async function createActivity(event) {
  event.preventDefault();
  const title = qs("#activityTitleInput").value.trim();
  const placeText = qs("#activityPlaceInput").value.trim();
  const description = qs("#activityDescInput").value.trim() || "New activity created by a MapMeet user.";
  const fit = getActivityChoiceValue("Fit", "Newcomers welcome");
  const level = getActivityChoiceValue("Level", "Beginner-friendly");
  const selectedLanguages = getSelectedActivityLanguages();
  const vibe = getActivityChoiceValue("Vibe", "Casual small group");
  const hostNote = qs("#activityHostNoteInput").value.trim() || "New people are welcome. Join the activity chat to coordinate before arriving.";
  const capacity = Math.max(2, Math.min(20, Number(qs("#activityLimitInput").value) || 6));
  const dateValue = qs("#activityDateInput").value;
  const timeValue = qs("#activityTimeInput").value;

  if (!title || !placeText) {
    showToast("Add a title and place first.");
    return;
  }

  if (!state.selectedPlaceLocation) {
    await lookupPlaceLocation();
    showToast("Choose the exact place suggestion before creating the activity.");
    return;
  }

  const activityId = `act-${Date.now()}`;
  const activity = {
    id: activityId,
    icon: getCategory(state.selectedCategory).icon,
    category: state.selectedCategory,
    status: "present",
    host: "You",
    title: `You want to ${title.toLowerCase()}`,
    shortTitle: title,
    place: state.selectedPlaceLocation.name,
    timeLabel: formatTimeLabel(dateValue, timeValue),
    description,
    joined: 1,
    members: ["You"],
    capacity,
    difficulty: level,
    openness: fit,
    languages: selectedLanguages.length ? selectedLanguages : ["English"],
    vibe,
    hostNote,
    boundary: "Activity-only chat by default; add friends only if both people choose to.",
    coords: [state.selectedPlaceLocation.lat, state.selectedPlaceLocation.lng],
    messages: [{ name: "You", text: `I created this activity: ${title}. ${description}` }]
  };

  state.activities.unshift(activity);
  state.selectedActivityId = activityId;
  state.activeChatId = activityId;
  renderMapStats();
  renderMapMarkers();
  renderConversationList();
  closeModal("createModal");
  resetCreateForm();
  showActivity(activityId, true);
  showToast("Activity created and pinned on the map.");
}

const aiIntentRules = [
  { tag: "quiet", words: ["quiet", "calm", "silent", "focus", "focused", "study", "library", "introvert", "low pressure", "low-pressure"], categories: ["Study"], reason: "you asked for a quiet, low-pressure setting" },
  { tag: "coffee", words: ["coffee", "cafe", "drink", "tea", "latte", "relax"], categories: ["Food & Drinks"], reason: "you mentioned a coffee or relaxed drink plan" },
  { tag: "food", words: ["food", "dinner", "eat", "meal", "restaurant", "hungry", "lunch"], categories: ["Food & Drinks"], reason: "you seem to want a food-based meetup" },
  { tag: "active", words: ["active", "walk", "hike", "cycling", "cycle", "football", "sport", "outdoor", "morning", "exercise"], categories: ["Outdoor & Active"], reason: "you asked for something active or outdoors" },
  { tag: "social_easy", words: ["easy", "new people", "meet people", "first time", "first-timer", "nervous", "shy", "awkward", "solo", "alone"], categories: ["Other", "Food & Drinks", "Outdoor & Active"], reason: "you want an easy way to meet people" },
  { tag: "night", words: ["night", "tonight", "evening", "late"], categories: ["Food & Drinks", "Nightlife", "Entertainment"], reason: "you mentioned a later plan" },
  { tag: "entertainment", words: ["movie", "game", "karaoke", "show", "fun", "entertainment"], categories: ["Entertainment"], reason: "you are looking for entertainment" }
];

function promptIncludes(prompt, phrase) {
  return prompt.includes(phrase);
}

function analyzeAiPrompt(prompt) {
  const lower = prompt.toLowerCase();
  const matchedRules = aiIntentRules.filter(rule => rule.words.some(word => promptIncludes(lower, word)));
  const categories = matchedRules.flatMap(rule => rule.categories);
  const language = activityLanguageOptions.find(option => lower.includes(option.toLowerCase()));
  const timeHints = ["today", "tonight", "tomorrow", "morning", "afternoon", "evening"].filter(hint => lower.includes(hint));
  const comfortHints = ["quiet", "low pressure", "low-pressure", "nervous", "shy", "solo", "alone", "first time", "easy"].filter(hint => lower.includes(hint));

  return {
    prompt,
    lower,
    matchedRules,
    categories,
    language,
    timeHints,
    comfortHints,
    wantsExisting: !lower.includes("create") && !lower.includes("start my own"),
    wantsCreate: lower.includes("create") || lower.includes("start") || lower.includes("host")
  };
}

function evaluateActivityForPrompt(activity, intent) {
  const searchable = [
    activity.category,
    activity.title,
    activity.shortTitle,
    activity.description,
    activity.place,
    activity.timeLabel,
    activity.difficulty,
    activity.openness,
    activity.vibe,
    activity.hostNote,
    ...(activity.languages || [])
  ].join(" ").toLowerCase();
  const promptWords = intent.lower.split(/[^a-z0-9]+/).filter(word => word.length > 2);
  const uniquePromptWords = [...new Set(promptWords)];
  const reasons = [];
  let score = 0;

  uniquePromptWords.forEach(word => {
    if (searchable.includes(word)) score += 1;
  });

  if (intent.categories.includes(activity.category)) {
    score += 6;
    const matchingRule = intent.matchedRules.find(rule => rule.categories.includes(activity.category));
    reasons.push(matchingRule?.reason || `it matches ${activity.category.toLowerCase()}`);
  }

  if (intent.language && (activity.languages || []).includes(intent.language)) {
    score += 3;
    reasons.push(`it supports ${intent.language}`);
  }

  if (intent.timeHints.some(hint => activity.timeLabel.toLowerCase().includes(hint))) {
    score += 3;
    reasons.push(`the timing matches ${intent.timeHints.join(" / ")}`);
  }

  if (intent.comfortHints.length) {
    const comfortText = `${activity.difficulty} ${activity.openness} ${activity.hostNote}`.toLowerCase();
    if (["easy", "beginner", "low-pressure", "low pressure", "solo", "first-timers", "quiet", "silently", "newcomers"].some(word => comfortText.includes(word))) {
      score += 4;
      reasons.push("it is socially low-pressure");
    }
  }

  const spotsLeft = Math.max((activity.capacity || activity.joined) - activity.joined, 0);
  if (spotsLeft > 0) score += 1;
  if (activity.members?.includes("You")) {
    score += 2;
    reasons.push("you already joined it");
  }

  return {
    activity,
    score,
    reasons: [...new Set(reasons)].slice(0, 3)
  };
}

function scoreActivityForPrompt(activity, prompt) {
  return evaluateActivityForPrompt(activity, analyzeAiPrompt(prompt)).score;
}

function appendAiMessage(sender, text, activityId = "", createIdea = null) {
  state.aiMessages.push({ sender, text, activityId, createIdea });
  renderAiFeed();
}

function renderAiFeed() {
  const feed = qs("#aiFeed");
  feed.innerHTML = state.aiMessages.map(message => `
    <div class="ai-bubble ${message.sender === "user" ? "user" : ""}">
      ${message.sender === "user" ? escapeHtml(message.text) : message.text}
      ${message.activityId ? `<button class="primary-button small ai-action-button" type="button" data-open-ai-activity="${message.activityId}">View Activity</button>` : ""}
      ${message.createIdea ? `<button class="primary-button small ai-action-button" type="button" data-create-ai-activity="${message.createIdea.key}">Create This Activity</button>` : ""}
    </div>
  `).join("");
  const scrollToLatest = () => {
    feed.scrollTop = feed.scrollHeight;
    const panel = feed.closest(".modal-panel");
    if (panel) panel.scrollTop = panel.scrollHeight;
    const modal = qs("#aiModal");
    if (modal) modal.scrollTop = modal.scrollHeight;
  };
  scrollToLatest();
  requestAnimationFrame(() => {
    scrollToLatest();
  });
  setTimeout(scrollToLatest, 60);
}

function getAiCreateIdea(prompt) {
  const promptLower = String(prompt).toLowerCase();
  if (promptLower === "study" || promptLower.includes("study") || promptLower.includes("quiet")) {
    return {
      key: "study",
      title: "Quiet study session",
      place: "Korea University Central Library",
      description: "Low-pressure study time. People can sit together, focus quietly, and take a short break after.",
      category: "Study",
      fit: "Join silently okay",
      level: "Low-pressure",
      languages: ["English", "Korean"],
      vibe: "Quiet focus",
      hostNote: "You can join without introducing yourself to everyone. We will work quietly and take one short break."
    };
  }
  if (promptLower === "coffee" || promptLower.includes("coffee") || promptLower.includes("cafe") || promptLower.includes("relax")) {
    return {
      key: "coffee",
      title: "Relaxing coffee meetup",
      place: "Nice Caffein Club",
      description: "A calm coffee meetup for anyone who wants an easy conversation without pressure.",
      category: "Food & Drinks",
      fit: "First-timers welcome",
      level: "Very easy",
      languages: ["English", "Korean"],
      vibe: "Relaxed chat",
      hostNote: "Come as you are. If you are nervous, message first and I will wave when you arrive."
    };
  }
  if (promptLower === "active" || promptLower.includes("walk") || promptLower.includes("active") || promptLower.includes("hike")) {
    return {
      key: "active",
      title: "Easy campus walk",
      place: "Anam-dong park area",
      description: "A simple walk for people who want light activity and casual conversation.",
      category: "Outdoor & Active",
      fit: "Newcomers welcome",
      level: "Easy pace",
      languages: ["English", "Korean"],
      vibe: "Casual small group",
      hostNote: "We will meet at an easy landmark first, so nobody has to arrive alone."
    };
  }
  return {
    key: "default",
    title: "Small casual meetup",
    place: "Anam Station area",
    description: "A small, easy-to-join activity with a clear place and flexible conversation.",
    category: "Other",
    fit: "Open to anyone",
    level: "Easy join",
    languages: ["English", "Korean"],
    vibe: "Casual",
    hostNote: "New people are welcome. Join the activity chat to coordinate before arriving."
  };
}

function buildAiCreateIdea(prompt, intent = analyzeAiPrompt(prompt)) {
  const topCategory = intent.categories[0] || detectCategoryFromText(prompt);
  const baseIdea = getAiCreateIdea(
    topCategory === "Study" ? "study" :
    topCategory === "Food & Drinks" ? "coffee" :
    topCategory === "Outdoor & Active" ? "active" :
    prompt
  );
  const key = `custom-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
  const timeText = intent.timeHints[0] ? ` ${intent.timeHints[0]}` : "";
  const comfortText = intent.comfortHints.length ? " with a comfort-first pace" : "";
  const languageText = intent.language ? [intent.language] : baseIdea.languages;

  const idea = {
    ...baseIdea,
    key,
    category: topCategory || baseIdea.category,
    title: baseIdea.title,
    description: `${baseIdea.description} This version is tailored to: "${escapeHtml(prompt)}"${timeText}${comfortText}.`,
    languages: languageText,
    hostNote: intent.comfortHints.length
      ? "People can join quietly, message first, and leave after the activity without pressure."
      : baseIdea.hostNote
  };
  state.aiCreateIdeas[key] = idea;
  return idea;
}

function openCreateFromAiIdea(key) {
  const idea = state.aiCreateIdeas[key] || getAiCreateIdea(key);
  closeModal("aiModal");
  resetCreateForm();
  qs("#activityTitleInput").value = idea.title;
  qs("#activityPlaceInput").value = idea.place;
  qs("#activityDescInput").value = idea.description;
  setSelectValue("#activityFitInput", idea.fit, "Newcomers welcome");
  setSelectValue("#activityLevelInput", idea.level, "No experience needed");
  setSelectedActivityLanguages(Array.isArray(idea.languages) ? idea.languages : ["English", "Korean"]);
  setSelectValue("#activityVibeInput", idea.vibe, "Low-pressure and calm");
  qs("#activityHostNoteInput").value = idea.hostNote;
  qs("#activityLimitInput").value = 6;
  state.selectedCategory = idea.category;
  renderCategoryGrid();
  applyCategorySuggestion();
  updateCustomActivityChoices();
  setCreateStep(0);
  openModal("createModal");
  lookupPlaceLocation();
}

function renderAiPrompts() {
  const prompts = [
    "I want a cozy coffee meetup near campus",
    "I feel like doing something active tomorrow morning",
    "I need a quiet study session tonight",
    "Show me something easy for meeting new people"
  ];
  qs("#aiSuggestionPrompts").innerHTML = prompts.map(prompt => `
    <button class="filter-chip" type="button" data-ai-prompt="${prompt}">${prompt}</button>
  `).join("");
}

function respondToAiLocal(prompt, showUserMessage = true) {
  if (showUserMessage) appendAiMessage("user", prompt);
  const intent = analyzeAiPrompt(prompt);
  const ranked = state.activities
    .filter(activity => activity.status === "present")
    .map(activity => evaluateActivityForPrompt(activity, intent))
    .sort((a, b) => b.score - a.score);

  const idea = buildAiCreateIdea(prompt, intent);
  const matches = ranked.filter(match => match.score >= 4).slice(0, 3);

  if (matches.length) {
    const top = matches[0].activity;
    const matchCards = matches.map((match, index) => {
      const activity = match.activity;
      const reasons = match.reasons.length
        ? match.reasons.join("; ")
        : "it overlaps with your prompt";
      const spotsLeft = Math.max((activity.capacity || activity.joined) - activity.joined, 0);
      return `
        <article class="ai-recommendation-card">
          <strong>${index + 1}. ${escapeHtml(activity.shortTitle)}</strong>
          <span>${escapeHtml(activity.place)} · ${escapeHtml(activity.timeLabel)}</span>
          <small>${escapeHtml(reasons)}. ${spotsLeft} ${spotsLeft === 1 ? "spot" : "spots"} left.</small>
          <button class="primary-button small ai-action-button" type="button" data-open-ai-activity="${activity.id}">View Activity</button>
        </article>
      `;
    }).join("");

    appendAiMessage(
      "bot",
      `<strong>Here is your best match: ${escapeHtml(top.shortTitle)}</strong><br>I found ${matches.length} suitable ${matches.length === 1 ? "activity" : "activities"} based on what you asked:<div class="ai-recommendation-list">${matchCards}</div>`
    );
    appendAiMessage("bot", `If none of those feel quite right, I can help create a tailored plan: <strong>${escapeHtml(idea.title)}</strong>. ${escapeHtml(idea.description)}`, "", idea);
    return;
  }

  appendAiMessage(
    "bot",
    `<strong>Here is a plan that answers your request:</strong><br>${escapeHtml(idea.title)} at ${escapeHtml(idea.place)}. ${escapeHtml(idea.description)}`,
    "",
    idea
  );
}

function getAiPayloadActivities() {
  return state.activities
    .filter(activity => activity.status === "present")
    .map(activity => ({
      id: activity.id,
      title: activity.title,
      shortTitle: activity.shortTitle,
      category: activity.category,
      place: activity.place,
      timeLabel: activity.timeLabel,
      description: activity.description,
      joined: activity.joined,
      capacity: activity.capacity,
      difficulty: activity.difficulty,
      openness: activity.openness,
      languages: activity.languages || [],
      vibe: activity.vibe || "",
      hostNote: activity.hostNote || ""
    }));
}

function getAiPayloadPlaces() {
  const origin = getSearchOrigin();
  const places = state.aiLivePlaces.filter(place => place.verifiedOnNaver && place.source === "naver-local");
  const seen = new Set();
  return places.filter(place => {
    const key = `${place.name}-${place.address || ""}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  }).map(place => {
    const distance = getDistanceKm(origin, { lat: place.lat, lng: place.lng });
    return {
      name: place.name,
      shortName: place.shortName,
      category: place.category || "Place",
      address: place.address,
      lat: place.lat,
      lng: place.lng,
      tags: place.tags || [],
      aliases: place.aliases || [],
      source: place.source || "mapmeet",
      verifiedOnNaver: Boolean(place.verifiedOnNaver),
      naverMapUrl: place.naverMapUrl || "",
      distanceKm: Number(distance.toFixed(2))
    };
  }).sort((a, b) => a.distanceKm - b.distanceKm);
}

async function fetchLivePlacesForPrompt(prompt) {
  try {
    const response = await fetch("/api/place-search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: prompt,
        mapCenter: getMapCenterCoordinates()
      })
    });
    if (!response.ok) return [];
    const result = await response.json();
    return Array.isArray(result.places) ? result.places : [];
  } catch {
    return [];
  }
}

function renderRealAiResponse(result) {
  const recommendations = (result.recommendations || [])
    .map(recommendation => {
      const activity = getActivityById(recommendation.activityId);
      if (!activity) return "";
      const reasons = Array.isArray(recommendation.reasons) && recommendation.reasons.length
        ? recommendation.reasons.join("; ")
        : recommendation.reason || "it fits your prompt";
      const spotsLeft = Math.max((activity.capacity || activity.joined) - activity.joined, 0);
      return `
        <article class="ai-recommendation-card">
          <strong>${escapeHtml(activity.shortTitle)}</strong>
          <span>${escapeHtml(activity.place)} · ${escapeHtml(activity.timeLabel)}</span>
          <small>${escapeHtml(reasons)}. ${spotsLeft} ${spotsLeft === 1 ? "spot" : "spots"} left.</small>
          <button class="primary-button small ai-action-button" type="button" data-open-ai-activity="${activity.id}">View Activity</button>
        </article>
      `;
    })
    .filter(Boolean)
    .join("");

  const reply = result.reply || "I found a few options based on your prompt.";
  state.aiPlaceTargets = {};
  const placeRecommendations = (result.placeRecommendations || [])
    .map(recommendation => {
      const place = [...state.aiLivePlaces, ...knownPlaces].find(item => item.name === recommendation.placeName || item.shortName === recommendation.placeName);
      if (!place) return "";
      if (!place.verifiedOnNaver || place.source !== "naver-local") return "";
      const placeKey = getPlaceKey(place);
      state.aiPlaceTargets[placeKey] = place;
      const reasons = Array.isArray(recommendation.reasons) && recommendation.reasons.length
        ? recommendation.reasons.join("; ")
        : "it fits your place request";
      return `
        <article class="ai-recommendation-card">
          <strong>${escapeHtml(place.shortName || place.name)}</strong>
          <span>${escapeHtml(place.address)} · ${withDistance(place).distanceText}</span>
          <small>${escapeHtml(reasons)}</small>
          <small><a href="${escapeHtml(place.naverMapUrl)}" target="_blank" rel="noopener noreferrer">Verified on Naver Maps</a></small>
          <button class="primary-button small ai-action-button" type="button" data-ai-place="${escapeHtml(placeKey)}">Show on Map</button>
        </article>
      `;
    })
    .filter(Boolean)
    .join("");
  const recommendationHtml = recommendations
    ? `<div class="ai-recommendation-list">${recommendations}</div>`
    : "";
  const placeHtml = placeRecommendations
    ? `<div class="ai-recommendation-list">${placeRecommendations}</div>`
    : "";

  appendAiMessage("bot", `<strong>Real AI suggestion</strong><br>${escapeHtml(reply)}${recommendationHtml}${placeHtml}`);

  if (result.createIdea?.title) {
    const idea = {
      key: `real-ai-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      title: result.createIdea.title,
      place: result.createIdea.place || "Anam Station area",
      description: result.createIdea.description || "A low-pressure activity suggested by AI.",
      category: result.createIdea.category || detectCategoryFromText(result.createIdea.title),
      fit: result.createIdea.fit || "Newcomers welcome",
      level: result.createIdea.level || "Beginner-friendly",
      languages: Array.isArray(result.createIdea.languages) && result.createIdea.languages.length ? result.createIdea.languages : ["English", "Korean"],
      vibe: result.createIdea.vibe || "Casual small group",
      hostNote: result.createIdea.hostNote || "New people are welcome. Message first if arriving alone feels easier."
    };
    state.aiCreateIdeas[idea.key] = idea;
    appendAiMessage("bot", `I can also help you start: <strong>${escapeHtml(idea.title)}</strong>. ${escapeHtml(idea.description)}`, "", idea);
  }
}

async function respondToAi(prompt) {
  if (state.aiMatching) return;
  appendAiMessage("user", prompt);
  setAiMatching(true);

  try {
    state.aiLivePlaces = await fetchLivePlacesForPrompt(prompt);
    const response = await fetch("/api/ai-match", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prompt,
        activities: getAiPayloadActivities(),
        places: getAiPayloadPlaces(),
        mapCenter: getMapCenterCoordinates(),
        user: {
          interests: friendProfiles.You?.interests || [],
          languages: friendProfiles.You?.languages || "English"
        }
      })
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.message || "AI backend is unavailable.");
    }

    const result = await response.json();
    renderRealAiResponse(result);
  } catch (error) {
    console.warn("Online AI matching unavailable; using the built-in matcher.", error);
    respondToAiLocal(prompt, false);
  } finally {
    setAiMatching(false);
  }
}

function setAiMatching(isMatching) {
  state.aiMatching = isMatching;
  qs("#aiMatchStatus").classList.toggle("hidden", !isMatching);
  qs("#aiModalStatus").classList.toggle("hidden", !isMatching);
  qs("#aiMatchButton").classList.toggle("matching", isMatching);
  qs("#aiSubmitBtn").disabled = isMatching;
  qs("#aiInput").disabled = isMatching;
}

function requestFriendDecline(notificationId) {
  const notification = state.notifications.find(item => item.id === notificationId && item.type === "pending");
  if (!notification) return;
  state.pendingDeclineNotificationId = notificationId;
  qs("#declineFriendMessage").textContent = `Are you sure you want to decline ${notification.name}'s friend request?`;
  openModal("declineFriendModal");
}

function cancelFriendDecline() {
  state.pendingDeclineNotificationId = null;
  closeModal("declineFriendModal");
}

function confirmFriendDecline() {
  const notificationId = state.pendingDeclineNotificationId;
  const notification = state.notifications.find(item => item.id === notificationId);
  if (!notification) {
    cancelFriendDecline();
    return;
  }

  state.notifications = state.notifications.filter(item => item.id !== notificationId);
  state.pendingDeclineNotificationId = null;
  closeModal("declineFriendModal");
  renderNotifications();
  renderFriendList();
  renderMapStats();
  showToast(`Friend request from ${notification.name} declined.`);
}

function handleNotificationAction(action, notificationId) {
  const notification = state.notifications.find(item => item.id === notificationId);
  if (!notification) return;

  if (action === "accept") {
    state.friends.add(notification.name);
    notification.type = "accepted";
    notification.text = `${notification.name} is now your friend`;
    notification.time = "Just now";
    showToast(`Friend request from ${notification.name} accepted.`);
  }

  if (action === "decline") {
    requestFriendDecline(notificationId);
    return;
  }

  renderNotifications();
  renderFriendList();
  renderMapStats();
}

function openMessagesView() {
  openView("messages");
  renderConversationList();
}

function applyCategorySuggestion() {
  const title = qs("#activityTitleInput").value.trim();
  const description = qs("#activityDescInput").value.trim();
  state.selectedCategory = detectCategoryFromText(`${title} ${description}`);
  renderCategoryGrid();
}

function handleGlobalClick(event) {
  const target = event.target.closest("[data-action], [data-nav], [data-filter-category], [data-auth-mode], [data-open-profile], [data-start-direct-chat], [data-notification-action], [data-open-chat], [data-message-type], [data-chat-filter], [data-place-index], [data-select-category], [data-quick-date], [data-ai-prompt], [data-open-ai-activity], [data-create-ai-activity], [data-ai-place], [data-select-photo], [data-boundary-choice], [data-map-stat], [data-stat-activity], [data-stat-friend]");
  if (!target) return;

  if (target.dataset.action === "open-profile") openProfile("You");
  if (target.dataset.action === "auth-login") enterApp("login");
  if (target.dataset.action === "auth-signup") enterApp("signup");
  if (target.dataset.authMode) setAuthMode(target.dataset.authMode);
  if (target.dataset.action === "open-friends") openView("friends");
  if (target.dataset.action === "open-notifications") openView("notifications");
  if (target.dataset.action === "open-ai") openModal("aiModal");
  if (target.dataset.action === "close-ai") closeModal("aiModal");
  if (target.dataset.action === "open-create") {
    setCreateStep(0);
    openModal("createModal");
  }
  if (target.dataset.action === "close-create") closeModal("createModal");
  if (target.dataset.action === "create-next") goToNextCreateStep();
  if (target.dataset.action === "create-back") goToPreviousCreateStep();
  if (target.dataset.action === "close-map-stat") closeModal("mapStatModal");
  if (target.dataset.action === "search-language") {
    renderLanguageChoices();
    qs("#activityLanguageSearch").focus();
  }
  if (target.dataset.action === "toggle-language-search") {
    qs("#activityLanguageSearchRow").classList.toggle("hidden");
    qs("#activityLanguageSearch").focus();
  }
  if (target.dataset.action === "search-profile-language") {
    renderProfileLanguageChoices();
    qs("#preferenceLanguageSearch").focus();
  }
  if (target.dataset.action === "help-description") writeDescriptionWithAiHelp();
  if (target.dataset.action === "edit-preferences") openPreferencesModal();
  if (target.dataset.action === "close-preferences") closeModal("preferencesModal");
  if (target.dataset.action === "confirm-photo-upload") confirmProfilePhotoUpload();
  if (target.dataset.action === "cancel-photo-upload") cancelProfilePhotoUpload();
  if (target.dataset.action === "choose-profile-picture") qs("#profilePhotoInput").click();
  if (target.dataset.action === "confirm-photo-delete") confirmProfilePhotoDelete();
  if (target.dataset.action === "cancel-photo-delete") cancelProfilePhotoDelete();
  if (target.dataset.action === "close-photo-viewer") closePhotoViewer();
  if (target.dataset.action === "request-photo-delete") openPhotoDeleteConfirm();
  if (target.dataset.action === "show-more-photos") showMorePhotos();
  if (target.dataset.action === "close-photo-gallery") closeModal("photoGalleryModal");
  if (target.dataset.action === "add-friend") {
    target.textContent = "Request Sent";
    target.disabled = true;
    showToast("Friend request sent.");
  }
  if (target.dataset.action === "close-sheet") {
    qs("#activitySheet").classList.add("hidden");
  }
  if (target.dataset.action === "open-activity-info") {
    updateActivityInfoModal();
    openModal("activityInfoModal");
  }
  if (target.dataset.action === "close-activity-info") closeModal("activityInfoModal");
  if (target.dataset.action === "close-boundary") closeModal("boundaryModal");
  if (target.dataset.action === "join-activity") joinSelectedActivity();
  if (target.dataset.action === "request-leave-activity") requestLeaveActivity();
  if (target.dataset.action === "cancel-leave-activity") cancelLeaveActivity();
  if (target.dataset.action === "confirm-leave-activity") leaveSelectedActivity();
  if (target.dataset.action === "cancel-friend-decline") cancelFriendDecline();
  if (target.dataset.action === "confirm-friend-decline") confirmFriendDecline();
  if (target.dataset.action === "request-remove-friend") requestRemoveFriend(target.dataset.friendName);
  if (target.dataset.action === "cancel-remove-friend") cancelRemoveFriend();
  if (target.dataset.action === "confirm-remove-friend") confirmRemoveFriend();
  if (target.dataset.action === "request-delete-chat") requestDeleteChat();
  if (target.dataset.action === "cancel-delete-chat") cancelDeleteChat();
  if (target.dataset.action === "confirm-delete-chat") confirmDeleteChat();
  if (target.dataset.action === "go-back") goBack();
  if (target.dataset.action === "open-messages") openMessagesView();
  if (target.dataset.action === "open-chat-info") openChatInfo();
  if (target.dataset.action === "locate-user") locateUser();

  if (target.dataset.nav === "map") returnToMapHome();
  if (target.dataset.nav === "messages") openMessagesView();

  if (target.dataset.filterCategory) {
    state.filteredCategory = target.dataset.filterCategory;
    renderCategoryStrip();
    renderMapMarkers();
    openCategoryActivityList(state.filteredCategory);
  }

  if (target.dataset.openProfile) openProfile(target.dataset.openProfile);
  if (target.dataset.startDirectChat) openDirectChat(target.dataset.startDirectChat);

  if (target.dataset.notificationAction) {
    handleNotificationAction(target.dataset.notificationAction, target.dataset.notificationId);
  }

  if (target.dataset.openChat) {
    state.activeChatId = target.dataset.openChat;
    openView("chat");
  }

  if (target.dataset.messageType) {
    state.currentMessageType = target.dataset.messageType;
    updateMessageTabs();
    renderConversationList();
  }

  if (target.dataset.chatFilter) {
    state.currentChatFilter = target.dataset.chatFilter;
    updateMessageTabs();
    renderConversationList();
  }

  if (target.dataset.placeIndex) {
    confirmPlaceCandidate(Number(target.dataset.placeIndex));
  }

  if (target.dataset.selectCategory) {
    state.selectedCategory = target.dataset.selectCategory;
    renderCategoryGrid();
  }

  if (target.dataset.quickDate) setQuickDate(target.dataset.quickDate);
  if (target.dataset.mapStat) openMapStat(target.dataset.mapStat);
  if (target.dataset.statActivity) {
    closeModal("mapStatModal");
    openView("map");
    showActivity(target.dataset.statActivity, true);
    qs("#activitySheet").classList.remove("hidden");
  }
  if (target.dataset.statFriend) {
    closeModal("mapStatModal");
    openProfile(target.dataset.statFriend);
  }
  if (target.dataset.aiPrompt) respondToAi(target.dataset.aiPrompt);
  if (target.dataset.openAiActivity) {
    closeModal("aiModal");
    openView("map");
    showActivity(target.dataset.openAiActivity, true);
  }
  if (target.dataset.createAiActivity) openCreateFromAiIdea(target.dataset.createAiActivity);
  if (target.dataset.aiPlace) {
    closeModal("aiModal");
    showAiPlaceOnMap(target.dataset.aiPlace);
  }
  if (target.dataset.selectPhoto) openPhotoViewer(Number(target.dataset.selectPhoto));
  if (target.dataset.boundaryChoice) chooseBoundaryOption(target.dataset.boundaryChoice);
}

function handleModalBackdrop(event) {
  if (!event.target.classList.contains("modal")) return;
  if (event.target.id === "leaveActivityModal") {
    cancelLeaveActivity();
    return;
  }
  if (event.target.id === "declineFriendModal") {
    cancelFriendDecline();
    return;
  }
  if (event.target.id === "removeFriendModal") {
    cancelRemoveFriend();
    return;
  }
  if (event.target.id === "deleteChatModal") {
    cancelDeleteChat();
    return;
  }
  closeModal(event.target.id);
}

function attachEventListeners() {
  document.addEventListener("click", handleGlobalClick);
  qsa(".modal").forEach(modal => modal.addEventListener("click", handleModalBackdrop));
  qs("#authForm").addEventListener("submit", handleAuthSubmit);
  qs("#chatForm").addEventListener("submit", sendMessage);
  qs("#createForm").addEventListener("submit", createActivity);
  qs("#preferencesForm").addEventListener("submit", savePreferences);
  qs("#profilePhotoInput").addEventListener("change", handleProfilePhotoUpload);
  qs("#aiForm").addEventListener("submit", event => {
    event.preventDefault();
    const input = qs("#aiInput");
    const prompt = input.value.trim();
    if (!prompt) return;
    respondToAi(prompt);
    input.value = "";
  });
  qs("#activityTitleInput").addEventListener("input", applyCategorySuggestion);
  qs("#activityDescInput").addEventListener("input", applyCategorySuggestion);
  ["Fit", "Level", "Vibe"].forEach(field => {
    qs(`#activity${field}Input`).addEventListener("change", updateCustomActivityChoices);
  });
  qs("#activityDateInput").addEventListener("change", updateQuickDateButtons);
  qs("#activityDateInput").addEventListener("input", updateQuickDateButtons);
  qs("#activityLanguageSearch").addEventListener("input", () => renderLanguageChoices());
  qs("#activityLanguageSearch").addEventListener("keydown", event => {
    if (event.key === "Enter") {
      event.preventDefault();
      renderLanguageChoices();
    }
  });
  qs("#preferenceLanguageSearch").addEventListener("input", () => renderProfileLanguageChoices());
  qs("#preferenceLanguageSearch").addEventListener("keydown", event => {
    if (event.key === "Enter") {
      event.preventDefault();
      renderProfileLanguageChoices();
    }
  });
  qs("#activityPlaceInput").addEventListener("input", () => {
    state.selectedPlaceLocation = null;
    clearTimeout(state.placeLookupTimer);
    state.placeLookupTimer = setTimeout(() => {
      lookupPlaceLocation();
    }, 600);
  });
  qs("#activityPlaceInput").addEventListener("blur", () => {
    lookupPlaceLocation();
  });
}

function runTests() {
  console.assert(detectCategoryFromText("study sprint tonight") === "Study", "Study keywords should classify correctly");
  console.assert(detectCategoryFromText("coffee with friends") === "Food & Drinks", "Coffee should map to Food & Drinks");
  console.assert(findKnownPlaceCandidates("anam cafe").length > 0, "Known place lookup should return Anam cafe");
  console.assert(typeof locateUser === "function", "locateUser should exist");
  console.assert(categoryMeta.length >= 8, "Category metadata should be populated");
  console.log("MapMeet tests passed");
}

async function init() {
  renderOwnAvatar();
  renderMapStats();
  renderCategoryStrip();
  renderFriendList();
  renderNotifications();
  renderAiPrompts();
  renderAiFeed();
  renderCategoryGrid();
  renderLanguageChoices(["English", "Korean"]);
  setQuickDate("today");
  await initMap();
  updateMessageTabs();
  attachEventListeners();
  runTests();
}

window.addEventListener("load", init);
