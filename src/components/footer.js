import React from 'react'

const Footer = () => (
  <div className="footer">
    &copy;
    {new Date().getFullYear()} <a href="https://cosmicjs.com">Cosmic JS</a>{' '}
    Gatsby Starter.{' '}
    <a href="https://github.com/cosmicjs/gatsby-starter" target="_blank">
      View the code
    </a>
    .
  </div>
)

export default Footer
