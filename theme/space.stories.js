import React from "react"

import Heading from "../components/Heading"
import Paragraph from "../components/Paragraph"
import Section from "../components/Section"
import Surface from "../components/Surface"
import VerticalSpacing from "../components/VerticalSpacing"

export default {
  title: "Theme|Space",
}

const Size = ({ value, isHorizontal = false }) => (
  <>
    <div
      style={{
        backgroundColor: "var(--color-brand-primary)",
        color: "white",
        padding: "var(--space-xs)",
        ...(isHorizontal
          ? {
              width: "var(--space-lg)",
            }
          : {}),
      }}
    >
      {isHorizontal && (
        <div
          style={{
            transform: "rotate(90deg)",
          }}
        >
          <Paragraph>{value}</Paragraph>
        </div>
      )}
      {!isHorizontal && <Paragraph>{value}</Paragraph>}
    </div>
    <div
      style={{
        backgroundColor: "var(--color-brand-primary-lightest)",
        flexShrink: "0",
        [isHorizontal ? "width" : "height"]: `var(--space-${value})`,
      }}
    />
  </>
)

const VerticalSizeWrapper = ({ children }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      maxWidth: "calc(50vw - 1.5rem)",
      minHeight: "20rem",
      overflowX: "auto",
    }}
  >
    {children}
  </div>
)

export const Space = () => (
  <>
    <Surface backgroundColorType="brand-primary">
      <Section verticalPadding="xxxl">
        <Heading element="h1" type="xl">
          Space
        </Heading>
        <VerticalSpacing size="md" />

        <Paragraph>
          Spacing primitives. The basis for most empty space in the system. Used
          to create vertical and horizontal rhythm, avoiding highly-bespoke
          space that compounds throughout a site.
        </Paragraph>

        <Paragraph>
          In the rare circumstances where the spacing primitives do not suffice,
          use whole-number rem values.
        </Paragraph>

        <Paragraph>
          This spacing system is loosely based on{" "}
          <a
            href="https://medium.com/eightshapes-llc/space-in-design-systems-188bcbae0d62"
            target="_blank"
          >
            Space in Design Systems
          </a>
          , with various adaptations from my own experiences using space.
        </Paragraph>
      </Section>
    </Surface>

    <Section verticalPadding="md">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridColumnGap: "var(--space-md)",
        }}
      >
        <div>
          <Heading element="h2" type="lg">
            Vertical
          </Heading>
          <VerticalSpacing size="md" />

          <Size value="xs" />
          <Size value="sm" />
          <Size value="md" />
          <Size value="lg" />
          <Size value="xl" />
          <Size value="xxl" />
          <Size value="xxxl" />
          <Size value="mega" />
          <VerticalSpacing size="lg" />
        </div>

        <div>
          <Heading element="h2" type="lg">
            Inline
          </Heading>
          <VerticalSpacing size="md" />

          <VerticalSizeWrapper>
            <Size isHorizontal value="xs" />
            <Size isHorizontal value="sm" />
            <Size isHorizontal value="md" />
            <Size isHorizontal value="lg" />
            <Size isHorizontal value="xl" />
            <Size isHorizontal value="xxl" />
            <Size isHorizontal value="xxxl" />
            <Size isHorizontal value="mega" />
          </VerticalSizeWrapper>
        </div>
      </div>
    </Section>
  </>
)
