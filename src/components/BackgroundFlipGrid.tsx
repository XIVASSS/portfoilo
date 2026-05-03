"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { Project } from "@/content/types";
import { projectFlipThumbSrc } from "@/content/projects";

type Tile =
  | { kind: "project"; project: Project }
  | { kind: "decor"; id: string; hint: string };

const DECOR_HINTS = [
  "Matter · BLE",
  "React · TS",
  "Gemini API",
  "Firmware",
  "Design sprint",
  "Prototype",
  "Sensor fusion",
  "Accessibility",
  "Hardware × UI",
  "Shipped MVP",
];

function hashHue(id: string) {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0;
  return h % 360;
}

function decorPaperStyle(id: string) {
  const hue = hashHue(id);
  return `linear-gradient(145deg, hsl(${hue} 28% 93%), hsl(${(hue + 40) % 360} 22% 88%))`;
}

function buildBackgroundTiles(
  cols: number,
  rows: number,
  projectList: Project[],
): Tile[] {
  const total = cols * rows;
  const tiles: Tile[] = new Array(total);
  /** Many repeating project thumbnails; each tile flips on its own hover only. */
  const projectSlotCount = Math.min(
    Math.max(projectList.length * 6, 36),
    Math.floor(total * 0.36),
  );
  const slots = new Set<number>();
  let idx = (cols * 5 + rows * 7) % total;
  const step = Math.max(11, Math.floor(total / Math.max(projectSlotCount, 1)));
  while (slots.size < projectSlotCount && slots.size < total) {
    slots.add(idx);
    idx = (idx + step) % total;
  }

  let pRotate = 0;
  for (let i = 0; i < total; i++) {
    if (slots.has(i)) {
      tiles[i] = {
        kind: "project",
        project: projectList[pRotate % projectList.length],
      };
      pRotate += 1;
    } else {
      tiles[i] = {
        kind: "decor",
        id: `bg-${i}`,
        hint: DECOR_HINTS[i % DECOR_HINTS.length],
      };
    }
  }
  return tiles;
}

function useViewportTileGrid(cellPx: number) {
  const [dims, setDims] = useState({ cols: 14, rows: 20 });

  useEffect(() => {
    function measure() {
      const cols = Math.max(
        10,
        Math.min(28, Math.ceil(window.innerWidth / cellPx)),
      );
      const rows = Math.max(
        14,
        Math.ceil(window.innerHeight / cellPx),
      );
      setDims({ cols, rows });
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [cellPx]);

  return dims;
}

type BgTileProps = {
  tile: Tile;
  reduceMotion: boolean;
};

function BackgroundTileCell({ tile, reduceMotion }: BgTileProps) {
  if (tile.kind === "project") {
    const { project } = tile;
    if (reduceMotion) {
      return (
        <Link
          href={`/projects/${project.slug}`}
          className="relative block h-full min-h-[44px] w-full overflow-hidden rounded-[3px] border border-black/[0.06] bg-[color:var(--paper-cell)] outline-none ring-black/[0.08] transition hover:ring-1 focus-visible:ring-2"
        >
          <Image
            src={projectFlipThumbSrc(project)}
            alt=""
            fill
            sizes="64px"
            className="object-cover opacity-90"
          />
        </Link>
      );
    }
    return (
      <Link
        href={`/projects/${project.slug}`}
        className="flip-root flip-root--hover block h-full min-h-[44px] w-full touch-manipulation outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-1"
      >
        <div className="flip-inner relative h-full w-full rounded-[3px] shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]">
          <div className="flip-face absolute inset-0 overflow-hidden rounded-[3px] border border-black/[0.07] bg-[color:var(--paper-cell)]">
            <Image
              src={projectFlipThumbSrc(project)}
              alt=""
              fill
              sizes="72px"
              className="object-cover opacity-[0.88]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            <span className="absolute bottom-1 left-1 right-1 truncate font-mono text-[9px] font-medium uppercase tracking-wide text-white drop-shadow">
              {project.title}
            </span>
          </div>
          <div className="flip-face flip-face--back absolute inset-0 flex flex-col justify-between rounded-[3px] border border-black/[0.08] bg-[color:var(--card)] p-1.5">
            <span className="font-mono text-[8px] font-semibold uppercase leading-tight tracking-tight text-[color:var(--foreground)]">
              {project.title}
            </span>
            <span className="text-[7px] leading-snug text-[color:var(--muted)]">
              {project.tagline}
            </span>
            <span className="font-mono text-[6px] uppercase text-[color:var(--accent)]">
              Open →
            </span>
          </div>
        </div>
      </Link>
    );
  }

  if (reduceMotion) {
    return (
      <div
        className="h-full min-h-[44px] w-full rounded-[3px] border border-black/[0.05]"
        style={{ background: decorPaperStyle(tile.id) }}
        aria-hidden
      />
    );
  }

  return (
    <div
      className="flip-root flip-root--hover h-full min-h-[44px] w-full touch-manipulation"
      aria-hidden
    >
      <div className="flip-inner relative h-full w-full rounded-[3px]">
        <div
          className="flip-face absolute inset-0 rounded-[3px] border border-black/[0.06]"
          style={{ background: decorPaperStyle(tile.id) }}
        />
        <div className="flip-face flip-face--back absolute inset-0 flex items-center justify-center rounded-[3px] border border-black/[0.08] bg-white/95 p-1">
          <span className="text-center font-mono text-[7px] font-medium uppercase leading-tight tracking-[0.06em] text-[color:var(--muted)]">
            {tile.hint}
          </span>
        </div>
      </div>
    </div>
  );
}

export function BackgroundFlipGrid({ projects }: { projects: Project[] }) {
  const cellPx = 52;
  const { cols, rows } = useViewportTileGrid(cellPx);
  const tiles = useMemo(
    () => buildBackgroundTiles(cols, rows, projects),
    [cols, rows, projects],
  );
  const [reduceMotion, setReduceMotion] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduceMotion(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  return (
    <div
      className="pointer-events-auto fixed inset-0 z-0 overflow-hidden bg-[transparent]"
      role="presentation"
    >
      <div
        className="grid h-full w-full gap-px bg-[color:var(--grid-line-strong)]"
        style={{
          gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
          gridAutoRows: `${cellPx}px`,
        }}
      >
        {tiles.map((tile, index) => (
          <div key={`bg-cell-${index}`} className="min-h-0 min-w-0">
            <BackgroundTileCell tile={tile} reduceMotion={reduceMotion} />
          </div>
        ))}
      </div>
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(246,244,239,0.12)_0%,rgba(246,244,239,0.42)_100%)]"
        aria-hidden
      />
    </div>
  );
}
