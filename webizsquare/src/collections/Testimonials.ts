import type { CollectionConfig } from 'payload'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'company', 'rating', 'source', 'featured'],
    group: 'Content',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
          admin: { width: '50%' },
        },
        {
          name: 'company',
          type: 'text',
          admin: { width: '50%' },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'role',
          type: 'text',
          admin: { width: '50%' },
        },
        {
          name: 'location',
          type: 'text',
          admin: { width: '50%', description: 'e.g. Nashik, Mumbai, Pune' },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'rating',
          type: 'number',
          min: 1,
          max: 5,
          defaultValue: 5,
          required: true,
          admin: { width: '33%' },
        },
        {
          name: 'source',
          type: 'select',
          defaultValue: 'google',
          options: [
            { label: 'Google Review', value: 'google' },
            { label: 'Clutch', value: 'clutch' },
            { label: 'Direct Feedback', value: 'direct' },
            { label: 'LinkedIn', value: 'linkedin' },
          ],
          admin: { width: '33%' },
        },
        {
          name: 'tag',
          type: 'text',
          admin: { width: '33%', description: 'e.g. ENTERPRISE ERP SOFTWARE' },
        },
      ],
    },
    {
      name: 'quote',
      type: 'textarea',
      required: true,
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        position: 'sidebar',
        description: 'Show on homepage testimonial slider',
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
