/* eslint-disable @next/next/inline-script-id */
/* eslint-disable @next/next/no-page-custom-font */
import React, { useEffect, useState } from 'react';
import { AppProps } from 'next/app';
import '../styles/style.css';
import '../components/Skills/Skills.scss';
import Menu from '../components/Menu/Menu';
import Footer from '../components/Footer/Footer';
import Cookies from '../components/Cookies/Cookies';
import Script from 'next/script';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag';

export default function MyApp({ Component, pageProps }: AppProps) {
  const [showCookies, setShowCookies] = useState(false);

  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url);
    };
    router.events.on(`routeChangeComplete`, handleRouteChange);
    return () => {
      router.events.off(`routeChangeComplete`, handleRouteChange);
    };
  }, [router.events]);

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
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-JDJ12Z6J8M`}
      />
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JDJ12Z6J8M', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
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
