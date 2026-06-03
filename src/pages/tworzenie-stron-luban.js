import React from 'react';
import Helmet from 'react-helmet';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { withTrans } from '../i18n/withTrans';
import Square1Img from '../images/square1.png';
import Circle1Img from '../images/circle1.png';
import Dots1Img from '../images/dots.png';
import OfferItem1Img from '../images/offer-item-img-1.png';

const UilLink = dynamic(
  () => import('@iconscout/react-unicons/icons/uil-link'),
  { ssr: false }
);
const UilPhoneAlt = dynamic(
  () => import('@iconscout/react-unicons/icons/uil-phone-alt'),
  { ssr: false }
);

const TworzenieStronLuban = ({ t }) => (
  <>
    <Helmet title="Tworzenie i projektowanie stron internetowych Lubań - Amadeo Media">
      <meta charSet="utf-8" />
      <meta
        name="keywords"
        content="tworzenie stron internetowych Lubań,projektowanie stron Lubań,strony www Lubań,web design Lubań,frontend developer Lubań,pozycjonowanie stron Lubań,SEO Lubań"
      />
      <meta name="author" content="Amadeusz Grzesiak" />
      <meta
        name="description"
        content="Tworzę nowoczesne strony internetowe dla firm z Lubania. Projektowanie responsywne, szybkie ładowanie, optymalizacja SEO. Skontaktuj się w sprawie bezpłatnej konsultacji."
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
          <h3 className="sub-heading">Usługi cyfrowe w Lubaniu</h3>
          <h1 className="heading">Tworzenie i projektowanie stron internetowych Lubań</h1>
          <p className="text">
            Profesjonalne strony internetowe dla firm z Lubania. Nowoczesny design, 
            szybkość, SEO i responsywność na każdym urządzeniu.
          </p>
          <div className="cta">
            <Link href="/#oferta" className="btn">
              Sprawdź ofertę
            </Link>
            <Link href="/#kontakt" className="btn secondary-btn">
              Umów bezpłatną konsultację
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
            src={OfferItem1Img}
            alt="computer"
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
          <h2 className="heading">Projektowanie stron internetowych w Lubaniu</h2>
          <p className="text">
            Jeśli szukasz profesjonalnego projektanta lub programisty do stworzenia strony internetowej 
            dla Twojej firmy w Lubaniu, trafiłeś we właściwe miejsce. Specjalizuję się w tworzeniu 
            nowoczesnych, responsywnych stron, które przyciągają klientów i zwiększają konwersje.
          </p>
          <p className="text">
            Każda strona, którą tworzę, jest zaplanowana z myślą o SEO, szybkości ładowania 
            i doświadczeniu użytkownika. To gwarantuje, że Twoja strona będzie widoczna 
            w wyszukiwarce Google i przyciągnie potencjalnych klientów z Lubania i okolic.
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
          <h2 className="heading">Czym się zajmuję?</h2>
          
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
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌍</div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.8rem', color: '#1a202c' }}>
                Responsywne strony www
              </h3>
              <p style={{ color: '#4a5568', lineHeight: '1.6', fontSize: '0.95rem' }}>
                Strony, które doskonale wyglądają na każdym urządzeniu. Pełna funkcjonalność na komputerach, 
                tabletach i smartfonach.
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
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✏️</div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.8rem', color: '#1a202c' }}>
                Projektowanie UX/UI
              </h3>
              <p style={{ color: '#4a5568', lineHeight: '1.6', fontSize: '0.95rem' }}>
                Intuicyjny interfejs skupiony na użytkowniku. Projekt nastawiony na konwersję 
                i osiąganie Twoich celów biznesowych.
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
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.8rem', color: '#1a202c' }}>
                Optymalizacja SEO
              </h3>
              <p style={{ color: '#4a5568', lineHeight: '1.6', fontSize: '0.95rem' }}>
                Strona zoptymalizowana pod wyszukiwarki Google. Pojawisz się dla słów kluczowych 
                takich jak "tworzenie stron Lubań".
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
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🛒</div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.8rem', color: '#1a202c' }}>
                Sklepy internetowe
              </h3>
              <p style={{ color: '#4a5568', lineHeight: '1.6', fontSize: '0.95rem' }}>
                Pełnofunkcyjne platformy e-commerce z płatnościami, zarządzaniem produktami 
                i systemami logistycznymi.
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
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚡</div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.8rem', color: '#1a202c' }}>
                Performance
              </h3>
              <p style={{ color: '#4a5568', lineHeight: '1.6', fontSize: '0.95rem' }}>
                Szybkie ładowanie to klucz do sukcesu. Każda strona optymalizowana 
                pod kątem wydajności i Core Web Vitals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section about-page" style={{ backgroundColor: '#f9f9f9' }}>
      <div className="container">
        <div className="about-me">
          <h2 className="heading">Dlaczego akurat ja?</h2>
          
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
                  Lokalna obecność
                </h3>
                <p style={{ color: '#4a5568', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Działam w Lubaniu i rozumiem potrzeby lokalnych firm. Możemy umówić się na spotkanie osobiście lub zdalnie.
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
                  Wieloletnie doświadczenie
                </h3>
                <p style={{ color: '#4a5568', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Mam dużo doświadczenia w web designie i developmencie. Każdy projekt dostaje pełną atencję.
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
                  Wsparcie i konsultacje
                </h3>
                <p style={{ color: '#4a5568', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Po uruchomieniu strony będę dostępny do zmian, poprawek i konsultacji SEO.
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
                  Nowoczesna technologia
                </h3>
                <p style={{ color: '#4a5568', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Używam Wordpress lub React  – technologie, które gwarantują bezpieczeństwo i skalę.
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
              { step: 1, title: 'Konsultacja', desc: 'Rozmawiamy o Twoich celach, budżecie i wymaganiach.' },
              { step: 2, title: 'Projekt', desc: 'Tworzę wireframy i mockupy. Zbieramy Twoją opinię.' },
              { step: 3, title: 'Kodowanie', desc: 'Buduje stronę z najnowszymi technologiami.' },
              { step: 4, title: 'Testowanie', desc: 'Pełne testowanie na urządzeniach i przeglądarkami.' },
              { step: 5, title: 'Wsparcie', desc: 'Dostępny jestem do zmian i optymalizacji SEO.' }
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
          <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>📞</div>
          <h2 className="heading">Gotowy na zmianę?</h2>
          <p className="text" style={{ marginBottom: '2rem', maxWidth: '600px', margin: '1.5rem auto 2rem' }}>
            Jeśli szukasz profesjonalnego projektanta i programisty do stworzenia strony internetowej 
            w Lubaniu, skontaktuj się ze mną już dziś. Oferuję bezpłatną konsultację.
          </p>
          <div className="container">
            <Link href="/#kontakt" className="btn">
              Umów bezpłatną konsultację
            </Link>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default withTrans(TworzenieStronLuban);
