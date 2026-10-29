import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Phone, Mail, Calendar, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'First-Time Homebuyer Guide Las Vegas | Dr. Jan Duffy',
  description: 'Complete first-time homebuyer guide for Las Vegas. Learn about down payments, mortgages, the buying process, and why new construction might be right for you. Expert guidance from Dr. Jan Duffy.',
  alternates: {
    canonical: 'https://www.duffyrealtyoflasvegas.com/first-time-buyers',
  },
  openGraph: {
    title: 'First-Time Homebuyer Guide Las Vegas | Dr. Jan Duffy',
    description: 'Complete guide for first-time homebuyers in Las Vegas.',
    url: 'https://www.duffyrealtyoflasvegas.com/first-time-buyers',
    type: 'website',
  },
}

export default function FirstTimeBuyersPage() {
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
              First-Time Homebuyer Guide for Las Vegas
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Everything you need to know to buy your first home in Las Vegas
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
                Buying your first home is one of life's biggest milestones—and one of the most 
                significant financial decisions you'll make. If you're a first-time homebuyer in 
                Las Vegas, this guide will help you understand the process, prepare for homeownership, 
                and make informed decisions about your purchase.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Getting Started: Preparing to Buy</h2>
            
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Check Your Credit Score
                </h3>
                <p className="text-muted-foreground mb-3">
                  Your credit score significantly impacts your mortgage rate and loan options. 
                  Aim for a score of 620 or higher for conventional loans, though some programs 
                  accept lower scores.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Review your credit report for errors</li>
                  <li>Pay down existing debt</li>
                  <li>Avoid opening new credit accounts</li>
                  <li>Make all payments on time</li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Save for Down Payment & Closing Costs
                </h3>
                <p className="text-muted-foreground mb-3">
                  While many first-time buyer programs allow low down payments, you'll still need 
                  funds for closing costs, moving expenses, and emergency repairs.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Conventional loans: 3-20% down payment</li>
                  <li>FHA loans: 3.5% down payment minimum</li>
                  <li>VA loans: 0% down (for eligible veterans)</li>
                  <li>Closing costs: Typically 2-5% of home price</li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Get Pre-Approved
                </h3>
                <p className="text-muted-foreground mb-3">
                  Pre-approval tells you how much you can borrow and shows sellers you're serious. 
                  It's different from pre-qualification—pre-approval involves a credit check and 
                  documentation review.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Shop around with multiple lenders</li>
                  <li>Compare interest rates and loan terms</li>
                  <li>Understand your maximum purchase price</li>
                  <li>Keep pre-approval letter current (usually valid 60-90 days)</li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Determine Your Budget
                </h3>
                <p className="text-muted-foreground mb-3">
                  Don't just consider the purchase price—factor in property taxes, insurance, 
                  HOA fees (if applicable), maintenance, and utilities when determining what 
                  you can comfortably afford.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Total monthly housing costs should be 28-30% of gross income</li>
                  <li>Factor in property taxes and insurance</li>
                  <li>Account for HOA fees in many Las Vegas communities</li>
                  <li>Budget for ongoing maintenance and repairs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why New Construction for First-Time Buyers */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Why New Construction is Great for First-Time Buyers</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">Everything is Brand New</h3>
                <p className="text-muted-foreground">
                  No need to worry about aging appliances, outdated systems, or hidden problems. 
                  Everything in a new construction home is brand new and covered by warranties.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">Energy Efficiency</h3>
                <p className="text-muted-foreground">
                  New homes are built with modern energy-efficient features, helping you save 
                  money on utility bills from day one.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">Builder Warranties</h3>
                <p className="text-muted-foreground">
                  Comprehensive warranties cover your home and its systems, giving you peace of 
                  mind and protection from unexpected repair costs.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">Move-In Ready</h3>
                <p className="text-muted-foreground">
                  No need to deal with renovations or repairs before moving in. New construction 
                  homes are ready for you to move in and start enjoying.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">Modern Features</h3>
                <p className="text-muted-foreground">
                  New homes come with modern features, open floor plans, and current design trends 
                  that older homes may lack.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">Choose Your Design</h3>
                <p className="text-muted-foreground">
                  With new construction, you can often select finishes, colors, and some upgrades 
                  to make the home truly yours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* First-Time Buyer Programs */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">First-Time Homebuyer Programs</h2>
            
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">FHA Loans</h3>
                <p className="text-muted-foreground mb-3">
                  Federal Housing Administration loans allow down payments as low as 3.5% and 
                  are popular with first-time buyers. They're more flexible with credit requirements 
                  than conventional loans.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">VA Loans</h3>
                <p className="text-muted-foreground mb-3">
                  If you're a veteran or active-duty military member, VA loans offer 0% down 
                  payment options and no private mortgage insurance requirements.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">Conventional Loans</h3>
                <p className="text-muted-foreground mb-3">
                  Conventional loans can require as little as 3% down for first-time buyers. 
                  While they have stricter credit requirements, they often offer better rates 
                  for well-qualified buyers.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">Down Payment Assistance</h3>
                <p className="text-muted-foreground mb-3">
                  Various state and local programs may offer down payment assistance for first-time 
                  buyers. Your buyer's agent can help you identify programs you might qualify for.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common First-Time Buyer Questions */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Common First-Time Buyer Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-2">How much do I need for a down payment?</h3>
                <p className="text-muted-foreground">
                  Down payment requirements vary by loan type. FHA loans require 3.5% minimum, 
                  conventional loans can be as low as 3% for qualified first-time buyers, and 
                  VA loans require 0% down for eligible borrowers. However, larger down payments 
                  can result in better rates and lower monthly payments.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-2">Should I buy new construction or an existing home?</h3>
                <p className="text-muted-foreground">
                  New construction offers warranties, modern features, and no immediate repairs, 
                  but may have longer timelines. Existing homes can be available immediately and 
                  sometimes offer more square footage for the price. Consider your timeline, 
                  priorities, and budget when deciding.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-2">What are closing costs?</h3>
                <p className="text-muted-foreground">
                  Closing costs include lender fees, title insurance, appraisal, inspection, 
                  and various other fees. They typically total 2-5% of the home's purchase price. 
                  Some builders may offer incentives to help cover closing costs.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-2">Do I need a buyer's agent?</h3>
                <p className="text-muted-foreground">
                  Absolutely. A buyer's agent represents your interests, helps you understand 
                  contracts, negotiates on your behalf, and guides you through the process—all 
                  at no additional cost to you. This is especially valuable for first-time buyers 
                  who may be unfamiliar with the process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How I Help First-Time Buyers */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              How I Help First-Time Buyers
            </h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">Education & Guidance</h3>
                  <p className="text-muted-foreground">
                    I explain every step of the process in terms you understand, so you feel 
                    confident in your decisions.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">Budget Planning</h3>
                  <p className="text-muted-foreground">
                    I help you understand the true cost of homeownership beyond just the purchase 
                    price, so you can budget effectively.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">Lender Connections</h3>
                  <p className="text-muted-foreground">
                    I can connect you with trusted lenders who specialize in first-time buyer 
                    programs and understand new construction financing.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">Contract Protection</h3>
                  <p className="text-muted-foreground">
                    I carefully review all contracts to ensure you understand what you're agreeing 
                    to and that your interests are protected.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">Questions Answered</h3>
                  <p className="text-muted-foreground">
                    No question is too basic. I'm here to answer all your questions throughout 
                    the entire process.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Button size="lg" asChild>
                <Link href="/buyers-guide">
                  Read Complete Buyer's Guide
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
                <h3 className="text-xl font-semibold mb-3">How much down payment do I need for a first home?</h3>
                <p className="text-muted-foreground">
                  Down payment requirements vary by loan type. FHA loans require 3.5% minimum, conventional loans can be as low as 3% for qualified first-time buyers, and VA loans offer 0% down for eligible veterans. Dr. Jan Duffy can connect you with lenders experienced in first-time buyer programs.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">Is new construction a good choice for first-time buyers?</h3>
                <p className="text-muted-foreground">
                  Yes! New construction is excellent for first-time buyers because everything is brand new with warranties, modern energy-efficient features, and no immediate repair needs. However, you'll need to plan for the 4-8 month construction timeline.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">What help is available for first-time homebuyers?</h3>
                <p className="text-muted-foreground">
                  There are various first-time buyer programs, down payment assistance options, and specialized loan programs available. Dr. Jan Duffy can connect you with lenders who specialize in first-time buyer programs and help you explore all available options.
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
              Ready to Buy Your First Home?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's make your first home purchase a smooth and successful experience. Contact 
              me today to get started.
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
                <a href="mailto:DrDuffySells@DuffyRealtyOfLasVegas.com?subject=First-Time Buyer Consultation">
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

