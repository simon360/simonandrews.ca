import React from "react"

import Heading from "../components/Heading"
import Paragraph from "../components/Paragraph"
import Section from "../components/Section"
import Surface from "../components/Surface"
import VerticalSpacing from "../components/VerticalSpacing"

export default {
  title: "Theme|Typography",
}

const TextSizes = () => (
  <Section verticalPadding="md">
    <p style={{ fontSize: "var(--font-size-base-down-2" }}>
      Down 2: The quick brown fox jumps over the lazy dog
    </p>
    <p style={{ fontSize: "var(--font-size-base-down-1" }}>
      Down 1: The quick brown fox jumps over the lazy dog
    </p>
    <p style={{ fontSize: "var(--font-size-base" }}>
      Base: The quick brown fox jumps over the lazy dog
    </p>
    <p style={{ fontSize: "var(--font-size-base-up-1" }}>
      Up 1: The quick brown fox jumps over the lazy dog
    </p>
    <p style={{ fontSize: "var(--font-size-base-up-2" }}>
      Up 2: The quick brown fox jumps over the lazy dog
    </p>
    <p style={{ fontSize: "var(--font-size-base-up-3" }}>
      Up 3: The quick brown fox jumps over the lazy dog
    </p>
    <p style={{ fontSize: "var(--font-size-base-up-4" }}>
      Up 4: The quick brown fox jumps over the lazy dog
    </p>
  </Section>
)

export const Typography = () => (
  <>
    <Surface backgroundColorType="brand-primary">
      <Section verticalPadding="xxxl">
        <Heading element="h1" type="xl">
          Typography
        </Heading>

        <VerticalSpacing size="md" />

        <Paragraph>
          All of the base typography styles/tokens in the system. In general,
          the use of semantic components, like Heading and Paragraph components
          is preferred.
        </Paragraph>

        <Paragraph>
          Text is set in the{" "}
          <a href="https://rsms.me/inter/" target="_blank">
            Inter
          </a>{" "}
          font family.
        </Paragraph>
      </Section>
    </Surface>

    <div style={{ position: "relative" }}>
      <Surface backgroundColorType="muted" isSticky>
        <Section verticalPadding="lg">
          <Heading element="h2" type="md">
            Regular
          </Heading>
        </Section>
      </Surface>
      <TextSizes />
    </div>

    <Surface backgroundColorType="muted" isSticky>
      <Section verticalPadding="lg">
        <Heading element="h2" type="md">
          Bold
        </Heading>
      </Section>
    </Surface>
    <div style={{ fontWeight: "var(--font-weight-bold)" }}>
      <TextSizes />
    </div>

    <Surface backgroundColorType="muted" isSticky>
      <Section verticalPadding="lg">
        <Heading element="h2" type="md">
          Italic
        </Heading>
      </Section>
    </Surface>
    <div style={{ fontStyle: "italic" }}>
      <TextSizes />
    </div>

    <Surface backgroundColorType="muted" isSticky>
      <Section verticalPadding="lg">
        <Heading element="h2" type="md">
          Bold/Italic
        </Heading>
      </Section>
    </Surface>
    <div style={{ fontStyle: "italic", fontWeight: "var(--font-weight-bold)" }}>
      <TextSizes />
    </div>
  </>
)
