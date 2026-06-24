# 09 — Roadmap

## Current status

**Phase 0 — Design & docs** — IN PROGRESS (2026-06-24)
- [x] Rename old repo → `portfolio-v1`
- [x] Clone old repo locally as `portfolio-v1`
- [x] Create new `portfolio/` folder
- [x] Full `.docs/` suite written (this session with Umai)
- [ ] Abang reviews docs, confirms design direction
- [ ] 3 open design questions answered (see below)

---

## Phases

### Phase 0 — Design & docs *(current)*
Full design language, content, architecture documented before a single line of code.
Output: this `.docs/` folder.

### Phase 1 — Scaffold (Bastian)
- `npx create-next-app@latest portfolio --typescript --tailwind --app --src-dir`
- Install lucide-react
- Set up `globals.css` with all design tokens from `07-DESIGN-LANGUAGE.md`
- Set up fonts (Inter + JetBrains Mono via `next/font/google`)
- Set up `src/lib/data.ts` with all project/stat/stack data
- Root `layout.tsx` with metadata from `06-API-CONTRACTS.md`
- Empty section component stubs in `src/components/sections/`
- Commit: `chore: scaffold Next.js + design tokens + data layer`

### Phase 2 — Core sections (Bastian)
Build sections in order (each a commit):
1. Hero — name, title, tagline, blinking cursor, CTAs
2. Stats strip — 4 cards
3. Projects — card grid with badges and live links
4. AI Orchestration — copy + stepper diagram
5. Stack — icon grid
6. About — copy + optional avatar
7. Contact — mailto CTA
8. Navbar — sticky, blur, section links
9. Footer — minimal

### Phase 3 — Polish
- Scroll-triggered reveals (IntersectionObserver)
- Stagger animations on card grids
- Mobile QA pass — every section at 375px and 768px
- OG image (`/public/og-image.png`) — 1200×630, dark bg, name + title
- `vercel.json` security headers
- `npm audit` clean

### Phase 4 — Deploy
- Vercel import + domain setup
- DNS update on Cloudflare
- Smoke test all links, OG preview, mobile

### Phase 5 — v2 (future, no timeline)
- Blog / writing section
- Detailed project case studies
- Contact form with backend (Resend)
- Analytics (privacy-friendly, if desired)

---

## Open design questions (Abang to answer before Phase 1)

| # | Question | Options | Default if skipped |
| :--- | :--- | :--- | :--- |
| 1 | **Photo in About section?** | Yes (headshot) / No (text only) | No photo |
| 2 | **Accent color** | Tokyo Night blue `#7aa2f7` / something warmer | `#7aa2f7` |
| 3 | **Any reference site** you like the feel of? | URL or description | Design language in 07 is the reference |

---

## Decision log

| Date | Decision | Reason |
| :--- | :--- | :--- |
| 2026-06-24 | Next.js 16 + TS over Vite | Consistent with Acadeon ecosystem, SSG + SSR capable |
| 2026-06-24 | Tokyo Night dark theme | Visual coherence with terminal tools; premium feel |
| 2026-06-24 | Single-page scroll (no sub-routes in v1) | Portfolio doesn't need routing complexity |
| 2026-06-24 | No analytics by default | Privacy-first; add only if explicitly requested |
| 2026-06-24 | Contact = mailto only in v1 | No backend needed; keeps it static and fast |
| 2026-06-24 | Vercel for hosting | Not self-hosted — portfolio should have Vercel's CDN + SSL, not Cloudflare tunnel |

---
*Last updated: 2026-06-24*
