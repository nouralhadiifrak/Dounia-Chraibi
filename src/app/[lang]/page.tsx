import { notFound } from "next/navigation";
import { About } from "@/components/About";
import { Booking } from "@/components/Booking";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MobileActionBar } from "@/components/MobileActionBar";
import { Reviews } from "@/components/Reviews";
import { Services } from "@/components/Services";
import { hasLocale, intlLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { OPENING_HOURS, toTime } from "@/lib/schedule";
import { gallery, site } from "@/lib/site";

function JsonLd() {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: `${site.name} – Orthophoniste`,
    medicalSpecialty: "SpeechPathology",
    telephone: site.phone.tel,
    email: site.email,
    url: site.url,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.line1}, ${site.address.line2}`,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressCountry: site.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
    hasMap: site.mapsUrl,
    openingHoursSpecification: Object.entries(OPENING_HOURS).flatMap(([day, ranges]) =>
      (ranges ?? []).map(([open, close]) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: days[Number(day)],
        opens: toTime(open),
        closes: toTime(close),
      })),
    ),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <>
      <JsonLd />
      <Header lang={lang} dict={dict.nav} />
      <main>
        <Hero dict={dict.hero} portrait={gallery[0].src} />
        <About dict={dict.about} />
        <Services dict={dict.services} bookLabel={dict.nav.book} />
        <Gallery dict={dict.gallery} />
        <Reviews dict={dict.reviews} />
        <Booking dict={dict.booking} lang={lang} intlLocale={intlLocale[lang]} />
        <Contact dict={dict.contact} />
      </main>
      <Footer dict={dict.footer} nav={dict.nav} />
      <MobileActionBar dict={dict.nav} />
    </>
  );
}
