import classnames from "class-names"
import PropTypes from "prop-types"
import React from "react"

import { wrapper, centered, sm, md, lg, xl } from "./Heading.module.css"

const Heading = ({ children, isCentered, element = "h2", type = "lg" }) => {
  const Element = element

  return (
    <Element
      className={classnames(wrapper, {
        [sm]: type === "sm",
        [md]: type === "md",
        [lg]: type === "lg",
        [xl]: type === "xl",

        [centered]: isCentered,
      })}
    >
      {children}
    </Element>
  )
}

Heading.propTypes = {
  /**
   * Children to render
   */
  children: PropTypes.node,

  /**
   * The base HTML element type to use
   */
  element: PropTypes.oneOf(["h1", "h2", "h3", "h4", "span"]),

  /**
   * Center the text?
   */
  isCentered: PropTypes.bool,

  /**
   * The style to apply
   */
  type: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
}

export default Heading
