import type { CollectionConfig } from 'payload'

export const Policies: CollectionConfig = {
  slug: 'policies',
  admin: {
    useAsTitle: 'title',
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
      admin: {
        description: 'e.g., privacy-policy or terms-conditions',
      }
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
    {
      name: 'lastUpdated',
      type: 'date',
    }
  ],
}
