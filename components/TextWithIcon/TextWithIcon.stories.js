import React from "react"
import { Aperture, ArrowUp, Command } from "react-feather"

import Heading from "../Heading"

import TextWithIcon from "."

export default {
  title: "Components|TextWithIcon",
}

export const primary = () => (
  <TextWithIcon icon={Aperture}>Make it blurry</TextWithIcon>
)

export const rightAligned = () => (
  <TextWithIcon icon={ArrowUp} iconAlignment="end">
    To the top!
  </TextWithIcon>
)

export const inAHeading = () => (
  <Heading element="h1" type="xl">
    <TextWithIcon icon={Command}>Take command</TextWithIcon>
  </Heading>
)
