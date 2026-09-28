import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Bezel } from "./Bezel";
import { Pill } from "./Pill";
import { CONTACT, LABELS } from "./copy";

/** One wide bezel island: heading + CTAs on the left, social chips on the right. */
export function ContactV3() {
  return (
    <section className="v3-section" aria-labelledby="v3-contact-title">
      <div className="v3-container">
        <Reveal>
          <Bezel>
            <div className="v3-contact-inner">
              <div className="v3-stack v3-stack-lg">
                <div className="v3-stack">
                  <h2 id="v3-contact-title" className="v3-h2">
                    {CONTACT.title}
                  </h2>
                  <p className="v3-lead">{CONTACT.body}</p>
                </div>
                <div className="v3-row">
                  <Pill href={CONTACT.whatsapp} external icon="whatsapp">
                    {LABELS.message}
                  </Pill>
                  <Pill href={`mailto:${CONTACT.email}`} ghost icon="mail">
                    {CONTACT.email}
                  </Pill>
                </div>
              </div>
              <ul className="v3-socials v3-list-reset">
                {CONTACT.socials.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className="v3-chip">
                      {s.label} <Icon name="arrow-up-right" size={13} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Bezel>
        </Reveal>
      </div>
    </section>
  );
}
