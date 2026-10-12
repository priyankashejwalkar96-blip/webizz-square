import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'https://webizsquare.com'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin',
          '/api/',
          '/thank-you',
          '/*?s=',
          '/wp-admin/',
          '/wp-login.php',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
