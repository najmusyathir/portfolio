import Link from "next/link";
import { PROFILE, SOCIALS } from "@/lib/content";
import { Icon } from "@/components/ui/Icon";

export function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--c-line)",
        background: "var(--c-bg-soft)",
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
          <p style={{ fontWeight: 700, color: "var(--c-ink)", margin: 0, fontSize: "var(--text-lg)" }}>
            {PROFILE.name}
          </p>
          <p style={{ margin: "0.25rem 0 0", color: "var(--c-muted)", fontSize: "var(--text-sm)" }}>
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
                border: "1px solid var(--c-line)",
                color: "var(--c-body)",
                background: "var(--c-surface)",
                transition: "color 160ms ease, border-color 160ms ease",
              }}
            >
              <Icon name={s.icon} size={20} title={s.label} />
            </a>
          ))}
        </div>
      </div>

      <div className="container" style={{ paddingBottom: "2rem" }}>
        <p style={{ margin: 0, color: "var(--c-muted)", fontSize: "var(--text-xs)", fontFamily: "var(--font-mono)" }}>
          © {new Date().getFullYear()} {PROFILE.name} · Built with Next.js.{" "}
          <Link href="/landing-2" className="link-underline">
            View alternate theme
          </Link>
        </p>
      </div>
    </footer>
  );
}
