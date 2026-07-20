"use client";

/**
 * Theme context — same shape/pattern as personal-dashboard's ThemeContext
 * (theme + isInitialized state, localStorage["theme"], adds/removes the
 * "dark" class on document.documentElement, exposes {theme, toggleTheme}
 * via useTheme()). Difference from pd: with no saved preference, this
 * follows the visitor's OS/browser `prefers-color-scheme` instead of a
 * hardcoded default — the standard, expected behavior for a theme toggle.
 * An explicit saved choice always wins over system preference. A pre-paint
 * inline script in the root layout already resolves + applies the initial
 * class before hydration, so this provider's first effect only needs to
 * sync React state to whatever the script already applied (no flash).
 */
import type React from "react";
import { createContext, useState, useContext, useEffect } from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>("light");
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // This code will only run on the client side. Deferred to the next frame
    // (async, not a synchronous effect-body setState) — same pattern as
    // Reveal's legacy fallback — so this doesn't cascade a synchronous
    // render; the pre-paint script already applied the right class, so a
    // one-frame delay in syncing React state has no visible effect.
    const raf = requestAnimationFrame(() => {
      const savedTheme = localStorage.getItem("theme") as Theme | null;
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initialTheme: Theme = savedTheme === "light" || savedTheme === "dark"
        ? savedTheme
        : prefersDark ? "dark" : "light"; // No saved choice → follow system preference

      setTheme(initialTheme);
      setIsInitialized(true);
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("theme", theme);
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [theme, isInitialized]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
