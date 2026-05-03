"use client";

import type { CSSProperties } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Project } from "@/content/types";
import { MOOD_BOARD_PINS } from "@/content/scrapbookPins";
import { ScrapbookPolaroidFrame } from "@/components/scrapbook/ScrapbookPolaroidFrame";

function clamp(n: number, lo: number, hi: number) {
  return Math.min(hi, Math.max(lo, n));
}

function smoothstep(x: number) {
  const t = clamp(x, 0, 1);
  return t * t * (3 - 2 * t);
}

function easeOutCubic(x: number) {
  const t = clamp(x, 0, 1);
  return 1 - (1 - t) ** 3;
}

/**
 * Maps board position in the viewport to [0, 1]. Longer window → slower, more readable motion.
 */
function scrollProgress(el: HTMLElement) {
  const vh = window.innerHeight || 1;
  const top = el.getBoundingClientRect().top;
  const start = vh * 1.14;
  const end = vh * 0.06;
  const denom = Math.max(start - end, 1);
  const linear = (start - top) / denom;
  return easeOutCubic(smoothstep(clamp(linear, 0, 1)));
}

/**
 * Partitions global progress so every card can reach t = 1 when scroll progress reaches 1.
 */
function landT(p: number, idx: number, count: number) {
  if (count <= 1) return smoothstep(p);
  const band = 0.86 / count;
  const denom = Math.max(count - 1, 1);
  const start = (idx / denom) * (1 - band);
  return smoothstep(clamp((p - start) / band, 0, 1));
}

export function ScrapbookDesktopBoard({ projects }: { projects: Project[] }) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number>(0);
  const [p, setP] = useState(0);

  const list = projects.slice(0, MOOD_BOARD_PINS.length);
  const n = list.length;

  const tick = useCallback(() => {
    const el = rootRef.current;
    if (!el) return;
    setP(scrollProgress(el));
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setP(1);
      return;
    }

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(tick);
    };

    tick();
    requestAnimationFrame(() => requestAnimationFrame(tick));
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [tick]);

  return (
    <div
      ref={rootRef}
      className="dot-board relative mx-auto hidden aspect-[4/5] w-full max-w-[min(96vw,960px)] overflow-visible rounded-[1.35rem] border-[6px] border-[#c4bfb4] bg-[#eeebe4] shadow-[0_24px_64px_rgba(40,32,26,0.14)] ring-1 ring-black/[0.07] md:block"
    >
      <div
        className="pointer-events-none absolute bottom-6 left-2 top-12 w-5 border-r border-black/[0.07] font-mono text-[7px] leading-[1.65] text-black/22"
        aria-hidden
      >
        <span className="absolute -left-0.5 top-0 block h-1 w-1 rounded-full bg-black/25" />
      </div>
      <div
        className="pointer-events-none absolute inset-0 rounded-[1.1rem] ring-1 ring-inset ring-white/40"
        aria-hidden
      />

      {list.map((project, idx) => {
        const pin = MOOD_BOARD_PINS[idx];
        if (!pin) return null;

        const fromLeft = idx % 2 === 0;
        const t = landT(p, idx, n);

        const flyXvw = fromLeft ? -36 : 36;
        const flyYvh = -10 + (idx % 4) * 1.2;
        const flyRotExtra = fromLeft ? -16 : 16;

        const x = (1 - t) * flyXvw;
        const y = (1 - t) * flyYvh;
        const rot = (1 - t) * flyRotExtra + pin.rotateDeg * t;
        const s = 0.9 + 0.1 * t;
        const o = 0.18 + 0.82 * t;

        const style: CSSProperties = {
          opacity: o,
          transform: `translate3d(${x}vw, ${y}vh, 0) rotate(${rot}deg) scale(${s})`,
          pointerEvents: t > 0.86 ? "auto" : "none",
        };

        return (
          <article
            key={`${project.slug}-${pin.id}`}
            style={{
              top: `${pin.topPct}%`,
              left: `${pin.leftPct}%`,
              width: `${pin.widthPct}%`,
              zIndex: pin.z,
            }}
            className="scrap-pin-desktop group absolute will-change-transform transition-[z-index] duration-150 hover:!z-[70]"
          >
            <div className="scrap-kinetic origin-center" style={style}>
              <div className="origin-center transition-[transform,filter] duration-300 ease-out will-change-transform group-hover:scale-[1.04] group-hover:drop-shadow-[0_22px_36px_rgba(0,0,0,0.24)]">
                <ScrapbookPolaroidFrame
                  project={project}
                  variant="desktop"
                  desktopAspect={pin.aspect}
                  compact
                />
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
