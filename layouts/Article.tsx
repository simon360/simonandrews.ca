import type { ComponentProps } from "react"

import StandardLayout from "./StandardLayout"

export default function Article({
  children,
  ...props
}: ComponentProps<typeof StandardLayout>) {
  return (
    <StandardLayout {...props}>
      <article>{children}</article>
    </StandardLayout>
  )
}
