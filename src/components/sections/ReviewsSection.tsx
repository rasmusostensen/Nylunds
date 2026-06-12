import { Star } from 'lucide-react';
import { ReviewSummaryCard } from '@/components/ui/card-2';
import { Reveal } from '@/components/Reveal';
import { reviews, type Review } from '@/data/reviews';

function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="flex w-[340px] shrink-0 flex-col justify-between border border-line bg-surface p-7 sm:w-[400px]">
      <div>
        <div className="flex gap-1" aria-hidden="true">
          {Array.from({ length: 5 }, (_, i) => (
            <Star key={i} className="h-3.5 w-3.5 text-foreground" fill="currentColor" strokeWidth={0} />
          ))}
        </div>
        <blockquote className="mt-5 text-sm leading-relaxed text-muted [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:5] overflow-hidden">
          {review.text}
        </blockquote>
      </div>
      <figcaption className="mt-6 text-xs uppercase tracking-[0.18em] text-faint">
        {review.author}
        {review.year ? `, ${review.year}` : ''}
      </figcaption>
    </figure>
  );
}

/**
 * Kundeanmeldelser: animert oppsummeringskort + to marquee-rader som
 * glir i hver sin retning. Pauser ved hover, statisk ved redusert bevegelse.
 */
export function ReviewsSection() {
  const half = Math.ceil(reviews.length / 2);
  const rowA = reviews.slice(0, half);
  const rowB = reviews.slice(half);

  return (
    <section className="overflow-hidden border-t border-line bg-background py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid items-end gap-12 lg:grid-cols-[1fr_auto]">
          <Reveal>
            <h2 className="max-w-xl text-[clamp(1.9rem,3.6vw,3rem)] font-extralight uppercase leading-[1.1] tracking-[0.03em] text-foreground">
              Hva kundene sier
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted">
              Tilbakemeldinger fra kunder i verksted og delebutikk.
            </p>
          </Reveal>
          <ReviewSummaryCard
            rating={4.9}
            reviewCount={reviews.length}
            summaryText="Basert på kunders tilbakemeldinger."
          />
        </div>
      </div>

      <div className="group/marquee mt-16 flex flex-col gap-5">
        <div className="marquee-row flex w-max gap-5 group-hover/marquee:[animation-play-state:paused]">
          {[...rowA, ...rowA].map((r, i) => (
            <ReviewCard key={`a-${i}`} review={r} />
          ))}
        </div>
        <div className="marquee-row marquee-reverse flex w-max gap-5 group-hover/marquee:[animation-play-state:paused]">
          {[...rowB, ...rowB].map((r, i) => (
            <ReviewCard key={`b-${i}`} review={r} />
          ))}
        </div>
      </div>
    </section>
  );
}
