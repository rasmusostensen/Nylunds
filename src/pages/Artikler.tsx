import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { ImageSlot } from '@/components/ImageSlot';
import { articles } from '@/data/articles';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('nb-NO', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function Artikler() {
  return (
    <div className="pb-24">
      <PageHeader
        title="Artikler"
        intro="Nyttige råd og nyheter fra verkstedet. Innleggene under er eksempler som viser hvordan bloggen vil se ut."
      />
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid gap-px bg-line md:grid-cols-3">
          {articles.map((a, i) => (
            <Reveal key={a.slug} delay={i * 0.08} className="bg-background">
              <Link
                to={`/artikler/${a.slug}`}
                className="group flex h-full flex-col p-8 transition-colors duration-500 hover:bg-surface"
              >
                <ImageSlot label="Artikkelbilde" className="mb-7 aspect-[16/10] w-full" />
                <p className="text-xs uppercase tracking-[0.18em] text-faint">{formatDate(a.date)}</p>
                <h2 className="mt-3 text-lg font-light leading-snug text-foreground">{a.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{a.excerpt}</p>
                <span className="mt-7 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-foreground">
                  Les artikkelen
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                    strokeWidth={1.5}
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
