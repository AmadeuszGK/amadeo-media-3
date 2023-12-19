/* eslint-disable react/no-unknown-property */
import React from 'react';
import Helmet from 'react-helmet';
import Link from 'next/link';
import { withTrans } from '../i18n/withTrans';

const NotFoundPage = ({ t }) => (
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
        content="Zajmuję się tworzeniem stron internetowych, sklepów (e-commerce), grafiką i nie tylko,
            sprawdź moją ofertę! Stwórzmy coś razem."
      />
      <html lang="pl-PL" />
    </Helmet>
    <div className="full-page" bis_skin_checked="1">
      <h2 className="heading">{t('404.title')}</h2>
      <p className="text">{t('404.text')}</p>
      <div className="cta" bis_skin_checked="1">
        <Link href="/">
          <a className="btn">{t('404.back')}</a>
        </Link>
      </div>
    </div>
  </>
);

export default withTrans(NotFoundPage);
