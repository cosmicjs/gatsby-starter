import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div className="hero">
    <h1>
      <a href="/" />
      <Link to="/">{siteTitle}</Link>
    </h1>
  </div>
)

export default Header
