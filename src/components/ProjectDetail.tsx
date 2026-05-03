import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/types";

const linkLabels: Record<string, string> = {
  github: "GitHub",
  githubFirmware: "GitHub · firmware",
  instructables: "Instructables",
  demo: "Demo",
  web: "Website",
  linkedin: "LinkedIn feed",
};

export function ProjectDetail({ project }: { project: Project }) {
  const linkEntries = project.links
    ? (Object.entries(project.links) as [keyof typeof linkLabels, string][])
        .filter(([, href]) => Boolean(href))
    : [];

  const heroSrc = project.heroPostImage ?? project.coverImage;

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <Link
        href="/#scrapbook-board"
        className="text-sm font-medium text-[color:var(--muted)] transition-[transform,color] duration-300 hover:text-[color:var(--foreground)] hover:-translate-x-0.5"
      >
        ← Back to scrapbook
      </Link>

      <div className="mt-10 overflow-hidden rounded-[2rem] border border-black/[0.08] bg-[linear-gradient(145deg,#eceae5,#e3e1dc)] shadow-[12px_28px_60px_rgba(12,11,10,0.12)] transition-[transform,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-[18px_40px_72px_rgba(12,11,10,0.16)]">
        <div className="relative min-h-[320px] w-full md:min-h-[440px]">
          <Image
            src={heroSrc}
            alt=""
            fill
            priority
            sizes="(max-width: 768px) 100vw, 720px"
            className="object-contain object-center p-6 md:p-10"
          />
        </div>
      </div>

      <header className="mt-12">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--muted)]">
          {[project.year, project.role].filter(Boolean).join(" · ")}
        </p>
        <h1
          className="mt-4 text-4xl text-[color:var(--foreground)] md:text-5xl"
          style={{ fontFamily: "var(--font-caveat), cursive" }}
        >
          {project.title}
        </h1>
        <p className="mt-4 text-lg text-[color:var(--muted)]">{project.tagline}</p>
        {linkEntries.length > 0 && (
          <ul className="mt-8 flex flex-wrap gap-3">
            {linkEntries.map(([key, href]) => (
              <li key={key}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full border border-black/[0.1] bg-white px-4 py-2 text-sm font-semibold text-[color:var(--foreground)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-black/25 hover:shadow-md"
                >
                  {linkLabels[key] ?? key}
                </a>
              </li>
            ))}
          </ul>
        )}
      </header>

      <section className="mt-12 border-t border-black/[0.08] pt-10">
        <h2
          className="text-2xl text-[color:var(--foreground)]"
          style={{ fontFamily: "var(--font-caveat), cursive" }}
        >
          Overview
        </h2>
        <p className="mt-4 leading-relaxed text-[color:var(--muted)]">
          {project.sections.overview}
        </p>
      </section>

      {project.sections.problem ? (
        <section className="mt-10">
          <h2
            className="text-2xl text-[color:var(--foreground)]"
            style={{ fontFamily: "var(--font-caveat), cursive" }}
          >
            Problem
          </h2>
          <p className="mt-4 leading-relaxed text-[color:var(--muted)]">
            {project.sections.problem}
          </p>
        </section>
      ) : null}

      {project.sections.approach ? (
        <section className="mt-10">
          <h2
            className="text-2xl text-[color:var(--foreground)]"
            style={{ fontFamily: "var(--font-caveat), cursive" }}
          >
            Approach
          </h2>
          <p className="mt-4 leading-relaxed text-[color:var(--muted)]">
            {project.sections.approach}
          </p>
        </section>
      ) : null}

      {project.sections.outcome ? (
        <section className="mt-10">
          <h2
            className="text-2xl text-[color:var(--foreground)]"
            style={{ fontFamily: "var(--font-caveat), cursive" }}
          >
            Outcome
          </h2>
          <p className="mt-4 leading-relaxed text-[color:var(--muted)]">
            {project.sections.outcome}
          </p>
        </section>
      ) : null}

      <section className="mt-12 rounded-3xl border border-black/[0.08] bg-[color:var(--card)]/90 p-8 shadow-inner transition-[transform] duration-300 hover:-translate-y-px">
        <h2
          className="text-xl text-[color:var(--foreground)]"
          style={{ fontFamily: "var(--font-caveat), cursive" }}
        >
          Tools &amp; stack
        </h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <li
              key={item}
              className="rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[color:var(--muted)] transition-[transform] duration-300 hover:-translate-y-px"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      {project.gallery?.length ? (
        <section className="mt-12 space-y-6">
          <h2
            className="text-2xl text-[color:var(--foreground)]"
            style={{ fontFamily: "var(--font-caveat), cursive" }}
          >
            Gallery
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {project.gallery.map((src) => (
              <div
                key={src}
                className="relative min-h-[220px] overflow-hidden rounded-2xl border border-black/[0.08] bg-[#ebe9e4] shadow-sm transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-contain object-center p-4"
                />
              </div>
            ))}
          </div>
        </section>
      ) : null}
    </article>
  );
}
