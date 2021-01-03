import React from "react"

import { wrapper } from "./Skills.module.css"

export default function Skills({ children }) {
  return <ul className={wrapper}>{children}</ul>
}
