import React from 'react';
import Landing from '../components/Landing/Landing';
import HeroImg from '../images/offer-item-img-5.png';

const page = {
  path: '/administrowanie-stronami',
  metaTitle:
    'Administrowanie stron internetowych | Opieka nad stroną i sklepem | Amadeo Media',
  metaDescription:
    'Opieka nad stroną internetową i sklepem: aktualizacje, kopie zapasowe, poprawki i nowe treści. Zadzwoń, gdy coś nie działa: 796 536 228.',
  keywords:
    'administrowanie stron internetowych, opieka nad stroną, aktualizacje wordpress, kopie zapasowe strony, obsługa strony www, wsparcie techniczne strony',
  serviceName: 'Administrowanie stron internetowych',
  kicker: 'Opieka nad stroną i sklepem',
  h1: 'Administrowanie stron internetowych',
  lead: 'Po wdrożeniu nie zostajesz sam. Dbam o aktualizacje, kopie zapasowe, poprawki i nowe treści, a w razie problemu wystarczy zadzwonić.',
  heroImage: HeroImg,
  heroAlt: 'Administrowanie stron internetowych',
  trust: ['Szybka pomoc telefoniczna', 'Bezpłatna wycena'],
  intro: {
    h2: 'Strona, o którą ktoś dba, nie sprawia kłopotów',
    paragraphs: [
      'Strona internetowa to nie projekt na jeden raz. Nieaktualizowane wtyczki, brak kopii zapasowych czy przeterminowany certyfikat potrafią wyłączyć stronę akurat wtedy, gdy klient jej szuka.',
      'Zajmuję się stronami i sklepami, które zbudowałem, a zwykle także tymi, które powstały gdzie indziej, po wcześniejszym sprawdzeniu ich stanu. Ty zajmujesz się firmą, a ja tym, żeby strona działała i była na bieżąco.',
    ],
  },
  features: {
    h2: 'Co obejmuje opieka',
    items: [
      {
        icon: 'wrench',
        title: 'Aktualizacje',
        text: 'Regularnie aktualizuję system, wtyczki i szablony, żeby strona była stabilna i chroniona przed znanymi lukami.',
      },
      {
        icon: 'shield',
        title: 'Kopie zapasowe',
        text: 'Tworzę kopie zapasowe, dzięki którym w razie awarii strona może wrócić do działania w krótkim czasie.',
      },
      {
        icon: 'pen',
        title: 'Zmiany i nowe treści',
        text: 'Wprowadzam podsyłane przez Ciebie teksty, zdjęcia, ceny i oferty. Nie musisz uczyć się edycji.',
      },
      {
        icon: 'speed',
        title: 'Szybkość i działanie',
        text: 'Sprawdzam, czy strona działa sprawnie, i poprawiam to, co ją spowalnia lub psuje wrażenia odwiedzających.',
      },
      {
        icon: 'phone',
        title: 'Pomoc, gdy coś nie działa',
        text: 'Gdy strona przestaje działać albo coś wygląda źle, dzwonisz do mnie, a ja szukam przyczyny i naprawiam.',
      },
      {
        icon: 'check',
        title: 'Domena, hosting i certyfikat',
        text: 'Pilnuję terminów domeny, hostingu i certyfikatu SSL, żeby nic nie wygasło bez ostrzeżenia.',
      },
    ],
  },
  steps: {
    h2: 'Jak zaczynamy',
    items: [
      {
        title: 'Rozmowa',
        text: 'Opowiadasz o stronie i tym, czego potrzebujesz: stałej opieki czy pojedynczych zmian.',
      },
      {
        title: 'Sprawdzenie strony',
        text: 'Oceniam stan techniczny strony, aktualizacje i zabezpieczenia oraz mówię, co wymaga poprawy.',
      },
      {
        title: 'Ustalenie zakresu',
        text: 'Wspólnie ustalamy zakres opieki i wycenę. Zapłacisz tylko za to, czego faktycznie potrzebujesz.',
      },
      {
        title: 'Stała opieka',
        text: 'Dbam o stronę na bieżąco i reaguję, gdy zgłosisz zmianę lub problem.',
      },
    ],
  },
  why: {
    h2: 'Dlaczego warto',
    items: [
      {
        title: 'Mniej awarii',
        text: 'Regularne aktualizacje i kopie zapasowe zmniejszają ryzyko, że strona przestanie działać w złym momencie.',
      },
      {
        title: 'Oszczędność Twojego czasu',
        text: 'Nie szukasz informatyka za każdym razem. Wiesz, do kogo zadzwonić, i sprawa jest załatwiona.',
      },
      {
        title: 'Strona zawsze aktualna',
        text: 'Nowe oferty, ceny i godziny otwarcia trafiają na stronę od razu, a klienci widzą aktualne informacje.',
      },
      {
        title: 'Bezpośredni kontakt',
        text: 'Rozmawiasz z osobą, która zna Twoją stronę, bez infolinii i zgłoszeń przez formularze.',
      },
    ],
  },
  faq: {
    h2: 'Najczęstsze pytania',
    items: [
      {
        q: 'Czy zajmiesz się stroną zrobioną przez kogoś innego?',
        a: 'Zwykle tak, po wcześniejszym sprawdzeniu jej stanu. Powiem wprost, jeśli strona wymaga najpierw większych poprawek.',
      },
      {
        q: 'Ile kosztuje administrowanie stroną?',
        a: 'Zależy od wielkości strony i zakresu opieki, dlatego ustalam to indywidualnie po rozmowie i sprawdzeniu strony. Wycena jest bezpłatna.',
      },
      {
        q: 'Czy mogę zlecać pojedyncze zmiany bez stałej opieki?',
        a: 'Tak. Możesz zlecić jednorazową zmianę lub poprawkę albo wybrać stałą opiekę, zależnie od tego, czego potrzebujesz.',
      },
      {
        q: 'Co jeśli strona przestanie działać?',
        a: 'Zadzwoń do mnie. Sprawdzę przyczynę i przywrócę stronę do działania, korzystając z kopii zapasowej, jeśli będzie taka potrzeba.',
      },
      {
        q: 'Jak często robisz kopie zapasowe?',
        a: 'Częstotliwość dobieram do strony: inaczej dla prostej wizytówki, a inaczej dla sklepu, w którym codziennie przybywają zamówienia.',
      },
    ],
  },
  related: {
    text: 'Potrzebujesz nowej strony zamiast starej?',
    href: '/tworzenie-stron-luban',
    label: 'Zobacz tworzenie stron internetowych',
  },
  cta: {
    h2: 'Zadbajmy o Twoją stronę',
    text: 'Zadzwoń lub napisz. Sprawdzę stronę, powiem, co wymaga uwagi, i omówimy opiekę bez zobowiązań.',
  },
};

const AdministrowanieStronami = () => <Landing page={page} />;

export default AdministrowanieStronami;
