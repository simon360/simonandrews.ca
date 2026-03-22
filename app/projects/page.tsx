import { createMetadata } from '@/lib/metadata'
import ProjectsClient from './_ProjectsClient'

export const metadata = createMetadata(
  'Projects',
  'A list of interesting or notable projects that I work on in my spare time.'
)

export default function Page() {
  return <ProjectsClient />
}
