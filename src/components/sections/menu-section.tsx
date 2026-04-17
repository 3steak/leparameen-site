import { Section } from "@/components/layout/section";
import { SauceIcon } from "@/components/ui/icons";
import { menuSections, sauces } from "@/lib/menu";

export function MenuSection() {
  return (
    <Section id="menu" eyebrow="Menu" title="La carte à emporter">
      <div className="grid gap-4 md:grid-cols-2">
        {menuSections.map((section) => (
          <article
            key={section.title}
            className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm"
          >
            <h3 className="border-b-2 border-[var(--terracotta-soft)] pb-3 text-xl font-black text-[var(--ink)]">
              {section.title}
            </h3>
            <ul className="mt-4 divide-y divide-[var(--border)]/70">
              {section.items.map((item) => (
                <li key={`${section.title}-${item.name}`} className="py-3 first:pt-0 last:pb-0">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="font-medium text-[var(--foreground)]">
                      {item.name}
                    </span>
                    <span className="shrink-0 rounded-md bg-[var(--terracotta-soft)] px-2 py-1 font-black text-[var(--brand-dark)]">
                      {item.price}
                    </span>
                  </div>
                  {item.detail ? (
                    <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                      {item.detail}
                    </p>
                  ) : null}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-4 rounded-lg border border-[var(--border)] bg-[var(--soft)] p-5">
        <div className="flex items-center gap-3">
          <span className="flex h-14 w-14 items-center justify-center rounded-md border-2 border-[var(--ink)] bg-[var(--brand)] text-white shadow-[4px_4px_0_var(--ochre)]">
            <SauceIcon className="h-8 w-8" />
          </span>
          <h3 className="text-xl font-black text-[var(--ink)]">Sauces</h3>
        </div>
        <ul className="mt-4 flex flex-wrap gap-2">
          {sauces.map((sauce) => (
            <li
              key={sauce}
              className="rounded-full border border-[var(--brand)]/25 bg-[var(--surface)] px-3 py-2 text-sm font-bold text-[var(--foreground)] shadow-sm"
            >
              {sauce}
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-5 text-sm leading-6 text-[var(--muted)]">
        Commande par téléphone uniquement. Aucune commande ne se fait sur le
        site.
      </p>
    </Section>
  );
}
