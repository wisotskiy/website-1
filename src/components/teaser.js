import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { LocalizedLink as Link } from "gatsby-theme-i18n"
import { useTranslation } from "react-i18next"
import Button from 'react-bootstrap/Button';

import * as style from "../style/_style.module.scss"

export default function Teaser({ post, image }) {

  const { t } = useTranslation()
 
  return (
    <article>
      <GatsbyImage
        image={image}
        style={{"aspectRatio": "1/1"}}
        alt={post.frontmatter.hero_image.alt}
      />
      <div className={style.info}>
        <h3>
          <Link to={`/works/${post.frontmatter.slug}`}>
            {post.frontmatter.title}
          </Link>
        </h3>
        <p>
          Published {post.frontmatter.published_at}
        </p>
        <p>{post.excerpt}</p>
        <Button variant="outline-dark">{t("slider_link")}</Button>
      </div>
    </article>
  )
}