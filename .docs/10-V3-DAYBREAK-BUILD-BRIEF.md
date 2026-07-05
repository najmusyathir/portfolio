# 10 — V3 "Daybreak" Build Brief (for Fable)

> **Read this in full before writing any code.** This is the spec for merging
> v2's content into the v3 design, hardening navigation, and pushing the design
> past the "AI-generated template" look. Authored by Umai (Opus) as the
> architecture/plan; **Fable executes**.

---

## 0. Version lineage (kill the confusion)

There are **three** portfolios. Name them consistently from now on:

| Name | What it is | Where it lives |
| :--- | :--- | :--- |
| **v1** | Original React/Vue portfolio | `portfolio-v1` repo, Vercel (`portfolio-v1.najmusyathir.dev`) |
| **v2 "Nebula"** | Opus upgrade — violet/rose, Next.js | `main` branch |
| **v3 "Daybreak"** | Fable revamp — warm, constellation, AI-team story | `feat/v2-revamp` branch (**this is "v3" despite the branch name**) |

**Goal of this work:** v3 becomes the single canonical site. It must contain
**everything v2 had** plus its own fresh ideas. Nothing from v2 gets lost.

> ⚠️ **Branch name mismatch:** the branch is `feat/v2-revamp` but the work is
> "v3." Do **not** rename the branch during this build — the hosting runner
> (`hosting/index.md` portfolio row) currently points at `feat/v2-revamp` and is
> serving it live on `portfolio-dev.najmusyathir.dev`. Renaming breaks the live
> preview. Rename happens at merge time only, coordinated separately.

---

## 1. The one thing v3 dropped from v2 — put it back

v3 replaced v2's **"How I work with AI"** workflow section with the new
**TheTeam** section (six named personas). TheTeam answers *WHO*. But v2's section
answered *HOW* — and that content was lost. Both are needed; they're
complementary, not redundant.

**Preserve this v2 content verbatim (paraphrase allowed, meaning must survive):**

- **Section framing:** "I work with multiple AI agents as part of my development
  workflow. The distinction matters: I design the architecture and write the
  context documentation. The agents execute within that structure — with code
  review, git discipline, and human sign-off."
- **The closing line (keep the spirit):** "This isn't AI doing my job. It's AI as
  a precision instrument — directed, audited, owned."
- **The 5-step process:**
  1. Design & architecture
  2. Context docs + system specs
  3. Agent executes
  4. Human review + git commit
  5. Ship

This is Najmu's actual differentiator. It deserves room, not a buried paragraph.

---

## 2. Page architecture (decided)

Split the AI story across a dedicated page so the homepage stays cinematic and
the multi-page nav requirement gets a real reason to exist.

```
/           Homepage — Hero (constellation), Work, About, Stack, Contact
/ai         NEW — "The Team & How I Work": full persona roster + the 5-step
            workflow (§1 content) + the "precision instrument" framing
/resume     Existing styled resume page (unchanged content)
```

**Homepage `/ai` teaser:** the constellation stays on the homepage as the hero
hook, but becomes a doorway — a clear "Meet the team & how we work →" link into
`/ai`. The *deep* content (roster cards + workflow steps) lives on `/ai`, not
crammed into the homepage.

**Why a separate page, not a section:** (a) it gives the AI-collaboration story —
the actual differentiator — space to breathe; (b) it keeps the homepage from
becoming another endless-scroll AI-template page; (c) it's the honest excuse to
build the robust cross-page nav Najmu asked for. If while building it feels
thin, fold it back into a homepage section — but try the page first.

---

## 3. Navigation system (the technical spec — get this exactly right)

Najmu's explicit requirement: **anchor scrolling that works from any page, and
every page can navigate back home or to any other page.** The previous fix
(links → `/#work`) was a patch; this makes it a system.

### 3.1 Link model
- **Section links** (Work, About, Contact): always absolute + hash → `/#work`,
  `/#about`, `/#contact`. Never bare `#work` (dead on `/ai` and `/resume`).
- **Page links** (The Team, Resume): real routes → `/ai`, `/resume`.
- **Logo**: always → `/` (never a non-link).

