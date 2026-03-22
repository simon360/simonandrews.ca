import classnames from "class-names"
import type { ReactNode } from "react"

import Surface from "../Surface"

import styles from "./Hero.module.css"

type HeroAlign = "bottom" | "middle"

interface Props {
  align?: HeroAlign
  background?: ReactNode
  children?: ReactNode
  fluid?: boolean
  isLightBackground?: boolean
}

export default function Hero({
  align,
  background,
  children,
  isLightBackground,
}: Props) {
  return (
    <Surface {...(isLightBackground ? {} : { foregroundColorType: "light" })}>
      <div
        className={classnames(styles.wrapper, {
          [styles.alignBottom]: align === "bottom",
          [styles.alignMiddle]: align === "middle",
        })}
      >
        <div className={styles.imageWrapper}>{background}</div>

        <div className={styles.contentWrapper}>{children}</div>
      </div>
    </Surface>
  )
}
