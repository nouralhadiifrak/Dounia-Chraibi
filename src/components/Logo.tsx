type LogoProps = { tagline: string; className?: string };

/** Emblem: a line-drawn profile speaking, with sound waves, on a sunflower disc. */
export function Emblem({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="23" fill="var(--sunflower)" />
      <g stroke="#3d1b5e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 39V33.5C11.5 30.5 10 27 10 22.5 10 15.5 15 10.5 21.5 10.5c5.6 0 9.3 3.7 9.8 8.6l2.6 4.6c.3.6 0 1.1-.6 1.2l-1.9.4.4 2.1-1.2.9.6 1.4c.3 1-.4 2-1.5 2.1l-3.4.3V39" />
        <path d="M35.5 20.5a5 5 0 0 1 0 7" />
        <path d="M38.7 17.6a9 9 0 0 1 0 12.8" opacity="0.6" />
      </g>
    </svg>
  );
}

export function Logo({ tagline, className = "" }: LogoProps) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <Emblem className="size-10 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.1rem] font-semibold tracking-wide whitespace-nowrap" dir="ltr" lang="fr">
          Dounia Chraïbi
        </span>
        <span className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.22em] opacity-75">{tagline}</span>
      </span>
    </span>
  );
}
