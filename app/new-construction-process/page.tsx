import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Phone, Mail, Calendar, Clock, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'New Construction Home Buying Process Timeline | Dr. Jan Duffy',
  description: 'Understand the new construction home buying process timeline. Learn what to expect from contract to closing when purchasing a Beazer home in Las Vegas. Expert guidance from Dr. Jan Duffy.',
  alternates: {
    canonical: 'https://www.duffyrealtyoflasvegas.com/new-construction-process',
  },
  openGraph: {
    title: 'New Construction Home Buying Process Timeline | Dr. Jan Duffy',
    description: 'Complete timeline and process for buying a new construction home.',
    url: 'https://www.duffyrealtyoflasvegas.com/new-construction-process',
    type: 'website',
  },
}

export default function NewConstructionProcessPage() {
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
              New Construction Home Buying Process
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Understanding the timeline and process from contract to closing
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card p-8 rounded-lg border border-border mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Clock className="w-6 h-6 text-primary" />
                Typical Timeline
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                The new construction process typically takes <strong className="text-foreground">4-8 months</strong> 
                from contract to closing, depending on whether you're purchasing an already-under-construction 
                home or one that hasn't started building yet.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li><strong className="text-foreground">Quick Move-In:</strong> 30-90 days (if home is already under construction)</li>
                <li><strong className="text-foreground">Standard Build:</strong> 4-6 months from contract</li>
                <li><strong className="text-foreground">Custom Build:</strong> 6-8 months or longer</li>
              </ul>
            </div>

            {/* Detailed Timeline */}
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Detailed Process Timeline</h2>
            
            <div className="space-y-8">
              {/* Month 1 */}
              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">Month 1: Contract & Design</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold mb-1">Week 1-2: Sign Purchase Agreement</p>
                          <p className="text-muted-foreground text-sm">
                            Review and sign the purchase contract. Your buyer's agent will thoroughly 
                            review all terms, timelines, and contingencies.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold mb-1">Week 2-4: Design Center & Upgrades</p>
                          <p className="text-muted-foreground text-sm">
                            Visit the design center to select finishes, colors, and upgrades. Make 
                            structural decisions (if applicable) and finalize customization choices.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold mb-1">Week 4: Secure Financing</p>
                          <p className="text-muted-foreground text-sm">
                            Complete mortgage application and secure financing. Provide all required 
                            documentation to your lender.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Months 2-4 */}
              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">2-4</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">Months 2-4: Construction Phase</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold mb-1">Foundation & Framing</p>
                          <p className="text-muted-foreground text-sm">
                            Builder pours foundation and frames the home. You may have an opportunity 
                            for a framing walkthrough to see the structure.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold mb-1">Mechanical Systems</p>
                          <p className="text-muted-foreground text-sm">
                            Plumbing, electrical, and HVAC systems are installed. Drywall goes up, 
                            and the home begins to take shape.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold mb-1">Interior Finishes</p>
                          <p className="text-muted-foreground text-sm">
                            Painting, flooring, cabinets, countertops, and your selected finishes 
                            are installed. The home begins to look like your future home.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Month 5-6 */}
              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">5-6</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">Months 5-6: Final Stages & Closing Prep</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold mb-1">Final Finishes & Cleanup</p>
                          <p className="text-muted-foreground text-sm">
                            Final touches are completed, landscaping is installed, and the home 
                            receives final cleaning and inspection by the builder.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold mb-1">Pre-Delivery Inspection</p>
                          <p className="text-muted-foreground text-sm">
                            You'll do a comprehensive walkthrough with the builder to identify any 
                            issues that need to be addressed before closing.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold mb-1">Final Walkthrough & Closing</p>
                          <p className="text-muted-foreground text-sm">
                            Final walkthrough to verify all issues are resolved, then closing day 
                            where you sign all documents and receive the keys to your new home.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect During Construction */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">What to Expect During Construction</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">Regular Updates</h3>
                <p className="text-muted-foreground">
                  The builder will provide periodic updates on construction progress. You may receive 
                  photos or invitations to view progress at certain milestones.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">Scheduled Walkthroughs</h3>
                <p className="text-muted-foreground">
                  You'll typically have opportunities to see your home at key stages: framing, 
                  pre-drywall, and final walkthrough before closing.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">Possible Delays</h3>
                <p className="text-muted-foreground">
                  Weather, supply chain issues, or other factors can cause delays. Your buyer's 
                  agent will help manage expectations and communicate with the builder about timelines.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">Change Limitations</h3>
                <p className="text-muted-foreground">
                  Once construction progresses past certain stages, making changes becomes difficult 
                  or impossible. Finalize all decisions early in the process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Milestones */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Key Milestones & Responsibilities</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2">Contract Signing</h3>
                <p className="text-muted-foreground mb-2">
                  <strong className="text-foreground">Your Role:</strong> Review contract thoroughly 
                  with your buyer's agent, understand all terms and timelines, sign purchase agreement.
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Builder's Role:</strong> Provide contract, 
                  schedule design center appointments, begin permit process if needed.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2">Design Selections</h3>
                <p className="text-muted-foreground mb-2">
                  <strong className="text-foreground">Your Role:</strong> Make all selections within 
                  the specified timeframe, finalize upgrade decisions, review and approve design center choices.
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Builder's Role:</strong> Provide design center 
                  access, assist with selections, provide pricing for upgrades.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2">Financing</h3>
                <p className="text-muted-foreground mb-2">
                  <strong className="text-foreground">Your Role:</strong> Provide all required 
                  documentation to lender, maintain credit standing, lock in interest rate when 
                  appropriate.
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Lender's Role:</strong> Process loan application, 
                  order appraisal, coordinate with builder for final loan approval.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2">Construction Progress</h3>
                <p className="text-muted-foreground mb-2">
                  <strong className="text-foreground">Your Role:</strong> Attend scheduled walkthroughs, 
                  ask questions, document any concerns, stay in communication with your buyer's agent.
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Builder's Role:</strong> Build home according 
                  to plans and specifications, provide progress updates, schedule walkthroughs.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2">Closing</h3>
                <p className="text-muted-foreground mb-2">
                  <strong className="text-foreground">Your Role:</strong> Complete final walkthrough, 
                  bring required funds to closing, sign all documents, obtain keys.
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">All Parties:</strong> Lender, title company, 
                  builder, and buyer's agent coordinate to complete closing on schedule.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips for Success */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Tips for a Smooth Process</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Work with a buyer's agent:</strong> Having 
                  professional representation ensures you understand the process and have someone 
                  advocating for your interests.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Finalize decisions early:</strong> Make all 
                  design and upgrade decisions as early as possible to avoid delays or additional costs.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Stay in communication:</strong> Keep in touch 
                  with your buyer's agent and builder throughout the process. Don't hesitate to ask questions.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Plan for timeline flexibility:</strong> While 
                  builders provide estimated completion dates, some delays are common. Plan accordingly.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Document everything:</strong> Take photos during 
                  walkthroughs, keep records of communications, and document any concerns that arise.
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
                <h3 className="text-xl font-semibold mb-3">What happens if construction is delayed?</h3>
                <p className="text-muted-foreground">
                  Delays can happen due to weather, supply chain issues, or other factors. Your purchase contract will outline how delays are handled. Your buyer's agent will communicate with the builder about timelines and help manage expectations throughout the process.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">Can I visit my home during construction?</h3>
                <p className="text-muted-foreground">
                  Yes, you'll typically have scheduled walkthroughs at key stages: framing, pre-drywall, and final walkthrough before closing. Your buyer's agent will attend walkthroughs with you to ensure quality and address any concerns.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">What should I do during the construction phase?</h3>
                <p className="text-muted-foreground">
                  Stay in communication with your buyer's agent, attend scheduled walkthroughs, keep your financing on track, and plan for your move-in timeline. Your buyer's agent will coordinate everything and keep you informed of progress.
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
              Ready to Navigate the New Construction Process?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let Dr. Jan Duffy guide you through every step of purchasing your new Beazer home.
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

