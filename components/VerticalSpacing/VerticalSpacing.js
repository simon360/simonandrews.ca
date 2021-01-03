import React from "react"
import classnames from "class-names"

import {
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
  xxxl,
  mega,
} from "./VerticalSpacing.module.css"

export default function VerticalSpacing({ size }) {
  return (
    <div
      className={classnames({
        [xs]: size === "xs",
        [sm]: size === "sm",
        [md]: size === "md",
        [lg]: size === "lg",
        [xl]: size === "xl",
        [xxl]: size === "xxl",
        [xxxl]: size === "xxxl",
        [mega]: size === "mega",
      })}
    />
  )
}
