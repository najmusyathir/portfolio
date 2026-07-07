'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS, type Project } from '@/lib/data';
import { SectionLabel } from '@/components/ui/SectionLabel';

const ACADEON_PROJECTS = PROJECTS.filter((p) =>
  ['acadeon-cli', 'acadeon-pulse', 'personal-dashboard', 'ai_hub_bridge', 'ssh-web-server', 'Acadeon Academy'].includes(p.name)
);

const PREVIOUS_PROJECTS = PROJECTS.filter((p) =>
  ['Bakers Heist', 'Astral Apparel', 'PetCare Clinic System'].includes(p.name)
);

/**
 * Selected work — the proof. Not a card grid: an editorial index.
 * The real products (Acadeon ecosystem) are type-led ledger rows —
 * big names, live links, no decoration they don't earn. Earlier
 * client work sits below as a compact visual strip (that's where
 * the screenshots belong).
 */
export function Projects() {
  return (
    <section
      id="work"
      style={{
        position: 'relative',
        zIndex: 1,
        padding: '96px 24px 112px',
      }}
    >
      <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
        <div className="reveal" style={{ marginBottom: '16px' }}>
          <SectionLabel label="WORK" />
        </div>

        <h2
          className="font-display reveal"
          data-delay="60"
          style={{
            fontSize: 'clamp(1.9rem, 4vw, 2.6rem)',
            fontWeight: 800,
            letterSpacing: '-0.015em',
            color: 'var(--color-text-primary)',
            margin: '0 0 14px 0',
          }}
        >
          Things I&apos;ve shipped — and still run.
        </h2>

        <p
          className="reveal"
          data-delay="100"
          style={{
            fontSize: '1rem',
            lineHeight: 1.75,
            color: 'var(--color-text-muted)',
            maxWidth: '44em',
            margin: '0 0 56px 0',
          }}
        >
          Real products in production, most of them on a server humming away
          in my own home. I built each one end to end and I keep each one
          alive — the code, the deploys, the monitoring, the 2am fix when
          something breaks.
        </p>

        {/* ── The ecosystem: type-led ledger ──── */}
        <p
          className="reveal"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--color-accent)',
            margin: '0 0 6px 0',
          }}
        >
          The Acadeon ecosystem
        </p>

        <div style={{ borderTop: '1px solid var(--color-border)', marginBottom: '72px' }}>
          {ACADEON_PROJECTS.map((project, i) => (
            <IndexRow key={project.name} project={project} index={i} />
          ))}
        </div>

        {/* ── Earlier client work: visual strip ── */}
        <p
          className="reveal"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--color-text-subtle)',
            margin: '0 0 20px 0',
          }}
        >
          Earlier client work
        </p>

        <div className="previous-strip" style={{ display: 'grid', gap: '18px' }}>
          {PREVIOUS_PROJECTS.map((project, i) => (
            <PreviousCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        .index-row {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 6px 20px;
          padding: 22px 10px;
          border-bottom: 1px solid var(--color-border);
          text-decoration: none;
          position: relative;
          transition: background 0.25s, padding-left 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }
        a.index-row:hover {
          background: color-mix(in srgb, var(--color-accent) 4%, transparent);
          padding-left: 18px;
        }
        a.index-row:hover .index-name {
          color: var(--color-accent);
        }
        a.index-row:hover .index-arrow {
          opacity: 1;
          transform: translate(0, 0);
        }
        .previous-strip {
          grid-template-columns: 1fr;
        }
        .index-meta {
          grid-column: 2;
        }
        .index-arrow {
          display: none;
        }
        @media (min-width: 768px) {
          .previous-strip {
            grid-template-columns: repeat(3, 1fr);
          }
          .index-row {
            grid-template-columns: 52px 1.05fr 1.3fr 32px;
            align-items: baseline;
          }
          .index-meta {
            grid-column: auto;
          }
          .index-arrow {
            display: block;
          }
        }
      `}</style>
    </section>
  );
}

function StatusMark({ status }: { status: Project['status'] }) {
  if (status === 'live') {
    return (
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '0.72rem', fontWeight: 600, color: 'var(--color-success)', fontFamily: 'var(--font-mono)' }}>
        <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-success)', display: 'inline-block' }} />
        live
      </span>
    );
  }
  if (status === 'wip') {
    return <span style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--color-warning)', fontFamily: 'var(--font-mono)' }}>building</span>;
  }
  return <span style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--color-text-subtle)', fontFamily: 'var(--font-mono)' }}>internal</span>;
}

function IndexRow({ project, index }: { project: Project; index: number }) {
  const inner = (
    <>
      <span
        aria-hidden="true"
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.78rem',
          color: 'var(--color-text-subtle)',
          paddingTop: '6px',
        }}
      >
        {String(index + 1).padStart(2, '0')}
      </span>

      <span style={{ minWidth: 0 }}>
        <span style={{ display: 'flex', alignItems: 'baseline', gap: '12px', flexWrap: 'wrap' }}>
          <span
            className="index-name font-display"
            style={{
              fontSize: 'clamp(1.25rem, 2.6vw, 1.7rem)',
              fontWeight: 700,
              color: 'var(--color-text-primary)',
              transition: 'color 0.2s',
              overflowWrap: 'anywhere',
            }}
          >
            {project.name}
          </span>
          <StatusMark status={project.status} />
        </span>
        <span
          style={{
            display: 'block',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            color: 'var(--color-text-subtle)',
            marginTop: '6px',
          }}
        >
          {project.tags.join(' · ')}
        </span>
      </span>

      <span
        className="index-meta"
        style={{
          fontSize: '0.9rem',
          lineHeight: 1.6,
          color: 'var(--color-text-muted)',
        }}
      >
        {project.description}
      </span>

      <span
        className="index-arrow"
        aria-hidden="true"
        style={{
          opacity: project.url ? 0.35 : 0,
          transform: 'translate(-4px, 4px)',
          transition: 'opacity 0.25s, transform 0.25s',
          color: 'var(--color-accent)',
          alignSelf: 'start',
          paddingTop: '6px',
        }}
      >
        {project.url ? <ArrowUpRight size={20} /> : null}
      </span>
    </>
  );

  const revealProps = {
    className: 'index-row reveal',
    'data-delay': String(index * 60),
  };

  if (project.url) {
    return (
      <a href={project.url} target="_blank" rel="noopener noreferrer" {...revealProps}>
        {inner}
      </a>
    );
  }
  return <div {...revealProps}>{inner}</div>;
}

function LazyVideoPreview({ src }: { src: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        height: '150px',
        backgroundColor: 'var(--color-bg-overlay)',
        overflow: 'hidden',
      }}
    >
      {isInView && (
        <video
          src={src}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          preload="none"
          autoPlay
          muted
          loop
          playsInline
        />
      )}
    </div>
  );
}

function PreviousCard({ project, index }: { project: Project; index: number }) {
  const media = project.image ? (
    project.image.endsWith('.mp4') ? (
      <LazyVideoPreview src={project.image} />
    ) : (
      <div style={{ position: 'relative', height: '150px', overflow: 'hidden' }}>
        <Image src={project.image} alt={project.name} fill style={{ objectFit: 'cover' }} />
      </div>
    )
  ) : null;

  const body = (
    <>
      {media}
      <div style={{ padding: '14px 16px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '8px' }}>
          <h3
            style={{
              fontSize: '0.9rem',
              fontWeight: 600,
              color: 'var(--color-text-primary)',
              margin: 0,
              fontFamily: 'var(--font-mono)',
            }}
          >
            {project.name}
          </h3>
          {project.url && <ArrowUpRight size={14} style={{ color: 'var(--color-text-subtle)', flexShrink: 0 }} aria-hidden="true" />}
        </div>
        <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', lineHeight: 1.5, margin: '6px 0 0 0' }}>
          {project.description}
        </p>
      </div>
    </>
  );

  const shared = {
    className: 'card card-hover reveal-scale',
    'data-delay': String(index * 90),
    style: {
      overflow: 'hidden',
      display: 'block',
      textDecoration: 'none',
      borderRadius: '16px',
    } as React.CSSProperties,
  };

  if (project.url) {
    return (
      <a href={project.url} target="_blank" rel="noopener noreferrer" {...shared}>
        {body}
      </a>
    );
  }
  return <div {...shared}>{body}</div>;
}
