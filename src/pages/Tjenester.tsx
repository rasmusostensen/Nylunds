import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { services } from '@/data/services';

export function Tjenester() {
  return (
    <div className="pb-24">
      <PageHeader
        title="Våre tjenester"
        intro="Vårt verksted utfører EU-kontroll, reparasjon og vedlikehold av kjøretøy. Velg en tjeneste for mer informasjon og timebestilling."
      />
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 4) * 0.06} className="bg-background">
              <Link
                to={`/tjenester/${s.slug}`}
                className="group flex h-full flex-col justify-between p-8 transition-colors duration-500 hover:bg-surface"
              >
                <div>
                  <h2 className="text-base font-light text-foreground">{s.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{s.short}</p>
                </div>
                <span className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-foreground">
                  Bestill time
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
