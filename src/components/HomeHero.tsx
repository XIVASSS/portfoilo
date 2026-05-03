"use client";

import { useEffect, useState } from "react";
import { HeroLikedScatter } from "@/components/HeroLikedScatter";
import { OrigamiIdentity } from "@/components/OrigamiIdentity";

const PORTRAIT = "/photos/protyasish-portrait.jpeg";

export function HomeHero() {
  const [reduceMotion, setReduceMotion] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduceMotion(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  return (
    <section className="pointer-events-none relative z-20 flex min-h-[100dvh] flex-col items-center justify-center overflow-visible px-5 pb-28 pt-24 md:px-12 md:pb-36 md:pt-28">
      <span className="pointer-events-none absolute left-[6%] top-[22%] hidden select-none font-mono text-[11px] text-black/25 md:block">
        <span className="inline-block rounded border border-dashed border-black/20 px-1.5 py-0.5">
          +
        </span>
      </span>
      <span className="pointer-events-none absolute right-[8%] top-[30%] hidden select-none font-mono text-[11px] text-black/25 md:block">
        <span className="inline-block rounded border border-dashed border-black/20 px-1.5 py-0.5">
          +
        </span>
      </span>
      <span className="pointer-events-none absolute bottom-[28%] left-[10%] hidden select-none font-mono text-[11px] text-black/25 md:block">
        <span className="inline-block rounded border border-dashed border-black/20 px-1.5 py-0.5">
          +
        </span>
      </span>
      <span className="pointer-events-none absolute bottom-[24%] right-[12%] hidden select-none font-mono text-[11px] text-black/25 md:block">
        <span className="inline-block rounded border border-dashed border-black/20 px-1.5 py-0.5">
          +
        </span>
      </span>

      <div className="pointer-events-auto absolute left-[7%] top-[20%] z-[23] hidden max-w-[200px] rotate-[-5deg] shadow-[2px_8px_24px_rgba(0,0,0,0.12)] transition-[transform,box-shadow] duration-500 ease-out hover:z-[30] hover:-translate-y-2 hover:rotate-[-2deg] hover:shadow-[6px_18px_44px_rgba(0,0,0,0.18)] md:block">
        <div className="rounded-sm bg-[#fff59a] px-4 py-3 text-[13px] leading-snug text-black/85 ring-1 ring-black/10">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/45">
            // ship.log
          </p>
          <p className="mt-2">
            Typed services, bare-metal bring-up, and UIs you can diff like any
            other module.
          </p>
        </div>
      </div>

      <div className="pointer-events-auto absolute right-[6%] top-[18%] z-[23] hidden rotate-[3deg] shadow-[2px_10px_28px_rgba(0,0,0,0.1)] transition-[transform,box-shadow] duration-500 hover:z-[30] hover:-translate-y-2 hover:rotate-1 hover:shadow-[8px_22px_48px_rgba(0,0,0,0.16)] lg:block">
        <div className="flex items-center gap-3 rounded-md border border-black/10 bg-white/90 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.25em] text-black/70 backdrop-blur-sm">
          <span className="h-8 w-px bg-black/15" aria-hidden />
          <div>
            <p className="text-[11px] font-semibold tracking-[0.28em] text-black">
              silicon × DOM
            </p>
            <p className="mt-1 text-[9px] text-black/50">
              registers by day · components by night
            </p>
          </div>
        </div>
      </div>

      <div className="pointer-events-auto absolute bottom-[14%] right-[4%] z-[23] hidden w-[min(100%,248px)] rotate-[-2deg] overflow-hidden rounded-lg border border-black/12 bg-[#1a1b1f] text-[#e8e6e3] shadow-[3px_14px_40px_rgba(0,0,0,0.22)] transition-[transform,box-shadow] duration-500 hover:z-[30] hover:-translate-y-2 hover:rotate-0 hover:shadow-[10px_26px_56px_rgba(0,0,0,0.35)] md:block">
        <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-2 font-mono text-[9px] text-white/35">
            protyasish@xivass:~
          </span>
        </div>
        <div className="space-y-2 p-3 font-mono text-[10px] leading-relaxed">
          <p>
            <span className="text-emerald-400/90">$</span> whoami
          </p>
          <p className="text-white/80">
            firmware-curious · TS/React · Gemini APIs · Matter / Thread
          </p>
          <p>
            <span className="text-emerald-400/90">$</span> ls ~/stack/
          </p>
          <p className="text-white/55">
            next/ zephyr-ish/ edge-telemetry/ design-tokens/
          </p>
        </div>
      </div>

      <HeroLikedScatter />

      <div className="pointer-events-auto relative z-[25] mx-auto w-full max-w-[min(100%,22rem)] px-3 text-center sm:max-w-md md:max-w-lg">
        <p className="font-mono text-[10px] uppercase tracking-[0.42em] text-black/48 md:text-[11px]">
          /// engineer · operator id
        </p>

        <OrigamiIdentity
          imageSrc={PORTRAIT}
          alt="Protyasish"
          reduceMotion={reduceMotion}
          priority
        />
        <p className="mx-auto mt-5 max-w-[15rem] font-mono text-[8px] leading-relaxed text-black/45 md:text-[9px]">
          Four paper flaps (triangles) morph to the card corners on a spring —
          then the portrait fades in.
        </p>

        <h1
          aria-label="Protyasish"
          className="relative mt-6 text-[clamp(3.25rem,12vw,7.25rem)] leading-[0.92] text-[color:var(--foreground)] transition-[filter] duration-500 hover:drop-shadow-[0_14px_36px_rgba(198,40,40,0.12)] md:mt-7"
          style={{ fontFamily: "var(--font-caveat), cursive" }}
        >
          <span className="inline-block whitespace-nowrap">Protyasish</span>
        </h1>

        <p className="mx-auto mt-5 max-w-[22rem] font-mono text-[10px] uppercase tracking-[0.34em] text-black/55 md:mt-6 md:max-w-md md:text-[11px]">
          spec → prototype → instrument → ship — full-stack with the oscilloscope
          never far away
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-mono text-[11px] text-black/55 md:mt-8 md:text-[12px]">
          <span className="tracking-[0.18em]">namespace</span>
          <span
            className="text-[clamp(2.25rem,8vw,3.75rem)] leading-none text-[color:var(--brand-red)] drop-shadow-sm transition-transform duration-300 hover:scale-105"
            style={{ fontFamily: "var(--font-xivass-script), cursive" }}
          >
            xivass
          </span>
          <span className="tracking-[0.22em] text-black/65">Co.</span>
        </div>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3 text-sm md:mt-10">
          <a
            href="#finder"
            className="rounded-full border border-black/18 bg-white/85 px-6 py-2.5 font-medium text-[color:var(--foreground)] shadow-md backdrop-blur-sm transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-[color:var(--brand-red)]/35 hover:shadow-xl"
          >
            open ~/workspace
          </a>
          <a
            href="#scrapbook-board"
            className="rounded-full border border-transparent px-6 py-2.5 font-medium text-black/65 underline decoration-[color:var(--brand-red)]/35 decoration-2 underline-offset-[6px] transition-[transform,color] duration-300 hover:-translate-y-0.5 hover:text-black"
          >
            ls ./case-studies
          </a>
          <a
            href="#contact"
            className="rounded-full px-5 py-2.5 font-medium text-black/55 transition-[transform,color] duration-300 hover:-translate-y-0.5 hover:text-black"
          >
            ping · contact
          </a>
        </div>
      </div>
    </section>
  );
}
