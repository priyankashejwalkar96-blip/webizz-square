import type { Block } from 'payload'

export const ContactBlock: Block = {
  slug: 'contact',
  fields: [
    {
      name: 'headline',
      type: 'text',
      required: true,
      defaultValue: 'Ready to',
    },
    {
      name: 'highlightedWord',
      type: 'text',
      required: true,
      defaultValue: 'Transform',
    },
    {
      name: 'headlineEnd',
      type: 'text',
      required: true,
      defaultValue: 'Your Business?',
    },
    {
      name: 'bullets',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'formTitle',
      type: 'text',
      required: true,
      defaultValue: 'Get Your Free Growth Audit',
    },
  ],
}
