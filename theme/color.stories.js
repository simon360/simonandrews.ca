import React from "react"

import Heading from "../components/Heading"
import Paragraph from "../components/Paragraph"
import Section from "../components/Section"
import Surface from "../components/Surface"
import VerticalSpacing from "../components/VerticalSpacing"

export default {
  title: "Theme|Color",
}

const ColorGroup = ({ children }) => (
  <div
    style={{
      border: "4px solid white",
      borderRadius: "var(--space-sm)",
      boxShadow: "0px 10px 20px var(--color-neutral-lightest)",
      display: "inline-flex",
      margin: "0 var(--space-md) var(--soace-md) 0",
      overflow: "hidden",
      width: "auto",
    }}
  >
    {children}
  </div>
)

const IndividualColor = ({ value }) => (
  <div
    style={{
      backgroundColor: value,
      height: "var(--space-xxxl)",
      width: "var(--space-xxxl)",
    }}
  />
)

export const Color = () => (
  <>
    <Surface backgroundColorType="brand-primary">
      <Section verticalPadding="xxxl">
        <Heading element="h1" type="xl">
          Color
        </Heading>
        <VerticalSpacing size="md" />

        <Paragraph>
          The colors in the system. Colors were derived using{" "}
          <a href="https://paletton.com/" target="_blank">
            Paletton
          </a>
          , before manual tweaking.
        </Paragraph>
      </Section>
    </Surface>

    <Section verticalPadding="md">
      <Heading element="h2" type="sm">
        Purple (primary)
      </Heading>
      <VerticalSpacing size="sm" />
      <ColorGroup>
        <IndividualColor value="var(--color-base-primary-lightest)" />
        <IndividualColor value="var(--color-base-primary-lighter)" />
        <IndividualColor value="var(--color-base-primary)" />
        <IndividualColor value="var(--color-base-primary-darker)" />
        <IndividualColor value="var(--color-base-primary-darkest)" />
      </ColorGroup>
      <VerticalSpacing size="md" />

      <Heading element="h2" type="sm">
        Gold (secondary)
      </Heading>
      <VerticalSpacing size="sm" />
      <ColorGroup>
        <IndividualColor value="var(--color-base-secondary-lightest)" />
        <IndividualColor value="var(--color-base-secondary-lighter)" />
        <IndividualColor value="var(--color-base-secondary)" />
        <IndividualColor value="var(--color-base-secondary-darker)" />
        <IndividualColor value="var(--color-base-secondary-darkest)" />
      </ColorGroup>
      <VerticalSpacing size="md" />

      <Heading element="h2" type="sm">
        Green (alt)
      </Heading>
      <VerticalSpacing size="sm" />
      <ColorGroup>
        <IndividualColor value="var(--color-base-green-lightest)" />
        <IndividualColor value="var(--color-base-green-lighter)" />
        <IndividualColor value="var(--color-base-green)" />
        <IndividualColor value="var(--color-base-green-darker)" />
        <IndividualColor value="var(--color-base-green-darkest)" />
      </ColorGroup>
      <VerticalSpacing size="md" />

      <Heading element="h2" type="sm">
        Blue (alt)
      </Heading>
      <VerticalSpacing size="sm" />
      <ColorGroup>
        <IndividualColor value="var(--color-base-blue-lightest)" />
        <IndividualColor value="var(--color-base-blue-lighter)" />
        <IndividualColor value="var(--color-base-blue)" />
        <IndividualColor value="var(--color-base-blue-darker)" />
        <IndividualColor value="var(--color-base-blue-darkest)" />
      </ColorGroup>
      <VerticalSpacing size="md" />

      <Heading element="h2" type="sm">
        Neutrals
      </Heading>
      <VerticalSpacing size="sm" />
      <ColorGroup>
        <IndividualColor value="var(--color-neutral-lightest)" />
        <IndividualColor value="var(--color-neutral-lighter)" />
        <IndividualColor value="var(--color-neutral)" />
        <IndividualColor value="var(--color-neutral-darker)" />
        <IndividualColor value="var(--color-neutral-darkest)" />
      </ColorGroup>
    </Section>
  </>
)
