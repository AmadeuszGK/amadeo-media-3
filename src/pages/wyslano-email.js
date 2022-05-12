import React from 'react';
import Helmet from 'react-helmet';
import Link from 'next/link';
import { withTrans } from '../i18n/withTrans';

const EmailSent = ({ t }) => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>404 - Amadeo Media</title>
      <meta
        name="keywords"
        content="strony internetowe,sklepy internetowe,front end developer,wrocław,lubań,e-commerce,grafika,tanio, tanie, grafik"
      />
      <meta name="author" content="Amadeusz Grzesiak" />
      <meta
        name="description"
        content="Zajmujemy się tworzeniem stron internetowych, sklepów (e-commerce), grafiką i nie tylko,
            sprawdź moją ofertę! Stwórzmy coś razem."
      />
      <html lang="pl-PL" />
    </Helmet>
    <div className="full-page" bis_skin_checked="1">
      <div className="container center">
        <h2 className="heading">{t('email.title')}</h2>
        <p className="text">
          {t('email.text')}
          <a href="tel:+48796536228" aria-label="phone">
            +48 796 536 228
          </a>
        </p>
        <div className="cta" bis_skin_checked="1">
          <Link href="/">
            <a className="btn">{t('email.back')}</a>
          </Link>
        </div>
      </div>
    </div>
  </>
);

export default withTrans(EmailSent);
