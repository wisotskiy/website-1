import * as React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import * as style from "./_FullSizeImage.module.scss"
//import Gallery from "../components/Carousel/Carousel"


const FullSizeImage = ({ image }) => {

  
  return (
    <div className={style.fullScreenShadow}>
{/*         <GatsbyImage 
            className={style.fullSize}
            image={getImage(image)}
            alt={node.frontmatter.hero_image.alt}
        /> */}
        <StaticImage 
            className={style.fullSize}
            src="../../images/placeholder-image.png"
            alt="ss"
        />
 
    </div>
  )
}

export default FullSizeImage