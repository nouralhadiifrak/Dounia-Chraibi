import Image from "next/image";

type LogoProps = { tagline: string; className?: string };

/** "DC" monogram supplied by the practice (public/images/logo.png). */
export function Emblem({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/images/logo.png"
      alt=""
      width={40}
      height={40}
      className={`rounded-xl ring-1 ring-white/15 ${className}`}
    />
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
