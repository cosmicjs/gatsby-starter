module.exports = {
  siteMetadata: {
    title: 'Cosmic JS Gatsby Starter',
    nav: [{ slug: '/', name: 'Home' },
      { slug: '/about', name: 'About' },
      { slug: '/contact', name: 'Contact' },
      { slug: '/not-found', name: 'Not Found' },
    ]
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-cosmicjs`,
      options: {
        bucketSlug: process.env.COSMIC_BUCKET || `node-starter`,
        objectTypes: [`pages`],
        // If you have enabled read_key to fetch data (optional).
        apiAccess: {
          read_key: process.env.COSMIC_READ_KEY || ``,
        }
      }
    },
  ],
}
