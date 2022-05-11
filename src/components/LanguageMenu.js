import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageMenu = () => {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState('pl');

  function changeLang(value) {
    i18n.changeLanguage(value);
    localStorage.setItem('Language', value);
    setCurrentLang(value);
  }

  return (
    <div
      className="toggle-btn"
      onClick={() => changeLang(currentLang === 'pl' ? 'en' : 'pl')}
    >
      {currentLang === 'en' && <span>PL</span>}
      {currentLang === 'pl' && <span>EN</span>}
    </div>
  );
};

export default LanguageMenu;
