import React from "react"
import classnames from "class-names"

import { wrapper, lead } from "./Paragraph.module.css"

export default function Paragraph({ children, isLead }) {
  return (
    <p
      className={classnames(wrapper, {
        [lead]: isLead,
      })}
    >
      {children}
    </p>
  )
}
