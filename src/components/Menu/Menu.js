import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import LanguageMenu from '../LanguageMenu';
import { withTrans } from '../../i18n/withTrans';
import dynamic from 'next/dynamic';

const UilMoon = dynamic(import('@iconscout/react-unicons/icons/uil-moon'), {
  ssr: false,
});

const UilSun = dynamic(import('@iconscout/react-unicons/icons/uil-sun'), {
  ssr: false,
});

export const UilLink = dynamic(
  import('@iconscout/react-unicons/icons/uil-link'),
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
        <Link href="/">
          <a className="logo">
            Amadeo<span>Media.</span>
          </a>
        </Link>
        <div className="links">
          <ul>
            <li>
              <Link href="/" activeClassName="active">
                <a>
                  <span onClick={() => closeHamburgerMenu} className="nav-link">
                    {t('menu.home')}
                  </span>
                </a>
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                href="/o-mnie"
                activeClassName="active"
              >
                <a>
                  <span onClick={() => closeHamburgerMenu} className="nav-link">
                    {t('menu.about')}
                  </span>
                </a>
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                href="/#oferta"
                activeClassName="active"
              >
                <a>
                  <span onClick={() => closeHamburgerMenu} className="nav-link">
                    {t('menu.offer')}
                  </span>
                </a>
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                href="/#portfolio"
                activeClassName="active"
              >
                <a>
                  <span onClick={() => closeHamburgerMenu} className="nav-link">
                    {t('menu.portfolio')}
                  </span>
                </a>
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                href="/#kontakt"
                activeClassName="active"
              >
                <a>
                  <span onClick={() => closeHamburgerMenu} className="nav-link">
                    {t('menu.contact')}
                  </span>
                </a>
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
