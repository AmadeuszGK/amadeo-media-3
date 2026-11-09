import React from 'react';
import { portfolioItemTypes } from '../PortfolioWrapper';
import Image from 'next/image';
import { projects } from '../../../lib/projects';
import { UilLink } from '../../Menu/Menu';

type PortfolioListProps = {
  filter: portfolioItemTypes;
  limit?: number;
};

const PortfolioList: React.FC<PortfolioListProps> = ({ filter, limit }) => {
  const filteredProjects = projects.filter(
    (project) => project.type === filter || filter === `default`,
  );
  const shown = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  return (
    <>
      {shown.map((project) => (
        <a
          key={project.id}
          className="mix prt-card inter"
          href={project.url}
          rel={project.rel}
        >
          <div className="prt-image">
            <div className="device-scene">
              <div className="laptop">
                <div className="laptop-screen">
                  <Image
                    src={project.imgSrc}
                    alt={project.name}
                    fill
                    sizes="(max-width: 600px) 90vw, 330px"
                    placeholder="blur"
                    className="device-img"
                  />
                </div>
                <div className="laptop-base" />
              </div>
              <div className="phone">
                <div className="phone-screen">
                  <Image
                    src={project.imgMobile}
                    alt={`${project.name} - widok mobilny`}
                    fill
                    sizes="90px"
                    placeholder="blur"
                    className="device-img"
                  />
                </div>
              </div>
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
