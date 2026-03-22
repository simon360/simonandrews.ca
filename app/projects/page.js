import site from "@/data/site"
import ProjectsClient from "./_ProjectsClient"

const description =
  "A list of interesting or notable projects that I work on in my spare time."
const image = new URL(site.image, site.baseUrl).toString()

export const metadata = {
  title: `Projects | ${site.title}`,
  description,
  icons: { icon: site.favicon },
  openGraph: {
    title: "Projects",
    description,
    type: "website",
    images: [image],
  },
  twitter: {
    card: "summary_large_image",
    creator: site.author,
    title: "Projects",
    description,
    images: [image],
  },
}

export default function Page() {
  return <ProjectsClient />
}
