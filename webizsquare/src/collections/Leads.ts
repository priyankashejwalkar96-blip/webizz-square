import type { CollectionConfig } from 'payload'

export const Leads: CollectionConfig = {
  slug: 'leads',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'phone', 'serviceInterested', 'status', 'createdAt'],
    group: 'Sales & Inquiries',
  },
  access: {
    create: () => true, // Public API or forms can submit leads
    read: ({ req: { user } }) => Boolean(user), // Authenticated users (admin/sales) only
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Lead Details',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'name',
                  type: 'text',
                  required: true,
                  admin: { width: '50%' },
                },
                {
                  name: 'company',
                  type: 'text',
                  admin: { width: '50%' },
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'email',
                  type: 'email',
                  required: true,
                  admin: { width: '50%' },
                },
                {
                  name: 'phone',
                  type: 'text',
                  admin: { width: '50%' },
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'serviceInterested',
                  type: 'select',
                  options: [
                    { label: 'Website Development', value: 'Website Development' },
                    { label: 'Mobile Application Development', value: 'Mobile Application' },
                    { label: 'ERP Software Development', value: 'ERP Software' },
                    { label: 'Search Engine Optimization (SEO)', value: 'SEO' },
                    { label: 'Graphic & UI/UX Design', value: 'Graphic Design' },
                    { label: 'Social Media Marketing', value: 'Social Media' },
                    { label: 'AI & Automation Integration', value: 'AI Integration' },
                    { label: 'Other IT Services', value: 'Other' },
                  ],
                  admin: { width: '50%' },
                },
                {
                  name: 'budgetRange',
                  type: 'select',
                  options: [
                    { label: 'Under ₹25,000 / <$500', value: 'under_25k' },
                    { label: '₹25,000 - ₹50,000 / $500 - $1,000', value: '25k_50k' },
                    { label: '₹50,000 - ₹1,50,000 / $1,000 - $3,000', value: '50k_150k' },
                    { label: '₹1,50,000 - ₹5,00,000 / $3,000 - $10,000', value: '150k_500k' },
                    { label: '₹5,00,000+ / $10,000+', value: 'above_500k' },
                  ],
                  admin: { width: '50%' },
                },
              ],
            },
            {
              name: 'message',
              type: 'textarea',
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'sourceType',
                  type: 'select',
                  defaultValue: 'quote_form',
                  options: [
                    { label: 'Quote Modal', value: 'quote_form' },
                    { label: 'Contact Page Form', value: 'contact_form' },
                    { label: 'Homepage Growth Audit', value: 'growth_audit' },
                    { label: 'WhatsApp Click', value: 'whatsapp_click' },
                    { label: 'Phone Call Click', value: 'call_click' },
                    { label: 'Career Application', value: 'career' },
                  ],
                  admin: { width: '50%' },
                },
                {
                  name: 'timeline',
                  type: 'select',
                  options: [
                    { label: 'Immediate / Urgent', value: 'immediate' },
                    { label: '1 - 2 Weeks', value: '1_2_weeks' },
                    { label: '1 Month', value: '1_month' },
                    { label: 'Exploring / Future', value: 'future' },
                  ],
                  admin: { width: '50%' },
                },
              ],
            },
          ],
        },
        {
          label: 'CRM & Management',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'status',
                  type: 'select',
                  defaultValue: 'new',
                  options: [
                    { label: 'New', value: 'new' },
                    { label: 'Contacted', value: 'contacted' },
                    { label: 'Qualified', value: 'qualified' },
                    { label: 'Proposal Sent', value: 'proposal_sent' },
                    { label: 'Won', value: 'won' },
                    { label: 'Lost', value: 'lost' },
                    { label: 'Spam', value: 'spam' },
                  ],
                  admin: { width: '33%' },
                },
                {
                  name: 'priority',
                  type: 'select',
                  defaultValue: 'medium',
                  options: [
                    { label: 'Low', value: 'low' },
                    { label: 'Medium', value: 'medium' },
                    { label: 'High', value: 'high' },
                    { label: 'Urgent', value: 'urgent' },
                  ],
                  admin: { width: '33%' },
                },
                {
                  name: 'expectedValue',
                  type: 'number',
                  admin: {
                    width: '33%',
                    description: 'Expected project revenue in INR or USD',
                  },
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'assignedTo',
                  type: 'relationship',
                  relationTo: 'users',
                  admin: { width: '50%' },
                },
                {
                  name: 'followUpDate',
                  type: 'date',
                  admin: { width: '50%' },
                },
              ],
            },
            {
              name: 'internalNotes',
              type: 'textarea',
              admin: {
                description: 'Internal notes regarding communication and proposals.',
              },
            },
          ],
        },
        {
          label: 'Marketing & Attribution',
          fields: [
            {
              type: 'row',
              fields: [
                { name: 'utmSource', type: 'text', admin: { width: '33%' } },
                { name: 'utmMedium', type: 'text', admin: { width: '33%' } },
                { name: 'utmCampaign', type: 'text', admin: { width: '33%' } },
              ],
            },
            {
              type: 'row',
              fields: [
                { name: 'utmTerm', type: 'text', admin: { width: '50%' } },
                { name: 'utmContent', type: 'text', admin: { width: '50%' } },
              ],
            },
            {
              type: 'row',
              fields: [
                { name: 'gclid', type: 'text', admin: { width: '50%', description: 'Google Ads Click ID' } },
                { name: 'fbclid', type: 'text', admin: { width: '50%', description: 'Meta Click ID' } },
              ],
            },
            {
              type: 'row',
              fields: [
                { name: 'landingPage', type: 'text', admin: { width: '50%' } },
                { name: 'referrer', type: 'text', admin: { width: '50%' } },
              ],
            },
            {
              type: 'row',
              fields: [
                { name: 'country', type: 'text', admin: { width: '50%' } },
                { name: 'device', type: 'text', admin: { width: '50%' } },
              ],
            },
          ],
        },
      ],
    },
  ],
}
