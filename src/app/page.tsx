import { AuroraBackground } from '@/components/layout/AuroraBackground';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Stats } from '@/components/sections/Stats';
import { Projects } from '@/components/sections/Projects';
import { AIOrchestration } from '@/components/sections/AIOrchestration';
import { Stack } from '@/components/sections/Stack';
import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';
import { ScrollRevealInit } from '@/components/ScrollRevealInit';

export default function Home() {
  return (
    <>
      <AuroraBackground />
      <Navbar />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <Stats />
        <Projects />
        <AIOrchestration />
        <Stack />
        <About />
        <Contact />
      </main>
      <Footer />
      <ScrollRevealInit />
    </>
  );
}
