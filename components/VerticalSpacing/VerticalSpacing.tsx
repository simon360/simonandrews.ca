import classnames from 'class-names'

import styles from './VerticalSpacing.module.css'

type SpacingSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' | 'mega'

interface Props {
  size: SpacingSize
}

export default function VerticalSpacing({ size }: Props) {
  return (
    <div
      className={classnames({
        [styles.xs]: size === 'xs',
        [styles.sm]: size === 'sm',
        [styles.md]: size === 'md',
        [styles.lg]: size === 'lg',
        [styles.xl]: size === 'xl',
        [styles.xxl]: size === 'xxl',
        [styles.xxxl]: size === 'xxxl',
        [styles.mega]: size === 'mega',
      })}
    />
  )
}
