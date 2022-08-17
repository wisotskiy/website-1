const path = require("path")

exports.createPages = async ({ graphql, actions }) => {

  const { data } = await graphql(`
    query getCategories {
      allMdx {
        nodes {
          frontmatter {
            category
            slug
          }
        }
      }
    }
  `)

  data.allMdx.nodes.forEach(node => {

    
    const slug = node.frontmatter.slug
    actions.createPage({
      path: slug,
      component: path.resolve('./src/templates/categoryTemplate.js'),
      context: { slug }
    })
  }); 
}


