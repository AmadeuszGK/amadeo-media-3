import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Square1Img from '../../images/square1.png';
import Circle1Img from '../../images/circle1.png';
import Dots1Img from '../../images/dots.png';
import * as gtag from '../../lib/gtag';
import { seoTags } from '../../lib/seo';
import PortfolioList from '../Portfolio/PortfolioList/PortfolioList';
import { GOOGLE_RATING, GOOGLE_REVIEWS_COUNT } from '../../lib/reviews';

const ICONS = {
  mobile: dynamic(
    () => import('@iconscout/react-unicons/icons/uil-mobile-android'),
    {
      ssr: false,
    },
  ),
  pen: dynamic(() => import('@iconscout/react-unicons/icons/uil-pen'), {
    ssr: false,
  }),
  search: dynamic(() => import('@iconscout/react-unicons/icons/uil-search'), {
    ssr: false,
  }),
  cart: dynamic(
    () => import('@iconscout/react-unicons/icons/uil-shopping-cart'),
    {
      ssr: false,
    },
  ),
  rocket: dynamic(() => import('@iconscout/react-unicons/icons/uil-rocket'), {
    ssr: false,
  }),
  shield: dynamic(
    () => import('@iconscout/react-unicons/icons/uil-shield-check'),
    {
      ssr: false,
    },
  ),
  chart: dynamic(
    () => import('@iconscout/react-unicons/icons/uil-chart-line'),
    {
      ssr: false,
    },
  ),
  check: dynamic(
    () => import('@iconscout/react-unicons/icons/uil-check-circle'),
    {
      ssr: false,
    },
  ),
  map: dynamic(() => import('@iconscout/react-unicons/icons/uil-map-marker'), {
    ssr: false,
  }),
  file: dynamic(
    () => import('@iconscout/react-unicons/icons/uil-file-search-alt'),
    {
      ssr: false,
    },
  ),
  link: dynamic(() => import('@iconscout/react-unicons/icons/uil-link-alt'), {
    ssr: false,
  }),
  wrench: dynamic(() => import('@iconscout/react-unicons/icons/uil-wrench'), {
    ssr: false,
  }),
  speed: dynamic(
    () => import('@iconscout/react-unicons/icons/uil-tachometer-fast'),
    {
      ssr: false,
    },
  ),
  users: dynamic(() => import('@iconscout/react-unicons/icons/uil-users-alt'), {
    ssr: false,
  }),
  phone: dynamic(() => import('@iconscout/react-unicons/icons/uil-phone-alt'), {
    ssr: false,
  }),
  desktop: dynamic(() => import('@iconscout/react-unicons/icons/uil-desktop'), {
    ssr: false,
  }),
};

const Icon = ({ name, size = 24 }) => {
  const C = ICONS[name] || ICONS.check;
  return <C size={size} />;
};

const CallButton = ({ label, where, className = 'btn' }) => (
  <a
    href="tel:+48796536228"
    className={className}
    onClick={() =>
      gtag.event({ action: 'click_call', category: 'contact', label: where })
    }
  >
    {label}
  </a>
);

