import Image from "next/image";
import { AlbumCoverInteractive } from "@/components/AlbumCoverInteractive";
import { ALBUM_RELEASES, SONG_VISUALS } from "@/content/songGraphics";

export function SongwriterSection() {
  return (
    <section
      id="music"
      className="relative scroll-mt-28 overflow-hidden bg-[#1c1917] text-[#f5f0ea]"
      aria-labelledby="music-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_70%_at_50%_-10%,rgba(198,40,40,0.12),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E")`,
          mixBlendMode: "overlay",
        }}
        aria-hidden
      />

      <div className="relative z-[1] w-full max-w-none px-4 py-14 sm:px-6 md:px-10 md:py-20 lg:px-16 lg:py-24 xl:px-24">
        {/* Wide top band: copy + thumbnail albums */}
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16 xl:gap-24">
          <header className="w-full max-w-2xl text-center lg:max-w-3xl lg:text-left">
            <p className="font-mono text-[10px] uppercase tracking-[0.48em] text-[#a89f96]">
              recordings · writer room
            </p>
            <h2
              id="music-heading"
              className="mt-4 text-[clamp(2rem,4.5vw,3.5rem)] font-light leading-[1.02] tracking-[-0.02em]"
              style={{
                fontFamily: "var(--font-instrument-serif), ui-serif, Georgia, serif",
              }}
            >
              Songwriter &amp; composer
            </h2>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.22em] text-[#c62828]">
              alias{" "}
              <span
                className="text-[1.05rem] normal-case tracking-normal text-[#f5f0ea]"
                style={{ fontFamily: "var(--font-xivass-script), cursive" }}
              >
                xivass
              </span>
            </p>
            <p className="mt-6 text-[15px] leading-relaxed text-[#c9c0b6] md:text-[16px]">
              Two released covers at thumbnail scale — session lane below is the
              wider wall: collage passes, ink treatments, comps that never had to
              ship as a URL.
            </p>
          </header>

          <AlbumCoverInteractive albums={ALBUM_RELEASES} />
        </div>

        {/* Full-bleed session strip (wider than text block) */}
        <div className="relative left-1/2 right-1/2 mt-14 w-screen max-w-none -translate-x-1/2 border-y border-white/[0.07] bg-[#161311]/80 py-10 md:mt-20 md:py-14">
          <div className="mx-auto flex w-full max-w-none flex-col gap-4 px-4 sm:px-6 md:px-10 lg:flex-row lg:items-end lg:justify-between lg:px-16 xl:px-24">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.42em] text-[#a89f96]">
                session clips
              </p>
              <p
                className="mt-2 text-2xl font-light text-[#f5f0ea] md:text-[1.65rem]"
                style={{
                  fontFamily: "var(--font-instrument-serif), ui-serif, Georgia, serif",
                }}
              >
                Pieces from the same desk
              </p>
            </div>
            <p className="max-w-md font-mono text-[10px] leading-relaxed text-[#8a827a] lg:text-right">
              Horizontal strip uses the full viewport width — scroll or drag to
              browse.
            </p>
          </div>

          <div className="music-strip-scroll mt-6 flex snap-x snap-mandatory scroll-smooth gap-4 overflow-x-auto px-4 pb-3 pt-2 sm:gap-5 sm:px-6 md:mt-8 md:gap-5 md:px-10 lg:px-16 xl:px-24">
            {SONG_VISUALS.map((v) => (
              <figure
                key={v.src}
                className="group/strip relative w-[min(72vw,220px)] shrink-0 snap-center snap-always sm:w-[min(50vw,240px)] md:w-[min(28vw,260px)] lg:w-[min(22vw,280px)]"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#0c0a09] shadow-[0_16px_40px_rgba(0,0,0,0.45)] ring-1 ring-white/[0.07] transition-[transform,box-shadow] duration-300 ease-out group-hover/strip:-translate-y-1 group-hover/strip:shadow-[0_22px_50px_rgba(0,0,0,0.5)] group-hover/strip:ring-amber-200/15">
                  <Image
                    src={v.src}
                    alt={v.label}
                    fill
                    sizes="(max-width:768px) 72vw, 280px"
                    unoptimized
                    className="object-cover object-center transition duration-500 group-hover/strip:scale-[1.04]"
                  />
                </div>
                <figcaption className="mt-2.5 space-y-0.5 px-0.5">
                  <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-[#dcd3c9]">
                    {v.label}
                  </p>
                  {v.hint ? (
                    <p className="font-mono text-[8px] uppercase tracking-[0.28em] text-[#6f6862]">
                      {v.hint}
                    </p>
                  ) : null}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <footer className="mx-auto mt-12 max-w-4xl border-t border-dashed border-white/[0.1] pt-10 text-center font-mono text-[10px] uppercase leading-relaxed tracking-[0.26em] text-[#7a726c] md:mt-14">
          stems · sketches · scores — ask if you want a reel or sheet peek; not
          everything ships as a URL yet.
        </footer>
      </div>
    </section>
  );
}
