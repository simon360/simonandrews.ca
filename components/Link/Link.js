import NextLink from "next/link"

export default function Link({
  component: Component = "a",
  href,
  children,
  ...props
}) {
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
