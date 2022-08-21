import * as React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
//import { useLocalization } from "gatsby-theme-i18n"
//import { useTranslation } from "react-i18next"
import Seo from "../components/seo"
import * as style from "../style/_style.module.scss"
import Layout from "../components/layout"
import { LocalizedLink } from "gatsby-theme-i18n"


const Category = ({data}) => {
  //const { locale/* , defaultLang, config  */} = useLocalization()
  const categoryData = data.mdx
console.log(data)
  return (
    <Layout>
      <Seo title={categoryData.frontmatter.title} />

      <div className={`${style.container} ${style.itemService}`}>
        <h1>Category: {categoryData.frontmatter.title}</h1>
        <ul>
          {data.allMdx.nodes.length > 0 ? data.allMdx.nodes.map(node => {
            return <li key={node.id}><LocalizedLink to={`/${node.frontmatter.category}/${node.frontmatter.slug}`}>{node.frontmatter.title}</LocalizedLink></li>
          }) : `There are no projects yet`}
        </ul>
        <GatsbyImage
          alt={categoryData.frontmatter.hero_image?.alt}
          image={getImage(categoryData.frontmatter?.hero_image?.image)}
          layout="constrained"
        />

        <article>
          <MDXRenderer>{categoryData.body}</MDXRenderer>


        </article>
      </div>
      <div className={style.container}>

      </div>
    </Layout>
  )
}

export default Category

export const query = graphql`
query CategoryBySlug($slug: String, $locale: String) {
  mdx(frontmatter: {slug: {eq: $slug}}, fields: {locale: {eq: $locale}}) {
    frontmatter {
      title
      slug
      hero_image {
        image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        alt
      }
    }
    body
  }
  allMdx(
    filter: {frontmatter: {category: {eq: $slug}}, fields: {locale: {eq: $locale}}}
  ) {
    nodes {
      frontmatter {
        title
        hero_image {
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        slug
        category
      }
      id
    }
  }
}
`