import { BackgroundFlipGrid } from "@/components/BackgroundFlipGrid";
import { FinderStudio } from "@/components/FinderStudio";
import { HomeHero } from "@/components/HomeHero";
import { PersonalClosing } from "@/components/PersonalClosing";
import { ScrapbookProjects } from "@/components/ScrapbookProjects";
import { SongwriterSection } from "@/components/SongwriterSection";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { WalkingCharacters } from "@/components/WalkingCharacters";
import { getHomeFlipGridProjects } from "@/content/projects";

export default function Home() {
  return (
    <>
      <div className="relative isolate min-h-[100dvh]">
        <BackgroundFlipGrid projects={getHomeFlipGridProjects()} />
        <SiteNav floating />
        <HomeHero />
      </div>

      <main className="relative z-10 flex w-full flex-1 flex-col bg-[color:var(--paper-elevated)]/93 backdrop-blur-[2px]">
        <FinderStudio />

        <SongwriterSection />

        <section id="work" className="scroll-mt-24 px-4 py-14 md:px-6 md:py-18">
          <div className="mx-auto mb-8 max-w-5xl px-2 md:px-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.38em] text-black/42">
              ./projects — visual index
            </p>
            <h2
              className="mt-3 max-w-2xl text-[clamp(1.75rem,4.2vw,2.75rem)] leading-[1.06] text-[color:var(--foreground)]"
              style={{ fontFamily: "var(--font-caveat), cursive" }}
            >
              One viewport, every build registered — tilted cards you can expand
              into full write-ups on hover.
            </h2>
            <p className="mt-4 max-w-xl font-mono text-[11px] leading-relaxed text-black/54">
              Dense index layout: dot grid, tape chrome, and deep links that
              always resolve to the underlying case study route.
            </p>
          </div>
          <ScrapbookProjects />
        </section>

        <PersonalClosing />
      </main>

      <WalkingCharacters />
      <SiteFooter />
    </>
  );
}
