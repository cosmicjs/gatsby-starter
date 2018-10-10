import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Nav from './nav'
import Footer from './footer'
import './index.css'

export default ({ children }) => (
  <StaticQuery
    query={graphql`
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
    `}
    render={data => {
      const siteTitle = data.site.siteMetadata.title
      const siteNav = data.site.siteMetadata.nav
      return (
        <div>
          <Helmet
            title={siteTitle}
            meta={[
              { name: 'description', content: 'Cosmic JS Node.js Starter' },
            ]}
          />
          <Header siteTitle={siteTitle} />
          <div className="main">
            {children}
            <Nav nav={siteNav} />
          </div>
          <Footer />
        </div>
      )
    }}
  />
)
