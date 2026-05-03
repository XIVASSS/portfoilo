# Portfolio — flip grid & project deep dives

Personal portfolio built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**. The home layers a hero flip mosaic under a handwritten headline, then a **scrapbook grid** of projects (wide tiles for LinkedIn-ready **post** artwork). Cards tilt on hover, straighten when focused, and expose chips for **Instructables / LinkedIn feed / GitHub** where configured in [`src/content/projects.ts`](src/content/projects.ts). Album art lives under [`public/albums/`](public/albums/) for the **Music** strip (`#music` — songwriter / composer lane). Stick-figure silhouettes stroll along the bottom edge (`WalkingCharacters`).

Motion respects **`prefers-reduced-motion`** — flips are disabled and project cards show a static summary state.

## Scripts

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Deploy on Vercel

1. Push this repository to GitHub (or connect the local folder).
2. Import the project in [Vercel](https://vercel.com/new).
3. Use the default Next.js preset; build command `npm run build`, output `.next`.

Optional: set `NEXT_PUBLIC_SITE_URL` to your production URL if you extend SEO/Open Graph helpers later.

## Assets

Canonical media is copied into [`public/projects/<slug>/`](public/projects/) from your segregated folders at the repo root (e.g. `cardiogram/`, `spira/`, `secure sight/`, `shareIT/`, `superhealth/`, `thecafe/`). Covers and galleries are declared in [`src/content/projects.ts`](src/content/projects.ts). **Insight** still uses the legacy flat file [`public/projects/insight-cover.png`](public/projects/insight-cover.png) until you add an `insight/` asset folder.

## LinkedIn activity

LinkedIn does not allow unauthenticated scraping of [recent activity](https://www.linkedin.com/in/protyasish/recent-activity/all/). The site links to your feed from the homepage and documents this in [`src/content/linkedin.ts`](src/content/linkedin.ts). To show specific posts locally, append objects to `linkedInHighlights` there (title, url, optional `imageSrc`).

## Stack highlights

- Editorial typography via **Instrument Serif** + **DM Sans** (`next/font`).
- Content-driven routing from [`src/content/projects.ts`](src/content/projects.ts).
