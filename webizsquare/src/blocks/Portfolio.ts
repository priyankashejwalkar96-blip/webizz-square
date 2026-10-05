import type { Block } from 'payload'

export const PortfolioBlock: Block = {
  slug: 'portfolio',
  fields: [
    {
      name: 'label',
      type: 'text',
      required: true,
      defaultValue: 'PROVEN TRACK RECORD',
    },
    {
      name: 'headline',
      type: 'text',
      required: true,
      defaultValue: 'Transformative',
    },
    {
      name: 'highlightedWord',
      type: 'text',
      required: true,
      defaultValue: 'Success',
    },
    {
      name: 'subheadline',
      type: 'textarea',
      required: true,
      defaultValue: 'Discover how our bespoke strategies brought victory to our clients.',
    },
    {
      name: 'projects',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'category',
          type: 'text',
          required: true,
        },
        {
          name: 'stat',
          type: 'text',
          required: true,
        },
        {
          name: 'client',
          type: 'text',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'desc',
          type: 'textarea',
          required: true,
        },
        {
          name: 'tags',
          type: 'array',
          fields: [
            {
              name: 'tag',
              type: 'text',
              required: true,
            },
          ],
        },
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
