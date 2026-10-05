import type { CollectionConfig } from 'payload'
import { HeroBlock } from '../blocks/Hero'
import { AboutBlock } from '../blocks/About'
import { BrandsBlock } from '../blocks/Brands'
import { ServicesBlock } from '../blocks/Services'
import { PortfolioBlock } from '../blocks/Portfolio'
import { StatsBlock } from '../blocks/Stats'
import { TestimonialsBlock } from '../blocks/Testimonials'
import { FAQBlock } from '../blocks/FAQ'
import { ContactBlock } from '../blocks/Contact'

export const Pages: CollectionConfig = {
  slug: 'pages',
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
      index: true,
    },
    {
      name: 'layout',
      type: 'blocks',
      blocks: [
        HeroBlock,
        AboutBlock,
        BrandsBlock,
        ServicesBlock,
        PortfolioBlock,
        StatsBlock,
        TestimonialsBlock,
        FAQBlock,
        ContactBlock,
      ],
    },
  ],
}
