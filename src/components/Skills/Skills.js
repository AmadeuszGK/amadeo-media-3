import React from 'react';
import Image from 'next/image';
import JavascriptImg from '../../images/javascript.png';
import TypescriptImg from '../../images/typescript.png';
import ReactjsImg from '../../images/reactjs.png';
import NextjsImg from '../../images/nextjs.svg';
import Html5Img from '../../images/html5.png';
import Css3Img from '../../images/css3.png';
import SassImg from '../../images/sass.png';
import WordpressImg from '../../images/wordpress.png';
import WoocommerceImg from '../../images/woocomerce.png';
import GitImg from '../../images/git.png';
import FigmaImg from '../../images/figma.png';
import AiImg from '../../images/ai.svg';

// Aktualny stack (2026). SVG nie obsługuje blur placeholdera.
const skills = [
  { name: 'javascript', img: JavascriptImg },
  { name: 'typescript', img: TypescriptImg },
  { name: 'react', img: ReactjsImg },
  { name: 'next.js', img: NextjsImg, svg: true },
  { name: 'html', img: Html5Img },
  { name: 'css', img: Css3Img },
  { name: 'sass', img: SassImg },
  { name: 'wordpress', img: WordpressImg },
  { name: 'woocommerce', img: WoocommerceImg },
  { name: 'git', img: GitImg },
  { name: 'figma', img: FigmaImg },
  { name: 'ai', img: AiImg, svg: true },
];

const Skills = () => (
  <div className="all-skills">
    {skills.map(({ name, img, svg }) => (
      <div className="skill-container" key={name}>
        <div className="skill-image">
          <Image
            src={img}
            alt={name}
            layout="responsive"
            placeholder={svg ? 'empty' : 'blur'}
          />
        </div>
      </div>
    ))}
  </div>
);

export default Skills;
