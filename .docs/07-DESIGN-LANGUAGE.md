# 07 — Design Language

**This is the primary doc for any UI work. Load this before touching any component.**

Theme: **Charcoal & Oud**. Rewritten 2026-11-06 from the live code (`dev` @ c1f58ca); it replaces the retired "Nebula" theme. Code wins over any older doc. File:line refs point into `src/`.

---

## Design philosophy

Cool charcoal near-black base ("kayu arang"), dark oud wood grounding the footer, one warm brass accent, nothing else. A confident engineer's own site, not an AI demo. Dark-first, calm, dense, engineered. Audience: hiring managers and clients.

It refuses: purple or cyan gradients, glassmorphism, neon, textures or grain, pine green, a second accent, web fonts. Two redesigns were rejected on 2026-09-29. Work here refines inside this language and never re-skins it; a redesign request is a decline, not a proposal.

---

## Theme system

- Dark and light, switched by a `dark` class on `<html>` set by a pre-paint script: dark unless `localStorage.theme` is `light`, else follows the OS (`layout.tsx:57-67`).
- Dark skin at `globals.css:181-207`, light skin at `129-155`.
- Light theme is "v2 first pass, not final" (`globals.css:83-85`).

### OPEN: light theme brass-as-text contrast fails

In light mode the brass accent used as text measures 1.4 to 2.0 contrast and fails WCAG (`globals.css:108-126`). Abang has not decided the light theme. Until he does:

- Fix brass-as-text before any light-mode work (`globals.css:119-124`).
- Add no new accent text in light mode, unchecked.

---

## Color tokens

Components read semantic `--c-*` tokens only. The only hardcoded hex are the wordmark's brass period (`Logo.tsx:46`) and the QR card's white (`Contact.tsx:64`). Brass is the single accent; bronze (`accent-2`) is non-text only (hover borders, focus rings); oud is the footer. `--hero-wash` is a vertical gradient of background tones only (`globals.css:145`).

| Token | Dark value | Role |
| :--- | :--- | :--- |
| bg | `#16181a` | page base |
| bg-soft | `#1c1f22` | alternate section |
| surface | `#212528` | cards |
| surface-2 | `#2c3135` | chips, active nav |
| ink | `#e8ecee` | headings |
| body | `#c3c9ce` | prose |
| muted | `#949ca2` | secondary |
| accent | `#c6923e` | brass, the single accent |
| accent-bright | `#d9a85a` | primary hover |
| accent-2 | `#9c6b34` | bronze, non-text only |
| accent-ink | `#16181a` | text on brass |
| line | `#3a4247` | borders |
| line-soft | `#262b2f` | rules |
| oud | `#221b17` | footer band |
| footer-ink | `#ece7e1` | footer text |
| footer-body | `#c4bbb0` | footer prose |
| footer-accent | `#d9a85a` | footer accent |

Light skin values: bg `#d9dbdd`, surface `#eef0f1`, ink `#16181a`, muted `#3a4247`, line `#a4a8ab`.

Contrast on bg, dark (`globals.css:166-178`): ink 14.97, body 10.65, muted 5.64, accent as text 6.43 (4.75 on surface-2), accent-ink on brass 6.43, bronze 3.87 (non-text only).

---

## Typography

System stacks, no web font: a deliberate zero-network choice (`globals.css:34-37`). Sans (`system-ui`) for headings and prose; mono (`ui-monospace`) for anything data-like: eyebrows, project names, dates, tags, coordinates, captions. Do not load Inter, JetBrains Mono or any `next/font`.

Headings weight 700, tracking -0.018em, line-height 1.12 (`globals.css:255-260`); body line-height 1.65. Weights used: 500, 600, 700.

