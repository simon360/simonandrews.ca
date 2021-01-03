import classnames from "class-names"
import React from "react"

import Surface from "../Surface"

import {
  alignBottom,
  alignMiddle,
  wrapper,
  contentWrapper,
  imageWrapper,
} from "./Hero.module.css"

export default function Hero({
  align,
  background,
  children,
  fluid,
  isLightBackground,
}) {
  return (
    <Surface {...(isLightBackground ? {} : { foregroundColorType: "light" })}>
      <div
        className={classnames(wrapper, {
          [alignBottom]: align === "bottom",
          [alignMiddle]: align === "middle",
        })}
      >
        <div className={imageWrapper}>{background}</div>

        <div className={classnames(contentWrapper)}>{children}</div>
      </div>
    </Surface>
  )
}
