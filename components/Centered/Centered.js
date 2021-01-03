import React from "react"
import classnames from "class-names"

import { wrapper } from "./Centered.module.css"

export default function Centered({
  className = undefined,
  component: Component = "div",
  children,
  ...props
}) {
  return (
    <Component className={classnames(wrapper, props.className)}>
      {children}
    </Component>
  )
}
