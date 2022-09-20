import React, {useEffect}  from "react"
import { Trans } from "react-i18next"
import { useTranslation } from "react-i18next"
import { LocalizedLink } from "gatsby-theme-i18n"
import * as style from "../style/_style.module.scss"

import top from "../images/to_top.svg"

const isBrowser = typeof window !== "undefined"

function Footer() {
  const year = new Date().getFullYear()
  const { t } = useTranslation()

  let locale = "/"
  if (isBrowser) {
    locale = window.location.pathname
    
  }

  //const locale = `${window.location.origin}${window.location.pathname}`

  //console.log(locale)

  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <LocalizedLink  className={style.buttonTop} to={locale}><img src={top} alt="to top button"></img></LocalizedLink>
        <p><Trans i18nKey="footer">{{ year }}</Trans></p>

      </div>
    </footer>
  )
}

export default Footer