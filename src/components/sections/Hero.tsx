import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

/**
 * Hero — engineer-first identity. Leads with shipped, self-hosted
 * production work; the AI orchestration is the answer to "how does
 * one person run all this," not the opening claim. The Constellation
 * lives on /ai now — this is a warm photo, given real presence.
 */
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
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              color: 'var(--color-text-muted)',
              margin: '0 0 26px 0',
            }}
          >
            <span style={{ color: 'var(--color-text-subtle)' }}>~$</span>{' '}
            open to collaborate <span style={{ color: 'var(--color-text-subtle)' }}>·</span>{' '}
            Malaysia (GMT+8) <span style={{ color: 'var(--color-text-subtle)' }}>·</span>{' '}
            <span style={{ color: 'var(--color-success)' }}>6 services live</span>
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
            Hi, I&apos;m Najmu — I build software and run it in{' '}
            <span className="gradient-text">production</span>. Solo.
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
            Full-stack engineer building production tools front-to-back —
            the interface, the API, and the self-hosted server it all runs
            on. Six of them are live right now, on infrastructure I manage
            myself.
          </p>

          <div
            className="reveal"
            data-delay="300"
            style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '22px' }}
          >
            <Link href="/#work" className="btn-primary">
              See my work
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
              Let&apos;s talk
            </Link>
          </div>

          <p
            className="reveal"
            data-delay="360"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.82rem',
              fontStyle: 'italic',
              color: 'var(--color-text-subtle)',
              margin: '26px 0 0 0',
            }}
          >
            How does one person run all this? ↓
          </p>
        </div>

        {/* ── Right: the human, given real presence ────── */}
        <div className="reveal-scale" data-delay="200" style={{ textAlign: 'center' }}>
          <div className="hero-photo-frame">
            <Image
              src="/profile_pic.jpg"
              alt="Najmu Syathir"
              fill
              priority
              style={{ objectFit: 'cover' }}
              sizes="(min-width: 1024px) 420px, 320px"
            />
          </div>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'var(--color-text-subtle)',
              marginTop: '16px',
              marginBottom: 0,
            }}
          >
            no hologram, no team on this page — just me
          </p>
        </div>
      </div>

      <style>{`
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
        .hero-photo-frame {
          position: relative;
          width: 100%;
          max-width: 320px;
          aspect-ratio: 4 / 5;
          margin: 0 auto;
          border-radius: 28px;
          overflow: hidden;
          border: 1px solid var(--color-border);
          box-shadow: 0 24px 60px -24px rgba(34, 29, 20, 0.35);
        }
        [data-theme="dark"] .hero-photo-frame {
          box-shadow: 0 24px 60px -20px rgba(0, 0, 0, 0.6);
        }
        @media (min-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1.05fr 0.95fr;
          }
          .hero-photo-frame {
            max-width: 420px;
          }
        }
      `}</style>
    </section>
  );
}
