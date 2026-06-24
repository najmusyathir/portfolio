# 05 — Dev Protocol

## Who builds what

| Role | Scope |
| :--- | :--- |
| **Bastian** | All code — scaffolding, components, styling, build |
| **Umai** | Design decisions, copy, content, architecture calls |
| **Abang** | Final review, approval, deploy trigger |

## Coding conventions

- **No emoji in UI** — use inline SVG or lucide-react icons only. This is a hard rule across all Acadeon projects.
- **CSS custom properties for all design tokens** — never hardcode hex values in components. Use `var(--color-accent)` etc.
- **Content in `data.ts`** — no copy hardcoded inside JSX. If it's text a human would read, it belongs in `src/lib/data.ts`.
- **No inline styles** — Tailwind classes or CSS modules only.
- **TypeScript strict** — no `any`, no untyped props.
- **Components are dumb** — section components receive data as props or import from `data.ts`. No fetching inside components.

## Commit style

```
feat: add Projects section with card grid
chore: scaffold Next.js + Tailwind base
fix: hero CTA button alignment on mobile
```

- Types: `feat/`, `chore/`, `fix/` only
- One concern per commit
- Abang handles PRs and merges manually

## File size

- Keep components under 200 lines. Split if approaching that.
- `data.ts` can grow freely — it's pure data.

## Responsive breakpoints (Tailwind defaults)

| Breakpoint | Width | Use for |
| :--- | :--- | :--- |
| (default) | < 640px | Mobile — single column, stacked |
| `sm` | 640px | Tablet adjustments |
| `md` | 768px | Two-column layouts begin |
| `lg` | 1024px | Desktop — full layout |
| `xl` | 1280px | Wide desktop, max content width |

Max content width: `max-w-5xl` (1024px) centered. Never full-bleed text content.

---
*Last updated: 2026-06-24*
