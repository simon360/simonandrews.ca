import classnames from 'class-names'
import type { ReactNode } from 'react'

import styles from './Surface.module.css'

type BackgroundColorType = 'light' | 'brand-primary' | 'brand-secondary' | 'muted'
type ForegroundColorType = 'light' | 'dark'

interface Props {
  backgroundColorType?: BackgroundColorType
  foregroundColorType?: ForegroundColorType
  isSticky?: boolean
  children?: ReactNode
}

const darkColors: BackgroundColorType[] = ['brand-primary']

const Surface = ({
  backgroundColorType,
  foregroundColorType,
  isSticky = false,
  children,
}: Props) => (
  <div
    className={classnames({
      [styles.brandPrimary]: backgroundColorType === 'brand-primary',
      [styles.brandSecondary]: backgroundColorType === 'brand-secondary',
      [styles.light]: backgroundColorType === 'light',
      [styles.muted]: backgroundColorType === 'muted',
      DarkSurface:
        foregroundColorType === 'light' ||
        (backgroundColorType !== undefined && darkColors.includes(backgroundColorType)),
      [styles.sticky]: isSticky,
    })}
  >
    {children}
  </div>
)

export default Surface
