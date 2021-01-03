import React from "react"

import Heading from "../Heading"
import Section from "../Section"

import clouds from "../../images/hero-clouds.jpg"
import london from "../../images/hero-london-2.jpg"
import snow from "../../images/hero-snow.jpg"

import Hero from "."
import VerticalSpacing from "../VerticalSpacing"
import Paragraph from "../Paragraph"

export default {
  title: "Components|Hero",
}

export const Primary = ({ align = "top" }) => (
  <Hero
    align={align}
    background={
      <img
        alt=""
        src={london}
        style={{
          height: "100%",
          objectFit: "cover",
          width: "100%",
        }}
      />
    }
  >
    <Section verticalPadding="lg">
      <Heading element="h1" type="xl">
        Find your next adventure
      </Heading>
      <VerticalSpacing size="md" />

      <Paragraph>Then, go wherever it takes you.</Paragraph>
    </Section>
  </Hero>
)

export const MiddleAligned = () => <Primary align="middle" />

export const BottomAligned = () => <Primary align="bottom" />

export const LightBackground = () => (
  <Hero
    background={
      <img
        alt=""
        src={clouds}
        style={{
          height: "100%",
          objectFit: "cover",
          objectPosition: "center bottom",
          width: "100%",
        }}
      />
    }
    isLightBackground
  >
    <Section verticalPadding="lg">
      <div style={{ textAlign: "right" }}>
        <Heading element="h1" type="xl">
          {/* Note the nbsp, to prevent "clouds" from being orphaned  */}
          Reach for the&nbsp;clouds
        </Heading>
        <VerticalSpacing size="md" />

        <Paragraph>...and then, move back on prem</Paragraph>
      </div>
    </Section>
  </Hero>
)

export const LongContent = () => (
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
    <Section verticalPadding="lg">
      <article style={{ maxWidth: "24rem", textAlign: "left" }}>
        <header>
          <Heading element="h2" type="lg">
            Stopping by Woods on a Snowy Evening
          </Heading>
          <VerticalSpacing size="xs" />
          <small>By Robert Frost</small>
        </header>
        <VerticalSpacing size="md" />

        <Paragraph>
          Whose woods these are I think I know. <br />
          His house is in the village though; <br />
          He will not see me stopping here <br />
          To watch his woods fill up with snow.{" "}
        </Paragraph>

        <Paragraph>
          My little horse must think it queer <br />
          To stop without a farmhouse near <br />
          Between the woods and frozen lake <br />
          The darkest evening of the year.{" "}
        </Paragraph>

        <Paragraph>
          He gives his harness bells a shake <br />
          To ask if there is some mistake. <br />
          The only other sound’s the sweep <br />
          Of easy wind and downy flake.{" "}
        </Paragraph>

        <Paragraph>
          The woods are lovely, dark and deep, <br />
          But I have promises to keep, <br />
          And miles to go before I sleep, <br />
          And miles to go before I sleep.
        </Paragraph>
      </article>
    </Section>
  </Hero>
)
