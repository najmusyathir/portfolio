# 07 — Design Language

**This is the primary doc for any UI work. Load this before touching any component.**

---

## Design philosophy

Modern, distinctive, alive. Not another dark-blue developer portfolio. The goal: a hiring manager or potential client feels the craft immediately — before reading a word.

**Theme name: Nebula**
Dual light/dark. Gradient accent (violet → rose). Living background (drifting aurora orbs). Light mode is the primary aesthetic — bright, airy, premium. Dark mode is deep cosmic, not just "dark gray."

---

## Dual theme system

Toggle via `data-theme="light"` / `data-theme="dark"` on `<html>`. Persist in `localStorage`. Default: system preference via `prefers-color-scheme`, fallback to light.

Implementation:
- `ThemeProvider` client component wraps the layout
- Toggle button in Navbar (sun/moon icon, lucide-react)
- CSS custom properties switch on `[data-theme="dark"]`

---

## Color tokens

Define ALL of these in `globals.css`. Never use raw hex in components.

```css
/* ─── Light mode (default) ──────────────────── */
:root,
[data-theme="light"] {
  /* Backgrounds */
  --color-bg-base:       #faf9ff;   /* near-white, faint violet tint */
  --color-bg-elevated:   #ffffff;   /* cards, panels */
  --color-bg-overlay:    #f3f1ff;   /* hover state, subtle elevation */
  --color-border:        #e8e5f8;   /* card borders, dividers */
  --color-border-strong: #cdc9ef;   /* focused/active borders */

  /* Text */
  --color-text-primary:  #1a1535;   /* deep violet-charcoal — main text */
  --color-text-muted:    #6b6490;   /* secondary labels, metadata */
  --color-text-subtle:   #b0acc8;   /* placeholder, ghost */

  /* Accent — gradient */
  --color-accent-from:   #7c3aed;   /* violet */
  --color-accent-mid:    #a855f7;   /* purple */
  --color-accent-to:     #ec4899;   /* rose/pink */
  --color-accent:        #7c3aed;   /* single-value fallback */

  /* Semantic */
  --color-success:       #16a34a;
  --color-warning:       #d97706;
  --color-error:         #dc2626;

  /* Aurora orbs (background animation) */
  --orb-1: rgba(124, 58, 237, 0.12);   /* violet */
  --orb-2: rgba(236, 72, 153, 0.10);   /* rose */
  --orb-3: rgba(168, 85, 247, 0.08);   /* purple */
}

/* ─── Dark mode ──────────────────────────────── */
[data-theme="dark"] {
  /* Backgrounds */
  --color-bg-base:       #0d0b14;   /* deep cosmic — NOT just dark gray */
  --color-bg-elevated:   #13101e;   /* cards */
  --color-bg-overlay:    #1c1729;   /* hover */
  --color-border:        #251f35;   /* borders */
  --color-border-strong: #3d3160;   /* focused */

  /* Text */
  --color-text-primary:  #f0eeff;   /* near-white with violet warmth */
  --color-text-muted:    #8b82a7;   /* secondary */
  --color-text-subtle:   #4a4368;   /* ghost */

  /* Accent — same gradient, slightly brighter */
  --color-accent-from:   #8b5cf6;   /* violet (brighter on dark) */
  --color-accent-mid:    #c084fc;   /* purple */
  --color-accent-to:     #f472b6;   /* rose */
  --color-accent:        #8b5cf6;

  /* Semantic */
  --color-success:       #4ade80;
  --color-warning:       #fbbf24;
  --color-error:         #f87171;

  /* Aurora orbs */
  --orb-1: rgba(139, 92, 246, 0.18);
  --orb-2: rgba(244, 114, 182, 0.14);
  --orb-3: rgba(192, 132, 252, 0.12);
}
```

### Gradient utility classes (define in Tailwind config or as CSS classes)

```css
.gradient-text {
  background: linear-gradient(135deg, var(--color-accent-from), var(--color-accent-mid), var(--color-accent-to));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.gradient-bg {
  background: linear-gradient(135deg, var(--color-accent-from), var(--color-accent-to));
}

.gradient-border {
  border: 1px solid transparent;
  background-clip: padding-box;
  /* Use pseudo-element approach for true gradient border */
}
```

