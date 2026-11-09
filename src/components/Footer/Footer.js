import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { withTrans } from '../../i18n/withTrans';
import { OPEN_SETTINGS_EVENT } from '../../lib/consent';
import { GOOGLE_RATING, GOOGLE_REVIEWS_COUNT } from '../../lib/reviews';

const UilPhoneAlt = dynamic(
  () => import('@iconscout/react-unicons/icons/uil-phone-alt'),
  { ssr: false },
);
const UilEnvelopeAlt = dynamic(
  () => import('@iconscout/react-unicons/icons/uil-envelope-alt'),
  { ssr: false },
);
const UilLinkedinAlt = dynamic(
  () => import('@iconscout/react-unicons/icons/uil-linkedin'),
  { ssr: false },
);
const UilMapMarker = dynamic(
  () => import('@iconscout/react-unicons/icons/uil-map-marker'),
  { ssr: false },
);

const services = [
  { href: '/tworzenie-stron-luban', label: 'Strony internetowe' },
  { href: '/sklepy-internetowe-luban', label: 'Sklepy internetowe' },
  { href: '/pozycjonowanie-stron-luban', label: 'Pozycjonowanie SEO' },
  { href: '/marketing-internetowy-luban', label: 'Marketing internetowy' },
  { href: '/administrowanie-stronami', label: 'Administrowanie stron' },
  { href: '/automatyzacja-ai', label: 'Automatyzacja AI' },
];

const Footer = ({ t }) => (
  <footer className="site-footer">
    <div className="container">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link href="/" className="logo">
            Amadeo<span>Media.</span>
          </Link>
          <p>{t('footer.tagline')}</p>
          <a
            href="https://www.google.com/maps/place/Amadeo+Media+-+Strony+i+Sklepy+Internetowe/@51.1192398,15.2946264,17z/data=!3m1!4b1!4m6!3m5!1s0x4708d325badf1bc1:0x9471a24ead377e27!8m2!3d51.1192398!4d15.2946264"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-rating"
          >
            <strong>★ {GOOGLE_RATING}</strong> Google · {GOOGLE_REVIEWS_COUNT}{' '}
            {t('header.reviews')}
          </a>
        </div>

        <nav className="footer-col" aria-label={t('footer.services')}>
          <h3>{t('footer.services')}</h3>
          <ul>
            {services.map(({ href, label }) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="footer-col" aria-label={t('footer.links')}>
          <h3>{t('footer.links')}</h3>
          <ul>
            <li>
              <Link href="/#oferta">{t('footer.offer')}</Link>
            </li>
            <li>
              <Link href="/#portfolio">{t('footer.portfolio')}</Link>
            </li>
            <li>
              <Link href="/o-mnie">{t('footer.about')}</Link>
            </li>
            <li>
              <Link href="/#kontakt">{t('footer.contactLink')}</Link>
            </li>
          </ul>
        </nav>

        <div className="footer-col">
          <h3>{t('footer.contact')}</h3>
          <ul className="footer-contact">
            <li>
              <a href="tel:+48796536228">
                <span className="footer-icon">
                  <UilPhoneAlt size="16" />
                </span>
                +48 796 536 228
              </a>
            </li>
            <li>
              <a href="mailto:grzesiak.amadeusz@gmail.com">
                <span className="footer-icon">
                  <UilEnvelopeAlt size="16" />
                </span>
                grzesiak.amadeusz@gmail.com
              </a>
            </li>
            <li>
              <span className="footer-contact__static">
                <span className="footer-icon">
                  <UilMapMarker size="16" />
                </span>
                {t('footer.location')}
              </span>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/amadeusz-grzesiak-78ab61160"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="footer-icon">
                  <UilLinkedinAlt size="16" />
                </span>
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Amadeo Media · NIP 613-158-39-85 ·{' '}
          {t('site.rights')}
        </p>
        <p>
          <Link href="/polityka-prywatnosci" className="footer-link">
            {t('cookies.policy')}
          </Link>
          <span aria-hidden="true"> · </span>
          <button
            type="button"
            className="footer-link footer-link--button"
            onClick={() => window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT))}
          >
            {t('cookies.settingsLink')}
          </button>
        </p>
      </div>
    </div>
  </footer>
);

export default withTrans(Footer);
