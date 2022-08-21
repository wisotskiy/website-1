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
      <GatsbyImage
        className={style.teaserPhoto}
        image={getImage(cat.frontmatter?.hero_image.image)}
        alt={cat.frontmatter.hero_image.alt}
      />
      <div className={style.info}>
        <h3 className={style.teaserTitle}>
          <Link to={`/${cat.frontmatter.slug}`}>
            {cat.frontmatter.title}
          </Link>
        </h3>
        <p>{cat.excerpt}</p>
        <Button variant="outline-light"
          className={style.seeMore}
        >{t("slider_link")}</Button>
      </div>
    </article>
  )
}