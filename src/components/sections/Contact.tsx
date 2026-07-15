import Image from "next/image";
import { PROFILE, SOCIALS } from "@/lib/content";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Contact() {
  return (
    <section className="section" id="contact" style={{ background: "var(--c-bg-soft)" }}>
      <div className="container">
        <div className="contact-grid">
          {/* Left — heading + socials */}
          <Reveal>
            <SectionHeading
              eyebrow="Contact"
              title="Let's build something."
              intro="Open to interesting work and good conversations. The fastest way to reach me is WhatsApp — or find me on any of these."
            />

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "1.75rem" }}>
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="surface card-hover"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    padding: "0.7rem 1.1rem",
                    borderRadius: "var(--radius-full)",
                    color: "var(--c-ink)",
                    fontSize: "var(--text-sm)",
                    fontWeight: 600,
                  }}
                >
                  <Icon name={s.icon} size={18} style={{ color: "var(--c-accent)" }} />
                  {s.label}
                </a>
              ))}
            </div>
          </Reveal>

          {/* Right — WhatsApp QR */}
          <Reveal delay={100}>
            <div
              className="surface"
              style={{
                padding: "1.75rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  borderRadius: "var(--radius)",
                  overflow: "hidden",
                  border: "1px solid var(--c-line)",
                  background: "#fff",
                  padding: "0.5rem",
                }}
              >
                <Image
                  src={PROFILE.qrImg}
                  alt="WhatsApp QR code to message Najmu"
                  width={190}
                  height={190}
                  style={{ display: "block", width: "190px", height: "auto" }}
                />
              </div>
              <a href={PROFILE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <Icon name="whatsapp" size={16} /> Message on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          align-items: center;
        }
        @media (min-width: 820px) {
          .contact-grid { grid-template-columns: 1.3fr 0.7fr; }
        }
      `}</style>
    </section>
  );
}
