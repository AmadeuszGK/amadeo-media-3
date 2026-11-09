/* eslint-disable react/no-unknown-property */
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { withTrans } from '../i18n/withTrans';

const NotFoundPage = ({ t }) => (
  <>
    <Head>
      <title>404 - Amadeo Media</title>
      <meta charSet="utf-8" />
      <meta
        name="keywords"
        content="strony internetowe,sklepy internetowe,front end developer,wrocław,lubań,e-commerce,grafika"
      />
      <meta name="author" content="Amadeusz Grzesiak" />
      <meta
        name="description"
        content="Zajmuję się tworzeniem stron internetowych, sklepów (e-commerce), marketingiem, pozycjonowaniem i nie tylko, sprawdź co jeszcze mam w ofercie!"
      />
    </Head>
    <div className="full-page" bis_skin_checked="1">
      <h2 className="heading">{t('404.title')}</h2>
      <p className="text">{t('404.text')}</p>
      <div className="cta" bis_skin_checked="1">
        <Link href="/" className="btn">
          {t('404.back')}
        </Link>
      </div>
    </div>
  </>
);

export default withTrans(NotFoundPage);
