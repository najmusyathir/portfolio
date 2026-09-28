import type { Metadata, Viewport } from "next";
import { V3Shell } from "@/components/v3/V3Shell";
import { LandingV3 } from "@/components/v3/LandingV3";
import { PROFILE } from "@/lib/content";

/** Design exploration: a third landing beside `/` and `/landing-v2`. Not indexed. */
export const metadata: Metadata = {
  title: "Landing v3",
  description: PROFILE.tagline,
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0b0d" },
    { media: "(prefers-color-scheme: light)", color: "#eef0f3" },
  ],
};

export default function LandingV3Page() {
  return (
    <V3Shell>
      <LandingV3 />
    </V3Shell>
  );
}
