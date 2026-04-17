import { Section } from "@/components/layout/section";
import { ClockIcon, MapPinIcon, PhoneIcon } from "@/components/ui/icons";
import { TrackedLink } from "@/components/tracking/tracked-link";
import { siteConfig } from "@/lib/site-config";

const openingHours = [
  "Lundi à jeudi : 11h30-14h / 18h30-21h",
  "Vendredi : 11h30-14h / 18h30-21h30",
  "Samedi : 18h30-21h30",
  "Dimanche : fermé",
];

export function InfoSection() {
  return (
    <Section id="infos" eyebrow="Infos pratiques" title="Retrait au restaurant">
      <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <MapPinIcon className="h-6 w-6 text-[var(--brand)]" />
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--brand)]">
              Adresse
            </p>
          </div>
          <p className="mt-3 text-xl font-black text-[var(--ink)]">
            {siteConfig.address.street}, {siteConfig.address.postalCode}{" "}
            {siteConfig.address.city}
          </p>
          <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
            À emporter uniquement. Commande par téléphone au{" "}
            {siteConfig.phone.label}.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <TrackedLink
              href={siteConfig.phone.href}
              eventName="call_click"
              eventLabel="infos_call"
              className="btn btn-primary"
            >
              <PhoneIcon className="h-5 w-5" />
              Appeler
            </TrackedLink>
            <TrackedLink
              href={siteConfig.mapsUrl}
              eventName="directions_click"
              eventLabel="infos_directions"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              <MapPinIcon className="h-5 w-5" />
              Itinéraire
            </TrackedLink>
          </div>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <ClockIcon className="h-6 w-6 text-[var(--brand)]" />
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--brand)]">
              Horaires provisoires
            </p>
          </div>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-[var(--muted)]">
            {openingHours.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-4 text-sm font-semibold text-[var(--accent)]">
            {siteConfig.openingHoursStatus}.
          </p>
        </div>
      </div>
      <div className="mt-4 overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)] shadow-sm">
        <iframe
          title="Carte vers Le Parameen, 3 rue Gustave Flaubert à Saint-Malo"
          src={siteConfig.mapEmbedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-72 w-full border-0 sm:h-80"
        />
      </div>
    </Section>
  );
}
