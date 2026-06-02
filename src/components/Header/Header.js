import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { withTrans } from '../../i18n/withTrans';
import Square1Img from '../../images/square1.png';
import LamptopImg from '../../images/amadeusz-pic-1.png';
import Circle1Img from '../../images/circle1.png';
import Dots1Img from '../../images/dots.png';

if (typeof window !== 'undefined') {
  require('smooth-scroll')('a[href*="#"]');
}

const Header = ({ t }) => (
  <section className="showcase-area" id="home">
    <div className="shape square">
      <Image
        src={Square1Img}
        alt="square shape"
        layout="responsive"
        placeholder="blur"
      />
    </div>
    <div className="container">
      <div className="showcase-info">
        <h3 className="sub-heading">Amadeusz Grzesiak</h3>
        <h1 className="heading">{t('header.bigTitle')}</h1>
        <p className="text text-heading">{t('header.text')}</p>
        <div className="cta">
          <Link href="/#portfolio" className="btn" activeClassName="active">
            {t('header.portfolio')}
          </Link>
          <Link
            href="/#kontakt"
            className="btn secondary-btn"
            activeClassName="active"
          >
            {t('header.contactMe')}
          </Link>
        </div>
      </div>
      <div className="showcase-image">
        <div className="person">
          <Image
            src={LamptopImg}
            alt="laptop"
            layout="responsive"
            placeholder="blur"
          />
        </div>
        <div className="shape circle">
          <Image
            src={Circle1Img}
            alt="circle shape"
            layout="responsive"
            placeholder="blur"
          />
        </div>
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
);

export default withTrans(Header);
