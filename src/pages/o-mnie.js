import React from 'react';
import Helmet from 'react-helmet';
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
        <Helmet title="O mnie - Amadeo Media">
          <meta charSet="utf-8" />
          <meta
            name="keywords"
            content="strony internetowe,sklepy internetowe,front end developer,wrocław,lubań,e-commerce,grafika,tanio, tanie, grafik"
          />
          <meta name="author" content="Amadeusz Grzesiak" />
          <meta
            name="description"
            content="Zajmuję się tworzeniem stron internetowych, sklepów (e-commerce), marketingiem, pozycjonowaniem i nie tylko, sprawdź co jeszcze mam w ofercie! Stwórzmy coś razem."
          />
          <html lang="pl-PL" />
        </Helmet>
        <AboutUs />
      </>
    );
  }
}

export default AboutUsView;
