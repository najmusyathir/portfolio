import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Bezel } from "./Bezel";
import { Pill } from "./Pill";
import { CONTACT, HERO_V3, LABELS } from "./copy";

/** Editorial split: massive type on the left, the portrait in a bezel on the right. */
export function HeroV3() {
  return (
    <section className="v3-hero" aria-labelledby="v3-hero-title">
      <div className="v3-container v3-hero-grid">
        <div className="v3-hero-copy">
          <Reveal>
            <span className="v3-eyebrow">{HERO_V3.eyebrow}</span>
          </Reveal>
          <Reveal delay={80}>
            <h1 id="v3-hero-title" className="v3-display">
              {HERO_V3.headline}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="v3-hero-sub">{HERO_V3.sub}</p>
          </Reveal>
          <Reveal delay={240}>
            <div className="v3-row">
              <Pill href={CONTACT.whatsapp} external icon="whatsapp">
                {LABELS.message}
              </Pill>
              <Pill href="/projects" ghost>
                {LABELS.projects}
              </Pill>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="v3-hero-media">
          <Bezel className="v3-portrait">
            <div className="v3-media v3-media-4x5">
              <Image
                src={HERO_V3.portrait.src}
                alt={HERO_V3.portrait.alt}
                fill
                priority
                sizes="(max-width: 900px) 88vw, 360px"
              />
            </div>
          </Bezel>
        </Reveal>
      </div>
    </section>
  );
}
