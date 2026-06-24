'use client';

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

function ProjectCard({
  project,
  index,
}: {
  project: Project;
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
