export type MacFolderTone =
  | "ocean"
  | "amber"
  | "forest"
  | "coral"
  | "plum";

const PALETTE: Record<
  MacFolderTone,
  { tab: [string, string]; body: [string, string, string]; rim: string }
> = {
  ocean: {
    tab: ["#9fd4ff", "#5fa8ee"],
    body: ["#7ebfff", "#4690e8", "#2f6cbc"],
    rim: "#2260a8",
  },
  amber: {
    tab: ["#ffe8a8", "#f0c255"],
    body: ["#ffd873", "#eeb045", "#c98328"],
    rim: "#a86518",
  },
  forest: {
    tab: ["#b8f5d4", "#52c892"],
    body: ["#7bdeaa", "#38b578", "#1f7f54"],
    rim: "#156642",
  },
  coral: {
    tab: ["#ffc9dd", "#ff7fa5"],
    body: ["#ff9bbf", "#ff6f94", "#e04574"],
    rim: "#b03056",
  },
  plum: {
    tab: ["#e7d8ff", "#b894ff"],
    body: ["#d1b8ff", "#9d72f2", "#6e42c9"],
    rim: "#4f2fa3",
  },
};

/** Finder-style folder silhouette — reads closer to macOS than flat rounded squares. */
export function MacFolderIcon({
  tone,
  className,
}: {
  tone: MacFolderTone;
  className?: string;
}) {
  const p = PALETTE[tone];
  const uid = tone;

  return (
    <svg viewBox="0 0 120 102" className={className} aria-hidden>
      <defs>
        <linearGradient id={`${uid}-tab`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={p.tab[0]} />
          <stop offset="100%" stopColor={p.tab[1]} />
        </linearGradient>
        <linearGradient id={`${uid}-body`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={p.body[0]} />
          <stop offset="55%" stopColor={p.body[1]} />
          <stop offset="100%" stopColor={p.body[2]} />
        </linearGradient>
      </defs>
      <ellipse cx="60" cy="97" rx="44" ry="4.5" fill="rgba(0,0,0,0.12)" />
      <rect
        x="10"
        y="38"
        width="100"
        height="56"
        rx="14"
        ry="14"
        fill={`url(#${uid}-body)`}
        stroke={p.rim}
        strokeWidth="1.15"
      />
      <rect
        x="22"
        y="18"
        width="54"
        height="28"
        rx="11"
        ry="11"
        fill={`url(#${uid}-tab)`}
        stroke={p.rim}
        strokeWidth="1"
      />
      <rect
        x="18"
        y="46"
        width="84"
        height="14"
        rx="7"
        ry="7"
        fill="white"
        opacity="0.13"
      />
    </svg>
  );
}
