# Comforting Corner — HTML, CSS and JavaScript export

This package exports the existing Comforting Corner interface into browser-loadable HTML, CSS and JavaScript files while keeping the original React component logic and page flows. The components were transpiled from TypeScript/TSX into JavaScript modules rather than being rewritten as a framework-free app; that is the most reliable way to preserve the existing design and interactions in this conversion.

## Run it on Windows

1. Extract the ZIP.
2. Make sure Node.js is installed.
3. Double-click `start.bat`.
4. Your browser should open `http://localhost:8000`.

Or open a terminal in this folder and run:

```bash
node server.js
```

Then visit `http://localhost:8000`.

## Files

- `index.html` — page entry point and CDN import map.
- `styles.css` — theme tokens and base styles from the original design.
- `js/` — the app and its individual JavaScript component modules.
- `server.js` / `start.bat` — small local static server launcher.

## Important notes

- An internet connection is required because React, Lucide icons, Tailwind's browser runtime, and the Inter font load from CDNs.
- The original project is a front-end demonstration. Bookings, saved profiles, language and theme selections are stored in browser `localStorage`; there is no production backend or real payment/therapy/video infrastructure included.
- Keep this export served over `http://localhost` instead of opening `index.html` via `file://`, because browsers restrict JavaScript module imports from local files.
