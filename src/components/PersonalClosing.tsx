import Image from "next/image";
import Link from "next/link";
import { linkedInHighlights } from "@/content/linkedin";
import { SITE_SOCIAL_LINKS } from "@/content/social";

export function PersonalClosing() {
  const clips = linkedInHighlights.slice(0, 2);

  return (
    <section
      id="about"
      className="relative z-10 scroll-mt-28 border-y border-black/[0.06] bg-[color:var(--paper-elevated)]/88 px-6 py-12 backdrop-blur-[2px] md:px-8 md:py-14"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 md:flex-row md:items-start md:justify-between md:gap-10">
        <div id="vibe" className="shrink-0 scroll-mt-28">
          <div className="torn-frame grain-soft relative h-[132px] w-[168px] rotate-[1deg] overflow-hidden shadow-[12px_28px_52px_rgba(42,30,26,0.15)] ring-1 ring-black/[0.08] transition-[transform,box-shadow] duration-500 hover:rotate-0 hover:shadow-[16px_34px_58px_rgba(42,30,26,0.18)] md:h-[148px] md:w-[188px]">
            <Image
              src="/photos/protyasish-portrait.jpeg"
              alt="Protyasish"
              fill
              sizes="200px"
              className="object-cover object-[center_18%]"
            />
          </div>
          <p className="mt-3 max-w-[188px] text-center font-mono text-[9px] uppercase tracking-[0.28em] text-black/42 md:text-left">
            HEADSHOT@main ·{" "}
            <span
              className="text-[color:var(--brand-red)]"
              style={{ fontFamily: "var(--font-xivass-script), cursive" }}
            >
              xivass
            </span>
          </p>
        </div>

        <div className="max-w-xl flex-1 text-center md:text-left">
          <p className="font-mono text-[10px] uppercase tracking-[0.36em] text-black/42">
            // README — systems & surface
          </p>
          <h2
            className="mt-3 text-[clamp(1.45rem,3.5vw,2.1rem)] leading-tight text-[color:var(--foreground)]"
            style={{ fontFamily: "var(--font-caveat), cursive" }}
          >
            Kolkata → edge telemetry on the bench, strict TypeScript in CI. I
            live in the glue: BLE vitals pipelines, Gemini-backed access layers,
            and ops consoles that still feel designed.
          </h2>
          <p className="mt-4 font-mono text-[11px] leading-relaxed text-black/52">
            SIH&apos;24 national finalist · Hacktoberfest &amp; GSSoC alum ·
            happiest when packet traces and component props live in the same
            mental model.
          </p>

          <nav
            aria-label="Profiles"
            className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 font-mono text-[11px] text-black/48 md:justify-start"
          >
            {SITE_SOCIAL_LINKS.map((s) => (
              <Link
                key={`${s.label}-${s.href}`}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel={
                  s.href.startsWith("mailto") ? undefined : "noopener noreferrer"
                }
                className="transition-[transform,color] duration-300 hover:text-[color:var(--brand-red)] hover:-translate-y-0.5"
              >
                {"{"}
                {s.label}
                {"}"}
              </Link>
            ))}
          </nav>

          {clips.length > 0 ? (
            <ul className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
              {clips.map((item) => (
                <li key={item.url}>
                  <Link
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex max-w-[200px] overflow-hidden rounded-lg border border-black/[0.08] bg-white/80 text-left shadow-sm transition hover:border-black/14 hover:shadow-md"
                  >
                    {item.imageSrc ? (
                      <div className="relative h-14 w-[4.25rem] shrink-0 bg-black/[0.04]">
                        <Image
                          src={item.imageSrc}
                          alt=""
                          fill
                          className="object-cover transition duration-300 group-hover:scale-[1.03]"
                          sizes="80px"
                        />
                      </div>
                    ) : null}
                    <p className="p-2 font-mono text-[9px] leading-snug text-black/68 group-hover:text-black">
                      {item.title}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </section>
  );
}
