import PropTypes from "prop-types"
import React from "react"
import classnames from "class-names"

import Heading from "@/components/Heading"

import {
  isFocus,
  logo,
  logoWrapper,
  position,
  positionsWrapper,
  title,
  wrapper,
} from "./Association.module.css"

/**
 * An association between the subject and an external organization. For example,
 * a job and position(s) held, or details about education.
 */
export default function Association({
  brandColor,
  company,
  href,
  isFocus: isFocusProp,
  logo: logoProp,
  positions,
}) {
  return (
    <li
      className={classnames(wrapper, { [isFocus]: isFocusProp })}
      style={{ borderColor: brandColor }}
    >
      <div className={title}>
        <Heading element="h3" type="md">
          {href ? (
            <a href={href} rel="noopener noreferrer">
              {company}
            </a>
          ) : (
            company
          )}
        </Heading>
      </div>

      {logoProp && (
        <div className={logoWrapper}>
          {(function () {
            if (logoProp.type === "img" && logoProp.imgAttributes) {
              return (
                /* Disabling a11y rule; this is captured by `logoProp.imgAttributes.alt` being a required prop. */
                // eslint-disable-next-line jsx-a11y/alt-text
                <img {...logoProp.imgAttributes} className={logo} />
              )
            } else if (logoProp.type === "component" && logoProp.component) {
              const Logo = logoProp.component

              return <Logo className={logo} />
            }

            return null
          })()}
        </div>
      )}

      <ul className={positionsWrapper}>
        {positions.map(({ time, title }) => (
          <li key={time} className={position}>
            <div>
              <strong>{title}</strong>
            </div>
            <time>{time}</time>
          </li>
        ))}
      </ul>
    </li>
  )
}

Association.propTypes = {
  /**
   * The color of the brand for this association
   */
  brandColor: PropTypes.string.isRequired,

  /**
   * The name of the company in this association
   */
  company: PropTypes.string.isRequired,

  /**
   * A link to the company's website
   */
  href: PropTypes.string,

  /**
   * Is this association highlighted/emphasized in its display?
   */
  isFocus: PropTypes.bool,

  /**
   * The company's logo
   */
  logo: PropTypes.shape({
    /**
     * The type of logo: `component`, if it's a vector (SVG should be parsed into React); `raster` if it's an `<img />` `src`.
     */
    type: PropTypes.oneOf(["component", "img"]).isRequired,

    /**
     * If the type is `component`, pass an uninstantiated React component type here
     */
    component: PropTypes.elementType,

    /**
     * If the type is `img`, these attributes will be passed onto the `img` element.
     *
     * Additional attributes can be specified as needed, but `src` and `alt` are always required.
     */
    imgAttributes: PropTypes.shape({
      /**
       * If the type is `raster`, this specifies the `img` element's `src` attribute.
       */
      src: PropTypes.string.isRequired,

      /**
       * If the type is `raster`, this specifies the `img` element's `alt` attribute
       */
      alt: PropTypes.string.isRequired,
    }),
  }),

  /**
   * A list of positions held
   */
  positions: PropTypes.arrayOf(
    PropTypes.shape({
      time: PropTypes.string,
      title: PropTypes.string,
    })
  ),
}
