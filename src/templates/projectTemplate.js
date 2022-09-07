import * as React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import * as style from "../style/_style.module.scss"
import Layout from "../components/layout"
import Gallery from "../components/Carousel/Carousel"
import Video from "../components/Video/Video"


const Project = ({ data }) => {
  const projectData = data.mdx || `Title placeholder`
  const images = data.allFile.nodes
console.log(data.mdx.frontmatter.link)
  return (
    <Layout>
      <Seo title={projectData?.frontmatter?.title} />
      <div className={style.gap}></div>
      <div className={`${style.container} ${style.itemService}`}>
        <h1 className={style.title}>{projectData?.frontmatter?.title}</h1>

        {!data.mdx.frontmatter.link ? 
        <GatsbyImage
          alt={projectData?.frontmatter?.hero_image?.alt}
          image={getImage(projectData?.frontmatter?.hero_image?.image)}
          layout="constrained"
        /> :
        <Video 
          videoSrcURL={data.mdx.frontmatter.link}
          videoTitle="Official Music Video on YouTube"
        />}

        <article>
          <MDXRenderer>{projectData?.body}</MDXRenderer>
        </article>
      </div>
      {!data.mdx.frontmatter.link && <div className={style.container}>
        <Gallery images={images}/>
      </div>}
 
    </Layout>
  )
}

export default Project

export const query = graphql`
query ProjectBySlug($slug: String, $locale: String, $fullSlug: String) {
  mdx(frontmatter: {slug: {eq: $slug}}, fields: {locale: {eq: $locale}}) {
    frontmatter {
      title
      hero_image {
        image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        alt
      }
      link
    }
    body
  }
  allFile(filter: {extension: {eq: "jpg"}, relativeDirectory: {eq: $fullSlug}}) {
    nodes {
      relativeDirectory
      id
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
  }
}
`