# LinkedIn Profile Clone

A React/Vite educational clone of a LinkedIn-style profile page built for Pursuit L2.

This project is a strict front-end clone exercise. The purpose is to reproduce the structure, layout, and interaction patterns of a LinkedIn-style profile page without connecting to LinkedIn, using LinkedIn APIs, scraping LinkedIn, or using proprietary LinkedIn assets.

## Repository Description

A React/Vite educational clone of a LinkedIn-style profile page built for Pursuit L2. Focused on clone fidelity, component architecture, debugging discipline, security hygiene, and front-end development workflows.

## Project Purpose

This project is designed to practice:

- Front-end cloning discipline
- React component structure
- Vite project setup
- Static data architecture
- Clickable UI behavior
- GitHub collaboration workflow
- Security and repository hygiene
- Debugging without layout drift
- Documentation-first development

## Important Project Boundary

This is **not** a redesign.

This is **not** GamerCard.

This is **not** a product revamp.

This is **not** a backend application.

This is a LinkedIn-style profile page clone for educational use only.

## Tech Stack

- React
- Vite
- JavaScript
- CSS
- lucide-react icons
- GitHub
- VS Code / Antigravity

## Project Agents

This project uses named agents for governance:

| Agent | Role |
|---|---|
| JIRO ONO | Clone Fidelity + Final Execution Approval |
| Ant Wilson | Security + Data Hygiene |
| Grace Hopper | Debugging + Build Stability |

## Project Structure

```text
linkedin-profile-clone/
├── README.md
├── AGENTS.md
├── SECURITY.md
├── DEBUGGING.md
├── EXECUTION.md
├── HISTORY.md
├── ARCHITECTURE.md
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── styles.css
    └── data/
        └── profileData.js
```

## Required File Placement

`App.jsx` imports the profile data from:

```js
import { profile } from './data/profileData.js';
```

That means the data file must be located here:

```text
src/data/profileData.js
```

`main.jsx` imports the stylesheet from:

```js
import './styles.css';
```

That means the CSS file must be located here:

```text
src/styles.css
```

If the CSS file is named `styles(1).css`, rename it to:

```text
styles.css
```

## How to Run

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Build project:

```bash
npm run build
```

Preview build:

```bash
npm run preview
```

## GitHub Workflow

Natalie may work in VS Code.

Mark Perez may work in Antigravity.

That is acceptable as long as GitHub remains the source of truth.

Recommended workflow:

1. Pull before editing.
2. Work on a focused task.
3. Avoid editing the same file at the same time.
4. Commit small changes.
5. Push to GitHub.
6. Review changes before merging.

## Clone Rules

Allowed:

- Fix broken imports
- Add safe click behavior
- Improve accessibility
- Fix bugs
- Improve file organization
- Update documentation
- Preserve responsive behavior

Not allowed:

- Redesigning the page
- Changing layout hierarchy
- Adding a backend
- Adding authentication
- Adding Supabase
- Adding a database
- Connecting to LinkedIn
- Scraping LinkedIn
- Using LinkedIn proprietary assets

## Educational Use Notice

This project is for educational purposes only. It is not affiliated with, endorsed by, or connected to LinkedIn.
