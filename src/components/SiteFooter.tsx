import { SITE_SOCIAL_LINKS } from "@/content/social";

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="relative z-[60] border-t border-black/[0.07] bg-[color:var(--paper-elevated)]/95 backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 py-10 text-center md:flex-row md:items-center md:justify-between md:px-8 md:text-left">
        <div>
          <p
            className="text-[clamp(1.35rem,3.2vw,1.85rem)] leading-tight text-[color:var(--foreground)]"
            style={{ fontFamily: "var(--font-caveat), cursive" }}
          >
            EOF — thanks for paging through the stack.
          </p>
          <p className="mt-2 max-w-xs font-mono text-[10px] leading-relaxed text-black/48 md:max-w-sm md:text-[11px]">
            Maintained by{" "}
            <span
              className="text-[color:var(--brand-red)]"
              style={{ fontFamily: "var(--font-xivass-script), cursive" }}
            >
              xivass
            </span>
            {" "}
            — prefer email over cold templates; attach repos or logs if you want
            a real thread.
          </p>
        </div>
        <nav
          aria-label="Social links"
          className="flex flex-wrap justify-center gap-x-5 gap-y-2 font-mono text-[11px] text-black/52 md:justify-end"
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
              className="transition-[transform,color] duration-300 hover:text-[color:var(--foreground)] hover:-translate-y-px"
            >
              {"{"}
              {item.label}
              {"}"}
            </a>
          ))}
        </nav>
      </div>
      <div className="border-t border-black/[0.06] px-6 py-3 text-center font-mono text-[9px] uppercase tracking-[0.26em] text-black/32">
        Next.js · Turbopack · TypeScript strict — shipped like a release branch
      </div>
    </footer>
  );
}
