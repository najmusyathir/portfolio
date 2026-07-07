import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SectionLabel } from '@/components/ui/SectionLabel';

/**
 * How I Work with AI — the one restrained AI section on the
 * homepage. Text-only doorway to /ai, where the Constellation and
 * the full roster live. No visual AI imagery here — a deliberate,
 * confirmed decision (see portfolio-v3-content-design.md).
 */
export function HowIWorkTeaser() {
  return (
    <section
      id="how-i-work"
      style={{
        position: 'relative',
        zIndex: 1,
        padding: '80px 24px 96px',
      }}
    >
      <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
        <div className="reveal" style={{ marginBottom: '18px', display: 'flex', justifyContent: 'center' }}>
          <SectionLabel label="THE SYSTEM BEHIND THE SPEED" />
        </div>

        <h2
          className="font-display reveal"
          data-delay="60"
          style={{
            fontSize: 'clamp(1.9rem, 4vw, 2.6rem)',
            fontWeight: 800,
            letterSpacing: '-0.015em',
            color: 'var(--color-text-primary)',
            margin: '0 0 24px 0',
          }}
        >
          How does one engineer run all this?
        </h2>

        <p
          className="reveal"
          data-delay="120"
          style={{
            fontSize: '1rem',
            lineHeight: 1.75,
            color: 'var(--color-text-muted)',
            margin: '0 0 18px 0',
          }}
        >
          I built a system for it. Six scoped AI agents — each with one job,
          running on my own server, under version control and my review.
          They draft; I architect, verify, and own every line that ships.
          Nothing goes live that I couldn&apos;t have written myself.
        </p>

        <p
          className="reveal"
          data-delay="160"
          style={{
            fontSize: '1rem',
            lineHeight: 1.75,
            color: 'var(--color-text-muted)',
            margin: '0 0 32px 0',
          }}
        >
          It isn&apos;t a team that works for me. It&apos;s a toolchain I
          built to multiply one engineer — carefully, with a review gate
          between every agent and production.
        </p>

        <Link
          href="/ai"
          className="teaser-link reveal"
          data-delay="200"
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
          See exactly how I work with AI
          <ArrowRight size={15} aria-hidden="true" />
        </Link>
      </div>

      <style>{`
        .teaser-link {
          transition: gap 0.25s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .teaser-link:hover {
          gap: 11px;
        }
      `}</style>
    </section>
  );
}
