"use client";

import { useTheme } from "@/context/ThemeContext";
import { Icon } from "@/components/ui/Icon";

/**
 * Navbar theme toggle — pd's ThemeToggleButton pattern, re-skinned to the
 * portfolio's token system (no Tailwind dark: utilities in this codebase;
 * every component reads --c-* CSS vars directly, so the icon swap is a
 * plain conditional on theme state instead of `dark:hidden` classes).
 * Shows the icon for the theme a click will switch TO (sun while dark,
 * moon while light) — same affordance as pd.
 */
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="theme-toggle"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "40px",
        height: "40px",
        flexShrink: 0,
        borderRadius: "var(--radius-full)",
        border: "1px solid var(--c-line)",
        background: "transparent",
        color: "var(--c-ink)",
        cursor: "pointer",
      }}
    >
      <Icon name={isDark ? "sun" : "moon"} size={18} />
      <style>{`
        .theme-toggle {
          transition: color 160ms ease, border-color 160ms ease, background 160ms ease;
        }
        .theme-toggle:hover {
          border-color: var(--c-accent);
          color: var(--c-accent);
        }
        .theme-toggle:focus-visible {
          outline: 2px solid var(--c-accent);
          outline-offset: 2px;
        }
      `}</style>
    </button>
  );
}
