import React from "react"

import Heading from "."

export default {
  title: "Components|Heading",
}

export const ExtraLarge = ({ isCentered } = { isCentered: false }) => (
  <Heading element="h1" isCentered={isCentered} type="xl">
    Now this is the story all about how
  </Heading>
)

export const Large = ({ isCentered } = { isCentered: false }) => (
  <Heading element="h2" isCentered={isCentered} type="lg">
    My life got flipped, turned upsiede down
  </Heading>
)

export const Medium = ({ isCentered } = { isCentered: false }) => (
  <Heading element="h3" isCentered={isCentered} type="md">
    And I'd like to take a minute, just sit right there
  </Heading>
)

export const Small = ({ isCentered } = { isCentered: false }) => (
  <Heading element="h4" isCentered={isCentered} type="sm">
    I'll tell you how I became the prince of a town called Bel-Air
  </Heading>
)

export const All = ({ isCentered } = { isCentered: false }) => (
  <>
    <ExtraLarge isCentered={isCentered} />
    <Large isCentered={isCentered} />
    <Medium isCentered={isCentered} />
    <Small isCentered={isCentered} />
  </>
)

export const AllCentered = () => <All isCentered />
