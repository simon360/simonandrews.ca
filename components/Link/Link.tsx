import NextLink from "next/link"
import type { AnchorHTMLAttributes, ElementType, ReactNode } from "react"

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  component?: ElementType
  href?: string
  children?: ReactNode
}

export default function Link({
  component: Component = "a",
  href,
  children,
  ...props
}: Props) {
  if (href && href.startsWith("/")) {
    return (
      <NextLink href={href} {...props}>
        {children}
      </NextLink>
    )
  }

  return (
    <Component href={href} {...props}>
      {children}
    </Component>
  )
}
