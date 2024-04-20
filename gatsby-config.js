/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    title:'Chifavz Studio'
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `post`,
        path: `${__dirname}/posts`,

      }
    },
    'gatsby-plugin-mdx',
    "gatsby-transformer-sharp",

  ],

}
