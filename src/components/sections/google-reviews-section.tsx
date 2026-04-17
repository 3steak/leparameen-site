"use client";

import { useRef } from "react";
import { Section } from "@/components/layout/section";
import { StarIcon } from "@/components/ui/icons";
import { googleReviews } from "@/lib/reviews";

export function GoogleReviewsSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  function scrollReviews(direction: "previous" | "next") {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    const scrollAmount = Math.min(carousel.clientWidth * 0.9, 420);

    carousel.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  }

  return (
    <Section id="avis" eyebrow="Avis Google" title="Les avis du Parameen" spacing="compact">
      <div className="rounded-lg border-2 border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm sm:p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4 rounded-lg bg-[var(--terracotta-soft)] p-4 shadow-sm">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-[var(--ink)] text-[var(--ochre)] shadow-[3px_3px_0_var(--ochre)]">
              <StarIcon className="h-7 w-7 fill-[var(--ochre)]" />
            </div>
            <div>
              <p className="text-4xl font-black leading-none text-[var(--ink)]">
                {googleReviews.rating}/5
              </p>
              <p className="mt-1 text-sm font-bold text-[var(--brand-dark)]">
                {googleReviews.totalReviews} avis Google
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="hidden gap-2 sm:flex" aria-label="Navigation des avis">
              <button
                type="button"
                onClick={() => scrollReviews("previous")}
                className="flex h-11 w-11 items-center justify-center rounded-md border-2 border-[var(--border)] bg-white text-xl font-black text-[var(--ink)] transition hover:border-[var(--brand)]"
                aria-label="Avis précédent"
              >
                {"<"}
              </button>
              <button
                type="button"
                onClick={() => scrollReviews("next")}
                className="flex h-11 w-11 items-center justify-center rounded-md border-2 border-[var(--border)] bg-white text-xl font-black text-[var(--ink)] transition hover:border-[var(--brand)]"
                aria-label="Avis suivant"
              >
                {">"}
              </button>
            </div>
            <a
              href={googleReviews.reviewsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary sm:self-center"
            >
              <StarIcon className="h-5 w-5" />
              Voir les avis Google
            </a>
          </div>
        </div>

        <div className="relative mt-5">
          <div
            ref={carouselRef}
            className="scrollbar-none -mx-4 overflow-x-auto scroll-smooth px-4 pb-1 sm:-mx-5 sm:px-5"
          >
            <div className="flex snap-x snap-mandatory gap-3">
              {googleReviews.featuredReviews.map((review) => (
                <blockquote
                  key={`${review.author}-${review.age}`}
                  className="flex h-52 w-[82vw] shrink-0 snap-start flex-col rounded-lg border border-[var(--border)] bg-white p-4 shadow-sm ring-1 ring-black/0 transition hover:border-[var(--brand)] hover:ring-[var(--terracotta-soft)] sm:h-56 sm:w-[22rem] lg:w-[24rem]"
                >
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-black text-[var(--foreground)]">
                        {review.author}
                      </p>
                      <p className="text-xs font-bold text-[var(--accent)]">
                        {review.age}
                      </p>
                    </div>
                    <p className="shrink-0 rounded-full bg-[var(--terracotta-soft)] px-3 py-1 text-sm font-black text-[var(--brand-dark)]">
                      {review.rating}/5
                    </p>
                  </div>
                  <p className="line-clamp-6 whitespace-pre-line text-sm leading-6 text-[var(--muted)]">
                    {review.text}
                  </p>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
