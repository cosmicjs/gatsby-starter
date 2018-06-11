import React from 'react'
import Link from 'gatsby-link'

const Nav = ({ nav }) => (
  <ul>
    {
      nav.map(function(li, index){
        return <li key={ index }><Link to={li.slug}>{li.name}</Link></li>;
      })
    }
  </ul>
)

export default Nav
