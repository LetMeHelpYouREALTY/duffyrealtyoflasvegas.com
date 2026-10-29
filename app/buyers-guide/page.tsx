import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Phone, Mail, Calendar, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'New Construction Home Buyer\'s Guide | Dr. Jan Duffy Las Vegas',
  description: 'Complete guide to buying a new construction home in Las Vegas. Learn the step-by-step process, what to expect, and how a buyer\'s agent can help. Expert advice from Dr. Jan Duffy.',
  alternates: {
    canonical: 'https://www.duffyrealtyoflasvegas.com/buyers-guide',
  },
  openGraph: {
    title: 'New Construction Home Buyer\'s Guide | Dr. Jan Duffy',
    description: 'Complete guide to buying a new construction home in Las Vegas.',
    url: 'https://www.duffyrealtyoflasvegas.com/buyers-guide',
    type: 'website',
  },
}

export default function BuyersGuidePage() {
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
              Complete Guide to Buying a New Construction Home
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Everything you need to know about purchasing a new Beazer home in Las Vegas
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                Buying a new construction home is an exciting journey, but it's different from 
                purchasing an existing home. This comprehensive guide will walk you through the 
                process, answer common questions, and help you understand what to expect when 
                working with Beazer Homes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">The New Construction Home Buying Process</h2>
            
            <div className="space-y-8">
              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">Research & Planning</h3>
                    <p className="text-muted-foreground mb-4">
                      Start by determining your budget, preferred locations, and must-have features. 
                      Research Beazer Homes communities and floor plans that match your needs. 
                      Get pre-approved for financing to understand your purchasing power.
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li>Determine your budget and financing options</li>
                      <li>Identify preferred neighborhoods and communities</li>
                      <li>Research floor plans and home features</li>
                      <li>Get pre-approved for a mortgage</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">Work With a Buyer's Agent</h3>
                    <p className="text-muted-foreground mb-4">
                      Partner with a buyer's agent like Dr. Jan Duffy who specializes in new 
                      construction. She'll help you navigate the process, access current incentives, 
                      and advocate for your interests throughout the transaction.
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li>Get expert guidance on communities and floor plans</li>
                      <li>Access current pricing and builder incentives</li>
                      <li>Professional representation at no additional cost</li>
                      <li>Navigate builder contracts and processes</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">Visit Communities & Model Homes</h3>
                    <p className="text-muted-foreground mb-4">
                      Tour Beazer Homes communities and model homes to see floor plans in person. 
                      Visit multiple communities to compare locations, amenities, and available lots. 
                      Ask questions about timelines, customization options, and upgrades.
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li>Schedule tours of model homes and communities</li>
                      <li>Explore available home sites and lot options</li>
                      <li>Review standard features and upgrade options</li>
                      <li>Understand community amenities and HOA information</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">4</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">Select Home Site & Customize</h3>
                    <p className="text-muted-foreground mb-4">
                      Choose your preferred home site and floor plan. Work with the builder's 
                      design team to select finishes, upgrades, and customizations. Your buyer's 
                      agent can provide guidance on which upgrades add value and which to consider carefully.
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li>Select your home site (lot) location</li>
                      <li>Choose floor plan and orientation</li>
                      <li>Select structural and design upgrades</li>
                      <li>Review pricing for all customizations</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">5</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">Review & Sign Purchase Agreement</h3>
                    <p className="text-muted-foreground mb-4">
                      Your buyer's agent will review the purchase agreement carefully, explaining 
                      all terms, timelines, and contingencies. This is a critical step to ensure 
                      you understand what you're agreeing to and that your interests are protected.
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li>Thorough contract review with your agent</li>
                      <li>Understand timelines and milestones</li>
                      <li>Review warranties and builder obligations</li>
                      <li>Clarify any questions before signing</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">6</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">Construction Phase</h3>
                    <p className="text-muted-foreground mb-4">
                      During construction, you'll have scheduled walkthroughs to check progress. 
                      Your buyer's agent will coordinate with the builder and keep you informed of 
                      the timeline. This phase typically takes 4-8 months depending on the home.
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li>Regular construction updates from builder</li>
                      <li>Scheduled walkthroughs to monitor progress</li>
                      <li>Address any concerns as they arise</li>
                      <li>Coordinate financing and closing preparation</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">7</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">Pre-Delivery Inspection</h3>
                    <p className="text-muted-foreground mb-4">
                      Before closing, you'll do a final walkthrough with the builder to identify 
                      any issues that need correction. Your buyer's agent will attend this inspection 
                      to ensure everything is addressed before you take ownership.
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li>Comprehensive walkthrough of completed home</li>
                      <li>Document any defects or incomplete items</li>
                      <li>Verify all selected upgrades are installed correctly</li>
                      <li>Ensure builder addresses all issues before closing</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">8</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">Closing & Move-In</h3>
                    <p className="text-muted-foreground mb-4">
                      On closing day, you'll sign all documents, complete final financing, and 
                      receive the keys to your new home. Your buyer's agent will coordinate with 
                      all parties to ensure a smooth closing process.
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li>Final walkthrough and inspection</li>
                      <li>Sign closing documents</li>
                      <li>Complete financing and title transfer</li>
                      <li>Receive keys and move into your new home</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Considerations */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Important Considerations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">Timeline Expectations</h3>
                <p className="text-muted-foreground">
                  New construction homes typically take 4-8 months to build. Factor this timeline 
                  into your plans, especially if you're selling a current home or have a lease ending.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">Financing</h3>
                <p className="text-muted-foreground">
                  Construction loans work differently than traditional mortgages. Your buyer's agent 
                  can connect you with lenders experienced in new construction financing.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">Upgrades & Customizations</h3>
                <p className="text-muted-foreground">
                  Builder upgrades can significantly impact your final price. Prioritize structural 
                  upgrades that are difficult to change later, and consider doing cosmetic upgrades 
                  yourself to save money.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">Warranties</h3>
                <p className="text-muted-foreground">
                  New construction homes come with builder warranties. Understand what's covered, 
                  for how long, and what the warranty process looks like before closing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Use a Buyer's Agent */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Why Work With a Buyer's Agent for New Construction?
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">No Additional Cost</h3>
                  <p className="text-muted-foreground">
                    Buyer's agent representation comes at no extra cost to you. The commission 
                    structure means you get professional advocacy and guidance at no additional expense.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">Expert Contract Review</h3>
                  <p className="text-muted-foreground">
                    Builder contracts are complex and favor the builder. Your agent will review 
                    every clause to ensure your interests are protected.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">Access to Incentives</h3>
                  <p className="text-muted-foreground">
                    Your buyer's agent knows about current builder incentives, pricing promotions, 
                    and financing options that might not be advertised publicly.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">Single Point of Contact</h3>
                  <p className="text-muted-foreground">
                    Your agent coordinates with the builder, lender, inspector, and other parties 
                    so you have one person managing the process and answering your questions.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Button size="lg" asChild>
                <Link href="/how-i-help">
                  Learn More About How I Help
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
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
                <h3 className="text-xl font-semibold mb-3">How long does the new construction buying process take?</h3>
                <p className="text-muted-foreground">
                  The new construction process typically takes 4-8 months from contract to closing, depending on whether the home is already under construction or a standard new build. Quick move-in homes can close in 30-90 days, while standard builds take 4-6 months.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">What's different about buying new construction versus an existing home?</h3>
                <p className="text-muted-foreground">
                  New construction offers warranties, modern features, customization options, and no immediate repairs. However, the timeline is longer, and you may need to wait for construction to complete. The contract process is also different from traditional home sales.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">Do I need a buyer's agent for new construction?</h3>
                <p className="text-muted-foreground">
                  Yes! A buyer's agent is especially valuable for new construction. They'll review builder contracts (which favor the builder), negotiate terms, coordinate inspections, and ensure your interests are protected—all at no additional cost to you.
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
              Ready to Start Your New Home Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let Dr. Jan Duffy guide you through the process of buying your perfect Beazer home.
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

