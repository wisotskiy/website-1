const path = require(`path`)
// …
let absoluteLocalesDirectory
// Called during Gatsby execution, runs as soon as plugins are loaded.
exports.onPreInit = ({ store }, { locales }) => {
  // …
  // Get the absolute path to the locales directory
  absoluteLocalesDirectory = path.join(
    store.getState().program.directory,
    locales
  )
}
// Let plugins extend/mutate the site’s webpack configuration.
exports.onCreateWebpackConfig = ({ actions, plugins }) => {
  // Expose the absolute path to the locale directory as 
  // a global variable.
  actions.setWebpackConfig({
    plugins: [
      plugins.define({
        GATSBY_THEME_I18N_I18NEXT_WRAPPER: JSON.stringify(
          absoluteLocalesDirectory
        ),
      }),
    ],
  })
}