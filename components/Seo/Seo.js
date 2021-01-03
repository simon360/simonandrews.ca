import Head from "next/head"
import React from "react"

import site from "@/data/site"

export default function Seo({ meta: passedMeta }) {
  const meta = {
    ...site,
    ...passedMeta,
  }

  const image = new URL(meta.image, site.baseUrl).toString()

  return (
    <Head>
      <title>{meta.title} | Simon Andrews</title>

      <meta name="description" content={meta.description} />

      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:type" content="website" />
      <meta name="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={meta.author} />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={image} />
    </Head>
  )
}
