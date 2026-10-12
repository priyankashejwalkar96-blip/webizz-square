import type { MetadataRoute } from 'next'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'https://webizsquare.com'

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/process`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/quote`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  let dynamicRoutes: MetadataRoute.Sitemap = []

  try {
    const payload = await getPayload({ config: configPromise })

    // Services dynamic sitemap items
    const { docs: services } = await payload.find({
      collection: 'services',
      where: { isActive: { equals: true } },
      limit: 100,
    })

    const serviceUrls: MetadataRoute.Sitemap = services.map((service) => ({
      url: `${baseUrl}/services/${service.slug}`,
      lastModified: service.updatedAt ? new Date(service.updatedAt) : new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    }))

    // Case Studies dynamic sitemap items
    const { docs: caseStudies } = await payload.find({
      collection: 'case-studies',
      limit: 100,
    })

    const caseStudyUrls: MetadataRoute.Sitemap = caseStudies.map((cs) => ({
      url: `${baseUrl}/portfolio/${cs.slug}`,
      lastModified: cs.updatedAt ? new Date(cs.updatedAt) : new Date(),
      changeFrequency: 'monthly',
      priority: 0.75,
    }))

    // Policies dynamic sitemap items
    const { docs: policies } = await payload.find({
      collection: 'policies',
      limit: 50,
    })

    const policyUrls: MetadataRoute.Sitemap = policies.map((policy) => ({
      url: `${baseUrl}/policies/${policy.slug}`,
      lastModified: policy.updatedAt ? new Date(policy.updatedAt) : new Date(),
      changeFrequency: 'yearly',
      priority: 0.4,
    }))

    dynamicRoutes = [...serviceUrls, ...caseStudyUrls, ...policyUrls]
  } catch (err) {
    console.error('Error generating dynamic sitemap from Payload:', err)
  }

  return [...staticRoutes, ...dynamicRoutes]
}
