import Image from "next/image";
import { Container } from "@/components/layout/container";

const storefrontImageUrl = "/images/parameen-facade.jpg";

export function StorefrontSection() {
  return (
    <section className="py-8 sm:py-10">
      <Container>
        <figure className="overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)] shadow-md">
          <div className="relative aspect-[5/4] overflow-hidden">
            <Image
              src={storefrontImageUrl}
              alt="Façade du restaurant Le Parameen à Paramé"
              fill
              priority
              sizes="(min-width: 1024px) 1152px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[rgba(23,21,18,0.08)]" />
          </div>
        </figure>
      </Container>
    </section>
  );
}
