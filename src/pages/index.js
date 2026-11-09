import React from 'react';
import Header from '../components/Header/Header';
import ClientsHome from '../components/Home/ClientsHome/ClientsHome';
import ContactHome from '../components/Home/ContactHome/ContactHome';
import AboutHome from '../components/Home/AboutHome/AboutHome';
import OfferHome from '../components/Home/OfferHome/OfferHome';
import PortfolioWrapper from '../components/Portfolio/PortfolioWrapper';
import 'animate.css/animate.min.css';
import Head from 'next/head';
import { seoTags, localBusinessJsonLd } from '../lib/seo';

const TITLE = 'Strony internetowe i sklepy dla firm w 5–14 dni | Amadeo Media';
const DESC =
  'Strony internetowe i sklepy dla firm, gotowe w 5–14 dni. Bezpłatna wycena dopasowana do Twojej firmy, optymalizacja pod Google i opieka po wdrożeniu. Zadzwoń: 796 536 228.';

if (typeof window !== 'undefined') {
  require('smooth-scroll')('a[href*="#"]');
}

const Home = () => {
  return (
    <div>
      <Head>
        <title>{TITLE}</title>
        <meta charSet="utf-8" />
        <meta
          name="keywords"
          content="strony internetowe,sklepy internetowe,strona dla firmy,strona www dla nowej firmy,lubań,wrocław,e-commerce,pozycjonowanie"
        />
        <meta name="author" content="Amadeusz Grzesiak" />
        <meta name="description" content={DESC} />
        {seoTags({ title: TITLE, description: DESC, path: '/' })}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </Head>
      <Header />
      <OfferHome />
      <PortfolioWrapper />
      <ClientsHome />
      <AboutHome />
      <ContactHome />
    </div>
  );
};

export default Home;
