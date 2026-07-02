'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Download, ExternalLink, Globe, Mail, Phone, MapPin } from 'lucide-react';
import { AuroraBackground } from '@/components/layout/AuroraBackground';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Badge } from '@/components/ui/Badge';
import { ScrollRevealInit } from '@/components/ScrollRevealInit';

const CARD_STYLE: React.CSSProperties = {
  backgroundColor: 'color-mix(in srgb, var(--color-bg-elevated) 80%, transparent)',
  backdropFilter: 'blur(8px)',
  WebkitBackdropFilter: 'blur(8px)',
  border: '1px solid var(--color-border)',
  borderRadius: '16px',
  padding: '24px',
};

const SECTION_HEADING_STYLE: React.CSSProperties = {
  fontSize: 'clamp(1.5rem, 3vw, 1.875rem)',
  fontWeight: 700,
  color: 'var(--color-text-primary)',
  margin: '12px 0 0 0',
  fontFamily: 'var(--font-sans)',
};

interface Job {
  title: string;
  company: string;
  period: string;
  bullets: string[];
  tech?: string[];
}

const JOBS: Job[] = [
  {
    title: 'Full Stack Developer',
    company: 'myFirst Tech Sdn Bhd',
    period: 'March 2025 – Present',
    bullets: [
      'Contributing as a full-stack developer across front-end and back-end systems.',
    ],
  },
  {
    title: 'Junior Software Developer and Operations (FE)',
    company: 'Guard Genius Sdn Bhd',
    period: 'August 2024 – March 2025',
    bullets: [
      'Developed and optimized responsive web applications using Vue.js and Tailwind CSS, ensuring cross-device compatibility and a seamless user experience.',
      'Collaborated with cross-functional teams to integrate RESTful APIs, enhancing data flow and application performance.',
      'Maintained code quality through Git version control, using branching strategies (staging/development) for efficient integration.',
      'Redesigned and restructured the company’s website using Figma, improving UX and aligning with business objectives.',
      'Utilized Sentry for bug tracking and resolution, improving application performance and reducing load times.',
      'Implemented email automation via a mail server API, automating customer communication.',
      'Refactored and cleaned up legacy code, improving maintainability and readability.',
    ],
    tech: ['Vue.js', 'Flask', 'MySQL', 'Git', 'Figma'],
  },
  {
    title: 'Software Developer Intern',
    company: 'AQ Wise Sdn Bhd',
    period: 'March 2024 – June 2024',
    bullets: [
      'Gained hands-on experience in Flutter development through a supervisor-led short course.',
      'Contributed to a Flutter project by adding a responsive sidebar, improving navigation.',
      'Developed an e-commerce platform using Laravel, including product management and shopping cart features.',
      'Designed and managed MySQL databases for product catalogs, user profiles, and order histories.',
      'Built dynamic interfaces with Blade templates.',
    ],
    tech: ['Flutter', 'Laravel', 'HTML', 'CSS', 'PHP', 'Tailwind CSS'],
  },
];

interface ResumeProject {
  name: string;
  desc: string;
  tags: string[];
  url?: string;
  note?: string;
}

