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

/*   data.allMdx.nodes.forEach(node => {

    
    const slug = node.frontmatter.slug
    actions.createPage({
      path: slug,
      component: path.resolve('./src/templates/categoryTemplate.js'),
      context: { slug }
    })
  });  */


  data.allMdx.nodes.forEach(node => {

    const category = node.frontmatter.category
    const slug = node.frontmatter.slug
    const fullSlug = `${category}/${slug}`

    category === 'root' ? 
  
      actions.createPage({
        path: slug,
        component: path.resolve('./src/templates/categoryTemplate.js'),
        context: { slug }
      })
      :
      actions.createPage({
        path: fullSlug,
        component: path.resolve('./src/templates/projectTemplate.js'),
        context: { category, slug, fullSlug }
      })
  });

/*   data.allMdx.nodes.forEach(node => {

    const category = node.frontmatter.category
    const slug = node.frontmatter.slug
  
    actions.createPage({
      path: `${category}/${slug}`,
      component: path.resolve('./src/templates/projectTemplate.js'),
      context: { category, slug }
    })
    
  }); */
}


