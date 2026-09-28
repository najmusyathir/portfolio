import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Bezel } from "./Bezel";
import { Pill } from "./Pill";
import { ARC } from "./copy";

/** Award-then-jury diptych: two bezeled photos with captions inside the core. */
export function ArcV3() {
  return (
    <section className="v3-section" aria-labelledby="v3-arc-title">
      <div className="v3-container v3-grid">
        <Reveal className="v3-col-5">
          <div className="v3-stack v3-stack-lg">
            <div className="v3-stack">
              <h2 id="v3-arc-title" className="v3-h2">
                {ARC.title}
              </h2>
              <p className="v3-lead">{ARC.body}</p>
            </div>
            <Pill href={ARC.link.href} ghost>
              {ARC.link.label}
            </Pill>
          </div>
        </Reveal>

        <div className="v3-col-7 v3-diptych">
          {ARC.photos.map((p, i) => (
            <Reveal key={p.src} delay={i * 100}>
              <Bezel as="figure" small>
                <div className="v3-media v3-media-1x1">
                  <Image src={p.src} alt={p.alt} fill sizes="(max-width: 640px) 92vw, 380px" />
                </div>
                <figcaption className="v3-caption">{p.caption}</figcaption>
              </Bezel>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
