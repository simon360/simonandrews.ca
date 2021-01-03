import React from "react"
import classnames from "class-names"

import { icon, iconAlignedEnd } from "./TextWithIcon.module.css"

export default function TextWithIcon({
  children,
  icon: IconComponent,
  iconAlignment = "start",
}) {
  return (
    <>
      {iconAlignment === "start" && <IconComponent className={icon} />}
      {children}
      {iconAlignment === "end" && (
        <IconComponent className={classnames(icon, iconAlignedEnd)} />
      )}
    </>
  )
}
