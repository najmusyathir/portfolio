import Image from "next/image";
import Link from "next/link";
import { PROFILE } from "@/lib/content";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section
      style={{
        background: "var(--hero-wash)",
        borderBottom: "1px solid var(--c-line-soft)",
      }}
    >
      <div
        className="container hero-grid"
        style={{ paddingBlock: "clamp(3rem, 8vw, 5.5rem)" }}
      >
        {/* Left — copy */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <Reveal>
            <span className="eyebrow" style={{ marginBottom: "1.25rem" }}>
              <Icon name="coffee" size={14} /> Code, Coffee &amp; Chill
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1
              style={{
                fontSize: "var(--text-display)",
                lineHeight: 1.02,
                marginBottom: "1.1rem",
              }}
            >
              {PROFILE.name}
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p
              style={{
                fontSize: "var(--text-xl)",
                fontWeight: 600,
                color: "var(--c-accent)",
                margin: "0 0 0.9rem",
              }}
            >
              {PROFILE.role}
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p
              style={{
                fontSize: "var(--text-lg)",
                color: "var(--c-body)",
                maxWidth: "46ch",
                margin: "0 0 2rem",
              }}
            >
              {PROFILE.valueProp}
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              <a
                href={PROFILE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <Icon name="whatsapp" size={16} /> Message me
              </a>
              <Link href="/projects" className="btn btn-ghost">
                See my work <Icon name="arrow-right" size={16} />
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Right — portrait */}
        <Reveal delay={160} className="hero-portrait-wrap">
          <div className="hero-portrait">
            <Image
              src={PROFILE.profileImg}
              alt={`${PROFILE.name}, ${PROFILE.role}`}
              width={520}
              height={640}
              priority
              sizes="(max-width: 900px) 70vw, 420px"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </Reveal>
      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
        }
        .hero-portrait-wrap { display: flex; justify-content: center; }
        .hero-portrait {
          position: relative;
          width: min(320px, 80vw);
          aspect-ratio: 4 / 5;
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: 1px solid var(--c-line);
          box-shadow: 0 30px 60px -30px rgb(var(--c-shadow) / 0.5);
        }
        @media (min-width: 900px) {
          .hero-grid {
            grid-template-columns: 1.1fr 0.9fr;
            gap: 3.5rem;
            align-items: center;
          }
          .hero-portrait-wrap { justify-content: flex-end; }
          .hero-portrait { width: 380px; }
        }
      `}</style>
    </section>
  );
}
