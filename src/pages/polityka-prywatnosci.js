import React from 'react';
import Helmet from 'react-helmet';

class PrivacyPolicy extends React.Component {
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
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Polityka prywatności - Amadeo Media</title>
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
        <section className="privacy section" id="home">
          <div className="container">
            <h1 className="heading">
              Polityka
              <br />
              Prywatności
            </h1>
            <div className="policy__section">
              <h2>1. Informacje ogólne</h2>
              <p className="policy__text">
                1. Niniejsza polityka dotyczy Serwisu www, funkcjonującego pod adresem url: www.amadeomedia.com
                <br />
                2. Operatorem serwisu oraz Administratorem danych osobowych jest: Amadeo Media Amadeusz Grzsiak 59-800 Lubań
                <br />
                3. Adres kontaktowy poczty elektronicznej operatora: grzesiak.amadeusz@gmail.com
                <br />
                4. Operator jest Administratorem Twoich danych osobowych w odniesieniu do danych podanych dobrowolnie w Serwisie.
                <br />
                5. Serwis wykorzystuje dane osobowe w następujących celach:
                <br />
                - Prowadzenie newslettera
                <br />
                - Prowadzenie systemu ogłoszeń drobnych
                <br />
                - Obsługa zapytań przez formularz
                <br />
                - Realizacja zamówionych usług
                <br />
                - Windykacja należności
                <br />
                - Prezentacja oferty lub informacji
                <br />
                6. Serwis realizuje funkcje pozyskiwania informacji o użytkownikach i ich zachowaniu w następujący sposób:
                <br />
                - Poprzez dobrowolnie wprowadzone w formularzach dane, które zostają wprowadzone do systemów Operatora.
                <br />- Poprzez zapisywanie w urządzeniach końcowych plików cookie (tzw. „ciasteczka”).
              </p>

              <h2>2. Wybrane metody ochrony danych stosowane przez Operatora</h2>
              <p className="policy__text">
                1. Miejsca logowania i wprowadzania danych osobowych są chronione w warstwie transmisji (certyfikat SSL). Dzięki
                temu dane osobowe i dane logowania, wprowadzone na stronie, zostają zaszyfrowane w komputerze użytkownika i mogą
                być odczytane jedynie na docelowym serwerze.
                <br />
                2. Operator okresowo zmienia swoje hasła administracyjne.
                <br />
                3. Istotnym elementem ochrony danych jest regularna aktualizacja wszelkiego oprogramowania, wykorzystywanego przez
                Operatora do przetwarzania danych osobowych, co w szczególności oznacza regularne aktualizacje komponentów
                programistycznych.
              </p>

              <h2>3. Hosting</h2>
              <p className="policy__text">1. Serwis jest hostowany (technicznie utrzymywany) na serwera operatora: Netlify.com</p>

