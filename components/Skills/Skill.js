import classnames from "class-names"
import PropTypes from "prop-types"
import React from "react"

import { wrapper, isFocus } from "./Skill.module.css"

export default function Skill({ children, isFocus: isFocusProp = false }) {
  return (
    <li
      className={classnames(wrapper, {
        [isFocus]: isFocusProp,
      })}
    >
      {children}
    </li>
  )
}

Skill.propTypes = {
  /**
   * The skill being highlighted
   */
  children: PropTypes.string,

  /**
   * Is this skill highlighted or emphasized?
   */
  isFocus: PropTypes.bool,
}
