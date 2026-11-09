import React, { useState } from 'react';
import Image from 'next/image';
import { withTrans } from '../../../i18n/withTrans';
import Square1Img from '../../../images/square1.png';
import CircleImg from '../../../images/circle2.png';
import GoogleLogoImg from '../../../images/google-logo.webp';
import StarsImg from '../../../images/5-stars.png';
import {
  reviews,
  GOOGLE_RATING,
  GOOGLE_REVIEWS_COUNT,
  GOOGLE_REVIEWS_URL,
} from '../../../lib/reviews';

const LONG_REVIEW = 230;

const ReviewCard = ({ review, t }) => {
  const [open, setOpen] = useState(false);
  const isLong = review.text.length > LONG_REVIEW;

  return (
    <article className="review-card">
      <div className="review-card-head">
        <span className="review-avatar" aria-hidden="true">
          {review.name.charAt(0).toUpperCase()}
        </span>
        <h4>{review.name}</h4>
      </div>
      <Image src={StarsImg} alt="5/5" width={96} height={19} layout="raw" />
      <p className={`review-text${isLong && !open ? ' clamp' : ''}`}>
        {review.text}
      </p>
      {isLong && (
        <button
          type="button"
          className="review-more"
          onClick={() => setOpen(!open)}
        >
          {open ? t('clients.less') : t('clients.more')}
        </button>
      )}
    </article>
  );
};

const ClientsHome = ({ t }) => {
  const title = (
    <>
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
        <p className="text">{GOOGLE_RATING}</p>
        <Image
          src={StarsImg}
          alt="5 stars"
          width={110}
          height={22}
          layout="raw"
          placeholder="blur"
        />
        <p className="text">
          {GOOGLE_REVIEWS_COUNT} {t('clients.count')}
        </p>
      </div>
      <p className="text">{t('clients.text')}</p>
      <a
        className="btn reviews-link"
        href={GOOGLE_REVIEWS_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        {t('clients.seeAll')}
      </a>
    </>
  );

  return (
    <section className="testimonials section">
      <div className="container">
        <div className="section-background">
          <div className="testimonials-title">{title}</div>
          <div className="reviews-grid">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} t={t} />
            ))}
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
            <div className="swiper-slide">{title}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withTrans(ClientsHome);
