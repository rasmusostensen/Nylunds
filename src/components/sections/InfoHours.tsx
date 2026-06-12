import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Phone } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { site } from '@/data/site';

/** Åpningstider og besøk: tre kolonner adskilt av hårlinjer, ingen kort. */
export function InfoHours() {
  return (
    <section className="border-t border-line bg-background">
      {/* Sommerstengt-varsel */}
      <div className="border-b border-line">
        <p className="mx-auto max-w-[1400px] px-6 py-4 text-center text-[11px] uppercase tracking-[0.28em] text-accent lg:px-12">
          {site.summerNotice}
        </p>
      </div>

      <div className="mx-auto grid max-w-[1400px] divide-y divide-line px-6 py-20 lg:grid-cols-3 lg:divide-x lg:divide-y-0 lg:px-12">
        <Reveal className="py-8 lg:py-2 lg:pr-12">
          <h2 className="text-lg font-medium text-foreground">Bestill verkstedtime</h2>
          <dl className="mt-6 space-y-3">
            {site.hours.workshop.map((h) => (
              <div key={h.days} className="flex items-baseline justify-between gap-6 text-sm">
                <dt className="text-muted">{h.days}</dt>
                <dd className="tabular-nums text-foreground">{h.time}</dd>
              </div>
            ))}
          </dl>
          <Link
            to="/tjenester/bestill-verkstedtime"
            className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-foreground transition-colors duration-300 hover:text-muted"
          >
            Bestill time
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </Link>
        </Reveal>

        <Reveal delay={0.1} className="py-8 lg:px-12 lg:py-2">
          <h2 className="text-lg font-medium text-foreground">Delebutikk</h2>
          <dl className="mt-6 space-y-3">
            {site.hours.shop.map((h) => (
              <div key={h.days} className="flex items-baseline justify-between gap-6 text-sm">
                <dt className="text-muted">{h.days}</dt>
                <dd className="tabular-nums text-foreground">{h.time}</dd>
              </div>
            ))}
          </dl>
          <Link
            to="/delebutikk"
            className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-foreground transition-colors duration-300 hover:text-muted"
          >
            Se delebutikken
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </Link>
        </Reveal>

        <Reveal delay={0.2} className="py-8 lg:py-2 lg:pl-12">
          <h2 className="text-lg font-medium text-foreground">Besøk oss</h2>
          <ul className="mt-6 space-y-3 text-sm">
            <li>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-3 text-foreground transition-colors duration-300 hover:text-muted"
              >
                <Phone className="h-4 w-4 text-muted" strokeWidth={1.5} />
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-foreground transition-colors duration-300 hover:text-muted"
              >
                <MapPin className="h-4 w-4 text-muted" strokeWidth={1.5} />
                {site.address}
              </a>
            </li>
          </ul>
          <p className="mt-8 text-sm text-muted">Velkommen!</p>
        </Reveal>
      </div>
    </section>
  );
}
