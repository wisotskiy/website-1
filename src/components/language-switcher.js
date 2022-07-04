import * as React from "react"
import { navigate } from "gatsby"
import { useLocalization } from "gatsby-theme-i18n"
// …
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
      <select
        value={locale}
        onChange={switchLanguage}
      >
        {config.map(c => (
          <option key={c.code} value={c.code}>
            {c.localName} ({c.name})
          </option>
        ))}
      </select>
    </div>
  )
}
export default LanguageSwitcher