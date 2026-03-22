import classnames from 'class-names'
import type { ElementType, ReactNode } from 'react'

import styles from './Centered.module.css'

interface Props {
  className?: string
  component?: ElementType
  children?: ReactNode
  [key: string]: unknown
}

export default function Centered({
  className,
  component: Component = 'div',
  children,
  ...props
}: Props) {
  return (
    <Component className={classnames(styles.wrapper, className)} {...props}>
      {children}
    </Component>
  )
}
