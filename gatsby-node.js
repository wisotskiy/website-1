const path = require("path")

exports.createPages = async ({ graphql, actions }) => {

  const { createPage } = actions

  const categoriesQuery = await graphql(`
  {
    allMdx(filter: {frontmatter: {category: {eq: "root"}}}) {
      nodes {
        frontmatter {
          category
          slug
        }
      }
    }
  }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    result.data.allMdx.nodes.forEach(node => {

      const slug = node.frontmatter.slug
      
      createPage({
        path: slug,
        component: path.resolve('./src/templates/categoryTemplate.js'),
        context: { slug }
      })
    })
  })





  /* const projectsQuery = await graphql(`
    {
      allMdx(filter: {frontmatter: {category: {ne: "root"}}}) {
        nodes {
          frontmatter {
            category
            slug
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    result.data.allMdx.nodes.forEach(node => {

      const category = node.frontmatter.category
      const slug = node.frontmatter.slug
      const fullSlug = `${category}/${slug}`

      createPage({
        path: fullSlug,
        component: path.resolve('./src/templates/projectTemplate.js'),
        context: { category, slug, fullSlug }
      })
    })
  }) */



/*   data.allMdx.nodes.forEach(node => {

    
    const slug = node.frontmatter.slug
    actions.createPage({
      path: slug,
      component: path.resolve('./src/templates/categoryTemplate.js'),
      context: { slug }
    })
  });  */


  /* data.allMdx.nodes.forEach(node => {

    const category = node.frontmatter.category
    const slug = node.frontmatter.slug
    category === 'root' &&
      actions.createPage({
        path: slug,
        component: path.resolve('./src/templates/categoryTemplate.js'),
        context: { slug }
      })

  });

  data.allMdx.nodes.forEach(node => {

    const category = node.frontmatter.category
    const slug = node.frontmatter.slug
    const fullSlug = `${category}/${slug}`

    category !== 'root' &&
      actions.createPage({
        path: fullSlug,
        component: path.resolve('./src/templates/projectTemplate.js'),
        context: { category, slug, fullSlug }
      })
  }); */

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


