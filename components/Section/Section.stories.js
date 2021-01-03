import React from "react"

import Heading from "../Heading"
import Paragraph from "../Paragraph"
import VerticalSpacing from "../VerticalSpacing"

import Section from "."

export default {
  title: "Components|Section",
}

const Line = () => (
  <div style={{ borderBottom: "1px solid var(--color-brand-primary)" }} />
)

export const Primary = ({ verticalPadding = null }) => (
  <>
    <Line />
    <Section verticalPadding={verticalPadding}>
      <Heading element="h1" type="xl">
        Hello, world
      </Heading>
      <VerticalSpacing size="md" />
      <Paragraph>This is what a section looks like</Paragraph>
    </Section>
    <Line />
  </>
)

export const ExtraSmallPadding = () => <Primary verticalPadding="xs" />
export const SmallPadding = () => <Primary verticalPadding="sm" />
export const MediumPadding = () => <Primary verticalPadding="md" />
export const LargePadding = () => <Primary verticalPadding="lg" />
export const XLargePadding = () => <Primary verticalPadding="xl" />
export const XXLargePadding = () => <Primary verticalPadding="xxl" />
export const XXXLargePadding = () => <Primary verticalPadding="xxxl" />
export const MegaPadding = () => <Primary verticalPadding="mega" />
