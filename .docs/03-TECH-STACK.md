# 03 — Tech Stack

| Tool | Version | Why |
| :--- | :--- | :--- |
| **Next.js** | 16 (App Router) | SSG + SSR capable, same as rest of Acadeon ecosystem, Vercel-native |
| **TypeScript** | 5.x | Type safety, consistent with all other projects |
| **React** | 19 | Latest, pairs with Next 16 |
| **Tailwind CSS** | 4.x | Utility-first, fast iteration, design token support via CSS vars |
| **next/font** | built-in | Zero-CLS font loading |
| **next/image** | built-in | Optimized images, lazy load, WebP |
| **lucide-react** | latest | SVG icons (no emoji in UI — rule) |

## Fonts

| Font | Use |
| :--- | :--- |
| **Inter** | Body text, headings, UI labels |
| **JetBrains Mono** | Code snippets, stat numbers, any monospaced element |

Both loaded via `next/font/google`. No CDN dependency.

## Not included (by design)

| Excluded | Reason |
| :--- | :--- |
| Framer Motion | Overkill for a static portfolio — IntersectionObserver + CSS is enough |
| react-markdown | No markdown content in v1 |
| Any analytics lib | Add only if explicitly requested — no tracking by default |
| CMS | All content is hardcoded in components — static, version-controlled |

## Deployment

Vercel. See `08-DEPLOYMENT.md`.

---
*Last updated: 2026-06-24*
