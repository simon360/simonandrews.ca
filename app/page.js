import site from "@/data/site"
import { createMetadata } from "@/lib/metadata"
import HomeClient from "./_HomeClient"

export const metadata = createMetadata("Home", site.description)

export default function Page() {
  return <HomeClient />
}
