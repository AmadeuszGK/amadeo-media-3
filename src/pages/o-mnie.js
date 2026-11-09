import React from 'react';
import Head from 'next/head';
import { seoTags } from '../lib/seo';
import AboutUs from '../components/AboutUs/AboutUs';

class AboutUsView extends React.Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
    };
  }

  toglleMenu = () => {
    const currentState = this.state.showMenu;
    this.setState({ showMenu: !currentState });
  };

  render() {
    return (
      <>
        <Head>
          <title>O mnie - Amadeo Media</title>
          <meta charSet="utf-8" />
          <meta
            name="keywords"
            content="front end developer,strony internetowe,sklepy internetowe,react,next.js,lubań,wrocław,e-commerce"
          />
          <meta name="author" content="Amadeusz Grzesiak" />
          <meta
            name="description"
            content="Amadeusz Grzesiak, front-end developer od React JS i właściciel Amadeo Media. Tworzę strony internetowe, sklepy i aplikacje webowe dla firm."
          />
          {seoTags({
            title: 'O mnie - Amadeo Media',
            description:
              'Amadeusz Grzesiak, front-end developer od React JS i właściciel Amadeo Media. Tworzę strony internetowe, sklepy i aplikacje webowe dla firm.',
            path: '/o-mnie',
          })}
        </Head>
        <AboutUs />
      </>
    );
  }
}

export default AboutUsView;
