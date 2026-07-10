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
    <Helmet title={t('seoLuban.metaTitle')}>
      <meta charSet="utf-8" />
      <meta
        name="keywords"
        content="pozycjonowanie stron lubań, pozycjonowanie lubań, seo lubań, pozycjonowanie stron internetowych lubań, agencja seo lubań, optymalizacja stron lubań, audyt seo lubań"
      />
      <meta name="author" content="Amadeusz Grzesiak" />
      <meta
        name="description"
        content={t('seoLuban.metaDescription')}
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
          <h3 className="sub-heading">{t('seoLuban.heroSubHeading')}</h3>
          <h1 className="heading">{t('seoLuban.heroHeading')}</h1>
          <p className="text" dangerouslySetInnerHTML={{ __html: t('seoLuban.heroText') }} />
          <div className="cta">
            <Link href="/#oferta" className="btn">
              {t('seoLuban.heroBtn1')}
            </Link>
            <Link href="/#kontakt" className="btn secondary-btn">
              {t('seoLuban.heroBtn2')}
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
            {t('seoLuban.aboutHeading')}
          </h2>
          <p className="text" dangerouslySetInnerHTML={{ __html: t('seoLuban.aboutText1') }} />
          <p className="text" dangerouslySetInnerHTML={{ __html: t('seoLuban.aboutText2') }} />
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
            {t('seoLuban.featuresHeading')}
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
                {t('seoLuban.feature1Title')}
              </h3>
              <p
                style={{
                  color: '#4a5568',
                  lineHeight: '1.6',
                  fontSize: '0.95rem',
                }}
              >
                {t('seoLuban.feature1Text')}
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
                {t('seoLuban.feature2Title')}
              </h3>
              <p
                style={{
                  color: '#4a5568',
                  lineHeight: '1.6',
                  fontSize: '0.95rem',
                }}
              >
                {t('seoLuban.feature2Text')}
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
                {t('seoLuban.feature3Title')}
              </h3>
              <p
                style={{
                  color: '#4a5568',
                  lineHeight: '1.6',
                  fontSize: '0.95rem',
                }}
              >
                {t('seoLuban.feature3Text')}
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
                {t('seoLuban.feature4Title')}
              </h3>
              <p
                style={{
                  color: '#4a5568',
                  lineHeight: '1.6',
                  fontSize: '0.95rem',
                }}
              >
                {t('seoLuban.feature4Text')}
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
                {t('seoLuban.feature5Title')}
              </h3>
              <p
                style={{
                  color: '#4a5568',
                  lineHeight: '1.6',
                  fontSize: '0.95rem',
                }}
              >
                {t('seoLuban.feature5Text')}
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
            {t('seoLuban.whyHeading')}
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
                  {t('seoLuban.why1Title')}
                </h3>
                <p
                  style={{
                    color: '#4a5568',
                    fontSize: '0.95rem',
                    lineHeight: '1.6',
                  }}
                >
                  {t('seoLuban.why1Text')}
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
                  {t('seoLuban.why2Title')}
                </h3>
                <p
                  style={{
                    color: '#4a5568',
                    fontSize: '0.95rem',
                    lineHeight: '1.6',
                  }}
                >
                  {t('seoLuban.why2Text')}
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
                  {t('seoLuban.why3Title')}
                </h3>
                <p
                  style={{
                    color: '#4a5568',
                    fontSize: '0.95rem',
                    lineHeight: '1.6',
                  }}
                >
                  {t('seoLuban.why3Text')}
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
                  {t('seoLuban.why4Title')}
                </h3>
                <p
                  style={{
                    color: '#4a5568',
                    fontSize: '0.95rem',
                    lineHeight: '1.6',
                  }}
                >
                  {t('seoLuban.why4Text')}
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
          <h2 className="heading">{t('seoLuban.stepsHeading')}</h2>

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
                title: t('seoLuban.step1Title'),
                desc: t('seoLuban.step1Text'),
              },
              {
                step: 2,
                title: t('seoLuban.step2Title'),
                desc: t('seoLuban.step2Text'),
              },
              {
                step: 3,
                title: t('seoLuban.step3Title'),
                desc: t('seoLuban.step3Text'),
              },
              {
                step: 4,
                title: t('seoLuban.step4Title'),
                desc: t('seoLuban.step4Text'),
              },
              {
                step: 5,
                title: t('seoLuban.step5Title'),
                desc: t('seoLuban.step5Text'),
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
            {t('seoLuban.ctaHeading')}
          </h2>
          <p
            className="text"
            style={{
              marginBottom: '2rem',
              maxWidth: '600px',
              margin: '1.5rem auto 2rem',
            }}
          >
            {t('seoLuban.ctaText')}
          </p>
          <div className="container">
            <Link href="/#kontakt" className="btn">
              {t('seoLuban.ctaBtn')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default withTrans(PozycjonowanieLuban);
