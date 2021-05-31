const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
})
const withSvgr = require("next-svgr")

module.exports = withSvgr(
  withMDX({
    i18n: {
      defaultLocale: "en-GB",
      locales: ["en", "en-CA", "en-GB", "en-US"],
    },
    pageExtensions: ["js", "jsx", "mdx"],
  })
)
