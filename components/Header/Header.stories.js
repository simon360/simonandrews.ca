import React from "react"

import Heading from "../Heading"
import Hero from "../Hero"
import Paragraph from "../Paragraph"
import Section from "../Section"
import Surface from "../Surface"
import VerticalSpacing from "../VerticalSpacing"

import snow from "../../images/hero-snow.jpg"

import Header from "."

export default {
  title: "Components|Header",
}

const siteLinks = [
  {
    title: "CV",
    url: "/",
  },
  {
    title: "Blog",
    url: "/blog",
  },
  {
    title: "Contact",
    url: "/contact",
  },
]

const socialLinks = [
  {
    title: "simon360 on GitHub",
    type: "github",
    url: "https://www.github.com/simon360",
  },
  {
    title: "simon360 on Instagram",
    type: "instagram",
    url: "https://www.instagram.com/simon360",
  },
  {
    title: "sadl-uk on LinkedIn",
    type: "linkedin",
    url: "https://www.linkedin.com/in/sadl-uk/",
  },
  {
    title: "@simon360 on Twitter",
    type: "twitter",
    url: "https://www.twitter.com/simon360",
  },
]

export const Primary = () => (
  <Surface backgroundColorType="brand-primary">
    <Header
      siteLinks={siteLinks}
      siteTitle="Simon Andrews"
      socialLinks={socialLinks}
    />
  </Surface>
)

export const Transparent = ({ backgroundColorType = "brand-primary" }) => (
  <Surface backgroundColorType={backgroundColorType}>
    <Header
      siteLinks={siteLinks}
      siteTitle="Simon Andrews"
      socialLinks={socialLinks}
    />
    <Section verticalPadding="xl">
      <Heading element="h2" type="xl">
        Hello, world
      </Heading>
      <VerticalSpacing size="md" />
      <Paragraph isLead>Perhaps there's some other content here.</Paragraph>
      <VerticalSpacing size="xl" />
    </Section>
  </Surface>
)

export const TransparentOnSecondary = () => (
  <Transparent backgroundColorType="brand-secondary" />
)

export const TransparentOnLight = () => (
  <Transparent backgroundColorType="light" />
)

export const TransparentOnMuted = () => (
  <Transparent backgroundColorType="muted" />
)

export const TransparentInAHero = () => (
  <Hero
    background={
      <img
        alt=""
        src={snow}
        style={{
          height: "100%",
          objectFit: "cover",
          width: "100%",
        }}
      />
    }
  >
    <Header
      siteLinks={siteLinks}
      siteTitle="Simon Andrews"
      socialLinks={socialLinks}
    />
    <Section verticalPadding="xl">
      <Heading element="h2" type="xl">
        Hello, world
      </Heading>
      <VerticalSpacing size="md" />
      <Paragraph isLead>Perhaps there's some other content here.</Paragraph>
      <VerticalSpacing size="xl" />
    </Section>
  </Hero>
)
