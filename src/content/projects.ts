import type { Project } from "./types";
import { LINKEDIN_ACTIVITY_URL } from "./linkedin";
import {
  INSTRUCTABLES_CARDIOGRAM_HREF,
  INSTRUCTABLES_SPIRA_HREF,
} from "./social";

const LI_FEED = LINKEDIN_ACTIVITY_URL;

/** Hero “post” graphics — shown uncropped in the scrapboard. */
export const HERO_POST_SLUGS = new Set([
  "share-it",
  "superhealth",
  "thecafe",
]);

export const SCRAPBOOK_ORDER = [
  "share-it",
  "superhealth",
  "thecafe",
  "cardiogram",
  "spira",
  "secure-sight",
  "insight",
];

export const projects: Project[] = [
  {
    slug: "cardiogram",
    title: "Cardiogram",
    tagline:
      "Wearable ECG you can carry — ESP32 streams biosignals over BLE to live charts.",
    year: "2024",
    role: "Hardware · firmware · companion UI",
    coverImage: "/projects/cardiogram/cover.png",
    heroPostImage: "/projects/cardiogram/cover.png",
    gallery: [
      "/projects/cardiogram/gallery-2.png",
      "/projects/cardiogram/gallery-3.png",
      "/projects/cardiogram/gallery-4.png",
      "/projects/cardiogram/gallery-5.png",
      "/projects/cardiogram/gallery-6.png",
    ],
    stack: ["ESP32-C3", "BLE", "Embedded C", "Web UI"],
    links: {
      instructables: INSTRUCTABLES_CARDIOGRAM_HREF,
      github: "https://github.com/XIVASSS/cardiogram-website",
      githubFirmware: "https://github.com/XIVASSS/cardiogram-toplevel",
      linkedin: LI_FEED,
    },
    sections: {
      overview:
        "Cardiogram is a portable electrocardiography experiment built around the ESP32-C3. Analog front-end conditioning feeds an MCU that packetizes waveforms and pushes them over Bluetooth Low Energy to phone or browser dashboards for casual rhythm insight—not a diagnostic claim, but a serious prototype pipeline.",
      problem:
        "Benchtop ECG rigs don’t travel; curious builders deserve hardware that meets everyday constraints without burying the signal in opaque tooling.",
      approach:
        "Breadboarded the analog chain, then moved to a compact board around the ESP32-C3. Firmware handles sampling windows and BLE framing; the companion web UI (separate repo) subscribes to packets and draws scrolling traces so you can iterate on filters without reflashing for every UI tweak.",
      outcome:
        "Showcased in Autodesk’s Make It Wearable challenge — validation that sensing, wireless transport, and UI can ship as one cohesive loop. Full hardware walkthrough is on Instructables; firmware and UI code are split across the two GitHub repos.",
    },
  },
  {
    slug: "spira",
    title: "Spira",
    tagline:
      "Spirometer you can slip in a pocket — breathing telemetry meets calm mobile UX.",
    year: "2024",
    role: "Embedded · sensing · mobile companion",
    coverImage: "/projects/spira/cover.png",
    heroPostImage: "/projects/spira/cover.png",
    gallery: [
      "/projects/spira/gallery-1.png",
      "/projects/spira/gallery-2.png",
      "/projects/spira/gallery-3.png",
    ],
    stack: ["Seeed XIAO MG24", "BLE", "Mobile UI"],
    links: {
      instructables: INSTRUCTABLES_SPIRA_HREF,
      linkedin: LI_FEED,
    },
    sections: {
      overview:
        "Spira reframes respiratory check-ins as an everyday ritual: a compact flow path, low-power electronics, and an app layer that foregrounds clarity over clinical coldness.",
      problem:
        "Classic spirometry setups are clinic-sized; longitudinal breathing context needs a softer form factor.",
      approach:
        "Prototyped the flow path and pressure tap, then brought up the Seeed XIAO MG24 for ADC + BLE. Calibrated against known volumes, exported a simple packet format, and paired it with a minimal mobile surface so curves stay legible on a small screen. Step-by-step build is documented on Instructables.",
      outcome:
        "An Instructables-documented reference for teaching low-cost pulmonary telemetry without sacrificing approachability.",
    },
  },
  {
    slug: "secure-sight",
    title: "Secure-Sight",
    tagline:
      "Panopticon for teams you actually trust — one console for feeds, motion, and remote rules.",
    year: "2025",
    role: "Full-stack product",
    coverImage: "/projects/secure-sight/cover.png",
    heroPostImage: "/projects/secure-sight/cover.png",
    stack: ["TypeScript", "React", "Node.js", "Realtime APIs"],
    links: {
      github: "https://github.com/XIVASSS/SecureSight",
      linkedin: LI_FEED,
    },
    sections: {
      overview:
        "Secure-Sight is an operations desk for CCTV: ingest multiple cameras, surface live tiles, emit motion envelopes, and expose policy controls operators can tweak remotely.",
      problem:
        "Security tooling fractures across OEM portals — responders waste cycles alt-tabbing instead of correlating incidents.",
      approach:
        "Central stream multiplexing with guarded websocket channels and modular panels so alerts stay terse while playback stays crisp.",
      outcome:
        "A disciplined blueprint for consolidating vigilance workflows without pretending every deployment shares the same topology.",
    },
  },
  {
    slug: "insight",
    title: "Insight",
    tagline:
      "Gemini-backed accessibility copilot — multimodal cues tuned for Indian languages.",
    year: "2025",
    role: "Mobile · Gemini · inclusive UX",
    coverImage: "/projects/insight-cover.png",
    heroPostImage: "/projects/insight-cover.png",
    stack: ["React Native", "Gemini API", "Accessibility UX"],
    links: {
      linkedin: LI_FEED,
    },
    sections: {
      overview:
        "Insight probes how multimodal AI can narrate surroundings, transcribe nuance, and answer gently across eleven-plus regional languages — pairing Gemini reasoning with humane pacing.",
      problem:
        "Assistive stacks often assume English-first prompts and brittle modality hand-offs.",
      approach:
        "Structured multimodal envelopes with localization-aware prompting plus resilient offline-first UI guards.",
      outcome:
        "A thesis-level demonstration that frontier APIs belong inside culturally grounded accessibility workflows.",
    },
  },
  {
    slug: "share-it",
    title: "Share IT",
    tagline:
      "Campaign skins where generosity reads louder than churn metrics.",
    year: "2026",
    role: "Visual systems · landing craft",
    coverImage: "/projects/share-it/cover.png",
    heroPostImage: "/projects/share-it/cover.png",
    stack: ["Brand UI", "Motion-ready layouts"],
    links: {
      linkedin: LI_FEED,
    },
    sections: {
      overview:
        "Share IT explores kinetic hero narratives — typography as choreography, gradients as punctuation — tuned for launches that invite participation rather than guilt.",
      problem:
        "One-off campaign pages rot after launch; marketing still needs a system that can reskin fast without breaking rhythm or hierarchy.",
      approach:
        "Locked a flexible grid and type scale first, then layered motion-ready hero treatments and gradient systems in Figma-style passes before committing to production HTML/CSS. Components are built so copy and seasonal art can swap without touching layout math.",
      outcome:
        "Reusable promotional scaffolding ready for seasonal swaps without tearing down grid logic.",
    },
  },
  {
    slug: "oolio",
    title: "OOLIO Sprint Studio",
    tagline:
      "Velocity prototyping inside a disciplined design-engineering relay.",
    year: "2026",
    role: "Product interface build-out",
    coverImage: "/projects/oolio/cover.png",
    heroPostImage: "/projects/oolio/cover.png",
    gallery: ["/projects/oolio/gallery-1.png"],
    stack: ["React", "Design systems", "Dense data UI"],
    links: {
      linkedin: LI_FEED,
    },
    sections: {
      overview:
        "OOLIO demanded a sprint where high-fidelity UI met unforgiving stakeholder walkthroughs — I translated storyboards into responsive experiences with obsessive state coverage.",
      problem:
        "Timeboxed runs fail when explorers and implementers speak different dialects.",
      approach:
        "Componentized recurring patterns early, rehearsed transitions, and captured decision debt in annotated frames for the next relay leg.",
      outcome:
        "Shipping surfaces the team could stress in real rooms, not slideware — the screenshots that followed were implementation truth, not fiction.",
    },
  },
  {
    slug: "neosapien",
    title: "Neosapien Console",
    tagline:
      "Stress-testing ambitious analytics chrome before the world presses the wrong button.",
    year: "2026",
    role: "Product UI QA · systems thinking",
    coverImage: "/projects/neosapien/cover.png",
    heroPostImage: "/projects/neosapien/cover.png",
    gallery: [
      "/projects/neosapien/gallery-1.png",
      "/projects/neosapien/gallery-2.png",
      "/projects/neosapien/gallery-3.png",
      "/projects/neosapien/gallery-4.png",
    ],
    stack: ["Next.js", "Analytics UI", "Design QA"],
    links: {
      linkedin: LI_FEED,
    },
    sections: {
      overview:
        "Neosapien layers filters, timelines, and deep tables in one analytical theater. I chased edge cases across loading, empty, noisy, and overfull states so the polish matches the ambition.",
      problem:
        "Dense dashboards rot when states are unplayed — QA is a design discipline.",
      approach:
        "Scripted exploratory passes, annotated repros, and pairing with builders to tighten affordances instead of stacking band-aids.",
      outcome:
        "A calmer runway for release gates: fewer regressions slipping through once end users poke the same corners I did.",
    },
  },
  {
    slug: "superhealth",
    title: "SuperHealth",
    tagline:
      "Preventive-care futures told through saturated gradients and human silhouettes.",
    year: "2026",
    role: "Campaign craft · mobile vignettes",
    coverImage: "/projects/superhealth/cover.png",
    heroPostImage: "/projects/superhealth/cover.png",
    gallery: [
      "/projects/superhealth/gallery-1.png",
      "/projects/superhealth/mobile-1.png",
      "/projects/superhealth/mobile-2.png",
    ],
    stack: ["Brand illustration", "Social-ready layouts"],
    links: {
      github: "https://github.com/XIVASSS/superhealthinterveiw",
      linkedin: LI_FEED,
    },
    sections: {
      overview:
        "SuperHealth experiments pair luminous palettes with photographic empathy — landing narratives meant for scrolling thumbs without surrendering sincerity.",
      problem:
        "Preventive-care messaging often reads cold or stock; the same story has to read well on a poster, a landing strip, and a phone feed.",
      approach:
        "Explored gradient systems and silhouette photography in parallel, then exported handset-first layouts before scaling to widescreen hero art. A small React/JavaScript repo holds interview and campaign experiments tied to this visual direction.",
      outcome:
        "Cross-channel comps spanning widescreen posters and handset vignettes ready for simultaneous drops.",
    },
  },
  {
    slug: "thecafe",
    title: "The Café",
    tagline:
      "Editorial warmth for hospitality launches — serif appetite included.",
    year: "2026",
    role: "Identity explorations",
    coverImage: "/projects/thecafe/cover.png",
    heroPostImage: "/projects/thecafe/cover.png",
    stack: ["Brand", "Photography-forward decks"],
    links: {
      linkedin: LI_FEED,
    },
    sections: {
      overview:
        "The Café wraps aroma-forward storytelling inside restrained grids — tactile imagery, imperfect margins, and copy rhythm that invites lingering.",
      problem:
        "Hospitality pitches need warmth without clutter — investors skim, regulars linger; one deck rarely serves both.",
      approach:
        "Started from photography and real menu rhythms, then built typographic hierarchy around a single serif display paired with neutral sans for logistics. Grids stay strict so photography and pull-quotes can breathe; margins deliberately break in hero spreads only.",
      outcome:
        "Pitch-ready decks balancing whimsy with operational clarity for whoever fires the espresso machine.",
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

export function getScrapbookProjects(): Project[] {
  const map = new Map(projects.map((p) => [p.slug, p]));
  return SCRAPBOOK_ORDER.map((slug) => map.get(slug)).filter(
    (p): p is Project => Boolean(p),
  );
}

/** Excluded from the home background flip grid only (case studies may still exist). */
const EXCLUDED_FROM_HOME_FLIP_GRID = new Set(["neosapien", "oolio"]);

/** Prefer hero “post” art for mosaic cells when set. */
export function projectFlipThumbSrc(project: Project): string {
  return project.heroPostImage ?? project.coverImage;
}

/**
 * Home flip grid: drop Neosapien + OOLIO, add second copies of Share IT + The Café
 * so their poster art shows up where those two used to surface in the rotation.
 */
export function getHomeFlipGridProjects(): Project[] {
  const filtered = projects.filter(
    (p) => !EXCLUDED_FROM_HOME_FLIP_GRID.has(p.slug),
  );
  const shareIt = projects.find((p) => p.slug === "share-it");
  const theCafe = projects.find((p) => p.slug === "thecafe");
  const extra: Project[] = [];
  if (shareIt) extra.push(shareIt);
  if (theCafe) extra.push(theCafe);
  return [...filtered, ...extra];
}
