import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { LocalizedLink as Link } from "gatsby-theme-i18n"

import * as style from "../style/_style.module.scss"

export default function Teaser({ project }) {

  return (
    <div className={style.teaser}>
      <div className={style.photoBackground}>
        <Link to={`/${project.childMdx.frontmatter.category}/${project.childMdx.frontmatter.slug}`}>
          <GatsbyImage
            className={style.teaserPhoto}
            image={getImage(project.childMdx.frontmatter.hero_image.image)}
            alt={project.childMdx.frontmatter.hero_image.alt}
          />      
        </Link>
      </div>
    </div>
  )
}