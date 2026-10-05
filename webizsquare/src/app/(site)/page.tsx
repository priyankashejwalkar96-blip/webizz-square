import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import HomeClient from './HomeClient'
import { notFound } from 'next/navigation'

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  // Fetch the "home" page from Payload CMS
  const { docs } = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: 'home',
      },
    },
  })

  const homePage = docs[0]

  // Extract Hero block data if it exists, otherwise pass null
  const heroBlock = homePage?.layout?.find((block: any) => block.blockType === 'hero')

  return <HomeClient initialHeroData={heroBlock} />
}
