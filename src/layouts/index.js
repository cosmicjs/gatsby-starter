import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Nav from '../components/nav'
import Footer from '../components/footer'
import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Cosmic JS Node.js Starter' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <div className="main">
      {children()}
      <Nav nav={data.site.siteMetadata.nav} />
    </div>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        nav {
          slug
          name
        }
      }
    }
  }
`
