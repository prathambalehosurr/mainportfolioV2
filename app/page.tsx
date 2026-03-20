import Career from "@/components/Career";
import Graph from "@/components/Graph";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

import Skills from "@/components/Skills";
import FadeIn from "@/components/ui/fade-in";
import { ContactFooter } from "@/components/ContactOptions";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <div className="flex flex-col justify-center items-center py-2 pt-30 w-full max-w-230 px-4 md:px-8 mx-auto">
        <FadeIn>
          <Hero />
        </FadeIn>
        <FadeIn delay={0.1}>
          <Projects />
        </FadeIn>
        <FadeIn delay={0.2}>
          <Career />
        </FadeIn>
        <FadeIn delay={0.3}>
          <Graph />
        </FadeIn>

        <FadeIn delay={0.5}>
          <Skills />
        </FadeIn>
        <FadeIn delay={0.7}>
          <ContactFooter />
        </FadeIn>
      </div>
    </main>
  );
}
