# 01 — Architecture

## Page model

Single-page application with smooth scroll between sections. No sub-routes in v1.

```
/                   ← the entire portfolio, one page
```

## Section order

```
┌─────────────────────────────────────┐
│  Hero                               │  full viewport, name + title + CTA
├─────────────────────────────────────┤
│  Stats strip                        │  4 numbers, horizontal
├─────────────────────────────────────┤
│  Projects                           │  card grid (2-col desktop, 1-col mobile)
├─────────────────────────────────────┤
│  AI Orchestration                   │  differentiator section, flow diagram
├─────────────────────────────────────┤
│  Stack                              │  icon + label grid
├─────────────────────────────────────┤
│  About                              │  3-4 sentences + optional photo
├─────────────────────────────────────┤
│  Contact                            │  email + GitHub, minimal
└─────────────────────────────────────┘
```

## Component tree

```
app/
  layout.tsx          ← html, body, fonts, metadata
  page.tsx            ← assembles all sections in order
  globals.css         ← design tokens (CSS vars), base reset

components/
  sections/
    Hero.tsx
    Stats.tsx
    Projects.tsx
    AIOrchestration.tsx
    Stack.tsx
    About.tsx
    Contact.tsx
  ui/
    ProjectCard.tsx   ← reused per project
    StatCard.tsx      ← reused per stat
    Badge.tsx         ← tech tag pill
  layout/
    Navbar.tsx        ← sticky top nav (optional), links to section anchors
    Footer.tsx        ← minimal, copyright
```

## Rendering strategy

- **SSG** (static site generation) — all content is hardcoded in components. No API calls, no dynamic data.
- Deployed on Vercel edge network. `output: 'export'` or default Next.js SSG via `generateStaticParams` not needed (no dynamic routes).
- `next/font` for font loading (zero CLS).
- `next/image` for any images (optimized, lazy).

## Scroll & animation

- Scroll-triggered section reveals: `IntersectionObserver` or lightweight CSS `@keyframes` with `animation-play-state`.
- No scroll-jacking. Native scroll only.
- Navbar section highlight: `IntersectionObserver` tracks which section is in viewport → updates active nav link.

---
*Last updated: 2026-06-24*
