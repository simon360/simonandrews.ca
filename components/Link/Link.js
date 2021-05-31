import NextLink from "next/link"

export default function Link({
  component: Component = "a",
  href,
  children,
  ...props
}) {
  if (href && href.startsWith("/")) {
    return (
      <NextLink href={href}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Component {...props}>{children}</Component>
      </NextLink>
    )
  }

  return (
    <Component href={href} {...props}>
      {children}
    </Component>
  )
}
