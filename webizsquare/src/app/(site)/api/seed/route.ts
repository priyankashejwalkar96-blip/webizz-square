import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import { NextResponse } from 'next/server'

export async function GET() {
  const payload = await getPayload({ config: configPromise })

  try {
    // Check if pages already exist
    const { docs: existingPages } = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: 'home',
        },
      },
    })

    if (existingPages.length > 0) {
      return NextResponse.json({ message: 'Already seeded' })
    }

    // Create Home Page
    await payload.create({
      collection: 'pages',
      data: {
        title: 'Home',
        slug: 'home',
        layout: [
          {
            blockType: 'hero',
            headline: 'Premium Digital Agency',
            subheadline: 'We build very fast, SEO-first, secure websites to help you rank higher on Google.',
            ctaText: 'Get a Quote',
            ctaLink: '/contact',
          }
        ]
      }
    })

    // Update Site Settings
    await payload.updateGlobal({
      slug: 'site-settings',
      data: {
        headerLinks: [
          { label: 'Home', url: '/' },
          { label: 'Services', url: '/services' },
          { label: 'Portfolio', url: '/portfolio' },
          { label: 'About Us', url: '/about' },
          { label: 'Contact', url: '/contact' },
        ],
        headerCta: {
          label: 'Get a Quote',
          url: '/contact',
        },
        footerLinks: [
          { label: 'Privacy Policy', url: '/privacy-policy' },
          { label: 'Terms & Conditions', url: '/terms' },
        ],
        copyrightText: '© 2026 Webiz Square LLP. All rights reserved.',
      }
    })

    return NextResponse.json({ message: 'Seed successful!' })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Seed failed' }, { status: 500 })
  }
}
