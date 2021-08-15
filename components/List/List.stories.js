import React from "react"

import List from "."

export default {
  title: "Components|List",
}

export const Ordered = () => (
  <List.Ol>
    <List.Item>Item 1</List.Item>
    <List.Item>Item 2</List.Item>
  </List.Ol>
)

export const Unordered = () => (
  <List.Ul>
    <List.Item>Item 1</List.Item>
    <List.Item>Item 2</List.Item>
  </List.Ul>
)
