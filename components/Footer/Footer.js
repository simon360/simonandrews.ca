import PropTypes from "prop-types"
import React from "react"
import { ArrowUp } from "react-feather"

import Section from "@/components/Section"
import Surface from "@/components/Surface"
import TextWithIcon from "@/components/TextWithIcon"

import SubFooter from "./components/SubFooter"
import { wrapper } from "./Footer.module.css"

/**
 * The site footer. Offers functionality that may be useful for users that have
 * reached the bottom of the page. Attempt to catch them if they're lost, and
 * direct them to other relevant content.
 */
export default function Footer({
  contactInfo,
  siteLinks = [],
  socialLinks = [],
}) {
  const showSubFooter =
    contactInfo ||
    (siteLinks && siteLinks.length > 0) ||
    (socialLinks && socialLinks.length > 0)

  return (
    <footer>
      {showSubFooter && (
        <SubFooter
          contactInfo={contactInfo}
          siteLinks={siteLinks}
          socialLinks={socialLinks}
        />
      )}

      <Surface backgroundColorType="brand-primary">
        <Section verticalPadding="lg">
          <div className={wrapper}>
            <span>© {new Date().getFullYear()}</span>
            <a href="#top">
              <TextWithIcon iconAlignment="end" icon={ArrowUp}>
                Top of page
              </TextWithIcon>
            </a>
          </div>
        </Section>
      </Surface>
    </footer>
  )
}

Footer.propTypes = {
  /**
   * A brief blurb detailing how best to get in touch.
   */
  contactInfo: PropTypes.node,

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
   * A list of social links
   */
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * The title. Text shown within the link. Good place to add extra detail, like a username.
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
