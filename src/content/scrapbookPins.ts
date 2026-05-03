/**
 * Mood board pin layout — one slot per project in `SCRAPBOOK_ORDER`
 * (`getScrapbookProjects()` order). Values are % of the board box.
 *
 * Reference: dense collage, mixed aspect cards, slight rotations, overlap.
 */
export type MoodPin = {
  id: string;
  topPct: number;
  leftPct: number;
  widthPct: number;
  rotateDeg: number;
  z: number;
  aspect: "landscape" | "portrait" | "wide";
};

/** Tuned for a portrait-ish board (`aspect-[4/5]`): dense overlap, little empty middle. */
export const MOOD_BOARD_PINS = [
  {
    id: "p0",
    topPct: 6,
    leftPct: 2,
    widthPct: 26,
    rotateDeg: -4.4,
    z: 10,
    aspect: "portrait",
  },
  {
    id: "p1",
    topPct: 4,
    leftPct: 24,
    widthPct: 48,
    rotateDeg: 3.4,
    z: 12,
    aspect: "wide",
  },
  {
    id: "p2",
    topPct: 2,
    leftPct: 52,
    widthPct: 44,
    rotateDeg: -2.7,
    z: 14,
    aspect: "wide",
  },
  {
    id: "p3",
    topPct: 34,
    leftPct: 4,
    widthPct: 42,
    rotateDeg: 4.0,
    z: 11,
    aspect: "wide",
  },
  {
    id: "p4",
    topPct: 24,
    leftPct: 40,
    widthPct: 28,
    rotateDeg: -3.6,
    z: 15,
    aspect: "portrait",
  },
  {
    id: "p5",
    topPct: 32,
    leftPct: 54,
    widthPct: 42,
    rotateDeg: 2.9,
    z: 13,
    aspect: "wide",
  },
  {
    id: "p6",
    topPct: 56,
    leftPct: 10,
    widthPct: 54,
    rotateDeg: -3.2,
    z: 16,
    aspect: "wide",
  },
] as const satisfies readonly MoodPin[];

/** @deprecated use MOOD_BOARD_PINS — kept for any stray imports during refactor */
export const SCRAPBOOK_PIN_LAYOUTS = MOOD_BOARD_PINS;
