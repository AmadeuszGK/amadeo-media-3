import React from 'react';
import Skills from '../Skills/Skills';
import { withTrans } from '../../i18n/withTrans';
import Image from 'next/image';
import Link from 'next/link';
import Square1Img from '../../images/square1.png';
import Circle1Img from '../../images/circle1.png';
import AmadeuszGrzesiakImg from '../../images/amadeusz-grzesiak.jpg';
// import Triangle1Img from '../../images/triangle.png';
import DotsImg from '../../images/dots.png';

const AboutUs = ({ t }) => (
  <>
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
          <h3 className="sub-heading">Front-end Developer</h3>
          <h1 className="heading">Amadeusz Grzesiak</h1>
          <p className="text">{t('aboutMe.text1')}</p>
          <div className="cta">
            <Link href="/#oferta" activeClassName="active">
              <a className="btn">{t('aboutMe.button1')}</a>
            </Link>
            <Link href="/#kontakt">
              <a className="btn secondary-btn">{t('aboutMe.button2')}</a>
            </Link>
          </div>
        </div>
        <div className="showcase-imagee">
          <div className="shape circle">
            <Image
              src={Circle1Img}
              alt="circle shape"
              layout="responsive"
              placeholder="blur"
            />
          </div>
          <div className="shape aboutme">
            <Image
              src={AmadeuszGrzesiakImg}
              alt="Amadeusz Grzesiak"
              placeholder="blur"
              layout="responsive"
              priority
            />
          </div>
          <div className="shape dots">
            <Image
              src={DotsImg}
              alt="dots shape"
              layout="responsive"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </section>
    <section className="section about-page" id="o-mnie">
      {/* <div className="shape triangle">
        <Image
          src={Triangle1Img}
          alt="triangle shape"
          layout="responsive"
          placeholder="blur"
        />
      </div> */}
      <div className="container">
        <div className="about-me">
          <h3 className="sub-heading">{t('aboutMe.smallTitle2')}</h3>
          <h2 className="heading">{t('aboutMe.bigTitle2')}</h2>
          <p className="text">{t('aboutMe.text2')}</p>
          <p className="text">{t('aboutMe.text3')}</p>
        </div>
      </div>
    </section>
    <section className="skills section">
      <div className="container">
        <div className="skills-box">
          <div className="box-heading">
            <h3 className="sub-heading">{t('aboutMe.smallTitle3')}</h3>
            <h2 className="heading">{t('aboutMe.bigTitle3')}</h2>
            <div className="box-desc">
              <p className="text">{t('aboutMe.text4')}</p>
            </div>
          </div>
          <div className="skills-wrap"></div>
          <Skills />
          <div className="shape dots">
            <Image
              src={DotsImg}
              alt="dots shape"
              layout="responsive"
              placeholder="blur"
            />
          </div>
          <div className="shape square">
            <Image
              src={Square1Img}
              alt="square shape"
              layout="responsive"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </section>
  </>
);

export default withTrans(AboutUs);
