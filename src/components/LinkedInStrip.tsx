import Image from "next/image";
import Link from "next/link";
import {
  LINKEDIN_ACTIVITY_URL,
  linkedInHighlights,
} from "@/content/linkedin";

export function LinkedInStrip() {
  return (
    <section className="mx-auto max-w-6xl border-t border-black/[0.06] px-6 py-16 md:px-8 md:py-20">
      <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-black/40">
            LinkedIn
          </p>
          <h2
            className="mt-3 text-[clamp(1.5rem,3vw,2.25rem)] leading-tight text-[color:var(--foreground)]"
            style={{ fontFamily: "var(--font-caveat), cursive" }}
          >
            Posts &amp; updates
          </h2>
          <p className="mt-3 max-w-lg font-mono text-[11px] leading-relaxed text-black/52">
            Scrapbook tiles deep-link into case studies; their chips mirror this
            URL for anything still living exclusively on LinkedIn. Paste curated
            highlights into{" "}
            <code className="rounded bg-black/[0.05] px-1 py-0.5 text-[10px]">
              src/content/linkedin.ts
            </code>{" "}
            whenever you want tiles mirrored below.
          </p>
          <Link
            href={LINKEDIN_ACTIVITY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex font-mono text-[12px] font-semibold text-[color:var(--accent)] underline decoration-[color:var(--accent)]/35 underline-offset-4 transition-[transform,opacity] duration-300 hover:translate-x-1 hover:opacity-90"
          >
            View recent activity →
          </Link>
        </div>
      </div>

      {linkedInHighlights.length > 0 ? (
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {linkedInHighlights.map((item) => (
            <li key={item.url}>
              <Link
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-2xl border border-black/[0.08] bg-white/70 shadow-sm transition hover:border-black/15 hover:shadow-md"
              >
                {item.imageSrc ? (
                  <div className="relative aspect-video w-full bg-black/[0.04]">
                    <Image
                      src={item.imageSrc}
                      alt=""
                      fill
                      className="object-cover transition duration-300 group-hover:scale-[1.02]"
                      sizes="(max-width:640px) 100vw, 320px"
                    />
                  </div>
                ) : null}
                <div className="p-4">
                  <p className="font-mono text-[11px] leading-snug text-black/75 group-hover:text-black">
                    {item.title}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}
