import classnames from 'class-names'
import type { FC, ReactNode, SVGProps } from 'react'

import styles from './TextWithIcon.module.css'

type IconAlignment = 'start' | 'end'

interface Props {
  children?: ReactNode
  icon: FC<SVGProps<SVGSVGElement>>
  iconAlignment?: IconAlignment
}

export default function TextWithIcon({
  children,
  icon: IconComponent,
  iconAlignment = 'start',
}: Props) {
  return (
    <>
      {iconAlignment === 'start' && <IconComponent className={styles.icon} />}
      {children}
      {iconAlignment === 'end' && (
        <IconComponent className={classnames(styles.icon, styles.iconAlignedEnd)} />
      )}
    </>
  )
}
