import type { GlobalConfig } from 'payload'

export const About: GlobalConfig = {
  slug: 'about',
  label: 'About Page',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero Section',
          fields: [
            { name: 'heroHeadline', type: 'text', defaultValue: 'About' },
            { name: 'heroHighlightedWord', type: 'text', defaultValue: 'Webiz Square' },
            { name: 'heroDescription', type: 'textarea', defaultValue: 'We are a team of digital marketing experts, AI engineers, and creative strategists dedicated to helping businesses achieve extraordinary growth.' },
            { name: 'companyHighlightsTitle', type: 'text', defaultValue: 'Company Highlights' },
            { name: 'companyHighlightsSubtitle', type: 'text', defaultValue: 'Rapid business growth, real results.' },
            {
              name: 'companyStats',
              type: 'array',
              minRows: 1,
              fields: [
                { name: 'value', type: 'text', required: true },
                { name: 'label', type: 'text', required: true },
              ],
            },
            {
              name: 'companyBullets',
              type: 'array',
              fields: [
                { name: 'text', type: 'text', required: true },
              ],
            },
          ],
        },
        {
          label: 'Our Story',
          fields: [
            { name: 'storyHeadline', type: 'text', defaultValue: 'Our' },
            { name: 'storyHighlightedWord', type: 'text', defaultValue: 'Story' },
            {
              name: 'storyParagraphs',
              type: 'array',
              fields: [{ name: 'text', type: 'textarea', required: true }],
            },
            { name: 'storyHighlightText', type: 'textarea', defaultValue: 'Today, we combine cutting-edge technology with proven marketing strategies to empower our clients in a fast-evolving digital landscape.' },
            {
              name: 'storyStats',
              type: 'array',
              minRows: 1,
              fields: [
                { name: 'value', type: 'text', required: true },
                { name: 'label', type: 'text', required: true },
              ],
            },
          ],
        },
        {
          label: 'Core Values',
          fields: [
            { name: 'valuesHeadline', type: 'text', defaultValue: 'Our Core' },
            { name: 'valuesHighlightedWord', type: 'text', defaultValue: 'Values' },
            { name: 'valuesSubtitle', type: 'text', defaultValue: 'The principles that guide everything we do' },
            {
              name: 'values',
              type: 'array',
              minRows: 1,
              fields: [
                { name: 'title', type: 'text', required: true },
                { name: 'description', type: 'textarea', required: true },
                { name: 'iconName', type: 'text', required: true, admin: { description: 'Lucide React icon name (e.g. Target, Zap, Heart, Award)' } },
              ],
            },
          ],
        },
        {
          label: 'Journey',
          fields: [
            { name: 'journeyHeadline', type: 'text', defaultValue: 'Our' },
            { name: 'journeyHighlightedWord', type: 'text', defaultValue: 'Journey' },
            { name: 'journeySubtitle', type: 'text', defaultValue: 'Key milestones in our growth story' },
            {
              name: 'timeline',
              type: 'array',
              minRows: 1,
              fields: [
                { name: 'year', type: 'text', required: true },
                { name: 'title', type: 'text', required: true },
                { name: 'description', type: 'textarea', required: true },
              ],
            },
          ],
        },
        {
          label: 'Team & CTA',
          fields: [
            { name: 'teamHeadline', type: 'text', defaultValue: 'Our' },
            { name: 'teamHighlightedWord', type: 'text', defaultValue: 'Team' },
            { name: 'teamSubtitle', type: 'text', defaultValue: 'A diverse team of experts working together to deliver exceptional results.' },
            {
              name: 'teamStats',
              type: 'array',
              minRows: 1,
              fields: [
                { name: 'value', type: 'text', required: true },
                { name: 'label', type: 'text', required: true },
              ],
            },
            { name: 'ctaHeadline', type: 'text', defaultValue: 'Ready to Work Together?' },
            { name: 'ctaSubtitle', type: 'text', defaultValue: 'Find out how we can help grow your business with our proven strategies and AI-powered custom software solutions.' },
            { name: 'ctaButtonText', type: 'text', defaultValue: 'Contact Us Today' },
          ],
        },
      ],
    },
  ],
}
