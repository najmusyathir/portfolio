import "./v2.css";
import Link from "next/link";
import { v2Sans, v2Mono } from "./fonts";
import { V2Nav } from "./V2Nav";
import { FOOTER, NAV_LINKS } from "./copy";

/**
 * Page frame for the v2 routes. Applies the scoped `.v2` design tokens and
 * the v2 font variables, then nav + main + footer. Nothing outside `.v2`
 * changes, so /landing-v2 and /cafes-v2 can sit beside the current site.
 */
export function V2Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className={`v2 ${v2Sans.variable} ${v2Mono.variable}`}>
      <a href="#v2-main" className="v2-skip">
        Skip to content
      </a>
      <V2Nav />
      <main id="v2-main" tabIndex={-1}>
        {children}
      </main>
      <footer className="v2-footer">
        <div className="v2-container v2-stack-lg v2-stack">
          <div className="v2-footer-top">
            <div>
              <p className="v2-ink">
                <strong>{FOOTER.name}</strong>
              </p>
              <p className="v2-muted v2-small">{FOOTER.line}</p>
            </div>
            <nav className="v2-footer-links" aria-label="Footer">
              <Link href="/">Current site</Link>
              {NAV_LINKS.map((l) => (
                <Link key={l.href} href={l.href}>
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
          <p className="v2-mono v2-muted">© {new Date().getFullYear()} {FOOTER.name}</p>
        </div>
      </footer>
    </div>
  );
}
