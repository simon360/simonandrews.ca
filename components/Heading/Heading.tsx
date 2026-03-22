import classnames from 'class-names'
import type { ReactElement, ReactNode } from 'react'

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

type HeadingVariants = {
  H1: (props: HeadingProps) => ReactElement
  H2: (props: HeadingProps) => ReactElement
  H3: (props: HeadingProps) => ReactElement
  H4: (props: HeadingProps) => ReactElement
}

function HeadingBase({
  children,
  isCentered,
  isMarginWhenAdjacent,
  id = null,
  element = 'h2',
  spaceAfter = 'lg',
  type = 'lg',
}: HeadingProps) {
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

const headingLevels: HeadingVariants = {
  H1: (props: HeadingProps) => <HeadingBase element="h1" type="xl" {...props} />,
  H2: (props: HeadingProps) => <HeadingBase element="h2" type="lg" {...props} />,
  H3: (props: HeadingProps) => <HeadingBase element="h3" type="md" {...props} />,
  H4: (props: HeadingProps) => <HeadingBase element="h4" type="sm" {...props} />,
}

const Heading = Object.assign(HeadingBase, {
  ...headingLevels,
  Centered: {
    H1: (props: HeadingProps) => <headingLevels.H1 isCentered {...props} />,
    H2: (props: HeadingProps) => <headingLevels.H2 isCentered {...props} />,
    H3: (props: HeadingProps) => <headingLevels.H3 isCentered {...props} />,
    H4: (props: HeadingProps) => <headingLevels.H4 isCentered {...props} />,
  } satisfies HeadingVariants,
  MarginWhenAdjacent: {
    H1: (props: HeadingProps) => <headingLevels.H1 isMarginWhenAdjacent {...props} />,
    H2: (props: HeadingProps) => <headingLevels.H2 isMarginWhenAdjacent {...props} />,
    H3: (props: HeadingProps) => <headingLevels.H3 isMarginWhenAdjacent {...props} />,
    H4: (props: HeadingProps) => <headingLevels.H4 isMarginWhenAdjacent {...props} />,
  } satisfies HeadingVariants,
})

export default Heading
