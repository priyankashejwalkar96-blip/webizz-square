import type { GlobalConfig } from 'payload'

export const ContactPage: GlobalConfig = {
  slug: 'contact-page',
  label: 'Contact Page',
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
            { name: 'heroBadgeText', type: 'text', defaultValue: 'Contact Webiz Square' },
            { name: 'heroHeadline', type: 'text', defaultValue: "Let's Start a" },
            { name: 'heroHighlightedWord', type: 'text', defaultValue: 'Conversation' },
            { name: 'heroDescription', type: 'textarea', defaultValue: "Have questions? We'd love to hear from you. Share a few details and we'll respond as soon as possible." },
            { name: 'whatsappButtonText', type: 'text', defaultValue: 'Chat on WhatsApp' },
            { name: 'callButtonText', type: 'text', defaultValue: 'Call Now' },
          ],
        },
        {
          label: 'Contact Info',
          fields: [
            { name: 'contactHeadline', type: 'text', defaultValue: 'Get in' },
            { name: 'contactHighlightedWord', type: 'text', defaultValue: 'Touch' },
            { name: 'phoneNumber', type: 'text', defaultValue: '+91 91729 44434' },
            { name: 'emailAddress', type: 'text', defaultValue: 'hello@webizsquare.com' },
            { name: 'locationText', type: 'textarea', defaultValue: 'Webiz Square HQ, College Road,\nNashik, Maharashtra 422005' },
            { name: 'businessHours', type: 'text', defaultValue: 'Mon - Sat: 9:00 AM - 6:00 PM' },
          ],
        },
        {
          label: 'Contact Form',
          fields: [
            { name: 'formTitle', type: 'text', defaultValue: 'Send us a Message' },
            { name: 'formSubtitle', type: 'text', defaultValue: "We'll get back within 24 hours." },
            { name: 'formButtonText', type: 'text', defaultValue: 'Get Growth Audit' },
          ],
        },
        {
          label: 'Map Section',
          fields: [
            { name: 'mapHeadline', type: 'text', defaultValue: 'Visit Our' },
            { name: 'mapHighlightedWord', type: 'text', defaultValue: 'Office' },
            { name: 'mapSubtitle', type: 'textarea', defaultValue: "We're located in Nashik, Maharashtra. Feel free to drop by for a coffee and discuss your next big idea during business hours." },
            { name: 'mapEmbedUrl', type: 'text', defaultValue: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119981.38706385208!2d73.72107759882206!3d20.000109968434692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdebaa0967d1655%3A0xc07a216fcb11a5dc!2sNashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1714488390772!5m2!1sen!2sin' },
          ],
        },
      ],
    },
  ],
}
