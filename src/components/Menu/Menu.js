import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import LanguageMenu from '../LanguageMenu';
import { withTrans } from '../../i18n/withTrans';
import dynamic from 'next/dynamic';

const UilMoon = dynamic(
  () => import('@iconscout/react-unicons/icons/uil-moon'),
  {
    ssr: false,
  },
);

const UilSun = dynamic(() => import('@iconscout/react-unicons/icons/uil-sun'), {
  ssr: false,
});

export const UilLink = dynamic(
  () => import('@iconscout/react-unicons/icons/uil-link'),
  {
    ssr: false,
  },
);

const Menu = ({ t }) => {
  const [headerClassName, setHeaderClassName] = useState(null);
  const [isDark, setIsDark] = useState(false);

  const stickNavbar = () => {
    setHeaderClassName(window.pageYOffset > 0 ? 'scrolled' : null);
  };

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);

  const closeHamburgerMenu = () => {
    document.body.classList.remove('open');
    document.body.classList.remove('stopScrolling');
  };

  const toggleHamburgerMenu = () => {
    document.body.classList.toggle('open');
    document.body.classList.toggle('stopScrolling');
  };

  useEffect(() => {
    localStorage.getItem('dark') &&
      setIsDark(localStorage.getItem('dark') === '1' ? true : false);
    localStorage.getItem('dark') === '1'
      ? document.body.classList.add('dark')
      : document.body.classList.remove('dark');
  }, []);

  const changeTheme = () => {
    if (!isDark) {
      document.body.classList.add('dark');
      localStorage.setItem('dark', '1');
      setIsDark(true);
    } else if (isDark) {
      document.body.classList.remove('dark');
      localStorage.setItem('dark', '0');
      setIsDark(false);
    }
  };

  return (
    <header className={headerClassName}>
      <nav className="container">
        <Link href="/" className="logo">
          Amadeo<span>Media.</span>
        </Link>
        <div className="links">
          <ul>
            <li>
              <Link href="/" className="nav-link" onClick={closeHamburgerMenu}>
                {t('menu.home')}
              </Link>
            </li>
            <li>
              <Link
                href="/o-mnie"
                className="nav-link"
                onClick={closeHamburgerMenu}
              >
                {t('menu.about')}
              </Link>
            </li>
            <li>
              <Link
                href="/#oferta"
                className="nav-link"
                onClick={closeHamburgerMenu}
              >
                {t('menu.offer')}
              </Link>
            </li>
            <li>
              <Link
                href="/#portfolio"
                className="nav-link"
                onClick={closeHamburgerMenu}
              >
                {t('menu.portfolio')}
              </Link>
            </li>
            <li>
              <Link
                href="/#kontakt"
                className="nav-link"
                onClick={closeHamburgerMenu}
              >
                {t('menu.contact')}
              </Link>
            </li>
          </ul>
          <div className="toggle-btn" onClick={() => changeTheme()}>
            {isDark ? <UilSun size={17} /> : <UilMoon size={17} />}
          </div>
          <LanguageMenu />
        </div>
        <div className="hamburger" onClick={toggleHamburgerMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>
    </header>
  );
};

export default withTrans(Menu);
