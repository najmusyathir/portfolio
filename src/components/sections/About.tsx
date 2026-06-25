import Image from 'next/image';
import { SectionLabel } from '@/components/ui/SectionLabel';

const ACTIVITIES = [
  {
    img: '/aboutme_1.jpg',
    title: 'UI / UX Sightseeing',
    desc: 'Study modern UI/UX from creative designers and bring their designs to life in code.',
  },
  {
    img: '/aboutme_2.jpeg',
    title: 'PC Building',
    desc: 'Passionate about high-end builds and crafting cozy, inspiring workstations.',
  },
  {
    img: '/aboutme_3.png',
    title: 'Coding & Web Dev',
    desc: 'Problem-solving challenges and building dynamic, well-crafted web experiences.',
  },
];

export function About() {
  return (
    <section
      id="about"
      style={{
        position: 'relative',
        zIndex: 1,
        padding: '112px 24px',
      }}
    >
      <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
        <div className="reveal" style={{ marginBottom: '48px' }}>
          <SectionLabel label="ABOUT" />
          <h2
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 1.875rem)',
              fontWeight: 700,
              color: 'var(--color-text-primary)',
              margin: '12px 0 0 0',
              fontFamily: 'var(--font-sans)',
            }}
          >
            A bit about me
          </h2>
        </div>

        <div
          className="about-layout"
          style={{ display: 'grid', gap: '48px', alignItems: 'center' }}
        >
          <div className="reveal" data-delay="100">
            <p
              style={{
                fontSize: '1rem',
                color: 'var(--color-text-muted)',
                lineHeight: 1.75,
                margin: '0 0 20px 0',
              }}
            >
              Originally from a background in PC building — crafting high-end workstations and discovering
              that the best setups deserve great software. That curiosity pulled me into computer science.
            </p>
            <p
              style={{
                fontSize: '1rem',
                color: 'var(--color-text-muted)',
                lineHeight: 1.75,
                margin: '0 0 20px 0',
              }}
            >
              Started coding in 2019 with Python, found a natural fit in problem-solving through code.
              Pivoted my academic path toward Computer Science in 2021 and haven&apos;t looked back.
            </p>
            <p
              style={{
                fontSize: '1rem',
                color: 'var(--color-text-muted)',
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              Today I build production SaaS tools — multi-tenant dashboards, async AI pipelines,
              PTY terminals — and run them on self-hosted Debian infra with Cloudflare tunnels and
              proper monitoring. Two years in, still shipping.
            </p>
          </div>

          <div
            className="reveal about-photo"
            data-delay="200"
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div style={{ padding: '3px', background: 'linear-gradient(135deg, var(--color-accent-from, #7c3aed), var(--color-accent-to, #ec4899))', borderRadius: '50%', display: 'inline-block' }}>
              <Image
                src="/profile_pic.jpg"
                alt="Najmu Syathir"
                width={160}
                height={160}
                className="rounded-full block"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>

        {/* Activity cards */}
        <div
          className="reveal activities-grid"
          data-delay="300"
          style={{ display: 'grid', gap: '20px', marginTop: '64px' }}
        >
          {ACTIVITIES.map((item, i) => (
            <div
              key={item.title}
              className="reveal"
              data-delay={String(300 + i * 80)}
              style={{
                backgroundColor: 'color-mix(in srgb, var(--color-bg-elevated) 80%, transparent)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                border: '1px solid var(--color-border)',
                borderRadius: '16px',
                overflow: 'hidden',
              }}
            >
              <div style={{ position: 'relative', width: '100%', height: '160px' }}>
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '16px' }}>
                <h3
                  style={{
                    fontSize: '0.9375rem',
                    fontWeight: 600,
                    color: 'var(--color-text-primary)',
                    margin: '0 0 8px 0',
                    fontFamily: 'var(--font-sans)',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--color-text-muted)',
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .about-layout {
            grid-template-columns: 1fr auto !important;
          }
          .about-photo {
            order: 2;
          }
          .activities-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
