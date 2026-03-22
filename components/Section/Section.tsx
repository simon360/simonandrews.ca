import type { ReactNode } from "react"

import styles from "./Section.module.css"

type SpacingSize = "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl" | "mega"

interface Props {
  children?: ReactNode
  verticalPadding?: SpacingSize | null
}

const Section = ({ children, verticalPadding = null }: Props) => (
  <div
    className={styles.section}
    style={{
      paddingBottom:
        (verticalPadding && `var(--space-${verticalPadding})`) || "0rem",
      paddingTop:
        (verticalPadding && `var(--space-${verticalPadding})`) || "0rem",
    }}
  >
    {children}
  </div>
)

export default Section
