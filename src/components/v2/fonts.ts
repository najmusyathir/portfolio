/**
 * v2 typefaces, loaded once via next/font (self-hosted at build time, no
 * runtime request to Google). Bricolage Grotesque carries display AND body
 * through its optical-size axis; IBM Plex Mono carries meta text only.
 * Exposed as CSS variables so v2.css can reference them without the rest of
 * the site changing fonts.
 */
import { Bricolage_Grotesque, IBM_Plex_Mono } from "next/font/google";

export const v2Sans = Bricolage_Grotesque({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--v2-sans",
  display: "swap",
});

export const v2Mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--v2-mono",
  display: "swap",
});
