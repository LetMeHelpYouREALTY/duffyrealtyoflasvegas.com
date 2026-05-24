import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import Script from 'next/script'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
  preload: false, // Only preload primary font
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.duffyrealtyoflasvegas.com'),
  title: 'Dr. Jan Duffy - Award Winning Buyer Agent | Beazer Homes Las Vegas, NV',
  description: 'Dr. Jan Duffy is the Award Winning Buyer Agent for Beazer Homes in Las Vegas, Nevada. Find new construction homes, floor plans, and communities. Expert guidance for buying Beazer Homes in Las Vegas, Henderson, and surrounding areas.',
  alternates: {
    canonical: 'https://www.duffyrealtyoflasvegas.com',
  },
  verification: {
    // Add your Google Search Console verification code here when you verify your site
    // Example: google: 'your-verification-code-here'
  },
  openGraph: {
    title: 'Dr. Jan Duffy - Award Winning Buyer Agent | Beazer Homes Las Vegas',
    description: 'Dr. Jan Duffy is the Award Winning Buyer Agent for Beazer Homes in Las Vegas. Find your perfect new construction home in Henderson, Las Vegas, Boulder City, and Mesquite.',
    url: 'https://www.duffyrealtyoflasvegas.com',
    siteName: 'Duffy Realty of Las Vegas',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Dr. Jan Duffy - Award Winning Buyer Agent',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Jan Duffy - Award Winning Buyer Agent | Beazer Homes Las Vegas',
    description: 'Dr. Jan Duffy is the Award Winning Buyer Agent for Beazer Homes in Las Vegas. Find your perfect new construction home in Henderson, Las Vegas, Boulder City, and Mesquite.',
    images: ['https://www.duffyrealtyoflasvegas.com/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

// SEO/AEO/GEO 3-Surface Schema Strategy (per CLAUDE.md v3.1.6, May 2026)
// - Phone number in schema = site-specific CallAction (702-500-1942) — matches GBP NAP
// - sameAs uses env-var slots for verifiable web-wide entity footprint (GEO trust signal)
// - hasCredential is an array: NV license + PhD (March 2026 author-expertise signal)
// - worksFor: full BHHS Nevada Properties entity name

const SITE_URL = 'https://www.duffyrealtyoflasvegas.com'
const SCHEMA_PHONE = '(702) 500-1942' // Site-specific CallAction — NEVER replace with 702-222-1964
const SITE_AGENT_ID = `${SITE_URL}#agent`
const SITE_BUSINESS_ID = `${SITE_URL}#business`
const SITE_PERSON_ID = `${SITE_URL}#person`
const SITE_ORG_ID = `${SITE_URL}#organization`
const SITE_WEBSITE_ID = `${SITE_URL}#website`

const sameAsLinks = [
  process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_URL,
  process.env.NEXT_PUBLIC_BHHS_PROFILE_URL,
  process.env.NEXT_PUBLIC_LINKEDIN_URL,
  process.env.NEXT_PUBLIC_REALTOR_COM_URL,
  process.env.NEXT_PUBLIC_ZILLOW_PROFILE_URL,
].filter(Boolean) as string[]

const credentials = [
  {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'Professional License',
    recognizedBy: {
      '@type': 'Organization',
      name: 'Nevada Real Estate Division',
    },
    credentialNumber: 'S.0197614.LLC',
  },
  {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'degree',
    educationalLevel: 'Doctorate',
    name: 'PhD',
  },
]

const bhhsNevadaProperties = {
  '@type': 'Organization',
  name: 'Berkshire Hathaway HomeServices Nevada Properties',
  url: 'https://www.bhhsnv.com',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google tag (gtag.js) - Loaded with lowest priority */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1JC6VLTL8P"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1JC6VLTL8P');
          `}
        </Script>
        {/* Schema Markup - Multiple Schemas (SEO/AEO/GEO 3-Surface Strategy, May 2026) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'RealEstateAgent',
              '@id': SITE_AGENT_ID,
              name: 'Dr. Janet Duffy',
              alternateName: 'Dr. Jan Duffy',
              description: 'Award-winning Buyer Agent for Beazer Homes in Las Vegas. Specializes in new construction across Las Vegas, Henderson, Boulder City, and Mesquite. Expert guidance through floor plans, communities, builder incentives, and closing.',
              telephone: SCHEMA_PHONE,
              url: SITE_URL,
              image: `${SITE_URL}/og-image.png`,
              specialty: ['New Construction', 'Beazer Homes', 'Buyer Agent', 'Las Vegas New Builds', 'Henderson New Construction', 'Builder Negotiation'],
              areaServed: [
                {
                  '@type': 'City',
                  name: 'Las Vegas',
                  containedIn: {
                    '@type': 'State',
                    name: 'Nevada',
                  },
                },
                {
                  '@type': 'City',
                  name: 'Henderson',
                },
                {
                  '@type': 'City',
                  name: 'Boulder City',
                },
                {
                  '@type': 'City',
                  name: 'Mesquite',
                },
              ],
              priceRange: '$300K-$2M+',
              award: ['Award Winning Buyer Agent - Beazer Homes'],
              knowsAbout: ['New Construction', 'Beazer Homes', 'Builder Incentives', 'Floor Plans', 'Construction Timeline', 'New Build Negotiation', 'Las Vegas Real Estate', 'Buyer Representation'],
              memberOf: [
                {
                  '@type': 'Organization',
                  name: 'Nevada Real Estate Division',
                },
                bhhsNevadaProperties,
              ],
              hasCredential: credentials,
              sameAs: sameAsLinks,
            },
            {
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              '@id': SITE_BUSINESS_ID,
              name: 'Duffy Realty of Las Vegas',
              alternateName: 'Dr. Jan Duffy - Beazer Homes Buyer Agent',
              description: 'Las Vegas real estate buyer agent specializing in Beazer Homes new construction across Henderson, Las Vegas, Boulder City, and Mesquite.',
              telephone: SCHEMA_PHONE,
              url: SITE_URL,
              image: `${SITE_URL}/og-image.png`,
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Las Vegas',
                addressRegion: 'NV',
                addressCountry: 'US',
              },
              priceRange: '$300K-$2M+',
              areaServed: [
                {
                  '@type': 'City',
                  name: 'Las Vegas',
                },
                {
                  '@type': 'City',
                  name: 'Henderson',
                },
                {
                  '@type': 'City',
                  name: 'Boulder City',
                },
                {
                  '@type': 'City',
                  name: 'Mesquite',
                },
              ],
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                  opens: '08:00',
                  closes: '20:00',
                },
              ],
              openingHours: 'Mo-Su 08:00-20:00',
              paymentAccepted: 'Cash, Check, Credit Card',
              currenciesAccepted: 'USD',
              sameAs: sameAsLinks,
            },
            {
              '@context': 'https://schema.org',
              '@type': 'Person',
              '@id': SITE_PERSON_ID,
              name: 'Dr. Janet Duffy',
              alternateName: 'Dr. Jan Duffy',
              jobTitle: 'Real Estate Buyer Agent',
              description: 'Award-winning Buyer Agent for Beazer Homes in Las Vegas. Nevada-licensed real estate agent with PhD credentials and Berkshire Hathaway HomeServices affiliation. Specializes in new construction representation across the Las Vegas valley.',
              worksFor: bhhsNevadaProperties,
              hasCredential: credentials,
              telephone: SCHEMA_PHONE,
              url: SITE_URL,
              image: `${SITE_URL}/og-image.png`,
              award: ['Award Winning Buyer Agent - Beazer Homes'],
              knowsAbout: ['New Construction', 'Beazer Homes', 'Builder Incentives', 'Floor Plans', 'New Build Negotiation', 'Las Vegas Real Estate', 'Henderson Real Estate', 'Buyer Representation'],
              sameAs: sameAsLinks,
            },
            {
              '@context': 'https://schema.org',
              '@type': 'Organization',
              '@id': SITE_ORG_ID,
              name: 'Duffy Realty of Las Vegas',
              alternateName: 'Dr. Jan Duffy - Beazer Homes Buyer Agent',
              url: SITE_URL,
              logo: `${SITE_URL}/og-image.png`,
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: SCHEMA_PHONE,
                contactType: 'Customer Service',
                areaServed: 'US',
                availableLanguage: 'English',
              },
              parentOrganization: bhhsNevadaProperties,
              sameAs: sameAsLinks,
            },
            {
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              '@id': SITE_WEBSITE_ID,
              name: 'Duffy Realty of Las Vegas - Beazer Homes Buyer Agent',
              url: SITE_URL,
              description: 'Dr. Jan Duffy is the Award Winning Buyer Agent for Beazer Homes in Las Vegas. Find new construction homes, floor plans, and communities across Las Vegas, Henderson, Boulder City, and Mesquite.',
              publisher: {
                '@id': SITE_ORG_ID,
              },
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
                },
                'query-input': 'required name=search_term_string',
              },
            },
          ]).replace(/</g, '\\u003c'),
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
