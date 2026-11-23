# Project Task Tracker & Roadmap

## Phase 1: Core Foundation & Next.js Migration (COMPLETED ✅)
- [x] Migrate from Vite to Next.js 15 (App Router) + TypeScript.
- [x] Configure Tailwind CSS v3 with PostCSS and custom theme tokens.
- [x] Setup Material UI (MUI v6) with `@mui/material-nextjs` Emotion cache.
- [x] Integrate Styled-Components v6 with `StyledComponentsRegistry` SSR provider.
- [x] Setup Redux Toolkit (RTK) with typed hooks (`useAppDispatch`, `useAppSelector`).
- [x] Setup RTK Query with base API, tag caching, and live endpoints.
- [x] Setup Redux Persist with SSR-safe fallback storage engine.
- [x] Establish scalable folder structure (`app`, `components`, `config`, `features`, `store`, `providers`, `hooks`, `types`, `utils`).
- [x] Pass strict TypeScript verification (`tsc --noEmit`).
- [x] Pass Next.js production build (`next build`).

---

## Phase 2: SS Exterior Brand & Content Integration (COMPLETED ✅)
- [x] Import official SS Exterior logo asset (`public/images/logo.jpg`).
- [x] Import office verification plaque (`public/images/signboard.jpg`).
- [x] Populate business details: Mobile (`7905080922`), Email (`Ssexterior7668@gmail.com`), Address (`Sohna, Gurugram, Haryana`), GST (`06DQEPK3236F1Z3`).
- [x] Integrate Instagram channel (`https://www.instagram.com/ssexteri_or`).
- [x] Create comprehensive `.md` specifications in `docs/`:
  - [x] `docs/PRD.md`
  - [x] `docs/ARCHITECTURE.md`
  - [x] `docs/RULES.md`
  - [x] `docs/DESIGN.md`
  - [x] `docs/TASKS.md`
  - [x] `docs/MEMORY.md`

---

## Phase 3: Commercial Web Features & Showcase (IN PROGRESS 🚀)
- [ ] Connect brand hero section to user-provided copy and CTAs.
- [ ] Implement Materials & Services gallery:
  - [ ] ACP (Aluminium Composite Panels)
  - [ ] HPL (High Pressure Laminates)
  - [ ] WPC Louvers & Exterior Finishes
  - [ ] C-Channel Systems
  - [ ] Wooden Flooring
  - [ ] Wallpaper & Aluminium Solutions
  - [ ] Elevation Works
- [ ] Implement instant WhatsApp consultation button linked to `+91 7905080922`.
- [ ] Implement interactive Quote Calculator / Inquiry form with RTK Query.
- [ ] Embed interactive Google Map for Gurugram office location.

---

## Phase 4: Production Optimization & Deployment
- [ ] Add Next-SEO / OpenGraph metadata tags with `logo.jpg`.
- [ ] Implement Google Analytics & Facebook Pixel tags for advertising.
- [ ] Deploy to production hosting (Vercel / Railway / AWS).
- [ ] Setup CI/CD pipeline with GitHub Actions for automated type-checking and builds.
