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
          hero_image {
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
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
      const image = node.frontmatter.hero_image.image
      
      createPage({
        path: slug,
        component: path.resolve('./src/templates/categoryTemplate.js'),
        context: { slug, image }
      })
    })
  })

  const projectsQuery = await graphql(`
  {
    allMdx(filter: {frontmatter: {category: {ne: "root"}}, slug: {ne: "order"}}) {
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
  })
}