const PROJECT_GROUPS: { key: string; label: string; items: ResumeProject[] }[] = [
  {
    key: 'freelance',
    label: 'Freelance / Client Work',
    items: [
      {
        name: 'MNS Tech Store',
        desc: 'E-commerce platform for PC parts and accessories. Deployed on InfinityFree.',
        tags: ['Laravel MVC', 'Blade', 'MySQL', 'Tailwind CSS'],
      },
      {
        name: 'Bakers Heist',
        desc: 'E-commerce platform for a cake shop and bakery.',
        tags: ['HTML5', 'CSS3', 'JavaScript'],
        url: 'https://bakers-heist.vercel.app',
      },
      {
        name: 'Astral Apparel',
        desc: 'Online store for Muslimah fashion — abaya, baju kurung, modest wear.',
        tags: ['HTML5', 'CSS3', 'JavaScript'],
        url: 'https://astral-apparel.vercel.app',
      },
      {
        name: 'PetCare Clinic System',
        desc: 'Grooming and vet booking platform with appointments, pet profiles, service management.',
        tags: ['Laravel', 'Blade', 'MySQL', 'JavaScript'],
      },
    ],
  },
  {
    key: 'personal',
    label: 'Personal / Self-Hosted Projects',
    items: [
      {
        name: 'acadeon-cli',
        desc: 'Browser-based PTY terminal with TOTP auth.',
        tags: ['Next.js', 'TypeScript', 'node-pty', 'Supabase'],
        url: 'https://cli.najmusyathir.dev',
      },
      {
        name: 'acadeon-pulse',
        desc: 'Uptime monitor PWA with escalating push alerts.',
        tags: ['Next.js', 'TypeScript', 'Supabase', 'PWA'],
        url: 'https://pulse.najmusyathir.dev',
      },
      {
        name: 'ssh-web-server',
        desc: 'Browser-based SSH client, zero install.',
        tags: ['Next.js', 'TypeScript', 'WebSocket'],
        url: 'https://ssh.najmusyathir.dev',
      },
      {
        name: 'personal-dashboard',
        desc: 'Multi-tenant SaaS with finance, vault, kanban, and AI chat modules.',
        tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
      },
      {
        name: 'ai_hub_bridge',
        desc: 'Async AI job queue bridging Claude CLI to web and Telegram.',
        tags: ['Next.js', 'TypeScript', 'Supabase Realtime'],
      },
      {
        name: 'CPU Motherboard Compatibility Checker',
        desc: 'Final Year Project: web extension integrated with Lazada’s cart page to verify CPU/motherboard compatibility. Awarded Best Industrial Panel Final Year Project (2024).',
        tags: ['HTML', 'CSS', 'JavaScript', 'Python', 'Docker', 'FastAPI', 'Data Scraping', 'Regex'],
      },
      {
        name: 'Project Management System (Mobile)',
        desc: 'University group project; Android app with RecyclerView, Firebase push notifications.',
        tags: ['Android Studio', 'CSS', 'JavaScript'],
      },
      {
        name: 'Personal Portfolio (v1)',
        desc: 'Original portfolio built with React.js and React Router. Superseded by this current site.',
        tags: ['React.js', 'React Router', 'Tailwind CSS'],
        url: 'https://portfolio-v1.najmusyathir.dev',
        note: 'Previous version',
      },
    ],
  },
  {
    key: 'onhold',
    label: 'On Hold',
    items: [
      {
        name: 'Acadeon Academy',
        desc: 'Multi-school management platform — students, staff, classes, co-curriculars, sports, exams, records.',
        tags: ['Next.js', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Tailwind', 'Docker'],
        note: 'On hold',
      },
    ],
  },
];

const SKILL_GROUPS: { label: string; items: string[] }[] = [
  { label: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'PHP', 'HTML5', 'CSS3'] },
  { label: 'Frontend', items: ['React.js', 'Next.js', 'Vue.js', 'Tailwind CSS', 'Bootstrap 5', 'SCSS/SASS'] },
  { label: 'Backend', items: ['Node.js', 'FastAPI', 'Flask', 'Laravel', 'RESTful API design'] },
  { label: 'Database & ORM', items: ['PostgreSQL', 'MySQL', 'Prisma'] },
  {
    label: 'Infrastructure & DevOps',
    items: ['Docker', 'Git', 'Self-hosted Linux server administration', 'Cloudflare (Tunnels, Zero Trust)', 'Supabase (Auth, Realtime, Storage)', 'tmux'],
  },
  { label: 'Mobile', items: ['Flutter', 'Android Studio (Java)'] },
  { label: 'Tools', items: ['Figma', 'Sentry', 'Data scraping / regex'] },
];

function ProjectTile({ project }: { project: ResumeProject }) {
  return (
    <div
      style={{
        ...CARD_STYLE,
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px' }}>
        <h3
          style={{
            fontSize: '0.9375rem',
            fontWeight: 600,
            color: 'var(--color-text-primary)',
            margin: 0,
            fontFamily: 'var(--font-mono)',
          }}
        >
          {project.name}
        </h3>
        {project.note && (
          <span style={{ fontSize: '0.75rem', fontWeight: 500, color: 'var(--color-text-subtle)', whiteSpace: 'nowrap' }}>
            {project.note}
          </span>
        )}
      </div>
      <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.55 }}>
        {project.desc}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '8px' }}>
        {project.tags.map((tag) => (
          <Badge key={tag} label={tag} />
        ))}
      </div>
      {project.url && (
        <div style={{ marginTop: '8px' }}>
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
            }}
          >
            <ExternalLink size={13} />
            {project.url.replace('https://', '')}
          </a>
        </div>
      )}
    </div>
  );
}

