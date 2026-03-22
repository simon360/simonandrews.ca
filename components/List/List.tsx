import type { ReactNode } from "react"

import styles from "./List.module.css"

interface ListProps {
  children?: ReactNode
  element?: "ul" | "ol"
}

interface ItemProps {
  children?: ReactNode
}

export default function List({ children, element: Element = "ul" }: ListProps) {
  return <Element className={styles.wrapper}>{children}</Element>
}

export function Item({ children }: ItemProps) {
  return <li className={styles.itemWrapper}>{children}</li>
}

List.Ul = function ListUl(props: Omit<ListProps, "element">) {
  return <List element="ul" {...props} />
}
List.Ol = function ListOl(props: Omit<ListProps, "element">) {
  return <List element="ol" {...props} />
}
List.Item = Item
