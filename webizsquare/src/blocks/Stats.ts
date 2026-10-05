import type { Block } from 'payload'

export const StatsBlock: Block = {
  slug: 'stats',
  fields: [
    {
      name: 'headline',
      type: 'text',
      required: true,
      defaultValue: 'Numbers That',
    },
    {
      name: 'highlightedWord',
      type: 'text',
      required: true,
      defaultValue: 'Speak',
    },
    {
      name: 'subheadline',
      type: 'text',
      required: true,
      defaultValue: "We are proud of the impact we've made globally.",
    },
    {
      name: 'stats',
      type: 'array',
      required: true,
      minRows: 1,
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
