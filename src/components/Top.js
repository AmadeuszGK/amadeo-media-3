import React from 'react';

class Top extends React.Component {
  render() {
    return (
      <section className="section-top" id="section-top">
        <div className="top">
          <div className="top-text">
            <div className="top-header">
              <div className="flat-line" />
              <p className="flat-line__text">OFERTA</p>
            </div>

            <div className="words" />
            <h1>strony i sklepy internetowe</h1>

            <p>
              Moje usługi charakteryzują przejrzyste ceny, które ustalane są na
              etapie darmowych konsultacji.
              <br />
              <br />
              Poniej przedstawione zostały przykładowe ceny.
            </p>

            <a href="#section-offer" rel="noopener noreferrer">
              DALEJ
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Top;
