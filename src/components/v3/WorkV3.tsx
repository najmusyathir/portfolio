import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Bezel } from "./Bezel";
import { LABELS, WORK } from "./copy";

/**
 * Z-axis cascade: the flagship card carries the deck, the infrastructure and
 * AI cards sit over its right edge at slight opposing rotations. Below 900px
 * the three stack vertically with no rotation or overlap.
 */
export function WorkV3() {
  const [apps, infra, ai] = WORK.pillars;
  return (
    <section className="v3-section" aria-labelledby="v3-work-title">
      <div className="v3-container">
        <Reveal>
          <h2 id="v3-work-title" className="v3-h2 v3-h2-gap">
            {WORK.title}
          </h2>
        </Reveal>

        <div className="v3-deck">
          <Reveal className="v3-deck-a">
            <Bezel as="article">
              <div className="v3-media v3-media-16x10">
                <Image
                  src={WORK.flagship.image}
                  alt={WORK.flagship.alt}
                  fill
                  sizes="(max-width: 900px) 92vw, 760px"
                />
              </div>
              <div className="v3-core-pad">
                <h3 className="v3-h3">{apps.title}</h3>
                <p className="v3-small">{apps.blurb}</p>
                <div className="v3-stack v3-tight">
                  <p className="v3-flag-name">{WORK.flagship.name}</p>
                  <p className="v3-ink v3-semibold">{WORK.flagship.tagline}</p>
                  <p className="v3-small">{WORK.flagship.description}</p>
                </div>
                <div className="v3-tags">
                  {WORK.flagship.tags.map((t) => (
                    <span key={t} className="v3-chip">
                      {t}
                    </span>
                  ))}
                </div>
                <Link href="/projects" className="v3-textlink">
                  {LABELS.projects} <Icon name="arrow-right" size={16} />
                </Link>
              </div>
            </Bezel>
          </Reveal>

          <Reveal delay={120} className="v3-deck-b">
            <Bezel as="article" small coreClassName="v3-core-soft v3-core-pad">
              <h3 className="v3-h3">{infra.title}</h3>
              <p className="v3-small">{infra.blurb}</p>
              <ul className="v3-list">
                {WORK.ecosystem.map((p) => (
                  <li key={p.name}>
                    <span className="v3-list-name">
                      {p.name}
                      <small>{p.live ? "live" : "internal"}</small>
                    </span>
                    <span className="v3-small">{p.line}</span>
                  </li>
                ))}
              </ul>
            </Bezel>
          </Reveal>

          <Reveal delay={200} className="v3-deck-c">
            <Bezel as="article" small coreClassName="v3-core-tint v3-core-pad">
              <h3 className="v3-h3">{ai.title}</h3>
              <p className="v3-small">{ai.blurb}</p>
              <Link href={WORK.aiLink.href} className="v3-textlink">
                {WORK.aiLink.label} <Icon name="arrow-right" size={16} />
              </Link>
            </Bezel>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <div className="v3-stackrow">
            <span className="v3-mono v3-muted">Stack</span>
            {WORK.stack.map((s) => (
              <span key={s} className="v3-chip">
                {s}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
