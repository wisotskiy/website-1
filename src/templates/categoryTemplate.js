import * as React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
//import { useLocalization } from "gatsby-theme-i18n"
//import { useTranslation } from "react-i18next"
import Seo from "../components/seo"
import * as style from "../style/_style.module.scss"
import Layout from "../components/layout"
import { LocalizedLink} from "gatsby-theme-i18n"


const Category = ({data}) => {
  //const { locale/* , defaultLang, config  */} = useLocalization()
  const categoryData = data.mdx

  return (
    <Layout>
      <Seo title={categoryData.frontmatter.title} />

      <div className={style.container}>
        <h1>{categoryData.frontmatter.title}</h1>

        <article>
          <MDXRenderer>{categoryData.body}</MDXRenderer>
        </article>

        <div className={style.storefront}>         
          {data.allMdx.nodes.map(node => {
            return (
              <div key={node.id}>
                <h3><LocalizedLink to={`/${node.frontmatter.category}/${node.frontmatter.slug}`}>{node.frontmatter.title}</LocalizedLink></h3>
                <GatsbyImage 
                  image={getImage(node.frontmatter.hero_image.image)}
                  alt={node.frontmatter.hero_image.alt}
                />
              </div>
            )
          })}       
        </div>
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
          alt
        }
        slug
        category
      }
      id
    }
  }
}
`