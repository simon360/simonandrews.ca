import type { ReactNode } from 'react'
import { ArrowUp } from 'react-feather'

import Section from '@/components/Section'
import Surface from '@/components/Surface'
import TextWithIcon from '@/components/TextWithIcon'
import type { SiteLink, SocialLink } from '@/data/site'

import SubFooter from './components/SubFooter'
import styles from './Footer.module.css'

interface Props {
  contactInfo?: ReactNode
  siteLinks?: SiteLink[]
  socialLinks?: SocialLink[]
}

export default function Footer({
  contactInfo,
  siteLinks = [],
  socialLinks = [],
}: Props) {
  const showSubFooter =
    contactInfo ||
    (siteLinks && siteLinks.length > 0) ||
    (socialLinks && socialLinks.length > 0)

  return (
    <footer>
      {showSubFooter && (
        <SubFooter
          contactInfo={contactInfo}
          siteLinks={siteLinks}
          socialLinks={socialLinks}
        />
      )}

      <Surface backgroundColorType="brand-primary">
        <Section verticalPadding="lg">
          <div className={styles.wrapper}>
            <span>© {new Date().getFullYear()}</span>
            <a href="#top">
              <TextWithIcon iconAlignment="end" icon={ArrowUp}>
                Top of page
              </TextWithIcon>
            </a>
          </div>
        </Section>
      </Surface>
    </footer>
  )
}