| Role | Font | Size | Weight | Notes |
| :--- | :--- | :--- | :--- | :--- |
| Display | sans | `clamp(2.75rem, 7vw, 5rem)` | 700 | hero h1 only, line-height 1.02 (`Hero.tsx:28-33`) |
| Headline-lg | sans | 2.25rem | 700 | h2 (`SectionHeading.tsx:28`) |
| Project name | mono | 1.125rem | 700 | |
| Body-lg | sans | 1.125rem | 400 | |
| Eyebrow | mono | 0.75rem | 600 | tracking 0.16em, accent |
| Label-md | sans | 0.875rem | 600 | buttons |
| Mono-xs | mono | 0.75rem | 500 | chips, line-height 1.4 |

Untokenised: card h3 1.375rem 700, hero role 1.375rem 600 in accent (`Hero.tsx:40-49`), body 1rem, a 0.6rem mono map label (`CafeTrail.tsx:210-218`). Intros run 44 to 64ch.

---

## Layout and spacing

One centred container with fluid gutters. Sections alternate `bg` and `bg-soft`; inner pages open on a `hero-wash` header under a `line-soft` rule. Grids are mobile-first and go multi-column at a per-component breakpoint (640 to 1000px). Heroes split 1.1fr 0.9fr at 900px, portrait right (`Hero.tsx:114-122`). The cafe map is sticky at top 92px (`CafeTrail.tsx:323`).

| Use | Value |
| :--- | :--- |
| Container max | 1120px |
| Container gutter | `clamp(1.25rem, 4vw, 2.5rem)` |
| Section padding | `clamp(3.5rem, 8vw, 6.5rem)` |
| Tight section | `clamp(2.5rem, 6vw, 4.5rem)` |
| Heading to grid | 2.5rem |
| Card padding | 1.5rem (feature 1.75rem, hero `clamp(1.75rem, 4vw, 2.75rem)`) |
| Grid gap | 1.25rem |
| Chip gap | 0.5rem |
| Nav height | 68px |
| Narrow column | 820px |
| Measure | intro 44ch, body 62ch |

---

## Elevation and shapes

Hierarchy is four tonal steps (bg, bg-soft, surface, surface-2) plus 1px `line` borders, not shadows. Shadows exist in three places only: card hover `0 18px 40px -24px rgb(shadow / 0.45)` (`globals.css:305`), under media such as the portrait `0 30px 60px -30px` (`Hero.tsx:112`), and a brass glow under the primary button (`globals.css:331`). Blur only on the scrolled navbar (12px) and the lightbox overlay (14px), never on cards.

Radii: pills (999px) for anything small and interactive (buttons, chips, nav items, social circles, toggles); 16px cards; 24px media and map panel; 10px thumbs and the mobile menu button. Icon tiles are 38 to 48px squircles at 12 to 14px, accent at 12% mix (`WhatIDo.tsx:19-33`, `Now.tsx:57-70`). No radii outside 10, 12 to 14, 16, 24, 999.

---

## Components

| Component | Spec | Source |
| :--- | :--- | :--- |
| Primary button | brass fill, accent-ink text, pill, label-md, padding 0.85rem 1.4rem; hover accent-bright; active `translateY(1px)`; brass glow | `globals.css:310-343` |
| Ghost button | transparent, ink text, 1px `line` border, pill; hover text and border accent | `globals.css:310-343` |
| Chip | mono-xs pill on surface-2, body text, `line` border, never coloured; stack row led by a muted mono "Stack" label | `globals.css:347-359`, `WhatIDo.tsx:56-71` |
| Card | `.surface` plus `.card-hover`: surface fill, 1px line, 16px radius; hover lifts 3px with a bronze-tinted border (`color-mix` accent-2 55% with line) | `globals.css:293-306` |
| Eyebrow and heading | 1.75rem brass hairline before the mono eyebrow; h2; optional intro at 44ch; centred only on About activities | `globals.css:284-290`, `SectionHeading.tsx` |
| Navbar | sticky; bg at 82% with blur once scrolled; link pills muted 600, active ink on surface-2; wordmark "Najmu." with brass period | `Navbar.tsx:24-98`, `Logo.tsx:37-47` |
| Icon buttons, footer | 40px circles on `line`, hover accent, focus `2px solid accent`; footer is the dark oud band on every page | `ThemeToggle.tsx:19-52`, `Footer.tsx:4-77` |
| Link | `.link-underline`: accent 600, 1.5px underline scaling in from the left | `globals.css:392-410` |
| Page-specific | cafe trail (dot-matrix peninsula, dashed brass route, lit pin with ping, 3s idle cycle); photo grid (4:3 thumbs at 10px, blurred lightbox); 5px brass dot bullets | `CafeTrail.tsx:94-146`, `PhotoGrid.tsx:148-243` |

