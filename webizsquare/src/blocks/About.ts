import type { Block } from 'payload'

export const AboutBlock: Block = {
  slug: 'about',
  fields: [
    {
      name: 'headline',
      type: 'text',
      required: true,
      defaultValue: 'About',
    },
    {
      name: 'highlightedWord',
      type: 'text',
      required: true,
      defaultValue: 'Webiz Square',
    },
    {
      name: 'subheadline',
      type: 'textarea',
      required: true,
      defaultValue: "As a leading Digital Agency, we offer strategic solutions tailored to elevate your brand's digital presence.",
    },
    {
      name: 'tabs',
      type: 'array',
      required: true,
      minRows: 1,
      maxRows: 6,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'heading',
          type: 'text',
          required: true,
        },
        {
          name: 'desc',
          type: 'textarea',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'stats',
      type: 'array',
      maxRows: 3,
      fields: [
        {
          name: 'value',
          type: 'text',
          required: true,
        },
        {
          name: 'label',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
