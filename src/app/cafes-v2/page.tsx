import type { Metadata } from "next";
import { V2Shell } from "@/components/v2/V2Shell";
import { CafeTrailV2 } from "@/components/v2/CafeTrailV2";
import { Reveal } from "@/components/ui/Reveal";
import { CAFES_V2 } from "@/components/v2/copy";

/** Design exploration: a second café trail beside `/cafes`. Not indexed. */
export const metadata: Metadata = {
  title: "Café Trail v2",
  description: `${CAFES_V2.title}: the cafés I have worked from across Malaysia, pinned where they really are.`,
  robots: { index: false, follow: false },
};

export default function CafesV2Page() {
  return (
    <V2Shell>
      <section className="v2-cafe-head" aria-labelledby="v2-cafes-title">
        <div className="v2-container v2-stack v2-stack-lg">
          <Reveal>
            <div className="v2-stack">
              <h1 id="v2-cafes-title" className="v2-display">
                {CAFES_V2.title}
              </h1>
              <p className="v2-lead">{CAFES_V2.intro}</p>
            </div>
          </Reveal>
        </div>
      </section>
      <CafeTrailV2 />
    </V2Shell>
  );
}
