import React from "react"
//import { Link } from "gatsby"
import { LocalizedLink as Link } from "gatsby-theme-i18n"

export default function Teaser({ post, image }) {

  return (
    <article>
      <div>
        <h3>
          <Link to={`/works/${post.frontmatter.slug}`}>
            {post.frontmatter.title}
          </Link>
        </h3>
        <p>
          Published {post.frontmatter.published_at}
        </p>
        <p>{post.excerpt}</p>
      </div>
    </article>
  )
}