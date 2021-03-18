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
    siteUrl: "https://padeleo.app"
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
          injectFirst: false,
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
        redirect: false,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Mulish",
              variants: [`300`, `400`, `700`, `800`]
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          process.env.GA_ID, // Google Analytics / GA
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Padeleo App`,
        short_name: `Padeleo`,
        start_url: `/es/?user_mode=app`,
        background_color: `#ffffff`,
        theme_color: `#5ec7ac`,
        display: `standalone`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        // The example below will exclude the single `path/to/page` and all routes beginning with `category`
        exclude: [`/*/settings`, `/*/404`, `/settings`, `/reports`, `/feedback`, `/legal_advice`, `/matches`],
        // serialize: ({ site, allSitePage }) =>
        //   allSitePage.nodes.map(node => {
        //     return {
        //       url: `${site.wp.generalSettings.siteUrl}${node.path}`,
        //       changefreq: `daily`,
        //       priority: 0.7,
        //     }
        //   })
      }
    }
  ],
};
