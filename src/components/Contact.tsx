import type { Dictionary } from "@/i18n/dictionaries";
import { OPENING_HOURS, toTime } from "@/lib/schedule";
import { site } from "@/lib/site";
import { ArrowIcon, ClockIcon, MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "./Icons";
import { BrandButton } from "./BrandButton";
import { SectionHeading } from "./ui";

const weekOrder = [1, 2, 3, 4, 5, 6, 0];

export function Contact({ dict }: { dict: Dictionary["contact"] }) {
  const card = "rounded-3xl border border-line bg-surface p-7 shadow-sm shadow-plum-950/5";
  const label = "flex items-center gap-3 font-display text-xl font-semibold";

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading kicker={dict.kicker} title={dict.title} />

        <div className="mt-16 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-6">
            <div className={card}>
              <p className={label}>
                <PinIcon className="text-2xl text-accent" /> {dict.address}
              </p>
              <address className="mt-4 not-italic leading-relaxed text-muted" dir="ltr" lang="fr">
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
                className="mt-6 !py-2.5"
              >
                {dict.directions}
              </BrandButton>
            </div>

            <div className={card}>
              <p className={label}>
                <ClockIcon className="text-2xl text-accent" /> {dict.hours}
              </p>
              <dl className="mt-4 divide-y divide-line">
                {weekOrder.map((d) => {
                  const h = OPENING_HOURS[d];
                  return (
                    <div key={d} className="flex justify-between gap-4 py-2.5 text-sm">
                      <dt className="font-medium">{dict.days[d]}</dt>
                      <dd className={h ? "text-end tabular-nums text-muted" : "text-muted/70"} dir={h ? "ltr" : undefined}>
                        {h ? h.map(([open, close]) => `${toTime(open)} – ${toTime(close)}`).join("  ·  ") : dict.closed}
                      </dd>
                    </div>
                  );
                })}
              </dl>
            </div>

            <div className={card}>
              <p className={label}>
                <PhoneIcon className="text-2xl text-accent" /> {dict.phones}
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  { label: dict.call, href: `tel:${site.phone.tel}`, value: site.phone.display, Icon: PhoneIcon },
                  { label: dict.whatsapp, href: site.whatsapp, value: site.phone.display, Icon: WhatsAppIcon },
                  { label: dict.email, href: `mailto:${site.email}`, value: site.email, Icon: MailIcon },
                ].map(({ label, href, value, Icon }) => (
                  <li key={label} className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
                    <span className="flex items-center gap-2 text-sm text-muted">
                      <Icon className="text-base" /> {label}
                    </span>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      dir="ltr"
                      className="min-w-0 break-all font-semibold tabular-nums text-accent underline-offset-4 hover:underline"
                    >
                      {value}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="min-h-[24rem] overflow-hidden rounded-3xl border border-line bg-surface-2">
            <iframe
              title={dict.mapTitle}
              src={site.mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="size-full min-h-[24rem] border-0 dark:opacity-90 dark:[filter:invert(0.9)_hue-rotate(180deg)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
