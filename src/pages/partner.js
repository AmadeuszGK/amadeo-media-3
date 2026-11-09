import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const gather = [
  'imię i nazwisko osoby kontaktowej oraz numer telefonu,',
  'nazwa firmy i branża,',
  'czy firma ma już stronę lub domenę,',
  'czego klient potrzebuje: wizytówka, sklep, pozycjonowanie, inne,',
  'jak pilnie (np. otwarcie firmy za miesiąc),',
  'zgoda klienta na przekazanie jego numeru Amadeuszowi.',
];

const PartnerContent = () => (
  <>
    <Head>
      <title>Materiały dla partnera | Amadeo Media</title>
      <meta charSet="utf-8" />
      <meta name="robots" content="noindex, nofollow" />
    </Head>
    <section className="section partner-page">
      <div className="container">
        <span className="sub-heading">DLA PARTNERA</span>
        <h1 className="heading">Jak polecać strony Amadeo Media</h1>

        <div className="partner-grid">
          <div className="partner-card">
            <h2>Najważniejsze fakty</h2>
            <ul>
              <li>
                <strong>Czas realizacji:</strong> zwykle 5–14 dni, ale dużo
                zależy od tego, jak szybko klient dostarczy materiały i jak
                wygląda współpraca.
              </li>
              <li>
                <strong>Wycena:</strong> bezpłatna i indywidualna, zależy od
                wielkości strony i funkcji. Wszystkie ceny netto. Orientacyjnie:
                bardzo mała strona dla małej firmy ok. 1000 zł, standardowa
                strona ok. 2500 zł, sklep internetowy ok. 5000 zł. Dużo zależy
                też od budżetu klienta.
              </li>
              <li>
                <strong>Domena i hosting:</strong> płatne osobno, ok. 300 zł
                rocznie. Amadeusz może zająć się wszystkim, więc klient nie musi
                nic robić, albo klient załatwia to na własną rękę.
              </li>
              <li>
                <strong>Oferta:</strong> strony firmowe, sklepy internetowe,
                pozycjonowanie, administracja stron, automatyzacje i integracje
                AI.
              </li>
              <li>
                <strong>Zaufanie:</strong> 5,0 w Google (15 opinii), realizacje
                na <Link href="/#portfolio">amadeomedia.com</Link>.
              </li>
            </ul>
          </div>

          <div className="partner-card">
            <h2>Krótki skrypt rozmowy</h2>
            <ol>
              <li>
                Po głównej rozmowie o ofercie: „Przy okazji, czy Państwa firma
                ma już stronę internetową?”
              </li>
              <li>
                Jeśli nie lub jest słaba: „Współpracuję z programistą, który
                robi strony i sklepy dla firm. Gotowa strona to zwykle 5–14 dni,
                a wycena jest bezpłatna.”
              </li>
              <li>
                „Czy mogę przekazać Pana/Pani numer, żeby pan Amadeusz zadzwonił
                i omówił potrzeby? Niczego to nie zobowiązuje.”
              </li>
              <li>Zbierz dane z listy obok i przekaż je Amadeuszowi.</li>
            </ol>
          </div>
        </div>

        <div className="partner-grid">
          <div className="partner-card">
            <h2>Co zebrać od klienta</h2>
            <ul>
              {gather.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </div>
          <div className="partner-card">
            <h2>Jak przekazać kontakt</h2>
            <p>
              Zadzwoń lub napisz do Amadeusza. Zadzwoni do klienta najszybciej,
              jak to możliwe.
            </p>
            <p>
              <a href="tel:+48796536228">+48 796 536 228</a>
              <br />
              <a href="mailto:grzesiak.amadeusz@gmail.com">
                grzesiak.amadeusz@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  </>
);

// Hasło sprawdzane po stronie przeglądarki: w kodzie jest tylko skrót SHA-256, nie samo hasło.
// To prosta zasłona przed przypadkowym wejściem, a nie prawdziwe zabezpieczenie.
const PASSWORD_HASH =
  'e56bdc7f0441a016fd18deddfee8470eec4e0d70e66ac78d23c5ca4cb5f76231';
const STORAGE_KEY = 'amadeo-partner-auth';

const sha256 = async (text) => {
  const buf = await window.crypto.subtle.digest(
    'SHA-256',
    new TextEncoder().encode(text),
  );
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
};

const Partner = () => {
  const [ready, setReady] = useState(false);
  const [authed, setAuthed] = useState(false);
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    try {
      setAuthed(window.sessionStorage.getItem(STORAGE_KEY) === PASSWORD_HASH);
    } catch {
      // brak sessionStorage - wymagamy hasła przy każdym wejściu
    }
    setReady(true);
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const hash = await sha256(value.trim().toLowerCase());
      if (hash === PASSWORD_HASH) {
        try {
          window.sessionStorage.setItem(STORAGE_KEY, PASSWORD_HASH);
        } catch {
          // ignorujemy - dostęp tylko na czas tej karty
        }
        setAuthed(true);
      } else {
        setError('Nieprawidłowe hasło.');
      }
    } catch {
      setError('Nie udało się sprawdzić hasła. Otwórz stronę przez https.');
    }
  };

  if (authed) return <PartnerContent />;

  return (
    <>
      <Head>
        <title>Materiały dla partnera | Amadeo Media</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <section className="section partner-page">
        <div className="container partner-login">
          <span className="sub-heading">DLA PARTNERA</span>
          <h1 className="heading">Podaj hasło</h1>
          {ready && (
            <form onSubmit={submit} className="partner-login__form">
              <input
                type="password"
                className="form-input"
                placeholder="Hasło"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                autoComplete="current-password"
                autoFocus
                aria-label="Hasło"
              />
              <button type="submit" className="btn">
                Wejdź
              </button>
              {error && <p className="partner-login__error">{error}</p>}
            </form>
          )}
        </div>
      </section>
    </>
  );
};

export default Partner;
