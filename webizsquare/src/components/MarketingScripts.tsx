import Script from 'next/script'

interface MarketingScriptsProps {
  settings?: {
    gtmId?: string
    ga4Id?: string
    clarityId?: string
    metaPixelId?: string
    searchConsoleMeta?: string
    customHeadScripts?: string
    customBodyScripts?: string
    organizationSchema?: {
      legalName?: string
      founder?: string
      areaServed?: string
      priceRange?: string
    }
    siteName?: string
    phone?: string
    email?: string
    address?: string
    socialLinks?: {
      linkedin?: string
      twitter?: string
      instagram?: string
      facebook?: string
      github?: string
      youtube?: string
    }
  }
}

export function MarketingScripts({ settings }: MarketingScriptsProps) {
  if (!settings) return null

  const {
    gtmId,
    ga4Id,
    clarityId,
    metaPixelId,
    searchConsoleMeta,
    customHeadScripts,
    customBodyScripts,
    organizationSchema,
    siteName = 'Webiz Square',
    phone = '+91 9172944434',
    email = 'contact@webizsquare.com',
    address = 'Nashik, Maharashtra, India',
    socialLinks,
  } = settings

  // Organization JSON-LD Schema (Section 12 specification)
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: siteName,
    legalName: organizationSchema?.legalName || 'Webiz Square Private Limited',
    url: 'https://webizsquare.com',
    logo: 'https://webizsquare.com/white-logo.png',
    telephone: phone,
    email: email,
    founder: {
      '@type': 'Person',
      name: organizationSchema?.founder || 'Priyanka Shejwalkar',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: address,
      addressLocality: 'Nashik',
      addressRegion: 'Maharashtra',
      addressCountry: 'India',
    },
    priceRange: organizationSchema?.priceRange || '$$',
    areaServed: organizationSchema?.areaServed || 'Global',
    sameAs: Object.values(socialLinks || {}).filter(Boolean),
  }

  return (
    <>
      {/* 1. Google Search Console Verification */}
      {searchConsoleMeta && (
        <meta name="google-site-verification" content={searchConsoleMeta} />
      )}

      {/* 2. Structured Data: Organization JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />

      {/* 3. Google Tag Manager (GTM) */}
      {gtmId && (
        <>
          <Script
            id="google-tag-manager"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`,
            }}
          />
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        </>
      )}

      {/* 4. Google Analytics 4 (GA4) Direct Fallback */}
      {ga4Id && !gtmId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`}
            strategy="afterInteractive"
          />
          <Script
            id="google-analytics-ga4"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${ga4Id}', { page_path: window.location.pathname });`,
            }}
          />
        </>
      )}

      {/* 5. Microsoft Clarity */}
      {clarityId && (
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "${clarityId}");`,
          }}
        />
      )}

      {/* 6. Meta / Facebook Pixel */}
      {metaPixelId && (
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${metaPixelId}');
fbq('track', 'PageView');`,
          }}
        />
      )}

      {/* 7. Custom Head Scripts (Configured in Payload CMS Site Settings) */}
      {customHeadScripts && (
        <div
          id="custom-head-scripts"
          style={{ display: 'none' }}
          dangerouslySetInnerHTML={{ __html: customHeadScripts }}
        />
      )}

      {/* 8. Custom Body Scripts */}
      {customBodyScripts && (
        <div
          id="custom-body-scripts"
          style={{ display: 'none' }}
          dangerouslySetInnerHTML={{ __html: customBodyScripts }}
        />
      )}
    </>
  )
}
