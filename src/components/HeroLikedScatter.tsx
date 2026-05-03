"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  LIKED_PICS_FALLBACK_SRCS,
  LIKED_PICS_FILENAMES,
  LIKED_SCATTER_LAYOUT,
} from "@/content/likedPics";

const PROJECT_HREFS = [
  "/projects/share-it",
  "/projects/superhealth",
  "/projects/thecafe",
  "/projects/secure-sight",
  "/projects/insight",
] as const;

export function HeroLikedScatter() {
  const [useFallback, setUseFallback] = useState<Record<number, boolean>>({});
  const rootRef = useRef<HTMLDivElement | null>(null);

  const entries = useMemo(
    () =>
      LIKED_PICS_FILENAMES.map((name, i) => ({
        preferred: `/herosectionpics/${name}`,
        fallback: LIKED_PICS_FALLBACK_SRCS[i] ?? LIKED_PICS_FALLBACK_SRCS[0],
        href: PROJECT_HREFS[i] ?? PROJECT_HREFS[0],
        layout: LIKED_SCATTER_LAYOUT[i] ?? LIKED_SCATTER_LAYOUT[0],
        i,
      })),
    [],
  );

  const onImgError = useCallback((index: number) => {
    setUseFallback((prev) => ({ ...prev, [index]: true }));
  }, []);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) return;

    let raf = 0;
    const sync = () => {
      const hero = node.closest("section");
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const progress = Math.min(Math.max((vh - rect.top) / (vh + rect.height), 0), 1);
      const amount = ((progress - 0.5) * 2).toFixed(3);
      node.style.setProperty("--hero-scroll", amount);
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(sync);
    };

    sync();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="pointer-events-none absolute inset-0 z-[21] hidden overflow-visible md:block"
      style={{ ["--hero-scroll" as string]: "0" }}
    >
      {entries.map(({ preferred, fallback, href, layout, i }) => {
        const src = useFallback[i] ? fallback : preferred;
        return (
          <Link
            key={`${href}-${i}`}
            href={href}
            className="hero-crush-wrap hero-chaos-card group pointer-events-auto absolute outline-none"
            style={{
              top: layout.top,
              ...(layout.bottom !== undefined ? { bottom: layout.bottom } : {}),
              ...(layout.left !== undefined ? { left: layout.left } : {}),
              ...(layout.right !== undefined ? { right: layout.right } : {}),
              width: `${layout.widthRem}rem`,
              zIndex: layout.z,
              ["--flat-rot" as string]: `${layout.rotate}deg`,
              ["--crush-z" as string]: `${layout.rotate * 0.6}deg`,
              ["--drift-x" as string]: `${layout.driftX}px`,
              ["--drift-y" as string]: `${layout.driftY}px`,
              ["--depth" as string]: `${layout.depth}`,
              ["--chaos-delay" as string]: `${i * 0.5}s`,
            }}
          >
            <span className="sr-only">Open liked pic {i + 1}</span>
            <div className="hero-crush-inner border-[3px] border-white shadow-[2px_10px_20px_rgba(25,20,18,0.22)] ring-1 ring-black/12">
              <div className="relative aspect-[3/5] w-full bg-[#e8e2da]">
                <Image
                  key={src}
                  src={src}
                  alt=""
                  fill
                  sizes="80px"
                  className="hero-crush-photo object-cover"
                  onError={() => onImgError(i)}
                  unoptimized={src.startsWith("/herosectionpics/")}
                />
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
