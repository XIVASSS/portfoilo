import Image from "next/image";

const COVER_ACT1 = "/albums/hart-act-1.jpg";
const COVER_DEAL = "/albums/hart-deal.jpg";

function TapeStrip({ className }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute h-7 w-[5.5rem] bg-[linear-gradient(105deg,rgba(255,255,255,0.05)_0%,rgba(250,246,236,0.92)_22%,rgba(245,238,224,0.98)_50%,rgba(250,246,236,0.88)_78%,rgba(255,255,255,0.06)_100%)] shadow-[0_3px_0_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.65)] ring-1 ring-black/15 ${className ?? ""}`}
      aria-hidden
    />
  );
}

export function SongwriterSection() {
  return (
    <section
      id="music"
      className="relative scroll-mt-28 overflow-hidden border-y border-black/25"
      aria-labelledby="music-heading"
    >
      {/* DIY wall: color blocks + depth (separate from rest of site) */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(118deg, #e31e24 0%, #e31e24 14%, transparent 14%),
            linear-gradient(205deg, #f2d024 0%, #f2d024 32%, transparent 32%),
            linear-gradient(312deg, #74a544 0%, #74a544 22%, transparent 22%),
            linear-gradient(165deg, #4a5d72 0%, #1f1a18 55%, #151210 100%)
          `,
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.14] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />

      <div className="relative z-[1] mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-20">
        <div className="grain-soft relative rotate-[-0.35deg] rounded-sm border border-black/20 bg-[#ede6dc] px-5 py-10 shadow-[0_28px_80px_rgba(0,0,0,0.35),0_2px_0_rgba(255,255,255,0.45)_inset] ring-1 ring-black/10 md:px-10 md:py-14">
          <TapeStrip className="-top-2 left-8 rotate-[-7deg] md:left-14" />
          <TapeStrip className="-top-2 right-10 rotate-[5deg] md:right-16" />

          <p className="font-mono text-[10px] uppercase tracking-[0.42em] text-[#6b5344]">
            side b — audio / paper cuts
          </p>
          <h2
            id="music-heading"
            className="mt-4 max-w-2xl text-[clamp(2rem,5vw,3.25rem)] leading-[0.98] tracking-tight text-[#1a1412]"
            style={{ fontFamily: "var(--font-caveat), cursive" }}
          >
            Songwriter &amp; composer — same hand as the commits, different
            medium.
          </h2>
          <p className="mt-5 max-w-2xl font-mono text-[11px] leading-relaxed text-black/58 md:text-[12px]">
            These covers are the loud scrapbook lane: tape, torn edges, and
            scarlet type. Cassettes and collage logic carry straight into how I
            sequence hooks and harmonic turns.
          </p>

          <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-8 md:pt-2">
            <figure className="group relative mx-auto w-full max-w-[280px] md:mx-0 md:max-w-none">
              <TapeStrip className="left-1/2 top-0 z-[2] -translate-x-1/2 -translate-y-1/2 rotate-[-3deg]" />
              <div className="torn-frame grain-soft relative aspect-square rotate-[-2.5deg] overflow-hidden bg-[#5c6354] shadow-[14px_36px_0_rgba(20,16,14,0.35)] ring-2 ring-black/25 transition-[transform,box-shadow] duration-500 ease-out group-hover:rotate-[-1deg] group-hover:shadow-[18px_44px_0_rgba(20,16,14,0.38)]">
                <Image
                  src={COVER_ACT1}
                  alt="HART Act 1 Single album artwork by xivass Co."
                  fill
                  sizes="(max-width:768px) 85vw, 320px"
                  className="object-cover object-center"
                />
              </div>
              <figcaption className="mt-5 space-y-1 text-left">
                <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-[#8a2f2f]">
                  HART · act 1 single
                </p>
                <p
                  className="text-lg text-[#1a1412]"
                  style={{ fontFamily: "var(--font-xivass-script), cursive" }}
                >
                  by xivass Co.
                </p>
              </figcaption>
            </figure>

            <figure className="group relative mx-auto w-full max-w-[280px] md:mx-0 md:max-w-none md:pt-8">
              <TapeStrip className="left-1/2 top-0 z-[2] -translate-x-1/2 -translate-y-1/2 rotate-[4deg] md:top-8 md:translate-y-0" />
              <div className="torn-frame grain-soft relative aspect-square rotate-[2deg] overflow-hidden bg-[#1a1412] shadow-[14px_36px_0_rgba(180,40,40,0.22)] ring-2 ring-black/30 transition-[transform,box-shadow] duration-500 ease-out group-hover:rotate-[0.5deg] group-hover:shadow-[18px_44px_0_rgba(180,40,40,0.28)]">
                <Image
                  src={COVER_DEAL}
                  alt="HART DEAL mixtape artwork — collage by xivass"
                  fill
                  sizes="(max-width:768px) 85vw, 320px"
                  className="object-cover object-center"
                />
              </div>
              <figcaption className="mt-5 space-y-1 text-left">
                <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-black/55">
                  HART DEAL · mixtape
                </p>
                <p className="text-sm leading-snug text-black/70">
                  <span className="font-serif italic">mixtape</span>{" "}
                  <span className="font-mono text-[10px] uppercase tracking-widest text-black/45">
                    BY
                  </span>{" "}
                  <span
                    className="text-lg text-[color:var(--brand-red)]"
                    style={{ fontFamily: "var(--font-xivass-script), cursive" }}
                  >
                    xivass
                  </span>
                </p>
              </figcaption>
            </figure>
          </div>

          <p className="mx-auto mt-12 max-w-xl border-t border-dashed border-black/15 pt-8 text-center font-mono text-[10px] uppercase leading-relaxed tracking-[0.28em] text-black/45">
            stems · sketches · scores — ask if you want a reel or sheet peek; not
            everything ships as a URL yet.
          </p>
        </div>
      </div>
    </section>
  );
}
