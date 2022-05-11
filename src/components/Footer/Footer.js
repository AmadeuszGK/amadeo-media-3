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
        <a>
          Amadeo<span>Media.</span>
        </a>
      </Link>
      <p className="text">
        © {new Date().getFullYear()} Amadeo Media. All rights reserved
      </p>
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
  </footer>
);

export default Footer;
