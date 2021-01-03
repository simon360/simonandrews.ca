import React from "react"

import Heading from "../Heading"
import Section from "../Section"
import Surface from "../Surface"
import TextWithIcon from "../TextWithIcon"
import VerticalSpacing from "../VerticalSpacing"

import Logo from "."

export default {
  title: "Components|Logo",
}

export const Primary = () => (
  <div style={{ margin: "0 auto", maxWidth: "32rem" }}>
    <Logo />
  </div>
)

export const OnDark = () => (
  <Surface backgroundColorType="brand-primary">
    <Primary />
  </Surface>
)

const LogoWithText = ({ color }) => (
  <div style={{ color }}>
    <Heading element="h2" type="xl">
      <TextWithIcon icon={(props) => <Logo isTextMatched {...props} />}>
        Simon Andrews
      </TextWithIcon>
    </Heading>
    <Heading element="h2" type="lg">
      <TextWithIcon icon={(props) => <Logo isTextMatched {...props} />}>
        Simon Andrews
      </TextWithIcon>
    </Heading>
    <Heading element="h2" type="md">
      <TextWithIcon icon={(props) => <Logo isTextMatched {...props} />}>
        Simon Andrews
      </TextWithIcon>
    </Heading>
    <VerticalSpacing size="md" />
  </div>
)

export const TextMatched = () => (
  <>
    <Section verticalPadding="md">
      <LogoWithText color="var(--color-brand-primary)" />
      <LogoWithText color="var(--color-brand-secondary)" />
      <LogoWithText color="var(--color-base-blue)" />
      <LogoWithText color="var(--color-base-green)" />
      <a href="#top">
        <LogoWithText color="inherit" />
      </a>
    </Section>
    <Surface backgroundColorType="brand-primary">
      <Section verticalPadding="md">
        <LogoWithText color="var(--color-base-white)" />
        <a href="#top">
          <LogoWithText color="inherit" />
        </a>
      </Section>
    </Surface>
  </>
)
