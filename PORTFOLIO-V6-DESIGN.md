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

## 9. Charcoal & Oud (SITE-WIDE DEFAULT) — supersedes Pinewood; texture removed

Supersedes the rejected **Pinewood** default (smoke-grey base + pine-green
accent + stone-vein texture). `/` and **all** inner pages (`/about`,
`/projects`, `/ai`, `/resume`) now render in **Charcoal & Oud** — the new
`:root` palette — automatically. `/landing-2` (editorial) and `/landing-3`
(timber) are untouched reference routes; they keep their own footer look via
skin-scoped `--c-footer-*` tokens (see below).

### Why the change (Abang's feedback)
Pinewood was rejected: the **pine-green accent** was disliked, the smoke-grey
base read **too warm/yellowish**, and the **stone-vein texture "messed up
everything."** Abang wanted the site **darker / more black-charcoal** ("kayu
arang"), **cooler (bluish) tones**, **dark OUD wood**, and liked the dark look
of `/landing-3`. Charcoal & Oud is a **refined, cooler, blacker evolution of
the `/landing-3` timber skin**.

### Direction → mood
Dark-first. **Cool charcoal near-black** ("kayu arang") is the dominant base —
every grey/dark carries a **cool/bluish undertone** (the explicit fix for
Pinewood's warm/yellow cast). **Dark OUD wood** (near-black agarwood brown) is
the grounding depth that drives the footer. A **single warm brass/amber accent**
(replaces pine green — **no green anywhere**) carries eyebrows, links, CTAs and
key highlights. No purple/cyan (avoids the "AI-vibecoded" look).

### Final tokens (semantic → hex) — the roles
| Role | Token(s) | Hex | Use |
| :-- | :-- | :-- | :-- |
| **Base — cool charcoal near-black, DOMINANT** | `--c-bg` / `--c-bg-soft` | `#16181a` / `#1c1f22` | page base + alternating cool bands |
| | `--c-surface` / `--c-surface-2` | `#212528` / `#2c3135` | raised cards (lift a step) / chips + insets |
| | `--c-ink` (brightest text) | `#e8ecee` | cool off-white headings |
| | `--c-body` / `--c-muted` | `#c3c9ce` / `#949ca2` | cool body copy / cool muted meta |
| | `--c-line` / `--c-line-soft` | `#3a4247` / `#262b2f` | cool charcoal borders / subtle dividers |
| **Accent — warm brass/amber (the ONLY accent)** | `--c-accent` | `#c6923e` | eyebrows, links, primary CTA bg, key highlights (identity) |
| | `--c-accent-bright` | `#d9a85a` | primary-button hover (brighter brass) |
| | `--c-accent-ink` | `#16181a` | near-black type on the brass button |
| **Secondary — warm bronze (NON-TEXT)** | `--c-accent-2` | `#9c6b34` | card-hover borders, focus rings — brass/amber family, non-text only |
| **Tertiary — dark OUD wood** | `--c-timber` / `--c-timber-2` | `#221b17` / `#3a2e26` | grounding depth; drives the footer wash |
| | footer set `--c-footer-*` | bg `#221b17`, ink `#ece7e1`, body `#c4bbb0`, muted `#9a9189`, line `#3a2e26`, accent `#d9a85a` | dark-oud footer grounding on every page |

Brass is the single identity accent (eyebrows/links/CTAs/icon tiles); bronze
`--c-accent-2` stays in the same warm brass/amber family and is used only for
non-text interaction (card-hover border, résumé focus ring). Primary buttons
brighten to `--c-accent-bright` on hover.

### Cooler + blacker than /landing-3 (deliberate)
`/landing-3`'s base is a **warm** near-black (`#1a1917`, warm/brown undertone);
Charcoal & Oud shifts it **cooler and deeper** (`#16181a`, blue-grey undertone)
and its greys (`--c-body` `#c3c9ce`, `--c-muted` `#949ca2`, `--c-line`
`#3a4247`) all carry a cool cast, versus landing-3's warm `#cfc8bb` / `#948d81`
/ `#6e6a63`. Wood grounding also went darker: OUD `#221b17` vs landing-3's
timber `#2e2c29`. Same brass accent family, so it still reads as a refined
cousin of the landing-3 look Abang liked.

### Contrast (WCAG AA, validated with a luminance script)
All body/heading/accent-as-text pairs clear AA, measured on the surface each
token actually sits on:
- ink `#e8ecee` ≈ **14.97:1**, body `#c3c9ce` ≈ **10.65:1** on `--c-bg` — past AA (AAA).
- body on surface ≈ **9.24:1**, on surface-2 ≈ **7.86:1** — AA.
- **muted was lightened to `#949ca2`** (from a first pass `#8a9299` that was only
  ≈4.16:1 on `--c-surface-2`) so it clears AA everywhere it's small meta text,
  incl. the résumé-menu hover row (surface-2): ≈**5.64:1** on bg, ≈**4.72:1** on
  surface-2.
- accent brass `#c6923e` ≈ **6.43:1** on bg (≈**4.75:1** on surface-2) → AA as
  link/eyebrow/CTA text; accent-ink `#16181a` on the brass button ≈ **6.43:1**
  (hover bright `#d9a85a` ≈ **8.22:1**).
- **bronze `#9c6b34` (`--c-accent-2`) is deliberately NOT body text** — ≈3.87:1
  on bg, fine for the 3:1 non-text UI-component bar (hover border / focus ring),
  never used as small text.
- `--c-line` `#3a4247` (nudged up one step from the `#333a3f` direction for
  card-edge definition on the dark base) and `--c-line-soft` are subtle
  architectural rules, not text-bearing.
- footer dark-oud grounding: ink `#ece7e1` ≈ **13.81:1**, body `#c4bbb0` ≈
  **8.96:1**, muted `#9a9189` ≈ **5.48:1**, footer-accent `#d9a85a` ≈ **7.84:1**,
  all on `#221b17` — AA. (Footer-accent is the brighter brass for AA on oud.)

### Stone-vein texture — REMOVED
The stone-vein texture ("rekahan batu") was **removed entirely** per Abang
("messed up everything"). Deleted: the `body::before` two-layer inline-SVG
overlay + its `html[data-texture]` / reduced-motion CSS, the `.texture-toggle`
styles, the `<TextureToggle>` component (`src/components/ui/TextureToggle.tsx`),
its usage in `Footer.tsx`, and the `data-texture`/`localStorage['pw-texture']`
pre-paint logic in `layout.tsx` (the `html.js` flag was kept). Grep confirms no
remaining reference to `texture` / `data-texture` / `pw-texture` / `body::before`
in `src/` (only this doc + a note-comment in `globals.css`). The background is
now the clean cool-charcoal color.

### Reference-route handling
- `/landing-2` (**editorial**) and `/landing-3` (**timber**) are **kept as
  working reference routes, visually unchanged.** They are `[data-palette]`
  skins that override the same semantic vars, so re-skinning `:root` does not
  touch them; verified both still render their own distinct looks (editorial =
  warm light + terracotta; timber = warm dark + brass). Their footers still read
  the skin-scoped `--c-footer-*` tokens (each skin sets its own), so the new
  default footer being dark-oud does not leak into them. No changes were made to
  either skin block.

### Verification
- `tsc --noEmit` clean · `next build` clean (all 11 routes static, incl.
  `/resume/print`) · `eslint src/**` clean (0/0).
- Playwright (Chromium) 1440 + 390 shots of every page (`/`, `/about`,
  `/projects`, `/ai`, `/resume`) in the new default, plus the résumé
  download-dropdown open, and both reference routes. Confirmed: cool (not warm)
  dark charcoal base, dark-oud footer, brass accent, **no green, no texture**,
  AA-legible — hero washes, section bands, lifted cards, chips, brass buttons,
  résumé split-button + open menu, QR card.
- The only non-token color left is the QR code's `#fff` backing in `Contact.tsx`
  — kept white **intentionally** for scannability; it reads as a deliberate
  white card on the charcoal surface.
- The `/resume/print` route (the PDF source) is fully self-contained with its
  own black-on-white print styles and shares no tokens — untouched, PDFs
  unchanged.
