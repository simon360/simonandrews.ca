function getBaseUrl() {
  if (process.env.NEXT_PUBLIC_VERCEL_URL) {
    // Vercel doesn't provide a protocol on its URLs. (So, technically, this
    // isn't a URL, but I'll put pedantry aside.)
    return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  }

  if (process.env.BASE_URL) {
    // Could be used in non-Vercel environments
    return process.env.BASE_URL
  }

  // Fall back to the default
  return "https://www.simonandrews.ca"
}

const site = {
  title: `Simon Andrews`,
  description: `Engineering Manager/Product Engineer based in London, UK`,
  author: `@simon360`,
  baseUrl: getBaseUrl(),
  image: "/images/social-image.png",
  favicon: "/favicon.png",

  siteLinks: [{ title: "CV", url: "/" }],
  socialLinks: [
    {
      title: "simon360 on GitHub",
      type: "github",
      url: "https://www.github.com/simon360",
    },
    {
      title: "simon360 on Instagram",
      type: "instagram",
      url: "https://www.instagram.com/simon360",
    },
    {
      title: "sadl-uk on LinkedIn",
      type: "linkedin",
      url: "https://www.linkedin.com/in/sadl-uk/",
    },
    {
      title: "@simon360 on Twitter",
      type: "twitter",
      url: "https://www.twitter.com/simon360",
    },
  ],
}

export default site
