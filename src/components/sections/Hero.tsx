import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';

// Canvas-based still frame — draws a single video frame to a <canvas>.
// Bypasses all iOS Safari video-display restrictions: canvas.drawImage()
// works reliably even when <video> refuses to render.
function CarStill({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const video = document.createElement('video');
    video.muted = true;
    video.playsInline = true;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('preload', 'auto');
    video.src = import.meta.env.BASE_URL + 'intro.mp4';

    let disposed = false;

    const drawFrame = () => {
      if (disposed) return;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(video, 0, 0);
        setReady(true);
      }
    };

    const onSeeked = () => drawFrame();

    const startSeek = () => {
      if (disposed) return;
      video.removeEventListener('canplay', startSeek);
      video.pause();
      video.currentTime = 0.9;
    };

    video.addEventListener('seeked', onSeeked, { once: true });
    video.addEventListener('canplay', startSeek, { once: true });

    // Force iOS to actually decode: play() is allowed for muted inline video
    video.load();
    const p = video.play();
    if (p) p.catch(() => { startSeek(); });

    return () => {
      disposed = true;
      video.removeEventListener('seeked', onSeeked);
      video.removeEventListener('canplay', startSeek);
      video.pause();
      video.removeAttribute('src');
      video.load();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
      style={{ opacity: ready ? 1 : 0, transition: 'opacity 0.4s' }}
    />
  );
}

export function Hero() {
  const reduce = useReducedMotion();

  // Lav amount-terskel: linjene er nedforskjøvet inne i en overflow-hidden-maske,
  // så bare en liten del av boksen er synlig før animasjonen starter.
  const up = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 36 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.1 },
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden bg-background">
      {/* Bil-visual til høyre, blendet inn mot bakgrunnen som i referansen */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[62%] lg:block">
        <CarStill className="h-full w-full object-cover opacity-90 [mask-image:linear-gradient(to_right,transparent_0%,black_38%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1400px] px-6 pt-28 lg:px-12">
        <div className="max-w-3xl">
          <h1 className="text-[clamp(2.6rem,6.2vw,5.2rem)] font-extralight uppercase leading-[1.06] tracking-[0.04em] text-foreground">
            <span className="block overflow-hidden">
              <motion.span className="block" {...up(0)}>
                Kjør trygt,
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span className="block" {...up(0.12)}>
                kjør <em className="font-extralight italic text-muted">lenge</em>
              </motion.span>
            </span>
          </h1>

          <motion.div
            className="mt-10 grid max-w-xl grid-cols-1 gap-8 sm:grid-cols-2"
            {...up(0.28)}
          >
            <p className="text-[13px] leading-relaxed text-muted">
              Bilelektrisk spesialist siden 1973. Service, EU-kontroll og reparasjoner på alle
              bilmerker, med fast pris og ærlige råd.
            </p>
            <p className="text-[13px] leading-relaxed text-muted">
              Eget delelager i Stavanger med alt fra batterier og startmotorer til deler for båt og
              marine.
            </p>
          </motion.div>

          <motion.div className="mt-10" {...up(0.4)}>
            <Link
              to="/tjenester/bestill-verkstedtime"
              className="inline-block border border-foreground/70 px-10 py-4 text-xs uppercase tracking-[0.26em] text-foreground transition-colors duration-300 hover:bg-foreground hover:text-background active:translate-y-px"
            >
              Bestill time
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bil-visual på mobil/tablet: object-contain viser hele bilen uten å klippe */}
      <motion.div className="pointer-events-none relative mt-8 w-full lg:hidden" {...up(0.45)}>
        <CarStill className="aspect-[16/9] w-full object-contain opacity-90 [mask-image:linear-gradient(to_bottom,transparent_0%,black_18%,black_84%,transparent_100%)]" />
      </motion.div>

    </section>
  );
}
