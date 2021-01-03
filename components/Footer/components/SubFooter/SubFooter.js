import Link from "next/link"
import React from "react"
import { GitHub, Instagram, Linkedin, Twitter, User } from "react-feather"

import Heading from "@/components/Heading"
import Section from "@/components/Section"
import Surface from "@/components/Surface"
import TextWithIcon from "@/components/TextWithIcon"
import VerticalSpacing from "@/components/VerticalSpacing"

import {
  blurbColumn,
  nav,
  link,
  linkColumn,
  links,
} from "./SubFooter.module.css"

/**
 * Given a social media network name as a string, returns an appropriate icon
 * as a `React.Component`.
 *
 * @param {string} type the social network being represented
 * @returns {React.Component} the icon that can be rendered
 */
function getIconForType(type) {
  switch (type) {
    case "github":
      return GitHub
    case "instagram":
      return Instagram
    case "linkedin":
      return Linkedin
    case "twitter":
      return Twitter
    default:
      return User
  }
}

/**
 * A SubFooter. Shows an expanded navigation around the site, or relevant
 * external links to other online presences.
 */
export default function SubFooter({ contactInfo, siteLinks, socialLinks }) {
  return (
    <Surface backgroundColorType="muted">
      <Section>
        <div className={nav}>
          {siteLinks.length > 0 && (
            <div className={linkColumn}>
              <Heading element="h2" type="md">
                Around the Site
              </Heading>
              <VerticalSpacing size="md" />

              <ul className={links}>
                {siteLinks.map(({ title, url }) => (
                  <li className={link} key={url}>
                    <Link href={url}><a>{title}</a></Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {socialLinks.length > 0 && (
            <div className={linkColumn}>
              <Heading element="h2" type="md">
                Social
              </Heading>
              <VerticalSpacing size="md" />

              <ul className={links}>
                {socialLinks.map(({ title, type, url }) => (
                  <li className={link} key={url}>
                    <a href={url} rel="noopener noreferrer">
                      <TextWithIcon icon={getIconForType(type)}>
                        {title}
                      </TextWithIcon>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {contactInfo && (
            <div className={blurbColumn}>
              <Heading element="h2" type="md">
                Contact
              </Heading>
              <VerticalSpacing size="md" />
              {contactInfo}
            </div>
          )}
        </div>
      </Section>
    </Surface>
  )
}
