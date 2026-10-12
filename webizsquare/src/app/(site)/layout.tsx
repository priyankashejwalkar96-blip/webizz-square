import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "../globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { MarketingScripts } from "@/components/MarketingScripts";
import { FloatingActions } from "@/components/FloatingActions";
import { getPayload } from 'payload';
import configPromise from '@/payload.config';

const outfit = Outfit({ subsets: ["latin"], display: "swap" });

export async function generateMetadata(): Promise<Metadata> {
  try {
    const payload = await getPayload({ config: configPromise });
    const settings = await payload.findGlobal({ slug: 'site-settings' }) as any;

    const siteName = settings?.siteName || 'Webiz Square';
    const titleTemplate = settings?.titleTemplate || `%s | ${siteName}`;
    const defaultTitle = settings?.defaultMetaTitle || `${siteName} - Premium Digital Agency`;
    const description = settings?.defaultMetaDescription || 'We build lightning-fast, SEO-optimized digital experiences that drive measurable growth. From stunning websites to powerful web applications, we engineer success.';
    const canonical = settings?.canonicalBaseUrl || 'https://webizsquare.com';
    const isNoIndex = settings?.robotsIndexing === 'noindex_nofollow';

    return {
      metadataBase: new URL(canonical),
      title: {
        default: defaultTitle,
        template: titleTemplate,
      },
      description,
      robots: {
        index: !isNoIndex,
        follow: !isNoIndex,
      },
      openGraph: {
        title: defaultTitle,
        description,
        url: canonical,
        siteName,
        locale: 'en_US',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: defaultTitle,
        description,
      },
    };
  } catch (err) {
    return {
      title: "Webiz Square - Premium Digital Agency",
      description: "A very fast, SEO-first, secure website with a full admin dashboard, built to rank higher on Google and bring in more clients globally.",
    };
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let headerServices: any[] = [];
  let siteSettings: any = null;

  try {
    const payload = await getPayload({ config: configPromise });

    // Fetch site settings for marketing scripts and contact info
    siteSettings = await payload.findGlobal({ slug: 'site-settings' }).catch(() => null);

    const { docs } = await payload.find({
      collection: 'services',
      where: {
        isActive: { equals: true }
      },
      limit: 20
    });
    headerServices = docs.map(doc => ({ name: doc.title, slug: doc.slug }));
  } catch (err) {
    console.error("Could not fetch settings or services for layout", err);
  }

  const phone = siteSettings?.phone || '+91 9172944434';
  const whatsappNumber = siteSettings?.whatsappNumber || '919172944434';

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <MarketingScripts settings={siteSettings} />
      </head>
      <body className={`${outfit.className} antialiased bg-background text-foreground selection:bg-[#ff5987] selection:text-white overflow-x-clip`} suppressHydrationWarning>
        <ThemeProvider>
          <Header services={headerServices} />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <FloatingActions phone={phone} whatsappNumber={whatsappNumber} />
        </ThemeProvider>
      </body>
    </html>
  );
}
