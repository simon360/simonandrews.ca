const { FlatCompat } = require("@eslint/eslintrc")
const path = require("path")

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

module.exports = [
  { ignores: [".next/**"] },
  ...compat.extends("next/core-web-vitals"),
  {
    files: ["**/*.stories.js"],
    rules: {
      "import/no-anonymous-default-export": "off",
      "react/no-unescaped-entities": "off",
      "@next/next/no-img-element": "off",
    },
  },
]
