import type { Block } from 'payload'

export const BrandsBlock: Block = {
  slug: 'brands',
  fields: [
    {
      name: 'headline',
      type: 'text',
      required: true,
      defaultValue: 'Brands We',
    },
    {
      name: 'highlightedWord',
      type: 'text',
      required: true,
      defaultValue: 'Work With',
    },
    {
      name: 'subheadline',
      type: 'textarea',
      required: true,
      defaultValue: 'Trusted by leading brands across industries driving digital transformation.',
    },
    {
      name: 'logos',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}
