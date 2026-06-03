import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const UilPhoneAlt = dynamic(
  import('@iconscout/react-unicons/icons/uil-phone-alt'),
  {
    ssr: false,
  },
);

const UilEnvelopeAlt = dynamic(
  import('@iconscout/react-unicons/icons/uil-envelope-alt'),
  {
    ssr: false,
  },
);

const UilLinkedinAlt = dynamic(
  import('@iconscout/react-unicons/icons/uil-linkedin'),
  {
    ssr: false,
  },
);

const Footer = () => (
  <footer>
    <div className="container">
      <Link href="/" className="logo">
        Amadeo<span>Media.</span>
      </Link>
      <nav className="footer-nav">
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flexWrap: 'wrap', listStyle: 'none', padding: 0 }}>
          <li>
            <Link href="/tworzenie-stron-luban" style={{ color: 'inherit', textDecoration: 'none', fontSize: '0.9rem' }}>
              Strony Internetowe Lubań
            </Link>
          </li>
          <li>
            <Link href="/pozycjonowanie-stron-luban" style={{ color: 'inherit', textDecoration: 'none', fontSize: '0.9rem' }}>
              Pozycjonowanie Lubań
            </Link>
          </li>
        </ul>
      </nav>
      <ul className="social-media">
        <li>
          <a
            href="mailto:grzesiak.amadeusz@gmail.com"
            className="social-link"
            aria-label="email"
          >
            <UilEnvelopeAlt size="16" />
          </a>
        </li>
        <li>
          <a href="tel:+48796536228" className="social-link" aria-label="phone">
            <UilPhoneAlt size="16" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/amadeusz-grzesiak-78ab61160"
            className="social-link"
            aria-label="linkedin"
          >
            <UilLinkedinAlt size="16" />
          </a>
        </li>
      </ul>
    </div>
    <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
      <p className="text">
          © {new Date().getFullYear()} Amadeo Media. All rights reserved
      </p>
    </div>
  </footer>
);

export default Footer;
