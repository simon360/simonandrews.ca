import type { FC, SVGProps } from "react"
import { Linkedin, GitHub, Instagram, Twitter, User } from "react-feather"

import Link from "@/components/Link"
import Logo from "@/components/Logo"
import Section from "@/components/Section"
import type { SiteLink, SocialLink, SocialLinkType } from "@/data/site"

import styles from "./Header.module.css"

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
  siteLinks?: SiteLink[]
  siteTitle?: string
  socialLinks: SocialLink[]
}

export default function Header({
  siteLinks,
  siteTitle = ``,
  socialLinks,
}: Props) {
  return (
    <header>
      <Section verticalPadding="md">
        <div className={styles.wrapper}>
          <Link className={styles.title} href="/">
            <Logo isTextMatched className={styles.titleLogo} />
            {siteTitle}
          </Link>

          <nav>
            {siteLinks && siteLinks.length > 0 && (
              <ul className={styles.navList}>
                {siteLinks.map(({ title, url }) => (
                  <li key={url} className={styles.navLink}>
                    <Link href={url}>{title}</Link>
                  </li>
                ))}
              </ul>
            )}

            {socialLinks.length > 0 && (
              <ul className={styles.navList}>
                {socialLinks.map(({ title, type, url }) => (
                  <li className={styles.navLink} key={url}>
                    <a href={url} rel="noopener noreferrer" title={title}>
                      {(function () {
                        const Icon = getIconForType(type)
                        return <Icon className={styles.navIcon} />
                      })()}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </nav>
        </div>
      </Section>
    </header>
  )
}
