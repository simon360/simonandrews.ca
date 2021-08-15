import React from "react"

import { wrapper, itemWrapper } from "./List.module.css"

export default function List({ children, element: Element = "ul" }) {
  return <Element className={wrapper}>{children}</Element>
}

export function Item({ children }) {
  return <li className={itemWrapper}>{children}</li>
}

List.Ul = (props) => <List element="ul" {...props} />
List.Ol = (props) => <List element="ol" {...props} />
List.Item = Item
