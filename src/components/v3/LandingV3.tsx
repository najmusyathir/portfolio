import { HeroV3 } from "./HeroV3";
import { WorkV3 } from "./WorkV3";
import { NowV3 } from "./NowV3";
import { ArcV3 } from "./ArcV3";
import { ContactV3 } from "./ContactV3";

/** /landing-v3 composed once: split hero, cascade deck, wide panel, diptych, island. */
export function LandingV3() {
  return (
    <>
      <HeroV3 />
      <WorkV3 />
      <NowV3 />
      <ArcV3 />
      <ContactV3 />
    </>
  );
}
