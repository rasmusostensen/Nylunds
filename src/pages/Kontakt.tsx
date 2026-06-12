import { MapPin, Phone } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { BookingForm } from '@/components/BookingForm';
import { site } from '@/data/site';

export function Kontakt() {
  return (
    <div className="pb-24">
      <PageHeader title="Kontakt" intro="Ta turen innom vår butikk, ring oss eller send en melding." />

      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Pris-linje med rød aksent */}
        <Reveal>
          <p className="border-y border-line py-5 text-center text-sm uppercase tracking-[0.26em] text-accent">
            {site.euPrice}
          </p>
        </Reveal>

        {/* Åpningstider */}
        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-lg font-medium text-foreground">Delelager/butikk</h2>
            <dl className="mt-6 max-w-sm space-y-3">
              {site.hours.shop.map((h) => (
                <div key={h.days} className="flex items-baseline justify-between gap-6 text-sm">
                  <dt className="text-muted">{h.days}</dt>
                  <dd className="tabular-nums text-foreground">{h.time}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              Bestilling/forespørsel deler:{' '}
              <a
                href={`mailto:${site.orderEmail}`}
                className="text-foreground underline-offset-4 hover:underline"
              >
                {site.orderEmail}
              </a>
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-lg font-medium text-foreground">Verksted</h2>
            <dl className="mt-6 max-w-sm space-y-3">
              {site.hours.shop.map((h) => (
                <div key={h.days} className="flex items-baseline justify-between gap-6 text-sm">
                  <dt className="text-muted">{h.days}</dt>
                  <dd className="tabular-nums text-foreground">{h.time}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              Bestilling/forespørsel verksted:{' '}
              <a
                href={`mailto:${site.workshopEmail}`}
                className="text-foreground underline-offset-4 hover:underline"
              >
                {site.workshopEmail}
              </a>{' '}
              eller kontaktskjema under.
            </p>
          </Reveal>
        </div>

        {/* Kontaktinfo */}
        <Reveal className="mt-16 border-t border-line pt-12">
          <ul className="flex flex-col gap-4 text-sm sm:flex-row sm:items-center sm:gap-10">
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
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted">
            Spørsmål ang. faktura og økonomi kan sendes til{' '}
            <a
              href={`mailto:${site.invoiceEmail}`}
              className="text-foreground underline-offset-4 hover:underline"
            >
              {site.invoiceEmail}
            </a>
            .
          </p>
        </Reveal>

        {/* Butikk, engros og marine */}
        <div className="mt-16 grid divide-y divide-line border-t border-line pt-4 lg:grid-cols-3 lg:divide-x lg:divide-y-0 lg:pt-12">
          <Reveal className="py-8 lg:py-2 lg:pr-10">
            <h2 className="text-base font-medium text-foreground">Ta turen innom vår butikk</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Vi har godt utvalg av vinduspusserblader, oljer, kjemi, slitedeler og rekvisita.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="py-8 lg:px-10 lg:py-2">
            <h2 className="text-base font-medium text-foreground">Engros-avdeling</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Vi lagerfører en rekke produktlinjer for å betjene bilverksteder i fylket. Batteri,
              startmotor, dynamo, clutch, hjullager, reimer, tenningsdeler, bremser,
              forstilling/hjuloppheng og masse annet.
            </p>
          </Reveal>
          <Reveal delay={0.2} className="py-8 lg:py-2 lg:pl-10">
            <h2 className="text-base font-medium text-foreground">Båt / Marine</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Vi har et av distriktets beste lager på marine startere og dynamoer, samt godt utvalg
              i batterier og ladere, filtre og oljer for marinemotorer; både innen- og utenbords.
            </p>
          </Reveal>
        </div>

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