export default function ResumePage() {
  const [activeGroup, setActiveGroup] = useState(PROJECT_GROUPS[0].key);
  const currentGroup = PROJECT_GROUPS.find((g) => g.key === activeGroup) ?? PROJECT_GROUPS[0];

  return (
    <>
      <AuroraBackground />
      <Navbar />
      <main style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <section style={{ padding: '80px 24px 48px' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <div className="reveal">
              <h1
                className="gradient-text"
                style={{
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                  fontWeight: 800,
                  margin: 0,
                  fontFamily: 'var(--font-sans)',
                  lineHeight: 1.1,
                }}
              >
                Muhammad Najmu Al Syathir Bin Azemi
              </h1>
              <p
                style={{
                  fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                  color: 'var(--color-text-muted)',
                  margin: '12px 0 20px 0',
                }}
              >
                Full-Stack Developer
              </p>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '16px',
                  fontSize: '0.875rem',
                  color: 'var(--color-text-muted)',
                  marginBottom: '20px',
                }}
              >
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <MapPin size={14} /> Kuala Lumpur, Malaysia
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <Phone size={14} /> +60 13-735 3215
                </span>
                <a
                  href="mailto:alsyathir@gmail.com"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--color-text-muted)', textDecoration: 'none' }}
                >
                  <Mail size={14} /> alsyathir@gmail.com
                </a>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '28px' }}>
                <a
                  href="https://github.com/najmusyathir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                  style={{ padding: '8px 16px', fontSize: '0.8125rem' }}
                >
                  <ExternalLink size={14} /> GitHub
                </a>
                <a
                  href="https://linkedin.com/in/najmusyathir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                  style={{ padding: '8px 16px', fontSize: '0.8125rem' }}
                >
                  <ExternalLink size={14} /> LinkedIn
                </a>
                <Link href="/" className="btn-ghost" style={{ padding: '8px 16px', fontSize: '0.8125rem' }}>
                  <Globe size={14} /> najmusyathir.dev
                </Link>
              </div>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ fontSize: '0.9375rem', padding: '12px 24px' }}
              >
                <Download size={16} />
                Download PDF
              </a>
            </div>
          </div>
        </section>

        {/* Professional Summary */}
        <section style={{ padding: '24px 24px 56px' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <div className="reveal" style={CARD_STYLE}>
              <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)', lineHeight: 1.75, margin: 0 }}>
                Full-stack developer with 2+ years of professional experience across front-end and back-end
                development, plus a growing personal infrastructure of self-hosted projects — browser-based PTY
                terminals, uptime monitoring, multi-tenant SaaS, and async AI orchestration pipelines, all running
                on infrastructure I manage myself. Comfortable owning the full stack: front-end (React, Vue.js,
                Next.js), back-end (Node.js, Python, PHP), and infrastructure (Linux server administration, Docker,
                Cloudflare). Currently a Full Stack Developer at myFirst Tech Sdn Bhd.
              </p>
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section style={{ padding: '0 24px 56px' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <div className="reveal" style={{ marginBottom: '32px' }}>
              <SectionLabel label="EXPERIENCE" />
              <h2 style={SECTION_HEADING_STYLE}>Work Experience</h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {JOBS.map((job, i) => (
                <div key={job.company} style={{ display: 'flex', gap: '20px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, paddingTop: '6px' }}>
                    <div
                      style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, var(--color-accent-from), var(--color-accent-to))',
                        flexShrink: 0,
                      }}
                    />
                    {i < JOBS.length - 1 && (
                      <div
                        style={{
                          width: '2px',
                          flex: 1,
                          minHeight: '40px',
                          background: 'linear-gradient(to bottom, var(--color-accent-from), var(--color-accent-to))',
                          opacity: 0.4,
                        }}
                      />
                    )}
                  </div>

                  <div
                    className="reveal"
                    data-delay={String(i * 80)}
                    style={{ ...CARD_STYLE, marginBottom: '24px', flex: 1 }}
                  >
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '8px', marginBottom: '4px' }}>
                      <h3 style={{ fontSize: '1.0625rem', fontWeight: 600, color: 'var(--color-text-primary)', margin: 0 }}>
                        {job.title}
                      </h3>
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 500,
                          color: 'var(--color-text-subtle)',
                          fontFamily: 'var(--font-mono)',
                          whiteSpace: 'nowrap',
                          paddingTop: '3px',
                        }}
                      >
                        {job.period}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-accent)', margin: '0 0 14px 0' }}>
                      {job.company}
                    </p>
                    <ul style={{ margin: 0, paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {job.bullets.map((bullet, bi) => (
                        <li key={bi} style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                    {job.tech && (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '16px' }}>
                        {job.tech.map((tag) => (
                          <Badge key={tag} label={tag} />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section style={{ padding: '0 24px 56px' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <div className="reveal" style={{ marginBottom: '32px' }}>
              <SectionLabel label="WORK" />
              <h2 style={SECTION_HEADING_STYLE}>Projects</h2>
            </div>

            {/* Group tabs */}
            <div
              className="reveal"
              role="tablist"
              aria-label="Project categories"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                marginBottom: '24px',
                borderBottom: '1px solid var(--color-border)',
                paddingBottom: '16px',
              }}
            >
              {PROJECT_GROUPS.map((group) => {
                const isActive = group.key === activeGroup;
                return (
                  <button
                    key={group.key}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveGroup(group.key)}
                    style={{
                      background: isActive
                        ? 'linear-gradient(135deg, var(--color-accent-from), var(--color-accent-to))'
                        : 'var(--color-bg-elevated)',
                      border: `1px solid ${isActive ? 'transparent' : 'var(--color-border)'}`,
                      color: isActive ? 'white' : 'var(--color-text-muted)',
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      padding: '8px 16px',
                      borderRadius: '999px',
                      cursor: 'pointer',
                      transition: 'opacity 0.2s, border-color 0.2s',
                    }}
                  >
                    {group.label}
                  </button>
                );
              })}
            </div>

            <div
              key={currentGroup.key}
              className="projects-grid reveal"
              style={{ display: 'grid', gap: '16px' }}
            >
              {currentGroup.items.map((project) => (
                <ProjectTile key={project.name} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Education */}
        <section style={{ padding: '0 24px 56px' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <div className="reveal" style={{ marginBottom: '32px' }}>
              <SectionLabel label="EDUCATION" />
              <h2 style={SECTION_HEADING_STYLE}>Education</h2>
            </div>

            <div className="education-grid" style={{ display: 'grid', gap: '16px' }}>
              <div className="reveal" style={CARD_STYLE}>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-text-primary)', margin: '0 0 4px 0' }}>
                  Bachelor of Computer Science (Hons.)
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', margin: '0 0 8px 0' }}>
                  Universiti Teknologi MARA, Melaka (Kampus Jasin)
                </p>
                <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-subtle)', fontFamily: 'var(--font-mono)', margin: 0 }}>
                  June 2023 &middot; CGPA 3.18
                </p>
              </div>
              <div className="reveal" data-delay="80" style={CARD_STYLE}>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-text-primary)', margin: '0 0 4px 0' }}>
                  Diploma in Applied Science
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', margin: '0 0 8px 0' }}>
                  Universiti Teknologi MARA, Perlis (Kampus Arau)
                </p>
                <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-subtle)', fontFamily: 'var(--font-mono)', margin: 0 }}>
                  February 2021 &middot; CGPA 3.21
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section style={{ padding: '0 24px 112px' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <div className="reveal" style={{ marginBottom: '32px' }}>
              <SectionLabel label="TOOLS" />
              <h2 style={SECTION_HEADING_STYLE}>Skills</h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {SKILL_GROUPS.map((group, i) => (
                <div
                  key={group.label}
                  className="reveal"
                  data-delay={String(i * 60)}
                  style={CARD_STYLE}
                >
                  <p
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--color-accent)',
                      fontFamily: 'var(--font-mono)',
                      margin: '0 0 12px 0',
                    }}
                  >
                    {group.label}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {group.items.map((skill) => (
                      <Badge key={skill} label={skill} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollRevealInit />

      <style>{`
        @media (min-width: 640px) {
          .education-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 768px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </>
  );
}
