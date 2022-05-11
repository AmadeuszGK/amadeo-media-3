import React from 'react';
import Header from '../components/Header/Header';
import ClientsHome from '../components/Home/ClientsHome/ClientsHome';
import ContactHome from '../components/Home/ContactHome/ContactHome';
import AboutHome from '../components/Home/AboutHome/AboutHome';
import OfferHome from '../components/Home/OfferHome/OfferHome';
import PortfolioWrapper from '../components/Portfolio/PortfolioWrapper';
import 'animate.css/animate.min.css';
import Helmet from 'react-helmet';

if (typeof window !== 'undefined') {
  require('smooth-scroll')('a[href*="#"]');
}

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Amadeo Media - strony internetowe, sklepy e-commerce, grafika
        </title>
        <meta
          name="keywords"
          content="strony internetowe,sklepy internetowe,front end developer,wrocław,lubań,e-commerce,grafika,tanio, tanie, grafik"
        />
        <meta name="author" content="Amadeusz Grzesiak" />
        <meta
          name="description"
          content="Zajmujemy się tworzeniem stron internetowych, sklepów (e-commerce), grafiką i nie tylko,
            sprawdź naszą ofertę! Stwórzmy coś razem."
        />
        <html lang="pl-PL" />
      </Helmet>
      <Header />
      <AboutHome />
      <OfferHome />
      <PortfolioWrapper />
      <ClientsHome />
      <ContactHome />
    </div>
  );
};

export default Home;
