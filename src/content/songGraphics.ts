/**
 * Album covers + session visuals for the music section.
 * Covers: `public/albums/` · strips: `public/albums/songs/`
 */
export type SongVisual = {
  src: string;
  label: string;
  hint?: string;
};

export type AlbumRelease = {
  coverSrc: string;
  title: string;
  subtitle: string;
  credit: string;
};

export const ALBUM_RELEASES: AlbumRelease[] = [
  {
    coverSrc: "/albums/hart-act-1.jpg",
    title: "HART",
    subtitle: "Act 1 · single",
    credit: "xivass Co.",
  },
  {
    coverSrc: "/albums/hart-deal.jpg",
    title: "HART DEAL",
    subtitle: "Mixtape",
    credit: "xivass",
  },
];

/** Session art & collage frames — horizontal gallery */
export const SONG_VISUALS: SongVisual[] = [
  {
    src: "/albums/songs/hart-sketch-1.png",
    label: "Treatment A",
    hint: "early ink",
  },
  {
    src: "/albums/songs/hart-sketch-2.png",
    label: "Treatment B",
    hint: "cassette mood",
  },
  {
    src: "/albums/songs/hart-sketch-3.png",
    label: "Treatment C",
    hint: "scrap lift",
  },
  {
    src: "/albums/songs/hart-collage-1.png",
    label: "Wide collage",
    hint: "DEAL lane",
  },
  {
    src: "/albums/songs/hart-collage-2.png",
    label: "Orange room",
    hint: "poster pass",
  },
];
