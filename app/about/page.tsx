import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Phone, Mail, Calendar, Award, MapPin, GraduationCap, Star, Home } from 'lucide-react'
import Link from 'next/link'
import { generatePersonSchema, generateBreadcrumbSchema } from '@/lib/schema/structured-data'
import { StructuredData } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'About Dr. Jan Duffy | Award Winning Beazer Homes Buyer Agent Las Vegas',
  description: 'Meet Dr. Jan Duffy, Award Winning Buyer Agent for Beazer Homes in Las Vegas. Licensed real estate professional with expertise in new construction homes, helping clients find their perfect home in Henderson, Las Vegas, and surrounding areas.',
  alternates: {
    canonical: 'https://www.duffyrealtyoflasvegas.com/about',
  },
  openGraph: {
    title: 'About Dr. Jan Duffy | Award Winning Beazer Homes Buyer Agent',
    description: 'Meet Dr. Jan Duffy, Award Winning Buyer Agent for Beazer Homes in Las Vegas.',
    url: 'https://www.duffyrealtyoflasvegas.com/about',
    type: 'website',
  },
}

export default function AboutPage() {
  const personSchema = generatePersonSchema()
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.duffyrealtyoflasvegas.com' },
    { name: 'About', url: 'https://www.duffyrealtyoflasvegas.com/about' },
  ])

  return (
    <>
      <StructuredData data={personSchema} />
      <StructuredData data={breadcrumbSchema} />
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
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              About Dr. Jan Duffy
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Your Trusted Partner for Finding Your Perfect Beazer Home in Las Vegas
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Award Winning Real Estate Professional</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Dr. Jan Duffy is the Award Winning Buyer Agent for Beazer Homes, specializing in 
                helping clients find their perfect new construction home throughout the Las Vegas 
                metropolitan area. With extensive knowledge of Beazer Homes communities, floor plans, 
                and the new construction process, Dr. Duffy brings expertise and dedication to every 
                home buying journey.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold mb-6 mt-12">Expertise & Specialization</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-card p-6 rounded-lg border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <Home className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold">Beazer Homes Specialist</h3>
                  </div>
                  <p className="text-muted-foreground">
                    As a contracted top agent with Beazer Homes, Dr. Duffy has direct relationships 
                    with sales teams, pricing specialists, and community managers across all Las Vegas 
                    area communities.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold">Local Market Expert</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Deep understanding of Las Vegas area neighborhoods, including Henderson, Las Vegas, 
                    Boulder City, and Mesquite. Knows the best communities, schools, and amenities.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <GraduationCap className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold">New Construction Expertise</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Specialized knowledge of the new construction home buying process, from contract 
                    to closing, ensuring clients understand every step.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <Star className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold">Client Advocacy</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Committed to protecting client interests throughout the buying process with careful 
                    contract review, strategic negotiation, and dedicated support.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-6 mt-12">Why Work With Dr. Jan Duffy?</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Choosing the right buyer's agent makes all the difference when purchasing a new home. 
                Dr. Duffy brings:
              </p>
              <ul className="list-disc list-inside space-y-3 text-muted-foreground mb-8 ml-4">
                <li>Direct access to Beazer Homes inventory, incentives, and pricing</li>
                <li>Professional advocacy to protect your interests throughout the process</li>
                <li>Expert guidance through contract review, inspections, and closing</li>
                <li>Local market knowledge to help you choose the perfect location</li>
                <li>Personalized service tailored to your specific needs and timeline</li>
                <li>No additional cost to you - buyer's agent representation at no extra fee</li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold mb-6 mt-12">Credentials & License</h2>
              <div className="bg-card p-6 rounded-lg border border-border mb-8">
                <p className="text-muted-foreground mb-4">
                  <strong className="text-foreground">Real Estate License:</strong> S.0197614.LLC
                </p>
                <p className="text-muted-foreground mb-4">
                  <strong className="text-foreground">Company:</strong> Dr Duffy Beazer Homes Group
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Specialization:</strong> Buyer's Agent for Beazer Homes
                </p>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-6 mt-12">Service Areas</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Dr. Jan Duffy serves clients throughout the greater Las Vegas area, including:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center p-4 bg-card rounded-lg border border-border">
                  <p className="font-semibold">Henderson</p>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border border-border">
                  <p className="font-semibold">Las Vegas</p>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border border-border">
                  <p className="font-semibold">Boulder City</p>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border border-border">
                  <p className="font-semibold">Mesquite</p>
                </div>
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
                <h3 className="text-xl font-semibold mb-3">Why should I choose Dr. Jan Duffy as my buyer's agent?</h3>
                <p className="text-muted-foreground">
                  Dr. Jan Duffy is an Award Winning Buyer Agent with specialized expertise in Beazer Homes. She has direct relationships with Beazer sales teams, knows all Las Vegas area communities, and provides dedicated advocacy throughout your purchase—all at no additional cost to you.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">What areas does Dr. Jan Duffy serve?</h3>
                <p className="text-muted-foreground">
                  Dr. Jan Duffy serves all Beazer Homes communities throughout the greater Las Vegas area, including Henderson, Las Vegas, Boulder City, and Mesquite. Her office is located at 4670 S Fort Apache Rd, Las Vegas, NV 89147.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">Do I pay extra to work with Dr. Jan Duffy?</h3>
                <p className="text-muted-foreground">
                  No. Buyer's agent representation comes at no additional cost to you. The real estate commission structure means you get professional representation and advocacy at no extra expense when working with Dr. Jan Duffy.
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
              Ready to Work Together?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how I can help you find your perfect Beazer home.
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
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

