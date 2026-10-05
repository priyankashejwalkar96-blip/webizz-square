import type { Block } from 'payload'

export const ServicesBlock: Block = {
  slug: 'services',
  fields: [
    {
      name: 'headline',
      type: 'text',
      required: true,
      defaultValue: 'Our',
    },
    {
      name: 'highlightedWord',
      type: 'text',
      required: true,
      defaultValue: 'Services',
    },
    {
      name: 'subheadline',
      type: 'textarea',
      required: true,
      defaultValue: 'End-to-end digital solutions that drive measurable growth.',
    },
    {
      name: 'services',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'icon',
          type: 'select',
          required: true,
          options: [
            { label: 'Globe', value: 'globe' },
            { label: 'Smartphone', value: 'smartphone' },
            { label: 'Pen Tool', value: 'pen-tool' },
            { label: 'Share', value: 'share' },
            { label: 'Search', value: 'search' },
            { label: 'Bar Chart', value: 'bar-chart' },
            { label: 'Bot', value: 'bot' },
            { label: 'Zap', value: 'zap' },
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
