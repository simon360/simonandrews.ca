import React from "react"

import Paragraph from "../Paragraph"

import Footer from "."

export default {
  title: "Components|Footer",
}

const contactInfo = (
  <Paragraph>
    You can get in touch with me at{" "}
    <a href="mailto:hello@sadl.io">hello@sadl.io</a>, or via my social media
    profiles. I am not currently looking for new work.
  </Paragraph>
)

const siteLinks = [
  {
    title: "CV",
    url: "/",
  },
  {
    title: "Blog",
    url: "/blog",
  },
]

const socialLinks = [
  {
    title: "simon360 on GitHub",
    type: "github",
    url: "https://www.github.com/simon360",
  },
  {
    title: "simon360 on Instagram",
    type: "instagram",
    url: "https://www.instagram.com/simon360",
  },
  {
    title: "sadl-uk on LinkedIn",
    type: "linkedin",
    url: "https://www.linkedin.com/in/sadl-uk/",
  },
  {
    title: "@simon360 on Twitter",
    type: "twitter",
    url: "https://www.twitter.com/simon360",
  },
]

export const Full = () => (
  <Footer
    contactInfo={contactInfo}
    siteLinks={siteLinks}
    socialLinks={socialLinks}
  />
)

export const NoContactInfo = () => (
  <Footer siteLinks={siteLinks} socialLinks={socialLinks} />
)

export const NoLinks = () => <Footer contactInfo={contactInfo} />

export const NoSiteLinks = () => (
  <Footer contactInfo={contactInfo} socialLinks={socialLinks} />
)

export const NoSubFooter = () => <Footer />
