import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { communities, getCommunitiesByCity } from '@/lib/data/communities'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Beazer Homes Communities | Dr. Jan Duffy - Buyer Agent',
  description: 'Explore all Beazer Homes communities in Las Vegas and Henderson. Contact Dr. Jan Duffy, Award Winning Buyer Agent, to find your perfect new construction home.',
  alternates: {
    canonical: 'https://www.duffyrealtyoflasvegas.com/communities',
  },
  openGraph: {
    title: 'Beazer Homes Communities | Dr. Jan Duffy - Buyer Agent',
    description: 'Explore all Beazer Homes communities in Las Vegas and Henderson.',
    url: 'https://www.duffyrealtyoflasvegas.com/communities',
    type: 'website',
  },
}

export default function CommunitiesPage() {
  const hendersonCommunities = getCommunitiesByCity('Henderson')
  const lasVegasCommunities = getCommunitiesByCity('Las Vegas')

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 via-background to-background py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-4">
              <Link
                href="/"
                className="text-muted-foreground hover:text-foreground text-sm"
              >
                ← Back to Home
              </Link>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Beazer Homes Communities
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Explore all Beazer Homes communities where Dr. Jan Duffy serves as your 
              Award Winning Buyer Agent
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="tel:7025001955">
                  <Phone className="w-5 h-5" />
                  Call (702) 500-1955
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="mailto:DrDuffySells@DuffyRealtyOfLasVegas.com">
                  <Mail className="w-5 h-5" />
                  Email Me
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Henderson Communities */}
      {hendersonCommunities.length > 0 && (
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Henderson Communities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {hendersonCommunities.map((community) => (
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
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            <span>
                              {community.status}
                              {community.hours && ` · ${community.hours}`}
                            </span>
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

      {/* Las Vegas Communities */}
      {lasVegasCommunities.length > 0 && (
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Las Vegas Communities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {lasVegasCommunities.map((community) => (
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
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            <span>
                              {community.status}
                              {community.hours && ` · ${community.hours}`}
                            </span>
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

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">How many Beazer Homes communities are available?</h3>
                <p className="text-muted-foreground">
                  Dr. Jan Duffy represents buyers across 12 Beazer Homes communities in the Las Vegas area, including communities in Henderson, Las Vegas, Boulder City, and Mesquite. Each community offers different floor plans and amenities to suit various lifestyles.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">Can I customize a Beazer home?</h3>
                <p className="text-muted-foreground">
                  Yes, Beazer Homes offers various customization options depending on the construction stage. You can typically select finishes, colors, and upgrades through their design center. Structural changes are usually limited to early stages of construction.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">What should I consider when choosing a Beazer community?</h3>
                <p className="text-muted-foreground">
                  Consider factors like location, proximity to work and schools, community amenities, lot size, floor plan options, and future development plans. Dr. Jan Duffy can help you evaluate each community based on your specific needs and preferences.
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
              Ready to Find Your Perfect Beazer Home?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contact Dr. Jan Duffy, Award Winning Buyer Agent, to explore any of these 
              communities and find your dream home.
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
                <a href="mailto:DrDuffySells@DuffyRealtyOfLasVegas.com?subject=Schedule Consultation">
                  <Phone className="w-5 h-5" />
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
            </div>
          </div>
        </div>
      </section>

      {/* Helpful Resources */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Helpful Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">New to Buying?</h3>
                <p className="text-muted-foreground mb-4">
                  Learn about the new construction home buying process and what to expect.
                </p>
                <div className="flex flex-wrap gap-2">
                  <a href="/buyers-guide" className="text-primary hover:underline text-sm">Buyer's Guide →</a>
                  <a href="/first-time-buyers" className="text-primary hover:underline text-sm">First-Time Buyers →</a>
                  <a href="/new-construction-process" className="text-primary hover:underline text-sm">Process Timeline →</a>
                  <a href="/tips-buying-new-construction" className="text-primary hover:underline text-sm">Buying Tips →</a>
                </div>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">Explore by Location</h3>
                <p className="text-muted-foreground mb-4">
                  Learn about Beazer Homes communities in specific areas.
                </p>
                <div className="flex flex-wrap gap-2">
                  <a href="/areas/henderson" className="text-primary hover:underline text-sm">Henderson →</a>
                  <a href="/areas/las-vegas" className="text-primary hover:underline text-sm">Las Vegas →</a>
                  <a href="/areas/boulder-city" className="text-primary hover:underline text-sm">Boulder City →</a>
                  <a href="/areas/mesquite" className="text-primary hover:underline text-sm">Mesquite →</a>
                </div>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">How I Help</h3>
                <p className="text-muted-foreground mb-4">
                  Discover the services and expertise I provide as your buyer's agent.
                </p>
                <div className="flex flex-wrap gap-2">
                  <a href="/how-i-help" className="text-primary hover:underline text-sm">How I Help →</a>
                  <a href="/services" className="text-primary hover:underline text-sm">Services →</a>
                  <a href="/about" className="text-primary hover:underline text-sm">About Dr. Jan Duffy →</a>
                </div>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">Questions?</h3>
                <p className="text-muted-foreground mb-4">
                  Find answers to common questions or get in touch directly.
                </p>
                <div className="flex flex-wrap gap-2">
                  <a href="/faq" className="text-primary hover:underline text-sm">FAQ →</a>
                  <a href="/contact" className="text-primary hover:underline text-sm">Contact →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

