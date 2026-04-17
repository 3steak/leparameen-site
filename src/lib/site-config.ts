export const siteConfig = {
  name: "Le Parameen",
  tagline: "Kebab à emporter à Saint-Malo - Paramé",
  description:
    "Le Parameen est un kebab à emporter à Saint-Malo - Paramé. Appelez pour commander par téléphone, puis retirez votre commande au 3 rue Gustave Flaubert.",
  address: {
    street: "3 rue Gustave Flaubert",
    postalCode: "35400",
    city: "Saint-Malo",
    district: "Paramé",
    country: "FR",
  },
  instagramUrl: "https://www.instagram.com/le_parameen/",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=3%20rue%20Gustave%20Flaubert%2C%2035400%20Saint-Malo",
  mapEmbedUrl:
    "https://www.google.com/maps?q=3%20rue%20Gustave%20Flaubert%2C%2035400%20Saint-Malo&output=embed",
  googleReviewsUrl:
    "https://share.google/06OUiW8rS60vdZPnN",
  phone: {
    label: "02 23 15 36 53",
    href: "tel:+33223153653",
  },
  openingHoursStatus: "Horaires provisoires à confirmer",
} as const;

export type ConversionEvent = "call_click" | "directions_click" | "instagram_click";
