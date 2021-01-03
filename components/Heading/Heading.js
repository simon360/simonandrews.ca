import classnames from "class-names"
import PropTypes from "prop-types"
import React from "react"

import { wrapper, centered, sm, md, lg, xl } from "./Heading.module.css"

const Heading = ({
  children,
  isCentered,
  element = "h2",
  spaceAfter = "lg",
  type = "lg",
}) => {
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
      style={spaceAfter ? { marginBottom: `var(--space-${spaceAfter})` } : {}}
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
   * Space after the heading
   */
  spaceAfter: PropTypes.oneOf([
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
    "xxl",
    "xxxl",
    "mega",
  ]),

  /**
   * The style to apply
   */
  type: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
}

const headingLevels = {
  H1: (props) => <Heading element="h1" type="xl" {...props} />,
  H2: (props) => <Heading element="h2" type="lg" {...props} />,
  H3: (props) => <Heading element="h3" type="md" {...props} />,
  H4: (props) => <Heading element="h4" type="sm" {...props} />,
}

Heading.Centered = {}
Object.entries(headingLevels).forEach(([key, Component]) => {
  Heading[key] = Component
  Heading.Centered[key] = (props) => <Component isCentered {...props} />
})

export default Heading
