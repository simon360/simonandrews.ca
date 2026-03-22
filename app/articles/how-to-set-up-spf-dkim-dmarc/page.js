import site from "@/data/site"
import ArticleClient from "./_ArticleClient"

const title = "I figured out how DMARC works, and it almost broke me"
const description =
  "How to use SPF, DKIM, and DMARC to improve your domain's email security and limit spoofing - but written for humans."
const image = new URL(site.image, site.baseUrl).toString()

export const metadata = {
  title: `${title} | ${site.title}`,
  description,
  icons: { icon: site.favicon },
  openGraph: {
    title,
    description,
    type: "website",
    images: [image],
  },
  twitter: {
    card: "summary_large_image",
    creator: site.author,
    title,
    description,
    images: [image],
  },
}

export default function Page() {
  return <ArticleClient />
}
