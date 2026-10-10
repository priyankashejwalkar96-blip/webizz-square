import { getPayload } from 'payload';
import configPromise from '@/payload.config';
import ServiceClient from './ServiceClient';

const serviceData = {
  'website-development': {
    title: 'Website Development',
    description: 'We build high-performance, responsive websites that drive conversions and deliver exceptional user experiences.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    features: ['Custom UI/UX Design', 'Responsive Development', 'SEO Optimization', 'Performance Tuning'],
    icon: 'Layout',
  },
  'application-development': {
    title: 'Application Development',
    description: 'Custom mobile and web applications designed to scale with your business and engage your users.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop',
    features: ['iOS & Android Apps', 'Cross-platform Solutions', 'Scalable Architecture', 'API Integration'],
    icon: 'Smartphone',
  },
  'all-it-services': {
    title: 'All IT Services',
    description: 'Comprehensive IT solutions to streamline your operations, enhance security, and drive digital transformation.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
    features: ['Cloud Infrastructure', 'IT Consulting', 'Network Security', '24/7 Support'],
    icon: 'Database',
  },
  'erp-software-development': {
    title: 'ERP Software Development',
    description: 'Tailored Enterprise Resource Planning systems to integrate and automate your core business processes.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop',
    features: ['Process Automation', 'Custom Workflows', 'Data Analytics', 'Legacy System Integration'],
    icon: 'Layout',
  },
  'graphics-designing': {
    title: 'Graphics Designing',
    description: 'Visually stunning graphics and branding materials that capture your brand identity and captivate your audience.',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop',
    features: ['Brand Identity', 'UI/UX Design', 'Marketing Materials', 'Illustrations'],
    icon: 'PenTool',
  },
  'search-engine-optimization': {
    title: 'Search Engine Optimization',
    description: 'Data-driven SEO strategies to improve your search rankings, increase organic traffic, and boost visibility.',
    image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=1974&auto=format&fit=crop',
    features: ['Keyword Research', 'On-page SEO', 'Technical SEO', 'Link Building'],
    icon: 'Search',
  },
  'social-media-optimization': {
    title: 'Social Media Optimization',
    description: 'Engaging social media campaigns that build brand awareness, foster community, and drive meaningful interactions.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop',
    features: ['Content Strategy', 'Community Management', 'Paid Social Campaigns', 'Analytics & Reporting'],
    icon: 'Share2',
  },
  'software-development': {
    title: 'Software Development',
    description: 'Robust, scalable, and secure custom software solutions tailored to your unique business requirements.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
    features: ['Custom Software', 'SaaS Development', 'System Integration', 'Quality Assurance'],
    icon: 'Layout',
  },
  'website-hosting': {
    title: 'Website Hosting',
    description: 'Fast, secure, and reliable web hosting solutions with guaranteed uptime to keep your business online.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop',
    features: ['High Uptime', 'Automated Backups', 'SSL Certificates', '24/7 Monitoring'],
    icon: 'Database',
  }
};

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  let dbService = null;
  try {
    const payload = await getPayload({ config: configPromise });
    const { docs } = await payload.find({
      collection: 'services',
      where: {
        slug: { equals: slug }
      },
      limit: 1
    });
    if (docs.length > 0) {
      dbService = docs[0];
    }
  } catch (e) {
    console.error("Could not fetch service", e);
  }

  const fallbackService = serviceData[slug as keyof typeof serviceData] || serviceData['all-it-services'];
  
  let iconName = fallbackService.icon;
  if (dbService?.icon) {
    iconName = dbService.icon;
  }

  // Merge or use DB data if available
  const service = {
    title: dbService?.title || fallbackService.title,
    description: dbService?.description || fallbackService.description,
    image: (dbService?.image && typeof dbService.image === 'object' && 'url' in dbService.image) ? dbService.image.url : fallbackService.image,
    features: dbService?.features?.map((f: any) => f.feature) || fallbackService.features,
    icon: iconName,
  };

  return <ServiceClient service={service} />;
}
