import PropTypes from "prop-types"
import React from "react"

import { section } from "./Section.module.css"

const Section = ({ children, verticalPadding = null }) => (
  <div
    className={section}
    style={{
      paddingBottom:
        (verticalPadding && `var(--space-${verticalPadding})`) || "0rem",
      paddingTop:
        (verticalPadding && `var(--space-${verticalPadding})`) || "0rem",
    }}
  >
    {children}
  </div>
)

Section.propTypes = {
  /**
   * Children to show
   */
  children: PropTypes.node,

  /**
   * The amount of padding to add at the top and bottom.
   */
  verticalPadding: PropTypes.oneOf([
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
    "xxl",
    "xxxl",
    "mega",
  ]),
}

export default Section
