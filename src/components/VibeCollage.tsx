import Image from "next/image";

export function VibeCollage() {
  return (
    <section
      id="vibe"
      className="relative z-10 scroll-mt-28 border-y border-black/[0.07] bg-[linear-gradient(185deg,#f4ebe4,#e8dfd6_55%,transparent)] px-6 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-[10px] uppercase tracking-[0.38em] text-black/42">
          Vintage compass · coder glyph
        </p>
        <h2
          className="mt-4 max-w-2xl text-[clamp(1.85rem,4vw,2.95rem)] leading-[1.08] text-[color:var(--foreground)]"
          style={{ fontFamily: "var(--font-caveat), cursive" }}
        >
          This collage is the temper of{" "}
          <span
            className="text-[color:var(--brand-red)]"
            style={{ fontFamily: "var(--font-xivass-script), cursive" }}
          >
            xivass
          </span>
          — reds against tape noise, serif bruises, flora clipped like commits.
        </h2>
        <p className="mt-5 max-w-2xl font-mono text-[11px] leading-relaxed text-black/52 md:text-[12px]">
          Your exported banner carries cassette grit and scarlet script; it sets
          the chromatic north star for frames, folders, and polaroids across
          the site.
        </p>

        <div className="relative mx-auto mt-16 max-w-4xl">
          <div className="torn-frame grain-soft relative min-h-[min(62vh,560px)] rotate-[1.25deg] bg-[#dcd4cb] shadow-[18px_42px_90px_rgba(42,30,26,0.2)] ring-1 ring-black/[0.08] transition-[transform,box-shadow] duration-700 hover:rotate-0 hover:shadow-[24px_54px_110px_rgba(42,30,26,0.24)]">
            <div className="relative min-h-[min(62vh,560px)] w-full">
              <Image
                src="/vibe-collage.png"
                alt=""
                fill
                sizes="(max-width:768px) 100vw, 900px"
                className="object-contain object-center"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_42%,rgba(28,22,18,0.14)_100%)]"
                aria-hidden
              />
            </div>
            <div className="pointer-events-none absolute left-8 top-6 h-7 w-24 rounded-[2px] bg-white/55 opacity-95 shadow-md ring-1 ring-black/12" />
            <div className="pointer-events-none absolute bottom-10 right-10 rounded-full bg-[color:var(--brand-red)]/12 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.35em] text-[color:var(--brand-red)] ring-1 ring-[color:var(--brand-red)]/25 backdrop-blur-[1px]">
              signature layer
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
