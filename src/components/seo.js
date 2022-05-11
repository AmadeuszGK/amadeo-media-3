/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';

function SEO({ description, lang, meta, keywords, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  );

  // const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content:
            'Zajmuję się tworzeniem stron internetowych, sklepów (e-commerce), grafiką i nie tylko, sprawdź co jeszcze mam w ofercie! Stwórzmy coś razem.',
        },
        {
          property: 'og:title',
          content:
            'Amadeo Media - Strony internetowe, sklepy e-commerce, grafika',
        },
        {
          property: 'og:description',
          content:
            'Zajmuję się tworzeniem stron internetowych, sklepów (e-commerce), grafiką i nie tylko, sprawdź co jeszcze mam w ofercie! Stwórzmy coś razem.',
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: 'Amadesz Grzesiak',
        },
        {
          name: 'twitter:title',
          content:
            'Amadeo Media - Strony internetowe, sklepy e-commerce, grafika',
        },
        {
          name: 'twitter:description',
          content:
            'Zajmuję się tworzeniem stron internetowych, sklepów (e-commerce), grafiką i nie tylko, sprawdź co jeszcze mam w ofercie! Stwórzmy coś razem.',
        },
        {
          name: 'google-site-verification',
          content: 'etLyc897J9MzFw8gyr0iEn5w_64UaQ1sIXXXOr0Yh-w',
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: 'keywords',
                content: keywords.join(', '),
              }
            : [],
        )
        .concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: 'pl',
  meta: [],
  keywords: [
    'strony internetowe',
    'sklepy internetowe',
    'front end developer',
    'wrocław',
  ],
  description:
    'Zajmuję się tworzeniem stron internetowych, sklepów (e-commerce), grafiką i nie tylko, sprawdź co jeszcze mam w ofercie! Stwórzmy coś razem.',
  title: 'Amadeo Media - Strony internetowe, sklepy e-commerce, grafika',
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};

export default SEO;
