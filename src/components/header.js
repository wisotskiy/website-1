import * as React from "react"
import { useTranslation } from "react-i18next"
import { LocalizedLink } from "gatsby-theme-i18n"
import LanguageSwitcher from "./language-switcher"
import 'bootstrap/dist/css/bootstrap.min.css'

import * as style from "../style/_style.module.scss"
import logo from "../images/logo.svg"


const Header = ({ siteTitle }) => {
  const { t } = useTranslation()

  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.logo}>
          <img src={logo}></img>
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
          </ul>
          <LanguageSwitcher />
        </nav>
          
        

      </div>
      
    </header>
  )
}
export default Header