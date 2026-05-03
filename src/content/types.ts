export type ProjectLinks = {
  github?: string;
  /** When UI and firmware (or similar) live in separate repos. */
  githubFirmware?: string;
  instructables?: string;
  demo?: string;
  web?: string;
  /** Deep link to related LinkedIn post or profile activity. */
  linkedin?: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  year?: string;
  role?: string;
  coverImage: string;
  /** Social / poster graphic — shown full (object-contain) in scrapbook + case study hero. */
  heroPostImage?: string;
  gallery?: string[];
  stack: string[];
  links?: ProjectLinks;
  sections: {
    overview: string;
    problem?: string;
    approach?: string;
    outcome?: string;
  };
};
