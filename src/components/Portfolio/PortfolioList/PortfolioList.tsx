import React from 'react';
import { portfolioItemTypes } from '../PortfolioWrapper';
import Image from 'next/image';
import ChiarashopImg from '../../../images/chiarashop-ss.jpg';
import MkprestigeImg from '../../../images/mkprestige-ss.jpg';
import EquilibriumImg from '../../../images/equilibrium-ss.jpg';
import DataboutImg from '../../../images/databout-ss.jpg';
import PromaticImg from '../../../images/promatic-online-ss.jpg';
import DiscoKingImg from '../../../images/disco-king-ss.jpg';
import Wolnosci14Img from '../../../images/wolnosci14-ss.jpg';
import InleiImg from '../../../images/inlei-ss.jpg';
import SecretPleasureImg from '../../../images/secret-pleasure-ss.jpg';
import { UilLink } from '../../Menu/Menu';

type PortfolioListProps = {
  filter: portfolioItemTypes;
};

const PortfolioList: React.FC<PortfolioListProps> = ({ filter }) => {
  return (
    <>
      {filter === `default` && (
        <>
          <a className="mix prt-card inter" href="https://chiarashop.pl">
            <div className="prt-image">
              <div className="portfolio-img">
                <Image
                  src={ChiarashopImg}
                  alt="Chiara Shop"
                  layout="responsive"
                />
              </div>
              <div className="prt-overlay">
                <div className="prt-icon">
                  <UilLink />
                </div>
              </div>
            </div>
            <div className="prt-desc">
              <h3>Chiara Shop</h3>
            </div>
          </a>
          <a className="mix prt-card inter" href="https://mk-prestige.pl/">
            <div className="prt-image">
              <div className="portfolio-img">
                <Image
                  src={MkprestigeImg}
                  alt="MK Prestige - Miłosz Kuriata"
                  layout="responsive"
                />
              </div>
              <div className="prt-overlay">
                <div className="prt-icon">
                  <UilLink />
                </div>
              </div>
            </div>
            <div className="prt-desc">
              <h3>MK Prestige - Miłosz Kuriata</h3>
            </div>
          </a>
          <a
            className="mix prt-card inter"
            href="https://www.equilibrium-canna.biz/"
          >
            <div className="prt-image">
              <div className="portfolio-img">
                <Image
                  src={EquilibriumImg}
                  alt="Equilibrium Premium Cannabiotics"
                  layout="responsive"
                />
              </div>
              <div className="prt-overlay">
                <div className="prt-icon">
                  <UilLink />
                </div>
              </div>
            </div>
            <div className="prt-desc">
              <h3>Equilibrium Premium Cannabiotics</h3>
            </div>
          </a>
          <a className="mix prt-card inter" href="https://databout.com">
            <div className="prt-image">
              <div className="portfolio-img">
                <Image src={DataboutImg} alt="Databout" layout="responsive" />
              </div>
              <div className="prt-overlay">
                <div className="prt-icon">
                  <UilLink />
                </div>
              </div>
            </div>
            <div className="prt-desc">
              <h3>Databout</h3>
            </div>
          </a>
          <a className="mix prt-card inter" href="http://promaticonline.com">
            <div className="prt-image">
              <div className="portfolio-img">
                <Image
                  src={PromaticImg}
                  alt="Promatic Online"
                  layout="responsive"
                />
              </div>
              <div className="prt-overlay">
                <div className="prt-icon">
                  <UilLink />
                </div>
              </div>
            </div>
            <div className="prt-desc">
              <h3>Promatic Online</h3>
            </div>
          </a>
          <a className="mix prt-card inter" href="http://discoking.pl">
            <div className="prt-image">
              <div className="portfolio-img">
                <Image
                  src={DiscoKingImg}
                  alt="Disco King"
                  layout="responsive"
                />
              </div>
              <div className="prt-overlay">
                <div className="prt-icon">
                  <UilLink />
                </div>
              </div>
            </div>
            <div className="prt-desc">
              <h3>Disco King (Promatic)</h3>
            </div>
          </a>
          <a className="mix prt-card inter" href="http://wolnosci14.pl">
            <div className="prt-image">
              <div className="portfolio-img">
                <Image
                  src={Wolnosci14Img}
                  alt="Wolności 14"
                  layout="responsive"
                />
              </div>
              <div className="prt-overlay">
                <div className="prt-icon">
                  <UilLink />
                </div>
              </div>
            </div>
            <div className="prt-desc">
              <h3>Wolności 14 (Promatic)</h3>
            </div>
          </a>
          <a className="mix prt-card inter" href="https://inlei.pl">
            <div className="prt-image">
              <div className="portfolio-img">
                <Image src={InleiImg} alt="Inlei" layout="responsive" />
              </div>
              <div className="prt-overlay">
                <div className="prt-icon">
                  <UilLink />
                </div>
              </div>
            </div>
            <div className="prt-desc">
              <h3>Inlei</h3>
            </div>
          </a>
          <a className="mix prt-card inter" href="https://secretpleasure.pl/">
            <div className="prt-image">
              <div className="portfolio-img">
                <Image
                  src={SecretPleasureImg}
                  alt="Secret Pleasure"
                  layout="responsive"
                />
              </div>
              <div className="prt-overlay">
                <div className="prt-icon">
                  <UilLink />
                </div>
              </div>
            </div>
            <div className="prt-desc">
              <h3>Secret Pleasure</h3>
            </div>
          </a>
        </>
      )}

      {filter === `website` && (
        <>
          <a className="mix prt-card inter" href="https://mk-prestige.pl/">
            <div className="prt-image">
              <div className="portfolio-img">
                <Image
                  src={MkprestigeImg}
                  alt="MK Prestige - Miłosz Kuriata"
                  layout="responsive"
                />
              </div>
              <div className="prt-overlay">
                <div className="prt-icon">
                  <UilLink />
                </div>
              </div>
            </div>
            <div className="prt-desc">
              <h3>MK Prestige - Miłosz Kuriata</h3>
            </div>
          </a>
          <a className="mix prt-card inter" href="https://databout.com">
            <div className="prt-image">
              <div className="portfolio-img">
                <Image src={DataboutImg} alt="Databout" layout="responsive" />
              </div>
              <div className="prt-overlay">
                <div className="prt-icon">
                  <UilLink />
                </div>
              </div>
            </div>
            <div className="prt-desc">
              <h3>Databout</h3>
            </div>
          </a>
          <a className="mix prt-card inter" href="http://promaticonline.com">
            <div className="prt-image">
              <div className="portfolio-img">
                <Image
                  src={PromaticImg}
                  alt="Promatic Online"
                  layout="responsive"
                />
              </div>
              <div className="prt-overlay">
                <div className="prt-icon">
                  <UilLink />
                </div>
              </div>
            </div>
            <div className="prt-desc">
              <h3>Promatic Online</h3>
            </div>
          </a>
          <a className="mix prt-card inter" href="http://discoking.pl">
            <div className="prt-image">
              <div className="portfolio-img">
                <Image
                  src={DiscoKingImg}
                  alt="Disco King"
                  layout="responsive"
                />
              </div>
              <div className="prt-overlay">
                <div className="prt-icon">
                  <UilLink />
                </div>
              </div>
            </div>
            <div className="prt-desc">
              <h3>Disco King (Promatic)</h3>
            </div>
          </a>
          <a className="mix prt-card inter" href="http://wolnosci14.pl">
            <div className="prt-image">
              <div className="portfolio-img">
                <Image
                  src={Wolnosci14Img}
                  alt="Wolności 14"
                  layout="responsive"
                />
              </div>
              <div className="prt-overlay">
                <div className="prt-icon">
                  <UilLink />
                </div>
              </div>
            </div>
            <div className="prt-desc">
              <h3>Wolności 14 (Promatic)</h3>
            </div>
          </a>
        </>
      )}

      {filter === `store` && (
        <>
          <a className="mix prt-card inter" href="https://chiarashop.pl">
            <div className="prt-image">
              <div className="portfolio-img">
                <Image
                  src={ChiarashopImg}
                  alt="Chiara Shop"
                  layout="responsive"
                />
              </div>
              <div className="prt-overlay">
                <div className="prt-icon">
                  <UilLink />
                </div>
              </div>
            </div>
            <div className="prt-desc">
              <h3>Chiara Shop</h3>
            </div>
          </a>
          <a
            className="mix prt-card inter"
            href="https://www.equilibrium-canna.biz/"
          >
            <div className="prt-image">
              <div className="portfolio-img">
                <Image
                  src={EquilibriumImg}
                  alt="Equilibrium Premium Cannabiotics"
                  layout="responsive"
                />
              </div>
              <div className="prt-overlay">
                <div className="prt-icon">
                  <UilLink />
                </div>
              </div>
            </div>
            <div className="prt-desc">
              <h3>Equilibrium Premium Cannabiotics</h3>
            </div>
          </a>
          <a className="mix prt-card inter" href="https://inlei.pl">
            <div className="prt-image">
              <div className="portfolio-img">
                <Image src={InleiImg} alt="Inlei" layout="responsive" />
              </div>
              <div className="prt-overlay">
                <div className="prt-icon">
                  <UilLink />
                </div>
              </div>
            </div>
            <div className="prt-desc">
              <h3>Inlei</h3>
            </div>
          </a>
          <a className="mix prt-card inter" href="https://secretpleasure.pl/">
            <div className="prt-image">
              <div className="portfolio-img">
                <Image
                  src={SecretPleasureImg}
                  alt="Secret Pleasure"
                  layout="responsive"
                />
              </div>
              <div className="prt-overlay">
                <div className="prt-icon">
                  <UilLink />
                </div>
              </div>
            </div>
            <div className="prt-desc">
              <h3>Secret Pleasure</h3>
            </div>
          </a>
        </>
      )}
    </>
  );
};

export default PortfolioList;
