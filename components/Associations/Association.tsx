import classnames from 'class-names'

import Heading from '@/components/Heading'
import type { Association as AssociationData } from '@/data/home'

import styles from './Association.module.css'

export default function Association({
  brandColor,
  company,
  href,
  isFocus: isFocusProp,
  logo: logoProp,
  note,
  positions,
}: AssociationData) {
  return (
    <li
      className={classnames(styles.wrapper, { [styles.isFocus]: isFocusProp })}
      style={{ borderColor: brandColor }}
    >
      <div className={styles.title}>
        <Heading element="h3" type="md" spaceAfter={null}>
          {href ? (
            <a href={href} rel="noopener noreferrer">
              {company}
            </a>
          ) : (
            company
          )}
        </Heading>
        {note && <p className={styles.note}>{note}</p>}
      </div>

      {logoProp && (
        <div className={styles.logoWrapper}>
          {(function () {
            if (logoProp.type === 'img' && logoProp.imgAttributes) {
              return (
                /* Disabling a11y rule; this is captured by `logoProp.imgAttributes.alt` being a required prop. */
                // eslint-disable-next-line jsx-a11y/alt-text
                <img {...logoProp.imgAttributes} className={styles.logo} />
              )
            } else if (logoProp.type === 'component' && logoProp.component) {
              const Logo = logoProp.component

              return <Logo className={styles.logo} />
            }

            return null
          })()}
        </div>
      )}

      <ul className={styles.positionsWrapper}>
        {positions.map(({ time, title }) => (
          <li key={time} className={styles.position}>
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
