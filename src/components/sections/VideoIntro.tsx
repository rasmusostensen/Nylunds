import { useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function VideoIntro() {
  const trackRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // React doesn't reliably set the muted attribute on <video> elements.
  // This ref callback forces it directly on the DOM node, which is required
  // for iOS Safari to allow autoplay.
  const setVideoRef = useCallback((node: HTMLVideoElement | null) => {
    if (node) {
      node.muted = true;
      node.setAttribute('muted', '');
      node.setAttribute('playsinline', '');
      node.setAttribute('autoplay', '');
    }
    (videoRef as React.MutableRefObject<HTMLVideoElement | null>).current = node;
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    const video = videoRef.current;
    const overlay = overlayRef.current;
    if (!track || !video || !overlay) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      track.style.height = '100dvh';
      const setFrame = () => { video.currentTime = 1.2; };
      video.addEventListener('loadedmetadata', setFrame);
      return () => video.removeEventListener('loadedmetadata', setFrame);
    }

    let target = 0;
    let current = 0;
    let raf = 0;
    let duration = 0;

    const onMeta = () => { duration = video.duration; };
    video.addEventListener('loadedmetadata', onMeta);
    if (video.readyState >= 1) onMeta();

    // Force iOS Safari to decode video frames by playing then immediately pausing.
    // The autoplay attribute + muted attribute (set via ref callback) should allow this.
    const forceLoad = () => {
      video.muted = true;
      const p = video.play();
      if (p) {
        p.then(() => {
          video.pause();
          video.currentTime = 0;
        }).catch(() => {});
      }
    };
    if (video.readyState >= 2) {
      forceLoad();
    } else {
      video.addEventListener('canplay', forceLoad, { once: true });
    }

    const ctx = gsap.context(() => {
      gsap.to({}, {
        scrollTrigger: {
          trigger: track,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
          onUpdate: (self) => {
            if (duration) target = self.progress * (duration - 0.05);
            const fade = Math.max(0, 1 - self.progress * 4);
            overlay.style.opacity = String(fade);
          },
        },
      });
    }, track);

    const tick = () => {
      if (duration) {
        current += (target - current) * 0.12;
        if (Math.abs(video.currentTime - current) > 0.015) {
          video.currentTime = current;
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      video.removeEventListener('loadedmetadata', onMeta);
      video.removeEventListener('canplay', forceLoad);
      ctx.revert();
    };
  }, []);

  return (
    <div ref={trackRef} className="relative h-[320vh]">
      <div className="sticky top-0 h-[100dvh] overflow-hidden">
        <video
          ref={setVideoRef}
          src={import.meta.env.BASE_URL + 'intro.mp4'}
          muted
          playsInline
          autoPlay
          preload="auto"
          className="h-full w-full object-cover"
          aria-hidden="true"
        />
        {/* Mørk vignett som binder videoen til resten av siden */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(11,11,12,0.55)_100%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />

        <div
          ref={overlayRef}
          className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center"
        >
          <p className="text-[clamp(2.6rem,8vw,6.5rem)] font-extralight uppercase tracking-[0.3em] text-foreground [text-indent:0.3em]">
            Nylunds
          </p>
          <p className="mt-3 text-[11px] uppercase tracking-[0.34em] text-muted">
            Bilelektrisk siden 1973
          </p>
        </div>
      </div>
    </div>
  );
}
