import "./v3.css";
import "./v3-layout.css";
import Link from "next/link";
import { v3Sans, v3Mono } from "./fonts";
import { V3Nav } from "./V3Nav";
import { FOOTER, NAV_LINKS } from "./copy";

/**
 * Page frame for /landing-v3: scoped `.v3` tokens + fonts, ambient orbs,
 * floating nav, main, footer. Nothing outside `.v3` changes.
 */
export function V3Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className={`v3 ${v3Sans.variable} ${v3Mono.variable}`}>
      <div className="v3-orbs" aria-hidden="true">
        <div className="v3-orb v3-orb-1" />
        <div className="v3-orb v3-orb-2" />
      </div>
      <a href="#v3-main" className="v3-skip">
        Skip to content
      </a>
      <V3Nav />
      <main id="v3-main" tabIndex={-1}>
        {children}
      </main>
      <footer className="v3-footer">
        <div className="v3-container v3-footer-row">
          <div>
            <p className="v3-ink">
              <strong>{FOOTER.name}</strong>
            </p>
            <p className="v3-muted v3-small">{FOOTER.line}</p>
          </div>
          <nav className="v3-footer-links" aria-label="Footer">
            <Link href="/">Current site</Link>
            <Link href="/landing-v2">Landing v2</Link>
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
          </nav>
          <p className="v3-mono v3-muted">© {new Date().getFullYear()} {FOOTER.name}</p>
        </div>
      </footer>
    </div>
  );
}
