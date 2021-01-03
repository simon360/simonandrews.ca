import { MDXProvider } from "@mdx-js/react"
import React from "react"
import PropTypes from "prop-types"
import Image from "next/image"

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Heading from "@/components/Heading"
import Hero from "@/components/Hero"
import Paragraph from "@/components/Paragraph"
import Section from "@/components/Section"

import home from "@/data/home"
import site from "@/data/site"

import { content, wrapper } from "./Layout.module.css"

const components = {
  h1: Heading.Centered.H1,
  h2: Heading.Centered.H2,
  h3: Heading.Centered.H3,
  h4: Heading.Centered.H4,
  p: Paragraph,
}

const Layout = ({ children, heroContent, meta }) => {
  return (
    <MDXProvider components={components}>
      <div className={wrapper}>
        {/* Add a target for the Return To Top link */}
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid, jsx-a11y/anchor-is-valid, jsx-a11y/anchor-has-content */}
        <a id="top" />

        <Hero
          background={
            <Image layout="fill" objectFit="cover" src={meta.heroImage} />
          }
        >
          <Header
            siteTitle={site.title}
            siteLinks={site.siteLinks}
            socialLinks={site.socialLinks}
          />
          {heroContent}
        </Hero>

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
