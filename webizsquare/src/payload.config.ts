import { buildConfig } from 'payload'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
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
  },
  collections: [Users, Pages, Media, Services, Policies],
  globals: [SiteSettings, About, ContactPage],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'super-secret-key-that-should-be-in-env',
  typescript: {
    outputFile: path.resolve(process.cwd(), 'src/payload-types.ts'),
  },
  db: sqliteAdapter({
    client: {
      url: 'file:./payload.db',
    },
  }),
})
