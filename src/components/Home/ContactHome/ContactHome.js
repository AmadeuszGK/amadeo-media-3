import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { withTrans } from '../../../i18n/withTrans';
import DotsImg from '../../../images/dots.png';

const UilEnvelopeAlt = dynamic(
  import('@iconscout/react-unicons/icons/uil-envelope-alt'),
  { ssr: false },
);
const UilPhoneAlt = dynamic(
  import('@iconscout/react-unicons/icons/uil-phone-alt'),
  { ssr: false },
);
const UilLinkedinAlt = dynamic(
  import('@iconscout/react-unicons/icons/uil-linkedin'),
  { ssr: false },
);
const UilArrowUpRight = dynamic(
  import('@iconscout/react-unicons/icons/uil-arrow-up-right'),
  { ssr: false },
);

const ContactHome = ({ t }) => {
  const cards = [
    {
      href: 'mailto:grzesiak.amadeusz@gmail.com',
      label: 'E-mail',
      value: 'grzesiak.amadeusz@gmail.com',
      icon: <UilEnvelopeAlt size="22" />,
    },
    {
      href: 'tel:+48796536228',
      label: t('contact.phoneLabel'),
      value: '+48 796 536 228',
      icon: <UilPhoneAlt size="22" />,
    },
    {
      href: 'https://www.linkedin.com/in/amadeusz-grzesiak-78ab61160',
      label: 'LinkedIn',
      value: 'Amadeusz Grzesiak',
      icon: <UilLinkedinAlt size="22" />,
      external: true,
    },
  ];

  return (
    <section className="contact section" id="kontakt">
      <div className="container">
        <div className="contact-dots" aria-hidden="true">
          <Image src={DotsImg} alt="" sizes="110px" placeholder="blur" />
        </div>
        <div className="contact-box">
          <div className="contact-info">
            <h3 className="sub-heading">{t('contact.smallTitle')}</h3>
            <h2 className="heading">{t('contact.bigTitle')}</h2>
            <p className="text">{t('contact.text')}</p>
          </div>
          <div className="contact-links">
            {cards.map(({ href, label, value, icon, external }) => (
              <a
                key={label}
                href={href}
                className="contact-card"
                {...(external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
              >
                <span className="contact-card__icon">{icon}</span>
                <span className="contact-card__text">
                  <small>{label}</small>
                  <strong>{value}</strong>
                </span>
                <span className="contact-card__arrow">
                  <UilArrowUpRight size="20" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default withTrans(ContactHome);
