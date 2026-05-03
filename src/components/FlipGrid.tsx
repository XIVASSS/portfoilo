"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { projectFlipThumbSrc } from "@/content/projects";
import type { Project } from "@/content/types";

type Tile =
  | { kind: "project"; project: Project }
  | { kind: "decor"; id: string };

function decorGradient(id: string) {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0;
  const hue = h % 360;
  const hue2 = (hue + 48 + (h % 70)) % 360;
  return `linear-gradient(140deg, hsl(${hue} 38% 84%), hsl(${hue2} 45% 74%))`;
}

function buildTiles(projectList: Project[]): Tile[] {
  const triple = [...projectList, ...projectList, ...projectList];
  const decorCount = Math.max(triple.length * 2, 20);
  const decor: Tile[] = Array.from({ length: decorCount }, (_, i) => ({
    kind: "decor",
    id: `decor-${i}`,
  }));
  const proj: Tile[] = triple.map((project) => ({
    kind: "project",
    project,
  }));
  return [...proj, ...decor].sort((a, b) => {
    const key = (t: Tile) =>
      t.kind === "project" ? t.project.slug : t.id;
    return key(a).localeCompare(key(b));
  });
}

type TileCellProps = {
  tile: Tile;
  reduceMotion: boolean;
};

function TileCell({ tile, reduceMotion }: TileCellProps) {
  if (tile.kind === "project") {
    const { project } = tile;
    if (reduceMotion) {
      return (
        <Link
          href={`/projects/${project.slug}`}
          className="relative block aspect-square overflow-hidden rounded-2xl border border-black/[0.08] bg-[color:var(--card)] shadow-sm transition hover:border-black/20"
        >
          <Image
            src={projectFlipThumbSrc(project)}
            alt=""
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 180px"
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent px-4 pb-4 pt-12">
            <p
              className="text-lg text-white"
              style={{ fontFamily: "var(--font-instrument-serif), serif" }}
            >
              {project.title}
            </p>
            <p className="mt-1 text-xs text-white/85">{project.tagline}</p>
          </div>
        </Link>
      );
    }

    return (
      <Link
        href={`/projects/${project.slug}`}
        className="flip-root flip-root--hover block aspect-square touch-manipulation outline-none focus-visible:ring-2 focus-visible:ring-black/35 focus-visible:ring-offset-2"
      >
        <div className="flip-inner relative h-full w-full rounded-2xl shadow-sm">
          <div className="flip-face absolute inset-0 overflow-hidden rounded-2xl border border-black/[0.08] bg-[color:var(--card)]">
            <Image
              src={projectFlipThumbSrc(project)}
              alt=""
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 180px"
              className="object-cover opacity-95 transition duration-500 hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
            <p className="absolute bottom-3 left-3 font-serif text-lg text-white drop-shadow">
              {project.title}
            </p>
          </div>
          <div className="flip-face flip-face--back absolute inset-0 flex flex-col rounded-2xl border border-black/[0.08] bg-[color:var(--card)] p-4">
            <p className="font-serif text-xl text-[color:var(--foreground)]">
              {project.title}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">
              {project.tagline}
            </p>
            <span className="mt-auto text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--accent)]">
              Deep dive →
            </span>
          </div>
        </div>
      </Link>
    );
  }

  if (reduceMotion) {
    return (
      <div
        className="aspect-square rounded-2xl border border-black/[0.06] shadow-inner"
        style={{ background: decorGradient(tile.id) }}
        aria-hidden
      />
    );
  }

  return (
    <div
      className="flip-root flip-root--hover aspect-square touch-manipulation"
      aria-hidden
    >
      <div className="flip-inner relative h-full w-full rounded-2xl shadow-sm">
        <div
          className="flip-face absolute inset-0 rounded-2xl border border-white/40"
          style={{ background: decorGradient(tile.id) }}
        />
        <div className="flip-face flip-face--back absolute inset-0 flex flex-col justify-between rounded-2xl border border-black/[0.08] bg-white/92 p-4 text-[color:var(--foreground)]">
          <p className="font-serif text-lg leading-snug">Studio residue</p>
          <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--muted)]">
            Experimental chroma block
          </p>
        </div>
      </div>
    </div>
  );
}

/** Featured mosaic grid (optional embed). Background hero uses {@link BackgroundFlipGrid}. */
export function FlipGrid({ projects }: { projects: Project[] }) {
  const tiles = useMemo(() => buildTiles(projects), [projects]);
  const [reduceMotion, setReduceMotion] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduceMotion(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5">
      {tiles.map((tile, index) => (
        <div
          key={
            tile.kind === "project"
              ? `${tile.project.slug}-${index}`
              : tile.id
          }
          className="min-w-0"
        >
          <TileCell tile={tile} reduceMotion={reduceMotion} />
        </div>
      ))}
    </div>
  );
}
