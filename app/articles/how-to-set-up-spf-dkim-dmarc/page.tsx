import { createMetadata } from "@/lib/metadata"
import ArticleClient from "./_ArticleClient"

export const metadata = createMetadata(
  "I figured out how DMARC works, and it almost broke me",
  "How to use SPF, DKIM, and DMARC to improve your domain's email security and limit spoofing - but written for humans."
)

export default function Page() {
  return <ArticleClient />
}
