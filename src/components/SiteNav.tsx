import Link from "next/link";

const links = [
  { href: "#finder", label: "Desk" },
  { href: "#scrapbook-board", label: "Board" },
  { href: "#music", label: "Music" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav({ floating }: { floating?: boolean }) {
  return (
    <header
      className={`sticky top-0 z-[70] ${
        floating
          ? "border-transparent bg-[color:var(--paper-base)]/55 backdrop-blur-[10px]"
          : "border-b border-black/[0.06] bg-[color:var(--paper-elevated)]/90 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4 md:px-8">
        <Link
          href="/"
          className="group flex items-center gap-2.5 transition-[opacity] duration-300 hover:opacity-85"
        >
          <span className="font-mono text-[12px] font-semibold tracking-tight text-[color:var(--foreground)] md:text-[13px]">
            Protyasish
          </span>
          <span className="font-mono text-[9px] uppercase tracking-[0.26em] text-black/45">
            alias
          </span>
          <span
            className="normal-case text-[1.1rem] leading-none text-[color:var(--brand-red)] transition-transform duration-300 group-hover:scale-105"
            style={{ fontFamily: "var(--font-xivass-script), cursive" }}
          >
            xivass
          </span>
        </Link>
        <ul className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2 font-mono text-[10px] uppercase tracking-[0.26em] text-black/45 md:gap-x-7 md:text-[11px]">
          {links.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="transition-[color,transform] duration-300 hover:text-[color:var(--brand-red)] hover:-translate-y-px"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
