import classnames from 'class-names'
import type { ReactNode } from 'react'

import styles from './Heading.module.css'

type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'span'
type HeadingType = 'sm' | 'md' | 'lg' | 'xl'
type SpacingSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' | 'mega'

interface HeadingProps {
  children?: ReactNode
  isCentered?: boolean
  isMarginWhenAdjacent?: boolean
  id?: string | null
  element?: HeadingElement
  spaceAfter?: SpacingSize | null
  type?: HeadingType
}

const Heading = ({
  children,
  isCentered,
  isMarginWhenAdjacent,
  id = null,
  element = 'h2',
  spaceAfter = 'lg',
  type = 'lg',
}: HeadingProps) => {
  const Element = element

  return (
    <Element
      className={classnames(styles.wrapper, {
        [styles.sm]: type === 'sm',
        [styles.md]: type === 'md',
        [styles.lg]: type === 'lg',
        [styles.xl]: type === 'xl',

        [styles.centered]: isCentered,
        [styles.marginWhenAdjacent]: isMarginWhenAdjacent,
      })}
      id={id ?? undefined}
      style={spaceAfter ? { marginBottom: `var(--space-${spaceAfter})` } : {}}
    >
      {children}
    </Element>
  )
}

const headingLevels = {
  H1: (props: HeadingProps) => <Heading element="h1" type="xl" {...props} />,
  H2: (props: HeadingProps) => <Heading element="h2" type="lg" {...props} />,
  H3: (props: HeadingProps) => <Heading element="h3" type="md" {...props} />,
  H4: (props: HeadingProps) => <Heading element="h4" type="sm" {...props} />,
}

Heading.Centered = {} as typeof headingLevels
Heading.MarginWhenAdjacent = {} as typeof headingLevels

Object.entries(headingLevels).forEach(([key, Component]) => {
  const k = key as keyof typeof headingLevels
  Heading[k] = Component
  Heading.Centered[k] = (props: HeadingProps) => <Component isCentered {...props} />
  Heading.MarginWhenAdjacent[k] = (props: HeadingProps) => (
    <Component isMarginWhenAdjacent {...props} />
  )
})

export default Heading
