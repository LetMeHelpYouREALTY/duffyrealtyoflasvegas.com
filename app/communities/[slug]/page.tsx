import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Phone, Mail, Calendar, MapPin, Clock, Award } from 'lucide-react'
import { getCommunityBySlug, communities } from '@/lib/data/communities'
import Link from 'next/link'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return communities.map((community) => ({
    slug: community.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const community = getCommunityBySlug(slug)

  if (!community) {
    return {
      title: 'Community Not Found',
    }
  }

  return {
    title: `${community.fullName} | Dr. Jan Duffy - Buyer Agent`,
    description: `${community.fullName} in ${community.location}. ${community.description || 'New construction homes available. Contact Dr. Jan Duffy, Award Winning Buyer Agent for Beazer Homes.'}`,
    alternates: {
      canonical: `https://www.duffyrealtyoflasvegas.com/communities/${slug}`,
    },
    openGraph: {
      title: `${community.fullName} | Dr. Jan Duffy - Buyer Agent`,
      description: `${community.fullName} in ${community.location}. Contact Dr. Jan Duffy, Award Winning Buyer Agent for Beazer Homes.`,
      url: `https://www.duffyrealtyoflasvegas.com/communities/${slug}`,
      type: 'website',
    },
  }
}

export default async function CommunityPage({ params }: Props) {
  const { slug } = await params
  const community = getCommunityBySlug(slug)

  if (!community) {
    notFound()
  }

  // Structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Dr. Jan Duffy',
    jobTitle: 'Award Winning Buyer Agent',
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
    telephone: '+17025001955',
    email: 'DrDuffySells@DuffyRealtyOfLasVegas.com',
    url: 'https://www.duffyrealtyoflasvegas.com',
    areaServed: {
      '@type': 'City',
      name: community.city,
    },
    knowsAbout: community.fullName,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 via-background to-background py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-4">
              <Link
                href="/communities"
                className="text-muted-foreground hover:text-foreground text-sm"
              >
                ← Back to All Communities
              </Link>
            </div>
            <div className="mb-6 flex justify-start">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary">
                <Award className="w-4 h-4" />
                <span className="font-semibold text-sm">Award Winning Buyer Agent</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              {community.fullName}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>{community.location}</span>
              </div>
              {community.status && (
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>
                    {community.status}
                    {community.hours && ` · ${community.hours}`}
                  </span>
                </div>
              )}
            </div>
            {community.address && (
              <p className="text-lg text-muted-foreground mb-6">
                {community.address}
              </p>
            )}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <a href="tel:7025001955">
                  <Phone className="w-5 h-5" />
                  Call Dr. Duffy: (702) 500-1955
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="mailto:DrDuffySells@DuffyRealtyOfLasVegas.com">
                  <Mail className="w-5 h-5" />
                  Email Me
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={`tel:${community.phone.replace(/\D/g, '')}`}>
                  <Phone className="w-5 h-5" />
                  {community.phone}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Community Information */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card p-8 rounded-lg border border-border">
              <h2 className="text-2xl font-bold mb-4">About {community.name}</h2>
              <p className="text-lg text-muted-foreground mb-6">
                {community.description ||
                  `${community.fullName} offers exceptional new construction homes in ${community.location}. Discover quality craftsmanship, modern designs, and desirable amenities in this beautiful community.`}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p className="text-muted-foreground">{community.location}</p>
                  {community.address && (
                    <p className="text-muted-foreground">{community.address}</p>
                  )}
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Contact</h3>
                  <p className="text-muted-foreground">
                    <a href={`tel:${community.phone.replace(/\D/g, '')}`} className="hover:text-foreground">
                      {community.phone}
                    </a>
                  </p>
                </div>
                {community.status && (
                  <div>
                    <h3 className="font-semibold mb-2">Status</h3>
                    <p className="text-muted-foreground">{community.status}</p>
                    {community.hours && (
                      <p className="text-sm text-muted-foreground">{community.hours}</p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Dr. Duffy */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Your Expert Buyer Agent for {community.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">Expert Guidance</h3>
                <p className="text-muted-foreground">
                  As the Award Winning Buyer Agent for Beazer Homes, I'll help you navigate 
                  the new construction process and find the perfect home in {community.name}.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">Local Knowledge</h3>
                <p className="text-muted-foreground">
                  With extensive knowledge of {community.city} and the surrounding area, 
                  I can help you understand the community, schools, and amenities.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">Dedicated Support</h3>
                <p className="text-muted-foreground">
                  From your first visit to closing and beyond, I'm here to support you 
                  throughout your entire home buying journey.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">Beazer Homes Expertise</h3>
                <p className="text-muted-foreground">
                  Specialized knowledge of Beazer Homes communities, floor plans, customization 
                  options, and the new construction timeline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">How long does it take to build a home in {community.name}?</h3>
                <p className="text-muted-foreground">
                  Construction timelines typically range from 4-8 months, depending on whether the home is already under construction or a standard new build. Quick move-in homes can close in 30-90 days, while standard builds take 4-6 months from contract to closing.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">Can I customize a home in {community.name}?</h3>
                <p className="text-muted-foreground">
                  Yes, Beazer Homes offers various customization options depending on the construction stage. You can typically select finishes, colors, and upgrades through their design center. Structural changes are usually limited to early stages of construction.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">What are the benefits of working with Dr. Jan Duffy?</h3>
                <p className="text-muted-foreground">
                  As the Award Winning Buyer Agent for Beazer Homes, Dr. Jan Duffy provides professional representation, contract review, negotiation, and expert guidance throughout your home buying journey—all at no additional cost to you. She has direct access to inventory, pricing, and builder incentives.
                </p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Button variant="outline" size="lg" asChild>
                <a href="/faq">View All Frequently Asked Questions →</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Explore {community.name}?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contact Dr. Jan Duffy, Award Winning Buyer Agent, to schedule a tour or 
              get more information about available homes in {community.name}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:7025001955">
                  <Phone className="w-5 h-5" />
                  Call (702) 500-1955
                </a>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <a href="mailto:DrDuffySells@DuffyRealtyOfLasVegas.com">
                  <Mail className="w-5 h-5" />
                  Email Me
                </a>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <a href="mailto:DrDuffySells@DuffyRealtyOfLasVegas.com?subject=Schedule Consultation - {community.name}">
                  <Calendar className="w-5 h-5" />
                  Schedule Consultation
                </a>
              </Button>
            </div>
            <div className="text-sm opacity-80">
              <p>Dr. Jan Duffy | Buyers Agent Beazer Homes</p>
              <p>Dr Duffy Beazer Homes Group</p>
              <p>LIC# S.0197614.LLC</p>
              <p className="mt-4">
                <a
                  href="https://maps.google.com/?q=4670+S+Fort+Apache+Rd,+Las+Vegas,+NV+89147"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:no-underline flex items-center justify-center gap-1"
                >
                  <MapPin className="w-4 h-4" />
                  4670 S Fort Apache Rd, Las Vegas, NV 89147
                </a>
              </p>
              <p className="mt-2">
                <a
                  href="mailto:DrDuffySells@DuffyRealtyOfLasVegas.com"
                  className="underline hover:no-underline"
                >
                  DrDuffySells@DuffyRealtyOfLasVegas.com
                </a>
              </p>
              <p>
                <a href="tel:7025001955" className="underline hover:no-underline">
                  Direct: (702) 500-1955
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

