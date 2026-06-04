# MapMeet

Hi-fi HCI prototype for campus activity discovery and social coordination.

MapMeet is designed for international students, solo travelers, new arrivals, introverted users, and people who experience social hesitation or anxiety. The goal is not to force users to become more social, but to lower the emotional and coordination barriers that make joining real-world activities feel risky.

The prototype supports comfort-first participation by showing activity fit, beginner level, language compatibility, group vibe, host welcome notes, participant visibility, and post-activity boundary choices before or immediately after joining.

## Current map setup

The prototype can use Naver Maps when `NAVER_MAP_CLIENT_ID` is set in `.env`. If that key is missing or Naver Maps fails to load, it falls back to Leaflet with OpenStreetMap so the demo does not go blank.

## Real AI setup

Run the Node backend instead of a plain static file server when you want real AI-powered activity matching.

1. Copy `.env.example` to `.env`.
2. For Google Gemini, get an API key from Google AI Studio and put it in `GEMINI_API_KEY`.
3. Start the app with `node server.js`.

Example Gemini `.env`:

```env
AI_PROVIDER=gemini
GEMINI_API_KEY=your_google_ai_studio_api_key_here
GEMINI_MODEL=gemini-3.1-flash-lite
PORT=4174
APP_ACCESS_CODE=change-this-before-sharing
```

The frontend calls `/api/ai-match`. If the API key is missing or the API call fails, the prototype falls back to its local recommender so the demo still works.

## Naver Map setup

Register a Naver Cloud Platform Maps application, enable `Dynamic Map`, and use the issued `ncpKeyId`.

Add it to `.env`:

```env
NAVER_MAP_CLIENT_ID=your_naver_ncp_key_id_here
```

The app loads:

```js
https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=YOUR_NCP_KEY_ID&language=en
```

## Naver Local Search setup

For AI place questions such as "nearest basketball court", register a Naver Developers application with Search API access and add:

```env
NAVER_SEARCH_CLIENT_ID=your_naver_search_client_id_here
NAVER_SEARCH_CLIENT_SECRET=your_naver_search_client_secret_here
```

The app only shows "Show on Map" for places returned by Naver Local Search and marked as verified.

## Render deployment

Deploy this repository as a Render Web Service.

- Build command: leave empty or use `npm install`
- Start command: `npm start`
- Runtime: Node

Set these environment variables in Render instead of committing `.env`:

```env
AI_PROVIDER=gemini
GEMINI_API_KEY=your_google_ai_studio_api_key_here
GEMINI_MODEL=gemini-3.1-flash-lite
APP_ACCESS_CODE=change-this-before-sharing
NAVER_MAP_CLIENT_ID=your_naver_ncp_key_id_here
NAVER_SEARCH_CLIENT_ID=your_naver_search_client_id_here
NAVER_SEARCH_CLIENT_SECRET=your_naver_search_client_secret_here
```
