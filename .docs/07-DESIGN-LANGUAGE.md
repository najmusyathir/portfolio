# 07 — Design Language

**This is the primary doc for any UI work. Load this before touching any component.**

---

## Design philosophy

Modern minimalist. High craft, not loud. The kind of portfolio where a hiring manager or potential client immediately feels the quality before reading a word. Not a fresh-grad portfolio — a portfolio that reads *"this person has levelled up."*

Dark theme. Intentional whitespace. Sharp typography.

---

## Color tokens

Define these as CSS custom properties in `globals.css`. Never use raw hex in components.

```css
:root {
  /* Backgrounds — Tokyo Night palette */
  --color-bg-base:      #1a1b26;   /* page background */
  --color-bg-elevated:  #1f2335;   /* card background */
  --color-bg-overlay:   #24283b;   /* hover state, subtle elevation */
  --color-border:       #2a2d3e;   /* card borders, dividers */

  /* Text */
  --color-text-primary: #c0caf5;   /* main body text */
  --color-text-muted:   #565f89;   /* secondary labels, metadata */
  --color-text-subtle:  #3b4261;   /* placeholder, ghost text */

  /* Accent */
  --color-accent:       #7aa2f7;   /* blue — CTAs, links, active states */
  --color-accent-glow:  #7aa2f7;   /* same, used for box-shadow glow */
  --color-green:        #9ece6a;   /* success, "live" badge */
  --color-yellow:       #e0af68;   /* warning, highlights */
  --color-magenta:      #bb9af7;   /* secondary accent, tags */
}
```

**Rule:** All Tailwind color overrides use `[var(--color-*)]` syntax or extend the config. No inline hex.

---

## Typography

```css
/* Loaded via next/font/google in layout.tsx */
--font-sans: 'Inter', system-ui, sans-serif;       /* body, headings, UI */
--font-mono: 'JetBrains Mono', monospace;          /* stats, code, labels */
```

### Type scale

| Role | Size | Weight | Font |
| :--- | :--- | :--- | :--- |
| Hero name | `text-5xl` / `text-7xl` (lg) | 700 | Inter |
| Hero tagline | `text-xl` / `text-2xl` (lg) | 400 | Inter |
| Section heading | `text-2xl` / `text-3xl` (lg) | 600 | Inter |
| Section label (eyebrow) | `text-xs` | 500, uppercase, tracking-widest | Inter |
| Body text | `text-base` | 400 | Inter |
| Stat number | `text-3xl` / `text-4xl` (lg) | 700 | JetBrains Mono |
| Stat label | `text-xs` | 400 | Inter |
| Tech badge | `text-xs` | 500 | Inter |
| Nav link | `text-sm` | 500 | Inter |
| Code / monospaced | `text-sm` | 400 | JetBrains Mono |

---

## Spacing system

Use Tailwind defaults. Key values:

| Use | Tailwind | px |
| :--- | :--- | :--- |
| Section vertical padding | `py-24` / `py-32` | 96–128px |
| Container max-width | `max-w-5xl mx-auto px-6` | 1024px |
| Card padding | `p-6` | 24px |
| Card gap (grid) | `gap-4` | 16px |
| Between section label and heading | `mt-3` | 12px |
| Between heading and body | `mt-4` | 16px |

---

## Component specs

### Section label (eyebrow)
Small uppercase label above section headings.
```
text-xs font-medium uppercase tracking-widest text-[var(--color-accent)]
```
Example: `PROJECTS`, `ABOUT`, `GET IN TOUCH`

### Section heading
```
text-2xl lg:text-3xl font-semibold text-[var(--color-text-primary)]
```

### Project card
```
bg-[var(--color-bg-elevated)]
border border-[var(--color-border)]
rounded-xl p-6
transition-all duration-200
hover:border-[var(--color-accent)]/40
hover:shadow-[0_0_24px_0_rgba(122,162,247,0.08)]
hover:-translate-y-0.5
```
Contents (top to bottom):
1. Project name — `text-base font-semibold text-[var(--color-text-primary)]`
2. One-liner description — `text-sm text-[var(--color-text-muted)] mt-1`
3. Tech badge row — `flex flex-wrap gap-1.5 mt-4`
4. Live link — `text-xs text-[var(--color-accent)] mt-4 hover:underline` with external link icon

### Tech badge
```
bg-[var(--color-bg-overlay)] border border-[var(--color-border)]
rounded-md px-2 py-0.5
text-xs font-medium text-[var(--color-text-muted)]
```

### CTA button (primary)
```
bg-[var(--color-accent)] text-[var(--color-bg-base)]
font-semibold text-sm px-5 py-2.5 rounded-lg
hover:opacity-90 transition-opacity
```

### CTA button (ghost)
```
border border-[var(--color-border)] text-[var(--color-text-primary)]
font-semibold text-sm px-5 py-2.5 rounded-lg
hover:border-[var(--color-accent)]/50 hover:text-[var(--color-accent)]
transition-colors
```

---

## Animation

- **Scroll-triggered reveals:** Each section fades in + slides up slightly as it enters viewport.
  - Use `IntersectionObserver` — add class `is-visible` when in viewport.
  - CSS: `opacity: 0; transform: translateY(16px); transition: opacity 0.5s ease, transform 0.5s ease;`
  - `.is-visible { opacity: 1; transform: translateY(0); }`
- **Stagger:** Inside sections with multiple items (project cards, stat cards), stagger delay by `0.1s` per item.
- **Cursor blink:** Hero section only — a blinking `|` cursor after the tagline. Pure CSS `@keyframes blink`.
- **Card hover:** `hover:-translate-y-0.5 transition-transform duration-200` — subtle lift.
- **No scroll-jacking.** No parallax. Native scroll only.

