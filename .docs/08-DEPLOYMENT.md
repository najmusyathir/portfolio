# 08 — Deployment

## Platform

**Self-hosted** — same Acadeon infra. Cloudflare tunnel → `najmusyathir.dev`.
Not on Vercel (old portfolio-v1 was on Vercel — that redirect will be removed by Abang).

## Port

**3011** — `127.0.0.1:3011`

## Domain

| Domain | Target |
| :--- | :--- |
| `najmusyathir.dev` | This project → tunnel → 127.0.0.1:3011 |
| `portfolio-v1.najmusyathir.dev` | Old Vite portfolio on Vercel — frozen, keep alive |

## Cloudflare tunnel

Add to `~/.cloudflared/config.yml` ingress rules (before the catch-all):

```yaml
- hostname: najmusyathir.dev
  service: http://127.0.0.1:3011
```

Reload tunnel after editing: warn Abang first (SIGHUP causes brief blip on all routes).

## Hosting runner

Row in `~/hosting/index.md`:

```
| portfolio | hosting/projects/portfolio-main | main | main | [x] | 3011 | RUNNING | 0 | najmusyathir.dev |
```

Hosting dir: `~/hosting/projects/portfolio-main/`

## Build & run

```bash
npm run build   # production build
npm start       # serves on PORT=3011 (set in .env.local)
```

`.env.local`:
```
PORT=3011
```

## Environment variables

None required — fully static site. Only `PORT` in `.env.local`.

## Branch strategy

| Branch | Purpose |
| :--- | :--- |
| `main` | Production — what hosting runner tracks |
| `staging` | Preview / WIP |
| `feat/*` | Feature work |

## DNS (Cloudflare)

`najmusyathir.dev` should already point to the Cloudflare tunnel (`acadeon_server`).
Abang removes the Vercel redirect → traffic flows through tunnel → port 3011.
No DNS change needed on Cloudflare side if the tunnel is already the target.

## First deploy checklist

- [ ] `npm run build` passes clean
- [ ] `npm start` serves on 3011
- [ ] Row added to `hosting/index.md`
- [ ] Tunnel route added to `~/.cloudflared/config.yml`
- [ ] Abang removes Vercel redirect for `najmusyathir.dev`
- [ ] Tunnel reloaded (with Abang's go-ahead)
- [ ] `curl https://najmusyathir.dev` returns 200

---
*Last updated: 2026-06-24*
