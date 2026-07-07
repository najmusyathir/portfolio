import type { Metadata } from 'next';
import Link from 'next/link';
import { AuroraBackground } from '@/components/layout/AuroraBackground';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgress } from '@/components/layout/ScrollProgress';
import { Constellation } from '@/components/Constellation';
import { TheTeam } from '@/components/sections/TheTeam';
import { HowIWork } from '@/components/sections/HowIWork';
import { ScopeTable } from '@/components/sections/ScopeTable';
import { ScrollRevealInit } from '@/components/ScrollRevealInit';
import { HashScroll } from '@/components/HashScroll';

export const metadata: Metadata = {
  title: 'The Team & How I Work — Najmu Syathir',
  description:
    'Meet the six named AI agents Najmu builds with, see the constellation live, and check the actual boundary each agent works inside.',
};

/**
 * /ai — the deep-dive page: the full persona roster, the restored
 * v2 "How I work with AI" workflow, and now the Constellation as a
 * real centerpiece (moved here from the homepage — being AI-forward
 * is the whole point of this page) plus a scope table that turns
 * "I govern my AI" from a claim into checkable evidence.
 */
export default function AiPage() {
  return (
    <>
      <AuroraBackground />
      <ScrollProgress />
      <Navbar />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <TheTeam />

        {/* ── The constellation, in full ──────────── */}
        <section
          id="constellation"
          style={{
            position: 'relative',
            zIndex: 1,
            padding: '32px 24px 96px',
          }}
        >
          <div style={{ maxWidth: '1024px', margin: '0 auto', textAlign: 'center' }}>
            <h2
              className="font-display reveal"
              style={{
                fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)',
                fontWeight: 800,
                letterSpacing: '-0.015em',
                color: 'var(--color-text-primary)',
                margin: '0 0 12px 0',
              }}
            >
              This is my actual team.
            </h2>
            <p
              className="reveal"
              data-delay="60"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                color: 'var(--color-text-subtle)',
                margin: '0 auto 28px',
                maxWidth: '34em',
              }}
            >
              Najmu at the center, six scoped agents in orbit — hover the
              nodes to say hi, and watch the pulses travel where the actual
              work happens.
            </p>
            <div className="reveal-scale constellation-frame" data-delay="120">
              <Constellation />
            </div>
          </div>

          <style>{`
            .constellation-frame {
              height: 380px;
            }
            @media (min-width: 768px) {
              .constellation-frame {
                height: 520px;
              }
            }
          `}</style>
        </section>

        <HowIWork />
        <ScopeTable />

        {/* ── CTA — back into the homepage sections ── */}
        <section
          style={{
            position: 'relative',
            zIndex: 1,
            padding: '32px 24px 144px',
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <h2
              className="font-display reveal"
              style={{
                fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)',
                fontWeight: 800,
                letterSpacing: '-0.015em',
                lineHeight: 1.15,
                color: 'var(--color-text-primary)',
                margin: '0 0 16px 0',
              }}
            >
              Want proof? <span className="gradient-text">It&apos;s all live.</span>
            </h2>
            <p
              className="reveal"
              data-delay="80"
              style={{
                fontSize: '1rem',
                color: 'var(--color-text-muted)',
                lineHeight: 1.75,
                margin: '0 auto 36px',
                maxWidth: '34em',
              }}
            >
              Everything this team ships runs in production, on a server we
              look after ourselves. Go see the work — or bring us an idea.
            </p>
            <div
              className="reveal"
              data-delay="160"
              style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '14px' }}
            >
              <Link href="/#work" className="btn-primary">
                See what we&apos;ve shipped
              </Link>
              <Link href="/#contact" className="btn-ghost">
                Let&apos;s talk
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollRevealInit />
      <HashScroll />
    </>
  );
}
