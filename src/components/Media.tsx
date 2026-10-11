import Image from "next/image";
import type { Dictionary } from "@/i18n/dictionaries";
import { media } from "@/lib/site";
import { PlayIcon, RadioIcon, TvIcon } from "./Icons";
import { SectionHeading } from "./ui";

export function Media({ dict, intlLocale }: { dict: Dictionary["media"]; intlLocale: string }) {
  const formatDate = (date: string) => {
    const [y, m, d] = date.split("-").map(Number);
    return new Intl.DateTimeFormat(intlLocale, { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(
      new Date(Date.UTC(y, m - 1, d)),
    );
  };

  return (
    <section id="media" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading kicker={dict.kicker} title={dict.title} intro={dict.intro} />

        <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {media.map((m) => {
            const Icon = m.kind === "tv" ? TvIcon : RadioIcon;
            return (
              <li
                key={`${m.outlet}-${m.date}`}
                className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-surface shadow-sm shadow-plum-950/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-plum-950/10"
              >
                <div
                  className={`relative grid aspect-[5/2] place-items-center overflow-hidden sm:aspect-[16/9] ${m.logo ? "border-b border-line bg-white" : "bg-plum-950"}`}
                >
                  {m.logo ? (
                    <Image
                      src={m.logo}
                      alt={m.outlet}
                      fill
                      sizes="20rem"
                      className="object-contain px-8 pb-5 pt-11 transition duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <>
                      <span aria-hidden="true" className="absolute -end-10 -top-10 size-32 rounded-full bg-sunflower/15 blur-2xl" />
                      <span className="font-display text-4xl font-semibold tracking-tight text-mist" dir="ltr" lang="fr">
                        {m.outlet}
                      </span>
                    </>
                  )}
                  <span className="absolute start-3 top-3 flex items-center gap-1.5 rounded-full bg-sunflower px-3 py-1 text-xs font-semibold text-plum-950">
                    <Icon className="text-sm" />
                    {dict[m.kind]}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="font-display text-xl font-semibold leading-tight">{dict.shows[m.show]}</p>
                  <p className="mt-1 text-sm text-muted">
                    <span dir="ltr" lang="fr">{m.outlet}</span> · <time dateTime={m.date}>{formatDate(m.date)}</time>
                  </p>
                  {m.url && (
                    <a
                      href={m.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 self-start text-sm font-semibold text-accent underline-offset-4 hover:underline"
                    >
                      <PlayIcon className="rtl:-scale-x-100" />
                      {m.kind === "tv" ? dict.watch : dict.listen}
                    </a>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
