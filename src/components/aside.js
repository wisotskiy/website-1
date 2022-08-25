import * as React from "react"
import { useTranslation } from "react-i18next"
import { LocalizedLink } from "gatsby-theme-i18n"
import LanguageSwitcher from "./language-switcher"
import { useLocalization } from "gatsby-theme-i18n"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import * as style from "../style/_style.module.scss"
import logo from "../images/logo.svg"
import yt from "../images/yt-icon.svg"
import fb from "../images/fb.svg"


const Aside = () => {

  const query = useStaticQuery(graphql`
  query Menu {
    allFile(filter: {extension: {eq: "png"}}) {
      nodes {
        relativePath
        name
        childImageSharp {
          gatsbyImageData
        }
        id
      }
    }
    allMdx(filter: {frontmatter: {category: {eq: "root"}}}) {
      nodes {
        frontmatter {
          slug
          title
        }
        id
        fields {
          locale
        }
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
  `)

const { t } = useTranslation()
const { locale/* , defaultLang, config  */} = useLocalization()
const flags = query.allFile.nodes
const categories = query.allMdx.nodes
const categoriesRightOrder = query.file.childMdx.exports.categories
  
  return (
    <aside className={style.aside}>
      <div className={style.asideContainer}>
        <div className={style.logo}>
        <LocalizedLink to="/"><img src={logo} alt="logo"></img></LocalizedLink>
        </div>
        <nav className={style.mainMenu}>

          <ul className={style.languages}>
            <li>
              {flags.map(flag => {
                if(flag.name === locale) {
                  return <GatsbyImage
                  key={flag.id}
                  image={flag.childImageSharp.gatsbyImageData}
                  style={{"aspectRatio": "1/1", position: "relative", top: "2px", marginRight: "10px"}}
                  alt="flag"
                />
                }
              })}
            </li>
            <li>
              <LanguageSwitcher />
            </li>
          </ul>

          <ul className={style.pages}>
            <li>
              <LocalizedLink to={`/#about`}>{t("about")}</LocalizedLink>
            </li>
            <li className={style.works}>
              {t("works")}&nbsp;
                <span style={{
                  display: "inline-block"}}>&#10095;
                </span>
              <ul className={style.worksList}>
                {categoriesRightOrder.map(category => {
                  return categories.map(title => {
                    if(category === title.frontmatter.slug && title.fields.locale === locale) {
                      return <li key={title.id}>
                        <LocalizedLink to={`/${title.frontmatter.slug}`}>{title.frontmatter.title}</LocalizedLink>
                      </li>
                    }
                  })
                })}     
              </ul>
            </li>
            <li>
              <LocalizedLink to="/contacts">
                {t("contacts")}
              </LocalizedLink>
            </li>

          </ul>
          
          <ul className={style.socials}>
            <li className={style.socialsItem}>             
              <a href="https://www.facebook.com/wisotskiy">
                <img className={style.fb} src={fb}></img>
              </a>
            </li>
            <li className={style.socialsItem}>             
              <a href="https://www.youtube.com/watch?v=zhJha7ePr3w">
                <img className={style.yt} src={yt}></img>
              </a>
            </li>
          </ul>                     
                   
        </nav>
        
      </div>
      
    </aside>
  )
}
export default Aside