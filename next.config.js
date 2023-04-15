const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [require("remark-slug"), require("remark-toc")],
    rehypePlugins: [require("@mapbox/rehype-prism")],
  },
})

const withSvgr = require("next-svgr")

module.exports = withSvgr(
  withMDX({
    i18n: {
      defaultLocale: "en-GB",
      locales: ["en", "en-CA", "en-GB", "en-US"],
    },
    pageExtensions: ["js", "jsx", "mdx"],
    output: "standalone",
  })
)
