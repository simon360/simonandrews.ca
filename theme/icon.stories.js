import React from "react"
import * as Icons from "react-feather"

import Heading from "../components/Heading"
import Paragraph from "../components/Paragraph"
import Section from "../components/Section"
import Surface from "../components/Surface"
import VerticalSpacing from "../components/VerticalSpacing"

export default {
  title: "Theme|Icon",
}

const IconGrid = ({ children }) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, 10rem)",
    }}
  >
    {children}
  </div>
)

const IconGridItem = ({ children, name }) => (
  <div
    style={{
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      padding: "var(--space-md)",
    }}
  >
    {children}
    <VerticalSpacing size="sm" />
    <span>{name}</span>
  </div>
)

export const Icon = () => (
  <>
    <Surface backgroundColorType="brand-primary">
      <Section verticalPadding="xxxl">
        <Heading element="h1" type="xl">
          Icon
        </Heading>
        <VerticalSpacing size="md" />

        <Paragraph>
          Icons available in the system. Icons come from{" "}
          <a href="https://feathericons.com/" target="_blank">
            Feather
          </a>
          , using{" "}
          <a
            href="https://github.com/feathericons/react-feather"
            target="_blank"
          >
            react-feather
          </a>
          .
        </Paragraph>
      </Section>
    </Surface>

    <Section verticalPadding="md">
      <IconGrid>
        {Object.entries(Icons).map(([name, Icon]) => (
          <IconGridItem key={name} name={name}>
            <Icon height="3rem" width="3rem" />
          </IconGridItem>
        ))}
      </IconGrid>
    </Section>
  </>
)
