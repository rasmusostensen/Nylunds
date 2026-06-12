import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { BookingForm } from '@/components/BookingForm';
import { ImageSlot } from '@/components/ImageSlot';

const stats = [
  { value: '1973', label: 'Startet av Ingebrigt Nylund' },
  { value: '8', label: 'Ansatte' },
  { value: '4', label: 'Mekanikere' },
  { value: '3', label: 'Administrasjon og delelager' },
];

export function OmOss() {
  return (
    <div className="pb-24">
      <PageHeader
        title="Om oss"
        intro="Informasjon om bedriften."
      />

      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <ImageSlot label="Verksted og ansatte" className="mb-10 aspect-[16/10] w-full" />
            <div className="max-w-2xl space-y-5 text-base leading-relaxed text-muted">
              <p>
                Nylunds Bilelektriske ble startet i 1973 av Ingebrigt Nylund, som forhandler av
                bilelektriske komponenter, med tilhørende verksted og lager.
              </p>
              <p>
                Foruten en periode under eierskap av Jahre Motor og Autoelektriske, har firmaet
                vært familieeid siden 1990.
              </p>
              <p>
                Vi er det eldste firmaet i området innen bilelektrisk med verksted, og ett av få
                med utstyr til å teste startere og dynamoer.
              </p>
              <p>
                Vi er per i dag 8 ansatte, hvorav en kundemottaker/daglig leder, 4 mekanikere og 3
                i administrasjon/delelager.
              </p>
            </div>
          </Reveal>

          <div>
            <div className="grid grid-cols-2 gap-px bg-line">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.08} className="bg-background p-8">
                  <p className="text-4xl font-extralight tracking-tight text-foreground">
                    {s.value}
                  </p>
                  <p className="mt-3 text-xs uppercase tracking-[0.16em] text-muted">{s.label}</p>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-16 border border-line p-8 lg:p-10">
              <h2 className="mb-8 text-xl font-light text-foreground">Kontakt oss</h2>
              <BookingForm variant="contact" />
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
