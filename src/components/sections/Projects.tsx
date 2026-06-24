'use client';

import { ExternalLink } from 'lucide-react';
import { PROJECTS } from '@/lib/data';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Badge } from '@/components/ui/Badge';

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
        <div className="reveal" style={{ marginBottom: '48px' }}>
          <SectionLabel label="WORK" />
          <h2
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 1.875rem)',
              fontWeight: 700,
              color: 'var(--color-text-primary)',
              margin: '12px 0 0 0',
              fontFamily: 'var(--font-sans)',
            }}
          >
            Things I&apos;ve built
          </h2>
        </div>

        <div className="projects-grid" style={{ display: 'grid', gap: '20px' }}>
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
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

function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[0];
  index: number;
}) {
  return (
    <div
      className="reveal project-card"
      data-delay={String(index * 80)}
      style={{
        backgroundColor: 'color-mix(in srgb, var(--color-bg-elevated) 80%, transparent)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        border: '1px solid var(--color-border)',
        borderRadius: '16px',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        transition: 'transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease',
        cursor: project.url ? 'pointer' : 'default',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = 'translateY(-3px)';
        el.style.borderColor = 'var(--color-border-strong)';
        el.style.boxShadow = '0 8px 32px rgba(124, 58, 237, 0.12)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = 'translateY(0)';
        el.style.borderColor = 'var(--color-border)';
        el.style.boxShadow = 'none';
      }}
    >
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
      <p
        style={{
          fontSize: '0.875rem',
          color: 'var(--color-text-muted)',
          margin: 0,
          lineHeight: 1.5,
        }}
      >
        {project.oneLiner}
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
        ) : (
          <Badge label="Internal" />
        )}
      </div>
    </div>
  );
}
