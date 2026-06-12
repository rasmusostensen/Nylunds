import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

/** Kort om-oss-blokk: stort årstall mot kort historie, lenke til hele historien. */
export function AboutTeaser() {
  return (
    <section className="border-t border-line bg-surface">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:px-12">
        <Reveal>
          <p className="text-[clamp(5rem,12vw,11rem)] font-extralight leading-none tracking-tight text-foreground">
            1973
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="max-w-lg text-base leading-relaxed text-muted">
            Nylunds Bilelektriske ble startet i 1973 av Ingebrigt Nylund. I dag er vi det eldste
            firmaet i området innen bilelektrisk med verksted, og ett av få med utstyr til å teste
            startere og dynamoer.
          </p>
          <Link
            to="/om-oss"
            className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-foreground transition-colors duration-300 hover:text-muted"
          >
            Les om oss
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
