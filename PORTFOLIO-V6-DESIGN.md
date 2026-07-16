# Portfolio v6 — Design & Decisions

Production rebuild of Najmu Syathir's portfolio (→ najmusyathir.dev).
Branch `feat/v6-prod` off `main`. Next.js 16 + TypeScript + Tailwind CSS 4 + React 19.

This is a **from-scratch rebuild** of `src/` that preserves the *idea, structure and
clean-light feel* of the true original Vite site (`~/projects/portfolio-v1`) — not a
fork of the Nebula/v2–v5 branches. Repo plumbing (next.config, package.json, tsconfig,
eslint, public assets) was kept from `main`.

---

## 1. Architecture & component decomposition

```
src/
  app/
    layout.tsx            Root layout, metadata/SEO, no-JS reveal flag
    globals.css           Design tokens (@theme) + both palette skins + primitives
    page.tsx              /            (v1 palette)
    landing-2/page.tsx    /landing-2   (proposed palette — same tree, re-skinned)
    about/page.tsx        /about
    projects/page.tsx     /projects
    ai/page.tsx           /ai
    resume/page.tsx       /resume
  components/
    Landing.tsx           Composes the 5 landing sections once (shared by / and /landing-2)
    layout/  Navbar, Footer
    ui/      Icon, Chip, SectionHeading, Reveal   (reusable primitives)
    sections/ Hero, WhatIDo, FeaturedWork, AITeaser, Contact
  lib/
    content.ts            Single source of truth for all copy/data
```

**Reusable primitives vs one-off sections** is a deliberate split: `ui/*` are generic
(used everywhere), `sections/*` are landing-specific compositions, pages own their own
page-specific layout. Nothing is duplicated between `/` and `/landing-2` — they render
the identical `<Landing/>` tree; only the palette wrapper differs.

**Token-driven theming (the key decision).** Every component reads *semantic* CSS
variables (`--c-bg`, `--c-surface`, `--c-ink`, `--c-body`, `--c-muted`, `--c-accent`,
`--c-line`, …). No component hardcodes a hex value. The default `:root` values are the
v1 palette; `[data-palette="editorial"]` overrides the same variables. That's why one
component set yields two full skins — this is the "same content, different skin"
requirement solved structurally rather than by duplicating pages.

---

## 2. Typography

