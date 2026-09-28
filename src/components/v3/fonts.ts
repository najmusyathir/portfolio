/**
 * v3 typefaces (self-hosted through next/font at build time). Plus Jakarta
 * Sans is the wide geometric grotesk for display and body; Geist Mono carries
 * meta text. Exposed as CSS variables consumed only inside `.v3`.
 */
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";

export const v3Sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--v3-sans",
  display: "swap",
});

export const v3Mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--v3-mono",
  display: "swap",
});
