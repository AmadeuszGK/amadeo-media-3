import React from 'react';
import Image from 'next/image';
import { withTrans } from '../../../i18n/withTrans';
import Square2Img from '../../../images/square2.png';

const ContactHome = ({ t }) => (
  <section className="contact section" id="kontakt">
    <div className="container">
      <div className="contact-info">
        <h3 className="sub-heading">{t('contact.smallTitle')}</h3>
        <h2 className="heading">{t('contact.bigTitle')}</h2>
        <p className="text">{t('contact.text')}</p>
        <div className="contact-links">
          <a href="mailto:grzesiak.amadeusz@gmail.com" className="mail">
            E-mail: grzesiak.amadeusz@gmail.com
          </a>
          <a href="tel:+48796536228" className="mail">
            Tel: +48 796 536 228
          </a>
          <a
            href="https://www.linkedin.com/in/amadeusz-grzesiak-78ab61160"
            className="mail"
          >
            Linkedin
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default withTrans(ContactHome);
