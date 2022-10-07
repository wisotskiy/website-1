import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { LocalizedLink as Link } from "gatsby-theme-i18n"
import { useTranslation } from "react-i18next"

import * as style from "../style/_style.module.scss"

export default function Teaser({ project }) {

  const { t } = useTranslation()

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
      
{/*       <h3 className={style.teaserTitle}>
        <Link to={`/${project.childMdx.frontmatter.slug}`}>
          {project.childMdx.frontmatter.title}
        </Link>
      </h3> */}
    </div>
  )
}