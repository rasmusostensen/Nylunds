import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useReducedMotion } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';
import { site } from '@/data/site';
import { cn } from '@/lib/utils';

const links = [
  { to: '/', label: 'Forside' },
  { to: '/om-oss', label: 'Om oss' },
  { to: '/tjenester', label: 'Tjenester' },
  { to: '/delebutikk', label: 'Delebutikk' },
  { to: '/artikler', label: 'Artikler' },
  { to: '/kontakt', label: 'Kontakt' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const reduce = useReducedMotion();

  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 24));

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-500',
        scrolled || open
          ? 'bg-background/85 backdrop-blur-md border-b border-line'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-6 lg:px-12">
        <Link
          to="/"
          className="text-sm font-medium tracking-[0.42em] text-foreground"
          onClick={() => setOpen(false)}
        >
          NYLUNDS
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Hovedmeny">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                cn(
                  'text-[11px] uppercase tracking-[0.22em] transition-colors duration-300',
                  isActive ? 'text-foreground' : 'text-muted hover:text-foreground'
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-muted transition-colors duration-300 hover:text-foreground"
          >
            <Phone className="h-3.5 w-3.5" strokeWidth={1.5} />
            {site.phone}
          </a>
        </nav>

        <button
          type="button"
          className="text-foreground lg:hidden"
          aria-label={open ? 'Lukk meny' : 'Åpne meny'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" strokeWidth={1.5} /> : <Menu className="h-6 w-6" strokeWidth={1.5} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobilmeny"
            initial={reduce ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-line bg-background/95 backdrop-blur-md lg:hidden"
          >
            <div className="flex flex-col px-6 py-6">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={reduce ? false : { opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.35 }}
                >
                  <NavLink
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        'block py-3 text-sm uppercase tracking-[0.22em]',
                        isActive ? 'text-foreground' : 'text-muted'
                      )
                    }
                  >
                    {l.label}
                  </NavLink>
                </motion.div>
              ))}
              <a
                href={site.phoneHref}
                className="mt-4 flex items-center gap-2 border-t border-line pt-5 text-sm tracking-[0.12em] text-muted"
              >
                <Phone className="h-4 w-4" strokeWidth={1.5} />
                {site.phone}
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
