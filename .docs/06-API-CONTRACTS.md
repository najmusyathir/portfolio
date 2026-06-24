# 06 — API Contracts

## v1 status

No API routes in v1. All content is static.

## Metadata / OG tags (in `layout.tsx`)

```ts
export const metadata: Metadata = {
  title: 'Najmu Syathir — Full-Stack Engineer',
  description: 'Solution architect building production SaaS tools on self-hosted infra. Next.js, TypeScript, AI-orchestrated development.',
  openGraph: {
    title: 'Najmu Syathir — Full-Stack Engineer',
    description: 'Solution architect building production SaaS tools on self-hosted infra.',
    url: 'https://najmusyathir.dev',
    siteName: 'Najmu Syathir',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Najmu Syathir — Full-Stack Engineer',
    description: 'Solution architect building production SaaS tools on self-hosted infra.',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
}
```

## Contact (v1)

Contact is a mailto link — no backend, no form submission.

```
mailto:alsyathir@gmail.com
```

## Future: contact form (v2)

If a backend contact form is added:
- `POST /api/contact` → validates body → sends email via Resend or Nodemailer
- Payload: `{ name: string, email: string, message: string }`
- Rate limit: 1 submission per IP per 10 minutes
- Honeypot field for spam guard

---
*Last updated: 2026-06-24*