---

## Background — Aurora Orbs

**The signature element.** 2–3 large radial gradient blobs that drift slowly across the page background. Subtle, premium, alive. Not distracting.

Implementation: `<AuroraBackground />` — a full-page fixed `<canvas>` or CSS-only approach using absolutely-positioned divs with `filter: blur(80px)` and CSS keyframe animations.

**CSS approach (preferred — zero JS, zero bundle cost):**

```css
.aurora-container {
  position: fixed;
  inset: 0;
  z-index: 0;           /* behind all content */
  overflow: hidden;
  pointer-events: none;
}

.aurora-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 1;
  animation: drift linear infinite;
}

.orb-1 {
  width: 600px; height: 600px;
  background: radial-gradient(circle, var(--orb-1), transparent 70%);
  top: -200px; left: -100px;
  animation-duration: 25s;
  animation-name: drift-1;
}

.orb-2 {
  width: 500px; height: 500px;
  background: radial-gradient(circle, var(--orb-2), transparent 70%);
  bottom: 10%; right: -150px;
  animation-duration: 32s;
  animation-name: drift-2;
}

.orb-3 {
  width: 400px; height: 400px;
  background: radial-gradient(circle, var(--orb-3), transparent 70%);
  top: 40%; left: 30%;
  animation-duration: 40s;
  animation-name: drift-3;
}

@keyframes drift-1 {
  0%   { transform: translate(0, 0) scale(1); }
  33%  { transform: translate(80px, 60px) scale(1.08); }
  66%  { transform: translate(-40px, 100px) scale(0.95); }
  100% { transform: translate(0, 0) scale(1); }
}

@keyframes drift-2 {
  0%   { transform: translate(0, 0) scale(1); }
  40%  { transform: translate(-70px, -80px) scale(1.1); }
  70%  { transform: translate(50px, -40px) scale(0.92); }
  100% { transform: translate(0, 0) scale(1); }
}

@keyframes drift-3 {
  0%   { transform: translate(0, 0) scale(1); }
  50%  { transform: translate(60px, -90px) scale(1.12); }
  100% { transform: translate(0, 0) scale(1); }
}
```

**Important:** all section content sits on `z-index: 1` or higher. Aurora is `z-index: 0`. Cards use `backdrop-blur-sm` + semi-transparent `bg-[var(--color-bg-elevated)]/80` to let the aurora bleed through subtly.

---

## Typography

```css
--font-sans: 'Inter', system-ui, sans-serif;
--font-mono: 'JetBrains Mono', monospace;
```

Load both via `next/font/google` in `layout.tsx`. Apply as CSS variables on `:root`, then set in Tailwind config.

### Type scale

| Role | Size | Weight | Font | Notes |
| :--- | :--- | :--- | :--- | :--- |
| Hero name | `text-5xl` → `text-7xl` lg | 800 | Inter | `.gradient-text` class |
| Hero title | `text-xl` → `text-2xl` lg | 400 | Inter | muted color |
| Hero tagline | `text-base` → `text-lg` lg | 400 | Inter | primary color |
| Section eyebrow | `text-xs` | 600, uppercase, tracking-[0.2em] | Inter | `--color-accent` |
| Section heading | `text-2xl` → `text-3xl` lg | 700 | Inter | primary color |
| Body text | `text-base` | 400 | Inter | muted color |
| Stat number | `text-4xl` → `text-5xl` lg | 700 | JetBrains Mono | `.gradient-text` |
| Stat label | `text-xs` | 400 | Inter | muted |
| Tech badge | `text-xs` | 500 | Inter | |
| Code / mono | `text-sm` | 400 | JetBrains Mono | |
| Nav link | `text-sm` | 500 | Inter | |

**Apply `.gradient-text` to:** hero name, stat numbers, section eyebrow labels. Not overused — 3–4 uses max per page.

---

## Spacing

| Use | Tailwind | px |
| :--- | :--- | :--- |
| Section vertical padding | `py-28` / `py-36` lg | 112–144px |
| Container | `max-w-5xl mx-auto px-6` | 1024px, 24px side padding |
| Card padding | `p-6` | 24px |
| Card grid gap | `gap-5` | 20px |
| Eyebrow → heading | `mt-3` | 12px |
| Heading → body | `mt-4` | 16px |
| Section → next section | handled by section `py-28` | |

