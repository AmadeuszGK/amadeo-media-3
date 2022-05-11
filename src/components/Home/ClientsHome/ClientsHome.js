import React from 'react';
import Image from 'next/image';
import { withTrans } from '../../../i18n/withTrans';
import Square1Img from '../../../images/square1.png';
import CircleImg from '../../../images/circle2.png';
import DataboutImg from '../../../images/databout-logo.png';
import Wolnosci14Img from '../../../images/wolnosci14-logo.png';
import ChiarashopImg from '../../../images/chiarashop-logo.png';
import InleiImg from '../../../images/inlei-logo.png';
import GoodsideImg from '../../../images/goodside-logo.png';
import QuadrigaImg from '../../../images/quadriga-logo.png';
import MkprestigeImg from '../../../images/mkprestige-logo.svg';
import PromaticImg from '../../../images/promatic-logo.png';
import SecretpleasureImg from '../../../images/secretpleasure-logo.svg';

const ClientsHome = ({ t }) => {
  return (
    <section className="testimonials section">
      <div className="container">
        <div className="section-background">
          <div className="testimonials-title">
            <h3 className="sub-heading">{t('clients.smallTitle')}</h3>
            <h2 className="heading">{t('clients.bigTitle')}</h2>
          </div>
          <div className="circle">
            <Image src={CircleImg} alt="circle shape" layout="responsive" />
          </div>
          <div className="shape square">
            <Image src={Square1Img} alt="square shape" layout="responsive" />
          </div>
          <div className="clients__item">
            <div className="clients-img">
              <Image
                src={DataboutImg}
                alt="databout logo"
                layout="responsive"
              />
            </div>
          </div>
          <div className="clients__item">
            <div className="clients-img">
              <Image
                src={Wolnosci14Img}
                alt="wolnosci 14"
                layout="responsive"
              />
            </div>
          </div>
          <div className="clients__item">
            <div className="clients-img">
              <Image src={ChiarashopImg} alt="chiarashop" layout="responsive" />
            </div>
          </div>
          <div className="clients__item">
            <div className="clients-img">
              <Image src={InleiImg} alt="inlei" layout="responsive" />
            </div>
          </div>
          <div className="clients__item">
            <div className="clients-img">
              <Image src={GoodsideImg} alt="goodside" layout="responsive" />
            </div>
          </div>
          <div className="clients__item">
            <div className="clients-img">
              <Image src={QuadrigaImg} alt="quadriga" layout="responsive" />
            </div>
          </div>
          <div className="clients__item">
            <div className="clients-img">
              <Image src={MkprestigeImg} alt="mkprestige" layout="responsive" />
            </div>
          </div>
          <div className="clients__item">
            <div className="clients-img">
              <Image src={PromaticImg} alt="promatic" layout="responsive" />
            </div>
          </div>
          <div className="clients__item">
            <div className="clients-img">
              <Image
                src={SecretpleasureImg}
                alt="secret pleasure"
                layout="responsive"
              />
            </div>
          </div>
        </div>
        <div className="swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="testimonials-title">
                <h3 className="sub-heading">{t('clients.smallTitle')}</h3>
                <h2 className="heading">{t('clients.bigTitle')}</h2>
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
