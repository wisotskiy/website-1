import * as React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
//import { useTranslation } from "react-i18next"
import Seo from "../components/seo"
import * as style from "../style/_style.module.scss"
import Layout from "../components/layout"


import Gallery from "../components/Carousel/Carousel"


const Project = ({ data }) => {
  const projectData = data.mdx
  const images = data.allFile.nodes
console.log(data)
  return (
    <Layout>
      <Seo title={projectData.frontmatter.title} />

      <div className={`${style.container} ${style.itemService}`}>
        <h1>Project: {projectData.frontmatter.title}</h1>

        <GatsbyImage
          alt={projectData.frontmatter.hero_image.alt}
          image={getImage(projectData.frontmatter.hero_image.image)}
          layout="constrained"
        />

        <article>
          <MDXRenderer>{projectData.body}</MDXRenderer>
        </article>
      </div>
      <div className={style.container}>
      <Gallery images={images}/>
      </div>
 
    </Layout>
  )
}

export default Project

export const query = graphql`
  query ProjectBySlug($slug: String, $locale: String, $fullSlug: String) {
    mdx(frontmatter: {slug: {eq: $slug}}, fields: {locale: {eq: $locale}}) {
      frontmatter {
        title
        published_at
        hero_image {
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
          alt
        }
      }
      body
    }
    allFile(
      filter: {extension: {eq: "jpg"}, relativeDirectory: {eq: $fullSlug}}
    ) {
      nodes {
        relativeDirectory
        id
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`