---

## Component specs

### Navbar (sticky)
```
position: sticky top-0 z-50
bg-[var(--color-bg-base)]/70 backdrop-blur-md
border-b border-[var(--color-border)]
h-14 px-6
```
Left: `Najmu Syathir` — Inter medium, primary text
Right: nav links (`Work · About · Contact`) + theme toggle (sun/moon icon)

Theme toggle: `<button>` with `Sun` / `Moon` from lucide-react, 16px.

### Project card
```css
/* Base */
background: var(--color-bg-elevated);
border: 1px solid var(--color-border);
border-radius: 16px;
padding: 24px;
backdrop-filter: blur(8px);         /* lets aurora bleed through */
background: rgba(--color-bg-elevated, 0.8);   /* semi-transparent */
transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;

/* Hover */
transform: translateY(-3px);
border-color: var(--color-border-strong);
box-shadow: 0 8px 32px rgba(124, 58, 237, 0.12);
```

Contents (top → bottom):
1. Project name — semibold, primary text
2. One-liner — small, muted
3. Badge row — `flex flex-wrap gap-1.5 mt-4`
4. Bottom row: Live link (if public) OR `Internal` badge

### Tech badge
```
bg-[var(--color-bg-overlay)]
border border-[var(--color-border)]
rounded-md px-2.5 py-1
text-xs font-medium text-[var(--color-text-muted)]
```

### CTA button (primary — gradient fill)
```css
background: linear-gradient(135deg, var(--color-accent-from), var(--color-accent-to));
color: white;
font-weight: 600;
font-size: 0.875rem;
padding: 10px 20px;
border-radius: 10px;
border: none;
transition: opacity 0.2s, transform 0.2s;

&:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}
```

### CTA button (ghost)
```css
background: transparent;
border: 1px solid var(--color-border-strong);
color: var(--color-text-primary);
font-weight: 600;
font-size: 0.875rem;
padding: 10px 20px;
border-radius: 10px;
transition: border-color 0.2s, color 0.2s;

&:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
}
```

### Stat card
```
bg-[var(--color-bg-elevated)]/80 backdrop-blur-sm
border border-[var(--color-border)]
rounded-2xl p-6
```
Number: gradient-text, JetBrains Mono
Label: muted, Inter

### Section eyebrow
```
text-xs font-semibold uppercase tracking-[0.2em]
gradient-text (or solid --color-accent)
```

---

## Animation

### Scroll reveals
Every section animates in as it enters viewport. Use `IntersectionObserver`.

```css
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

Apply `data-delay="100"` etc. on staggered children. JS reads delay and sets `transition-delay`.

### Stagger (card grids)
Each card: `transition-delay: calc(index * 80ms)`. Max delay: 320ms (4 cards × 80ms).

### Hero cursor blink
```css
@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}
.cursor {
  display: inline-block;
  width: 2px;
  height: 1em;
  background: var(--color-accent);
  margin-left: 3px;
  vertical-align: text-bottom;
  animation: blink 1s ease-in-out infinite;
}
```

### No scroll-jacking. No parallax. Native scroll only.

---

## Section specs & copy

### Hero
Full viewport (`min-h-screen`), content centered vertically and horizontally.

```
[Aurora background — full page fixed]

         Najmu Syathir           ← gradient-text, 72px, weight 800
    Full-Stack Engineer          ← muted, 24px
  & Solution Architect

  I design the system.           ← primary, 18px
  AI executes within it.|        ← blinking cursor after last char

  [View my work ↓]  [GitHub ↗]  ← primary gradient btn + ghost btn
```

Subtle radial vignette at top-center behind the text: `var(--color-accent-from)` at ~8% opacity, blurred.

---

### Stats strip
4 cards, horizontal. Desktop: 4-col grid. Mobile: 2×2.

| Number | Label |
| :--- | :--- |
| `2+` | Years experience |
| `6` | Live projects |
| `5` | AI agents orchestrated |
| `1` | Self-hosted server |

Numbers in gradient-text, JetBrains Mono. Labels muted, Inter.

---

### Projects
Eyebrow: `WORK`
Heading: `Things I've built`

