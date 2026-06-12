import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { ImageSlot } from '@/components/ImageSlot';
import { getArticle } from '@/data/articles';
import { motion, useReducedMotion } from 'framer-motion';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('nb-NO', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function Artikkel() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticle(slug) : undefined;
  const reduce = useReducedMotion();

  if (!article) return <Navigate to="/artikler" replace />;

  return (
    <div className="pb-24">
      <div className="mx-auto max-w-3xl px-6 pb-12 pt-40">
        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.18em] text-faint"
        >
          {formatDate(article.date)}
        </motion.p>
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 text-[clamp(1.9rem,4vw,3.2rem)] font-extralight leading-[1.15] text-foreground"
        >
          {article.title}
        </motion.h1>
      </div>

      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <ImageSlot label="Artikkelbilde" className="aspect-[16/9] w-full" />
        </Reveal>
        <div className="mt-10 space-y-6">
          {article.body.map((p, i) => (
            <p key={i} className="text-base leading-relaxed text-muted">
              {p}
            </p>
          ))}
        </div>
        <Link
          to="/artikler"
          className="mt-14 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted transition-colors duration-300 hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.5} />
          Alle artikler
        </Link>
      </div>
    </div>
  );
}
