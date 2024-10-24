import React from 'react';
import { portfolioItemTypes } from '../PortfolioWrapper';
import Image from 'next/image';
import { projects } from '../../../lib/projects';
import { UilLink } from '../../Menu/Menu';

type PortfolioListProps = {
  filter: portfolioItemTypes;
};

const PortfolioList: React.FC<PortfolioListProps> = ({ filter }) => {
  const filteredProjects = projects.filter(
    (project) => project.type === filter || filter === 'default',
  );

  return (
    <>
      {filteredProjects.map((project) => (
        <a key={project.id} className="mix prt-card inter" href={project.url}>
          <div className="prt-image">
            <div className="portfolio-img">
              <Image
                src={project.imgSrc}
                alt={project.name}
                layout="responsive"
                placeholder="blur"
              />
            </div>
            <div className="prt-overlay">
              <div className="prt-icon">
                <UilLink />
              </div>
            </div>
          </div>
          <div className="prt-desc">
            <h3>{project.name}</h3>
          </div>
        </a>
      ))}
    </>
  );
};

export default PortfolioList;
