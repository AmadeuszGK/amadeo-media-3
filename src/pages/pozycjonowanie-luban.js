import React from 'react';
import Helmet from 'react-helmet';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { withTrans } from '../i18n/withTrans';
import Square1Img from '../images/square1.png';
import Circle1Img from '../images/circle1.png';
import Dots1Img from '../images/dots.png';
import OfferItem2Img from '../images/offer-item-img-2.png';

const PozycjonowanieLuban = ({ t }) => (
  <>
    <Helmet title="Pozycjonowanie Stron Lubań (SEO) - Amadeo Media">
      <meta charSet="utf-8" />
      <meta
        name="keywords"
        content="pozycjonowanie Lubań, SEO Lubań, pozycjonowanie stron Lubań, pozycjonowanie stron internetowych Lubań, optymalizacja SEO Lubań, audyt SEO Lubań, pozycjonowanie lokalne Lubań, agencja SEO Lubań"
      />
      <meta name="author" content="Amadeusz Grzesiak" />
      <meta
        name="description"
        content="Skuteczne pozycjonowanie stron w Lubaniu. Zwiększ widoczność swojej strony w Google, zdobądź nowych klientów i rozwijaj swój biznes. Umów się na darmowy audyt SEO."
      />
      <html lang="pl-PL" />
    </Helmet>

    <section className="showcase-area" id="home">
      <Image
        src={Square1Img}
        alt="square shape"
        width={70}
        height={70}
        className="shape square"
        layout="raw"
        placeholder="blur"
      />
      <div className="container">
        <div className="showcase-info">
          <h3 className="sub-heading">Marketing w wyszukiwarkach</h3>
          <h1 className="heading">Pozycjonowanie stron internetowych (SEO) Lubań</h1>
          <p className="text">
            Chcesz być wyżej w Google? Zajmuję się skutecznym pozycjonowaniem i optymalizacją 
            stron dla firm z Lubania i okolic. Pozyskaj więcej klientów dzięki wysokim pozycjom!
          </p>
          <div className="cta">
            <Link href="/#oferta" className="btn">
              Sprawdź ofertę
            </Link>
            <Link href="/#kontakt" className="btn secondary-btn">
              Zamów darmowy audyt SEO
            </Link>
          </div>
        </div>
        <div className="showcase-imagee" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="shape circle">
            <Image
              src={Circle1Img}
              alt="circle shape"
              layout="responsive"
              placeholder="blur"
            />
          </div>
          <Image
            src={OfferItem2Img}
            alt="seo pozycjonowanie"
            placeholder="blur"
            layout="responsive"
            priority
            style={{ objectFit: 'cover', maxWidth: '340px', marginTop: '3rem' }}
          />
          <div className="shape dots">
            <Image
              src={Dots1Img}
              alt="dots shape"
              layout="responsive"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </section>

    <section className="section about-page" id="uslugi">
      <div className="container">
        <div className="about-me">
          <h2 className="heading">Skuteczne pozycjonowanie stron (SEO) w Lubaniu</h2>
          <p className="text">
            Posiadanie atrakcyjnej strony internetowej to dopiero początek. Aby zdobywać klientów z sieci, 
            potrzebujesz widoczności w wyszukiwarce Google. Oferuję profesjonalne usługi SEO i pozycjonowania 
            lokalnego dla firm działających na terenie Lubania i całego Dolnego Śląska.
          </p>
          <p className="text">
            Moje strategie opierają się na dokładnej analityce, doborze odpowiednich słów kluczowych (np. "fryzjer Lubań", "mechanik Lubań") 
            i optymalizacji technicznej strony. Dzięki temu Twoja oferta dotrze bezpośrednio do osób poszukujących 
            Twoich usług.
          </p>
        </div>
      </div>
    </section>

    <section className="section" style={{ position: 'relative' }}>
      <Image
        src={Dots1Img}
        alt="dots shape"
        width={70}
        height={70}
        className="shape square"
        layout="raw"
        placeholder="blur"
        style={{ position: 'absolute', top: '100px', left: '50px', opacity: 0.1 }}
      />
      <div className="container">
        <div className="about-me">
          <h2 className="heading">Co obejmuje proces pozycjonowania?</h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            marginTop: '3rem'
          }}>
            <div style={{
              padding: '2rem',
              borderRadius: '12px',
              backgroundColor: '#f9f9f9',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              transition: 'transform 0.3s ease, boxShadow 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔎</div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.8rem', color: '#1a202c' }}>
                Audyt SEO
              </h3>
              <p style={{ color: '#4a5568', lineHeight: '1.6', fontSize: '0.95rem' }}>
                Zaczynam od kompleksowej analizy Twojej strony internetowej. Wskazuję błędy techniczne i blokady, które utrudniają osiągnięcie wysokich pozycji.
              </p>
            </div>

            <div style={{
              padding: '2rem',
              borderRadius: '12px',
              backgroundColor: '#f9f9f9',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              transition: 'transform 0.3s ease, boxShadow 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔑</div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.8rem', color: '#1a202c' }}>
                Słowa kluczowe
              </h3>
              <p style={{ color: '#4a5568', lineHeight: '1.6', fontSize: '0.95rem' }}>
                Analizuję intencje zakupowe Twoich klientów. Wybieram frazy, które rzeczywiście przynoszą zapytania i zyski.
              </p>
            </div>

            <div style={{
              padding: '2rem',
              borderRadius: '12px',
              backgroundColor: '#f9f9f9',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              transition: 'transform 0.3s ease, boxShadow 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚙️</div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.8rem', color: '#1a202c' }}>
                Optymalizacja techniczna
              </h3>
              <p style={{ color: '#4a5568', lineHeight: '1.6', fontSize: '0.95rem' }}>
                Poprawiam strukturę kodu, przyspieszam działanie strony (Core Web Vitals), dbam o responsywność i indeksowanie.
              </p>
            </div>

            <div style={{
              padding: '2rem',
              borderRadius: '12px',
              backgroundColor: '#f9f9f9',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              transition: 'transform 0.3s ease, boxShadow 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📝</div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.8rem', color: '#1a202c' }}>
                Content Marketing
              </h3>
              <p style={{ color: '#4a5568', lineHeight: '1.6', fontSize: '0.95rem' }}>
                Tworzę wartościowe treści i rozbudowuję opisy usług. Odpowiedni content to klucz do pozyskania ruchu z Google.
              </p>
            </div>

            <div style={{
              padding: '2rem',
              borderRadius: '12px',
              backgroundColor: '#f9f9f9',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              transition: 'transform 0.3s ease, boxShadow 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📍</div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.8rem', color: '#1a202c' }}>
                Pozycjonowanie lokalne
              </h3>
              <p style={{ color: '#4a5568', lineHeight: '1.6', fontSize: '0.95rem' }}>
                Optymalizuję wizytówkę Google Moja Firma i pozycjonuję Cię na frazy powiązane z Lubaniem i sąsiednimi miejscowościami.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section about-page" style={{ backgroundColor: '#f9f9f9' }}>
      <div className="container">
        <div className="about-me">
          <h2 className="heading">Dlaczego SEO to dobra inwestycja dla lokalnej firmy?</h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginTop: '3rem'
          }}>
            <div style={{
              padding: '1.5rem',
              display: 'flex',
              gap: '1.5rem',
              alignItems: 'flex-start'
            }}>
              <div style={{
                minWidth: '50px',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: '#667eea',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                flexShrink: 0,
                fontSize: '24px',
                fontWeight: 'bold'
              }}>
                ✓
              </div>
              <div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#1a202c' }}>
                  Stały napływ klientów
                </h3>
                <p style={{ color: '#4a5568', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Dobrze wypozycjonowana strona internetowa to Twój najlepszy handlowiec, pracujący 24/7.
                </p>
              </div>
            </div>

            <div style={{
              padding: '1.5rem',
              display: 'flex',
              gap: '1.5rem',
              alignItems: 'flex-start'
            }}>
              <div style={{
                minWidth: '50px',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: '#667eea',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                flexShrink: 0,
                fontSize: '24px',
                fontWeight: 'bold'
              }}>
                ✓
              </div>
              <div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#1a202c' }}>
                  Budowanie przewagi
                </h3>
                <p style={{ color: '#4a5568', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Wyprzedź lokalną konkurencję. Jeśli nie ma Cię w TOP 10 na kluczowe frazy w Lubaniu, Twoi klienci wybiorą inne firmy.
                </p>
              </div>
            </div>

            <div style={{
              padding: '1.5rem',
              display: 'flex',
              gap: '1.5rem',
              alignItems: 'flex-start'
            }}>
              <div style={{
                minWidth: '50px',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: '#667eea',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                flexShrink: 0,
                fontSize: '24px',
                fontWeight: 'bold'
              }}>
                ✓
              </div>
              <div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#1a202c' }}>
                  Efekty długoterminowe
                </h3>
                <p style={{ color: '#4a5568', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  W przeciwieństwie do płatnych reklam (PPC), efekty pozycjonowania utrzymują się przez długi czas po zakończeniu intensywnych prac.
                </p>
              </div>
            </div>

            <div style={{
              padding: '1.5rem',
              display: 'flex',
              gap: '1.5rem',
              alignItems: 'flex-start'
            }}>
              <div style={{
                minWidth: '50px',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: '#667eea',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                flexShrink: 0,
                fontSize: '24px',
                fontWeight: 'bold'
              }}>
                ✓
              </div>
              <div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#1a202c' }}>
                  Przejrzyste raportowanie
                </h3>
                <p style={{ color: '#4a5568', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Co miesiąc otrzymujesz szczegółowy raport pokazujący pozycje w Google i wygenerowany ruch na stronie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section" style={{ position: 'relative' }}>
      <Image
        src={Square1Img}
        alt="square shape"
        width={70}
        height={70}
        className="shape square"
        layout="raw"
        placeholder="blur"
        style={{ position: 'absolute', bottom: '100px', right: '50px', opacity: 0.1 }}
      />
      <div className="container">
        <div className="about-me">
          <h2 className="heading">Jak wygląda proces współpracy?</h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            marginTop: '3rem'
          }}>
            {[
              { step: 1, title: 'Bezpłatny Audyt', desc: 'Przeanalizuję Twoją stronę i konkurencję w Lubaniu.' },
              { step: 2, title: 'Wybór strategii', desc: 'Dobierzemy frazy kluczowe o największym potencjale.' },
              { step: 3, title: 'Optymalizacja', desc: 'Poprawki techniczne i przeredagowanie treści na stronie.' },
              { step: 4, title: 'Link building', desc: 'Budowanie autorytetu domeny poprzez zdobywanie linków.' },
              { step: 5, title: 'Analiza', desc: 'Monitorowanie efektów i stałe udoskonalanie profilu SEO.' }
            ].map((item) => (
              <div 
                key={item.step}
                style={{
                  padding: '2rem',
                  borderRadius: '12px',
                  backgroundColor: '#fff',
                  border: '2px solid #e2e8f0',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#667eea';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(102, 126, 234, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  backgroundColor: '#667eea',
                  color: 'white',
                  fontSize: '24px',
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)'
                }}>
                  {item.step}
                </div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.8rem', color: '#1a202c' }}>
                  {item.title}
                </h3>
                <p style={{ color: '#4a5568', fontSize: '0.9rem', lineHeight: '1.6' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="section about-page" style={{ backgroundColor: '#f0f4ff', position: 'relative' }}>
      <Image
        src={Square1Img}
        alt="square shape"
        width={70}
        height={70}
        className="shape square"
        layout="raw"
        placeholder="blur"
        style={{ position: 'absolute', top: '50px', right: '50px', opacity: 0.1 }}
      />
      <div className="container">
        <div className="about-me" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>📈</div>
          <h2 className="heading">Chcesz zdominować lokalne wyniki wyszukiwania?</h2>
          <p className="text" style={{ marginBottom: '2rem', maxWidth: '600px', margin: '1.5rem auto 2rem' }}>
            Nie czekaj, aż konkurencja zgarnie wszystkich klientów. Skontaktuj się ze mną, 
            a przygotuję darmowy audyt SEO i sprawdzę, co możemy poprawić, aby Twoja strona 
            zdobywała wyższe pozycje w wyszukiwarce.
          </p>
          <div className="container">
            <Link href="/#kontakt" className="btn">
              Zleć darmowy audyt SEO
            </Link>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default withTrans(PozycjonowanieLuban);
