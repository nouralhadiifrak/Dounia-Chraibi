import type { Dictionary } from "@/i18n/dictionaries";
import { ArrowIcon, CalendarIcon, StarIcon, TvIcon } from "./Icons";
import { Photo } from "./Photo";
import { BrandButton } from "./BrandButton";
import { CurtainReveal } from "./fx/CurtainReveal";

export function Hero({ dict, portrait }: { dict: Dictionary["hero"]; portrait: string }) {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-plum-950 uppercase text-mist"
    >
      {/* Ambient light and fine rings */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 end-[-10%] size-[42rem] rounded-full bg-plum-700/50 blur-[120px]" />
        <div className="absolute bottom-[-30%] start-[-10%] size-[36rem] rounded-full bg-plum-900 blur-[100px]" />
        <div className="absolute bottom-[10%] end-[30%] size-[18rem] rounded-full bg-sunflower/10 blur-[90px]" />
        <svg className="absolute end-[-12rem] top-1/2 hidden size-[56rem] -translate-y-1/2 text-mist/[0.06] lg:block" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.15">
          <circle cx="50" cy="50" r="49" />
          <circle cx="50" cy="50" r="40" />
          <circle cx="50" cy="50" r="31" />
        </svg>
      </div>

      <div className="mx-auto grid min-h-[100svh] max-w-7xl items-center gap-12 px-4 pb-28 pt-32 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-8 lg:pb-20">
        <div>
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-kicker text-mist/70">
            <span className="h-px w-10 bg-sunflower/70" aria-hidden="true" />
            {dict.eyebrow}
          </p>
          <CurtainReveal
            tag="h1"
            text={dict.title}
            className="mt-6 pb-2 font-display text-[2.9rem] font-semibold leading-[1.02] text-balance sm:text-7xl lg:text-[5.25rem]"
          />
          <CurtainReveal
            tag="p"
            text={dict.subtitle}
            delay={0.35}
            className="mt-6 max-w-xl text-sm leading-relaxed tracking-wide text-mist/75 sm:text-base"
          />

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <BrandButton variant="sun" href="#booking" icon={<CalendarIcon />} className="w-full sm:w-auto">
              {dict.ctaBook}
            </BrandButton>
            <BrandButton
              variant="ghost"
              href="#about"
              icon={<ArrowIcon className="rtl:-scale-x-100" />}
              iconSide="end"
              className="w-full sm:w-auto"
            >
              {dict.ctaAbout}
            </BrandButton>
          </div>

          <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-3 text-sm text-mist/70">
            <li className="flex items-center gap-2 text-mist">
              <span className="flex text-sunflower" aria-hidden="true">
                {Array.from({ length: 5 }, (_, i) => (
                  <StarIcon key={i} />
                ))}
              </span>
              {dict.rating}
            </li>
            <li>
              <a href="#media" className="flex items-center gap-2 text-mist underline-offset-4 hover:underline">
                <TvIcon className="text-sunflower" />
                {dict.seenOn}
              </a>
            </li>
            {dict.badges.map((b) => (
              <li key={b} className="flex items-center gap-2">
                <span className="size-1 rounded-full bg-mist/50" aria-hidden="true" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
          <div aria-hidden="true" className="absolute -inset-2 rounded-t-full border border-sunflower/40 sm:-inset-3" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-full bg-plum-900 shadow-2xl shadow-black/40">
            <Photo
              src={portrait}
              alt={dict.portraitAlt}
              fill
              preload
              sizes="(min-width: 1024px) 28rem, 24rem"
              className="object-cover object-[50%_20%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
