export interface Article {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  /** Eksempelinnhold. Erstattes av kundens egne artikler (f.eks. fra WordPress). */
  body: string[];
}

export const articles: Article[] = [
  {
    slug: 'slik-forbereder-du-bilen-til-eu-kontroll',
    title: 'Slik forbereder du bilen til EU-kontroll',
    date: '2026-05-12',
    excerpt:
      'En rask gjennomgang hjemme kan spare deg for etterkontroll. Her er punktene vi anbefaler å sjekke før du kommer til oss.',
    body: [
      'Dette er en eksempelartikkel. Kundens egne artikler legges inn her.',
      'Mange biler får anmerkning på enkle ting som lyspærer, vindusviskere og refleksvest. En kjapp sjekk hjemme i carporten tar ti minutter og kan spare deg for en ekstra tur til verkstedet.',
      'Se vår fullstendige sjekkliste på siden for EU-kontroll, eller ta kontakt om du er usikker.',
    ],
  },
  {
    slug: 'klimaservice-for-sommeren',
    title: 'Derfor bør du ta klimaservice før sommeren',
    date: '2026-04-02',
    excerpt:
      'Et klimaanlegg mister gradvis effekt uten at du merker det. Vi forklarer hva en AC-service innebærer og hvorfor våren er riktig tidspunkt.',
    body: [
      'Dette er en eksempelartikkel. Kundens egne artikler legges inn her.',
      'Klimaanlegget mister typisk noen prosent kjølemedium i året. Resultatet er dårligere kjøling, mer dugg på rutene og høyere belastning på kompressoren.',
      'En AC-service hos oss inkluderer kontroll av trykk, lekkasjetest og etterfylling av kjølemedium.',
    ],
  },
  {
    slug: 'vinterklar-bil-batteritips',
    title: 'Vinterklar bil: batteritips fra verkstedet',
    date: '2026-01-15',
    excerpt:
      'Startvansker på kalde morgener skyldes som regel batteriet. Slik ser du tegnene før det stopper helt.',
    body: [
      'Dette er en eksempelartikkel. Kundens egne artikler legges inn her.',
      'Et bilbatteri varer normalt fire til seks år. Treg start, svakt lys på tomgang og varsellamper er tidlige tegn på at batteriet eller ladesystemet trenger en kontroll.',
      'Vi tester batteri, startmotor og dynamo mens du venter.',
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
