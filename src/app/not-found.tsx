import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-3 px-6 text-center">
      <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-black/45">
        404
      </p>
      <h1 className="max-w-md text-2xl text-[color:var(--foreground)]">
        Page not found
      </h1>
      <Link
        href="/"
        className="mt-4 font-mono text-sm text-[color:var(--brand-red)] underline decoration-black/20 underline-offset-4 hover:decoration-[color:var(--brand-red)]/50"
      >
        ← Back home
      </Link>
    </div>
  );
}
