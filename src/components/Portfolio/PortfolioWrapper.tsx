import React, { useState } from 'react';
import PortfolioList from './PortfolioList/PortfolioList';
import PortfolioNav from './PortfolioNav/PortfolioNav';
import { withTrans } from '../../i18n/withTrans';
export type portfolioItemTypes = 'default' | 'website' | 'ecommerce';

type PortfolioWrapperProps = {
  t: any;
};

const PortfolioWrapper: React.FC<PortfolioWrapperProps> = ({ t }) => {
  const [filter, setFilter] = useState<portfolioItemTypes>(`website`);

  return (
    <section className="portfolio section" id="portfolio">
      <div className="container">
        <div className="portfolio-header">
          <div className="portfolio-title">
            <h3 className="sub-heading">{t(`portfolio.smallTitle`)}</h3>
            <h2 className="heading">{t(`portfolio.bigTitle`)}</h2>
          </div>
          <PortfolioNav filter={filter} setFilter={setFilter} />
        </div>
        <div className="portfolio-gallery">
          <PortfolioList filter={filter} />
        </div>
      </div>
    </section>
  );
};

export default withTrans(PortfolioWrapper);
