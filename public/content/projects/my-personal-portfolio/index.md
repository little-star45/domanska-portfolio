## Patrycja Domańska — Portfolio (React + Vite)

A personal portfolio built with React (Vite), showcasing projects, experience, and contact in a lightweight, modern format. Deployed on Vercel.

- [Live](https://personal-portfolio-vert-two-16.vercel.app) - live portfolio preview
- [Repo](https://github.com/little-star45/domanska-portfolio) - GitHub repo

### Features
- **Responsive layout** (mobile-first)
- **Dark/Light mode toggle** with `localStorage` persistence and system preference detection
- **Project modal** for viewing detailed descriptions from markdown files
- **Responsive Navbar** with hamburger menu (using lucide-react icons)
- **Enhanced Skills section** with styled technology icons and dynamic coloring
- **Sections**: hero, projects, about, contact
- **Fast loading** thanks to Vite and minimal configuration
- **ESLint** for code consistency
- **Skill progress bars** enhances UX by visually showing proficiency levels
- Improved UI with custom fonts (Figtree, Fira Code), soft shadows, and rounded backgrounds

### Technologies
- **React 19** + **Vite**
- **JavaScript**, **CSS**
- **TailwindCSS 4.0**
  - **@tailwindcss/typography** - styling rich text content (headings, lists, paragraphs) automatically
- **ESLint** (configured in `eslint.config.js`)

#### Npm libraries:
  - **@headlessui/react** — accessible, unstyled UI components (e.g., modal, transitions)
  - **lucide-react** — a set of modern icons as React components
  - **react-markdown** — rendering Markdown content in React
  - **rehype-raw** — support for raw HTML inside Markdown
  - **vite-plugin-svgr** — import SVGs as React components

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
  public/
    assets/
      icons/ #technologies icons
      thumbnail/ #projects thumbnail
    content/
      projects/
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