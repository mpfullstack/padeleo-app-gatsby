/* eslint-disable no-undef */
module.exports = {
  siteMetadata: {
    title: "Padeleo App",
    description: "App to manage and organize your padel matches",
    keywords: "",
    author: {
      name: "Marc Perez",
      url: "https://github.com/mpfullstack",
      email: "info@marcperez.cat",
    },
  },
  plugins: [
    "gatsby-plugin-typescript",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
  ],
};
