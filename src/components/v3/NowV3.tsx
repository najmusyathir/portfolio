import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Bezel } from "./Bezel";
import { NOW_V2 } from "./copy";

/**
 * The thesis: heading + lead, then one wide bezel holding the workstation
 * photo with a glass plate carrying the closing line, and one bezel holding
 * the four capabilities separated by hairlines.
 */
export function NowV3() {
  return (
    <section className="v3-section" aria-labelledby="v3-now-title">
      <div className="v3-container v3-stack v3-stack-lg">
        <Reveal>
          <div className="v3-stack">
            <h2 id="v3-now-title" className="v3-h2 v3-measure">
              {NOW_V2.title}
            </h2>
            <p className="v3-lead">{NOW_V2.lead}</p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <Bezel as="figure">
            <div className="v3-media v3-media-wide">
              <Image src={NOW_V2.image.src} alt={NOW_V2.image.alt} fill sizes="(max-width: 900px) 92vw, 1180px" />
              <figcaption className="v3-panel-note">
                <p className="v3-italic">{NOW_V2.closing}</p>
              </figcaption>
            </div>
          </Bezel>
        </Reveal>

        <Reveal delay={120}>
          <Bezel small>
            <div className="v3-caps">
              {NOW_V2.capabilities.map((c) => (
                <div key={c.title} className="v3-cap">
                  <h3>{c.title}</h3>
                  <p>{c.detail}</p>
                </div>
              ))}
            </div>
          </Bezel>
        </Reveal>
      </div>
    </section>
  );
}
