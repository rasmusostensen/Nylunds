import { motion, useReducedMotion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  intro?: string;
}

/** Felles sidetopp for undersider: stor tynn uppercase-tittel med inngangsanimasjon. */
export function PageHeader({ title, intro }: PageHeaderProps) {
  const reduce = useReducedMotion();
  return (
    <div className="mx-auto max-w-[1400px] px-6 pb-16 pt-40 lg:px-12">
      <div className="overflow-hidden">
        <motion.h1
          initial={reduce ? false : { y: '100%' }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(2.4rem,5.4vw,4.4rem)] font-extralight uppercase leading-[1.08] tracking-[0.03em] text-foreground"
        >
          {title}
        </motion.h1>
      </div>
      {intro && (
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-muted"
        >
          {intro}
        </motion.p>
      )}
    </div>
  );
}
