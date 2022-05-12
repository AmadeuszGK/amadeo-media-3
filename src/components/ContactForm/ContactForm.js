import React from 'react';
import Link from 'next/link';
import { withTrans } from '../../i18n/withTrans';

const ContactForm = ({ t }) => (
  <form
    action="/wyslano-email"
    className="contact-form"
    name="contact"
    method="POST"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    <h3>
      {t('contact.formTitle')}
      <b className="bold">Amadeo Media</b>
    </h3>
    <input type="hidden" name="form-name" value="contact" />
    <p hidden>
      <label>
        Don’t fill this out: <input name="bot-field" />
      </label>
    </p>
    <input
      name="name"
      type="text"
      className="form-input"
      placeholder={t('contact.formName')}
    />
    <input
      name="telefon"
      type="text"
      className="form-input"
      placeholder={t('contact.formTelephone')}
    />
    <input
      type="email"
      name="email"
      className="form-input"
      placeholder="E-mail"
    />
    <textarea
      className="form-input"
      placeholder={t('contact.formMessage')}
      type="text"
      name="message"
    />
    <div className="checbox--wrapper">
      <p className="privacy-policy">
        {t('contact.formText')}
        <Link href="/polityka-prywatnosci">{t('contact.formPrivacy')}</Link>
      </p>
    </div>
    <input
      type="submit"
      value={t('contact.formButton')}
      className="btn send-btn"
    ></input>
  </form>
);

export default withTrans(ContactForm);
