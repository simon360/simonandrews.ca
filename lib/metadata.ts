import type { Metadata } from 'next'

import site from '@/data/site'

const image = new URL(site.image, site.baseUrl).toString()

export function createMetadata(title: string, description: string): Metadata {
  return {
    title: `${title} | ${site.title}`,
    description,
    icons: { icon: site.favicon },
    openGraph: { title, description, type: 'website', images: [image] },
    twitter: {
      card: 'summary_large_image',
      creator: site.author,
      title,
      description,
      images: [image],
    },
  }
}
