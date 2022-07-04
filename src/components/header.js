import * as React from "react"
import { useTranslation } from "react-i18next"
import { LocalizedLink } from "gatsby-theme-i18n"
import LanguageSwitcher from "./language-switcher"


const Header = ({ siteTitle }) => {
  const { t } = useTranslation()
  console.log(t)
  return (
    <header>
      <div>
        <div>
          <nav>
            <ul>
              <li>
                <LocalizedLink to="/">
                  {t("articles")}
                </LocalizedLink>
              </li>
              <li>
                <LocalizedLink to="/">
                  {t("about")}
                </LocalizedLink>
              </li>
            </ul>
          </nav>
        </div>
        <LanguageSwitcher />
      </div>
    </header>
  )
}
export default Header