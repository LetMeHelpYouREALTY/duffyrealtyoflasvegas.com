import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Phone, Mail, Calendar, CheckCircle, FileText, Search, Shield, Clock } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Buyer Agent Services | Dr. Jan Duffy Las Vegas',
  description: 'Comprehensive buyer agent services for purchasing Beazer Homes in Las Vegas. Contract review, negotiations, inspections, closing coordination, and expert guidance throughout your home buying journey.',
  alternates: {
    canonical: 'https://www.duffyrealtyoflasvegas.com/services',
  },
  openGraph: {
    title: 'Buyer Agent Services | Dr. Jan Duffy Las Vegas',
    description: 'Complete buyer agent services for new construction home purchases.',
    url: 'https://www.duffyrealtyoflasvegas.com/services',
    type: 'website',
  },
}

export default function ServicesPage() {
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
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Buyer Agent Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive services to guide you through every step of buying your Beazer home
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-muted-foreground">
                As your dedicated buyer's agent, Dr. Jan Duffy provides comprehensive support 
                throughout your entire home buying journey. From initial search to closing and 
                beyond, these services ensure you make informed decisions and your interests are 
                protected—all at no additional cost to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Complete Buyer Agent Services</h2>
            
            <div className="space-y-8">
              {/* Home Search & Selection */}
              <div className="bg-card p-8 rounded-lg border border-border">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Search className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">Home Search & Selection</h3>
                    <p className="text-muted-foreground mb-4">
                      Expert guidance in finding the perfect Beazer home that matches your needs, 
                      budget, and lifestyle preferences.
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li>Tour Beazer Homes communities and model homes</li>
                      <li>Compare floor plans and home sites</li>
                      <li>Evaluate neighborhood amenities and locations</li>
                      <li>Understand lot premiums and their impact on value</li>
                      <li>Access to all available inventory and coming-soon homes</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Contract Review & Negotiation */}
              <div className="bg-card p-8 rounded-lg border border-border">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">Contract Review & Negotiation</h3>
                    <p className="text-muted-foreground mb-4">
                      Thorough contract analysis and strategic negotiation to protect your interests 
                      and secure the best possible terms.
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li>Comprehensive purchase agreement review</li>
                      <li>Explanation of all contract terms and timelines</li>
                      <li>Negotiation of purchase price and terms</li>
                      <li>Structuring offers to maximize builder incentives</li>
                      <li>Ensuring your interests are protected in all clauses</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Design & Customization Guidance */}
              <div className="bg-card p-8 rounded-lg border border-border">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">Design & Customization Guidance</h3>
                    <p className="text-muted-foreground mb-4">
                      Expert advice on upgrades and customizations that add value and fit your lifestyle.
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li>Guidance on which upgrades add the most value</li>
                      <li>Advice on structural vs. cosmetic upgrades</li>
                      <li>Review of design center selections</li>
                      <li>Budget planning for upgrades and customizations</li>
                      <li>Understanding upgrade pricing and alternatives</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Inspection Coordination */}
              <div className="bg-card p-8 rounded-lg border border-border">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">Inspection & Quality Assurance</h3>
                    <p className="text-muted-foreground mb-4">
                      Coordinated inspections and walkthroughs to ensure quality and identify any 
                      issues before closing.
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li>Coordinate pre-drywall inspections</li>
                      <li>Schedule and attend final walkthrough</li>
                      <li>Review builder quality standards</li>
                      <li>Document any defects or incomplete items</li>
                      <li>Ensure all issues are addressed before closing</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Process Management */}
              <div className="bg-card p-8 rounded-lg border border-border">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">Process Management & Coordination</h3>
                    <p className="text-muted-foreground mb-4">
                      Your single point of contact managing timelines, coordinating parties, and 
                      ensuring nothing falls through the cracks.
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li>Manage construction timeline and milestones</li>
                      <li>Coordinate with builder, lender, and title company</li>
                      <li>Track progress and keep you informed</li>
                      <li>Handle scheduling and communication</li>
                      <li>Ensure all deadlines are met</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Financing Support */}
              <div className="bg-card p-8 rounded-lg border border-border">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">Financing Guidance & Support</h3>
                    <p className="text-muted-foreground mb-4">
                      Assistance navigating financing options and coordinating with lenders throughout 
                      the process.
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li>Connect you with experienced new construction lenders</li>
                      <li>Understand financing options and programs</li>
                      <li>Coordinate with lender on appraisal and loan processing</li>
                      <li>Ensure financing stays on track for closing</li>
                      <li>Review loan documents and closing statements</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Closing Coordination */}
              <div className="bg-card p-8 rounded-lg border border-border">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">Closing Coordination</h3>
                    <p className="text-muted-foreground mb-4">
                      Smooth closing process with careful attention to all details and documentation.
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li>Coordinate final walkthrough and closing date</li>
                      <li>Review all closing documents</li>
                      <li>Ensure all contingencies are met</li>
                      <li>Verify final numbers and fees</li>
                      <li>Assist at closing to ensure everything goes smoothly</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Post-Closing Support */}
              <div className="bg-card p-8 rounded-lg border border-border">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">Post-Closing Support</h3>
                    <p className="text-muted-foreground mb-4">
                      Continued support after you move into your new home to ensure warranty issues 
                      are addressed.
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li>Assist with warranty claims if needed</li>
                      <li>Help coordinate builder follow-up on any issues</li>
                      <li>Answer questions about your new home</li>
                      <li>Provide referrals for services you may need</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Why These Services Matter</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">Protect Your Investment</h3>
                <p className="text-muted-foreground">
                  Careful contract review and negotiation can save you thousands and protect you 
                  from costly mistakes.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">Save Time & Stress</h3>
                <p className="text-muted-foreground">
                  Having a professional manage the process means less stress and fewer tasks on 
                  your plate during an already busy time.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">Access to Opportunities</h3>
                <p className="text-muted-foreground">
                  As a contracted Beazer agent, Dr. Duffy has access to incentives, pricing, and 
                  inventory information that benefits you.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">Expert Guidance</h3>
                <p className="text-muted-foreground">
                  Years of experience with new construction means you get expert advice at every 
                  decision point.
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
                <h3 className="text-xl font-semibold mb-3">What services are included with buyer's agent representation?</h3>
                <p className="text-muted-foreground">
                  Buyer's agent services include home search assistance, contract review, negotiation, design guidance, inspection coordination, process management, financing support, and closing coordination—all at no additional cost to you.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">Do I need to pay for buyer's agent services?</h3>
                <p className="text-muted-foreground">
                  No. Buyer's agent representation comes at no additional cost to you. The real estate commission structure means you get professional representation and advocacy at no extra expense when working with Dr. Jan Duffy.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">How does Dr. Jan Duffy help with the new construction process?</h3>
                <p className="text-muted-foreground">
                  Dr. Jan Duffy provides comprehensive support throughout the new construction process, including access to inventory and incentives, contract review, design guidance, construction progress coordination, inspection support, and closing assistance.
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
              Ready to Experience These Services?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              All of these services are available to you at no additional cost. Let's discuss 
              how I can help with your Beazer home purchase.
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
              <p>LIC# S.0197614.LLC</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

