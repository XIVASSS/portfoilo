/**
 * Drop PNG/WebP/JPEG files into `public/herosectionpics/` and list filenames here.
 * Order is draw order. If a file is missing, the scatter falls back to the
 * matching project cover in `FALLBACK_SRCS`.
 */
export const LIKED_PICS_FILENAMES = [
  "1.jpeg",
  "2.jpeg",
  "3.jpeg",
  "4.jpeg",
  "5.jpeg",
] as const;

export const LIKED_PICS_FALLBACK_SRCS = [
  "/projects/share-it/cover.png",
  "/projects/superhealth/mobile-1.png",
  "/projects/thecafe/cover.png",
  "/projects/secure-sight/cover.png",
  "/projects/insight-cover.png",
] as const;

/** Percent positions inside the hero (absolute, desktop-first; still ok on mobile). */
export const LIKED_SCATTER_LAYOUT: {
  top: string;
  bottom?: string;
  left?: string;
  right?: string;
  widthRem: number;
  rotate: number;
  z: number;
  driftX: number;
  driftY: number;
  depth: number;
}[] = [
  {
    top: "12%",
    left: "2%",
    widthRem: 10.8,
    rotate: -8,
    z: 18,
    driftX: -12,
    driftY: -8,
    depth: 1.2,
  },
  {
    top: "10%",
    right: "2%",
    widthRem: 10.6,
    rotate: 7,
    z: 17,
    driftX: 14,
    driftY: -6,
    depth: 1.1,
  },
  {
    top: "52%",
    left: "1%",
    widthRem: 10.4,
    rotate: 6,
    z: 16,
    driftX: -10,
    driftY: 8,
    depth: 0.9,
  },
  {
    top: "50%",
    right: "1%",
    widthRem: 10.7,
    rotate: -7,
    z: 15,
    driftX: 12,
    driftY: 8,
    depth: 0.85,
  },
  {
    bottom: "10%",
    left: "6%",
    top: "auto",
    widthRem: 10.5,
    rotate: -4,
    z: 14,
    driftX: -6,
    driftY: 12,
    depth: 0.75,
  },
];
