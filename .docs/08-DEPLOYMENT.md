# 08 — Deployment

## Platform

**Vercel** — not part of the Acadeon self-hosted infra. Deployed independently.

## Domain

| Domain | Target |
| :--- | :--- |
| `najmusyathir.dev` | New portfolio (this project) |
| `portfolio-v1.najmusyathir.dev` | Old Vite + React portfolio — frozen, keep alive |

## Vercel setup

1. Import `najmusyathir/portfolio` from GitHub on Vercel dashboard
2. Framework preset: **Next.js** (auto-detected)
3. Build command: `npm run build` (default)
4. Output directory: `.next` (default)
5. Assign custom domain: `najmusyathir.dev`

## DNS (Cloudflare)

- `najmusyathir.dev` CNAME → Vercel's assigned domain (e.g. `cname.vercel-dns.com`)
- Or use Vercel nameservers if transferring DNS fully
- **Do NOT proxy through Cloudflare tunnel** — Vercel handles CDN + SSL directly

## Environment variables

None required for v1 — fully static.

If contact form is added in v2:
```
RESEND_API_KEY=...    (email service)
```

## Security headers

Configure in `vercel.json` at project root. See `02-SECURITY.md` for header values.

## Branch strategy

| Branch | Purpose |
| :--- | :--- |
| `main` | Production — auto-deploys to `najmusyathir.dev` |
| `staging` | Preview — Vercel preview URL |
| `feat/*` | Feature branches — Vercel preview URL per branch |

## Updating the site

1. Push changes to `main` → Vercel auto-deploys
2. No server restart needed — it's Vercel
3. No need to touch hosting/index.md or tmux sessions

---
*Last updated: 2026-06-24*
