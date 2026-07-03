import { AuroraBackground } from '@/components/layout/AuroraBackground';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgress } from '@/components/layout/ScrollProgress';
import { Hero } from '@/components/sections/Hero';
import { TheTeam } from '@/components/sections/TheTeam';
import { Projects } from '@/components/sections/Projects';
import { About } from '@/components/sections/About';
import { Stack } from '@/components/sections/Stack';
import { Contact } from '@/components/sections/Contact';
import { ScrollRevealInit } from '@/components/ScrollRevealInit';

export default function Home() {
  return (
    <>
      <AuroraBackground />
      <ScrollProgress />
      <Navbar />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <TheTeam />
        <Projects />
        <About />
        <Stack />
        <Contact />
      </main>
      <Footer />
      <ScrollRevealInit />
    </>
  );
}
