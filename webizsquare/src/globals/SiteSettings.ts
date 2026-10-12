import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  admin: {
    group: 'Settings & SEO',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'General & Branding',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'siteName',
                  type: 'text',
                  defaultValue: 'Webiz Square',
                  required: true,
                  admin: { width: '50%' },
                },
                {
                  name: 'tagline',
                  type: 'text',
                  defaultValue: 'Driving Business Growth Through Smart Digital Traffic',
                  admin: { width: '50%' },
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'logo',
                  label: 'Primary Logo (Dark on Light)',
                  type: 'upload',
                  relationTo: 'media',
                  admin: { width: '33%' },
                },
                {
                  name: 'logoDark',
                  label: 'White Logo (Light on Dark)',
                  type: 'upload',
                  relationTo: 'media',
                  admin: { width: '33%' },
                },
                {
                  name: 'favicon',
                  label: 'Favicon',
                  type: 'upload',
                  relationTo: 'media',
                  admin: { width: '33%' },
                },
              ],
            },
          ],
        },
        {
          label: 'Contact & Business Info',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'phone',
                  type: 'text',
                  defaultValue: '+91 9172944434',
                  admin: { width: '33%' },
                },
                {
                  name: 'email',
                  type: 'email',
                  defaultValue: 'contact@webizsquare.com',
                  admin: { width: '33%' },
                },
                {
                  name: 'whatsappNumber',
                  type: 'text',
                  defaultValue: '919172944434',
                  admin: { width: '33%', description: 'Country code without +, e.g. 919172944434' },
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'address',
                  type: 'textarea',
                  defaultValue: 'Webiz Square, Nashik, Maharashtra, India',
                  admin: { width: '50%' },
                },
                {
                  name: 'businessHours',
                  type: 'text',
                  defaultValue: 'Mon - Sat: 9:00 AM - 7:00 PM',
                  admin: { width: '50%' },
                },
              ],
            },
            {
              type: 'group',
              name: 'socialLinks',
              label: 'Social Profiles',
              fields: [
                {
                  type: 'row',
                  fields: [
                    { name: 'linkedin', type: 'text', admin: { width: '33%' } },
                    { name: 'twitter', type: 'text', label: 'Twitter / X', admin: { width: '33%' } },
                    { name: 'instagram', type: 'text', admin: { width: '33%' } },
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    { name: 'facebook', type: 'text', admin: { width: '33%' } },
                    { name: 'github', type: 'text', admin: { width: '33%' } },
                    { name: 'youtube', type: 'text', admin: { width: '33%' } },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'SEO Defaults & Schema',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'defaultMetaTitle',
                  type: 'text',
                  defaultValue: 'Webiz Square - Award Winning Digital Agency & Software House',
                  admin: { width: '50%', description: 'Used when page has no custom title' },
                },
                {
                  name: 'titleTemplate',
                  type: 'text',
                  defaultValue: '%s | Webiz Square',
                  admin: { width: '50%', description: 'Format pattern for subpages' },
                },
              ],
            },
            {
              name: 'defaultMetaDescription',
              type: 'textarea',
              defaultValue: 'We build lightning-fast, SEO-optimized digital experiences that drive measurable growth. From stunning websites to powerful web applications, we engineer success.',
              admin: { description: 'Under 160 characters recommended for Google SERP snippet' },
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'canonicalBaseUrl',
                  type: 'text',
                  defaultValue: 'https://webizsquare.com',
                  admin: { width: '50%', description: 'Canonical root domain (no trailing slash)' },
                },
                {
                  name: 'robotsIndexing',
                  type: 'select',
                  defaultValue: 'index_follow',
                  options: [
                    { label: 'Index, Follow (Standard Production)', value: 'index_follow' },
                    { label: 'Noindex, Nofollow (Staging / Private)', value: 'noindex_nofollow' },
                  ],
                  admin: { width: '50%' },
                },
              ],
            },
            {
              name: 'defaultOgImage',
              label: 'Default Social Share Image (OG Image 1200x630)',
              type: 'upload',
              relationTo: 'media',
            },
            {
              type: 'group',
              name: 'organizationSchema',
              label: 'Organization Structured Data (JSON-LD)',
              fields: [
                {
                  type: 'row',
                  fields: [
                    { name: 'legalName', type: 'text', defaultValue: 'Webiz Square Private Limited', admin: { width: '50%' } },
                    { name: 'founder', type: 'text', defaultValue: 'Priyanka Shejwalkar', admin: { width: '50%' } },
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    { name: 'areaServed', type: 'text', defaultValue: 'Global, India, USA, UAE, UK', admin: { width: '50%' } },
                    { name: 'priceRange', type: 'text', defaultValue: '$$', admin: { width: '50%' } },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Marketing & Analytics',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'gtmId',
                  label: 'Google Tag Manager Container ID',
                  type: 'text',
                  admin: { width: '50%', description: 'e.g. GTM-XXXXXXX' },
                },
                {
                  name: 'ga4Id',
                  label: 'Google Analytics 4 Measurement ID',
                  type: 'text',
                  admin: { width: '50%', description: 'e.g. G-XXXXXXXXXX' },
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'searchConsoleMeta',
                  label: 'Google Search Console Verification Tag / Content',
                  type: 'text',
                  admin: { width: '50%', description: 'Content value from meta google-site-verification' },
                },
                {
                  name: 'clarityId',
                  label: 'Microsoft Clarity Project ID',
                  type: 'text',
                  admin: { width: '50%', description: 'Free heatmaps & session recordings ID' },
                },
              ],
            },
            {
              name: 'metaPixelId',
              label: 'Meta / Facebook Pixel ID',
              type: 'text',
              admin: { description: 'e.g. 123456789012345' },
            },
            {
              name: 'customHeadScripts',
              label: 'Custom Head Scripts',
              type: 'textarea',
              admin: {
                description: 'HTML scripts inserted into <head>. Caution: only enter trusted tracking scripts.',
              },
            },
            {
              name: 'customBodyScripts',
              label: 'Custom Body Scripts (Noscript / Footer tags)',
              type: 'textarea',
              admin: {
                description: 'HTML scripts inserted before </body>.',
              },
            },
          ],
        },
        {
          label: 'Navigation & Links',
          fields: [
            {
              name: 'headerLinks',
              type: 'array',
              fields: [
                { name: 'label', type: 'text', required: true },
                { name: 'url', type: 'text', required: true },
              ],
            },
            {
              name: 'headerCta',
              type: 'group',
              fields: [
                { name: 'label', type: 'text', defaultValue: 'Get a Quote' },
                { name: 'url', type: 'text', defaultValue: '/quote' },
              ],
            },
            {
              name: 'footerLinks',
              type: 'array',
              fields: [
                { name: 'label', type: 'text', required: true },
                { name: 'url', type: 'text', required: true },
              ],
            },
            {
              name: 'copyrightText',
              type: 'text',
              defaultValue: '© 2026 Webiz Square. All rights reserved.',
            },
          ],
        },
      ],
    },
  ],
}
