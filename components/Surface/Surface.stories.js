import React from "react"

import Heading from "../Heading"
import Paragraph from "../Paragraph"
import Section from "../Section"
import Surface from "../Surface"
import VerticalSpacing from "../VerticalSpacing"

export default {
  title: "Components|Surface",
}

const SurfaceInner = () => (
  <Section verticalPadding="mega">
    <Heading element="h1" type="xl">
      Surface
    </Heading>
    <VerticalSpacing size="md" />

    <Paragraph>
      The Surface component draws a background, and sets a light/dark context
      (using CSS Custom Properties) for text, borders, and other content that
      displays inside.
    </Paragraph>
  </Section>
)

export const Primary = () => (
  <Surface backgroundColorType="brand-primary">
    <SurfaceInner />
  </Surface>
)

export const Secondary = () => (
  <Surface backgroundColorType="brand-secondary">
    <SurfaceInner />
  </Surface>
)

export const Light = () => (
  <Surface backgroundColorType="light">
    <SurfaceInner />
  </Surface>
)

export const Muted = () => (
  <Surface backgroundColorType="muted">
    <SurfaceInner />
  </Surface>
)
