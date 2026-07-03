import { STACK_ITEMS } from '@/lib/data';
import { SectionLabel } from '@/components/ui/SectionLabel';

/**
 * Stack — an infinite marquee ticker. Duplicated track for a
 * seamless loop; pauses on hover; masked edges for the cinematic fade.
 */
export function Stack() {
  return (
    <section
      style={{
        position: 'relative',
        zIndex: 1,
        padding: '96px 0',
      }}
    >
      <div style={{ maxWidth: '1024px', margin: '0 auto', padding: '0 24px' }}>
        <div className="reveal" style={{ marginBottom: '40px' }}>
          <SectionLabel label="TOOLS" />
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(1.9rem, 4vw, 2.6rem)',
              fontWeight: 800,
              letterSpacing: '-0.015em',
              color: 'var(--color-text-primary)',
              margin: '14px 0 0 0',
            }}
          >
            The daily toolkit
          </h2>
        </div>
      </div>

      <div className="marquee reveal" data-delay="100" aria-label="Technologies Najmu works with">
        <MarqueeTrack />
        <MarqueeTrack ariaHidden />
      </div>
    </section>
  );
}

function MarqueeTrack({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div className="marquee-track" aria-hidden={ariaHidden || undefined}>
      {STACK_ITEMS.map((item) => (
        <span
          key={item.label}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '18px',
            padding: '0 18px',
            whiteSpace: 'nowrap',
          }}
        >
          <span
            className="font-display"
            style={{
              fontSize: 'clamp(1.4rem, 3vw, 2rem)',
              fontWeight: 700,
              color: 'var(--color-text-subtle)',
              transition: 'color 0.3s',
            }}
          >
            {item.label}
          </span>
          <span
            aria-hidden="true"
            style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--color-accent-from), var(--color-accent-to))',
              display: 'inline-block',
              flexShrink: 0,
            }}
          />
        </span>
      ))}
    </div>
  );
}