Inputs, tooltips, checkboxes and radios are not defined: the site has no forms. The CTA is WhatsApp ("Message me"), never a form.

### Icons

Inline SVG on `currentColor`, stroke 1.6 to 1.8 (`Icon.tsx:1-33`). No icon library, no emoji, no rainbow brand icons. `lucide-react` was removed from package.json.

---

## Motion

Content is visible without JS; `html.js` gates the reveal (`globals.css:369-388`). `prefers-reduced-motion` collapses all motion (`globals.css:233-242`). No scroll-jacking, no parallax, no animation library.

| Motion | Value | Source |
| :--- | :--- | :--- |
| Scroll reveal | opacity 0 to 1, `translateY(16px)` to 0, 620ms ease, at 15% visible | `globals.css:373-382`, `Reveal.tsx:47` |
| Stagger | hero 0/80/140/160/200/260ms; grids `i * 70` to `i * 90` ms | `Hero.tsx:21-83`, `WhatIDo.tsx:17` |
| Micro | 160 to 240ms ease on colour, border, background; cafe cards 350ms | `globals.css:299, 321-323` |
| Ambient | cafe route drift 26s, pin ping 2.4s; lightbox fade 220ms, rise 300ms `cubic-bezier(0.22, 1, 0.24, 1)` | `CafeTrail.tsx:228-238`, `PhotoGrid.tsx:193-207` |

Hover moves never exceed 3px.

---

## Voice

- Section titles are short sentences with a full stop ("Three things, done properly."); eyebrows in sentence case ("Featured work") (`WhatIDo.tsx:12`, `FeaturedWork.tsx:15`).
- First person, concrete, no hype; caveats stay on the card (`content.ts:148-186, 335-377`).
- Role is "Full-Stack Developer". "Code, Coffee & Chill" appears once, on About (`content.ts:9-23`).
- Full `https://` URLs, never bare domains.
- Never name Umai, Bastian or any internal persona; AI is told as engineering only (`content.ts:379`, `.docs/00-OVERVIEW.md:23`).

---

## Rules: hard limits

- No emoji in UI; inline SVG only.
- No hardcoded hex in components (the Logo period and QR white are the only exceptions); use `--c-*` tokens.
- Brass is the single accent; bronze for hover borders and focus rings only. No second accent, green, purple, cyan, neon, decorative gradients, glassmorphism, blurred cards, textures or grain.
- No web font or display serif.
- No Tailwind utilities in JSX and no arbitrary bracket values such as `max-w-[96rem]`; use CSS primitives and the `@theme` scale.
- One primary CTA per intent (three CTAs for one action is an open audit point).
- No scroll-jacking, parallax or animation libraries.

---

## Superseded

The old Nebula doc (2026-06-24) described violet-to-rose gradients, aurora orbs, `data-theme`, `--color-accent-from/mid/to`, Inter and JetBrains Mono via `next/font`, lucide-react, a single page with a stats strip and stepper, and "Solution Architect". None of that is live. `PORTFOLIO-V6-DESIGN.md` sec. 3 and 7.4 ("light v1 LOCKED, no dark mode") are superseded by its sec. 9-10; its `/landing-2` and `/landing-3` routes were removed (`globals.css:26-29`). The site now has 8 routes.

Source of extraction: `~/ai/core/personas/iris/references/design-language/portfolio/DESIGN.md`.

*Last updated: 2026-11-06*
