/* global GATSBY_THEME_I18N_I18NEXT_WRAPPER */
// 👆Supress ESLINT error regarding global variables
import * as React from "react"
import i18next from "i18next"
import { I18nextProvider } from "react-i18next"

const wrapPageElement = ({ element, props }, options) => {
  // The Gatsby I18n plugin we installed earlier will add
  // the active locale to our page context
  const currentLocale = props.pageContext.locale
  // Use the variable exposed by gatsby-node.js to find
  // the JSON file corresponding to the active locale e.g.
  // /absolute/path/to/i18n/l10n/ar/translation.json
  // when active locale is "ar"
  const translation = require(`${GATSBY_THEME_I18N_I18NEXT_WRAPPER}/${currentLocale}/translation.json`)
  // Initialize the i18next instance
  i18next.init({
    lng: currentLocale,
    // Load translations for the active locale
    resources: { [currentLocale]: { translation } },
    fallbackLng: "en",
    // Make init() run synchronously, ensuring that
    // resources/translations are loaded as soon as init()
    // finishes (default behaviour is async loading)
    initImmediate: false,
    
    // Output useful logs to the browser console
    debug: process.env.NODE_ENV === "development",
    // Disable escaping for cross-site scripting (XSS)
    // protection, since React does this for us
    interpolation: { escapeValue: false },  
  })
  // Wrap 🌯
  return <I18nextProvider i18n={i18next}>{element}</I18nextProvider>
}
export { wrapPageElement }