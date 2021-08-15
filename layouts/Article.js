import StandardLayout from "./StandardLayout"

export default function Article({ children, ...props }) {
  return (
    <StandardLayout {...props}>
      <article>{children}</article>
    </StandardLayout>
  )
}
