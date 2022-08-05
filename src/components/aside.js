import * as React from "react"
import { useTranslation } from "react-i18next"
import { LocalizedLink } from "gatsby-theme-i18n"
import LanguageSwitcher from "./language-switcher"
import { useLocalization } from "gatsby-theme-i18n"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
//import 'bootstrap/dist/css/bootstrap.min.css'

import * as style from "../style/_style.module.scss"
import logo from "../images/logo.svg"
import yt from "../images/yt-icon.svg"
import fb from "../images/fb.svg"


const Aside = ({ titles }) => {
  const { t } = useTranslation()
  const { locale/* , defaultLang, config  */} = useLocalization()

  const query = useStaticQuery(graphql`
  query Flags {
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
  }
  `)

const flags = query.allFile.nodes
  
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
            <li className={style.pagesItem}>
              <LocalizedLink to="/">
                {t("about")}
              </LocalizedLink>
            </li>
            <li className={style.pagesItem}>
              <LocalizedLink to="/">
                {t("works")}&nbsp;
                  <span style={{
                    display: "inline-block", 
                    color: "grey",  /* transform: "rotate(90deg)", */}}>&#10095;
                  </span>
                  <ul>
                    {titles.map(title => {
                      console.log(title)
                      return <li key={title.id}>{title.frontmatter.title}</li>
                    })}
                  </ul>
              </LocalizedLink>
            </li>
            <li className={style.pagesItem}>
              <LocalizedLink to="/">
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