import { MDXProvider } from "@mdx-js/react"
import React from "react"
import PropTypes from "prop-types"

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Heading from "@/components/Heading"
import Link from "@/components/Link"
import List from "@/components/List"
import Paragraph from "@/components/Paragraph"
import Section from "@/components/Section"
import Surface from "@/components/Surface"
import Seo from "@/components/Seo"

import site from "@/data/site"

import { content, wrapper } from "./Layout.module.css"

// Support syntax highlighting on articles
// Markup is added by rehype-prism, this is just the CSS
import "prismjs/themes/prism-tomorrow.css"

const components = {
  a: Link,
  h1: Heading.MarginWhenAdjacent.H1,
  h2: Heading.MarginWhenAdjacent.H2,
  h3: Heading.MarginWhenAdjacent.H3,
  h4: Heading.MarginWhenAdjacent.H4,
  li: List.Item,
  ol: List.Ol,
  p: Paragraph,
  ul: List.Ul,
}

const Layout = ({ children, heroContent, meta }) => {
  return (
    <MDXProvider components={components}>
      <Seo meta={meta} />
      <div className={wrapper} id="top">
        <Surface backgroundColorType="muted">
          <Header
            siteTitle={site.title}
            siteLinks={site.siteLinks}
            socialLinks={site.socialLinks}
          />
          {heroContent}
        </Surface>

        <main className={content}>
          <Section verticalPadding="xxl">{children}</Section>
        </main>

        <Footer
          contactInfo={
            <Paragraph>
              You can get in touch with me at{" "}
              <a href="mailto:hello@sadl.io">hello@sadl.io</a>, or via my social
              media profiles. I am not currently looking for new work.
            </Paragraph>
          }
          socialLinks={site.socialLinks}
        />
      </div>
    </MDXProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