---

## Section specs & copy

### 1. Navbar (sticky top)

Fixed top bar, blur background, appears after scrolling past hero.

```
position: sticky top-0 z-50
backdrop-blur-md bg-[var(--color-bg-base)]/80
border-b border-[var(--color-border)]
height: h-14
```

Left: Name — `Najmu Syathir` in Inter medium
Right: Nav links — `Work · About · Contact` (scroll to section anchors)

---

### 2. Hero

Full viewport height (`min-h-screen`). Content centered vertically.

**Layout:**
```
[eyebrow label]
[Name — large]
[Title line]
[Tagline]
[CTA buttons]
```

**Copy:**
```
[eyebrow]  — hide or leave empty, let the name speak

[name]     Najmu Syathir

[title]    Full-Stack Engineer & Solution Architect

[tagline]  I design the system. AI executes within it.
           Building production SaaS tools on self-hosted infra.|  ← blinking cursor

[CTAs]     [View my work]   [GitHub ↗]
```

Subtle background: very faint radial gradient from `--color-accent` at ~5% opacity, centered-top. Not obvious — just breaks the flat bg.

---

### 3. Stats strip

4 stat cards, horizontal row. Desktop: 4-col. Mobile: 2×2 grid.

| Stat | Label |
| :--- | :--- |
| `2+` | Years experience |
| `6` | Live projects |
| `5` | AI agents orchestrated |
| `1` | Self-hosted Debian server |

Number in JetBrains Mono, large. Label in Inter, muted, small.
Cards have `border-[var(--color-border)]` and subtle `bg-[var(--color-bg-elevated)]`.

---

### 4. Projects

Section label: `WORK`
Heading: `Things I've built`

2-column grid on desktop, 1-column on mobile. Cards in this order:

| Project | One-liner | Tags | URL |
| :--- | :--- | :--- | :--- |
| **acadeon-cli** | Browser-based PTY terminal with TOTP auth | Next.js, TypeScript, node-pty, Supabase | cli.najmusyathir.dev |
| **acadeon-pulse** | Self-hosted uptime monitor with escalating push alerts | Next.js, TypeScript, Supabase, PWA | pulse.najmusyathir.dev |
| **personal-dashboard** | Multi-tenant SaaS — finance, vault, kanban, AI chat | Next.js, TypeScript, Prisma, PostgreSQL | — |
| **ai_hub_bridge** | Async AI job queue bridging Claude CLI to web & Telegram | Next.js, TypeScript, Supabase Realtime | — |
| **ssh-web-server** | Browser SSH client with zero-install access | Next.js, TypeScript, WebSocket | ssh.najmusyathir.dev |
| **acadeon-pulse** | *(skip duplicate — use 5 cards only)* | | |

**Note:** personal-dashboard and ai_hub_bridge have no public URL — omit the link, show `Internal` badge instead.

---

### 5. AI Orchestration

Section label: `WORKFLOW`
Heading: `How I work with AI`

Body copy:
```
I work with multiple AI agents — Claude and others — as part of my development workflow.
The distinction matters: I provide the architecture, context documentation, and system design.
The agents execute within that structure, with proper git discipline and code review.

This isn't AI doing my job. It's AI as a precision tool — directed, audited, and owned.
```

Flow diagram (ASCII, rendered as a styled block):
```
Design & architecture
        ↓
Context docs + system prompt
        ↓
Agent executes (code, infra, review)
        ↓
Human review + git commit
        ↓
Ship
```

Render this as a vertical stepper with accent-colored connectors, not literal ASCII.

---

### 6. Stack

Section label: `TOOLS`
Heading: `Tech I work with`

Grid of icons + labels. Group into two rows or a flexible wrap:

```
Next.js  ·  TypeScript  ·  React  ·  Tailwind CSS
Prisma   ·  PostgreSQL  ·  Supabase  ·  Cloudflare
Linux    ·  Node.js     ·  Git
```

Use lucide-react icons where available. For Next.js, TypeScript, etc. — use SVG logos (inline, from official brand assets). Keep icons monochrome or near-monochrome — no rainbow icon grid.

---

### 7. About

Section label: `ABOUT`
Heading: `A bit about me`

Body copy:
```
I'm a solo full-stack engineer based in Malaysia, building production tools that solve real problems.
I design clean systems — multi-tenant SaaS, async job queues, PTY terminals — and run them on
self-hosted Debian infra with Cloudflare tunnels and proper watchdogs.

Two years in, still shipping. Currently building the Acadeon ecosystem — a suite of developer tools
I use daily and continue to improve.
```

Photo: optional. If included — circular avatar, right-aligned on desktop, centered on mobile.

---

### 8. Contact

Section label: `GET IN TOUCH`
Heading: `Let's work together`

Body copy:
```
Open to interesting projects, collaborations, or just a good conversation.
The best way to reach me is by email.
```

CTA: `alsyathir@gmail.com` — styled as a large ghost button, opens mailto.

Secondary link: GitHub `github.com/najmusyathir` — text link with external icon.

---

## Do NOT

- No emoji anywhere in the UI — lucide-react or inline SVG only
- No colorful/gradient text (subtle accent is fine, rainbow is not)
- No heavy animations or scroll-jacking
- No lorem ipsum left in any component — all copy from this doc
- No mention of Umai, Bastian, or any internal AI persona names

---

*Last updated: 2026-06-24*
