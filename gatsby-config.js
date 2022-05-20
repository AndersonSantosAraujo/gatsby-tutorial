module.exports = {
  flags: {
    PARALLEL_QUERY_RUNNING: true,
    GATSBY_CPU_COUNT: 1,
  },
  siteMetadata: {
    title: "Severus Snape",
    titleTemplate: "%s · The Real Hero",
    description:
      "Hogwarts Potions master, Head of Slytherin house and former Death Eater.",
    url: "https://www.doe.com", // No trailing slash allowed!
    siteUrl: `https://www.example.com`,
    image: `${__dirname}/src/images/icon.png`, // Path to the image placed in the 'static' folder, in the project's root directory.
    twitterUsername: "@occlumency",
    author: `@gatsbyjs`,
    copyright: `(c) Copyright - All Rights Reserved 2022`,
    socialMedia: {
      github: "https://github.com/",
      codepen: "https://codepen.io/",
      facebook: "https://www.facebook.com.br/",
    },
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-styled-components",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "GatsbyJS",
        short_name: "GatsbyJS",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/icon.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
