import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { services } from '@/data/services';
import { ImageSlot } from '@/components/ImageSlot';
import { Reveal } from '@/components/Reveal';

/**
 * Tjenestegrid: første tjeneste får en stor celle med bildeplass,
 * resten ligger i et stramt rutenett med hårlinjer.
 */
export function ServicesGrid() {
  const reduce = useReducedMotion();
  const [featured, ...rest] = services;

  return (
    <section className="border-t border-line bg-background">
      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12">
        <Reveal>
          <h2 className="max-w-xl text-[clamp(1.9rem,3.6vw,3rem)] font-extralight uppercase leading-[1.1] tracking-[0.03em] text-foreground">
            Våre tjenester
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px bg-line lg:grid-cols-3">
          {/* Stor celle med bildeplass */}
          <Link
            to={`/tjenester/${featured.slug}`}
            className="group relative bg-background p-8 transition-colors duration-500 hover:bg-surface lg:row-span-2 lg:p-10"
          >
            <ImageSlot label="El-bil i verkstedhall" className="mb-8 aspect-[4/3] w-full" />
            <h3 className="text-xl font-light text-foreground">{featured.title}</h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">{featured.short}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-foreground">
              Bestill time
              <ArrowRight
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </span>
          </Link>

          {rest.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="bg-background"
            >
              <Link
                to={`/tjenester/${s.slug}`}
                className="group flex h-full flex-col justify-between p-8 transition-colors duration-500 hover:bg-surface"
              >
                <div>
                  <h3 className="text-base font-light text-foreground">{s.title}</h3>
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
