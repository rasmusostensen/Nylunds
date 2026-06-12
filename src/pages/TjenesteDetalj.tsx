import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { BookingForm } from '@/components/BookingForm';
import { ImageSlot } from '@/components/ImageSlot';
import { getService } from '@/data/services';

export function TjenesteDetalj() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getService(slug) : undefined;

  if (!service) return <Navigate to="/tjenester" replace />;

  return (
    <div className="pb-24">
      <PageHeader title={service.title} intro={service.price} />

      <div className="mx-auto grid max-w-[1400px] gap-16 px-6 lg:grid-cols-[1.1fr_1fr] lg:px-12">
        <Reveal>
          {service.hasImageSlot && (
            <ImageSlot label={service.title} className="mb-10 aspect-[16/9] w-full" />
          )}

          <div className="space-y-5">
            {service.body.map((p, i) => (
              <p key={i} className="max-w-2xl text-base leading-relaxed text-muted">
                {p}
              </p>
            ))}
          </div>

          {service.checklist && (
            <div className="mt-12 border border-line bg-surface p-8">
              <h2 className="text-lg font-medium text-foreground">{service.checklist.heading}</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {service.checklist.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-foreground" strokeWidth={1.5} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <Link
            to="/tjenester"
            className="mt-12 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted transition-colors duration-300 hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.5} />
            Gå tilbake til alle tjenester
          </Link>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="border border-line p-8 lg:p-10">
            <h2 className="mb-2 text-xl font-light text-foreground">Bestill time</h2>
            <BookingForm variant="booking" />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
