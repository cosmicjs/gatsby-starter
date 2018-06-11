import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div className="hero">
    <h1>
      <a href="/"></a>
      <Link
          to="/"
        >
        {siteTitle}
      </Link>
    </h1>
  </div>
)

export default Header
