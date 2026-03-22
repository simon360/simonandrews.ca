import type { ReactNode } from 'react'

import styles from './Skills.module.css'

interface Props {
  children?: ReactNode
}

export default function Skills({ children }: Props) {
  return <div className={styles.wrapper}>{children}</div>
}
