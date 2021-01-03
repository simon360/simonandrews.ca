import PropTypes from "prop-types"
import React from "react"

import classnames from "class-names"

import {
  brandPrimary,
  brandSecondary,
  light,
  muted,
  sticky,
} from "./Surface.module.css"

const darkColors = ["brand-primary"]

const Surface = ({
  backgroundColorType,
  foregroundColorType,
  isSticky = false,
  children,
}) => (
  <div
    className={classnames({
      [brandPrimary]: backgroundColorType === "brand-primary",
      [brandSecondary]: backgroundColorType === "brand-secondary",
      [light]: backgroundColorType === "light",
      [muted]: backgroundColorType === "muted",
      DarkSurface:
        foregroundColorType === "light" ||
        darkColors.includes(backgroundColorType),

      [sticky]: isSticky,
    })}
  >
    {children}
  </div>
)

Surface.propTypes = {
  /**
   * The type of color to use as a background.
   */
  backgroundColorType: PropTypes.oneOf([
    "light",
    "brand-primary",
    "brand-secondary",
    "muted",
  ]),

  /**
   * The foreground color, if overriding the default for the background color
   */
  foregroundColorType: PropTypes.oneOf(["light", "dark"]),

  /**
   * Children to render.
   */
  children: PropTypes.node,
}

export default Surface
