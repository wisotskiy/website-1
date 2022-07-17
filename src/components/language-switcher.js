import * as React from "react"
import { navigate } from "gatsby"
import { useLocalization } from "gatsby-theme-i18n"
import Form from 'react-bootstrap/Form'
import en from "../images/en.svg"
import * as style from "../style/_style.module.scss"

function LanguageSwitcher() {
  const { locale, defaultLang, config } = useLocalization()
  const switchLanguage = e => {
    // Avoid an unnecessary page load if the
    // user selected the already active locale
    if (e.target.value === locale) {
      return
    }
    // Go to the home page corresponding to the 
    // selected locale
    if (e.target.value === defaultLang) {
      navigate("/")
    } else {
      navigate(`/${e.target.value}`)
    }
  }
  return (
    <div> 
      {/* <img className={style.flag} src={`../images/${locale}.png`}></img> */}    
      <Form.Select value={locale}
        onChange={switchLanguage}>
        {config.map(c => (
          <option key={c.code} value={c.code}>
            {c.localName}         
          </option>
        ))}
      </Form.Select>
    </div>
  )
}
export default LanguageSwitcher