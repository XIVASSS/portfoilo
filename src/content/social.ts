/** Public profile — use for global nav / footer (stable, no login wall). */
export const GITHUB_PROFILE = "https://github.com/XIVASSS" as const;

export const LINKEDIN_PROFILE =
  "https://www.linkedin.com/in/protyasish/" as const;

export const EMAIL_HREF = "mailto:protyasishmajumder@gmail.com" as const;

/** Canonical Instructables build guides (site-wide + project deep links). */
export const INSTRUCTABLES_CARDIOGRAM_HREF =
  "https://www.instructables.com/Cardiogram-a-Portable-ECG-Device-for-Daily-Use-on-" as const;

export const INSTRUCTABLES_SPIRA_HREF =
  "https://www.instructables.com/Spira-a-Pocket-Friendly-Spirometer" as const;

export const INSTRUCTABLES_BUILDS = [
  { label: "Instructables · Cardiogram", href: INSTRUCTABLES_CARDIOGRAM_HREF },
  { label: "Instructables · Spira", href: INSTRUCTABLES_SPIRA_HREF },
] as const satisfies readonly { label: string; href: string }[];

/** Ordered list for footer, about strip, scrapbook nav. */
export const SITE_SOCIAL_LINKS: readonly { label: string; href: string }[] = [
  { label: "GitHub", href: GITHUB_PROFILE },
  { label: "LinkedIn", href: LINKEDIN_PROFILE },
  ...INSTRUCTABLES_BUILDS,
  { label: "Email", href: EMAIL_HREF },
];
