require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const languageConfig = require("./language-config");

/* eslint-disable no-undef */
module.exports = {
  siteMetadata: {
    title: "metaTitle",
    description: "metaDescription",
    keywords: "",
    author: "https://marcperez.cat",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-testing",
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: languageConfig.languages,
        // language file path
        defaultLanguage: languageConfig.defaultLanguage,
        // option to redirect to `/ko` when connecting `/`
        redirect: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Mulish\:300,400,700,800`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-6Z8JK7G8ED", // Google Analytics / GA
        ],
      },
    },
  ],
};