              <h2>4. Twoje prawa i dodatkowe informacje o sposobie wykorzystania danych</h2>
              <p className="policy__text">
                1. W niektórych sytuacjach Administrator ma prawo przekazywać Twoje dane osobowe innym odbiorcom, jeśli będzie to
                niezbędne do wykonania zawartej z Tobą umowy lub do zrealizowania obowiązków ciążących na Administratorze. Dotyczy
                to takich grup odbiorców:
                <br />
                - firma hostingowa na zasadzie powierzenia
                <br />
                - operatorzy pocztowi
                <br />
                - kancelarie prawne i windykatorzy
                <br />
                - operatorzy płatności
                <br />
                - firmy, świadczące usługi marketingu na rzecz Administratora
                <br />
                2. Twoje dane osobowe przetwarzane przez Administratora nie dłużej, niż jest to konieczne do wykonania związanych
                z nimi czynności określonych osobnymi przepisami (np. o prowadzeniu rachunkowości). W odniesieniu do danych
                marketingowych dane nie będą przetwarzane dłużej niż przez 3 lata.
                <br />
                3. Przysługuje Ci prawo żądania od Administratora:
                <br />
                - dostępu do danych osobowych Ciebie dotyczących,
                <br />
                - ich sprostowania,
                <br />
                - usunięcia,
                <br />
                - ograniczenia przetwarzania,
                <br />
                - oraz przenoszenia danych.
                <br />
                4. Przysługuje Ci prawo do złożenia sprzeciwu w zakresie przetwarzania wskazanego w pkt 3.3 c) wobec przetwarzania
                danych osobowych w celu wykonania prawnie uzasadnionych interesów realizowanych przez Administratora, w tym
                profilowania, przy czym prawo sprzeciwu nie będzie mogło być wykonane w przypadku istnienia ważnych prawnie
                uzasadnionych podstaw do przetwarzania, nadrzędnych wobec Ciebie interesów, praw i wolności, w szczególności
                ustalenia, dochodzenia lub obrony roszczeń.
                <br />
                5. Na działania Administratora przysługuje skarga do Prezesa Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193
                Warszawa.
                <br />
                6. Podanie danych osobowych jest dobrowolne, lecz niezbędne do obsługi Serwisu.
                <br />
                7. W stosunku do Ciebie mogą być podejmowane czynności polegające na zautomatyzowanym podejmowaniu decyzji, w tym
                profilowaniu w celu świadczenia usług w ramach zawartej umowy oraz w celu prowadzenia przez Administratora
                marketingu bezpośredniego.
                <br />
                8. Dane osobowe nie są przekazywane od krajów trzecich w rozumieniu przepisów o ochronie danych osobowych. Oznacza
                to, że nie przesyłamy ich poza teren Unii Europejskiej.
              </p>

              <h2>5. Informacje w formularzach</h2>
              <p className="policy__text">
                1. Serwis zbiera informacje podane dobrowolnie przez użytkownika, w tym dane osobowe, o ile zostaną one podane.
                <br />
                2. Serwis może zapisać informacje o parametrach połączenia (oznaczenie czasu, adres IP).
                <br />
                3. Serwis, w niektórych wypadkach, może zapisać informację ułatwiającą powiązanie danych w formularzu z adresem
                e-mail użytkownika wypełniającego formularz. W takim wypadku adres e-mail użytkownika pojawia się wewnątrz adresu
                url strony zawierającej formularz.
                <br />
                4. Dane podane w formularzu są przetwarzane w celu wynikającym z funkcji konkretnego formularza, np. w celu
                dokonania procesu obsługi zgłoszenia serwisowego lub kontaktu handlowego, rejestracji usług itp. Każdorazowo
                kontekst i opis formularza w czytelny sposób informuje, do czego on służy.
              </p>

              <h2>6. Logi Administratora</h2>
              <p className="policy__text">
                1. Informacje zachowaniu użytkowników w serwisie mogą podlegać logowaniu. Dane te są wykorzystywane w celu
                administrowania serwisem.
              </p>

              <h2>7. Istotne techniki marketingowe</h2>
              <p className="policy__text">
                1. Operator stosuje analizę statystyczną ruchu na stronie, poprzez Google Analytics (Google Inc. z siedzibą w
                USA). Operator nie przekazuje do operatora tej usługi danych osobowych, a jedynie zanonimizowane informacje.
                Usługa bazuje na wykorzystaniu ciasteczek w urządzeniu końcowym użytkownika. W zakresie informacji o preferencjach
                użytkownika gromadzonych przez sieć reklamową Google użytkownik może przeglądać i edytować informacje wynikające z
                plików cookies przy pomocy narzędzia: https://www.google.com/ads/preferences/
              </p>

              <h2>8. Informacja o plikach cookies</h2>
              <p className="policy__text">
                1. Serwis korzysta z plików cookies.
                <br />
                2. Pliki cookies (tzw. „ciasteczka”) stanowią dane informatyczne, w szczególności pliki tekstowe, które
                przechowywane są w urządzeniu końcowym Użytkownika Serwisu i przeznaczone są do korzystania ze stron internetowych
                Serwisu. Cookies zazwyczaj zawierają nazwę strony internetowej, z której pochodzą, czas przechowywania ich na
                urządzeniu końcowym oraz unikalny numer.
                <br />
                3. Podmiotem zamieszczającym na urządzeniu końcowym Użytkownika Serwisu pliki cookies oraz uzyskującym do nich
                dostęp jest operator Serwisu.
                <br />
                4. Pliki cookies wykorzystywane są w następujących celach:
                <br />
                - utrzymanie sesji użytkownika Serwisu (po zalogowaniu), dzięki której użytkownik nie musi na każdej podstronie
                Serwisu ponownie wpisywać loginu i hasła;
                <br />
                - realizacji celów określonych powyżej w części "Istotne techniki marketingowe";
                <br />
                5. W ramach Serwisu stosowane są dwa zasadnicze rodzaje plików cookies: „sesyjne” (session cookies) oraz „stałe”
                (persistent cookies). Cookies „sesyjne” są plikami tymczasowymi, które przechowywane są w urządzeniu końcowym
                Użytkownika do czasu wylogowania, opuszczenia strony internetowej lub wyłączenia oprogramowania (przeglądarki
                internetowej). „Stałe” pliki cookies przechowywane są w urządzeniu końcowym Użytkownika przez czas określony w
                parametrach plików cookies lub do czasu ich usunięcia przez Użytkownika.
                <br />
                6. Oprogramowanie do przeglądania stron internetowych (przeglądarka internetowa) zazwyczaj domyślnie dopuszcza
                przechowywanie plików cookies w urządzeniu końcowym Użytkownika. Użytkownicy Serwisu mogą dokonać zmiany ustawień
                w tym zakresie. Przeglądarka internetowa umożliwia usunięcie plików cookies. Możliwe jest także automatyczne
                blokowanie plików cookies Szczegółowe informacje na ten temat zawiera pomoc lub dokumentacja przeglądarki
                internetowej.
                <br />
                7. Ograniczenia stosowania plików cookies mogą wpłynąć na niektóre funkcjonalności dostępne na stronach
                internetowych Serwisu.
                <br />
                8. Pliki cookies zamieszczane w urządzeniu końcowym Użytkownika Serwisu wykorzystywane mogą być również przez
                współpracujące z operatorem Serwisu podmioty, w szczególności dotyczy to firm: Google (Google Inc. z siedzibą w
                USA), Facebook (Facebook Inc. z siedzibą w USA), Twitter (Twitter Inc. z siedzibą w USA).
              </p>

              <h2>9. Zarządzanie plikami cookies – jak w praktyce wyrażać i cofać zgodę?</h2>
              <p className="policy__text">
                1. Jeśli użytkownik nie chce otrzymywać plików cookies, może zmienić ustawienia przeglądarki. Zastrzegamy, że
                wyłączenie obsługi plików cookies niezbędnych dla procesów uwierzytelniania, bezpieczeństwa, utrzymania
                preferencji użytkownika może utrudnić, a w skrajnych przypadkach może uniemożliwić korzystanie ze stron www
                <br />
                2. W celu zarządzania ustawienia cookies wybierz z listy poniżej przeglądarkę internetową, której używasz i
                postępuj zgodnie z instrukcjami:
                <br />
                - Edge
                <br />
                - Internet Explorer
                <br />
                - Chrome
                <br />
                - Safari
                <br />
                - Firefox
                <br />
                - Opera
                <br />
                Urządzenia mobilne:
                <br />
                - Android
                <br />
                - Safari (iOS)
                <br />
                - Windows Phone
                <br />
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default PrivacyPolicy;
