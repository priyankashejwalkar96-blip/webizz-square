import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { Users } from './collections/Users'
import { Pages } from './collections/Pages'
import { Media } from './collections/Media'
import { Services } from './collections/Services'
import { Policies } from './collections/Policies'
import { Leads } from './collections/Leads'
import { CaseStudies } from './collections/CaseStudies'
import { Testimonials } from './collections/Testimonials'
import { Clients } from './collections/Clients'
import { Subscribers } from './collections/Subscribers'
import { Redirects } from './collections/Redirects'
import { SiteSettings } from './globals/SiteSettings'
import { About } from './globals/About'
import { ContactPage } from './globals/ContactPage'

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: '- Webiz Square Admin',
      icons: [{ rel: 'icon', type: 'image/png', url: '/white-logo.png' }],
    },
    components: {
      graphics: {
        Logo: '@/components/AdminLogo#AdminLogo',
        Icon: '@/components/AdminIcon#AdminIcon',
      },
    },
  },
  collections: [
    // Core & Sales
    Leads,
    Subscribers,
    // Content & Portfolio
    Pages,
    Services,
    CaseStudies,
    Testimonials,
    Clients,
    Policies,
    // System & Assets
    Media,
    Users,
    Redirects,
  ],
  globals: [
    SiteSettings,
    About,
    ContactPage,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'webizz_secret_key_12345',
  typescript: {
    outputFile: path.resolve(process.cwd(), 'src/payload-types.ts'),
  },
  db: postgresAdapter({
    pool: { connectionString: process.env.DATABASE_URI || '' },
    push: process.env.NODE_ENV !== 'production',
  }),
})
