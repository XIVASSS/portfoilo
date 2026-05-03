"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { AlbumRelease } from "@/content/songGraphics";

type Rect = { left: number; top: number; width: number; height: number; bottom: number };

function readThumbRect(i: number, refs: { current: (HTMLButtonElement | null)[] }): Rect | null {
  const el = refs.current[i];
  if (!el) return null;
  const r = el.getBoundingClientRect();
  return { left: r.left, top: r.top, width: r.width, height: r.height, bottom: r.bottom };
}

export function AlbumCoverInteractive({ albums }: { albums: AlbumRelease[] }) {
  const reduceMotion = useReducedMotion();
  const baseId = useId();
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const hoverCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [mounted, setMounted] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [thumbRect, setThumbRect] = useState<Rect | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const cancelHoverClose = useCallback(() => {
    if (hoverCloseTimer.current) {
      clearTimeout(hoverCloseTimer.current);
      hoverCloseTimer.current = null;
    }
  }, []);

  const scheduleHoverClose = useCallback(() => {
    cancelHoverClose();
    hoverCloseTimer.current = setTimeout(() => {
      setHoveredIndex(null);
      setThumbRect(null);
      hoverCloseTimer.current = null;
    }, 200);
  }, [cancelHoverClose]);

  const syncHoverRect = useCallback(
    (i: number) => {
      const r = readThumbRect(i, thumbRefs);
      if (r) setThumbRect(r);
    },
    []
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (hoveredIndex === null) return;
    const onScrollOrResize = () => syncHoverRect(hoveredIndex);
    window.addEventListener("scroll", onScrollOrResize, true);
    window.addEventListener("resize", onScrollOrResize);
    return () => {
      window.removeEventListener("scroll", onScrollOrResize, true);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [hoveredIndex, syncHoverRect]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [lightboxIndex]);

  const hoverAlbum = hoveredIndex !== null ? albums[hoveredIndex] : null;
  const lightboxAlbum = lightboxIndex !== null ? albums[lightboxIndex] : null;

  const previewPlacement =
    thumbRect && typeof window !== "undefined"
      ? thumbRect.top > Math.min(420, window.innerHeight * 0.45)
        ? ("above" as const)
        : ("below" as const)
      : "above";

  const transition = reduceMotion ? { duration: 0.12 } : { type: "spring" as const, stiffness: 420, damping: 34 };

  const portal =
    mounted &&
    typeof document !== "undefined" &&
    createPortal(
      <>
        <AnimatePresence>
          {hoverAlbum && thumbRect ? (
            <motion.div
              key="hover-preview"
              role="tooltip"
              initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: reduceMotion ? 1 : 0.96 }}
              transition={transition}
              className="pointer-events-auto fixed z-[200] w-[min(92vw,520px)] max-w-none rounded-2xl border border-white/15 bg-[#0c0a09] p-1.5 shadow-[0_28px_80px_rgba(0,0,0,0.65)] ring-1 ring-black/40"
              style={{
                left: thumbRect.left + thumbRect.width / 2,
                top: previewPlacement === "above" ? thumbRect.top - 10 : thumbRect.bottom + 10,
                transform: previewPlacement === "above" ? "translate(-50%, -100%)" : "translate(-50%, 0)",
              }}
              onMouseEnter={cancelHoverClose}
              onMouseLeave={scheduleHoverClose}
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- portal preview: unknown JPEG dimensions */}
              <img
                src={hoverAlbum.coverSrc}
                alt={`${hoverAlbum.title} — ${hoverAlbum.subtitle}, full cover`}
                className="max-h-[min(70vh,560px)] w-full rounded-xl object-contain"
              />
            </motion.div>
          ) : null}
        </AnimatePresence>

        <AnimatePresence>
          {lightboxAlbum ? (
            <motion.div
              key="lightbox"
              role="dialog"
              aria-modal="true"
              aria-labelledby={`${baseId}-lightbox-title`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduceMotion ? 0.12 : 0.22 }}
              className="fixed inset-0 z-[210] flex items-center justify-center bg-black/88 p-4 backdrop-blur-sm"
              onClick={() => setLightboxIndex(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: reduceMotion ? 1 : 0.94 }}
                transition={transition}
                className="relative max-h-[min(92vh,900px)] max-w-[min(94vw,900px)]"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  className="absolute -right-1 -top-10 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-white/90 transition hover:bg-white/20 sm:-right-2 sm:-top-12"
                  onClick={() => setLightboxIndex(null)}
                >
                  Close
                </button>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={lightboxAlbum.coverSrc}
                  alt={`${lightboxAlbum.title} — ${lightboxAlbum.subtitle}`}
                  className="max-h-[min(92vh,900px)] max-w-[min(94vw,900px)] w-full rounded-lg object-contain shadow-2xl"
                />
                <p id={`${baseId}-lightbox-title`} className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.24em] text-white/70">
                  {lightboxAlbum.title} · {lightboxAlbum.subtitle}
                </p>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </>,
      document.body
    );

  return (
    <>
      <div className="flex shrink-0 flex-row items-end justify-center gap-5 sm:gap-6 md:gap-8">
        {albums.map((album, i) => (
          <article key={album.coverSrc} className="group/album flex flex-col">
            <button
              type="button"
              ref={(el) => {
                thumbRefs.current[i] = el;
              }}
              className="relative block cursor-zoom-in rounded-2xl border-0 bg-transparent p-0 text-left outline-none ring-amber-200/0 transition-[transform,box-shadow,ring] duration-300 focus-visible:ring-2 focus-visible:ring-amber-200/50"
              aria-label={`Open full cover: ${album.title}`}
              onMouseEnter={() => {
                cancelHoverClose();
                setHoveredIndex(i);
                syncHoverRect(i);
              }}
              onMouseLeave={scheduleHoverClose}
              onClick={() => {
                cancelHoverClose();
                setHoveredIndex(null);
                setThumbRect(null);
                setLightboxIndex(i);
              }}
            >
              <div className="relative h-[148px] w-[148px] overflow-hidden rounded-2xl bg-[#0c0a09] shadow-[0_18px_40px_rgba(0,0,0,0.5)] ring-1 ring-white/[0.1] transition-[transform,box-shadow] duration-300 sm:h-[168px] sm:w-[168px] md:h-[188px] md:w-[188px] group-hover/album:-translate-y-0.5 group-hover/album:shadow-[0_24px_50px_rgba(0,0,0,0.55)]">
                <Image
                  src={album.coverSrc}
                  alt=""
                  fill
                  sizes="188px"
                  unoptimized
                  className="object-cover object-center transition duration-500 group-hover/album:scale-[1.04]"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(10,8,7,0.82)_100%)]"
                  aria-hidden
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 p-3 sm:p-3.5">
                  <p className="font-mono text-[8px] uppercase leading-tight tracking-[0.28em] text-white/65">
                    {album.subtitle}
                  </p>
                  <p className="mt-0.5 text-lg font-light leading-none tracking-tight text-white sm:text-xl">
                    {album.title}
                  </p>
                  <p
                    className="mt-1 text-sm leading-none text-white/90"
                    style={{
                      fontFamily: "var(--font-xivass-script), cursive",
                    }}
                  >
                    {album.credit}
                  </p>
                </div>
              </div>
            </button>
          </article>
        ))}
      </div>
      {portal}
    </>
  );
}
