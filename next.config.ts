import type { NextConfig } from 'next'
import createMDX from '@next/mdx'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'
import rehypePrismPlus from 'rehype-prism-plus'

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: '@mdx-js/react',
    remarkPlugins: [remarkToc],
    rehypePlugins: [rehypeSlug, rehypePrismPlus],
  },
})

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  output: 'standalone',
  webpack(config) {
    config.module?.rules?.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
}

export default withMDX(nextConfig)
