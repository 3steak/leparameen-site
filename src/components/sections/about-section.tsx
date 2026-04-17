import { Section } from "@/components/layout/section";

export function AboutSection() {
  return (
    <Section id="a-propos" eyebrow="L'histoire" title="Jocelyne reprend Le Parameen">
      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <aside className="rounded-lg border-2 border-[var(--ink)] bg-[var(--terracotta-soft)] p-5 shadow-[6px_6px_0_var(--ink)]">
          <p className="text-sm font-black uppercase tracking-[0.14em] text-[var(--brand-dark)]">
            Nouvelle gérante
          </p>
          <p className="mt-3 text-3xl font-black leading-tight text-[var(--ink)]">
            Depuis le 21 juillet 2025
          </p>
          <p className="mt-4 text-base font-bold leading-7 text-[var(--brand-dark)]">
            C'est Jocelyne qui vous régale.
          </p>
        </aside>

        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm">
          <div className="space-y-4 text-base leading-8 text-[var(--muted)]">
            <p>
              Originaire de Bretagne, Jocelyne a 62 ans et elle est la nouvelle
              gérante du Kebab Le Parameen.
            </p>
            <p>
              Avant cette nouvelle aventure, elle tenait une crêperie à
              Rochebonne pendant 6 ans. Elle vous attend désormais à Paramé,
              avec une adresse simple, locale et à emporter uniquement.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
