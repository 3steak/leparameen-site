import { Container } from "@/components/layout/container";
import { TrackedLink } from "@/components/tracking/tracked-link";
import {
  ClockIcon,
  InstagramIcon,
  MapPinIcon,
  PhoneIcon,
  StarIcon,
} from "@/components/ui/icons";
import { siteConfig } from "@/lib/site-config";

const callHref = siteConfig.phone.href ?? "#infos";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--ink)] py-8 text-white">
      <Container>
        <div className="grid gap-6 text-sm text-white/72 md:grid-cols-[1.1fr_0.9fr] md:items-start">
          <div>
            <p className="text-base font-black text-white">
              {siteConfig.name}
            </p>
            <p className="mt-2 max-w-xl leading-6">
              {siteConfig.tagline}. À emporter uniquement, avec commande par
              téléphone et retrait au restaurant.
            </p>
            <div className="mt-4 grid gap-3">
              <p className="flex items-start gap-2 leading-6">
                <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-[var(--ochre)]" />
                <span>
                  {siteConfig.address.street}, {siteConfig.address.postalCode}{" "}
                  {siteConfig.address.city}
                </span>
              </p>
              <p className="flex items-start gap-2 leading-6">
                <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-[var(--ochre)]" />
                <span>{siteConfig.openingHoursStatus}</span>
              </p>
            </div>
          </div>
          <nav
            aria-label="Liens utiles"
            className="grid gap-2 font-bold text-white sm:grid-cols-2"
          >
            <TrackedLink
              href={callHref}
              eventName="call_click"
              eventLabel="footer_call"
              className="flex items-center gap-2 rounded-md border border-white/15 px-3 py-3 transition hover:border-[var(--ochre)]"
            >
              <PhoneIcon className="h-5 w-5 text-[var(--ochre)]" />
              Appeler pour commander
            </TrackedLink>
            <TrackedLink
              href={siteConfig.mapsUrl}
              eventName="directions_click"
              eventLabel="footer_directions"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-md border border-white/15 px-3 py-3 transition hover:border-[var(--ochre)]"
            >
              <MapPinIcon className="h-5 w-5 text-[var(--ochre)]" />
              Itinéraire
            </TrackedLink>
            <TrackedLink
              href={siteConfig.instagramUrl}
              eventName="instagram_click"
              eventLabel="footer_instagram"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-md border border-white/15 px-3 py-3 transition hover:border-[var(--ochre)]"
            >
              <InstagramIcon className="h-5 w-5 text-[var(--ochre)]" />
              Instagram
            </TrackedLink>
            <a
              href={siteConfig.googleReviewsUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-md border border-white/15 px-3 py-3 transition hover:border-[var(--ochre)]"
            >
              <StarIcon className="h-5 w-5 text-[var(--ochre)]" />
              Avis Google
            </a>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
