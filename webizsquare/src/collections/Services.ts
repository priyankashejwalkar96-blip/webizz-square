import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'title',
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
            if (value) return value;
            if (data?.title) {
              return data.title
                .toLowerCase()
                .replace(/ /g, '-')
                .replace(/[^\w-]+/g, '');
            }
            return value;
          }
        ]
      }
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'icon',
      type: 'select',
      options: [
        { label: 'Layout', value: 'Layout' },
        { label: 'Smartphone', value: 'Smartphone' },
        { label: 'Database', value: 'Database' },
        { label: 'Search', value: 'Search' },
        { label: 'Globe', value: 'Globe' },
        { label: 'PenTool', value: 'PenTool' },
        { label: 'Share2', value: 'Share2' },
        { label: 'Bot', value: 'Bot' },
        { label: 'Zap', value: 'Zap' },
        { label: 'Shield', value: 'Shield' }
      ],
      required: true,
    },
    {
      name: 'features',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'feature',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        position: 'sidebar',
        description: 'Show this service in the dropdown and enable its page.',
      },
    }
  ],
}
