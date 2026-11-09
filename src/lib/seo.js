import React from 'react';

export const SITE_URL = 'https://amadeomedia.com';
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

// Zwraca tablicę tagów do wstawienia w <Head> (next/head nie obsługuje własnych komponentów).
export const seoTags = ({ title, description, path = '/' }) => {
  const url = `${SITE_URL}${path === '/' ? '' : path}`;
  return [
    <link rel="canonical" href={url} key="canonical" />,
    <meta property="og:type" content="website" key="og:type" />,
    <meta property="og:site_name" content="Amadeo Media" key="og:site_name" />,
    <meta property="og:locale" content="pl_PL" key="og:locale" />,
    <meta property="og:url" content={url} key="og:url" />,
    <meta property="og:title" content={title} key="og:title" />,
    <meta
      property="og:description"
      content={description}
      key="og:description"
    />,
    <meta property="og:image" content={OG_IMAGE} key="og:image" />,
    <meta property="og:image:width" content="1200" key="og:image:width" />,
    <meta property="og:image:height" content="630" key="og:image:height" />,
    <meta
      name="twitter:card"
      content="summary_large_image"
      key="twitter:card"
    />,
    <meta name="twitter:title" content={title} key="twitter:title" />,
    <meta
      name="twitter:description"
      content={description}
      key="twitter:description"
    />,
    <meta name="twitter:image" content={OG_IMAGE} key="twitter:image" />,
  ];
};

export const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}/#business`,
  name: 'Amadeo Media',
  founder: { '@type': 'Person', name: 'Amadeusz Grzesiak' },
  url: SITE_URL,
  image: `${SITE_URL}/og-image.jpg`,
  telephone: '+48 796 536 228',
  email: 'grzesiak.amadeusz@gmail.com',
  taxID: '6131583985',
  description:
    'Strony internetowe, sklepy, pozycjonowanie, administrowanie stronami i automatyzacje AI dla firm.',
  areaServed: ['Lubań', 'Dolny Śląsk', 'Polska'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'plac Śląski',
    postalCode: '59-800',
    addressLocality: 'Lubań',
    addressCountry: 'PL',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '15',
  },
};
