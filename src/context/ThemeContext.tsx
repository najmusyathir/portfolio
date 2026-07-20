"use client";

/**
 * Theme context — same shape/pattern as personal-dashboard's ThemeContext
 * (theme + isInitialized state, localStorage["theme"], adds/removes the
 * "dark" class on document.documentElement, exposes {theme, toggleTheme}
 * via useTheme()). One deliberate difference from pd: the default here is
 * DARK (Charcoal & Oud), not light — Abang's call, since light isn't
 * finalized yet. A pre-paint inline script in the root layout already sets
 * the initial class before hydration, so this provider's first effect only
 * needs to sync React state to whatever the script already applied (no
 * flash, no flicker).
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
  const [theme, setTheme] = useState<Theme>("dark");
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // This code will only run on the client side. Deferred to the next frame
    // (async, not a synchronous effect-body setState) — same pattern as
    // Reveal's legacy fallback — so this doesn't cascade a synchronous
    // render; the pre-paint script already applied the right class, so a
    // one-frame delay in syncing React state has no visible effect.
    const raf = requestAnimationFrame(() => {
      const savedTheme = localStorage.getItem("theme") as Theme | null;
      const initialTheme = savedTheme === "light" ? "light" : "dark"; // Default to DARK theme

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
