import React from 'react';
import Landing from '../components/Landing/Landing';
import HeroImg from '../images/offer-item-img-6.png';

const page = {
  path: '/automatyzacja-ai',
  metaTitle:
    'Automatyzacja i integracje AI dla firm | Czatboty, asystenci | Amadeo Media',
  metaDescription:
    'Wdrażam AI tam, gdzie oszczędza czas i pieniądze: asystenci na stronie, automatyczne odpowiedzi, integracje z pocztą, kalendarzem i CRM. Zadzwoń: 796 536 228.',
  keywords:
    'automatyzacja ai, czatbot dla firmy, asystent ai na stronie, integracje ai, automatyzacja procesów, ai dla małych firm',
  serviceName: 'Automatyzacja i integracje AI',
  kicker: 'AI w praktyce dla firm',
  h1: 'Automatyzacja i integracje AI',
  lead: 'Wdrażam sztuczną inteligencję tam, gdzie oszczędza czas i pieniądze: asystenci na stronie, automatyczne odpowiedzi i integracje z narzędziami, z których już korzystasz.',
  heroImage: HeroImg,
  heroAlt: 'Automatyzacja i integracje AI dla firm',
  trust: ['Bezpłatna rozmowa', 'Konkretne rozwiązania'],
  intro: {
    h2: 'AI, które pracuje, a nie tylko dobrze wygląda',
    paragraphs: [
      'Wiele firm traci godziny na powtarzalne zadania: odpowiadanie na te same pytania, przepisywanie danych, przygotowywanie opisów czy raportów. Dobrze wdrożona automatyzacja przejmuje takie zadania i zostawia ludziom to, co wymaga człowieka.',
      'Nie sprzedaję gadżetów. Zaczynam od rozmowy o tym, gdzie tracisz czas, i proponuję rozwiązanie, które ma sens w Twojej firmie i da się zmierzyć. AI wspiera Twój zespół, a nie go zastępuje.',
    ],
  },
  features: {
    h2: 'Co mogę wdrożyć',
    items: [
      {
        icon: 'users',
        title: 'Asystent na stronie',
        text: 'Czatbot, który odpowiada klientom na typowe pytania o ofertę, godziny czy ceny, a w razie potrzeby przekazuje rozmowę Tobie.',
      },
      {
        icon: 'phone',
        title: 'Automatyczne odpowiedzi',
        text: 'Szybkie, spersonalizowane odpowiedzi na zapytania z maila czy formularzy, które Ty tylko akceptujesz lub uzupełniasz.',
      },
      {
        icon: 'link',
        title: 'Integracje z Twoimi narzędziami',
        text: 'Łączę stronę lub sklep z pocztą, kalendarzem, CRM i bazami danych, żeby dane same trafiały tam, gdzie powinny.',
      },
      {
        icon: 'pen',
        title: 'Generowanie treści',
        text: 'Opisy produktów, wpisy i teksty przygotowywane z pomocą AI, w Twoim stylu i pod Twoją kontrolą.',
      },
      {
        icon: 'chart',
        title: 'Raporty i powiadomienia',
        text: 'Automatyczne zestawienia i alerty, np. o nowych zamówieniach czy zapytaniach, bez ręcznego sprawdzania.',
      },
      {
        icon: 'shield',
        title: 'Bezpieczeństwo i RODO',
        text: 'Dobieram narzędzia i ograniczam dane przekazywane do modeli, żeby dane Twoich klientów były bezpieczne.',
      },
    ],
  },
  steps: {
    h2: 'Jak to wygląda w praktyce',
    items: [
      {
        title: 'Rozmowa o procesach',
        text: 'Ustalamy, gdzie tracisz najwięcej czasu i które zadania warto zautomatyzować w pierwszej kolejności.',
      },
      {
        title: 'Propozycja i wycena',
        text: 'Proponuję konkretne rozwiązanie, opisuję efekt, jakiego możesz się spodziewać, i przedstawiam bezpłatną wycenę.',
      },
      {
        title: 'Wdrożenie i testy',
        text: 'Buduję rozwiązanie, integruję je z Twoimi narzędziami i sprawdzam na prawdziwych przypadkach.',
      },
      {
        title: 'Szkolenie i rozwój',
        text: 'Pokazuję, jak z tego korzystać, i rozwijamy rozwiązanie, gdy zobaczysz, co działa najlepiej.',
      },
    ],
  },
  why: {
    h2: 'Dlaczego Amadeo Media',
    items: [
      {
        title: 'Programista, nie sprzedawca',
        text: 'Rozmawiasz z osobą, która faktycznie buduje rozwiązanie, więc obietnice mają pokrycie w tym, co da się zrobić.',
      },
      {
        title: 'Człowiek zostaje w pętli',
        text: 'AI przygotowuje i podpowiada, a Ty zatwierdzasz tam, gdzie to ważne. Brak niespodzianek w kontakcie z klientem.',
      },
      {
        title: 'Zgodnie z tym, co już masz',
        text: 'Wykorzystuję narzędzia, z których już korzystasz, zamiast zmuszać do zmiany całego sposobu pracy.',
      },
      {
        title: 'Jasna wycena',
        text: 'Wiesz z góry, co zostanie zrobione i ile to kosztuje. Bez abonamentów, których nie potrzebujesz.',
      },
    ],
  },
  faq: {
    h2: 'Najczęstsze pytania',
    items: [
      {
        q: 'Od czego zacząć?',
        a: 'Od krótkiej rozmowy o tym, które zadania zabierają Ci najwięcej czasu. Na tej podstawie proponuję jedno lub dwa konkretne wdrożenia na początek.',
      },
      {
        q: 'Czy AI jest bezpieczne dla danych moich klientów?',
        a: 'To zależy od narzędzia i sposobu wdrożenia. Dobieram rozwiązania zgodne z RODO i ograniczam dane przekazywane do modeli. Szczegóły omawiamy przed startem.',
      },
      {
        q: 'Czy AI zastąpi moich pracowników?',
        a: 'Nie to jest celem. Automatyzacja przejmuje powtarzalne zadania, a ludzie zajmują się tym, co wymaga rozmowy, decyzji i relacji z klientem.',
      },
      {
        q: 'Ile to kosztuje?',
        a: 'Koszt zależy od zakresu i narzędzi, dlatego ustalam go indywidualnie po rozmowie. Wycena jest bezpłatna.',
      },
      {
        q: 'Czy to działa po polsku?',
        a: 'Tak. Współczesne modele AI bardzo dobrze radzą sobie z językiem polskim, a odpowiedzi dopasowuję do stylu Twojej firmy.',
      },
    ],
  },
  related: {
    text: 'Potrzebujesz najpierw nowoczesnej strony lub sklepu?',
    href: '/tworzenie-stron-luban',
    label: 'Zobacz tworzenie stron internetowych',
  },
  cta: {
    h2: 'Zobaczmy, co AI może zrobić w Twojej firmie',
    text: 'Zadzwoń lub napisz. Porozmawiamy o Twoich procesach i powiem uczciwie, co ma sens, a co nie.',
  },
};

const AutomatyzacjaAi = () => <Landing page={page} />;

export default AutomatyzacjaAi;
