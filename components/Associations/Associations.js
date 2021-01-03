import React from "react"

import { wrapper } from "./Associations.module.css"

export default function Associations({ children }) {
  return <ul className={wrapper}>{children}</ul>
}
