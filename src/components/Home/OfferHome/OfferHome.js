import React from 'react';
import Image from 'next/image';
import { withTrans } from '../../../i18n/withTrans';
import Link from 'next/link';
import Square1Img from '../../../images/square1.png';
// import TriangleImg from '../../../images/triangle.png';
import OfferItem1Img from '../../../images/offer-item-img-1.png';
import OfferItem2Img from '../../../images/offer-item-img-2.png';
import OfferItem3Img from '../../../images/offer-item-img-3.png';
import OfferItem4Img from '../../../images/offer-item-img-4.png';
import OfferItem5Img from '../../../images/offer-item-img-5.png';
import OfferItem6Img from '../../../images/offer-item-img-6.png';

const OfferHome = ({ t }) => (
  <section className="services section" id="oferta">
    {/* <div className="shape triangle">
      <Image
        src={TriangleImg}
        alt="triangle shape"
        layout="responsive"
        placeholder="blur"
      />
    </div> */}
    <div className="container">
      <div className="services-info">
        <h3 className="sub-heading">{t('offer.smallTitle')}</h3>
        <h2 className="heading">{t('offer.bigTitle')}</h2>
        <p className="text">{t('offer.text')}</p>
        <div className="milestones">
          <div className="ml">
            <div className="number">
              <span data-target="11">{new Date().getFullYear() - 2018}</span>+
            </div>
            <span className="title">{t('offer.experience')}</span>
          </div>
          <div className="ml">
            <div className="number">
              <span data-target="79">
                {(new Date().getFullYear() - 2018) * 9}
              </span>
              +
            </div>
            <span className="title">{t('offer.projects')}</span>
          </div>
          <div className="ml">
            <div className="number">
              <span data-target="95">
                {(new Date().getFullYear() - 2018) * 5}
              </span>
              +
            </div>
            <span className="title">{t('offer.clients')}</span>
          </div>
        </div>
      </div>
      <div className="services-grid">
        <div className="srv-card">
          <div className="card-desc">
            <h2>
              <Link
                href="/tworzenie-stron-luban"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                {t('offer.websitesTitle')}
              </Link>
            </h2>
            <div className="card-img">
              <Image
                src={OfferItem1Img}
                layout="responsive"
                alt="websites"
                placeholder="blur"
              />
            </div>
            <p className="text">{t('offer.websitesText')}</p>
            <Link href="/tworzenie-stron-luban" className="srv-more">
              {t('offer.more')} →
            </Link>
          </div>
          {/* <a href="#" className="btn secondary-btn">
            Więcej
          </a> */}
        </div>
        <div className="srv-card">
          <div className="card-desc">
            <h2>
              <Link
                href="/sklepy-internetowe-luban"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                {t('offer.storesTitle')}
              </Link>
            </h2>{' '}
            <div className="card-img">
              <Image
                src={OfferItem2Img}
                layout="responsive"
                alt="e-commerce"
                placeholder="blur"
              />
            </div>
            <p className="text">{t('offer.storesText')}</p>
            <Link href="/sklepy-internetowe-luban" className="srv-more">
              {t('offer.more')} →
            </Link>
          </div>
          {/* <a href="#" className="btn secondary-btn">
            Więcej
          </a> */}
        </div>
        <div className="srv-card">
          <div className="card-desc">
            <h2>
              <Link
                href="/marketing-internetowy-luban"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                {t('offer.graphicTitle')}
              </Link>
            </h2>{' '}
            <div className="card-img">
              <Image
                src={OfferItem3Img}
                layout="responsive"
                alt="graphic design"
                placeholder="blur"
              />
            </div>
            <p className="text">{t('offer.graphicText')}</p>
            <Link href="/marketing-internetowy-luban" className="srv-more">
              {t('offer.more')} →
            </Link>
          </div>
          {/* <a href="#" className="btn secondary-btn">
            Więcej
          </a> */}
        </div>
        <div className="srv-card">
          <div className="card-desc">
            <h2>
              <Link
                href="/administrowanie-stronami"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                {t('offer.administrationTitle')}
              </Link>
            </h2>{' '}
            <div className="card-img">
              <Image
                src={OfferItem5Img}
                layout="responsive"
                alt="website administration"
                placeholder="blur"
              />
            </div>
            <p className="text">{t('offer.administrationText')}</p>
            <Link href="/administrowanie-stronami" className="srv-more">
              {t('offer.more')} →
            </Link>
          </div>
          {/* <a href="#" className="btn secondary-btn">
            Więcej
          </a> */}
        </div>
        <div className="srv-card">
          <div className="card-desc">
            <h2>
              <Link
                href="/pozycjonowanie-stron-luban"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                {t('offer.seoTitle')}
              </Link>
            </h2>{' '}
            <div className="card-img">
              <Image
                src={OfferItem4Img}
                layout="responsive"
                alt="seo"
                placeholder="blur"
              />
            </div>
            <p className="text">{t('offer.seoText')}</p>
            <Link href="/pozycjonowanie-stron-luban" className="srv-more">
              {t('offer.more')} →
            </Link>
          </div>
          {/* <a href="#" className="btn secondary-btn">
            Więcej
          </a>*/}
        </div>
        <div className="srv-card">
          <div className="card-desc">
            <h2>
              <Link
                href="/automatyzacja-ai"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                {t('offer.aiTitle')}
              </Link>
            </h2>{' '}
            <div className="card-img">
              <Image
                src={OfferItem6Img}
                layout="responsive"
                alt="ai integrations"
                placeholder="blur"
              />
            </div>
            <p className="text">{t('offer.aiText')}</p>
            <Link href="/automatyzacja-ai" className="srv-more">
              {t('offer.more')} →
            </Link>
          </div>
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
);

export default withTrans(OfferHome);
