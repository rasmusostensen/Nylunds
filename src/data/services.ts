export interface Service {
  slug: string;
  title: string;
  short: string;
  /** Avsnitt med brødtekst fra kundens eksisterende side. */
  body: string[];
  /** EU-kontrollens sjekkliste o.l. */
  checklist?: { heading: string; items: string[] };
  price?: string;
  hasImageSlot: boolean;
}

export const services: Service[] = [
  {
    slug: 'el-bil-service',
    title: 'El-bil service',
    short: 'Vi utfører service etter fabrikantens anbefalinger.',
    body: [
      'En el-bil trenger regelmessig service, akkurat som andre maskiner. Komponenter slites ut og går i stykker og forskjellige årstider krever sesongavhengige kontroller. Bilen skal følge serviceheftets anbefalinger om periodisk ettersyn for å forebygge feil.',
      'Foruten enklere bilservice, kan Nylunds også utføre hovedservice i henhold til serviceheftet.',
      'Arbeidet utføres i en servicehall som er utstyrt for formålet, og vi følger nøye bilprodusentenes anbefalinger for service og reparasjoner.',
    ],
    hasImageSlot: true,
  },
  {
    slug: 'service',
    title: 'Service',
    short: 'Vi utfører service etter fabrikantens anbefalinger.',
    body: [
      'En bil trenger regelmessig service, akkurat som andre maskiner. Komponenter slites ut og går i stykker, og forskjellige årstider krever sesongavhengige kontroller. Bilen skal følge serviceheftets anbefalinger om periodisk ettersyn for å forebygge feil.',
      'Foruten enklere bilservice, kan Nylunds også utføre hovedservice i henhold til serviceheftet.',
      'Arbeidet utføres i en servicehall som er utstyrt for formålet, og vi følger nøye bilprodusentenes anbefalinger for service og reparasjoner.',
    ],
    hasImageSlot: true,
  },
  {
    slug: 'ac-klima-service',
    title: 'AC/klima-service',
    short: 'Bilens klimaanlegg øker komforten og sikkerheten.',
    body: [
      'Bilens klimaanlegg øker komforten og sikkerheten. Trivsel i bilen, stabil temperatur og fuktighet påvirker bilførerens konsentrasjon og yteevne. Det er enkelt å bruke air conditioning systemet, men fort gjort å glemme at også dette trenger service for å fungere optimalt.',
    ],
    hasImageSlot: true,
  },
  {
    slug: 'eu-kontroll',
    title: 'EU-kontroll',
    short: 'EU-kontroll er en miljø- og sikkerhetskontroll som er pålagt alle bileiere.',
    price: 'Pris for EU-kontroll/periodisk kjøretøykontroll 1350,-',
    body: [
      'Målet med EU-kontrollen er å gi en tryggere og mer miljøvennlig bilpark.',
      'EU-kontroll er en miljø- og sikkerhetskontroll som er pålagt alle bileiere. Fra det året bilen fyller 4 år skal alle biler inn til kontroll hvert andre år. Bilen må tilfredsstille de offentlige kravene. Dersom feil på bilen må utbedres, skal bilen til etterkontroll for å oppfylle kravene.',
      'EU-kontroll er ingen kvalitetskontroll. Skal du kjøpe eller selge bil, er en tilstandsrapport å anbefale.',
    ],
    checklist: {
      heading: 'Sjekkliste før EU-kontrollen',
      items: [
        'Se at lyspærer virker og ikke har skader',
        'Sjekk at hornet virker',
        'Vindusviskerne skal virke i alle trinn og pusse rent',
        'Sidespeilene skal ikke være knust eller sprukket',
        'Sjekk at du har påbudt varseltrekant i bilen',
        'Alle sikkerhetsbeltene skal fungere',
        'Sjekk at alle hjulboltene er på plass',
        'Speedometeret må virke',
        'Ha vognkortet klart',
        'Ha en ren og ryddig bil',
        'Ha refleksvest i bilen lett tilgjengelig',
      ],
    },
    hasImageSlot: true,
  },
  {
    slug: 'diagnosekontroll',
    title: 'Diagnosekontroll',
    short: 'Når en ikke vet hva bilen feiler, kan diagnoseutstyr finne feilen.',
    body: [
      'Når en ikke vet hva bilen feiler, kan det være nødvendig å ta i bruk utstyr som kan diagnosere bilen din for å finne ut hva som kan være feil.',
      'Når feil er oppdaget kan vi hjelpe deg med å reparere bilen etter produsentens anbefalinger.',
    ],
    hasImageSlot: true,
  },
  {
    slug: 'batteri-og-lading',
    title: 'Kontroll av batteri og reparasjon av lading',
    short: 'Forebygg startvansker eller stopp som følge av batteri- eller ladefeil.',
    body: [
      'Forebygg startvansker eller stopp som følge av batteri- eller ladefeil i bilens ladesystem.',
    ],
    hasImageSlot: true,
  },
  {
    slug: 'feilsok-og-elektriske-reparasjoner',
    title: 'Feilsøk og elektriske reparasjoner',
    short: 'Rask feilsøking og diagnostisering av bilens elektriske system.',
    body: [
      'Rask feilsøking og diagnostisering av bilens elektriske system og elektronikk.',
    ],
    hasImageSlot: true,
  },
  {
    slug: 'bestill-verkstedtime',
    title: 'Bestill verkstedtime',
    short: 'Vårt verksted utfører EU-kontroll, reparasjon og vedlikehold av kjøretøy.',
    body: [
      'Vårt verksted utfører EU-kontroll, reparasjon og vedlikehold av kjøretøy.',
    ],
    hasImageSlot: false,
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
