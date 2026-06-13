import { MapPin, Phone } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { BookingForm } from '@/components/BookingForm';
import { ImageSlot } from '@/components/ImageSlot';
import { site } from '@/data/site';

const departments = [
  {
    title: 'Butikk',
    text: 'Vi har godt utvalg av vinduspusserblader, oljer, kjemi, slitedeler og rekvisita.',
  },
  {
    title: 'Engros-avdeling',
    text: 'Vi lagerfører en rekke produktlinjer, blant annet batteri, startmotor, dynamo, clutch, hjullager, reimer/sett, tenningsdeler, bremsedeler, forstillingsdeler og masse annet.',
  },
  {
    title: 'Båt / Marine',
    text: 'Vi har et av distriktets beste lager på marine start og dynamo. Vi har et godt utvalg i batterier og ladere, samt filtre og oljer for marine motorer.',
  },
];

export function Delebutikk() {
  return (
    <div className="pb-24">
      <PageHeader
        title="Delebutikk"
        intro="Eget delelager i Stavanger for både privatkunder, verksteder og båtfolk. Ta turen innom vår butikk."
      />

      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Merkelogoer */}
        <Reveal>
          <div className="grid grid-cols-4 gap-4 sm:grid-cols-8">
            {['DAYCO', 'MAHLE', 'Mobil', 'OPTIMAL', 'NBS', 'EUROGLOBE', 'NGK', 'MANN FILTER'].map((brand) => (
              <ImageSlot key={brand} label={brand} className="aspect-[3/2]" />
            ))}
          </div>
        </Reveal>

        {/* Avdelinger */}
        <div className="mt-16 grid divide-y divide-line lg:grid-cols-3 lg:divide-x lg:divide-y-0">
          {departments.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.1} className="py-8 lg:px-10 lg:py-2 first:lg:pl-0 last:lg:pr-0">
              <h2 className="text-lg font-medium text-foreground">{d.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted">{d.text}</p>
            </Reveal>
          ))}
        </div>

        {/* Åpningstider og bestilling */}
        <Reveal className="mt-20 border-t border-line pt-16">
          <div>
            <h2 className="text-lg font-medium text-foreground">Generelle åpningstider</h2>
            <dl className="mt-6 max-w-sm space-y-3">
              {site.hours.shop.map((h) => (
                <div key={h.days} className="flex items-baseline justify-between gap-6 text-sm">
                  <dt className="text-muted">{h.days}</dt>
                  <dd className="tabular-nums text-foreground">{h.time}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-8 text-sm leading-relaxed text-muted">
              Bestilling/forespørsel deler:{' '}
              <a
                href={`mailto:${site.orderEmail}`}
                className="text-foreground underline-offset-4 hover:underline"
              >
                {site.orderEmail}
              </a>
            </p>
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
          </div>
        </Reveal>

        {/* Kontaktskjema */}
        <Reveal className="mt-20 border-t border-line pt-16">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 text-[clamp(1.6rem,3vw,2.4rem)] font-extralight uppercase tracking-[0.03em] text-foreground">
              Kontakt oss
            </h2>
            <BookingForm variant="contact" />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
