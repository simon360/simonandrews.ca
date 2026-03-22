import classnames from 'class-names'
import type { ReactNode } from 'react'

import styles from './Paragraph.module.css'

interface Props {
  children?: ReactNode
  isLead?: boolean
}

export default function Paragraph({ children, isLead }: Props) {
  return (
    <p
      className={classnames(styles.wrapper, {
        [styles.lead]: isLead,
      })}
    >
      {children}
    </p>
  )
}
