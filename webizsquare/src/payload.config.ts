import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { Users } from './collections/Users'
import { Pages } from './collections/Pages'
import { Media } from './collections/Media'
import { Services } from './collections/Services'
import { SiteSettings } from './globals/SiteSettings'
import { About } from './globals/About'
import { ContactPage } from './globals/ContactPage'
import { Policies } from './collections/Policies'

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: '- Webiz Square Admin',
    },
    components: {
      graphics: {
        Logo: '@/components/AdminLogo#AdminLogo',
        Icon: '@/components/AdminLogo#AdminLogo',
      },
    },
  },
  collections: [Users, Pages, Media, Services, Policies],
  globals: [SiteSettings, About, ContactPage],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'webizz_secret_key_12345',
  typescript: {
    outputFile: path.resolve(process.cwd(), 'src/payload-types.ts'),
  },
  db: postgresAdapter({
    pool: { connectionString: process.env.DATABASE_URI || '' },
    push: false,
  }),
})
