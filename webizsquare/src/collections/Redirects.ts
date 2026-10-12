import type { CollectionConfig } from 'payload'

export const Redirects: CollectionConfig = {
  slug: 'redirects',
  admin: {
    useAsTitle: 'from',
    defaultColumns: ['from', 'to', 'type', 'enabled'],
    group: 'Settings & SEO',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'from',
          type: 'text',
          required: true,
          unique: true,
          admin: {
            width: '50%',
            description: 'Source path (e.g. /wp-content/..., /old-service, /sitemap_index.xml)',
          },
        },
        {
          name: 'to',
          type: 'text',
          required: true,
          admin: {
            width: '50%',
            description: 'Destination URL or path (e.g. /services/website-design or /sitemap.xml)',
          },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'type',
          type: 'select',
          defaultValue: '301',
          options: [
            { label: '301 (Permanent Redirect)', value: '301' },
            { label: '302 (Temporary Redirect)', value: '302' },
          ],
          admin: { width: '50%' },
        },
        {
          name: 'enabled',
          type: 'checkbox',
          defaultValue: true,
          admin: { width: '50%' },
        },
      ],
    },
  ],
}