- System font stack (matches v1's original `system-ui` character) — chosen over a
  web font deliberately: zero network dependency at build/runtime (safe for Vercel and
  offline builds), instant paint, and it's the look v1 already had. Mono stack used for
  eyebrows, code-like project names, and metadata.
- A **deliberate type scale** is defined as tokens in `@theme`
  (`--text-xs … --text-4xl`, plus a fluid `--text-display` clamp for the hero). Components
  reference these tokens, not scattered raw sizes — so hierarchy is consistent across
  every page. Headings use tightened tracking (`-0.018em`) and `line-height: 1.12`.

---

## 3. Palette

### Main site (`/` and all inner pages) — true-v1, LOCKED
Kept faithful to v1's documented palette: Oxford Blue ink on white, warm Beaver/Sandal
brown accents, `#f3f3f3`-family soft section bands, soft shadows, rounded corners.
Clean, light, personal — the look Abang explicitly wants preserved.

- ink `#2d3540` (v1 Oxford Blue `#353E4C`, marginally deepened for heading contrast)
- accent `#8a6350` (v1 Beaver `#906B59`, deepened so it passes AA as link/tag text)
- accent-2 `#a4826a` (v1 Sandal), lines `#e6e2dc`, soft bg `#f4f3f1`

### `/landing-2` — "Espresso Editorial" (my proposed palette + rationale)
My senior UI/UX suggestion, offered for side-by-side comparison. Same content/structure.

- **Why this direction:** the brand is "Code, Coffee & Chill" and the person is a café
  hunter. So I leaned *into* warmth rather than away from it — but pushed it from v1's
  soft milk-chocolate neutrals toward a more **editorial, print-inspired** system:
  - warm cream paper `#f7f3ec` instead of flat white → softer, more considered, less
    "default template white".
  - **near-black espresso ink `#22190f`** for headings → noticeably stronger type
    hierarchy and contrast than Oxford Blue, so the page reads more confident/premium.
  - **one** decisive accent: roasted-clay terracotta `#bf5b34` (a coffee-derived hue),
    used sparingly on eyebrows, primary buttons and links.
- **Why it avoids the "AI-generated / vibe-coded" trap:** no purple/blue gradients, no
  glassmorphism, no neon, no glow. It's warm, grounded, editorial — the aesthetic of a
  confident engineer, not an AI demo. That was an explicit guardrail from Abang's
  friends' feedback on prior versions.
- Single-accent discipline + generous whitespace + a real type scale is what makes it
  read as "designed", not "decorated".

Both skins are **light-first** (see deviations re: dark mode).

---

## 4. Content sourcing (what came from where)

- **Landing IA (5 sections)** — Hero / What I do / Featured work / AI (light) / Contact —
  exactly per the approved IA in `portfolio-v6-prod.md`.
- **Hero copy, quote, role title** ("Full-Stack Engineer", "Code, Coffee & Chill",
  WhatsApp `wa.link/k7r72h`) — from the locked decisions.
- **Flagship framing (personal-dashboard)** — the "AI-connected personal life assistant:
  finances, scheduling, meetings, career, tasks → boost human productivity" wording is
  the locked flagship description.
- **Ecosystem** (acadeon-cli, acadeon-pulse, ssh-web-server, ai_hub_bridge) with live
  URLs — from the running file + prior repo `lib/data.ts`.
- **/about** — origin story (PC building → workstations → CS pivot, Python 2019 → CS
  degree 2021) carried from v1's About, **reframed** from junior/front-end to current
  **mid-level full-stack** reality. "My activities" card idea kept (3 cards). Added the
  new **personal hooks**: Kawasaki Ninja 250 (new hobby since myFirst Tech), café-hunting
  by sportbike, "visited cafés across states (JB, Melaka, Kuantan)". **No café names
  hardcoded** (unconfirmed / KIV) — kept general, with a tasteful placeholder line + a
  `TODO` comment for the future "cafés visited" map feature.
- **/projects** — flagship + ecosystem lead; **"Earlier work"** (Bakers Heist, Astral
  Apparel, PetCare Clinic System) carried from v1 with their real screenshots, sitting
  below the flagship.
- **/ai** — **strictly engineering** framing per the hard guardrail: self-hosted,
  reliable, persistent context, structured for human use, directed/audited/owned. **Zero**
  persona/companion/private content.
- **/resume** — all content carried over from the existing repo `/resume` (experience at
  myFirst Tech / Guard Genius / AQ Wise, projects, education, skills). Referees omitted
  (prior decision). Role updated to **Full-Stack Engineer**. Rebuilt in the v6 design
  system rather than porting the Nebula component tree (see deviations).
- Real v1 assets reused from `public/` (already present): `profile_pic.jpg`,
  `aboutme_1/2/3`, `aboutme_bkg`, `project1/2`, `current_project`, `qr_ws.png`,
  `resume.pdf`.

---

## 5. Engineering quality notes

- **Accessibility:** inline-SVG icon set only (house rule — no emoji anywhere), brand
  marks carry `<title>` + `aria-label` on links; `prefers-reduced-motion` disables all
  reveal/transition motion; semantic landmarks (`header`/`main`/`footer`), real headings.
- **Responsive:** mobile-first grids, a real mobile nav (hamburger + panel, closes on
  navigate), fluid clamps for hero/section rhythm. Verified 390px → 1440px.
- **Progressive enhancement:** scroll-reveal is gated behind an `html.js` flag set before
  paint — with no JS, content is fully visible (never trapped at opacity 0). Reveal only
  toggles opacity/transform; content is always in the DOM (SEO-safe).
- **Perf:** all 7 routes prerender as static; `next/image` for all raster assets; hero
  portrait marked `priority`.

---

## 6. Verification

- `tsc --noEmit` — clean.
- `next build` — clean; all routes static (`/`, `/about`, `/ai`, `/landing-2`,
  `/projects`, `/resume`, `/_not-found`).
- `eslint src/**` — clean (0 errors, 0 warnings). Two `react-hooks/set-state-in-effect`
  findings were fixed properly, not suppressed: Navbar closes its menu via link
  `onClick` (removed the pathname effect); Reveal's legacy no-IntersectionObserver
  fallback reveals via `requestAnimationFrame` (async, not a synchronous effect-body
  setState).
- Playwright screenshots (Chromium), desktop 1440 + mobile 390, all 6 routes.
  Confirmed scroll-reveal fires for real users (opacities animate 0→1 on scroll).

---

## 7. Deviations from the brief (flagged)

1. **Worktree location.** The brief said "you are in an isolated git worktree", but the
   worktree the task started in belonged to the `ai/core` repo, not the portfolio repo.
   I created a proper isolated portfolio worktree at
   `~/projects/portfolio-v6-prod` on `feat/v6-prod` off `main`, leaving Abang's existing
   portfolio checkouts (feat/v2-revamp, feat/v5-rebuild, fable-test) untouched.
2. **`node_modules`.** Copied from the sibling checkout (identical package.json) instead
   of a network `npm install`; Turbopack rejects a symlinked `node_modules`, so it's a
   real copy. It's git-ignored.
3. **/resume rebuilt, not literally ported.** The existing `/resume` depended on Nebula-
   only components (AuroraBackground, gradient-text, MailLink, SectionLabel, ScrollReveal
   glue) that clash with the v1 light aesthetic. I carried over **all its content**
   verbatim (jobs, projects, education, skills) but re-implemented it in the v6 design
   system so it's visually consistent with the rest of the site. Role updated to
   Full-Stack Engineer; the interactive project *tabs* were flattened into labeled
   sections (cleaner for a résumé, no client-state needed).
4. **Light-first only (no dark mode).** v1 is light-first and the brief marks dark as
   optional ("respect that; dark optional"). To stay faithful to the locked "keep v1's
   clean light look" I did not add a dark theme. The token system makes adding one later
   a localized change (a `prefers-color-scheme` block overriding the semantic vars).
5. **`lucide-react`** remains in package.json (inherited from main) but is unused — I
   built a bespoke inline-SVG icon set for full control over the aesthetic and to reuse
   v1's exact brand marks. Harmless; left in place to avoid touching plumbing.
6. **PetCare image.** v1 used a `.mp4` for PetCare; I used the `current_project.png`
   still for a clean, reliable card image (no autoplay video on the grid).

---

## 8. Timber & Stone (`/landing-3`) — third skin, dark-first

A third palette added for side-by-side comparison, same as `/landing-2`: it reuses the
existing token system with **zero changes to the landing**. `/landing-3` renders the
identical `<Landing/>` tree inside a `data-palette="timber"` wrapper; the skin is one
new `[data-palette="timber"]` block in `globals.css` overriding the same semantic vars
every component already reads. No component or section was duplicated or edited.

**Mood / intent.** "Super-modern bungalow in the woods" — modern-architectural, warm and
premium, natural materials. Warm near-black charcoal base, graphite raised surfaces,
stone-grey lines, smoked walnut as a structural warm tone, and a single brass/amber
accent. Deliberately **not** the purple/cyan "AI-vibecoded" look: no neon, no gradients-
as-decoration, no glow-everywhere — brass is used with restraint (CTA, eyebrows, links,
key highlights) and walnut is a secondary structural tone, never a second accent.

**Tokens (semantic → hex):**

| Token | Hex | Role |
| :-- | :-- | :-- |
| `--c-bg` | `#1a1917` | warm near-black, darkest surface |
| `--c-bg-soft` | `#211f1b` | faint graphite band |
| `--c-surface` / `--c-surface-2` | `#2e2c29` / `#38342e` | raised cards / chips & inset fills |
| `--c-ink` | `#f4f1ea` | warm off-white headings |
| `--c-body` | `#cfc8bb` | warm light-grey body copy |
| `--c-muted` | `#948d81` | muted **text** (lightened stone) |
| `--c-accent` | `#c6923e` | brass/amber — the single accent |
| `--c-accent-2` | `#7a5c43` | smoked walnut — secondary structural tone |
| `--c-accent-ink` | `#1a1917` | near-black type on the brass button |
| `--c-line` / `--c-line-soft` | `#6e6a63` / `#3a3630` | stone borders / subtle dividers |

**Contrast (dark-first, AA target — measured against `--c-bg` `#1a1917`, L≈0.0098):**
- ink `#f4f1ea` ≈ **14.6:1**, body `#cfc8bb` ≈ **10.6:1** — both comfortably past AA (and AAA).
- accent brass `#c6923e` ≈ **6.3:1** — AA even at small size, so it's safe for link/eyebrow/CTA text on the charcoal bg.

**Adjustments I made (as a senior would), keeping the brief's intent:**
1. **Muted text ≠ raw stone grey.** The brief's mid stone `#6e6a63` is only ≈3.3:1 on the
   bg — fine for **lines/borders** (it reads as a crisp architectural rule), but it fails
   AA as body-adjacent text. So `--c-line` keeps `#6e6a63`, while muted **text**
   (`--c-muted`) is lightened one step to `#948d81` (≈5.3:1) to clear AA. Two roles, two
   values — same stone family.
2. **Accent-ink flips to dark.** On light-first skins `--c-accent-ink` is white (white on
   a dark accent). Brass is a *light* accent, so white-on-brass would be only ~2:1. I set
   `--c-accent-ink` to near-black `#1a1917` → dark type on the brass button hits ≈6.3:1.
3. **Light-text value picked for AA.** From the brief's off-white options I used
   `#f4f1ea` for headings and a slightly softer `#cfc8bb` for body to give real type
   hierarchy while both stay well past AA.
4. **Route wrapper gets `minHeight:100vh`** so the charcoal bg covers the viewport and no
   default-light `body` shows through at overscroll/edges (a dark-first-only concern that
   doesn't apply to the light `/landing-2`).

This does not contradict deviation #4 above: `/` and all inner pages remain light-first
and locked; `timber` is an *opt-in alternate skin on its own route*, not a global dark
mode. Verified: `tsc --noEmit` clean, `next build` clean (all 8 routes static, incl.
`/landing-3`), `eslint src/**` clean (0/0). Playwright shots at 1440 + 390 confirm it's
dark, legible, and the brass accent reads well throughout.

---

## 9. Pinewood (SITE-WIDE DEFAULT) + stone texture

Supersedes the old true-v1 default. `/` and **all** inner pages (`/about`,
`/projects`, `/ai`, `/resume`) now render in **Pinewood** — the new `:root`
palette — automatically. The old v1-light default was retired (it lived on no
named route, so nothing else depended on it). `/landing-2` (editorial) and
`/landing-3` (timber) are untouched reference routes; they keep their own footer
look via skin-scoped `--c-footer-*` tokens (see below).

### Reference → mood
Derived from a dark-timber mid-century bungalow in the woods at dusk: a
**smoke-grey gravel path dominating the foreground**, dark-brown/near-black
**timber cladding**, deep **pine-green foliage**, and a warm **amber window
glow**. The gravel is the dominant surface; the timber is grounding depth
sitting in the grey; pine is the identity accent, amber the warm second accent.

### Light-first, smoke-grey-forward — and why
Pinewood is **light-first**: a smoke-grey ("kelabu asap") base is the dominant
surface everywhere, with **dark-timber grounding** (the footer, deepest text)
and pine/amber accents. This matches Abang's lean ("kelabu asap tu banyak" +
dark timber grounding) and keeps the site's clean, readable, personal feel
rather than flipping to a dark theme. No purple/cyan anywhere (avoids the
"AI-vibecoded" look).

### Final tokens (semantic → hex) — the 4 roles
| Role | Token(s) | Hex | Use |
| :-- | :-- | :-- | :-- |
| **Background — smoke grey (gravel), DOMINANT** | `--c-bg` / `--c-bg-soft` | `#e6e3dc` / `#d8d4ca` | page base + alternating "gravel" bands |
| | `--c-surface` / `--c-surface-2` | `#f1efea` / `#dcd8ce` | raised cards (lift a step) / chips + insets |
| | `--c-ink` (deepest text) | `#1c1a15` | warm near-black headings/depth |
| | `--c-body` / `--c-muted` | `#3d362c` / `#5e564a` | body copy / muted meta |
| | `--c-line` / `--c-line-soft` | `#c7c2b7` / `#d9d5cb` | gravel-tone borders / dividers |
| **Primary — pine-leaf green (foliage)** | `--c-accent` | `#45592f` | eyebrows, links, primary CTA bg, key highlights (identity) |
| | `--c-accent-bright` | `#5a7340` | primary-button hover (brighter foliage) |
| | `--c-accent-ink` | `#f5f3ec` | warm off-white type on the pine button |
| **Secondary — warm amber/honey (window glow)** | `--c-accent-2` | `#ad6a22` | card-hover borders, focus rings — a genuine warm 2nd accent, used as a NON-TEXT accent |
| **Tertiary — dark timber brown (cladding)** | `--c-timber` / `--c-timber-2` | `#2e211a` / `#5a4636` | grounding depth; drives the footer wash |
| | footer set `--c-footer-*` | bg `#2e211a`, ink `#ece7de`, body `#beb4a3`, muted `#a79c89`, line `#4a3a2f`, accent `#8aa862` | dark-timber footer grounding on every page |

Amber is a real second accent (not scattered): it warms **interaction** — the
card-hover "window-glow" border and the résumé menu's focus ring — while pine
stays the identity accent (eyebrows/links/CTAs/icon tiles). Primary buttons
brighten to `--c-accent-bright` on hover (foliage catching light).

### Contrast adjustments (WCAG AA, validated with a luminance script)
All body/heading/accent-as-text pairs clear AA; measured on the surface each
token actually sits on:
- ink `#1c1a15` ≈ **13.6:1**, body `#3d362c` ≈ **9.3:1** on `--c-bg` — past AA (and AAA).
- **muted was darkened to `#5e564a`** (from an earlier `#6e6659` that was only
  ≈3.8:1 on the soft gravel band) so it clears AA everywhere it's small meta
  text: ≈**5.6:1** on bg, ≈**4.9:1** on `--c-bg-soft`, ≈**6.3:1** on surface.
- accent pine `#45592f` ≈ **6.0:1** on bg (≈5.2:1 on the soft band) → AA as
  link/eyebrow/CTA text; accent-ink on the pine button ≈ **7.0:1** (hover
  bright ≈ **4.8:1**).
- **amber `#ad6a22` is deliberately NOT used as body text** (it's ~2.9–3.4:1 on
  the light surfaces — fine for the 3:1 non-text UI-component bar it's held to as
  a hover-border/focus-ring, but it would fail as small text). Kept to non-text
  roles only.
- footer dark-timber grounding: ink `#ece7de` ≈ **12.6:1**, body `#beb4a3` ≈
  **7.6:1**, muted `#a79c89` ≈ **5.8:1**, footer-accent `#8aa862` ≈ **5.8:1**,
  all on `#2e211a` — AA. (Footer-accent is a brightened pine because the base
  `--c-accent` pine is too dark to read on the timber footer.)

### Stone-vein texture ("rekahan batu") + toggle
- **Implementation:** two **self-contained inline-SVG** layers (no external
  files) painted on a fixed, full-viewport `body::before` and blended with
  `mix-blend-mode: soft-light` at `opacity: 0.5`: (1) an organic
  fractal-noise **cracked-stone vein** layer (`feTurbulence` fractalNoise →
  `feColorMatrix` alpha threshold, tuned near-isotropic so it reads as organic
  cracked stone rather than directional woodgrain), and (2) a fine stone
  **grain**. Both are embedded as percent-encoded `data:image/svg+xml` URIs.
  Low-contrast by design — verified body text stays fully legible with it on.
- **Layering:** the overlay sits at `z-index: 40` (below the sticky navbar `50`
  and the résumé menu `60`) so floating UI stays crisp; `pointer-events: none`.
- **Toggle:** `<TextureToggle>` in the footer — an accessible ARIA `switch`
  (`role="switch"` + `aria-checked`), keyboard-operable via the native
  `<button>` (verified: focus ring + Space flips it), inline-SVG icon (house
  rule). It flips `data-texture` on `<html>` and persists to
  `localStorage['pw-texture']`. A pre-paint inline script in the root layout
  resolves the preference before first paint (no flash). **Default: ON.**
- The texture is a **global** background feature, so it also overlays the
  reference routes subtly (barely perceptible on the dark `/landing-3`); this is
  intentional and consistent.

### Reference-route handling
- `/landing-2` (**editorial**) and `/landing-3` (**timber**) are **kept as
  working reference routes**, visually unchanged. To ground the default footer
  in dark timber without mutating those skins, the footer now reads
  skin-scoped `--c-footer-*` tokens: Pinewood sets them to dark timber; the two
  reference skins set them back to their original footer look. `Footer.tsx` was
  updated to consume these tokens (+ the texture toggle was added to it).

### Verification
- `tsc --noEmit` clean · `next build` clean (all 11 routes static, incl.
  `/resume/print`) · `eslint src/**` clean (0/0 — the toggle's mount sync uses
  the repo's `requestAnimationFrame` pattern to satisfy `set-state-in-effect`).
- Playwright (Chromium) 1440 + 390 shots of every page in default Pinewood,
  plus texture-ON/OFF states, résumé download-dropdown open, and the footer
  toggle focus ring + keyboard operation. All pages read well: hero washes,
  gravel section bands, lifted cards, chips, pine buttons, résumé split-button
  + menu, QR card, timber footer.
- The only non-token color left is the QR code's `#fff` backing in `Contact.tsx`
  — kept white **intentionally** for scannability (a coloured QR backing hurts
  scanning); it reads as a deliberate white card on the smoke-grey surface.
- The `/resume/print` route (the PDF source) is fully self-contained with its
  own black-on-white print styles and shares no tokens — untouched, PDFs
  unchanged.
