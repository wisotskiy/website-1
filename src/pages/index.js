import * as React from "react"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { useTranslation } from "react-i18next"
import Seo from "../components/seo"
import Teaser from "../components/teaser"
import Layout from "../components/layout"
import 'bootstrap/dist/css/bootstrap.min.css'

import * as style from "../style/_style.module.scss"
import me from "../images/me.jpg"

const IndexPage = ({ data }) => {
  const { t } = useTranslation()

  return (
    <Layout>
      <Seo title={t("home")} />

      <div className={style.container}>
        <h1 className={style.title}>{t("main_page_title")}</h1>

        <div className={style.about}>
          <img src={me}></img>
          <p>{t("main_page_desc", { count: 3 })}</p>
        </div>
      

      {data.allMdx.nodes.map(post => {
        const image = getImage(post.frontmatter.hero_image.image)

        return <Teaser key={post.id} post={post} image={image} />
      })}
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query BlogPosts($locale: String) {
    allMdx(filter: { fields: { locale: { eq: $locale } } }) {
      nodes {
        frontmatter {
          hero_image {
            image {
              childImageSharp {
                gatsbyImageData(
                  width: 150
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
            alt
          }
          slug
          title
          published_at
        }
        id
        excerpt(pruneLength: 150, truncate: true)
      }
    }
  }
`