import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useTranslation } from "react-i18next"
import Seo from "../components/seo"
import Teaser from "../components/teaser"
import MobileTeaser from "../components/teaserMobile"
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from "../components/layout"

import * as style from "../style/_style.module.scss"
import CarouselSlider from "../components/CarouselSlider/CarouselSlider"

const isBrowser = typeof window !== "undefined"

const IndexPage = ({ data }) => {
  
  const { t } = useTranslation()
  const categoriesRightOrder = data.file.childMdx.exports.categories
  
  
  const [width, setWidth] = useState(0)

  useEffect(() => {

    if(isBrowser) {
      window.addEventListener('resize', () => setWidth(window.innerWidth))

      window.removeEventListener('resize', () => setWidth())
      return () => { 
        setWidth(null)}
    }
    

  }, [width])

  return (
    <Layout>
      <Seo title={t("home")} />
      <CarouselSlider />
      <div id="about" className={style.container}>
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
        {categoriesRightOrder.map(category => {
          return data.allMdx.nodes.map(cat => {
            if(category === cat.frontmatter.slug) {
              return <div className={style.serviceItem} key={cat.id}>
              <div className={style.container}>
                {width > "576" ? <Teaser cat={cat} /> : <MobileTeaser cat={cat} />}
              </div>
            </div>
            }
          })

        })}       
      </div>      
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
query Categories($locale: String) {
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
      }
      id
      excerpt(pruneLength: 170, truncate: true)
    }
  }
  file(name: {eq: "order"}, sourceInstanceName: {eq: "works"}) {
    childMdx {
      exports {
        categories
      }
    }
  }
}
`