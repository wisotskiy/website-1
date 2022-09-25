import React, { useState, useEffect } from 'react'
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import * as style from "../style/_style.module.scss"
import Layout from "../components/layout"
import Gallery from "../components/Carousel/Carousel"
import GalleryFull from "../components/CarouselFull/CarouselFull"
//import Video from "../components/Video/Video"


const Project = ({ data }) => {
  const projectData = data.mdx
  const images = data.allFile.nodes

  const[isFull, setIsfull] = useState(false)

  const showFullImage = () => {
    console.log('e.target')
    return setIsfull(true)
  }

  return (
    <Layout>
      <Seo title={projectData?.frontmatter?.title} />
      <div className={style.gap}></div>
      <div className={style.container}>
        <h1 className={style.title}>{projectData?.frontmatter?.title}</h1>
{/*         <a href={data.mdx.frontmatter.link} target="_blank" rel="noopener noreferrer">
          <GatsbyImage
            className={style.projectMainImage}
            alt={projectData?.frontmatter?.hero_image?.alt}
            image={getImage(projectData?.frontmatter?.hero_image?.image)}
            layout="constrained"
            
          />
        </a> */}

        {!data.mdx.frontmatter.link ? 

        <div className={`${style.container} ${style.photosGallery}`}>
          {images.map(image => {
            return (
              <GatsbyImage
                className={style.photo}
                key={image.id}
                alt={projectData?.frontmatter?.title}
                image={getImage(image)}      
              />
            )
          })}
        </div> :

        <a href={data.mdx.frontmatter.link} target="_blank" rel="noopener noreferrer">
          <GatsbyImage
            className={style.projectMainImage}
            alt="ff"
            //alt={projectData?.frontmatter?.hero_image?.alt}
            image={getImage(projectData?.frontmatter?.hero_image?.image)}
            layout="constrained"
            
          />
        </a>} 

        <article>
          <MDXRenderer>{projectData?.body}</MDXRenderer>
        </article>
      </div>
{/*       {!data.mdx.frontmatter.link && 
        <div className={`${style.container} ${style.projectGallery}`}>
          <Gallery images={images}/>
        </div>} */}
 
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