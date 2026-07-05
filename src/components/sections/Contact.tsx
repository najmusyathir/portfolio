/**
 * 23:47 — the server hums. The closer, and it's literally true:
 * the box runs all night, watchdogs armed, agents on cron.
 * Asymmetric: a statement on the left, a contact.yaml on the right.
 * Pure text — a yaml file doesn't have icons, and that's the point.
 */

const CONTACT_ENTRIES = [
  {
    key: 'email',
    value: 'alsyathir@gmail.com',
    href: 'mailto:alsyathir@gmail.com',
    primary: true,
  },
  {
    key: 'whatsapp',
    value: 'wa.link/k7r72h',
    href: 'https://wa.link/k7r72h',
    primary: true,
  },
  {
    key: 'github',
    value: 'github.com/najmusyathir',
    href: 'https://github.com/najmusyathir',
  },
  {
    key: 'linkedin',
    value: 'in/najmusyathir',
    href: 'https://www.linkedin.com/in/najmusyathir/',
  },
  {
    key: 'instagram',
    value: '@najmusyathir',
    href: 'https://www.instagram.com/najmusyathir',
  },
  {
    key: 'facebook',
    value: 'najmusyathir',
    href: 'https://www.facebook.com/najmusyathir',
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        zIndex: 1,
        padding: '112px 24px 128px',
      }}
    >
      <div
        className="contact-grid"
        style={{
          maxWidth: '1024px',
          margin: '0 auto',
          display: 'grid',
          gap: '56px',
          alignItems: 'center',
        }}
      >
        {/* ── Left: the statement ─────────────── */}
        <div>
          <p className="moment-stamp reveal" style={{ marginBottom: '16px' }}>
            <span className="clock">23:47</span> the server hums
          </p>

          <h2
            className="font-display reveal"
            data-delay="60"
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: '-0.02em',
              color: 'var(--color-text-primary)',
              margin: '0 0 22px 0',
            }}
          >
            Bring the{' '}
            <span className="gradient-text">messy version</span>.
          </h2>

          <p
            className="reveal"
            data-delay="140"
            style={{
              fontSize: '1.02rem',
              color: 'var(--color-text-muted)',
              lineHeight: 1.75,
              maxWidth: '30em',
              margin: 0,
            }}
          >
            It&apos;s almost midnight here and the server&apos;s still humming —
            watchdogs armed, agents on cron, someone always awake. Half-formed
            ideas are my favorite kind: you bring the spark, we&apos;ll shape it
            into something real by morning.
          </p>
        </div>

        {/* ── Right: contact.yaml ─────────────── */}
        <div className="reveal-scale" data-delay="180">
          <div
            className="card"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.82rem',
              padding: '20px 22px 22px',
              borderRadius: '16px',
            }}
          >
            <p style={{ color: 'var(--color-text-subtle)', margin: '0 0 14px 0' }}>
              # contact.yaml
            </p>
            {CONTACT_ENTRIES.map((entry) => (
              <a
                key={entry.key}
                href={entry.href}
                target={entry.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={entry.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className="yaml-row"
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '10px',
                  padding: '8px 10px',
                  margin: '0 -10px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  color: 'var(--color-text-muted)',
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    alignSelf: 'center',
                    flexShrink: 0,
                    background: entry.primary ? 'var(--color-accent)' : 'var(--color-border-strong)',
                  }}
                />
                <span style={{ color: 'var(--color-text-subtle)', minWidth: '86px' }}>
                  {entry.key}:
                </span>
                <span
                  className="yaml-value"
                  style={{
                    color: entry.primary ? 'var(--color-text-primary)' : 'var(--color-text-muted)',
                    fontWeight: entry.primary ? 600 : 400,
                    overflowWrap: 'anywhere',
                  }}
                >
                  {entry.value}
                </span>
              </a>
            ))}
            <p style={{ color: 'var(--color-text-subtle)', margin: '14px 0 0 0' }}>
              response: <span style={{ color: 'var(--color-success)' }}>usually same day</span>{' '}
              # someone&apos;s always awake
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .contact-grid {
          grid-template-columns: 1fr;
        }
        .yaml-row {
          transition: background 0.2s, color 0.2s;
        }
        .yaml-row:hover {
          background: color-mix(in srgb, var(--color-accent) 7%, transparent);
        }
        .yaml-row:hover .yaml-value {
          color: var(--color-accent);
        }
        @media (min-width: 900px) {
          .contact-grid {
            grid-template-columns: 1.1fr 0.9fr;
          }
        }
      `}</style>
    </section>
  );
}
