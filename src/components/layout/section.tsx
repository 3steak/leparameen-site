import type { ReactNode } from "react";
import { Container } from "@/components/layout/container";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
  className?: string;
  spacing?: "default" | "compact";
};

export function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
  spacing = "default",
}: SectionProps) {
  const spacingClass =
    spacing === "compact" ? "py-10 sm:py-14" : "py-14 sm:py-20";

  return (
    <section id={id} className={`${spacingClass} ${className}`}>
      <Container>
        <div className="max-w-2xl">
          {eyebrow ? (
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--brand)]">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-3xl font-extrabold tracking-normal text-[var(--foreground)] sm:text-4xl">
            {title}
          </h2>
        </div>
        <div className="mt-8">{children}</div>
      </Container>
    </section>
  );
}
