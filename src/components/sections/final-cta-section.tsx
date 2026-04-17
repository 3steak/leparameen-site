import { Container } from "@/components/layout/container";
import { TrackedLink } from "@/components/tracking/tracked-link";
import { MapPinIcon, PhoneIcon } from "@/components/ui/icons";
import { siteConfig } from "@/lib/site-config";

const callHref = siteConfig.phone.href ?? "#infos";

export function FinalCtaSection() {
  return (
    <section id="contact" className="py-16 sm:py-20">
      <Container>
        <div className="rounded-lg border-2 border-[var(--ink)] bg-[var(--surface)] px-5 py-10 text-[var(--foreground)] shadow-[8px_8px_0_var(--ochre)] sm:px-8 sm:py-12">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--ochre)]">
            Contact
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-normal text-[var(--ink)] sm:text-4xl">
            Un kebab à emporter, simple et local, au coeur de Paramé.
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-[var(--muted)]">
            Appelez pour commander par téléphone, puis venez retirer votre
            commande au {siteConfig.address.street}.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <TrackedLink
              href={callHref}
              eventName="call_click"
              eventLabel="final_cta_call"
              className="btn btn-primary"
            >
              <PhoneIcon className="h-5 w-5" />
              Appeler pour commander
            </TrackedLink>
            <TrackedLink
              href={siteConfig.mapsUrl}
              eventName="directions_click"
              eventLabel="final_cta_directions"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              <MapPinIcon className="h-5 w-5" />
              Itinéraire
            </TrackedLink>
          </div>
          <p className="mt-4 text-sm font-semibold text-[var(--brand-dark)]">
            {siteConfig.phone.label}. Commande par téléphone uniquement, pas de
            commande en ligne.
          </p>
        </div>
      </Container>
    </section>
  );
}
