# 00 — Overview

## What

Personal portfolio site for Najmu Syathir (najmusyathir). Replaces the old Vite + React v1 portfolio (`portfolio-v1.najmusyathir.dev`).

Live at: `najmusyathir.dev`

## Why

The old portfolio reads "fresh grad." This one reads "levelled up." The goal is for a hiring manager or potential client to immediately feel the quality before reading a single word — and to walk away with a clear picture: solution architect, not just coder.

## Positioning

Three angles, all true, all reinforcing each other:

| Angle | What it communicates |
| :--- | :--- |
| **Solution architect** | Designs systems — multi-tenant SaaS, async job queues, PTY terminals, infra watchdogs. Not just feature work. |
| **AI orchestration** | Works with multiple AI agents (Claude, etc.). Provides architecture, context docs, system design — agents execute within that structure with proper git discipline. This is an emerging skill. Own it without underselling the human direction. |
| **Self-hosted infra** | Running 5+ live projects on headless Debian, Cloudflare tunnels, tmux Protocol, watchdogs. Ops maturity most devs don't have. |

**Do NOT mention Umai by name anywhere in this portfolio.**

## Scope (v1)

- Single-page scroll — Hero, Stats, Projects, AI Orchestration, Stack, About, Contact
- Static site (SSG) — no auth, no DB, no dynamic routes
- Responsive — desktop-first but fully mobile-compatible
- Contact via email link (no form backend in v1)

## Out of scope (v1)

- Blog / writing section
- Case studies / detailed project writeups
- CMS integration
- Contact form with backend

## Relationship to other projects

- Replaces `portfolio-v1` (Vite + React, frozen, stays at `portfolio-v1.najmusyathir.dev`)
- Deployed independently on Vercel — not part of the Acadeon self-hosted infra
- No dependency on ai_hub_bridge, personal-dashboard, or Supabase

---
*Last updated: 2026-06-24*
