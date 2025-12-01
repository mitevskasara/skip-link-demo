
# skip-link-demo

A minimal Vite + React + TypeScript demo that illustrates using a "skip link" for keyboard and screen-reader users.


This repository contains two example pages showing the difference between a page with and without a skip link, demonstrating accessible navigation best practices.

Blog post: [Why Your React App Needs a Skip Link (And How to Add One)](https://www.codewithsara.dev/2025/12/why-your-react-app-needs-skip-link-and.html)

**Why this repo exists**: skip links let keyboard and assistive-technology users bypass repetitive navigation and jump straight to the main content. This tiny demo helps frontend developers see an implementation quickly and test behavior.

**Stack**: `Vite`, `React`, `TypeScript`, basic CSS

**Live demo**: Local development via `npm run dev` (see below).

**Contents**
- `src/` : React app source
- `index.html` : App entry HTML
- `package.json` : npm scripts and dependencies

**Key files**
- `src/PageWithSkipLink.tsx` : Example page that includes an accessible skip link
- `src/PageWithoutSkipLink.tsx` : Same page without a skip link for comparison
- `src/Home.tsx`, `src/App.tsx`, `src/main.tsx` : App wiring and navigation between examples

Getting started
---------------

Prerequisites
- Node.js (v16+ recommended) and npm

Install
```
npm install
```

Run development server
```
npm run dev
```

Open `http://localhost:5173` (or the address printed by Vite) and try the examples. Tab through the page to see the skip link appear and jump to main content.

Build for production
```
npm run build
```

Preview production build
```
npm run preview
```

Accessibility notes
-------------------

- **What is a skip link?**: A skip link is a link at the top of the page which becomes visible when focused. Its target is the main content landmark (usually an element with `id="main-content"` or `role="main"`).
- **Why it matters**: Without a skip link, keyboard users must tab through navigation and other repetitive elements on every page before reaching the main content. Screen-reader users also benefit from clearly marked landmarks.
- **How this demo works**: `PageWithSkipLink.tsx` shows a visually-hidden-but-focusable link that becomes visible on keyboard focus and targets the main content area. `PageWithoutSkipLink.tsx` omits this behavior so you can compare.

Testing the skip link
----------------------

- Start the dev server (`npm run dev`).
- Load the page and press `Tab` once or twice. On `PageWithSkipLink` you should see a "Skip to main content" link, press `Enter` to jump.
- Use a screen reader (e.g., VoiceOver on macOS or NVDA/JAWS on Windows) to verify the main landmark is reachable and announced.

Project structure
-----------------

- `src/` — React source files
	- `App.tsx` — App routes/navigation between example pages
	- `Home.tsx` — Simple landing page
	- `PageWithSkipLink.tsx` — Example with skip link
	- `PageWithoutSkipLink.tsx` — Example without skip link
	- `index.css` — Minimal styles including skip link styles

Contributing
------------

Contributions are welcome. For fixes or improvements:

1. Fork the repo
2. Create a branch for your change
3. Open a pull request with a short description of the change

License
-------

This project is provided as-is for demonstration and learning purposes. No license specified — contact the repository owner if you need explicit licensing.

Contact
-------

If you have questions or suggestions, open an issue in the repository.
