import React from 'react';
import Image from 'next/image';
import JavascriptImg from '../../images/javascript.png';
import Html5Img from '../../images/html5.png';
import Css3Img from '../../images/css3.png';
import StyledComponentsImg from '../../images/styled-components.png';
import ReactjsImg from '../../images/reactjs.png';
import TypescriptImg from '../../images/typescript.png';
import GraphqImg from '../../images/graphql.png';
import SassImg from '../../images/sass.png';
import GatsbyjsImg from '../../images/gatsbyjs.png';
import WordpressImg from '../../images/wordpress.png';
import PhotoshopImg from '../../images/photoshop.png';
import FigmaImg from '../../images/figma.png';

const Skills = () => (
  <div className="all-skills">
    <div className="skill-container">
      <div className="skill-image">
        <Image
          src={JavascriptImg}
          alt="javascript"
          layout="responsive"
          placeholder="blur"
        />
      </div>
    </div>
    <div className="skill-container">
      <div className="skill-image">
        <Image
          src={Html5Img}
          alt="html"
          layout="responsive"
          placeholder="blur"
        />
      </div>
    </div>
    <div className="skill-container">
      <div className="skill-image">
        <Image src={Css3Img} alt="css" layout="responsive" placeholder="blur" />
      </div>
    </div>
    <div className="skill-container">
      <div className="skill-image">
        <Image
          src={StyledComponentsImg}
          alt="styled components"
          layout="responsive"
          placeholder="blur"
        />
      </div>
    </div>
    <div className="skill-container">
      <div className="skill-image">
        <Image
          src={ReactjsImg}
          alt="react js"
          layout="responsive"
          placeholder="blur"
        />
      </div>
    </div>
    <div className="skill-container">
      <div className="skill-image">
        <Image
          src={TypescriptImg}
          alt="typescript"
          layout="responsive"
          placeholder="blur"
        />
      </div>
    </div>
    <div className="skill-container">
      <div className="skill-image">
        <Image
          src={GraphqImg}
          alt="graphql"
          layout="responsive"
          placeholder="blur"
        />
      </div>
    </div>
    <div className="skill-container">
      <div className="skill-image">
        <Image
          src={SassImg}
          alt="sass"
          layout="responsive"
          placeholder="blur"
        />
      </div>
    </div>
    <div className="skill-container">
      <div className="skill-image">
        <Image
          src={GatsbyjsImg}
          alt="gatsby js"
          layout="responsive"
          placeholder="blur"
        />
      </div>
    </div>
    <div className="skill-container">
      <div className="skill-image">
        <Image
          src={WordpressImg}
          alt="wordpress"
          layout="responsive"
          placeholder="blur"
        />
      </div>
    </div>
    <div className="skill-container">
      <div className="skill-image">
        <Image
          src={PhotoshopImg}
          alt="photoshop"
          layout="responsive"
          placeholder="blur"
        />
      </div>
    </div>
    <div className="skill-container">
      <div className="skill-image">
        <Image
          src={FigmaImg}
          alt="figma"
          layout="responsive"
          placeholder="blur"
        />
      </div>
    </div>
  </div>
);

export default Skills;
