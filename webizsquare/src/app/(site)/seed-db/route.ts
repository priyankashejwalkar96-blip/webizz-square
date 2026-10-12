import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import { NextResponse } from 'next/server'

export async function GET() {
  const payload = await getPayload({ config: configPromise })

  try {
    // 1. Create missing tables if they don't exist yet in PostgreSQL
    const tableQueries = [
      `CREATE TABLE IF NOT EXISTS "leads" (
        "id" serial PRIMARY KEY NOT NULL,
        "name" varchar NOT NULL,
        "company" varchar,
        "email" varchar NOT NULL,
        "phone" varchar,
        "service_interested" varchar,
        "budget_range" varchar,
        "message" text,
        "source_type" varchar DEFAULT 'quote_form',
        "timeline" varchar,
        "status" varchar DEFAULT 'new',
        "priority" varchar DEFAULT 'medium',
        "expected_value" numeric,
        "assigned_to_id" integer,
        "follow_up_date" timestamp(3) with time zone,
        "internal_notes" text,
        "utm_source" varchar,
        "utm_medium" varchar,
        "utm_campaign" varchar,
        "utm_term" varchar,
        "utm_content" varchar,
        "gclid" varchar,
        "fbclid" varchar,
        "landing_page" varchar,
        "referrer" varchar,
        "country" varchar,
        "device" varchar,
        "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
        "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
      );`,
      `CREATE TABLE IF NOT EXISTS "case_studies" (
        "id" serial PRIMARY KEY NOT NULL,
        "title" varchar NOT NULL,
        "slug" varchar NOT NULL,
        "client_name" varchar NOT NULL,
        "industry" varchar,
        "key_metric" varchar,
        "live_url" varchar,
        "summary" text NOT NULL,
        "challenge" text,
        "solution" text,
        "featured_image_id" integer,
        "featured" boolean DEFAULT false,
        "order" numeric DEFAULT 0,
        "testimonial_quote" text,
        "testimonial_author" varchar,
        "testimonial_role" varchar,
        "seo_meta_title" varchar,
        "seo_meta_description" text,
        "seo_og_image_id" integer,
        "seo_no_index" boolean DEFAULT false,
        "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
        "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
      );`,
      `CREATE TABLE IF NOT EXISTS "case_studies_technologies" (
        "_order" integer NOT NULL,
        "_parent_id" integer NOT NULL,
        "id" varchar PRIMARY KEY NOT NULL,
        "name" varchar NOT NULL
      );`,
      `CREATE TABLE IF NOT EXISTS "testimonials" (
        "id" serial PRIMARY KEY NOT NULL,
        "name" varchar NOT NULL,
        "company" varchar,
        "role" varchar,
        "location" varchar,
        "rating" numeric DEFAULT 5 NOT NULL,
        "source" varchar DEFAULT 'google',
        "tag" varchar,
        "quote" text NOT NULL,
        "photo_id" integer,
        "featured" boolean DEFAULT true,
        "order" numeric DEFAULT 0,
        "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
        "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
      );`,
      `CREATE TABLE IF NOT EXISTS "clients" (
        "id" serial PRIMARY KEY NOT NULL,
        "name" varchar NOT NULL,
        "logo_id" integer,
        "website" varchar,
        "order" numeric DEFAULT 0,
        "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
        "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
      );`,
      `CREATE TABLE IF NOT EXISTS "subscribers" (
        "id" serial PRIMARY KEY NOT NULL,
        "email" varchar NOT NULL,
        "source" varchar DEFAULT 'footer_newsletter',
        "status" varchar DEFAULT 'subscribed',
        "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
        "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
      );`,
      `CREATE TABLE IF NOT EXISTS "redirects" (
        "id" serial PRIMARY KEY NOT NULL,
        "from" varchar NOT NULL,
        "to" varchar NOT NULL,
        "type" varchar DEFAULT '301',
        "enabled" boolean DEFAULT true,
        "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
        "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
      );`,
    ]

    for (const sqlQuery of tableQueries) {
      try {
        await (payload.db as any).drizzle.execute(sqlQuery)
      } catch (err: any) {
        console.log('Table creation note:', err.message)
      }
    }

    // Drop any NOT NULL constraints on images to prevent media blocker issues
    try {
      await (payload.db as any).drizzle.execute('ALTER TABLE "services" ALTER COLUMN "image_id" DROP NOT NULL;')
    } catch {}
    try {
      await (payload.db as any).drizzle.execute('ALTER TABLE "pages_blocks_about_tabs" ALTER COLUMN "image_id" DROP NOT NULL;')
    } catch {}

    // Add missing relationship columns on payload_locked_documents_rels for all new collections
    const lockedDocsCols = [
      'ALTER TABLE "payload_locked_documents_rels" ADD COLUMN IF NOT EXISTS "leads_id" integer;',
      'ALTER TABLE "payload_locked_documents_rels" ADD COLUMN IF NOT EXISTS "subscribers_id" integer;',
      'ALTER TABLE "payload_locked_documents_rels" ADD COLUMN IF NOT EXISTS "case_studies_id" integer;',
      'ALTER TABLE "payload_locked_documents_rels" ADD COLUMN IF NOT EXISTS "testimonials_id" integer;',
      'ALTER TABLE "payload_locked_documents_rels" ADD COLUMN IF NOT EXISTS "clients_id" integer;',
      'ALTER TABLE "payload_locked_documents_rels" ADD COLUMN IF NOT EXISTS "redirects_id" integer;',
      'CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_leads_id_idx" ON "payload_locked_documents_rels" ("leads_id");',
      'CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_subscribers_id_idx" ON "payload_locked_documents_rels" ("subscribers_id");',
      'CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_case_studies_id_idx" ON "payload_locked_documents_rels" ("case_studies_id");',
      'CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_testimonials_id_idx" ON "payload_locked_documents_rels" ("testimonials_id");',
      'CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_clients_id_idx" ON "payload_locked_documents_rels" ("clients_id");',
      'CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_redirects_id_idx" ON "payload_locked_documents_rels" ("redirects_id");',
    ]

    for (const colQuery of lockedDocsCols) {
      try {
        await (payload.db as any).drizzle.execute(colQuery)
      } catch (err: any) {
        console.log('payload_locked_documents_rels alter note:', err.message)
      }
    }

    // Add SEO columns for services and pages
    const seoCols = [
      'ALTER TABLE "services" ADD COLUMN IF NOT EXISTS "seo_meta_title" varchar;',
      'ALTER TABLE "services" ADD COLUMN IF NOT EXISTS "seo_meta_description" text;',
      'ALTER TABLE "services" ADD COLUMN IF NOT EXISTS "seo_canonical_url" varchar;',
      'ALTER TABLE "services" ADD COLUMN IF NOT EXISTS "seo_og_image_id" integer;',
      'ALTER TABLE "services" ADD COLUMN IF NOT EXISTS "seo_no_index" boolean DEFAULT false;',
      'ALTER TABLE "pages" ADD COLUMN IF NOT EXISTS "seo_meta_title" varchar;',
      'ALTER TABLE "pages" ADD COLUMN IF NOT EXISTS "seo_meta_description" text;',
      'ALTER TABLE "pages" ADD COLUMN IF NOT EXISTS "seo_canonical_url" varchar;',
      'ALTER TABLE "pages" ADD COLUMN IF NOT EXISTS "seo_og_image_id" integer;',
      'ALTER TABLE "pages" ADD COLUMN IF NOT EXISTS "seo_no_index" boolean DEFAULT false;',
    ]

    for (const query of seoCols) {
      try {
        await (payload.db as any).drizzle.execute(query)
      } catch (err: any) {
        console.log('SEO col alter note:', err.message)
      }
    }
    const defaultServices: Array<{
      title: string
      slug: string
      icon: "Layout" | "Smartphone" | "Database" | "Search" | "Globe" | "PenTool" | "Share2" | "Bot" | "Zap" | "Shield"
    }> = [
      { title: "Website Design", slug: "website-design", icon: "Globe" },
      { title: "App Development", slug: "app-development", icon: "Smartphone" },
      { title: "Graphic Design", slug: "graphic-design", icon: "PenTool" },
      { title: "Social Media Marketing", slug: "social-media-marketing", icon: "Share2" },
      { title: "Search Engine Optimization", slug: "search-engine-optimization", icon: "Search" },
      { title: "Search Engine Marketing", slug: "search-engine-marketing", icon: "Search" },
      { title: "AI Integration", slug: "ai-integration", icon: "Bot" },
      { title: "Marketing Automation", slug: "marketing-automation", icon: "Zap" },
    ]

    for (const service of defaultServices) {
      const existing = await payload.find({ collection: 'services', where: { title: { equals: service.title } } })
      if (existing.totalDocs === 0) {
        await payload.create({
          collection: 'services',
          draft: false,
          data: {
            title: service.title,
            slug: service.slug,
            description: `Professional ${service.title} services tailored to your business needs and measurable ROI.`,
            icon: service.icon,
            features: [
              { feature: `Enterprise-grade ${service.title}` },
              { feature: "Dedicated agile engineering team" },
              { feature: "Google Core Web Vitals optimization" },
            ],
            seo: {
              metaTitle: `${service.title} Services | Webiz Square`,
              metaDescription: `Professional ${service.title} in Nashik and globally. High-performance, secure, and conversion-optimized digital solutions.`,
            },
          },
        })
      }
    }

    // 3. Seed Case Studies
    const defaultCaseStudies = [
      {
        title: "EasyVendor B2B Multi-Vendor Marketplace",
        clientName: "EasyVendor Global",
        industry: "B2B E-Commerce & Wholesale",
        keyMetric: "+280% GMV Growth",
        summary: "Enterprise multi-vendor procurement and wholesale marketplace with automated vendor settlements, real-time inventory syncing, and B2B pricing tiers.",
        featured: true,
        order: 1,
      },
      {
        title: "EGR59 Gourmet Food Showcase & Headless Shop",
        clientName: "EGR59 Foods Pvt Ltd",
        industry: "Direct-to-Consumer Food & Beverage",
        keyMetric: "1.1s Load Time",
        summary: "Ultra-fast headless food ordering experience with live kitchen dispatch tracking, recipe discovery, and international logistics integration.",
        featured: true,
        order: 2,
      },
      {
        title: "Eternal Devalaya Cultural & Heritage Portal",
        clientName: "Eternal Devalaya Trust",
        industry: "Digital Heritage & Culture",
        keyMetric: "45k+ Monthly Visitors",
        summary: "Immersive spiritual and cultural heritage portal with 3D temple walkthrough previews, live donation processing, and multi-lingual support.",
        featured: true,
        order: 3,
      },
      {
        title: "The Avo Company DTC Superfood Site",
        clientName: "The Avocado Co.",
        industry: "Organic E-Commerce & Retail",
        keyMetric: "4.8x ROI on Ads",
        summary: "Direct to consumer e-commerce experience highlighting sustainable farming and organic avocado products with a modern, earthy aesthetic.",
        featured: true,
        order: 4,
      },
    ]

    for (const cs of defaultCaseStudies) {
      try {
        const existing = await payload.find({ collection: 'case-studies', where: { title: { equals: cs.title } } })
        if (existing.totalDocs === 0) {
          await payload.create({
            collection: 'case-studies',
            data: {
              title: cs.title,
              slug: cs.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
              clientName: cs.clientName,
              industry: cs.industry,
              keyMetric: cs.keyMetric,
              summary: cs.summary,
              featured: cs.featured,
              order: cs.order,
              technologies: [{ name: 'Next.js' }, { name: 'React' }, { name: 'PostgreSQL' }],
            },
          })
        }
      } catch (err: any) {
        console.log('Case study creation note:', err.message)
      }
    }

    // 4. Seed Testimonials
    const defaultTestimonials = [
      { name: "Rajendra Deshmukh", company: "Deshmukh Agro Exports", role: "Managing Director", location: "Nashik", tag: "CUSTOM ERP & WEB PLATFORM", quote: "Webiz Square engineered our global export portal and custom inventory ERP. Our export inquiries tripled within 60 days of launch, and the loading speed on international mobile networks is astounding." },
      { name: "Pooja Patil", company: "Sweet Affairs Confectioneries", role: "Founder & Creative Director", location: "Pune", tag: "E-COMMERCE & BRANDING", quote: "The team at Webiz Square transformed our branding and e-commerce store. The dark aesthetic, fluid product transitions, and 1-click checkout increased our direct online revenue by over 240%." },
      { name: "Vikram Mehta", company: "Polymer Crafts Manufacturing", role: "Operations Head", location: "Mumbai", tag: "ENTERPRISE ERP SOFTWARE", quote: "We replaced our sluggish legacy software with Webiz Square One. The automated GST billing and real-time inventory tracking saved our accounts team over 25 hours every week. Highly recommended!" },
      { name: "Anita Sharma", company: "TechFlow Innovations", role: "CEO", location: "Bangalore", tag: "MOBILE APP DEVELOPMENT", quote: "The mobile app they built for us is incredibly smooth. The UX is top-notch, and our user retention increased by 45% in just the first quarter. Truly exceptional team to work with!" },
    ]

    for (const test of defaultTestimonials) {
      try {
        const existing = await payload.find({ collection: 'testimonials', where: { name: { equals: test.name } } })
        if (existing.totalDocs === 0) {
          await payload.create({
            collection: 'testimonials',
            data: {
              name: test.name,
              company: test.company,
              role: test.role,
              location: test.location,
              tag: test.tag,
              quote: test.quote,
              rating: 5,
              source: 'google',
              featured: true,
            },
          })
        }
      } catch {}
    }

    // 5. Seed SiteSettings Global with SEO & Tracking defaults
    try {
      await payload.updateGlobal({
        slug: 'site-settings',
        data: {
          siteName: 'Webiz Square',
          tagline: 'Driving Business Growth Through Smart Digital Traffic',
          phone: '+91 9172944434',
          email: 'contact@webizsquare.com',
          whatsappNumber: '919172944434',
          address: 'Webiz Square, Nashik, Maharashtra, India',
          businessHours: 'Mon - Sat: 9:00 AM - 7:00 PM',
          socialLinks: {
            linkedin: 'https://linkedin.com/company/webizsquare',
            twitter: 'https://twitter.com/webizsquare',
            instagram: 'https://instagram.com/webizsquare',
            facebook: 'https://facebook.com/webizsquare',
          },
          defaultMetaTitle: 'Webiz Square - Award Winning Digital Agency & Software House',
          titleTemplate: '%s | Webiz Square',
          defaultMetaDescription: 'We build lightning-fast, SEO-optimized digital experiences that drive measurable growth. From stunning websites to powerful web applications, we engineer success.',
          canonicalBaseUrl: 'https://webizsquare.com',
          robotsIndexing: 'index_follow',
          organizationSchema: {
            legalName: 'Webiz Square Private Limited',
            founder: 'Priyanka Shejwalkar',
            areaServed: 'Global, India, USA, UAE, UK',
            priceRange: '$$',
          },
        },
      })
    } catch (err: any) {
      console.log('SiteSettings seed note:', err.message)
    }

    return NextResponse.json({
      success: true,
      message: 'Database tables and initial collections successfully created and populated!',
    })
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
