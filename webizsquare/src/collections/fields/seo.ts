import type { Field } from 'payload'

export const seoFields: Field = {
  type: 'group',
  name: 'seo',
  label: 'SEO & Search Engine Visibility',
  fields: [
    {
      name: 'metaTitle',
      label: 'Meta Title',
      type: 'text',
      admin: {
        description: 'Recommended: 50-60 characters. Appears in search engine results and browser tabs.',
      },
    },
    {
      name: 'metaDescription',
      label: 'Meta Description',
      type: 'textarea',
      admin: {
        description: 'Recommended: 120-160 characters. Appears as the snippet beneath your title in Google search results.',
      },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'canonicalUrl',
          label: 'Custom Canonical URL',
          type: 'text',
          admin: {
            width: '50%',
            description: 'Leave blank to use the default page URL automatically.',
          },
        },
        {
          name: 'ogImage',
          label: 'Social Share Image (Open Graph)',
          type: 'upload',
          relationTo: 'media',
          admin: {
            width: '50%',
            description: '1200x630px image shown when shared on Facebook, LinkedIn, Twitter/X.',
          },
        },
      ],
    },
    {
      name: 'noIndex',
      label: 'Prevent Search Indexing (noindex)',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Check this if this page should NOT appear in Google search results or sitemaps.',
      },
    },
  ],
}
