import { siteConfig } from "@/lib/site-config";

export function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: siteConfig.name,
    description: siteConfig.description,
    telephone: siteConfig.phone.label,
    servesCuisine: "Kebab",
    sameAs: [siteConfig.instagramUrl],
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      postalCode: siteConfig.address.postalCode,
      addressLocality: siteConfig.address.city,
      addressCountry: siteConfig.address.country,
    },
    areaServed: `${siteConfig.address.city} - ${siteConfig.address.district}`,
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Mode de service",
        value: "À emporter uniquement",
      },
      {
        "@type": "PropertyValue",
        name: "Commande",
        value: "Commande par téléphone uniquement, pas de commande en ligne",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
