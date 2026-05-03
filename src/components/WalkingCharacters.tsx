export function WalkingCharacters() {
  return (
    <div
      className="pointer-events-none fixed bottom-0 left-0 right-0 z-[35] h-[72px] overflow-hidden bg-[linear-gradient(to_top,rgba(232,231,226,0.96),transparent)]"
      aria-hidden
    >
      <div className="walk-stroll-a absolute bottom-2 flex items-end gap-3 opacity-[0.42]">
        <WalkerGlyph />
      </div>
      <div className="walk-stroll-b absolute bottom-3 flex items-end gap-2 opacity-[0.38]">
        <WalkerGlyph tall />
      </div>
      <div className="walk-stroll-c absolute bottom-2 flex items-end gap-3 opacity-[0.34]">
        <WalkerGlyph />
      </div>
    </div>
  );
}

function WalkerGlyph({ tall }: { tall?: boolean }) {
  const h = tall ? 44 : 36;
  const w = 28;
  return (
    <svg
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      className="text-black drop-shadow-sm"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="14" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M14 10v14M14 14l-8 10M14 14l8 10M14 24l-7 14M14 24l7 14"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
