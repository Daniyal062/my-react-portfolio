# Daniyal Maqsood — Portfolio

UI/UX Designer & Frontend Developer portfolio built with **React + Vite**.

## Tech Stack

- React 18
- Vite 5
- CSS Modules (no Tailwind, no UI libraries — fully custom)
- Zero runtime dependencies beyond React

## Project Structure

```
portfolio-react/
├── index.html
├── vite.config.js
├── package.json
├── src/
│   ├── main.jsx          ← React entry point
│   ├── App.jsx           ← Root component
│   ├── index.css         ← Global styles + CSS variables
│   ├── components/
│   │   ├── Cursor.jsx    ← Custom animated cursor
│   │   ├── Cursor.module.css
│   │   ├── Nav.jsx       ← Sticky nav with scroll detection
│   │   ├── Nav.module.css
│   │   └── useReveal.js  ← Scroll reveal hook
│   └── sections/
│       ├── Hero.jsx / .module.css
│       ├── Ticker.jsx / .module.css      ← Skills scrolling strip
│       ├── UIUXWork.jsx / .module.css    ← Bento grid case studies + phone animations
│       ├── FrontendWork.jsx / .module.css
│       ├── About.jsx / .module.css
│       └── Contact.jsx / .module.css
```

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start dev server
```bash
npm run dev
```
Opens at `http://localhost:5173`

### 3. Build for production
```bash
npm run build
```
Output goes to `dist/`

### 4. Preview production build
```bash
npm run preview
```

---

## Pushing to GitHub

### First time setup
```bash
# Inside the portfolio-react folder:
git init
git add .
git commit -m "initial commit — portfolio v1"

# Create a new repo on github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### Subsequent pushes
```bash
git add .
git commit -m "your message here"
git push
```

---

## Deployment Options (later)

| Platform | Command | Notes |
|----------|---------|-------|
| **Vercel** | `npx vercel` | Auto-detects Vite, free |
| **Netlify** | Drag `dist/` to netlify.com | After `npm run build` |
| **GitHub Pages** | Add `base` to vite.config.js | See Vite docs |

---

## Customisation

All personal info is in these files:
- `src/sections/Hero.jsx` — name, tagline, stats
- `src/sections/About.jsx` — bio, skill levels
- `src/sections/Contact.jsx` — email, social links
- `src/sections/UIUXWork.jsx` — case study links + mockup content
- `src/sections/FrontendWork.jsx` — project links + descriptions
- `src/index.css` — CSS variables (colours, fonts)
