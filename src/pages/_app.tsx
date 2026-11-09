/* eslint-disable @next/next/inline-script-id */
/* eslint-disable @next/next/no-page-custom-font */
import React, { useEffect, useRef, useState } from 'react';
import { AppProps } from 'next/app';
import '../styles/style.css';
import '../components/Skills/Skills.scss';
import Menu from '../components/Menu/Menu';
import Footer from '../components/Footer/Footer';
import Cookies from '../components/Cookies/Cookies';
import StickyCall from '../components/StickyCall/StickyCall';
import Script from 'next/script';
import Head from 'next/head';
import { Poppins, Abril_Fatface } from 'next/font/google';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag';
import {
  Consent,
  GA_MEASUREMENT_ID,
  OPEN_SETTINGS_EVENT,
  clearAnalyticsCookies,
  readConsent,
  writeConsent,
} from '../lib/consent';

// Czcionki hostowane lokalnie (pobierane w trakcie builda) - brak połączeń z serwerami Google
const poppins = Poppins({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});
const abril = Abril_Fatface({
  subsets: ['latin', 'latin-ext'],
  weight: '400',
  display: 'swap',
});

export default function MyApp({ Component, pageProps }: AppProps) {
  // undefined = jeszcze nie wiemy (SSR / przed odczytem), null = brak ważnej zgody
  const [consent, setConsent] = useState<Consent | null | undefined>(undefined);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const analyticsWasOn = useRef(false);

  const router = useRouter();

  useEffect(() => {
    setConsent(readConsent());
    const open = () => setSettingsOpen(true);
    window.addEventListener(OPEN_SETTINGS_EVENT, open);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, open);
  }, []);

  const analyticsOn = consent?.analytics === true;

  // Pageview tylko przy zgodzie na analitykę
  useEffect(() => {
    if (!analyticsOn) return;
    const handleRouteChange = (url: any) => {
      gtag.pageview(url);
    };
    router.events.on(`routeChangeComplete`, handleRouteChange);
    return () => {
      router.events.off(`routeChangeComplete`, handleRouteChange);
    };
  }, [router.events, analyticsOn]);

  // Wycofanie zgody: Consent Mode -> denied, wyłączenie GA, usunięcie cookies
  useEffect(() => {
    if (consent === undefined) return;
    if (analyticsOn) {
      analyticsWasOn.current = true;
      (window as any)[`ga-disable-${GA_MEASUREMENT_ID}`] = false;
      (window as any).gtag?.('consent', 'update', {
        analytics_storage: 'granted',
      });
    } else if (analyticsWasOn.current) {
      (window as any)[`ga-disable-${GA_MEASUREMENT_ID}`] = true;
      (window as any).gtag?.('consent', 'update', {
        analytics_storage: 'denied',
      });
      clearAnalyticsCookies();
      analyticsWasOn.current = false;
    }
  }, [analyticsOn, consent]);

  const saveConsent = (analytics: boolean) => {
    setConsent(writeConsent(analytics));
    setSettingsOpen(false);
  };

  const showBanner = consent === null || settingsOpen;

  return (
    <>
      {/* Google Analytics ładuje się WYŁĄCZNIE po wyrażeniu zgody (Consent Mode v2) */}
      {analyticsOn && (
        <>
          <Script
            id="ga-loader"
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          />
          <Script
            id="ga-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('consent', 'default', {
                  ad_storage: 'denied',
                  ad_user_data: 'denied',
                  ad_personalization: 'denied',
                  analytics_storage: 'denied'
                });
                gtag('js', new Date());
                gtag('consent', 'update', { analytics_storage: 'granted' });
                gtag('config', '${GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                  allow_google_signals: false,
                  allow_ad_personalization_signals: false
                });
              `,
            }}
          />
        </>
      )}
      <Head>
        <style
          id="self-hosted-fonts"
          dangerouslySetInnerHTML={{
            __html: `:root{--font-poppins:${poppins.style.fontFamily};--font-abril:${abril.style.fontFamily};}`,
          }}
        />
      </Head>
      <Menu />
      <Component {...pageProps} />
      <Footer />
      {!showBanner && consent !== undefined && <StickyCall />}
      {showBanner && (
        <Cookies
          key={settingsOpen ? 'settings' : 'banner'}
          onSave={saveConsent}
          initialAnalytics={analyticsOn}
          startInSettings={settingsOpen}
          onClose={
            settingsOpen && consent ? () => setSettingsOpen(false) : undefined
          }
        />
      )}
    </>
  );
}
