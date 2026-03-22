import type { ReactNode } from "react"

import styles from "./Associations.module.css"

interface Props {
  children?: ReactNode
}

export default function Associations({ children }: Props) {
  return <ul className={styles.wrapper}>{children}</ul>
}
