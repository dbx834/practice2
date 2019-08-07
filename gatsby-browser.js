/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
exports.onClientEntry = () => {
  if (process.env.NODE_ENV !== `production`) {
    require(`preact/debug`)
  }
}
