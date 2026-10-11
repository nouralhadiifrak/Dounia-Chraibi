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

// Photos of the practice. `position` is the focal point used when a photo is
// cropped to fit the frame.
export const gallery = [
  { src: "/images/portrait.webp", key: "portrait", position: "50% 25%" },
  { src: "/images/seance.webp", key: "session", position: "50% 50%" },
  { src: "/images/jeux.webp", key: "play", position: "50% 50%" },
  { src: "/images/materiel.webp", key: "materials", position: "50% 50%" },
  { src: "/images/bureau.webp", key: "office", position: "50% 50%" },
  { src: "/images/salle.webp", key: "room", position: "50% 60%" },
  { src: "/images/attente.webp", key: "waiting", position: "50% 50%" },
] as const;

export type GalleryKey = (typeof gallery)[number]["key"];

// TV and radio appearances, newest first. To show a channel's logo, add the
// file to /public/images/media and set `logo` (e.g. "/images/media/2m.png").
// `url` (optional) adds a button to watch or listen to the replay.
export const media: {
  outlet: string;
  kind: "tv" | "radio";
  show: "news" | "sabahiat" | "interview";
  date: string;
  logo?: string;
  url?: string;
}[] = [
  { outlet: "MFM Radio", kind: "radio", show: "interview", date: "2026-09-28", logo: "/images/media/mfm.png", url: "https://www.youtube.com/watch?v=UPo6AR9TNUU" },
  { outlet: "Medina FM", kind: "radio", show: "interview", date: "2026-06-15", logo: "/images/media/medinafm.png" },
  { outlet: "2M", kind: "tv", show: "news", date: "2023-10-25", logo: "/images/media/2m.png" },
  { outlet: "2M", kind: "tv", show: "sabahiat", date: "2023-10-17", logo: "/images/media/2m.png", url: "https://www.youtube.com/watch?v=gPwJRNdS0DY" },
];

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
