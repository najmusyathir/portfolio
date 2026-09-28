import type { Metadata } from "next";
import { V2Shell } from "@/components/v2/V2Shell";
import { LandingV2 } from "@/components/v2/LandingV2";
import { PROFILE } from "@/lib/content";

/** Design exploration: a second landing beside `/`. Not indexed. */
export const metadata: Metadata = {
  title: "Landing v2",
  description: PROFILE.tagline,
  robots: { index: false, follow: false },
};

export default function LandingV2Page() {
  return (
    <V2Shell>
      <LandingV2 />
    </V2Shell>
  );
}
