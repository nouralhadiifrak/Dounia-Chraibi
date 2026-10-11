import type { Dictionary } from "@/i18n/dictionaries";
import { OPENING_HOURS, toTime } from "@/lib/schedule";
import { site } from "@/lib/site";
import { ArrowIcon, ClockIcon, MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "./Icons";
import { BrandButton } from "./BrandButton";
import { SectionHeading } from "./ui";

const weekOrder = [1, 2, 3, 4, 5, 6, 0];

type Ranges = [number, number][];
const formatRanges = (h: Ranges) => h.map(([open, close]) => `${toTime(open)} – ${toTime(close)}`).join(" · ");

/** Consecutive days with the same hours, e.g. Monday–Saturday. */
function groupedHours() {
  const groups: { from: number; to: number; hours: Ranges | undefined }[] = [];
  for (const d of weekOrder) {
    const hours = OPENING_HOURS[d];
    const last = groups.at(-1);
    if (last && JSON.stringify(last.hours) === JSON.stringify(hours)) last.to = d;
    else groups.push({ from: d, to: d, hours });
  }
  return groups;
}

export function Contact({ dict }: { dict: Dictionary["contact"] }) {
  const card = "rounded-3xl border border-line bg-surface p-5 shadow-sm shadow-plum-950/5 sm:p-7";
  const label = "flex items-center gap-3 font-display text-lg font-semibold sm:text-xl";
  const contacts = [
    { label: dict.call, href: `tel:${site.phone.tel}`, value: site.phone.display, Icon: PhoneIcon },
    { label: dict.whatsapp, href: site.whatsapp, value: site.phone.display, Icon: WhatsAppIcon },
    { label: dict.email, href: `mailto:${site.email}`, value: site.email, Icon: MailIcon },
  ];

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading kicker={dict.kicker} title={dict.title} />

        <div className="mt-16 grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-6">
          <div className="grid gap-5 lg:gap-6">
            <div className={card}>
              <p className={label}>
                <PinIcon className="text-2xl text-accent" /> {dict.address}
              </p>
              <address className="mt-3 not-italic leading-relaxed text-muted" dir="ltr" lang="fr">
                {site.address.line1}
                <br />
                {site.address.line2}
                <br />
                {site.address.postalCode} {site.address.city}
              </address>
              <BrandButton
                variant="outline"
                href={site.mapsUrl}
                newTab
                icon={<ArrowIcon className="rtl:-scale-x-100" />}
                iconSide="end"
                className="mt-5 !py-2.5"
              >
                {dict.directions}
              </BrandButton>
            </div>

            <div className={card}>
              <p className={label}>
                <ClockIcon className="text-2xl text-accent" /> {dict.hours}
              </p>
              <dl className="mt-3 divide-y divide-line">
                {groupedHours().map(({ from, to, hours }) => (
                  <div key={from} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5 py-2.5 text-sm">
                    <dt className="font-semibold">
                      {from === to ? dict.days[from] : `${dict.days[from]} – ${dict.days[to]}`}
                    </dt>
                    <dd className={hours ? "tabular-nums text-muted" : "text-muted/70"} dir={hours ? "ltr" : undefined}>
                      {hours ? formatRanges(hours) : dict.closed}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className={card}>
              <p className={label}>
                <PhoneIcon className="text-2xl text-accent" /> {dict.phones}
              </p>
              <ul className="mt-3 divide-y divide-line">
                {contacts.map(({ label, href, value, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-3 py-2.5 hover:text-accent"
                    >
                      <span className="grid size-9 shrink-0 place-items-center rounded-full bg-surface-2 text-base text-accent">
                        <Icon />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs text-muted">{label}</span>
                        <span dir="ltr" className="block break-all text-sm font-semibold tabular-nums text-accent">
                          {value}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative h-80 overflow-hidden rounded-3xl border border-line bg-surface-2 sm:h-96 lg:h-auto lg:min-h-[24rem]">
            <iframe
              title={dict.mapTitle}
              src={site.mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="absolute inset-0 size-full border-0"
            />
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-3 end-3 inline-flex items-center gap-2 rounded-full bg-plum-950/85 px-4 py-2 text-xs font-semibold text-mist shadow-lg backdrop-blur hover:bg-plum-950"
            >
              <PinIcon className="text-sm text-sunflower" />
              {dict.openMaps}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
