import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Phone, Mail, Calendar, MapPin, Award, CheckCircle } from 'lucide-react'
import { getLocationBySlug, locations, getCommunitiesForLocation } from '@/lib/data/locations'
import Link from 'next/link'

type Props = {
  params: Promise<{ location: string }>
}

export async function generateStaticParams() {
  return locations.map((location) => ({
    location: location.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { location } = await params
  const locationData = getLocationBySlug(location)

  if (!locationData) {
    return {
      title: 'Location Not Found',
    }
  }

  return {
    title: `Beazer Homes in ${locationData.name}, NV | Dr. Jan Duffy - Buyer Agent`,
    description: `Find your perfect Beazer Homes new construction home in ${locationData.name}, Nevada. ${locationData.description.substring(0, 150)}...`,
    alternates: {
      canonical: `https://www.duffyrealtyoflasvegas.com/areas/${location}`,
    },
    openGraph: {
      title: `Beazer Homes in ${locationData.name}, NV | Dr. Jan Duffy`,
      description: `Discover Beazer Homes communities in ${locationData.name}, Nevada.`,
      url: `https://www.duffyrealtyoflasvegas.com/areas/${location}`,
      type: 'website',
    },
  }
}

export default async function LocationPage({ params }: Props) {
  const { location } = await params
  const locationData = getLocationBySlug(location)

  if (!locationData) {
    notFound()
  }

  const communities = getCommunitiesForLocation(location)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 via-background to-background py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-4">
              <Link
                href="/"
                className="text-muted-foreground hover:text-foreground text-sm"
              >
                ← Back to Home
              </Link>
            </div>
            <div className="mb-6 flex justify-start">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary">
                <Award className="w-4 h-4" />
                <span className="font-semibold text-sm">Award Winning Buyer Agent</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Beazer Homes in {locationData.name}, {locationData.state}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Find your perfect new construction home in {locationData.name}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <a href="tel:7025001955">
                  <Phone className="w-5 h-5" />
                  Call (702) 500-1955
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/communities">
                  View All Communities
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Location Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-muted-foreground mb-6">
                {locationData.description}
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {locationData.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{highlight}</p>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            {(locationData.demographics || locationData.schools || locationData.amenities) && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {locationData.demographics && (
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="text-lg font-semibold mb-2">Population</h3>
                    <p className="text-muted-foreground">{locationData.demographics}</p>
                  </div>
                )}
                {locationData.schools && (
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="text-lg font-semibold mb-2">Schools</h3>
                    <p className="text-muted-foreground text-sm">{locationData.schools}</p>
                  </div>
                )}
                {locationData.amenities && (
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="text-lg font-semibold mb-2">Amenities</h3>
                    <p className="text-muted-foreground text-sm">{locationData.amenities}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Beazer Communities in This Area */}
      {communities.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Beazer Homes Communities in {locationData.name}
              </h2>
              <p className="text-center text-muted-foreground mb-8">
                Explore available Beazer Homes communities in {locationData.name}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {communities.map((community) => (
                  <Link
                    key={community.id}
                    href={`/communities/${community.slug}`}
                    className="group"
                  >
                    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all h-full">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {community.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">{community.fullName}</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{community.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Phone className="w-4 h-4" />
                          <span>{community.phone}</span>
                        </div>
                        {community.status && (
                          <div className="text-muted-foreground">
                            <span>{community.status}</span>
                            {community.hours && <span> · {community.hours}</span>}
                          </div>
                        )}
                      </div>
                      {community.description && (
                        <p className="text-sm text-muted-foreground mt-4 line-clamp-2">
                          {community.description}
                        </p>
                      )}
                      <div className="mt-4 text-sm text-primary font-medium group-hover:underline">
                        Learn More →
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Dr. Duffy for This Location */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Why Work With Dr. Jan Duffy in {locationData.name}?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">Local Expertise</h3>
                <p className="text-muted-foreground">
                  Dr. Jan Duffy has extensive knowledge of {locationData.name} real estate market, 
                  neighborhoods, schools, and community amenities to help you make informed decisions.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">Beazer Homes Specialist</h3>
                <p className="text-muted-foreground">
                  As a contracted Beazer Homes agent, she has direct access to inventory, pricing, 
                  and incentives for all communities in {locationData.name}.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">Your Advocate</h3>
                <p className="text-muted-foreground">
                  She works exclusively for you, providing professional advocacy, contract review, 
                  and negotiation to protect your interests.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">No Extra Cost</h3>
                <p className="text-muted-foreground">
                  Buyer's agent representation comes at no additional cost to you. Get expert 
                  guidance and advocacy as part of your home buying journey.
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
                <h3 className="text-xl font-semibold mb-3">What Beazer Homes communities are available in {locationData.name}?</h3>
                <p className="text-muted-foreground">
                  Dr. Jan Duffy represents buyers across multiple Beazer Homes communities in {locationData.name}. Each community offers different floor plans, amenities, and price points. Contact Dr. Jan Duffy to learn about current availability in {locationData.name} communities.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">Why choose {locationData.name} for your new home?</h3>
                <p className="text-muted-foreground">
                  {locationData.name} offers {locationData.highlights[0].toLowerCase()} and {locationData.highlights[1].toLowerCase()}, making it an attractive place to live. Dr. Jan Duffy can help you understand the benefits of living in {locationData.name} and find the perfect Beazer community for your needs.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">How do I get started looking for a home in {locationData.name}?</h3>
                <p className="text-muted-foreground">
                  Contact Dr. Jan Duffy at (702) 500-1955 or email DrDuffySells@DuffyRealtyOfLasVegas.com to schedule a consultation. She'll help you explore Beazer Homes communities in {locationData.name} and guide you through the entire home buying process.
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

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Explore {locationData.name}?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contact Dr. Jan Duffy to learn more about Beazer Homes communities in {locationData.name} 
              and find your perfect new construction home.
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
                <a href="mailto:DrDuffySells@DuffyRealtyOfLasVegas.com?subject=Schedule Consultation - {locationData.name}">
                  <Calendar className="w-5 h-5" />
                  Schedule Consultation
                </a>
              </Button>
            </div>
            <div className="text-sm opacity-80">
              <p>Dr. Jan Duffy | Buyers Agent Beazer Homes</p>
              <p>Dr Duffy Beazer Homes Group</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

