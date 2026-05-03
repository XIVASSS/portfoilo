"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";

/**
 * Four triangular flaps share edges (swan read). On unfold, each `d` morphs
 * to a corner sector of the card; fill fades; photo scales/fades in.
 * Springs: stiffness 300, damping 30 per master prompt.
 */
const VIEW = 100;

const springFlap = {
  type: "spring" as const,
  stiffness: 300,
  damping: 30,
  mass: 0.55,
};

const springPhoto = {
  type: "spring" as const,
  stiffness: 260,
  damping: 28,
  mass: 0.6,
  delay: 0.08,
};

const paperFill = "#d4d1cb";
const paperStroke = "#1c1614";

/** Folded: head, tail, left wing, right wing — all `M L L Z`, straight edges */
const FLAPS: ReadonlyArray<{
  folded: string;
  flat: string;
  origin: string;
  tiltDelay: number;
}> = [
  {
    folded: "M 50 12 L 34 40 L 66 40 Z",
    flat: "M 4 4 L 96 4 L 50 50 Z",
    origin: "50px 28px",
    tiltDelay: 0,
  },
  {
    folded: "M 34 40 L 66 40 L 50 94 Z",
    flat: "M 4 96 L 96 96 L 50 50 Z",
    origin: "50px 72px",
    tiltDelay: 0.04,
  },
  {
    folded: "M 34 40 L 50 56 L 12 76 Z",
    flat: "M 4 4 L 4 96 L 50 50 Z",
    origin: "32px 56px",
    tiltDelay: 0.08,
  },
  {
    folded: "M 66 40 L 50 56 L 88 76 Z",
    flat: "M 96 4 L 96 96 L 50 50 Z",
    origin: "68px 56px",
    tiltDelay: 0.12,
  },
];

export type OrigamiIdentityProps = {
  imageSrc: string;
  alt: string;
  reduceMotion?: boolean;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

type LabelPhase = "fold" | "decrypt" | "done";

export function OrigamiIdentity({
  imageSrc,
  alt,
  reduceMotion = false,
  className = "",
  sizes = "(max-width: 768px) 44vw, 260px",
  priority = false,
}: OrigamiIdentityProps) {
  const [open, setOpen] = useState(false);
  const [label, setLabel] = useState<LabelPhase>("fold");
  const doneTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const uid = useId().replace(/:/g, "");
  const filterId = `origami-id-${uid}`;

  useEffect(() => {
    if (doneTimerRef.current) {
      clearTimeout(doneTimerRef.current);
      doneTimerRef.current = null;
    }
    if (open) {
      setLabel("decrypt");
      doneTimerRef.current = setTimeout(() => setLabel("done"), 720);
    } else {
      setLabel("fold");
    }
    return () => {
      if (doneTimerRef.current) clearTimeout(doneTimerRef.current);
    };
  }, [open]);

  if (reduceMotion) {
    return (
      <div
        className={`mx-auto mt-4 w-full max-w-[min(100%,15.5rem)] rounded-2xl border border-black/10 bg-[#e6e3de] p-4 shadow-[0_16px_40px_rgba(25,22,18,0.1)] sm:max-w-[16.5rem] md:mt-5 ${className}`}
      >
        <div className="relative mx-auto aspect-[3/4] w-full max-w-[13rem] overflow-hidden rounded-md">
          <Image
            src={imageSrc}
            alt={alt}
            fill
            priority={priority}
            sizes={sizes}
            className="object-cover object-[center_15%]"
          />
        </div>
        <p className="mt-3 text-center font-mono text-[9px] font-medium uppercase tracking-[0.38em] text-black/45">
          ORIGAMI.FOLD
        </p>
      </div>
    );
  }

  const labelText =
    label === "fold"
      ? "ORIGAMI.FOLD"
      : label === "decrypt"
        ? "DECRYPTING..."
        : "IDENTITY.UNFOLD";

  return (
    <div
      className={`mx-auto mt-4 w-full max-w-[min(100%,15.5rem)] touch-manipulation rounded-2xl border border-black/10 bg-[#e6e3de] p-4 shadow-[0_16px_40px_rgba(25,22,18,0.1)] sm:max-w-[16.5rem] md:mt-5 ${className}`}
    >
      <motion.div
        className="relative mx-auto aspect-[3/4] w-full max-w-[13rem] overflow-hidden rounded-md outline-none ring-offset-2 ring-offset-[color:var(--paper-base)] focus-within:ring-2 focus-within:ring-[color:var(--brand-red)]/35"
        style={{ perspective: 720, transformStyle: "preserve-3d" }}
        variants={{ closed: {}, open: {} }}
        initial={false}
        animate={open ? "open" : "closed"}
        onPointerEnter={() => setOpen(true)}
        onPointerLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        tabIndex={0}
        role="group"
        aria-label={`${alt}. Hover or focus to unfold paper flaps and reveal portrait.`}
      >
        <motion.div
          className="absolute inset-0"
          variants={{
            closed: { opacity: 0, scale: 0.93 },
            open: { opacity: 1, scale: 1 },
          }}
          transition={springPhoto}
        >
          <Image
            src={imageSrc}
            alt={alt}
            fill
            priority={priority}
            sizes={sizes}
            className="object-cover object-[center_15%]"
          />
        </motion.div>

        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox={`0 0 ${VIEW} ${VIEW}`}
          preserveAspectRatio="xMidYMid slice"
          aria-hidden
        >
          <defs>
            <filter id={filterId} x="-15%" y="-15%" width="130%" height="130%">
              <feDropShadow dx="0" dy="1" stdDeviation="1.2" floodOpacity="0.12" />
            </filter>
          </defs>

          {FLAPS.map((flap, i) => (
            <motion.g
              key={i}
              style={{
                transformOrigin: flap.origin,
                transformBox: "fill-box" as const,
              }}
              initial={false}
              animate={{
                rotateX: open ? [0, -12, 0] : 0,
                rotateY: open ? [0, 8, 0] : 0,
              }}
              transition={{
                duration: 0.78,
                times: [0, 0.4, 1],
                delay: flap.tiltDelay,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              <motion.path
                fill={paperFill}
                stroke={paperStroke}
                strokeWidth={0.55}
                strokeLinejoin="miter"
                strokeLinecap="butt"
                vectorEffect="non-scaling-stroke"
                filter={`url(#${filterId})`}
                initial={false}
                animate={
                  open
                    ? {
                        d: flap.flat,
                        fillOpacity: 0,
                        strokeOpacity: 0.18,
                      }
                    : {
                        d: flap.folded,
                        fillOpacity: 1,
                        strokeOpacity: 1,
                      }
                }
                transition={{
                  ...springFlap,
                  delay: i * 0.045,
                }}
              />
            </motion.g>
          ))}
        </svg>
      </motion.div>

      <p
        className="mt-3 text-center font-mono text-[9px] font-medium uppercase tracking-[0.36em] text-black/50 data-[phase=done]:text-[color:var(--brand-red)]"
        data-phase={label === "done" ? "done" : undefined}
        aria-live="polite"
      >
        {labelText}
      </p>
    </div>
  );
}
