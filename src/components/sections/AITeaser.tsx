import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Deliberately restrained. The landing must NOT read as an "AI website" —
 * one confident line about the infrastructure, then a link out to /ai for
 * anyone who wants the engineering detail.
 */
export function AITeaser() {
  return (
    <section className="section-tight" id="ai">
      <div className="container">
        <Reveal>
          <div
            className="surface"
            style={{
              padding: "clamp(1.75rem, 4vw, 2.5rem)",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1.5rem",
            }}
          >
            <div style={{ maxWidth: "56ch" }}>
              <span className="eyebrow" style={{ marginBottom: "0.85rem" }}>
                On the engineering side
              </span>
              <p
                style={{
                  fontSize: "var(--text-xl)",
                  fontWeight: 600,
                  color: "var(--c-ink)",
                  margin: "0.85rem 0 0",
                  lineHeight: 1.35,
                }}
              >
                I run my own AI — self-hosted, with persistent context, built and
                structured for real human use.
              </p>
            </div>
            <Link
              href="/ai"
              className="btn btn-ghost"
              style={{ flexShrink: 0 }}
            >
              How it&apos;s built <Icon name="arrow-right" size={16} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
