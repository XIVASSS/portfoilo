import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/types";
import { HERO_POST_SLUGS } from "@/content/projects";

export function ScrapbookPolaroidFrame({
  project,
  variant,
  desktopAspect,
  compact,
}: {
  project: Project;
  variant: "mobile" | "desktop";
  desktopAspect?: "landscape" | "portrait" | "wide";
  compact?: boolean;
}) {
  const wide = HERO_POST_SLUGS.has(project.slug);
  const src = project.heroPostImage ?? project.coverImage;

  const frame =
    variant === "desktop" ? "rounded-[3px]" : "rounded-[6px]";

  const aspect =
    compact && variant === "desktop"
      ? desktopAspect === "portrait"
        ? "3 / 4"
        : desktopAspect === "wide"
          ? "16 / 9"
          : "4 / 3"
      : compact
        ? "3 / 4"
        : wide
          ? "4 / 5"
          : "5 / 6";

  const border =
    compact && variant === "desktop"
      ? "border-[4px]"
      : compact
        ? "border-[4px]"
        : "border-[7px]";

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group relative block overflow-hidden bg-neutral-200/90 shadow-[6px_14px_30px_rgba(25,20,18,0.2)] outline-none ring-black/30 transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:ring-2 md:shadow-[8px_18px_38px_rgba(25,20,18,0.22)] ${frame} ${border} border-white`}
    >
      <div
        className="relative w-full bg-[linear-gradient(160deg,#ebe6df,#dfd8cf)]"
        style={{ aspectRatio: aspect }}
      >
        <Image
          src={src}
          alt=""
          fill
          sizes={
            compact && variant === "desktop"
              ? "(max-width:900px) 28vw, 280px"
              : variant === "desktop"
                ? "(max-width:900px) 40vw, 320px"
                : "(max-width:768px) 90vw, 400px"
          }
          className={`object-cover object-center transition-[transform,filter] duration-500 group-hover:brightness-[1.04] ${compact && variant === "desktop" ? "p-0" : "p-2"}`}
        />
      </div>
      {variant !== "desktop" && (
        <div
          className={`border-t border-black/[0.06] bg-[#fdfcfa] text-center ${compact ? "px-1.5 py-1" : "px-2 py-2"}`}
        >
          <p
            className={`leading-tight text-black/88 ${compact ? "truncate text-[10px] md:text-[11px]" : "text-[13px] md:text-[14px]"}`}
            style={{ fontFamily: "var(--font-caveat), cursive" }}
          >
            {project.title}
          </p>
          <p
            className={`font-mono uppercase tracking-[0.2em] text-black/42 ${compact ? "mt-0 text-[7px]" : "mt-0.5 text-[8px]"}`}
          >
            peel open →
          </p>
        </div>
      )}
    </Link>
  );
}
