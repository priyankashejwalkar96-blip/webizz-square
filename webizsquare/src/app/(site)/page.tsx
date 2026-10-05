import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import HomeClient from './HomeClient'
import { notFound } from 'next/navigation'

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  // Fetch the "home" page from Payload CMS
  const { docs } = await payload.find({
    collection: 'pages',
    depth: 3,
    where: {
      slug: {
        equals: 'home',
      },
    },
  })

  const homePage = docs[0]

  // Extract block data if they exist
  const heroBlock = homePage?.layout?.find((block: any) => block.blockType === 'hero')
  const aboutBlock = homePage?.layout?.find((block: any) => block.blockType === 'about')
  const brandsBlock = homePage?.layout?.find((block: any) => block.blockType === 'brands')
  const servicesBlock = homePage?.layout?.find((block: any) => block.blockType === 'services')
  const portfolioBlock = homePage?.layout?.find((block: any) => block.blockType === 'portfolio')
  const statsBlock = homePage?.layout?.find((block: any) => block.blockType === 'stats')
  const testimonialsBlock = homePage?.layout?.find((block: any) => block.blockType === 'testimonials')
  const faqBlock = homePage?.layout?.find((block: any) => block.blockType === 'faq')
  const contactBlock = homePage?.layout?.find((block: any) => block.blockType === 'contact')

  return <HomeClient initialHeroData={heroBlock} initialAboutData={aboutBlock} initialBrandsData={brandsBlock} initialServicesData={servicesBlock} initialPortfolioData={portfolioBlock} initialStatsData={statsBlock} initialTestimonialsData={testimonialsBlock} initialFAQData={faqBlock} initialContactData={contactBlock} />
}
