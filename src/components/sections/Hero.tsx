import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Constellation } from '@/components/Constellation';

export function Hero() {
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        zIndex: 1,
        minHeight: 'calc(100vh - 56px)',
        display: 'flex',
        alignItems: 'center',
        padding: '48px 24px',
      }}
    >
      <div
        className="hero-grid"
        style={{
          maxWidth: '1120px',
          margin: '0 auto',
          width: '100%',
          display: 'grid',
          gap: '48px',
          alignItems: 'center',
        }}
      >
        {/* ── Left: the words ─────────────────── */}
        <div>
          <p
            className="reveal"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              fontWeight: 500,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--color-text-muted)',
              background: 'var(--color-bg-elevated)',
              border: '1px solid var(--color-border)',
              borderRadius: '999px',
              padding: '7px 14px',
              margin: '0 0 28px 0',
            }}
          >
            <span className="pulse-dot" />
            Malaysia · Open to collaborate
          </p>

          <h1
            className="font-display reveal"
            data-delay="100"
            style={{
              fontSize: 'clamp(2.6rem, 6vw, 4.4rem)',
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              margin: '0 0 24px 0',
              color: 'var(--color-text-primary)',
            }}
          >
            Hi, I&apos;m Najmu.
            <br />
            I build with an{' '}
            <span className="gradient-text">AI&nbsp;team</span>.
            <span className="cursor" aria-hidden="true" />
          </h1>

          <p
            className="reveal"
            data-delay="200"
            style={{
              fontSize: 'clamp(1rem, 1.6vw, 1.125rem)',
              lineHeight: 1.7,
              color: 'var(--color-text-muted)',
              maxWidth: '34em',
              margin: '0 0 36px 0',
            }}
          >
            Full-stack developer with big energy and a home-grown crew of six
            AI teammates. Together we turn everyday friction into real
            products — terminals, dashboards, finance tools — all self-hosted,
            all live.
          </p>

          <div
            className="reveal"
            data-delay="300"
            style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}
          >
            <Link href="/#work" className="btn-primary">
              See what we&apos;ve built
            </Link>
            <Link href="/#contact" className="btn-ghost">
              Let&apos;s talk
            </Link>
          </div>
        </div>

        {/* ── Right: the team, alive ──────────── */}
        <div className="reveal-scale" data-delay="200" style={{ textAlign: 'center' }}>
          <div className="hero-constellation" style={{ width: '100%' }}>
            <Constellation />
          </div>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'var(--color-text-subtle)',
              marginTop: '4px',
              marginBottom: '14px',
            }}
          >
            this is my actual team — hover the nodes to say hi
          </p>
          <Link
            href="/ai"
            className="hero-team-link"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '7px',
              fontSize: '0.9rem',
              fontWeight: 600,
              color: 'var(--color-accent)',
              textDecoration: 'none',
            }}
          >
            Meet the team &amp; how we work
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>

      <style>{`
        .hero-team-link {
          transition: gap 0.25s cubic-bezier(0.22, 1, 0.36, 1), color 0.2s;
        }
        .hero-team-link:hover {
          gap: 11px;
        }
        .hero-grid {
          grid-template-columns: 1fr;
        }
        .hero-constellation {
          height: 340px;
        }
        @media (min-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1.05fr 0.95fr;
          }
          .hero-constellation {
            height: 480px;
          }
        }
      `}</style>
    </section>
  );
}