### 3.2 Same-page hash click (already on `/`)
Clicking `/#work` while on `/` must smooth-scroll, not hard-navigate. Intercept
in a click handler: if `pathname === '/'`, `preventDefault()` +
`scrollIntoView({ behavior: 'smooth' })`. Update the URL hash without a jump
(`history.pushState`).

### 3.3 Cross-page hash landing (arriving at `/#work` from `/ai` or `/resume`)
This is the failure-prone case. Next.js App Router does **not** reliably scroll
to a hash after a cross-route navigation, and the sticky navbar + reveal
animations (`opacity:0` until observed) make naive `scrollIntoView` land wrong.

Required solution:
- A small mount-effect on the homepage reads `window.location.hash` on load and,
  **after the reveal observer has run and layout settled** (use a
  `requestAnimationFrame` double-tick or a short timeout), scrolls to the target.
- Account for the sticky navbar height. `scroll-padding-top`/`scroll-margin-top`
  is already set to `64px` in `globals.css` — verify it matches the real navbar
  height and that every `<section id>` respects it.
- Sections start hidden via `.reveal`; ensure the scroll target is either already
  revealed or force-revealed before measuring, or the scroll position is computed
  from a collapsed layout and lands short.

### 3.4 Scroll-spy (active section highlight)
On `/` only: IntersectionObserver highlights the active section link in the
navbar. On `/ai` and `/resume`, no section is active — instead highlight the
current **page** link. This replaces the old `ScrollDots` left rail (removed);
do not bring ScrollDots back — the navbar itself is now the wayfinding.

### 3.5 Every page's nav
`/ai` and `/resume` render the **same** `<Navbar>` as `/` (they already import
it — keep the component API stable). From any page a visitor can: return home
(logo or any `/#…` link), reach the other content pages, and download the resume.
Verify tab order and keyboard focus work. Mobile nav must expose the page links
too (not just the desktop row).

---

## 4. Anti-template design doctrine (Opus research — READ THIS)

Najmu's sharpest note: AI-generated sites all look the same now. They look nice,
but you can *smell* the template. v3 is already better than most, but it still
carries several of these tells. **Audit v3 against this list and break at least
the ones marked ⚠ — including in the parts already built.**

### 4.1 The current "AI website" fingerprint (avoid / minimize)
These are the patterns mass-produced by v0 / Lovable / Bolt / generic LLM site
generation in 2024–2026. Using them uncritically is what reads as "template":

