import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { site } from '@/data/site';

const nav = [
  { to: '/', label: 'Forside' },
  { to: '/tjenester', label: 'Våre tjenester' },
  { to: '/delebutikk', label: 'Delebutikk' },
  { to: '/artikler', label: 'Artikler' },
  { to: '/om-oss', label: 'Om oss' },
  { to: '/kontakt', label: 'Kontakt' },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-background">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-12">
        <div>
          <h3 className="mb-5 text-[11px] uppercase tracking-[0.22em] text-faint">Lokasjon</h3>
          <p className="text-sm leading-relaxed text-muted">
            Falcks gate 4,
            <br />
            4011 Stavanger
          </p>
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm text-foreground underline-offset-4 hover:underline"
          >
            <MapPin className="h-4 w-4" strokeWidth={1.5} />
            Åpne i Google Maps
          </a>
        </div>

        <div>
          <h3 className="mb-5 text-[11px] uppercase tracking-[0.22em] text-faint">Postadresse</h3>
          <p className="text-sm leading-relaxed text-muted">
            Postboks 225,
            <br />
            Forus 4066 Stavanger
          </p>
        </div>

        <div>
          <h3 className="mb-5 text-[11px] uppercase tracking-[0.22em] text-faint">
            Kontaktinformasjon
          </h3>
          <ul className="space-y-2 text-sm leading-relaxed text-muted">
            <li>
              Telefon:{' '}
              <a href={site.phoneHref} className="text-foreground hover:underline underline-offset-4">
                {site.phone}
              </a>
            </li>
            <li>Fax: {site.fax}</li>
            <li>
              E-post:{' '}
              <a
                href={`mailto:${site.email}`}
                className="text-foreground hover:underline underline-offset-4"
              >
                {site.email}
              </a>
            </li>
            <li>Org.nr: {site.orgnr}</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-[11px] uppercase tracking-[0.22em] text-faint">Navigasjon</h3>
          <ul className="space-y-2">
            {nav.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-sm text-muted transition-colors duration-300 hover:text-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-2 px-6 py-6 text-xs text-faint sm:flex-row sm:items-center sm:justify-between lg:px-12">
          <p>&copy; 2026 {site.name}</p>
          <p>
            Utviklet av{' '}
            <a
              href="https://rasmusostensen.github.io/Pixora/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors duration-300 hover:text-foreground"
            >
              Pixora
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
