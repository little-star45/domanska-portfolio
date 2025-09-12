## Domańska — Portfolio (React + Vite)

A personal portfolio built with React (Vite), showcasing projects, experience, and contact in a lightweight, modern format. Deployed on Vercel.

- Live: https://personal-portfolio-vert-two-16.vercel.app
- Repo: https://github.com/little-star45/domanska-portfolio

### Features
- **Responsive layout** (mobile-first)
- **Sections**: hero, projects, about, contact
- **Fast loading** thanks to Vite and minimal configuration
- **ESLint** for code consistency

### Technologies
- **React** + **Vite**
- **JavaScript**, **CSS**
- **ESLint** (configured in `eslint.config.js`)

### Structure (overview)
- `src/` — app components and assets
- `index.html` — base document
- `vite.config.js` — Vite configuration
- `package.json` — scripts and dependencies

### Project Structure and Organization
The project is organized to keep features isolated, assets tidy, and content easily maintainable. Core principles:
- **Per-feature separation**: components, styles, and assets grouped by feature/section where possible
- **JSON-driven content**: data is stored in JSON files and mapped in components, making the UI easy to update without touching logic
- **Clear directories**: dedicated folders for components, pages/sections, data, assets, utilities, and global styles

Example structure:
```text
domanska-portfolio/
  index.html
  vite.config.js
  eslint.config.js
  package.json
  src/
    assets/               # images, icons, media
    components/           # shared UI: Button, Card, SectionTitle, etc.
    sections/             # page sections: Hero/, Projects/, About/, Contact/
    data/                 # JSON content used by components
      projects.json       # list of projects (title, desc, links, tags, images)
      experience.json     # timeline/roles
      skills.json         # skill groups/badges
    utils/                # helpers (formatters, constants)
    styles/               # global styles, variables
    App.jsx               # composition of sections
    main.jsx              # React entry
```

### Data Files (JSON)
- **`src/data/projects.json`**: source of truth for the Projects section (titles, descriptions, tech tags, links, images)
- **`src/data/skills.json`**: skills grouped by categories (used to render badges/grids)
- **`src/data/experience.json`**: roles, dates, companies, and responsibilities

Benefits:
- **Easy updates**: add/edit projects by changing JSON only
- **Reusability**: present the same data in multiple components consistently
- **Separation of concerns**: UI stays focused on rendering, not hard-coded data


### Local Development
```bash
git clone https://github.com/little-star45/domanska-portfolio.git
cd domanska-portfolio
npm install
npm run dev
```
Open the address shown by Vite (e.g., `http://localhost:5173`).

### Production Build
```bash
npm run build
npm run preview
```

### Deployment
- Deployed on **Vercel** (continuous deployment from GitHub).

### License
No license