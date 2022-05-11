import React from 'react';
import { portfolioItemTypes } from '../PortfolioWrapper';
import { withTrans } from '../../../i18n/withTrans';

type PortfolioNavProps = {
  filter: portfolioItemTypes;
  setFilter: (filter: portfolioItemTypes) => void;
  t: any;
};

const PortfolioNav: React.FC<PortfolioNavProps> = ({
  filter,
  setFilter,
  t,
}) => {
  return (
    <div className="filter-btns">
      <button
        className={
          filter === `default`
            ? `filter-btn mixitup-control-active`
            : `filter-btn`
        }
        onClick={() => setFilter(`default`)}
      >
        {t(`portfolio.all`)}
      </button>
      <button
        className={
          filter === `website`
            ? `filter-btn mixitup-control-active`
            : `filter-btn`
        }
        onClick={() => setFilter(`website`)}
      >
        {t(`portfolio.websites`)}
      </button>
      <button
        className={
          filter === `store`
            ? `filter-btn mixitup-control-active`
            : `filter-btn`
        }
        onClick={() => setFilter(`store`)}
      >
        {t(`portfolio.onlineStores`)}
      </button>
    </div>
  );
};

export default withTrans(PortfolioNav);
