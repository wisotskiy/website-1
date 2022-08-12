import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage, getImage } from "gatsby-plugin-image"
import { useTranslation } from "react-i18next"
import Seo from "../components/seo"
import Teaser from "../components/teaser"
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from "../components/layout"

import * as style from "../style/_style.module.scss"
import CarouselSlider from "../components/CarouselSlider/CarouselSlider"

const IndexPage = ({ data }) => {
  const { t } = useTranslation()
  return (
    <Layout titles={data.allMdx.nodes}>
      <Seo title={t("home")} />
      <CarouselSlider />
      <div className={style.container}>
        <h1 className={style.title}>{t("main_page_title")}</h1>

        <div className={style.about}>
          <StaticImage 
            className={style.aboutPhoto}
            src="../images/me.jpg" 
            alt="my foto"
             />
          <p className={style.aboutText}>{t("main_page_desc", { count: 3 })}</p>
        </div>
      </div>

      <div className={style.servicesList}>       
        {data.allMdx.nodes.map(post => {
          const image = getImage(post.frontmatter.hero_image.image)
          return <div className={style.serviceItem} key={post.id}>
            <div className={style.container}>
              <Teaser post={post} image={image} />
            </div>
          </div>
        })}       
      </div>      
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
query BlogPosts($locale: String) {
  allMdx(
    filter: {fields: {locale: {eq: $locale}}, frontmatter: {category: {eq: "root"}}}
  ) {
    nodes {
      frontmatter {
        hero_image {
          image {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
          alt
        }
        slug
        title
        category
      }
      id
      excerpt(pruneLength: 170, truncate: true)
    }
  }
}
`