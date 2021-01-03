import React from "react"

import Section from "../Section"

import Skills, { Skill } from "."

export default {
  title: "Components|Skills",
}

export const Primary = () => (
  <Section>
    <Skills>
      <Skill isFocus>Foolishness</Skill>
      <Skill>Silliness</Skill>
      <Skill>Absurdity</Skill>
      <Skill>Childishness</Skill>
      <Skill>Tomfoolery</Skill>
      <Skill isFocus>Nothing</Skill>
      <Skill>Zilch</Skill>
      <Skill>Nada</Skill>
      <Skill isFocus>Stuff</Skill>
      <Skill>Things</Skill>
      <Skill isFocus>Wild movements</Skill>
      <Skill>Arm flailing</Skill>
      <Skill>Spontaneous, unexpected kicking motions</Skill>
      <Skill isFocus>React</Skill>
      <Skill>Exploding</Skill>
      <Skill>Mixing</Skill>
      <Skill isFocus>Sports</Skill>
      <Skill>Watching hockey</Skill>
      <Skill>Watching baseball</Skill>
      <Skill>Never playing them</Skill>
    </Skills>
  </Section>
)
