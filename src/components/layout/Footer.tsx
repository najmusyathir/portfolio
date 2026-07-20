import { PROFILE, SOCIALS } from "@/lib/content";
import { Icon } from "@/components/ui/Icon";

export function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--c-footer-line)",
        background: "var(--c-footer-bg)",
        color: "var(--c-footer-body)",
      }}
    >
      <div
        className="container"
        style={{
          paddingBlock: "2.5rem",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1.5rem",
        }}
      >
        <div>
          <p style={{ fontWeight: 700, color: "var(--c-footer-ink)", margin: 0, fontSize: "var(--text-lg)" }}>
            {PROFILE.name}
          </p>
          <p style={{ margin: "0.25rem 0 0", color: "var(--c-footer-muted)", fontSize: "var(--text-sm)" }}>
            {PROFILE.role} · {PROFILE.quote}
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              style={{
                display: "inline-flex",
                width: "40px",
                height: "40px",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "var(--radius-full)",
                border: "1px solid var(--c-footer-line)",
                color: "var(--c-footer-body)",
                background: "color-mix(in srgb, var(--c-footer-ink) 6%, transparent)",
                transition: "color 160ms ease, border-color 160ms ease",
              }}
            >
              <Icon name={s.icon} size={20} title={s.label} />
            </a>
          ))}
        </div>
      </div>

      <div
        className="container"
        style={{
          paddingBottom: "2rem",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <p style={{ margin: 0, color: "var(--c-footer-muted)", fontSize: "var(--text-xs)", fontFamily: "var(--font-mono)" }}>
          © {new Date().getFullYear()} {PROFILE.name} · Built with Next.js.
        </p>
      </div>
    </footer>
  );
}
