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
          <p className="moment-stamp reveal" style={{ marginBottom: '18px' }}>
            <span className="clock">06:12</span> first light
          </p>

          <p
            className="reveal"
            data-delay="60"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              color: 'var(--color-text-muted)',
              margin: '0 0 26px 0',
            }}
          >
            <span style={{ color: 'var(--color-text-subtle)' }}>~$</span>{' '}
            open to collaborate <span style={{ color: 'var(--color-text-subtle)' }}>·</span>{' '}
            Malaysia (GMT+8) <span style={{ color: 'var(--color-text-subtle)' }}>·</span>{' '}
            <span style={{ color: 'var(--color-success)' }}>6 agents online</span>
          </p>

          <h1
            className="font-display reveal"
            data-delay="120"
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
            AI teammates. Every day here starts before sunrise and ends after
            midnight — scroll through one and see what we make of it.
          </p>

          <div
            className="reveal"
            data-delay="300"
            style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '22px' }}
          >
            <Link href="/#work" className="btn-primary">
              Start the day
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
            <Link
              href="/#contact"
              className="hero-text-link"
              style={{
                fontSize: '0.9rem',
                fontWeight: 600,
                color: 'var(--color-text-primary)',
                textDecoration: 'underline',
                textDecorationColor: 'var(--color-accent-mid)',
                textUnderlineOffset: '5px',
                textDecorationThickness: '1.5px',
              }}
            >
              or skip to midnight — let&apos;s talk
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
        .hero-text-link {
          transition: color 0.2s, text-decoration-color 0.2s;
        }
        .hero-text-link:hover {
          color: var(--color-accent);
          text-decoration-color: var(--color-accent);
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
