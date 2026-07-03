'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { PROJECTS, type Project } from '@/lib/data';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Badge } from '@/components/ui/Badge';

const ACADEON_PROJECTS = PROJECTS.filter((p) =>
  ['acadeon-cli', 'acadeon-pulse', 'personal-dashboard', 'ai_hub_bridge', 'ssh-web-server', 'Acadeon Academy'].includes(p.name)
);

const PREVIOUS_PROJECTS = PROJECTS.filter((p) =>
  ['Bakers Heist', 'Astral Apparel', 'PetCare Clinic System'].includes(p.name)
);

export function Projects() {
  return (
    <section
      id="work"
      style={{
        position: 'relative',
        zIndex: 1,
        padding: '112px 24px',
      }}
    >
      <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
        <div className="reveal" style={{ marginBottom: '20px' }}>
          <SectionLabel label="WORK" />
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
            Things we&apos;ve shipped
          </h2>
        </div>

        <p
          className="reveal"
          data-delay="80"
          style={{
            fontSize: '1rem',
            lineHeight: 1.75,
            color: 'var(--color-text-muted)',
            maxWidth: '44em',
            margin: '0 0 48px 0',
          }}
        >
          Real products, running right now — most of them on a server humming
          away in my own home. Every one started as &quot;wouldn&apos;t it be
          easier if…&quot;
        </p>

        {/* Acadeon Ecosystem */}
        <div className="reveal" style={{ marginBottom: '16px' }}>
          <p
            style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              color: 'var(--color-accent)',
              textTransform: 'uppercase',
              margin: 0,
              fontFamily: 'var(--font-mono)',
            }}
          >
            Acadeon Ecosystem
          </p>
        </div>

        <div className="projects-grid" style={{ display: 'grid', gap: '20px', marginBottom: '64px' }}>
          {ACADEON_PROJECTS.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>

        {/* Divider */}
        <div
          className="reveal"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '32px',
          }}
        >
          <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--color-border)' }} />
          <p
            style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              color: 'var(--color-text-subtle)',
              textTransform: 'uppercase',
              margin: 0,
              fontFamily: 'var(--font-mono)',
              whiteSpace: 'nowrap',
            }}
          >
            Previous work
          </p>
          <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--color-border)' }} />
        </div>

        <div className="projects-grid" style={{ display: 'grid', gap: '20px' }}>
          {PREVIOUS_PROJECTS.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={ACADEON_PROJECTS.length + i} />
          ))}
        </div>
      </div>

      <style>{`
        .projects-grid {
          grid-template-columns: 1fr;
        }
        @media (min-width: 768px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  );
}

function StatusBadge({ status }: { status: Project['status'] }) {
  if (status === 'live') {
    return (
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '5px',
          fontSize: '0.75rem',
          fontWeight: 500,
          color: 'var(--color-success)',
        }}
      >
        <span
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-success)',
            display: 'inline-block',
          }}
        />
        Live
      </span>
    );
  }

  if (status === 'wip') {
    return (
      <span
        style={{
          fontSize: '0.75rem',
          fontWeight: 500,
          color: 'var(--color-warning)',
        }}
      >
        In Progress
      </span>
    );
  }

  // internal
  return (
    <span
      style={{
        fontSize: '0.75rem',
        fontWeight: 500,
        color: 'var(--color-text-subtle)',
      }}
    >
      Internal
    </span>
  );
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
      className="w-full rounded-xl mb-4"
      style={{
        maxHeight: '180px',
        height: '180px',
        backgroundColor: 'var(--color-bg-overlay)',
        overflow: 'hidden',
      }}
    >
      {isInView && (
        <video
          src={src}
          className="w-full h-full rounded-xl object-cover"
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

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <div
      className="card card-hover shine reveal"
      data-delay={String(index * 80)}
      style={{
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        cursor: project.url ? 'pointer' : 'default',
      }}
    >
      {project.image && project.image.endsWith('.mp4') && (
        <LazyVideoPreview src={project.image} />
      )}
      {project.image && !project.image.endsWith('.mp4') && (
        <div className="relative w-full mb-4 rounded-xl overflow-hidden" style={{ height: '160px' }}>
          <Image src={project.image} alt={project.name} fill className="object-cover" />
        </div>
      )}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px' }}>
        <h3
          style={{
            fontSize: '1rem',
            fontWeight: 600,
            color: 'var(--color-text-primary)',
            margin: 0,
            fontFamily: 'var(--font-mono)',
          }}
        >
          {project.name}
        </h3>
        <StatusBadge status={project.status} />
      </div>
      <p
        style={{
          fontSize: '0.875rem',
          color: 'var(--color-text-muted)',
          margin: 0,
          lineHeight: 1.5,
        }}
      >
        {project.description}
      </p>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '6px',
          marginTop: '16px',
        }}
      >
        {project.tags.map((tag) => (
          <Badge key={tag} label={tag} />
        ))}
      </div>
      <div style={{ marginTop: 'auto', paddingTop: '16px' }}>
        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '0.8rem',
              fontWeight: 500,
              color: 'var(--color-accent)',
              textDecoration: 'none',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.7')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '1')}
          >
            <ExternalLink size={13} />
            {project.url.replace('https://', '')}
          </a>
        ) : null}
      </div>
    </div>
  );
}
