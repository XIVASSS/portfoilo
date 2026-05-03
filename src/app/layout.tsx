import type { Metadata } from "next";
import {
  Caveat,
  Damion,
  DM_Sans,
  Instrument_Serif,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-caveat",
});

const damion = Damion({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-xivass-script",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "xivass — Protyasish · portfolio",
    template: "%s — xivass",
  },
  description:
    "Protyasish (xivass): full-stack engineer — embedded/BLE, strict TypeScript, Gemini integrations, Matter-ready tooling, and ops-grade UIs.",
  openGraph: {
    title: "xivass — Protyasish",
    description:
      "Systems-minded builds: edge telemetry, React/Next surfaces, LLM wiring, and consoles you can run in production.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${instrumentSerif.variable} ${caveat.variable} ${damion.variable} ${jetbrainsMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="font-sans flex min-h-screen flex-col pb-[76px] md:pb-[84px]">
        {children}
      </body>
    </html>
  );
}
