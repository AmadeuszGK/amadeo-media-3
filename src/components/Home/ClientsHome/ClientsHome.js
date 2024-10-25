import React from 'react';
import Image from 'next/image';
import { withTrans } from '../../../i18n/withTrans';
import Square1Img from '../../../images/square1.png';
import CircleImg from '../../../images/circle2.png';
import GoogleLogoImg from '../../../images/google-logo.webp';
import MobileReviewImg from '../../../images/review-mobile.jpg';
import StarsImg from '../../../images/5-stars.png';

const ClientsHome = ({ t }) => {
  return (
    <section className="testimonials section">
      <div className="container">
        <div className="section-background">
          <div className="testimonials-title">
            <h3 className="sub-heading">{t('clients.smallTitle')}</h3>
            <h2 className="heading">{t('clients.bigTitle')}</h2>
            <Image
              src={GoogleLogoImg}
              alt="google logo"
              width={150}
              height={40}
              layout="raw"
              placeholder="blur"
              className="google-logo"
            />
            <div className="review">
              <p className="text">5.0</p>
              <Image
                src={StarsImg}
                alt="5 stars"
                width={110}
                height={22}
                layout="raw"
                placeholder="blur"
              />
              <p className="text">13 Opinii</p>
            </div>
            <p className="text">{t('clients.text')}</p>
            <Image
              src={MobileReviewImg}
              alt="Mobile review"
              width={523}
              height={1216}
              layout="raw"
              placeholder="blur"
              className="review-mobile-image"
            />
          </div>
          <div className="circle">
            <Image src={CircleImg} alt="circle shape" layout="responsive" />
          </div>
          <div className="shape square">
            <Image src={Square1Img} alt="square shape" layout="responsive" />
          </div>
        </div>
        <div className="swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="testimonials-title">
                <h3 className="sub-heading">{t('clients.smallTitle')}</h3>
                <h2 className="heading">{t('clients.bigTitle')}</h2>
              </div>
              <Image
                src={GoogleLogoImg}
                alt="google logo"
                width={150}
                height={40}
                layout="raw"
                placeholder="blur"
                className="google-logo"
              />
              <div className="review">
                <p className="text">5.0</p>
                <Image
                  src={StarsImg}
                  alt="5 stars"
                  width={110}
                  height={22}
                  layout="raw"
                  placeholder="blur"
                />
                <p className="text">13 Opinii</p>
              </div>
              <p className="text">{t('clients.text')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withTrans(ClientsHome);
