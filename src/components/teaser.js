import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { LocalizedLink as Link } from "gatsby-theme-i18n"
import { useTranslation } from "react-i18next"
import Button from 'react-bootstrap/Button';

import * as style from "../style/_style.module.scss"

export default function Teaser({ cat }) {

  const { t } = useTranslation()

  return (
    <article>
      <div className={style.photoBackground}>
        <Link to={`/${cat.frontmatter.slug}`}>
          <GatsbyImage
            className={style.teaserPhoto}
            image={getImage(cat.frontmatter?.hero_image.image)}
            alt={cat.frontmatter.hero_image.alt}
          />      
        </Link>
      </div>
      
      <h3 className={style.teaserTitle}>
        <Link to={`/${cat.frontmatter.slug}`}>
          {cat.frontmatter.title}
        </Link>
      </h3>
      <p className={style.teaserDescription}>{cat.excerpt}</p>
      <Link to={`/${cat.frontmatter.slug}`} className={style.seeMore}>
        <Button variant="outline-dark">{t("slider_link")}</Button>
      </Link>
      
    </article>
  )
}