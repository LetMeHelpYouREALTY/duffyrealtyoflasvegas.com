export interface StructuredDataConfig {
  type: 'Person' | 'Organization' | 'LocalBusiness' | 'RealEstateAgent' | 'BreadcrumbList' | 'FAQPage' | 'Article'
  data: Record<string, any>
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Duffy Realty of Las Vegas',
    alternateName: 'Dr Duffy Beazer Homes Group',
    url: 'https://www.duffyrealtyoflasvegas.com',
    logo: 'https://www.duffyrealtyoflasvegas.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-702-500-1955',
      contactType: 'Real Estate Agent',
      email: 'DrDuffySells@DuffyRealtyOfLasVegas.com',
      areaServed: ['Las Vegas', 'Henderson', 'Boulder City', 'Mesquite'],
      availableLanguage: ['English'],
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '4670 S Fort Apache Rd',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89147',
      addressCountry: 'US',
    },
    sameAs: [
      // Add social media profiles if available
    ],
  }
}

export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Dr. Jan Duffy',
    jobTitle: 'Award Winning Buyer Agent',
    description: 'Dr. Jan Duffy is the Award Winning Buyer Agent for Beazer Homes in Las Vegas, specializing in new construction homes.',
    identifier: {
      '@type': 'PropertyValue',
      name: 'Real Estate License',
      value: 'S.0197614.LLC',
    },
    memberOf: {
      '@type': 'Organization',
      name: 'Dr Duffy Beazer Homes Group',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Beazer Homes',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '4670 S Fort Apache Rd',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89147',
      addressCountry: 'US',
    },
    email: 'DrDuffySells@DuffyRealtyOfLasVegas.com',
    telephone: '+1-702-500-1955',
    url: 'https://www.duffyrealtyoflasvegas.com',
    knowsAbout: [
      'Real Estate',
      'New Construction Homes',
      'Beazer Homes',
      'Buyer Representation',
      'Las Vegas Real Estate',
      'Henderson Real Estate',
      'Real Estate Contracts',
      'Home Buying Process',
    ],
    areaServed: [
      {
        '@type': 'City',
        name: 'Las Vegas',
        addressRegion: 'NV',
      },
      {
        '@type': 'City',
        name: 'Henderson',
        addressRegion: 'NV',
      },
      {
        '@type': 'City',
        name: 'Boulder City',
        addressRegion: 'NV',
      },
      {
        '@type': 'City',
        name: 'Mesquite',
        addressRegion: 'NV',
      },
    ],
  }
}

export function generateRealEstateAgentSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Dr. Jan Duffy',
    alternateName: 'Dr. Jan Duffy Buyers Agent',
    description: 'Award Winning Buyer Agent for Beazer Homes in Las Vegas',
    jobTitle: 'Award Winning Buyer Agent',
    identifier: {
      '@type': 'PropertyValue',
      name: 'Real Estate License',
      value: 'S.0197614.LLC',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Beazer Homes',
    },
    memberOf: {
      '@type': 'Organization',
      name: 'Dr Duffy Beazer Homes Group',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '4670 S Fort Apache Rd',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89147',
      addressCountry: 'US',
    },
    telephone: '+1-702-500-1955',
    email: 'DrDuffySells@DuffyRealtyOfLasVegas.com',
    url: 'https://www.duffyrealtyoflasvegas.com',
    areaServed: [
      {
        '@type': 'City',
        name: 'Las Vegas',
        addressRegion: 'NV',
      },
      {
        '@type': 'City',
        name: 'Henderson',
        addressRegion: 'NV',
      },
      {
        '@type': 'City',
        name: 'Boulder City',
        addressRegion: 'NV',
      },
      {
        '@type': 'City',
        name: 'Mesquite',
        addressRegion: 'NV',
      },
    ],
    knowsAbout: [
      'Beazer Homes Communities',
      'New Construction Homes',
      'Home Buying Process',
      'Real Estate Contracts',
      'Buyer Representation',
    ],
    serviceType: 'Buyer Agent Services',
  }
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': 'https://www.duffyrealtyoflasvegas.com#business',
    name: 'Duffy Realty of Las Vegas',
    alternateName: 'Dr Duffy Beazer Homes Group',
    description: 'Award Winning Buyer Agent for Beazer Homes in Las Vegas',
    image: 'https://www.duffyrealtyoflasvegas.com/logo.png',
    url: 'https://www.duffyrealtyoflasvegas.com',
    telephone: '+1-702-500-1955',
    email: 'DrDuffySells@DuffyRealtyOfLasVegas.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '4670 S Fort Apache Rd',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89147',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '36.0974',
      longitude: '-115.2777',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Las Vegas',
        addressRegion: 'NV',
      },
      {
        '@type': 'City',
        name: 'Henderson',
        addressRegion: 'NV',
      },
      {
        '@type': 'City',
        name: 'Boulder City',
        addressRegion: 'NV',
      },
      {
        '@type': 'City',
        name: 'Mesquite',
        addressRegion: 'NV',
      },
    ],
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '09:00',
      closes: '18:00',
    },
  }
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function generateArticleSchema({
  headline,
  description,
  datePublished,
  dateModified,
  author,
  url,
  image,
}: {
  headline: string
  description: string
  datePublished?: string
  dateModified?: string
  author?: string
  url: string
  image?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    datePublished: datePublished || new Date().toISOString(),
    dateModified: dateModified || new Date().toISOString(),
    author: {
      '@type': 'Person',
      name: author || 'Dr. Jan Duffy',
      url: 'https://www.duffyrealtyoflasvegas.com/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Duffy Realty of Las Vegas',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.duffyrealtyoflasvegas.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    url,
    ...(image && {
      image: {
        '@type': 'ImageObject',
        url: image,
      },
    }),
  }
}

export function generateFAQPageSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

