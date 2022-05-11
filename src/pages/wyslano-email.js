import React from 'react';
import ButtonLink from '../components/Button/ButtonLink';
import Menu from '../components/Menu/Menu';
import Helmet from 'react-helmet';

class Success extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      showMenu: false,
    };
  }

  toglleMenu = () => {
    const currentState = this.state.showMenu;
    this.setState({ showMenu: !currentState });
  };

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  render() {
    return (
      <div style={{ height: 100 + 'vh' }}>
        <Menu />
        <Helmet>
          <meta charSet="utf-8" />
          <title>E-mail - Amadeo Media</title>
          <meta
            name="keywords"
            content="strony internetowe,sklepy internetowe,front end developer,wrocław,lubań,e-commerce,grafika,tanio, tanie, grafik"
          />
          <meta name="author" content="Amadeusz Grzesiak" />
          <meta
            name="description"
            content="Zajmujemy się tworzeniem stron internetowych, sklepów (e-commerce), grafiką i nie tylko,
            sprawdź naszą ofertę! Stwórzmy coś razem."
          />
          <html lang="pl-PL" />
        </Helmet>
        <div className="canvas__container canvas__container--success">
          <div className="canvas-text canvas-text--success">
            <p>Dziękuję za przesłanie wiadomości.</p>
            <h1>Skontaktuję się z Tobą w ciągiu kilku godzin.</h1>
            <ButtonLink text="POWRÓT" href="/" class="button button--alert" />
          </div>
        </div>
      </div>
    );
  }
}

export default Success;
