import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

class PageTemplate extends React.Component {
  render() {
    const page = this.props.data.cosmicjsPages
    return (
      <Layout>
        {page && (
          <div>
            <Helmet title={page.title} />
            <h1>{page.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: page.content }} />
          </div>
        )}
      </Layout>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    cosmicjsPages(slug: { eq: $slug }) {
      title
      content
    }
  }
`
