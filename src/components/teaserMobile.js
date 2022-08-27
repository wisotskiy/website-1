import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { LocalizedLink as Link } from "gatsby-theme-i18n"
import { useTranslation } from "react-i18next"
import Button from 'react-bootstrap/Button';

import * as style from "../style/_style.module.scss"

export default function MobileTeaser({ cat }) {

  const { t } = useTranslation()

  return (
    <article className={style.mobile}>
      <h3 className={style.teaserTitle}>
        <Link to={`/${cat.frontmatter.slug}`}>
          {cat.frontmatter.title}
        </Link>
      </h3>
      <GatsbyImage
        className={style.teaserPhoto}
        image={getImage(cat.frontmatter?.hero_image.image)}
        alt={cat.frontmatter.hero_image.alt}
      />
      <div className={style.info}>
        
        <p>{cat.excerpt}
        <span><Button variant="outline-light"
          className={style.seeMore}
        >{t("slider_link")}</Button></span>
        </p>
      </div>
    </article>
  )
}