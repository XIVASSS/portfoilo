/**
 * LinkedIn profile activity is behind authentication and bot protections; there is
 * no stable public API or RSS for `/recent-activity/all/` without OAuth.
 *
 * To surface posts on this site: paste highlights into {@link linkedInHighlights}
 * (copy title + link + optional image from your feed), or embed LinkedIn’s
 * official widgets where applicable.
 */
export const LINKEDIN_ACTIVITY_URL =
  "https://www.linkedin.com/in/protyasish/recent-activity/all/" as const;

export type LinkedInHighlight = {
  title: string;
  url: string;
  /** Optional — path under `public/`, e.g. `/projects/share-it/cover.png` */
  imageSrc?: string;
};

/** Optional manual mirrors of posts you care about (filled in by you). */
export const linkedInHighlights: LinkedInHighlight[] = [];
