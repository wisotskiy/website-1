import * as React from "react"
import { Trans } from "react-i18next"
import { useTranslation } from "react-i18next"
import { LocalizedLink } from "gatsby-theme-i18n"
import * as style from "../style/_style.module.scss"

import top from "../images/to_top.svg"

function Footer() {
  const year = new Date().getFullYear()
  const { t } = useTranslation()

  const locale = `${window.location.origin}${window.location.pathname}`

  console.log(locale)

  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <LocalizedLink  className={style.buttonTop} to={window.location.pathname}><img src={top} alt="to top button"></img></LocalizedLink>
        <p><Trans i18nKey="footer">{{ year }}</Trans></p>

      </div>
    </footer>
  )
}

export default Footer