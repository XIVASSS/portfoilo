import Link from "next/link";
import { MacFolderIcon, type MacFolderTone } from "@/components/MacFolderIcon";

const sidebar = [
  { icon: "⌂", label: "Projects", href: "#scrapbook-board", active: true },
  { icon: "◎", label: "Records", href: "#music", active: false },
  { icon: "★", label: "Achievements", href: "#about", active: false },
  { icon: "❧", label: "Garden", href: "#contact", active: false },
];

const folders: {
  label: string;
  hint: string;
  href: string;
  tone: MacFolderTone;
}[] = [
  {
    label: "Signals & sensors",
    hint: "BLE · ECG · lungs",
    href: "/projects/cardiogram",
    tone: "ocean",
  },
  {
    label: "Human-centered AI",
    hint: "Gemini · access",
    href: "/projects/insight",
    tone: "amber",
  },
  {
    label: "Ops & consoles",
    hint: "Secure feeds",
    href: "/projects/secure-sight",
    tone: "forest",
  },
  {
    label: "Campaign studio",
    hint: "Motion posts",
    href: "/projects/superhealth",
    tone: "coral",
  },
  {
    label: "Brand table",
    hint: "Café · Share IT",
    href: "/projects/thecafe",
    tone: "plum",
  },
];

export function FinderStudio() {
  return (
    <section
      id="finder"
      className="relative z-10 scroll-mt-28 px-4 py-16 md:px-8 md:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-[10px] uppercase tracking-[0.38em] text-black/42">
          ~/workspace — GUI shell
        </p>
        <h2
          className="mt-4 max-w-2xl text-[clamp(1.85rem,4vw,2.85rem)] leading-[1.08]"
          style={{ fontFamily: "var(--font-caveat), cursive" }}
        >
          Finder-style surface: each folder is a route into a different stack —
          sensors, models, consoles, campaigns.
        </h2>

        <div className="finder-shell mx-auto mt-12 overflow-hidden rounded-[18px] border border-black/[0.12] bg-[#f3efe8] shadow-[0_28px_90px_rgba(35,28,22,0.14)] ring-1 ring-black/[0.05] transition-[transform,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-[0_36px_110px_rgba(35,28,22,0.18)]">
          <div className="flex items-center gap-3 border-b border-black/[0.08] bg-[#ebe6df] px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57] shadow-inner transition-transform duration-300 hover:scale-110" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e] shadow-inner transition-transform duration-300 hover:scale-110" />
            <span className="h-3 w-3 rounded-full bg-[#28c840] shadow-inner transition-transform duration-300 hover:scale-110" />
            <span className="flex-1 text-center font-mono text-[11px] tracking-wide text-black/38">
              ~/xivass/studio
            </span>
          </div>

          <div className="grid md:grid-cols-[210px_minmax(0,1fr)]">
            <aside className="border-b border-black/[0.07] bg-[#e8e2da] p-5 md:border-b-0 md:border-r md:border-black/[0.06]">
              <p className="font-mono text-[9px] uppercase tracking-[0.34em] text-black/38">
                Favorites
              </p>
              <ul className="mt-5 space-y-1 font-mono text-[13px]">
                {sidebar.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className={`flex items-center gap-2 rounded-lg px-2 py-2 transition-[transform,background-color] duration-300 hover:translate-x-0.5 ${
                        item.active
                          ? "bg-[#d9d2c7] text-black shadow-inner"
                          : "text-black/55 hover:bg-black/[0.04] hover:text-black"
                      }`}
                    >
                      <span aria-hidden>{item.icon}</span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </aside>

            <div className="grain-soft relative bg-[linear-gradient(165deg,rgba(255,255,255,0.55),transparent)] px-6 py-10 md:px-10 md:py-12">
              <p className="font-mono text-[9px] uppercase tracking-[0.34em] text-black/38">
                Open a folder
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-11 md:justify-between md:gap-x-5">
                {folders.map((f) => (
                  <Link
                    key={f.href}
                    href={f.href}
                    className="group flex w-[112px] flex-col items-center gap-2 text-center md:w-[122px]"
                  >
                    <div className="transition-[transform,filter] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-2 group-hover:scale-[1.03]">
                      <MacFolderIcon
                        tone={f.tone}
                        className="mx-auto h-[92px] w-[112px] drop-shadow-[0_16px_26px_rgba(18,14,12,0.22)] transition-[filter] duration-300 group-hover:brightness-[1.05]"
                      />
                    </div>
                    <span className="font-mono text-[11px] font-medium leading-snug text-black/72 transition-colors duration-300 group-hover:text-black">
                      {f.label}
                    </span>
                    <span className="-mt-1 font-mono text-[9px] uppercase tracking-[0.14em] text-black/38">
                      {f.hint}
                    </span>
                  </Link>
                ))}
              </div>
              <p className="mx-auto mt-14 max-w-lg text-center font-mono text-[10px] leading-relaxed text-black/48">
                Looking for the scattered clips? Jump to the{" "}
                <a href="#music" className="text-[color:var(--brand-red)] underline decoration-black/15 underline-offset-2 hover:decoration-[color:var(--brand-red)]/50">
                  record wall
                </a>{" "}
                — album art and writer lane beside these build folders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
