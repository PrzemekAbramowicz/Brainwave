# Brainwave

---

[![React](https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES_Modules-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

Brainwave is a modern, responsive landing page for an AI chat platform. It combines a futuristic visual direction with smooth parallax effects, product showcases, integrations, pricing and a roadmap — all wrapped in a polished single-page experience.

## Tech Highlights

---

- **Frontend:** React 19 with reusable, component-based sections
- **Build tooling:** Vite 8 with fast development and optimized production builds
- **Styling:** Tailwind CSS 4, custom theme tokens and responsive utilities
- **Motion:** Scroll-based parallax effects powered by React Just Parallax
- **Navigation:** React Router DOM with anchor-based page sections
- **Quality:** ESLint, Prettier and React Compiler support
- **Design:** Custom SVG decorations, gradients, cards and responsive layouts

## What You Can Explore

---

- Discover the AI chat product through an animated hero section.
- Browse feature cards focused on smarter and faster AI-assisted work.
- Explore collaboration integrations presented in an interactive visual layout.
- Preview AI use cases including photo editing and video generation.
- Compare product plans in a dedicated pricing section.
- Follow planned features and their progress on the product roadmap.
- Use the complete experience across desktop, tablet and mobile screens.

## Tech Stack

---

| Area | Technology |
| --- | --- |
| UI | React 19 |
| Styling | Tailwind CSS 4 |
| Bundler | Vite 8 |
| Routing | React Router DOM 7 |
| Effects | React Just Parallax, Scroll Lock |
| Code quality | ESLint, Prettier |

## Getting Started

---

### Prerequisites

- [Node.js](https://nodejs.org/) 20.19+ or 22.12+
- npm

### Installation

```bash
git clone git@github.com:PrzemekAbramowicz/Brainwave.git
cd Brainwave
npm install
npm run dev
```

The development server will print the local address in the terminal — by default, it is `http://localhost:5173`.

## Available Scripts

---

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create an optimized production build |
| `npm run lint` | Check the codebase with ESLint |
| `npm run preview` | Preview the production build locally |

## Project Structure

---

```text
Brainwave/
├── public/               # Public icons and favicon
├── src/
│   ├── assets/           # Images, icons and SVG components
│   ├── components/       # Page sections and reusable UI components
│   │   └── design/       # Decorative section-specific elements
│   ├── constants/        # Navigation, features, pricing and roadmap data
│   ├── App.jsx           # Main page composition
│   ├── index.css         # Tailwind theme and global styles
│   └── main.jsx          # Application entry point
├── package.json
└── vite.config.js
```

## Status

---

Brainwave is currently a frontend presentation project. The AI interactions and product actions shown in the interface are visual concepts and are not connected to an AI service or backend.

## License

---

This repository does not currently include a license.
