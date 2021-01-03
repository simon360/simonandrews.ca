import React from "react"

import Section from "../Section"

import Associations, { Association } from "."

export default {
  title: "Components|Associations",
}

export const Single = ({ isFocus } = { isFocus: false }) => (
  <Association
    isFocus={isFocus}
    brandColor="#592695"
    company="Simon Andrews Development Limited"
    href="https://sadl.io"
    positions={[
      {
        title: "Chief Executive Oeufficer",
        time: "January 2019-June 2019",
      },
      {
        title: "Senior VP of Eggs",
        time: "October 2017-December 2018",
      },
      {
        title: "Junior VP of Eggs, Atlantic Division",
        time: "January 2017-September 2017",
      },
      {
        title: "Junior Fry Cook",
        time: "Summers 2014, 2015, 2016",
      },
    ]}
    logo={{
      type: "component",

      component: require("../../images/logo-sadl.svg"),
    }}
  />
)

export const SingleWithRasterLogo = ({ isFocus } = { isFocus: false }) => (
  <Association
    isFocus={isFocus}
    brandColor="#ff8000"
    company="A Space Company"
    positions={[
      {
        title: "Astronot",
        time: "Since I got back",
      },
      {
        title: "Astronaut",
        time: "January 2019-June 2019",
      },
      {
        title: "Astronut",
        time: "Summers 2014, 2015, 2016",
      },
    ]}
    logo={{
      type: "img",

      imgAttributes: {
        alt: "Logo for A Space Company",
        src: require("../../images/gatsby-astronaut.png"),
      },
    }}
  />
)

export const Grid = () => (
  <Section>
    <Associations>
      <Single isFocus />
      <SingleWithRasterLogo />
      <Single />
      <SingleWithRasterLogo isFocus />
    </Associations>
  </Section>
)
