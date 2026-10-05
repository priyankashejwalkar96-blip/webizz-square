import type { Block } from 'payload'

export const FAQBlock: Block = {
  slug: 'faq',
  fields: [
    {
      name: 'headline',
      type: 'text',
      required: true,
      defaultValue: 'Frequently Asked',
    },
    {
      name: 'highlightedWord',
      type: 'text',
      required: true,
      defaultValue: 'Questions',
    },
    {
      name: 'faqs',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'question',
          type: 'text',
          required: true,
        },
        {
          name: 'answer',
          type: 'textarea',
          required: true,
        },
      ],
    },
  ],
}
