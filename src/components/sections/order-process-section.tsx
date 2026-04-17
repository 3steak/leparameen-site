import { Section } from "@/components/layout/section";
import { BagIcon, KebabIcon, PhoneIcon } from "@/components/ui/icons";

const steps = [
  {
    title: "1. Appelez le restaurant",
    text: "La commande se passe uniquement par téléphone au 02 23 15 36 53.",
    icon: PhoneIcon,
  },
  {
    title: "2. Jocelyne prépare",
    text: "Votre commande est préparée au restaurant, simplement, pour un retrait rapide.",
    icon: KebabIcon,
  },
  {
    title: "3. Vous retirez à Paramé",
    text: "Le retrait se fait au 3 rue Gustave Flaubert, à Saint-Malo - Paramé.",
    icon: BagIcon,
  },
];

export function OrderProcessSection() {
  return (
    <Section
      id="fonctionnement"
      eyebrow="Comment commander par téléphone"
      title="Par téléphone, puis retrait au restaurant"
      className="border-y border-[var(--border)] bg-[var(--soft)]"
    >
      <div className="grid gap-4 md:grid-cols-3">
        {steps.map((step) => (
          <article
            key={step.title}
            className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--brand)]"
          >
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-md border-2 border-[var(--ink)] bg-[var(--terracotta-soft)] text-[var(--brand-dark)] shadow-[4px_4px_0_var(--ochre)]">
              <step.icon className="h-9 w-9" />
            </div>
            <h3 className="text-lg font-bold">{step.title}</h3>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
              {step.text}
            </p>
          </article>
        ))}
      </div>
      <p className="mt-5 text-sm font-semibold text-[var(--brand)]">
        Pas de commande en ligne sur ce site.
      </p>
    </Section>
  );
}
