import React, { useState, useEffect } from 'react'
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import * as style from "../style/_style.module.scss"
import Layout from "../components/layout"
import { useTranslation } from "react-i18next"
import { LocalizedLink as Link } from "gatsby-theme-i18n"
//import Video from "../components/Video/Video"


const Project = ({ data }) => {

  const { t } = useTranslation()
  const projectData = data.mdx
  const images = data.allFile.nodes
  const galleryWidth = 1150

  const [isFull, setIsfull] = useState(false)
  const [isShow, setIsShow] = useState(false)

  const styleShow = {
    display: "block"
  }

  const styleHidden = {
    display: "none"
  }

  const styleOneThirds = {
    width: "30%"
  }

  const styleTwoThirds = {
    width: "250px"
  }

  const styleHalf = {
    display: "570px"
  }

  const styleFull = {
    maxWidth: "100%"
  }

  const showFullImage = () => {
    console.log('e.target')
    return setIsfull(true)
  }
  useEffect(() => {
    
    const showReturnButton = () => {
      window.scrollY > 200 && setIsShow(true)
      window.scrollY <= 200 && setIsShow(false)
    };

    window.addEventListener('scroll', showReturnButton);

    return () => {
      window.removeEventListener('scroll', showReturnButton);
    };
  }, []);
  let counter = 0
  let styled = {}
  return (
    <Layout>
      <Seo title={projectData?.frontmatter?.title} />
      <div className={style.gap}></div>
      <div className={style.container}>
        <Link to={`/${data.mdx.frontmatter.category}`} className={style.buttonReturn} style={isShow ? styleShow : styleHidden}><button>{t("return")}</button></Link>
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
          {images.map((image, i) => {
            console.log(counter)
            console.log(i+1)
            
            //counter = 0

            if (counter === 0) {

              if (image.childImageSharp.gatsbyImageData.width >= image.childImageSharp.gatsbyImageData.height &&
                images[i + 1]?.childImageSharp.gatsbyImageData.width >= images[i + 1]?.childImageSharp.gatsbyImageData.height) {
                  
                  styled = {width: `100%`}
                  counter = 0
              } else if (image.childImageSharp.gatsbyImageData.width >= image.childImageSharp.gatsbyImageData.height &&
                images[i + 1]?.childImageSharp.gatsbyImageData.width < images[i + 1]?.childImageSharp.gatsbyImageData.height) {
                  
                  styled = {width: `100%`}
                  counter = 1
              } else if (image.childImageSharp.gatsbyImageData.width < image.childImageSharp.gatsbyImageData.height &&
                images[i + 1]?.childImageSharp.gatsbyImageData.width < images[i + 1]?.childImageSharp.gatsbyImageData.height) {
                  styled = {width: `calc(50% - 10px)`}
                  counter = 1
              } else if (image.childImageSharp.gatsbyImageData.width < image.childImageSharp.gatsbyImageData.height &&
                images[i + 1]?.childImageSharp.gatsbyImageData.width >= images[i + 1]?.childImageSharp.gatsbyImageData.height) {
                  styled = {width: `calc(33.333333% - 10px)`}
                  counter = 1
              } 
              //counter > 1 ? counter = 0 : counter += 1
              
            } 

            if (counter === 1) {

              if (image.childImageSharp.gatsbyImageData.width < image.childImageSharp.gatsbyImageData.height &&
                images[i + 1]?.childImageSharp.gatsbyImageData.width < images[i + 1]?.childImageSharp.gatsbyImageData.height) {
                  styled = {width: `calc(50% - 10px)`}
                  counter = 2
              } else if (image.childImageSharp.gatsbyImageData.width < image.childImageSharp.gatsbyImageData.height &&
                images[i + 1]?.childImageSharp.gatsbyImageData.width >= images[i + 1]?.childImageSharp.gatsbyImageData.height) {
                  styled = {width: `calc(33.333333% - 10px)`}
                  counter = 2
              }             
            } 

            if (counter === 2) {

              /* if (images[i - 1]?.childImageSharp.gatsbyImageData.width < images[i - 1]?.childImageSharp.gatsbyImageData.height && 
                image.childImageSharp.gatsbyImageData.width < image.childImageSharp.gatsbyImageData.height) {                
                  styled = {width: `calc(50% - 10px)`}
                  counter = 0
              } else */ if (images[i - 1]?.childImageSharp.gatsbyImageData.width < images[i - 1]?.childImageSharp.gatsbyImageData.height && 
                image.childImageSharp.gatsbyImageData.width >= image.childImageSharp.gatsbyImageData.height) {
                  styled = {width: `calc(66.666667% - 10px)`}
                  counter = 0
              } 
            }

            //console.log(counter)
            console.log(styled)
            //console.log(currentWidth)
            return (
              <GatsbyImage
                className={style.photo}
                key={image.id}
                alt={projectData?.frontmatter?.title}
                image={getImage(image)}  
                style={styled}
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
      category
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