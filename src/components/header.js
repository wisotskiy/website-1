import * as React from "react"
import { useTranslation } from "react-i18next"
import { LocalizedLink } from "gatsby-theme-i18n"
import LanguageSwitcher from "./language-switcher"
import { useLocalization } from "gatsby-theme-i18n"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import 'bootstrap/dist/css/bootstrap.min.css'

import * as style from "../style/_style.module.scss"
import logo from "../images/logo.svg"


const Header = ({ data }) => {
  const { t } = useTranslation()
  const { locale, defaultLang, config } = useLocalization()

  const query = useStaticQuery(graphql`
    query Flags {
      allFile(filter: {extension: {eq: "png"}}) {
        nodes {
          relativePath
          name
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `)

const flags = query.allFile.nodes
  
  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.logo}>
        <LocalizedLink to="/"><img src={logo}></img></LocalizedLink>
        </div>
        <nav className={style.mainMenu}>
          <ul>
            <li className={style.mainMenuItem}>
              <LocalizedLink to="/">
                {t("about")}
              </LocalizedLink>
            </li>
            <li className={style.mainMenuItem}>
              <LocalizedLink to="/">
                {t("works")}
              </LocalizedLink>
            </li>
            <li className={style.mainMenuItem}>
              <LocalizedLink to="/">
                {t("contacts")}
              </LocalizedLink>
            </li>
            <li>
              {flags.map(flag => {
                if(flag.name === locale) {
                  return <GatsbyImage
                  image={flag.childImageSharp.gatsbyImageData}
                  style={{"aspectRatio": "1/1"}}
                  alt="aaa"
                />
                }
              })}
            </li>
          </ul>
          <LanguageSwitcher />
        </nav>
      </div>
      
    </header>
  )
}
export default Header

