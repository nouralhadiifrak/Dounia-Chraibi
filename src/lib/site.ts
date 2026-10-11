// Practice details shown across the site. Edit here to update every page.

export const site = {
  name: "Dr Dounia Chraïbi",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  phone: { display: "06 74 06 91 42", tel: "+212674069142" },
  whatsapp: "https://wa.me/212674069142",
  email: "douniachraibi.op@gmail.com",
  address: {
    line1: "1er Étage, N° 4, Résidence Morjana",
    line2: "293, Bd Abdelmoumen",
    city: "Casablanca",
    postalCode: "20370",
    country: "MA",
  },
  geo: { lat: 33.5687155, lng: -7.6258364 },
  mapsUrl:
    "https://www.google.com/maps/place/Chra%C3%AFbi+Dounia+-+Orthophoniste+a+Casablanca+Abdelmoumen/@33.5632812,-7.6314527,4233m/data=!3m1!1e3!4m6!3m5!1s0x825e94ed286c0dad:0x261f13d722cca320!8m2!3d33.5687155!4d-7.6258364!16s%2Fg%2F11k4m1p2wr",
  mapsEmbedUrl: "https://www.google.com/maps?q=33.5687155,-7.6258364&z=17&output=embed",
};

// Placeholders until the real photos arrive: drop JPG/WebP files into
// /public/images and update the paths here.
export const gallery = [
  { src: "/images/portrait.svg", key: "portrait" },
  { src: "/images/cabinet-1.svg", key: "waiting" },
  { src: "/images/cabinet-2.svg", key: "office" },
  { src: "/images/cabinet-3.svg", key: "materials" },
  { src: "/images/cabinet-4.svg", key: "kids" },
] as const;

export type GalleryKey = (typeof gallery)[number]["key"];

// Verbatim Google reviews (originals, not translated). Each paragraph is
// rendered on its own line.
export const reviews = [
  {
    author: "Wakrim Wafaa",
    rating: 5,
    paragraphs: [
      "Je tiens à remercier chaleureusement l’orthophoniste Dounia Chraibi pour son travail remarquable avec mon fils. Elle travaille avec beaucoup d’amour, de sérieux et de professionnalisme, sans jamais négliger ses responsabilités. Elle exerce son métier avec passion, et cela se ressent clairement dans les progrès de mon enfant.",
      "Aujourd’hui, mon fils l’apprécie énormément, au point que toute la famille connaît désormais Dounia ! C’est une professionnelle compétente, attentive et à l’écoute, qui sait créer un climat de confiance aussi bien avec les enfants qu’avec les parents.",
      "Je la recommande vivement à toute personne à la recherche d’une orthophoniste engagée et bienveillante .",
      "حفظك الله بعينك التي لاتنام",
    ],
  },
  {
    author: "Sanaa Sl",
    rating: 5,
    paragraphs: [
      "3 séances pour l’instant et un très bon feeling 🙌",
      "Mon fils ado se sent écouté et en confiance. Avec vous, Mme Dounia, on ressent déjà un bon accompagnement et beaucoup de professionnalisme.",
      "Un avis du cœur, honnête et basé sur notre expérience, sans exagération ❤️🤍",
    ],
  },
  {
    author: "elghalmi imane",
    rating: 5,
    paragraphs: [
      "Très satisfaite du suivi de mon enfant avec cette orthophoniste. Elle est professionnelle, patiente et bienveillante. Grâce à son accompagnement, nous avons constaté de beaux progrès. Je la recommande vivement.",
    ],
  },
];
