import type { CollectionConfig } from 'payload'

export const CaseStudies: CollectionConfig = {
  slug: 'case-studies',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'clientName', 'industry', 'featured', 'order'],
    group: 'Content',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (value) return value
            if (data?.title) {
              return data.title
                .toLowerCase()
                .replace(/ /g, '-')
                .replace(/[^\w-]+/g, '')
            }
            return value
          },
        ],
      },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'clientName',
          type: 'text',
          required: true,
          admin: { width: '50%' },
        },
        {
          name: 'industry',
          type: 'text',
          admin: { width: '50%' },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'keyMetric',
          type: 'text',
          admin: {
            width: '50%',
            description: 'e.g., "+280% GMV Growth" or "1.1s Load Time"',
          },
        },
        {
          name: 'liveUrl',
          type: 'text',
          admin: { width: '50%' },
        },
      ],
    },
    {
      name: 'summary',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Short overview shown on cards and sliders',
      },
    },
    {
      name: 'challenge',
      type: 'textarea',
    },
    {
      name: 'solution',
      type: 'textarea',
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'technologies',
      type: 'array',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      type: 'group',
      name: 'testimonial',
      fields: [
        { name: 'quote', type: 'textarea' },
        { name: 'author', type: 'text' },
        { name: 'role', type: 'text' },
      ],
    },
    {
      type: 'group',
      name: 'seo',
      label: 'SEO Settings',
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
          admin: { description: 'Under 60 characters recommended' },
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          admin: { description: 'Under 160 characters recommended' },
        },
        {
          name: 'ogImage',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'noIndex',
          type: 'checkbox',
          defaultValue: false,
        },
      ],
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
        description: 'Show on homepage portfolio showcase slider',
      },
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
