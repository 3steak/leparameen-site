import Image from "next/image";
import { Container } from "@/components/layout/container";
import { TrackedLink } from "@/components/tracking/tracked-link";
import { InstagramIcon, MapPinIcon, PhoneIcon } from "@/components/ui/icons";
import { siteConfig } from "@/lib/site-config";

const callHref = siteConfig.phone.href ?? "#infos";
const storefrontImageUrl = "/images/parameen-facade.jpg";

export function HeroSection() {
  return (
    <section className="min-h-[92svh] border-b border-[var(--border)] py-5 sm:py-8">
      <Container className="flex min-h-[calc(92svh-2.5rem)] flex-col justify-between">
        <header className="flex items-center justify-between gap-4">
          <a href="#accueil" className="text-lg font-extrabold">
            Le Parameen
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-[var(--muted)] sm:flex">
            <a href="#fonctionnement">Comment faire</a>
            <a href="#menu">Menu</a>
            <a href="#infos">Infos</a>
            <a href="#avis">Avis</a>
          </nav>
        </header>

        <div
          id="accueil"
          className="grid gap-8 py-10 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center"
        >
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand-dark)]">
              {siteConfig.tagline}
            </p>
            <h1 className="text-5xl font-black leading-[0.98] tracking-normal text-[var(--ink)] sm:text-6xl lg:text-7xl">
              Le Parameen
            </h1>
            <p className="mt-3 max-w-xl text-2xl font-extrabold leading-8 text-[var(--brand)] sm:text-3xl">
              C'est Jocelyne qui régale.
            </p>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[var(--muted)]">
              Jocelyne vous accueille pour son nouveau kebab de quartier, au{" "}
              {siteConfig.address.street}. Ici, tout se fait simplement: vous
              appelez, on prépare, vous retirez au restaurant.
            </p>
            <div className="mt-5 inline-flex rounded-md border-2 border-[var(--ink)] bg-[var(--terracotta-soft)] px-4 py-2 text-sm font-black uppercase tracking-[0.08em] text-[var(--ink)] shadow-[4px_4px_0_var(--ink)]">
              À emporter uniquement
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <TrackedLink
                href={callHref}
                eventName="call_click"
                eventLabel="hero_call"
                className="btn btn-primary"
              >
                <PhoneIcon className="h-6 w-6 shrink-0" />
                Appeler pour commander
              </TrackedLink>
              <TrackedLink
                href={siteConfig.mapsUrl}
                eventName="directions_click"
                eventLabel="hero_directions"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                <MapPinIcon className="h-6 w-6 shrink-0" />
                Itinéraire
              </TrackedLink>
              <TrackedLink
                href={siteConfig.instagramUrl}
                eventName="instagram_click"
                eventLabel="hero_instagram"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                <InstagramIcon className="h-6 w-6 shrink-0" />
                Instagram
              </TrackedLink>
            </div>
            <p className="mt-3 text-sm text-[var(--muted)]">
              {siteConfig.phone.label}. Commande par téléphone uniquement, pas
              de commande en ligne.
            </p>
          </div>

          <div className="relative flex min-h-[26rem] items-end overflow-hidden rounded-lg border-2 border-[var(--ink)] bg-[var(--ink)] p-4 shadow-[10px_10px_0_var(--ochre)] sm:min-h-[30rem] lg:min-h-[32rem]">
            <Image
              src={storefrontImageUrl}
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 520px, 100vw"
              className="object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-[rgba(23,21,18,0.18)]" />
            <div className="relative max-w-sm rounded-md border border-white/25 bg-[rgba(255,250,241,0.88)] p-4 shadow-sm backdrop-blur-[2px] sm:p-5">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">
                Adresse et téléphone
              </p>
              <p className="mt-3 text-xl font-black leading-7 text-[var(--ink)] sm:text-2xl sm:leading-8">
                {siteConfig.address.street}
                <br />
                {siteConfig.address.postalCode} {siteConfig.address.city}
              </p>
              <p className="mt-4 text-2xl font-black text-[var(--brand)] sm:text-3xl">
                {siteConfig.phone.label}
              </p>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)] sm:text-base sm:leading-7">
                Un commerce de quartier à Paramé, pensé pour commander par
                téléphone et repartir avec son kebab.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
