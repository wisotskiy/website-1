import * as React from "react"
import { Trans } from "react-i18next"
import * as style from "../style/_style.module.scss"

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={style.footer}>
      <Trans i18nKey="footer">
        © {{ year }} | Built with
        {` `}
        <a href="https://www.gatsbyjs.com" className="underline">
          Gatsby
        </a>{" "}
        for the{" "}
        <a href="https://phrase.com/blog/" className="underline">
          Phrase Blog
        </a>{" "}
        | Content from{" "}
        <a
          href="https://en.wikipedia.org/wiki/F._Scott_Fitzgerald_bibliography"
          className="underline"
        >
          Wikipedia
        </a>
      </Trans>
    </footer>
  )
}

export default Footer