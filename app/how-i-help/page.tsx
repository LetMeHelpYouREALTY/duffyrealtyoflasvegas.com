import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Phone, Mail, Calendar, MapPin, Award, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Why Choose a Beazer Homes Buyer\'s Agent? | Dr. Jan Duffy',
  description: 'Learn how Dr. Jan Duffy, Beazer Homes\' contracted top agent, makes the difference when buying a new home in Las Vegas. Get insider access, professional advocacy, and expert guidance.',
  alternates: {
    canonical: 'https://www.duffyrealtyoflasvegas.com/how-i-help',
  },
  openGraph: {
    title: 'Why Choose a Beazer Homes Buyer\'s Agent? | Dr. Jan Duffy',
    description: 'Discover how working with a buyer\'s agent gives you an advantage when purchasing a Beazer home in Las Vegas.',
    url: 'https://www.duffyrealtyoflasvegas.com/how-i-help',
    type: 'website',
  },
}

export default function HowIHelpPage() {
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
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Buying a Beazer Home in Las Vegas? Here's How Dr. Jan Duffy Makes the Difference
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              What You Need to Know About Working With a Beazer Homes Buyer's Agent
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                When you're ready to purchase a new Beazer home in Las Vegas, you have options. 
                You can work directly with Beazer's sales team, or you can partner with a buyer's 
                agent like <strong className="text-foreground">Dr. Jan Duffy</strong>—and the difference is significant.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                As one of Beazer Homes' contracted top agents, Dr. Jan Duffy brings an insider's 
                perspective to your new home purchase while advocating specifically for your interests 
                throughout the buying process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes a Buyer's Agent Different */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              What Makes a Beazer Homes Buyer's Agent Different
            </h2>
            <div className="space-y-8">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  Direct Beazer Partnership
                </h3>
                <p className="text-muted-foreground">
                  Dr. Jan Duffy works under contract with Beazer Homes, meaning she has direct 
                  relationships with their sales teams, pricing specialists, and community managers 
                  across Las Vegas. This isn't a generic "I buy homes everywhere" situation—this 
                  is specialized expertise in Beazer's inventory, incentives, and processes.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  Your Advocate in the Process
                </h3>
                <p className="text-muted-foreground">
                  While Beazer's sales representatives work for the builder, your buyer's agent 
                  works for you. Dr. Jan reviews every aspect of your contract, negotiates on your 
                  behalf, coordinates inspections, and ensures your interests are protected—all 
                  standard parts of representation that add real value.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  Access to Current Incentives & Pricing
                </h3>
                <p className="text-muted-foreground">
                  Beazer regularly updates incentives, pricing adjustments, and financing promotions. 
                  As a contracted agent, Dr. Jan has real-time access to these details and knows 
                  exactly how to structure your offer to maximize your benefits without leaving 
                  money on the table.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  Coordination Through Closing
                </h3>
                <p className="text-muted-foreground">
                  From contract to final walkthrough, Dr. Jan manages the timeline, coordinates 
                  with Beazer's closing team, handles inspections and appraisals, and makes sure 
                  nothing falls through the cracks. She's your single point of contact when 
                  questions arise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How the Process Works */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              How the Buyer's Agent Process Works
            </h2>
            <div className="space-y-8">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2">Step 1: Explore Your Options</h3>
                <p className="text-muted-foreground">
                  Dr. Jan shows you available Beazer communities and floor plans that match your 
                  needs, budget, and timeline. She'll walk you through the specifics—lot premiums, 
                  home site selections, what upgrades actually add value—with the perspective of 
                  someone who's seen how similar homes perform.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2">Step 2: Structure Your Offer Strategically</h3>
                <p className="text-muted-foreground">
                  When you find the right home, Dr. Jan handles the offer process. She knows 
                  Beazer's current incentive structure and can position your offer to get the best 
                  possible terms—whether that's financing assistance, upgrade credits, closing cost 
                  help, or pricing leverage.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2">Step 3: Manage the Contract & Inspections</h3>
                <p className="text-muted-foreground">
                  Your purchase agreement is reviewed carefully. Dr. Jan coordinates the inspection 
                  timeline, reviews appraisals, and handles any builder-specific questions that 
                  come up. She bridges the gap between you and Beazer's team.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2">Step 4: Close With Confidence</h3>
                <p className="text-muted-foreground">
                  Final walkthrough, title review, closing coordination—Dr. Jan manages the details 
                  so your closing goes smoothly and on schedule.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose a Buyer's Agent */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Why Buyers Choose a Beazer Homes Buyer's Agent
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">You're Not Paying Extra</h3>
                <p className="text-muted-foreground">
                  The real estate commission structure means you don't pay more to work with a 
                  buyer's agent. The commission splits happen on the builder's side regardless. 
                  By working with Dr. Jan, you get representation at no additional cost to you.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">Local Vegas Market Knowledge</h3>
                <p className="text-muted-foreground">
                  Dr. Jan doesn't just know Beazer—she knows Las Vegas. She understands neighborhood 
                  values, lot premiums, community amenities, and market timing. She brings that 
                  context to your Beazer purchase decision.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">Protection & Peace of Mind</h3>
                <p className="text-muted-foreground">
                  Having your own advocate reviewing documents, negotiating terms, and managing 
                  timelines protects you from missing details that could cost you thousands later.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">Insider Access</h3>
                <p className="text-muted-foreground">
                  As a contracted Beazer agent, Dr. Jan knows things about pricing trends, upcoming 
                  incentive changes, and inventory moves before they hit the general market. That 
                  information matters when you're making a six-figure decision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Buy Your Beazer Home the Right Way?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Whether you're a first-time buyer, upgrading, downsizing, or investing, Dr. Jan Duffy's 
              experience as a Beazer Homes buyer's agent means you'll navigate the process with 
              confidence, clarity, and someone firmly in your corner.
            </p>
            <p className="text-lg font-semibold mb-8">Let's talk about your Beazer home goals.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" asChild>
                <a href="tel:7025001955">
                  <Phone className="w-5 h-5" />
                  Call (702) 500-1955
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:7025001955">
                  <Phone className="w-5 h-5" />
                  Text (702) 500-1955
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="mailto:DrDuffySells@DuffyRealtyOfLasVegas.com">
                  <Mail className="w-5 h-5" />
                  Email Me
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="mailto:DrDuffySells@DuffyRealtyOfLasVegas.com?subject=Schedule Consultation">
                  <Calendar className="w-5 h-5" />
                  Schedule Consultation
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Common Questions About Beazer Homes Buyer's Agents
            </h2>
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-2">
                  Q: Can I use a buyer's agent if I'm buying a Beazer home?
                </h3>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Yes.</strong> In fact, Beazer welcomes buyer's 
                  agent representation. You have every right to work with Dr. Jan throughout your purchase.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-2">
                  Q: Will the builder give me a better deal if I work directly with their sales team?
                </h3>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Not necessarily.</strong> Beazer's pricing and 
                  incentives are set by their corporate office. What changes is the representation 
                  you receive. With Dr. Jan, you get professional advocacy and contract review—things 
                  that protect your interests.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-2">
                  Q: Do I pay Dr. Jan a separate fee?
                </h3>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">No.</strong> Your buyer's agent representation 
                  is compensation through the standard real estate commission structure. You don't 
                  pay extra for this service.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-2">
                  Q: What if I already found a Beazer home I want to buy?
                </h3>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">It's not too late.</strong> Contact Dr. Jan 
                  immediately. In many cases, you can still bring her in to represent you, even if 
                  you've already been working with the builder's sales team. The sooner she's involved, 
                  the better she can help.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-2">
                  Q: Does Dr. Jan work with all Beazer communities in Las Vegas?
                </h3>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Yes.</strong> As a contracted Beazer Homes top 
                  agent, she represents buyers across all of Beazer's Las Vegas communities and floor plans.
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
                <h3 className="text-xl font-semibold mb-3">What is a buyer's agent and why do I need one?</h3>
                <p className="text-muted-foreground">
                  A buyer's agent is a licensed real estate professional who represents your interests throughout the home buying process. Unlike the builder's sales team, who work for the builder, a buyer's agent works exclusively for you, providing advocacy, contract review, negotiation, and expert guidance—all at no additional cost to you.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">Do I pay extra to work with a buyer's agent?</h3>
                <p className="text-muted-foreground">
                  No. The real estate commission structure means buyer's agent representation comes at no additional cost to you. The commission splits happen on the builder's side regardless of whether you work with an agent. By working with Dr. Jan Duffy, you get professional representation and advocacy at no extra expense.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">What if I already started working with the builder's sales team?</h3>
                <p className="text-muted-foreground">
                  In many cases, you can still bring in a buyer's agent even if you've already been working with the builder's sales team. Contact Dr. Jan Duffy immediately—the sooner she's involved, the better she can help you. She can step in to provide representation and ensure your interests are protected.
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

      {/* Contact Footer */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Dr. Jan Duffy | Las Vegas Real Estate Expert
            </h2>
            <p className="text-lg mb-2 opacity-90">Beazer Homes Buyer's Agent</p>
            <div className="space-y-2 text-sm opacity-80 mb-8">
              <p>
                <a href="tel:7025001955" className="underline hover:no-underline">
                  (702) 500-1955 (Professional)
                </a>
              </p>
              <p>
                <a href="tel:7025001955" className="underline hover:no-underline">
                  (702) 500-1955 (Marketing/Urgent)
                </a>
              </p>
              <p className="mt-4">
                <a
                  href="mailto:DrDuffySells@DuffyRealtyOfLasVegas.com"
                  className="underline hover:no-underline"
                >
                  DrDuffySells@DuffyRealtyOfLasVegas.com
                </a>
              </p>
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
            <p className="text-lg font-semibold">Your advocate in every transaction.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

