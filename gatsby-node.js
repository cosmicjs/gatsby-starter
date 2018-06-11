const _ = require('lodash')
const path = require('path')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const pageTemplate = path.resolve('./src/templates/page.js')
    resolve(
      graphql(
        `
          {
            site{
              siteMetadata{
                nav{
                  slug
                  name
                }
              }
            }
            allCosmicjsPages{
              edges{
                node{
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const navs = result.data.site.siteMetadata.nav;
        const pages = result.data.allCosmicjsPages.edges;

        _.each(navs, (page, index) => {
          const $slug = (page.slug === '/') ? 'home' : page.slug.slice(1);
          if(_.find(pages, function(o) { return o.node.slug === $slug })) {
            createPage({
              path: `${page.slug}`,
              component: pageTemplate,
              context: {
                slug: $slug,
              },
            })
          }
        })
      })
    )
  })
}