import site from "@/data/site"
import HomeClient from "./_HomeClient"

const image = new URL(site.image, site.baseUrl).toString()

export const metadata = {
  title: `Home | ${site.title}`,
  description: site.description,
  icons: { icon: site.favicon },
  openGraph: {
    title: "Home",
    description: site.description,
    type: "website",
    images: [image],
  },
  twitter: {
    card: "summary_large_image",
    creator: site.author,
    title: "Home",
    description: site.description,
    images: [image],
  },
}

export default function Page() {
  return <HomeClient />
}