2-col desktop / 1-col mobile. Cards:

| # | Project | One-liner | Tags | URL |
| :--- | :--- | :--- | :--- | :--- |
| 1 | **acadeon-cli** | Browser PTY terminal with TOTP auth | Next.js · TypeScript · node-pty · Supabase | cli.najmusyathir.dev |
| 2 | **acadeon-pulse** | Uptime monitor PWA with escalating push alerts | Next.js · TypeScript · Supabase · PWA | pulse.najmusyathir.dev |
| 3 | **personal-dashboard** | Multi-tenant SaaS — finance, vault, kanban, AI chat | Next.js · TypeScript · Prisma · PostgreSQL | — (Internal) |
| 4 | **ai_hub_bridge** | Async AI job queue — Claude CLI to web & Telegram | Next.js · TypeScript · Supabase Realtime | — (Internal) |
| 5 | **ssh-web-server** | Browser SSH client, zero install | Next.js · TypeScript · WebSocket | ssh.najmusyathir.dev |

---

### AI Orchestration
Eyebrow: `WORKFLOW`
Heading: `How I work with AI`

Body:
```
I work with multiple AI agents as part of my development workflow.
The distinction matters: I design the architecture and write the context documentation.
The agents execute within that structure — with code review, git discipline, and human sign-off.

This isn't AI doing my job. It's AI as a precision instrument — directed, audited, owned.
```

Stepper diagram (5 steps, vertical, connected by gradient line):
```
  ◉  Design & architecture
  │
  ◉  Context docs + system specs
  │
  ◉  Agent executes
  │
  ◉  Human review + git commit
  │
  ◉  Ship
```
Left-aligned on desktop. The connecting line and step dots use `--color-accent-from` → `--color-accent-to` gradient.

---

### Stack
Eyebrow: `TOOLS`
Heading: `Tech I work with`

Flex wrap grid, icon + label pairs:

```
Next.js   TypeScript   React   Tailwind CSS
Prisma    PostgreSQL   Supabase   Cloudflare
Linux     Node.js      Git
```

Use SVG logos (official brand SVGs, inline). Keep them monochrome or tinted with `--color-accent` on hover. Not a rainbow icon grid.

---

### About
Eyebrow: `ABOUT`
Heading: `A bit about me`

Layout: text left, photo right (desktop). Photo stacked above text (mobile).

Photo: circular avatar (`rounded-full`), 160px, subtle gradient ring border using pseudo-element.

```css
.avatar-ring {
  padding: 3px;
  background: linear-gradient(135deg, var(--color-accent-from), var(--color-accent-to));
  border-radius: 50%;
}
.avatar-ring img {
  border-radius: 50%;
  display: block;
}
```

Body copy:
```
I'm a solo full-stack engineer based in Malaysia, building production tools
that solve real problems.

I design clean systems — multi-tenant SaaS, async job queues, PTY terminals —
and run them on self-hosted Debian infra with Cloudflare tunnels and proper monitoring.

Two years in, still shipping. Currently building the Acadeon ecosystem —
a suite of developer tools I use daily and continue to improve.
```

---

### Contact
Eyebrow: `GET IN TOUCH`
Heading: `Let's work together`

Body:
```
Open to interesting projects, collaborations, or just a good conversation.
The best way to reach me is by email.
```

CTA: large gradient button — `alsyathir@gmail.com` → opens `mailto:`.
Secondary: text link `github.com/najmusyathir` with ExternalLink icon.

Center-aligned, generous vertical padding.

---

## Rules — hard limits

- **No emoji anywhere** — lucide-react or inline SVG only
- **No hardcoded hex in components** — CSS vars only
- **No rainbow icons** — keep stack icons monochrome or accent-tinted
- **No heavy animation libraries** — CSS + IntersectionObserver only
- **No scroll-jacking or parallax**
- **All copy from this doc** — no lorem ipsum left in any component
- **No mention of Umai, Bastian, or any internal persona name**

---

*Last updated: 2026-06-24*
