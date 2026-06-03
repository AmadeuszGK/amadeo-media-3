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
    <Helmet title="Pozycjonowanie Stron Lubań (SEO) | Profesjonalne Usługi Google">
      <meta charSet="utf-8" />
      <meta
        name="keywords"
        content="pozycjonowanie stron lubań, pozycjonowanie lubań, seo lubań, pozycjonowanie stron internetowych lubań, agencja seo lubań, optymalizacja stron lubań, audyt seo lubań"
      />
      <meta name="author" content="Amadeusz Grzesiak" />
      <meta
        name="description"
        content="Interesuje Cię skuteczne pozycjonowanie stron w Lubaniu? Zwiększ widoczność w Google, wyprzedź konkurencję i zdobądź klientów. Zamów darmowy audyt SEO!"
      />
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
          <h3 className="sub-heading">Marketing w wyszukiwarce Google</h3>
          <h1 className="heading">Pozycjonowanie stron Lubań</h1>
          <p className="text">
            Chcesz, aby Twoja firma była widoczna na pierwszej stronie w
            wynikach wyszukiwania? Oferuję profesjonalne
            <b>pozycjonowanie stron w Lubaniu</b> i okolicach. Pomagam lokalnym
            biznesom zdobywać wysokie pozycje, zwiększać ruch i pozyskiwać
            wartościowe zapytania od klientów.
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
        <div
          className="showcase-imagee"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
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
            alt="Skuteczne pozycjonowanie stron Lubań i audyt SEO"
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
          {/* POPRAWKA SEO: Naturalne wplecenie frazy w H2 */}
          <h2 className="heading">
            Kompleksowe pozycjonowanie stron internetowych w Lubaniu
          </h2>
          <p className="text">
            Sama nowoczesna strona internetowa nie przyniesie zysków, jeśli nikt
            na nią nie trafia. Aby Twój biznes mógł się rozwijać, niezbędne jest
            <b>skuteczne pozycjonowanie stron. Lubań</b> to rynek, na którym
            lokalne firmy coraz mocniej walczą o pozycję lidera w Google. Moim
            zadaniem jest sprawić, aby to Twoja oferta wyświetlała się najwyżej,
            gdy potencjalny klient szuka oferowanych przez Ciebie usług.
          </p>
          <p className="text">
            W ramach współpracy wdrażam dedykowane strategie SEO, dopasowane do
            specyfiki lokalnego rynku na Dolnym Śląsku. Dobieram frazy o wysokim
            potencjale sprzedażowym (np. *„mechanik Lubań”*, *„fryzjer Lubań”*
            czy *„usługi budowlane Lubań”*), optymalizuję kod techniczny i
            buduję silny profil linków.
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
        style={{
          position: 'absolute',
          top: '100px',
          left: '50px',
          opacity: 0.1,
        }}
      />
      <div className="container">
        <div className="about-me">
          <h2 className="heading">
            Co wchodzi w skład pozycjonowania strony w Google?
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              marginTop: '3rem',
            }}
          >
            <div
              style={{
                padding: '2rem',
                borderRadius: '12px',
                backgroundColor: '#f9f9f9',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                transition: 'transform 0.3s ease, boxShadow 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔎</div>
              <h3
                style={{
                  fontSize: '1.2rem',
                  marginBottom: '0.8rem',
                  color: '#1a202c',
                }}
              >
                Darmowy Audyt SEO na start
              </h3>
              <p
                style={{
                  color: '#4a5568',
                  lineHeight: '1.6',
                  fontSize: '0.95rem',
                }}
              >
                Dokładnie analizuję błędy techniczne i strukturę kodu Twojej
                witryny. Sprawdzam, co blokuje Twoją stronę przed wejściem do
                TOP 10.
              </p>
            </div>

            <div
              style={{
                padding: '2rem',
                borderRadius: '12px',
                backgroundColor: '#f9f9f9',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                transition: 'transform 0.3s ease, boxShadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔑</div>
              <h3
                style={{
                  fontSize: '1.2rem',
                  marginBottom: '0.8rem',
                  color: '#1a202c',
                }}
              >
                Analiza i dobór fraz kluczowych
              </h3>
              <p
                style={{
                  color: '#4a5568',
                  lineHeight: '1.6',
                  fontSize: '0.95rem',
                }}
              >
                Wybieram słowa kluczowe, które Twoi potencjalni klienci z
                Lubania wpisują w wyszukiwarkę. Stawiam na frazy, które generują
                realne zyski.
              </p>
            </div>

            <div
              style={{
                padding: '2rem',
                borderRadius: '12px',
                backgroundColor: '#f9f9f9',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                transition: 'transform 0.3s ease, boxShadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚙️</div>
              <h3
                style={{
                  fontSize: '1.2rem',
                  marginBottom: '0.8rem',
                  color: '#1a202c',
                }}
              >
                Optymalizacja techniczna (On-Page SEO)
              </h3>
              <p
                style={{
                  color: '#4a5568',
                  lineHeight: '1.6',
                  fontSize: '0.95rem',
                }}
              >
                Przyspieszam ładowanie strony, dbam o pełną responsywność,
                poprawiam meta tagi oraz optymalizuję wskaźniki Core Web Vitals.
              </p>
            </div>

            <div
              style={{
                padding: '2rem',
                borderRadius: '12px',
                backgroundColor: '#f9f9f9',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                transition: 'transform 0.3s ease, boxShadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📝</div>
              <h3
                style={{
                  fontSize: '1.2rem',
                  marginBottom: '0.8rem',
                  color: '#1a202c',
                }}
              >
                Seo Copywriting i Content Marketing
              </h3>
              <p
                style={{
                  color: '#4a5568',
                  lineHeight: '1.6',
                  fontSize: '0.95rem',
                }}
              >
                Tworzę unikalne, wartościowe teksty, które angażują
                użytkowników, a robotom Google dostarczają idealnie
                zoptymalizowane treści.
              </p>
            </div>

            <div
              style={{
                padding: '2rem',
                borderRadius: '12px',
                backgroundColor: '#f9f9f9',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                transition: 'transform 0.3s ease, boxShadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📍</div>
              <h3
                style={{
                  fontSize: '1.2rem',
                  marginBottom: '0.8rem',
                  color: '#1a202c',
                }}
              >
                Pozycjonowanie lokalne Lubań
              </h3>
              <p
                style={{
                  color: '#4a5568',
                  lineHeight: '1.6',
                  fontSize: '0.95rem',
                }}
              >
                Zwiększam widoczność firmy w regionie. Optymalizuję profil firmy
                w Mapach Google (Google My Business), ściągając ruch prosto z
                Twojej okolicy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      className="section about-page"
      style={{ backgroundColor: '#f9f9f9' }}
    >
      <div className="container">
        <div className="about-me">
          <h2 className="heading">
            Dlaczego lokalne SEO to najlepsza inwestycja dla firm z Lubania?
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
              marginTop: '3rem',
            }}
          >
            <div
              style={{
                padding: '1.5rem',
                display: 'flex',
                gap: '1.5rem',
                alignItems: 'flex-start',
              }}
            >
              <div
                style={{
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
                  fontWeight: 'bold',
                }}
              >
                ✓
              </div>
              <div>
                <h3
                  style={{
                    fontSize: '1.1rem',
                    marginBottom: '0.5rem',
                    color: '#1a202c',
                  }}
                >
                  Klienci gotowi na zakup
                </h3>
                <p
                  style={{
                    color: '#4a5568',
                    fontSize: '0.95rem',
                    lineHeight: '1.6',
                  }}
                >
                  Osoby wpisujące w Google frazy lokalne szukają usług „na już”.
                  Dobrze pozycjonowana strona przejmuje te wartościowe leady.
                </p>
              </div>
            </div>

            <div
              style={{
                padding: '1.5rem',
                display: 'flex',
                gap: '1.5rem',
                alignItems: 'flex-start',
              }}
            >
              <div
                style={{
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
                  fontWeight: 'bold',
                }}
              >
                ✓
              </div>
              <div>
                <h3
                  style={{
                    fontSize: '1.1rem',
                    marginBottom: '0.5rem',
                    color: '#1a202c',
                  }}
                >
                  Dominacja nad konkurencją
                </h3>
                <p
                  style={{
                    color: '#4a5568',
                    fontSize: '0.95rem',
                    lineHeight: '1.6',
                  }}
                >
                  Większość lokalnych firm zaniedbuje SEO. Inwestując w
                  pozycjonowanie witryny, zyskujesz ogromną przewagę w regionie
                  Lubań.
                </p>
              </div>
            </div>

            <div
              style={{
                padding: '1.5rem',
                display: 'flex',
                gap: '1.5rem',
                alignItems: 'flex-start',
              }}
            >
              <div
                style={{
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
                  fontWeight: 'bold',
                }}
              >
                ✓
              </div>
              <div>
                <h3
                  style={{
                    fontSize: '1.1rem',
                    marginBottom: '0.5rem',
                    color: '#1a202c',
                  }}
                >
                  Długofalowe, stabilne wyniki
                </h3>
                <p
                  style={{
                    color: '#4a5568',
                    fontSize: '0.95rem',
                    lineHeight: '1.6',
                  }}
                >
                  W przeciwieństwie do płatnych reklam Ads, organiczne
                  pozycjonowanie przynosi stabilny ruch nawet po zakończeniu
                  głównych prac optymalizacyjnych.
                </p>
              </div>
            </div>

            <div
              style={{
                padding: '1.5rem',
                display: 'flex',
                gap: '1.5rem',
                alignItems: 'flex-start',
              }}
            >
              <div
                style={{
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
                  fontWeight: 'bold',
                }}
              >
                ✓
              </div>
              <div>
                <h3
                  style={{
                    fontSize: '1.1rem',
                    marginBottom: '0.5rem',
                    color: '#1a202c',
                  }}
                >
                  Raporty i transparentność
                </h3>
                <p
                  style={{
                    color: '#4a5568',
                    fontSize: '0.95rem',
                    lineHeight: '1.6',
                  }}
                >
                  Działam transparentnie. Każdego miesiąca sprawdzisz precyzyjne
                  wzrosty widoczności oraz pozycje kluczowych fraz.
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
        style={{
          position: 'absolute',
          bottom: '100px',
          right: '50px',
          opacity: 0.1,
        }}
      />
      <div className="container">
        <div className="about-me">
          <h2 className="heading">Jak krok po kroku pozycjonuję strony www?</h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem',
              marginTop: '3rem',
            }}
          >
            {[
              {
                step: 1,
                title: 'Darmowy Audyt SEO',
                desc: 'Analizuję obecny stan techniczny witryny oraz lokalną konkurencję.',
              },
              {
                step: 2,
                title: 'Dobór słów kluczowych',
                desc: 'Wybieram precyzyjne frazy z potencjałem na konwersję i sprzedaż.',
              },
              {
                step: 3,
                title: 'Optymalizacja kodu i treści',
                desc: 'Wdrażam poprawki techniczne, przyspieszam stronę i rozbudowuję teksty.',
              },
              {
                step: 4,
                title: 'Skuteczny Link Building',
                desc: 'Pozyskuję wartościowe odnośniki podnoszące autorytet domeny w oczach Google.',
              },
              {
                step: 5,
                title: 'Analityka i monitoring',
                desc: 'Stale badam zachowania użytkowników i optymalizuję pozycje w rankingu.',
              },
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
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#667eea';
                  e.currentTarget.style.boxShadow =
                    '0 8px 24px rgba(102, 126, 234, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div
                  style={{
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
                    boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)',
                  }}
                >
                  {item.step}
                </div>
                <h3
                  style={{
                    fontSize: '1.1rem',
                    marginBottom: '0.8rem',
                    color: '#1a202c',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    color: '#4a5568',
                    fontSize: '0.9rem',
                    lineHeight: '1.6',
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section
      className="section about-page"
      style={{ backgroundColor: '#f0f4ff', position: 'relative' }}
    >
      <Image
        src={Square1Img}
        alt="square shape"
        width={70}
        height={70}
        className="shape square"
        layout="raw"
        placeholder="blur"
        style={{
          position: 'absolute',
          top: '50px',
          right: '50px',
          opacity: 0.1,
        }}
      />
      <div className="container">
        <div className="about-me" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>📈</div>
          <h2 className="heading">
            Chcesz zwiększyć zyski i zamówić pozycjonowanie stron w Lubaniu?
          </h2>
          <p
            className="text"
            style={{
              marginBottom: '2rem',
              maxWidth: '600px',
              margin: '1.5rem auto 2rem',
            }}
          >
            Nie pozwól, aby konkurencyjne firmy przejmowały Twoich klientów w
            wyszukiwarce. Skontaktuj się ze mną, a przygotuję dla Ciebie
            bezpłatną analizę i podpowiem, jak skutecznie wybić Twoją witrynę na
            najwyższe pozycje.
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
