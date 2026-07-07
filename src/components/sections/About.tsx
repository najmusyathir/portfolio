import Image from 'next/image';
import { SectionLabel } from '@/components/ui/SectionLabel';

const ACTIVITIES = [
  {
    img: '/aboutme_1.jpg',
    title: 'UI / UX Sightseeing',
    desc: 'I collect beautiful interfaces the way other people collect stamps — then bring the best ideas to life in code.',
    rotate: '-2.2deg',
  },
  {
    img: '/aboutme_2.jpeg',
    title: 'PC Building',
    desc: 'High-end builds and cozy workstations. My own server started life as one of these projects.',
    rotate: '1.6deg',
  },
  {
    img: '/aboutme_3.png',
    title: 'Coding & Web Dev',
    desc: 'The daily craft — problem-solving, shipping, and polishing until it feels right.',
    rotate: '-1.4deg',
  },
];

/**
 * About — the human behind the system. Photo sits in the polaroid
 * family (no gradient-ring avatar), the numbers are said out loud
 * in one mono line, not counted in four template tiles.
 */
export function About() {
  return (
    <section
      id="about"
      style={{
        position: 'relative',
        zIndex: 1,
        padding: '96px 24px 112px',
      }}
    >
      <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
        <div className="reveal" style={{ marginBottom: '16px' }}>
          <SectionLabel label="ABOUT" />
        </div>

        <h2
          className="font-display reveal"
          data-delay="60"
          style={{
            fontSize: 'clamp(1.9rem, 4vw, 2.6rem)',
            fontWeight: 800,
            letterSpacing: '-0.015em',
            color: 'var(--color-text-primary)',
            margin: '0 0 48px 0',
          }}
        >
          Easy to work with. Hard to out-enthusiasm.
        </h2>

        <div
          className="about-layout"
          style={{ display: 'grid', gap: '48px', alignItems: 'start', marginBottom: '48px' }}
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
              I started with PC building — crafting high-end workstations and
              realizing the best hardware deserves great software. That
              curiosity pulled me into computer science in 2021, and I&apos;ve
              been shipping ever since.
            </p>
            <p
              style={{
                fontSize: '1rem',
                color: 'var(--color-text-muted)',
                lineHeight: 1.75,
                margin: '0 0 20px 0',
              }}
            >
              What makes me different isn&apos;t the stack — it&apos;s the
              discipline around it. I built a six-agent AI system so one
              developer can run production infrastructure and multiple
              products, but I built it the way you build anything that
              touches prod: scoped permissions, reviewed output, and a hard
              rule that I never ship code I couldn&apos;t have written
              myself. AI gives me leverage; it doesn&apos;t get to give me
              comprehension debt.
            </p>
            <p
              style={{
                fontSize: '1rem',
                color: 'var(--color-text-muted)',
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              The mission underneath it all: find the niches where good software
              genuinely makes daily life lighter — and build the trend before
              it&apos;s a trend.
            </p>
          </div>

          <div
            className="reveal-scale about-photo"
            data-delay="200"
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div
              className="polaroid"
              style={{
                background: 'var(--color-bg-elevated)',
                border: '1px solid var(--color-border)',
                borderRadius: '18px',
                overflow: 'hidden',
                transform: 'rotate(2deg)',
                transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.4s',
                boxShadow: '0 10px 30px -16px rgba(34, 29, 20, 0.22)',
                padding: '10px 10px 14px',
              }}
            >
              <Image
                src="/profile_pic.jpg"
                alt="Najmu Syathir"
                width={210}
                height={210}
                style={{ objectFit: 'cover', width: 210, height: 210, borderRadius: '10px', display: 'block' }}
              />
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: 'var(--color-text-muted)',
                  textAlign: 'center',
                  margin: '10px 0 0 0',
                }}
              >
                the human node
              </p>
            </div>
          </div>
        </div>

        {/* the numbers, said out loud */}
        <p
          className="reveal"
          data-delay="150"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.82rem',
            color: 'var(--color-text-muted)',
            borderLeft: '2px solid var(--color-accent-mid)',
            paddingLeft: '16px',
            margin: '0 0 72px 0',
            lineHeight: 1.9,
          }}
        >
          <span style={{ color: 'var(--color-text-subtle)' }}>$ status —</span>{' '}
          two years shipping <span style={{ color: 'var(--color-text-subtle)' }}>·</span>{' '}
          six products live <span style={{ color: 'var(--color-text-subtle)' }}>·</span>{' '}
          six AI agents, one review gate <span style={{ color: 'var(--color-text-subtle)' }}>·</span>{' '}
          one server humming in my living room
        </p>

        {/* Activity polaroids */}
        <div
          className="activities-grid"
          style={{ display: 'grid', gap: '26px' }}
        >
          {ACTIVITIES.map((item, i) => (
            <div
              key={item.title}
              className="reveal-scale polaroid"
              data-delay={String(150 + i * 100)}
              style={{
                background: 'var(--color-bg-elevated)',
                border: '1px solid var(--color-border)',
                borderRadius: '18px',
                overflow: 'hidden',
                transform: `rotate(${item.rotate})`,
                transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.4s',
                boxShadow: '0 10px 30px -16px rgba(34, 29, 20, 0.22)',
              }}
            >
              <div style={{ position: 'relative', width: '100%', height: '170px' }}>
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '18px' }}>
                <h3
                  className="font-display"
                  style={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'var(--color-text-primary)',
                    margin: '0 0 8px 0',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--color-text-muted)',
                    lineHeight: 1.55,
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
        .about-layout {
          grid-template-columns: 1fr;
        }
        .activities-grid {
          grid-template-columns: 1fr;
        }
        .polaroid:hover {
          transform: rotate(0deg) translateY(-4px) !important;
          box-shadow: 0 18px 44px -18px rgba(34, 29, 20, 0.3);
        }
        @media (min-width: 768px) {
          .about-layout {
            grid-template-columns: 1fr auto;
          }
          .about-photo {
            order: 2;
          }
          .activities-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </section>
  );
}
