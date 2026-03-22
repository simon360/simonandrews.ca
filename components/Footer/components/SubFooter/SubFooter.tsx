import type { FC, ReactNode, SVGProps } from "react"
import { GitHub, Instagram, Linkedin, Twitter, User } from "react-feather"

import Heading from "@/components/Heading"
import Link from "@/components/Link"
import Section from "@/components/Section"
import Surface from "@/components/Surface"
import TextWithIcon from "@/components/TextWithIcon"
import VerticalSpacing from "@/components/VerticalSpacing"
import type { SiteLink, SocialLink, SocialLinkType } from "@/data/site"

import styles from "./SubFooter.module.css"

function getIconForType(type: SocialLinkType): FC<SVGProps<SVGSVGElement>> {
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

interface Props {
  contactInfo?: ReactNode
  siteLinks: SiteLink[]
  socialLinks: SocialLink[]
}

export default function SubFooter({
  contactInfo,
  siteLinks,
  socialLinks,
}: Props) {
  return (
    <Surface backgroundColorType="muted">
      <Section>
        <div className={styles.nav}>
          {siteLinks.length > 0 && (
            <div className={styles.linkColumn}>
              <Heading element="h2" type="md">
                Around the Site
              </Heading>
              <VerticalSpacing size="md" />

              <ul className={styles.links}>
                {siteLinks.map(({ title, url }) => (
                  <li className={styles.link} key={url}>
                    <Link href={url}>{title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {socialLinks.length > 0 && (
            <div className={styles.linkColumn}>
              <Heading element="h2" type="md">
                Social
              </Heading>
              <VerticalSpacing size="md" />

              <ul className={styles.links}>
                {socialLinks.map(({ title, type, url }) => (
                  <li className={styles.link} key={url}>
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
            <div className={styles.blurbColumn}>
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
