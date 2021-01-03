import Link from "next/link"
import PropTypes from "prop-types"
import React from "react"
import { Linkedin, GitHub, Instagram, Twitter, User } from "react-feather"

import Logo from "../Logo"
import Section from "../Section"

import {
  title,
  titleLogo,
  navIcon,
  navLink,
  navList,
  wrapper,
} from "./Header.module.css"

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
 * The site header. The primary piece of brand on the site. Offers high-level,
 * simple navigation.
 *
 * Designed to be integrated into content (like a hero) when extra pizzazz is
 * required.
 */
export default function Header({ siteLinks, siteTitle = ``, socialLinks }) {
  return (
    <header>
      <Section verticalPadding="md">
        <div className={wrapper}>
          <Link href="/">
            <a className={title}>
              <Logo isTextMatched className={titleLogo} />
              {siteTitle}
            </a>
          </Link>

          <nav>
            {siteLinks && siteLinks.length > 0 && (
              <ul className={navList}>
                {siteLinks.map(({ title, url }) => (
                  <li key={url} className={navLink}>
                    <Link href={url}>
                      <a>{title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            )}

            {socialLinks.length > 0 && (
              <ul className={navList}>
                {socialLinks.map(({ title, type, url }) => (
                  <li className={navLink} key={url}>
                    <a href={url} rel="noopener noreferrer" title={title}>
                      {(function () {
                        const Icon = getIconForType(type)
                        return <Icon className={navIcon} />
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

Header.propTypes = {
  /**
   * A list of top-level site links
   */
  siteLinks: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * The title. Briefly describe the page the user would land on.
       */
      title: PropTypes.string.isRequired,

      /**
       * Where the link should point.
       */
      url: PropTypes.string.isRequired,
    })
  ),

  /**
   * The title of the site, shown in primary position
   */
  siteTitle: PropTypes.string,

  /**
   * A list of social links
   */
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * The title. Text shown in a tooltip on the link. Good place to add extra detail, like a username.
       */
      title: PropTypes.string.isRequired,

      /**
       * The type of link; normally the host of a social profile
       */
      type: PropTypes.oneOf([
        "github",
        "instagram",
        "linkedin",
        "twitter",
        "other",
      ]).isRequired,

      /**
       * Where the link should point
       */
      url: PropTypes.string.isRequired,
    })
  ),
}
