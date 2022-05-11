/* eslint-disable @next/next/no-page-custom-font */
import React, { useEffect, useState } from 'react';
import { AppProps } from 'next/app';
import '../styles/style.css';
import '../components/Skills/Skills.scss';
import '../components/Button/Button.scss';
import Menu from '../components/Menu/Menu';
import Footer from '../components/Footer/Footer';
import Cookies from '../components/Cookies/Cookies';

export default function MyApp({ Component, pageProps }: AppProps) {
  const [showCookies, setShowCookies] = useState(false);

  useEffect(() => {
    setShowCookies(
      localStorage.getItem(`Cookies`) === `accepted` ? false : true,
    );
  }, []);

  const hideCookies = () => {
    setShowCookies(false);
    localStorage.setItem(`Cookies`, `accepted`);
  };

  return (
    <>
      <Menu />
      <Component {...pageProps} />
      <Footer />
      {showCookies && <Cookies hideCookies={hideCookies} />}
      <link
        as="style"
        rel="stylesheet preload prefetch"
        href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Poppins:wght@300;400;500;600;700;800&display=swap"
        type="text/css"
        crossOrigin="anonymous"
      />
    </>
  );
}