- **⚠ The centered-hero triad**: pill badge with a pulsing dot ("Available /
  Open to collaborate") → giant centered gradient headline → two buttons
  (gradient primary + ghost outline). This exact stack is the #1 tell.
  *v3 uses the pill+dot and the two-button pair — keep them only if recomposed
  asymmetrically (see 4.2).*
- **⚠ "SectionLabel (uppercase, letter-spaced) + centered h2 + 3-column card
  grid"** repeated for every section. This rhythm is the template's skeleton.
  Break it at least twice across the site.
- **Glassmorphism everywhere**: `bg-white/5 backdrop-blur border-white/10
  rounded-2xl`. One or two uses = fine; as the default card = template.
- **Aurora gradient blobs** drifting in the background. Extremely overused.
  *v3 has these — either make them feel intentional/branded (tie to the sunrise
  concept, not generic) or reduce their prominence.*
- **The AI-default palette**: violet/indigo → blue/cyan gradients. (v2 was
  literally this. v3's warm palette already escapes it — good, protect that.)
- **Everything fades-up on scroll** with staggered delays. Motion with no intent.
- **Bento grids** as a reflex layout.
- **Stat row**: "2+ years · 6 projects · N agents" four-up counter. (v3 has one.)
- **Tech-logo marquee** ticker. (v3 has one — acceptable, but it's a known tell.)
- **Lucide icon in a rounded-gradient square + heading + two-line blurb** feature
  cards.
- **Inter for everything**, sparkle ✨ emoji, "Let's build something amazing"
  copy energy.

### 4.2 How to actually look bespoke (do this instead)
- **Asymmetry & editorial layout.** Break the centered grid. Off-center anchors,
  intentional overlap, a broken/12-col layout, type that bleeds to the edge.
- **One signature interaction, owned.** The **constellation is already this** —
  it's content-specific (his real AI team), not decorative. Double down on
  bespoke, content-derived visuals; that's the single strongest anti-template
  move. Every generic blob you replace with something that *means something*
  moves the needle.
- **Type as a design element.** Huge scale contrast, the Bricolage display face
  doing real work, mono used with intent (already started). Consider a line that
  overlaps an image or breaks the column.
- **Real texture over gradient.** The film grain is a good start. Paper, photo,
  hand-touched marks beat another blurred gradient.
- **Motion with a point.** Prefer one memorable scroll-linked or physics moment
  over fade-up on 40 elements. The persona pulses qualify — extend that logic.
- **Content only Najmu could show.** The site's uniqueness = the AI team + the
  self-hosted infra story. Lean the whole design into what *only his* portfolio
  can say. A template can't fake a real six-agent system with his face at the
  center of it.
- **Break the section rhythm.** At least twice, refuse the "label + centered h2 +
  cards" pattern — e.g. a full-bleed statement, an asymmetric split, an
  interactive panel.

**Litmus test before shipping any section:** *"Could this exact block appear on a
generic AI-generated startup site?"* If yes, it needs a Najmu-specific twist.

---

## 5. Responsiveness (non-negotiable)
- Mobile-first; verify 320 / 360 / 390 / 768 / 1024 / 1440.
- The constellation already scales (canvas DPR-aware) — verify it stays legible
  and doesn't overflow on the smallest widths, and that labels don't collide.
- The new `/ai` page and the new nav (incl. mobile menu) must be fully responsive.
- Respect `prefers-reduced-motion` everywhere (v3 already does for the
  constellation/reveals — extend to any new motion).
- No horizontal scroll at any breakpoint.

---

## 6. Build order (suggested)
1. **Nav system** (§3) first — it's the backbone every page depends on. Extract a
   shared nav-link config; build the click handler + cross-page hash landing +
   scroll-spy. Test from `/`, `/ai`, `/resume` before moving on.
2. **`/ai` page** (§2) — port the v2 workflow content (§1) + the persona roster
   from `data.ts` (`PERSONAS`). Make it the deep-dive; homepage keeps the teaser.
3. **Anti-template pass** (§4) — audit existing v3 sections, break the tells,
   add the bespoke moments.
4. **Responsive + reduced-motion pass** (§5).
5. **Verify** (§7).

---

## 7. Acceptance checklist (verify for real, not by assertion)
- [ ] `npm run build` + `tsc --noEmit` clean.
- [ ] `npm run lint` — no **new** errors vs. the branch baseline (there is one
      pre-existing `theme.tsx` `set-state-in-effect` error on `main`; that one is
      allowed to remain, nothing new on top).
- [ ] v2's "How I work with AI" content is present and reads well on `/ai`.
- [ ] From `/resume` and `/ai`, clicking Work/About/Contact lands on the correct
      homepage section (not the top, not short of it).
- [ ] From `/`, section links smooth-scroll; scroll-spy highlights correctly.
- [ ] Logo returns home from every page.
- [ ] Mobile nav exposes page links; no horizontal scroll 320→1440.
- [ ] Playwright screenshots (light + dark, desktop + mobile) eyeballed; zero
      console errors on `/`, `/ai`, `/resume`.
- [ ] At least two sections visibly break the "label + centered h2 + cards"
      template rhythm.

---

## 8. Guardrails (protocol)
- **Branch:** work on `feat/v2-revamp` (the live-preview branch). Commit types:
  `feat/`, `chore/`, `checkpoint/` only. **Do not** merge, open PRs, or push to
  `main` — Najmu handles that.
- **Do not touch** the Cloudflare tunnel, `hosting/index.md`, or anything that
  could blip `portfolio-dev` / `server.najmusyathir.dev`.
- **Keep component APIs stable** where `/resume` and `/ai` share them (`Navbar`,
  `Footer`, `AuroraBackground`, `Badge`, `SectionLabel`) so one change doesn't
  silently break another page.
- **Keep the LazyVideo perf fix** in Projects (IntersectionObserver +
  `preload="none"`). Don't regress it.
- After building, run `~/bin/update-brain.sh` if significant structure changed
  (Graphify re-index).

---

*Authored 2026-07-05 by Umai (Opus) — architecture/plan. Executor: Fable.*
*Supersedes nothing; extends `07-DESIGN-LANGUAGE.md` with the Daybreak direction.*
