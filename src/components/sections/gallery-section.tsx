import Image from "next/image";
import { Section } from "@/components/layout/section";
import { galleryImages } from "@/lib/gallery";

export function GallerySection() {
  return (
    <Section id="galerie" eyebrow="Photos" title="Quelques images du Parameen" spacing="compact">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {galleryImages.map((image) => (
          <figure
            key={image.src}
            className="overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)] shadow-sm"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="border-t border-[var(--border)] px-4 py-3 text-sm font-bold text-[var(--foreground)]">
              {image.alt}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
