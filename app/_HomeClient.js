"use client"

import HomeLayout from "@/layouts/HomeLayout"
import HomeContent from "../content/home.mdx"
import Section from "@/components/Section"
import VerticalSpacing from "@/components/VerticalSpacing"
import Paragraph from "@/components/Paragraph"

const heroContent = (
  <Section>
    <VerticalSpacing size="md" />
    <Paragraph isLead>
      I’m an engineering manager, and a software developer, with a focus on the
      Web.
    </Paragraph>
    <Paragraph>
      I grew up in St. Johnʼs, Newfoundland & Labrador, a small city on the east
      coast of Canada. After finishing high school, I moved west to Calgary,
      Alberta, where I attended university. I briefly lived and worked in
      Edmonton, Alberta, before I moved to London, UK, where I remain.
    </Paragraph>
    <Paragraph>
      I’m passionate about good software, and the people who make it. I’m
      grateful that I get to work on one of my hobbies as a career - Iʼve been
      making websites for as long as I can remember. I enjoy sharing knowledge,
      almost as much as I enjoy gaining it. Curiosity is a driving value for me,
      and I think itʼs at the core of good building good software. I think itʼs
      important to empower developers, with patience and empathy, to make a
      product that scales, that can be iterated on efficiently, and that can
      improve the lives of all its users.
    </Paragraph>
    <Paragraph>
      Iʼm a person with low vision, and accessibility is at the core of
      everything I build. The Web is uniquely placed to empower those who face
      difficulties in their day to day life, and I believe that - when well
      considered - it can be a great, egalitarian force for good.
    </Paragraph>
    <VerticalSpacing size="xxl" />
  </Section>
)

export default function HomeClient() {
  return <HomeLayout heroContent={heroContent}><HomeContent /></HomeLayout>
}
