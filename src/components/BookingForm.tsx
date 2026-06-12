import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import { site } from '@/data/site';
import { cn } from '@/lib/utils';

interface Field {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  placeholder?: string;
}

const bookingFields: Field[] = [
  { name: 'navn', label: 'Navn', required: true },
  { name: 'epost', label: 'E-post', type: 'email', required: true },
  { name: 'telefon', label: 'Telefon', type: 'tel', required: true },
  { name: 'tidspunkt', label: 'Ønsket tidspunkt', placeholder: 'F.eks. tirsdag etter kl. 12' },
  { name: 'regnr', label: 'Registreringsnummer' },
  { name: 'melding', label: 'Melding', textarea: true },
];

const contactFields: Field[] = [
  { name: 'navn', label: 'Navn', required: true },
  { name: 'epost', label: 'E-post', type: 'email', required: true },
  { name: 'telefon', label: 'Telefon', type: 'tel' },
  { name: 'emne', label: 'Emne' },
  { name: 'melding', label: 'Melding', textarea: true, required: true },
];

interface BookingFormProps {
  variant?: 'booking' | 'contact';
  className?: string;
}

/**
 * Skjema for timebestilling og kontakt. Innsending er en demo-bekreftelse;
 * kobles til e-post/skjematjeneste når siden settes i produksjon.
 */
export function BookingForm({ variant = 'booking', className }: BookingFormProps) {
  const [sent, setSent] = useState(false);
  const fields = variant === 'booking' ? bookingFields : contactFields;

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className={cn('relative', className)}>
      {variant === 'booking' && (
        <p className="mb-8 text-sm text-muted">Obs! Merk at tidspunkt må bekreftes av oss.</p>
      )}

      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="border border-line bg-surface p-10 text-center"
            role="status"
          >
            <span className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-foreground/30">
              <Check className="h-5 w-5 text-foreground" strokeWidth={1.5} />
            </span>
            <h3 className="text-lg font-medium text-foreground">Takk for henvendelsen</h3>
            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted">
              Vi svarer så raskt vi kan. Husk at tidspunkt først gjelder når det er bekreftet av
              oss.
            </p>
            <button
              type="button"
              onClick={() => setSent(false)}
              className="mt-6 text-xs uppercase tracking-[0.18em] text-muted underline-offset-4 hover:text-foreground hover:underline"
            >
              Send en ny melding
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={onSubmit}
            initial={false}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid gap-6 sm:grid-cols-2"
          >
            {fields.map((f) => (
              <div key={f.name} className={cn('flex flex-col gap-2', f.textarea && 'sm:col-span-2')}>
                <label
                  htmlFor={`${variant}-${f.name}`}
                  className="text-[11px] uppercase tracking-[0.18em] text-muted"
                >
                  {f.label}
                  {f.required && <span aria-hidden="true"> *</span>}
                </label>
                {f.textarea ? (
                  <textarea
                    id={`${variant}-${f.name}`}
                    name={f.name}
                    required={f.required}
                    rows={5}
                    className="border border-line bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors duration-300 placeholder:text-faint focus:border-foreground/40"
                  />
                ) : (
                  <input
                    id={`${variant}-${f.name}`}
                    name={f.name}
                    type={f.type ?? 'text'}
                    required={f.required}
                    placeholder={f.placeholder}
                    className="h-12 border border-line bg-surface px-4 text-sm text-foreground outline-none transition-colors duration-300 placeholder:text-faint focus:border-foreground/40"
                  />
                )}
              </div>
            ))}

            <div className="sm:col-span-2">
              <button
                type="submit"
                className="h-12 w-full border border-foreground/80 px-10 text-xs uppercase tracking-[0.22em] text-foreground transition-colors duration-300 hover:bg-foreground hover:text-background active:translate-y-px sm:w-auto"
              >
                {variant === 'booking' ? 'Send bestilling' : 'Send melding'}
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>

      {variant === 'booking' && !sent && (
        <div className="mt-10 border-t border-line pt-6">
          <h4 className="text-sm font-medium text-foreground">Haster det?</h4>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
            Vi gjør vårt ytterste for å svare så raskt som mulig. Dersom det gjelder timebestilling
            innen de neste 24 t, eller andre hastesaker, vennligst ring oss på{' '}
            <a href={site.phoneHref} className="text-foreground underline-offset-4 hover:underline">
              {site.phone}
            </a>
            .
          </p>
        </div>
      )}
    </div>
  );
}
