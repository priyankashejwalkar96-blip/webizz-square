import type { CollectionConfig } from 'payload'

export const Subscribers: CollectionConfig = {
  slug: 'subscribers',
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'source', 'status', 'createdAt'],
    group: 'Sales & Inquiries',
  },
  access: {
    create: () => true,
    read: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: 'email',
      type: 'email',
      required: true,
      unique: true,
    },
    {
      name: 'source',
      type: 'text',
      defaultValue: 'footer_newsletter',
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'subscribed',
      options: [
        { label: 'Subscribed', value: 'subscribed' },
        { label: 'Unsubscribed', value: 'unsubscribed' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
