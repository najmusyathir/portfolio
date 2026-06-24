import Image from 'next/image';
import { SectionLabel } from '@/components/ui/SectionLabel';

export function About() {
  return (
    <section
      id="about"
      style={{
        position: 'relative',
        zIndex: 1,
        padding: '112px 24px',
      }}
    >
      <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
        <div className="reveal" style={{ marginBottom: '48px' }}>
          <SectionLabel label="ABOUT" />
          <h2
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 1.875rem)',
              fontWeight: 700,
              color: 'var(--color-text-primary)',
              margin: '12px 0 0 0',
              fontFamily: 'var(--font-sans)',
            }}
          >
            A bit about me
          </h2>
        </div>

        <div
          className="about-layout"
          style={{ display: 'grid', gap: '48px', alignItems: 'center' }}
        >
          <div className="reveal" data-delay="100">
            <p
              style={{
                fontSize: '1rem',
                color: 'var(--color-text-muted)',
                lineHeight: 1.75,
                margin: '0 0 20px 0',
              }}
            >
              I&apos;m a solo full-stack engineer based in Malaysia, building production tools
              that solve real problems.
            </p>
            <p
              style={{
                fontSize: '1rem',
                color: 'var(--color-text-muted)',
                lineHeight: 1.75,
                margin: '0 0 20px 0',
              }}
            >
              I design clean systems — multi-tenant SaaS, async job queues, PTY terminals —
              and run them on self-hosted Debian infra with Cloudflare tunnels and proper monitoring.
            </p>
            <p
              style={{
                fontSize: '1rem',
                color: 'var(--color-text-muted)',
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              Two years in, still shipping. Currently building the Acadeon ecosystem —
              a suite of developer tools I use daily and continue to improve.
            </p>
          </div>

          <div
            className="reveal about-photo"
            data-delay="200"
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <AvatarPlaceholder />
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .about-layout {
            grid-template-columns: 1fr auto !important;
          }
          .about-photo {
            order: 2;
          }
        }
      `}</style>
    </section>
  );
}

function AvatarPlaceholder() {
  return (
    <div className="avatar-ring">
      <div
        style={{
          width: '160px',
          height: '160px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--color-bg-overlay), var(--color-bg-elevated))',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--color-text-subtle)',
          fontSize: '0.75rem',
          fontFamily: 'var(--font-mono)',
        }}
      >
        NS
      </div>
    </div>
  );
}
