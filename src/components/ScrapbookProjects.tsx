import { getScrapbookProjects } from "@/content/projects";
import { SITE_SOCIAL_LINKS } from "@/content/social";
import type { Project } from "@/content/types";
import { ScrapbookDesktopBoard } from "@/components/scrapbook/ScrapbookDesktopBoard";
import { ScrapbookPolaroidFrame } from "@/components/scrapbook/ScrapbookPolaroidFrame";

function ScrapLinks({ project }: { project: Project }) {
  const chips: { label: string; href: string }[] = [];
  if (project.links?.instructables)
    chips.push({ label: "Instructables", href: project.links.instructables });
  if (project.links?.linkedin)
    chips.push({ label: "LinkedIn", href: project.links.linkedin });
  if (project.links?.github)
    chips.push({ label: "GitHub", href: project.links.github });
  if (project.links?.githubFirmware)
    chips.push({
      label: "GitHub · firmware",
      href: project.links.githubFirmware,
    });
  if (project.links?.demo)
    chips.push({ label: "Demo", href: project.links.demo });
  if (project.links?.web)
    chips.push({ label: "Site", href: project.links.web });

  if (chips.length === 0) return null;

  return (
    <div className="mt-3 flex flex-wrap justify-center gap-1.5 md:justify-start">
      {chips.map((c) => (
        <a
          key={c.href}
          href={c.href}
          target="_blank"
          rel="noopener noreferrer"
          className="scrap-chip rounded-full border border-black/15 bg-white/95 px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.12em] text-black/60 shadow-sm transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-[color:var(--brand-red)]/35 hover:text-black hover:shadow-md"
        >
          {c.label}
        </a>
      ))}
    </div>
  );
}

function MobileStack({ projects }: { projects: Project[] }) {
  return (
    <div className="flex flex-col gap-14 px-2 md:hidden">
      {projects.map((project, i) => (
        <article
          key={project.slug}
          style={{
            transform: `rotate(${(i % 2 === 0 ? -2.5 : 2.5) + (i % 3) * 0.4}deg)`,
          }}
          className="scrap-pin-mobile mx-auto w-[min(100%,340px)] transition-[transform] duration-500 hover:rotate-0 hover:scale-[1.02]"
        >
          <div className="pointer-events-none mb-3 flex justify-center">
            <span className="h-5 w-14 rounded-[2px] bg-white/90 opacity-90 shadow-sm ring-1 ring-black/12" />
          </div>
          <ScrapbookPolaroidFrame project={project} variant="mobile" />
          <ScrapLinks project={project} />
        </article>
      ))}
    </div>
  );
}

export function ScrapbookProjects() {
  const list = getScrapbookProjects();

  return (
    <div
      id="scrapbook-board"
      className="relative mx-auto max-w-[min(96vw,960px)] scroll-mt-28 px-3 md:px-6"
    >
      <MobileStack projects={list} />
      <ScrapbookDesktopBoard projects={list} />

      <nav
        aria-label="Creative links"
        className="mx-auto mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 font-mono text-[12px] text-black/48 md:mt-10"
      >
        {SITE_SOCIAL_LINKS.map((item) => (
          <a
            key={`${item.label}-${item.href}`}
            href={item.href}
            target={item.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={
              item.href.startsWith("mailto:")
                ? undefined
                : "noopener noreferrer"
            }
            className="transition-[transform,color] duration-300 hover:text-[color:var(--brand-red)] hover:-translate-y-0.5"
          >
            {"{"}
            {item.label}
            {"}"}
          </a>
        ))}
      </nav>
    </div>
  );
}
