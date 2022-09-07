import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { withTrans } from '../../../i18n/withTrans';
// import TriangleImg from '../../../images/triangle.png';
import PricingImg from '../../../images/icon-about1.JPG';
import GraphicImg from '../../../images/icon-about2.JPG';
import TestingImg from '../../../images/icon-about3.JPG';
import ProgrammingImg from '../../../images/icon-about4.JPG';

const AboutHome = ({ t }) => (
  <section className="about section" id="o-mnie">
    {/* <div className="shape triangle">
      <Image src={TriangleImg} alt="triangle shape" layout="responsive" />
    </div> */}
    <div className="container">
      <div className="about-grid">
        <div className="about-card">
          <div className="icon">
            <Image src={PricingImg} alt="Pricing" layout="responsive" />
          </div>
          <span>{t('aboutHome.imageTitle1')}</span>
        </div>
        <div className="about-card">
          <div className="icon">
            <Image src={GraphicImg} alt="Graphic design" layout="responsive" />
          </div>
          <span>{t('aboutHome.imageTitle2')}</span>
        </div>
        <div className="about-card">
          <div className="icon">
            <Image src={TestingImg} alt="Testing" layout="responsive" />
          </div>
          <span>{t('aboutHome.imageTitle4')}</span>
        </div>
        <div className="about-card">
          <div className="icon">
            <Image src={ProgrammingImg} alt="Programming" layout="responsive" />
          </div>
          <span>{t('aboutHome.imageTitle3')}</span>
        </div>
      </div>
      <div className="about-info">
        <span className="sub-heading">{t('aboutHome.smallTitle')}</span>
        <h2 className="heading">{t('aboutHome.bigTitle')}</h2>
        <p className="text">{t('aboutHome.text')}</p>
        <div className="cta">
          <Link href="/o-mnie">
            <a className="btn">{t('aboutHome.more')}</a>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default withTrans(AboutHome);
