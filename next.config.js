const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: "@mdx-js/react",
    remarkPlugins: [require("remark-toc")],
    rehypePlugins: [
      require("rehype-slug").default,
      require("rehype-prism-plus").default,
    ],
  },
})

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "mdx"],
  output: "standalone",
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    })
    return config
  },
})
