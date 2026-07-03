import Image from 'next/image';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { STATS } from '@/lib/data';

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
        <div className="reveal" style={{ marginBottom: '20px' }}>
          <SectionLabel label="ABOUT" />
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
            Easy to work with. Hard to out-enthusiasm.
          </h2>
        </div>

        <div
          className="about-layout"
          style={{ display: 'grid', gap: '48px', alignItems: 'center', marginBottom: '56px' }}
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
              What makes me different isn&apos;t just the stack — it&apos;s how
              I work. I confess ideas out loud, prototype fast, and treat AI as
              a genuine collaborator. My six-agent team isn&apos;t a gimmick;
              it&apos;s how a solo developer runs production infrastructure,
              multiple products, and still has energy left to get excited about
              the next idea.
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
            <div className="avatar-ring">
              <Image
                src="/profile_pic.jpg"
                alt="Najmu Syathir"
                width={180}
                height={180}
                style={{ objectFit: 'cover', width: 180, height: 180 }}
              />
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div
          className="stats-strip reveal"
          data-delay="150"
          style={{
            display: 'grid',
            gap: '14px',
            marginBottom: '72px',
          }}
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="card"
              style={{
                padding: '18px 20px',
                textAlign: 'center',
              }}
            >
              <p
                className="font-display gradient-text"
                style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2.1rem)',
                  fontWeight: 800,
                  margin: '0 0 2px 0',
                  lineHeight: 1.1,
                }}
              >
                {stat.number}
              </p>
              <p
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 500,
                  color: 'var(--color-text-muted)',
                  margin: 0,
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

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
        .stats-strip {
          grid-template-columns: repeat(2, 1fr);
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
          .stats-strip {
            grid-template-columns: repeat(4, 1fr);
          }
          .activities-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </section>
  );
}
