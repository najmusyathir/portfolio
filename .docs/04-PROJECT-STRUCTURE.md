# 04 — Project Structure

## Folder tree

```
portfolio/
├── .docs/                    ← design + architecture docs (this folder)
├── public/
│   ├── favicon.ico
│   ├── og-image.png          ← 1200×630 OG image for social sharing
│   └── avatar.jpg            ← optional headshot (if used in About)
├── src/
│   ├── app/
│   │   ├── layout.tsx        ← root layout: html, body, fonts, global metadata
│   │   ├── page.tsx          ← home page: assembles all section components
│   │   ├── globals.css       ← design tokens (CSS custom properties) + base reset
│   │   └── favicon.ico
│   ├── components/
│   │   ├── sections/         ← one file per page section
│   │   │   ├── Hero.tsx
│   │   │   ├── Stats.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── AIOrchestration.tsx
│   │   │   ├── Stack.tsx
│   │   │   ├── About.tsx
│   │   │   └── Contact.tsx
│   │   ├── ui/               ← reusable primitives
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── Badge.tsx
│   │   │   └── SectionLabel.tsx
│   │   └── layout/
│   │       ├── Navbar.tsx
│   │       └── Footer.tsx
│   └── lib/
│       └── data.ts           ← all content data (projects, stats, stack items)
├── CLAUDE.md
├── README.md
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Where things go — decision table

| Thing | Where |
| :--- | :--- |
| Project list, stats, stack items | `src/lib/data.ts` — single source of truth for content |
| Section layout + markup | `src/components/sections/` |
| Reused UI primitives | `src/components/ui/` |
| Global CSS tokens | `src/app/globals.css` |
| Static assets (images, icons) | `public/` |
| Fonts | Loaded via `next/font` in `layout.tsx` — no files in `public/` |

## Naming conventions

- Section components: `PascalCase.tsx` matching section name
- UI primitives: `PascalCase.tsx` matching element name
- Data exports in `data.ts`: `PROJECTS`, `STATS`, `STACK_ITEMS` (const arrays, uppercase)
- CSS token names: `--color-*`, `--font-*`, `--space-*`

---
*Last updated: 2026-06-24*
