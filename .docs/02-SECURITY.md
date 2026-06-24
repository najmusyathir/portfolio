# 02 — Security

## Threat model

Portfolio is a fully static, read-only public site. No auth, no user data, no secrets. Attack surface is minimal.

Primary risks: clickjacking, content injection via OG/metadata, dependency supply chain.

## HTTP headers (configure in Vercel dashboard or `vercel.json`)

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()" }
      ]
    }
  ]
}
```

## Content Security Policy

Keep permissive enough for Next.js hydration. Start with:
```
default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self';
```
Tighten after verifying no third-party embeds needed.

## Secrets

No secrets in v1. No API keys, no environment variables with sensitive values.
If a contact form backend is added later → store API key in Vercel env vars only, never in source.

## Dependencies

- Keep `npm audit` clean before each deploy.
- Prefer minimal dependencies — this is a static site, not an app.

---
*Last updated: 2026-06-24*
