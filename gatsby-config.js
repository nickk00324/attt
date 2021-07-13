module.exports = {
  siteMetadata: {
    title: `Nick IS cool`,
    description: `the 4th version of my portfolio site`,
    author: `nickk`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `work`,
        path: `${__dirname}/data`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        icon: `src/images/nickk.png`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `nickk.cool`,
        short_name: `nickk.cool`,
        start_url: `/`,
        background_color: `#ff64ae`,
        theme_color: `#ff64ae`,
        display: `minimal-ui`,
        icon: `src/images/nickk.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-transformer-json",
    "gatsby-plugin-transition-link",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
