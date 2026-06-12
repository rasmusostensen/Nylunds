import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import { motion, animate, useReducedMotion, type Variants } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ReviewSummaryCardProps {
  /** The average rating value. */
  rating: number;
  /** The total number of reviews. */
  reviewCount: number;
  /** The maximum possible rating, used to render stars. */
  maxRating?: number;
  /** A descriptive summary text line. */
  summaryText: string;
  /** Optional class name for custom styling. */
  className?: string;
}

/**
 * A responsive and theme-adaptive card to display an animated rating summary.
 */
export const ReviewSummaryCard: React.FC<ReviewSummaryCardProps> = ({
  rating,
  reviewCount,
  maxRating = 5,
  summaryText,
  className,
}) => {
  const ratingRef = useRef<HTMLSpanElement>(null);
  const reviewCountRef = useRef<HTMLSpanElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) {
      if (ratingRef.current) ratingRef.current.textContent = rating.toFixed(1);
      if (reviewCountRef.current)
        reviewCountRef.current.textContent = new Intl.NumberFormat('nb-NO').format(reviewCount);
      return;
    }

    const ratingControl = animate(0, rating, {
      duration: 1.5,
      ease: 'easeOut',
      onUpdate(value) {
        if (ratingRef.current) {
          ratingRef.current.textContent = value.toFixed(1);
        }
      },
    });

    const reviewCountControl = animate(0, reviewCount, {
      duration: 1.5,
      ease: 'easeOut',
      onUpdate(value) {
        if (reviewCountRef.current) {
          reviewCountRef.current.textContent = new Intl.NumberFormat('nb-NO').format(
            Math.round(value)
          );
        }
      },
    });

    return () => {
      ratingControl.stop();
      reviewCountControl.stop();
    };
  }, [rating, reviewCount, reduceMotion]);

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const starVariants: Variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.2 + i * 0.1,
        duration: 0.4,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <motion.div
      className={cn(
        'w-full max-w-xs border border-line bg-surface p-8 text-center',
        'flex flex-col items-center justify-center',
        className
      )}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      aria-label={`Vurdering: ${rating} av ${maxRating} basert på ${reviewCount} anmeldelser.`}
    >
      <div className="flex items-center gap-1">
        {Array.from({ length: maxRating }, (_, i) => (
          <motion.div key={i} custom={i} variants={starVariants}>
            <Star
              className={cn(
                'h-6 w-6',
                rating >= i + 0.5 ? 'text-foreground' : 'text-faint'
              )}
              fill="currentColor"
            />
          </motion.div>
        ))}
      </div>

      <h2 className="mt-5 text-5xl font-light tracking-tight text-foreground">
        <span ref={ratingRef}>0.0</span>
      </h2>
      <p className="mt-1 text-sm uppercase tracking-[0.2em] text-muted">
        <span ref={reviewCountRef}>0</span> anmeldelser
      </p>

      <p className="mt-4 text-sm leading-relaxed text-muted">{summaryText}</p>
    </motion.div>
  );
};
