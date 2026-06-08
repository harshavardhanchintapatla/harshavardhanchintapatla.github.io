# Harshavardhan Chintapatla — Portfolio

Personal software engineering portfolio for [Harshavardhan Chintapatla](https://harshavardhanchintapatla.github.io).

**Built with:** React 18 · TypeScript · Vite 4 · Tailwind CSS · React Router v6

---

## Features

- **Dark / Light mode** toggle
- **Recruiter Mode / Engineer Mode** toggle — concise summaries vs. architecture deep-dives
- **Project Match by Role** — highlights projects relevant to a target role (Java Full Stack, AWS, AI/RAG, SDET, etc.)
- **5 deep case study pages** — problem, architecture diagram, key decisions, tradeoffs, testing, security, production improvements
- **SDLC / STLC Map** — visual lifecycle mapping for all five projects
- **System Design Highlights** — 10 engineering decision cards with reasoning
- **Resume page** — structured web resume + PDF download
- **Contact page** — mailto-backed contact form
- Fully responsive, keyboard navigable, semantic HTML, ARIA labels
- SEO and OpenGraph metadata

---

## Projects

| Project | Categories |
|---|---|
| MizzouCloudDevOps Learning Portal | Full Stack · Backend · AWS · AI/RAG |
| RISE/PAALAB Research Chatbot | AI/RAG · Backend |
| Remote Patient Health Monitoring | AWS · Backend · System Design |
| McDonald's NPOS Release Automation | SDET · QA Automation |
| OrangeHRM Java Automation Framework | SDET · QA Automation |

---

## Local Development

```bash
# Install
npm install --ignore-scripts

# Windows only — if esbuild fails:
npm install @esbuild/win32-x64 --ignore-scripts

# Dev server (http://localhost:5173)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Type check
npm run typecheck
```

---

## Structure

```
src/
  components/layout/   # Navbar, Footer, Layout
  components/sections/ # Hero, About, Experience, Projects, Skills, SystemDesign, EngineeringProof
  data/                # projects.ts, experience.ts, skills.ts
  pages/               # Home, ProjectDetail, ResumePage, ContactPage, SDLCPage
  types/               # Shared TypeScript interfaces
```

---

## Deployment

Push to `main` — the included `.github/workflows/deploy.yml` builds and deploys to GitHub Pages automatically.

**One-time setup:** Repository Settings → Pages → Source → GitHub Actions

---

## Resume PDF

Add `Harsha_s_Resume.pdf` to the `public/` folder. The Resume page links to it automatically.

---

## Contact

- chintapatlaharshavardhan@gmail.com
- [github.com/harshavardhanchintapatla](https://github.com/harshavardhanchintapatla)
- [linkedin.com/in/harshavardhan-chintapatla](https://linkedin.com/in/harshavardhan-chintapatla)
