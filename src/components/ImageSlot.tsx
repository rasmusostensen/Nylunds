import { ImageIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ImageSlotProps {
  /** Hva slags bilde kunden skal legge inn her, f.eks. "Bil i verkstedhall". */
  label: string;
  className?: string;
}

/**
 * Tom bildeplass. Kunden eller Pixora legger inn ekte bilder senere;
 * plassen holder layouten og viser diskret hva som skal inn.
 */
export function ImageSlot({ label, className }: ImageSlotProps) {
  return (
    <div
      className={cn(
        'relative flex items-center justify-center overflow-hidden',
        'bg-[radial-gradient(ellipse_at_center,#1a1a1d_0%,#0e0e10_70%)]',
        'border border-line',
        className
      )}
      role="img"
      aria-label={`Bildeplass: ${label}`}
    >
      <div className="flex flex-col items-center gap-3 text-faint">
        <ImageIcon className="h-6 w-6" strokeWidth={1.5} />
        <span className="text-[11px] uppercase tracking-[0.18em]">{label}</span>
      </div>
    </div>
  );
}