// Wspólny układ podstron usługowych (strony www, SEO).
// `page` opisuje całą treść - patrz tworzenie-stron-luban.js i pozycjonowanie-stron-luban.js
const Landing = ({ page }) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: page.serviceName,
        serviceType: page.serviceName,
        areaServed: ['Lubań', 'Dolny Śląsk', 'Polska'],
        provider: {
          '@type': 'ProfessionalService',
          name: 'Amadeo Media',
          taxID: '6131583985',
          url: 'https://amadeomedia.com',
          telephone: '+48 796 536 228',
          email: 'grzesiak.amadeusz@gmail.com',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'plac Śląski',
            postalCode: '59-800',
            addressLocality: 'Lubań',
            addressCountry: 'PL',
          },
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: page.faq.items.map(({ q, a }) => ({
          '@type': 'Question',
          name: q,
          acceptedAnswer: { '@type': 'Answer', text: a },
        })),
      },
    ],
  };

  return (
    <>
      <Head>
        <title>{page.metaTitle}</title>
        <meta charSet="utf-8" />
        <meta name="keywords" content={page.keywords} />
        <meta name="author" content="Amadeusz Grzesiak" />
        <meta name="description" content={page.metaDescription} />
        {seoTags({
          title: page.metaTitle,
          description: page.metaDescription,
          path: page.path,
        })}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <section className="showcase-area" id="home">
        <Image
          src={Square1Img}
          alt=""
          width={70}
          height={70}
          className="shape square"
          layout="raw"
          placeholder="blur"
        />
        <div className="container">
          <div className="showcase-info">
            <h3 className="sub-heading">{page.kicker}</h3>
            <h1 className="heading">{page.h1}</h1>
            <p className="text">{page.lead}</p>
            <div className="cta">
              <CallButton label="Zadzwoń: 796 536 228" where="landing-hero" />
              <Link
                href={page.showcase ? '#realizacje' : '/#portfolio'}
                className="btn secondary-btn"
              >
                Zobacz realizacje
              </Link>
            </div>
            <ul className="hero-trust">
              <li>
                <strong>★ {GOOGLE_RATING}</strong> w Google ·{' '}
                {GOOGLE_REVIEWS_COUNT} opinii
              </li>
              {(
                page.trust || ['Realizacja w 5–14 dni', 'Bezpłatna wycena']
              ).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="showcase-imagee lp-hero-image">
            <div className="shape circle">
              <Image
                src={Circle1Img}
                alt=""
                layout="responsive"
                placeholder="blur"
              />
            </div>
            <Image
              src={page.heroImage}
              alt={page.heroAlt}
              placeholder="blur"
              layout="responsive"
              priority
              className="lp-hero-image__img"
            />
            <div className="shape dots">
              <Image
                src={Dots1Img}
                alt=""
                layout="responsive"
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section lp-section" id="uslugi">
        <div className="container lp-intro">
          <h2 className="heading">{page.intro.h2}</h2>
          <div>
            {page.intro.paragraphs.map((p, i) => (
              <p className="text" key={i}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="section lp-section lp-band">
        <div className="container">
          <h2 className="heading lp-center">{page.features.h2}</h2>
          <div className="lp-cards">
            {page.features.items.map(({ icon: ic, title, text }, i) => (
              <article className="lp-card" key={title}>
                <span className="lp-card__index" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="lp-card__icon">
                  <Icon name={ic} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {page.showcase && (
        <section
          className="section lp-section lp-showcase-band"
          id="realizacje"
        >
          <div className="container">
            <h2 className="heading lp-center">{page.showcase.h2}</h2>
            <p className="text lp-showcase-lead">{page.showcase.text}</p>
            <div className="portfolio-gallery lp-showcase">
              <PortfolioList filter={page.showcase.filter} limit={6} />
            </div>
            <p className="lp-related">
              <Link href="/#portfolio">Zobacz wszystkie realizacje</Link>
            </p>
          </div>
        </section>
      )}

      <section className="section lp-section">
        <div className="container">
          <h2 className="heading lp-center">{page.steps.h2}</h2>
          <ol className="lp-steps">
            {page.steps.items.map(({ title, text }, i) => (
              <li className="lp-step" key={title}>
                <span className="lp-step__num">{i + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section lp-section lp-band">
        <div className="container">
          <h2 className="heading lp-center">{page.why.h2}</h2>
          <div className="lp-why">
            {page.why.items.map(({ title, text }) => (
              <div className="lp-why__item" key={title}>
                <span className="lp-why__check">
                  <Icon name="check" size={22} />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section lp-section">
        <div className="container lp-faq-wrap">
          <h2 className="heading lp-center">{page.faq.h2}</h2>
          <div className="lp-faq">
            {page.faq.items.map(({ q, a }) => (
              <details className="lp-faq__item" key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
          {page.related && (
            <p className="lp-related">
              {page.related.text}{' '}
              <Link href={page.related.href}>{page.related.label}</Link>
            </p>
          )}
        </div>
      </section>

      <section className="section lp-section">
        <div className="container">
          <div className="lp-cta">
            <h2>{page.cta.h2}</h2>
            <p>{page.cta.text}</p>
            <div className="lp-cta__buttons">
              <CallButton
                label="Zadzwoń: 796 536 228"
                where="landing-cta"
                className="lp-cta__btn"
              />
              <a
                href="mailto:grzesiak.amadeusz@gmail.com"
                className="lp-cta__btn lp-cta__btn--ghost"
              >
                Napisz maila
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
