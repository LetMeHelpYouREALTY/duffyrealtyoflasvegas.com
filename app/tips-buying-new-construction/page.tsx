import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Phone, Mail, Calendar, CheckCircle, Lightbulb } from 'lucide-react'
import Link from 'next/link'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema/structured-data'

export const metadata: Metadata = {
  title: 'Tips For Buying New Construction Homes Las Vegas | Dr. Jan Duffy',
  description: 'Expert tips for buying new construction homes in Las Vegas. Learn from Dr. Jan Duffy, Award Winning Buyer Agent for Beazer Homes. Essential advice for purchasing new build homes.',
  alternates: {
    canonical: 'https://www.duffyrealtyoflasvegas.com/tips-buying-new-construction',
  },
  openGraph: {
    title: 'Tips For Buying New Construction Homes Las Vegas | Dr. Jan Duffy',
    description: 'Expert tips and advice for buying new construction homes in Las Vegas.',
    url: 'https://www.duffyrealtyoflasvegas.com/tips-buying-new-construction',
    type: 'article',
  },
}

export default function TipsBuyingNewConstructionPage() {
  const articleSchema = generateArticleSchema({
    headline: 'Tips For Buying New Construction Homes Las Vegas',
    description: 'Expert tips and advice for buying new construction homes in Las Vegas from Award Winning Buyer Agent Dr. Jan Duffy.',
    url: 'https://www.duffyrealtyoflasvegas.com/tips-buying-new-construction',
    author: 'Dr. Jan Duffy',
  })
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.duffyrealtyoflasvegas.com' },
    { name: 'Tips For Buying New Construction', url: 'https://www.duffyrealtyoflasvegas.com/tips-buying-new-construction' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
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
                <Lightbulb className="w-4 h-4" />
                <span className="font-semibold text-sm">Expert Tips</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Tips For Buying New Construction Homes in Las Vegas
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Essential advice from an Award Winning Buyer Agent to help you make informed decisions when purchasing a new construction home.
            </p>
          </div>
        </div>
      </section>

      {/* Tips Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-8">
                Buying a new construction home in Las Vegas is an exciting journey, but it comes with unique considerations 
                that differ from purchasing an existing home. As an Award Winning Buyer Agent for Beazer Homes, I've helped 
                countless clients navigate this process successfully. Here are my top tips to help you make the best decisions.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold mb-6 mt-12">1. Work With a Buyer's Agent Specializing in New Construction</h2>
              <div className="flex items-start gap-3 mb-6">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-muted-foreground mb-3">
                    This is perhaps the most important tip. Builder contracts are complex and favor the builder. A buyer's 
                    agent who specializes in new construction understands these contracts, knows what to negotiate, and can 
                    protect your interests—all at no additional cost to you.
                  </p>
                  <p className="text-muted-foreground">
                    As a contracted Beazer Homes agent, I have direct access to current pricing, incentives, and inventory 
                    that might not be publicly advertised. I also understand the nuances of the new construction timeline 
                    and can help you plan accordingly.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-6 mt-12">2. Understand the Timeline and Plan Accordingly</h2>
              <div className="flex items-start gap-3 mb-6">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-muted-foreground mb-3">
                    New construction typically takes 4-8 months from contract to closing. If you need to move sooner, 
                    ask about "quick move-in" homes that are already under construction or completed.
                  </p>
                  <p className="text-muted-foreground">
                    Factor this timeline into your plans, especially if you're selling a current home or have a lease 
                    ending. Delays can happen, so build some flexibility into your timeline.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-6 mt-12">3. Get Pre-Approved Early</h2>
              <div className="flex items-start gap-3 mb-6">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-muted-foreground mb-3">
                    Pre-approval is essential, especially for new construction. It shows the builder you're serious and 
                    helps you understand your budget. I can connect you with lenders experienced in new construction 
                    financing who understand the unique requirements.
                  </p>
                  <p className="text-muted-foreground">
                    Keep your pre-approval current (they typically expire after 60-90 days) and don't make major financial 
                    changes during the construction period.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-6 mt-12">4. Research the Builder Thoroughly</h2>
              <div className="flex items-start gap-3 mb-6">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-muted-foreground mb-3">
                    Beazer Homes is one of the nation's largest homebuilders, known for ENERGY STAR® certified homes, 
                    energy-efficient features, and flexible floor plans. However, always research:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-3">
                    <li>Builder reputation and reviews</li>
                    <li>Warranty coverage and process</li>
                    <li>Quality of existing communities</li>
                    <li>Customer service responsiveness</li>
                  </ul>
                  <p className="text-muted-foreground">
                    As your buyer's agent, I can provide honest insights about Beazer Homes communities, floor plans, 
                    and the overall building process.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-6 mt-12">5. Visit Multiple Communities and Model Homes</h2>
              <div className="flex items-start gap-3 mb-6">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-muted-foreground mb-3">
                    Don't commit to the first community you visit. Tour multiple Beazer Homes communities to compare:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-3">
                    <li>Locations and proximity to work, schools, amenities</li>
                    <li>Floor plans and layouts</li>
                    <li>Community amenities and HOA information</li>
                    <li>Lot availability and premiums</li>
                    <li>Pricing and incentives</li>
                  </ul>
                  <p className="text-muted-foreground">
                    I can help you compare communities and identify which best fits your lifestyle and budget.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-6 mt-12">6. Be Strategic About Upgrades</h2>
              <div className="flex items-start gap-3 mb-6">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-muted-foreground mb-3">
                    Builder upgrades can significantly impact your final price. Prioritize:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-3">
                    <li><strong>Structural upgrades</strong> that are difficult to change later (lot size, floor plan modifications)</li>
                    <li><strong>Essential upgrades</strong> that affect daily living (appliances, flooring)</li>
                    <li><strong>Energy-efficient features</strong> that save money long-term</li>
                  </ul>
                  <p className="text-muted-foreground">
                    Consider doing cosmetic upgrades yourself after closing to save money. I can help you identify which 
                    upgrades add the most value.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-6 mt-12">7. Review the Contract Carefully</h2>
              <div className="flex items-start gap-3 mb-6">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-muted-foreground mb-3">
                    Builder contracts are very different from traditional real estate contracts and heavily favor the builder. 
                    Key items to understand:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-3">
                    <li>Timeline and milestone dates</li>
                    <li>Change order policies and costs</li>
                    <li>Warranty coverage and exclusions</li>
                    <li>What happens if there are delays</li>
                    <li>Final walkthrough and inspection rights</li>
                  </ul>
                  <p className="text-muted-foreground">
                    As your buyer's agent, I thoroughly review every contract clause and ensure you understand what you're 
                    agreeing to. I can also negotiate certain terms to better protect your interests.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-6 mt-12">8. Attend All Scheduled Walkthroughs</h2>
              <div className="flex items-start gap-3 mb-6">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-muted-foreground mb-3">
                    You'll typically have walkthroughs at key stages: framing, pre-drywall, and final walkthrough. 
                    Attend all of them and bring your buyer's agent. I'll help you:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-3">
                    <li>Identify any issues or concerns early</li>
                    <li>Verify selected upgrades are being installed correctly</li>
                    <li>Document everything thoroughly</li>
                    <li>Ensure quality standards are met</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-6 mt-12">9. Understand Warranties</h2>
              <div className="flex items-start gap-3 mb-6">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-muted-foreground mb-3">
                    New construction homes come with builder warranties, but coverage varies by component and timeframe. 
                    Understand:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-3">
                    <li>What's covered and for how long</li>
                    <li>Warranty claim process</li>
                    <li>What's excluded from coverage</li>
                    <li>When to address issues (before closing vs. after)</li>
                  </ul>
                  <p className="text-muted-foreground">
                    Beazer Homes provides comprehensive warranties on their new construction homes. I'll review all 
                    warranty information with you.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-6 mt-12">10. Don't Skip the Final Inspection</h2>
              <div className="flex items-start gap-3 mb-6">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-muted-foreground mb-3">
                    Even though it's new construction, always do a final inspection before closing. I'll attend with you 
                    to ensure:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-3">
                    <li>All selected upgrades are installed correctly</li>
                    <li>No defects or incomplete work</li>
                    <li>Everything is clean and move-in ready</li>
                    <li>All issues are documented and addressed before closing</li>
                  </ul>
                </div>
              </div>

              <div className="bg-card p-8 rounded-lg border border-border mt-12 mb-8">
                <h3 className="text-2xl font-bold mb-4">Ready to Apply These Tips?</h3>
                <p className="text-muted-foreground mb-6">
                  As an Award Winning Buyer Agent for Beazer Homes, I'm here to guide you through every step of 
                  buying your new construction home in Las Vegas. Let's put these tips into practice together.
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
                      View Beazer Communities
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Related Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/buyers-guide" className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold mb-2">Complete Buyer's Guide</h3>
                <p className="text-muted-foreground text-sm">Step-by-step guide to buying new construction</p>
              </Link>
              <Link href="/first-time-buyers" className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold mb-2">First-Time Buyer Guide</h3>
                <p className="text-muted-foreground text-sm">Specialized guide for first-time homebuyers</p>
              </Link>
              <Link href="/new-construction-process" className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold mb-2">Construction Process</h3>
                <p className="text-muted-foreground text-sm">Understand the new construction timeline</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Buy Your New Construction Home?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let me help you apply these tips and find your perfect Beazer home in Las Vegas.
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
    </>
  )
}

