import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Phone, Mail, Calendar } from 'lucide-react'
import Link from 'next/link'
import { generateFAQPageSchema, generateBreadcrumbSchema } from '@/lib/schema/structured-data'
import { StructuredData } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'FAQ: Buying Beazer Homes in Las Vegas | Dr. Jan Duffy',
  description: 'Frequently asked questions about buying Beazer Homes in Las Vegas. Learn about the buying process, buyer\'s agents, financing, and new construction homes. Get answers from Dr. Jan Duffy, Award Winning Buyer Agent.',
  alternates: {
    canonical: 'https://www.duffyrealtyoflasvegas.com/faq',
  },
  openGraph: {
    title: 'FAQ: Buying Beazer Homes in Las Vegas | Dr. Jan Duffy',
    description: 'Answers to common questions about buying new construction homes in Las Vegas.',
    url: 'https://www.duffyrealtyoflasvegas.com/faq',
    type: 'website',
  },
}

export default function FAQPage() {
  const faqs = [
    {
      category: 'About Buyer\'s Agents',
      questions: [
        {
          q: 'What is a buyer\'s agent?',
          a: 'A buyer\'s agent is a licensed real estate professional who represents your interests throughout the home buying process. Unlike the builder\'s sales team, who work for the builder, a buyer\'s agent works exclusively for you, providing advocacy, contract review, negotiation, and expert guidance—all at no additional cost to you. They protect your interests and ensure you make informed decisions.',
        },
        {
          q: 'Do I need a buyer\'s agent to buy a Beazer home?',
          a: 'While not required, working with a buyer\'s agent like Dr. Jan Duffy provides significant benefits. You get professional representation, contract review, negotiation, and expert guidance—all at no additional cost to you. Beazer welcomes buyer\'s agent representation. A buyer\'s agent is especially valuable for new construction because builder contracts are complex and favor the builder.',
        },
        {
          q: 'Do I pay extra to work with a buyer\'s agent?',
          a: 'No. The real estate commission structure means buyer\'s agent representation comes at no additional cost to you. The commission splits happen on the builder\'s side regardless of whether you work with an agent. By working with Dr. Jan Duffy, you get professional representation and advocacy at no extra expense.',
        },
        {
          q: 'What if I already started working with the builder\'s sales team?',
          a: 'In many cases, you can still bring in a buyer\'s agent even if you\'ve already been working with the builder\'s sales team. Contact Dr. Jan Duffy immediately—the sooner she\'s involved, the better she can help you. She can step in to provide representation and ensure your interests are protected, even if you\'ve already visited communities.',
        },
        {
          q: 'What does a buyer\'s agent do during the new construction process?',
          a: 'A buyer\'s agent provides comprehensive support throughout the entire process: helping you choose the right community and floor plan, reviewing and negotiating the purchase contract, coordinating design center selections, attending construction walkthroughs, ensuring quality standards are met, coordinating with lenders and title companies, and handling closing details. Dr. Jan Duffy manages all of this for you.',
        },
      ],
    },
    {
      category: 'About Beazer Homes',
      questions: [
        {
          q: 'What are Beazer homes known for?',
          a: 'Beazer Homes is known for building energy-efficient, ENERGY STAR® certified homes with smart features that save homeowners money every month. They offer flexible floor plans (Choice Plans), quality construction, personalized design options, and comprehensive warranties. Beazer Homes is one of the nation\'s largest homebuilders and sets industry standards for energy efficiency and home personalization.',
        },
        {
          q: 'Is Beazer a good homebuilder?',
          a: 'Yes, Beazer Homes is recognized as a quality homebuilder. They are one of the nation\'s largest homebuilders with a strong reputation for energy-efficient homes, flexible floor plan configurations, comprehensive new home warranties, and thoughtful design. Beazer Homes builds homes that set industry standards for energy efficiency. Many homeowners appreciate their quality construction, smart home features, and the money-saving benefits of ENERGY STAR® certification.',
        },
        {
          q: 'What states are Beazer homes in?',
          a: 'Beazer Homes operates in multiple states across the United States. In Nevada, Beazer Homes has communities in Las Vegas, Henderson, Boulder City, and Mesquite. Dr. Jan Duffy specializes as a buyer\'s agent for all Beazer Homes communities in the Las Vegas area.',
        },
        {
          q: 'What features do Beazer homes include?',
          a: 'Beazer Homes include ENERGY STAR® certification, smart home features, flexible floor plan configurations (Choice Plans), energy-efficient appliances, quality construction, and comprehensive warranties. Many communities offer 2-3 car garages, spacious floor plans, modern designs, and access to community amenities. All features are designed to save homeowners money on utility bills while providing comfortable, modern living spaces.',
        },
        {
          q: 'How many Beazer Homes communities are in Las Vegas?',
          a: 'Dr. Jan Duffy represents buyers across 12 Beazer Homes communities in the Las Vegas area, including communities in Henderson, Las Vegas, Boulder City, and Mesquite. These include popular communities like Sunterra, Emerson Estates, Rainbow Crossing, Jasper Point, and others. Each community offers different floor plans, price points, and amenities to suit various lifestyles.',
        },
        {
          q: 'What is ENERGY STAR certification?',
          a: 'ENERGY STAR® is a government-backed certification that indicates a home meets strict energy efficiency guidelines. Beazer Homes are ENERGY STAR® certified, meaning they use 20-30% less energy than standard homes, which translates to lower utility bills. This certification includes energy-efficient appliances, insulation, windows, and HVAC systems.',
        },
        {
          q: 'What are Choice Plans?',
          a: 'Choice Plans are Beazer\'s flexible floor plan configurations that allow you to customize your home layout at no additional cost. This means you can adjust room sizes, move walls, or modify the layout within the same floor plan to better suit your lifestyle. It\'s a unique feature that allows for personalization without the expense of structural upgrades.',
        },
      ],
    },
    {
      category: 'Buying Process & Timeline',
      questions: [
        {
          q: 'How long does it take to build a new Beazer home?',
          a: 'Construction timelines typically range from 4-8 months, depending on whether the home is already under construction, a standard build, or custom. Quick move-in homes (already under construction) can close in 30-90 days. Standard new builds take 4-6 months from contract to closing. Your buyer\'s agent will help you plan accordingly and manage expectations throughout the process.',
        },
        {
          q: 'Can I customize a Beazer home?',
          a: 'Yes, Beazer Homes offers various customization options depending on the construction stage. You can typically select finishes, colors, and upgrades through their design center. Choice Plans allow for flexible floor plan configurations. Structural changes are usually limited to early stages of construction. Dr. Jan Duffy can help you understand what options are available for your chosen home and which upgrades add the most value.',
        },
        {
          q: 'What are lot premiums?',
          a: 'Lot premiums are additional fees for desirable home sites within a community. These might include corner lots, lots with better views, larger lots, or lots backing to open space or greenbelts. Premiums can range from a few thousand to tens of thousands of dollars. Your buyer\'s agent can help you understand which lot premiums add value and which to consider carefully based on your preferences and budget.',
        },
        {
          q: 'What happens if there are delays in construction?',
          a: 'Delays can happen due to weather, supply chain issues, permit delays, or other factors. Your purchase contract will outline how delays are handled and what protections you have. Dr. Jan Duffy will communicate with the builder about timelines, help manage expectations, and ensure your contract provides appropriate safeguards. She\'ll keep you informed throughout the process.',
        },
        {
          q: 'Can I visit my home during construction?',
          a: 'Yes, you\'ll typically have scheduled walkthroughs at key stages: framing walkthrough, pre-drywall inspection, and final walkthrough before closing. The builder will coordinate these visits. Dr. Jan Duffy will attend walkthroughs with you to ensure quality, verify that selected upgrades are installed correctly, and address any concerns. Unscheduled visits are usually not permitted for safety reasons.',
        },
        {
          q: 'What is a quick move-in home?',
          a: 'Quick move-in homes are homes that are already under construction or completed and available for immediate or near-immediate occupancy. These homes typically close within 30-90 days, making them ideal if you need to move quickly. You may have limited customization options since construction has already progressed, but you can still select some finishes if timing allows.',
        },
        {
          q: 'When should I sell my current home?',
          a: 'This depends on your situation and the timeline for your new Beazer home. If buying a quick move-in home, you may need to sell quickly. For standard builds (4-6 months), you have more flexibility. Some buyers sell first and rent temporarily, others use bridge loans, and some time the sale to coincide with closing. Dr. Jan Duffy can help you create a timeline that works for your situation.',
        },
      ],
    },
    {
      category: 'Inspections & Quality',
      questions: [
        {
          q: 'Do I need a home inspection for new construction?',
          a: 'Yes, absolutely. Even though it\'s new construction, inspections are important. You\'ll want inspections at key stages: pre-drywall (to see behind the walls), and final inspection before closing. Inspections can catch issues early when they\'re easier to fix. Dr. Jan Duffy will coordinate inspections and ensure any issues are properly documented and addressed.',
        },
        {
          q: 'What if I find problems during the final walkthrough?',
          a: 'The final walkthrough is designed to identify any issues before closing. Any defects, incomplete work, or items not matching your selections should be documented in writing. The builder will address these items before closing. Dr. Jan Duffy will ensure all issues are properly documented, negotiate with the builder to resolve them, and verify everything is completed to your satisfaction before you close.',
        },
        {
          q: 'What warranties come with a new Beazer home?',
          a: 'New Beazer homes come with comprehensive builder warranties that typically include: 1-year coverage for workmanship and materials, 2-year coverage for plumbing, electrical, and HVAC systems, and up to 10-year structural warranty. Warranty coverage periods vary by component. Dr. Jan Duffy will review all warranty information with you and ensure you understand what\'s covered, for how long, and the warranty claim process.',
        },
        {
          q: 'How do I handle warranty issues after closing?',
          a: 'Beazer Homes provides a warranty service process for addressing any issues after closing. You\'ll submit warranty requests through their system, and they\'ll schedule repairs. As your buyer\'s agent, Dr. Jan Duffy remains available to help coordinate warranty claims and ensure issues are addressed promptly. Most new construction issues are minor and covered by the warranty.',
        },
      ],
    },
    {
      category: 'Financing & Costs',
      questions: [
        {
          q: 'How much down payment do I need?',
          a: 'Down payment requirements vary by loan type. FHA loans require 3.5% minimum, conventional loans can be as low as 3% for qualified first-time buyers, and VA loans offer 0% down for eligible veterans. The down payment amount affects your monthly payment and may impact whether you need private mortgage insurance (PMI). Dr. Jan Duffy can connect you with lenders experienced in new construction financing to explore all options.',
        },
        {
          q: 'Are there incentives available from Beazer Homes?',
          a: 'Yes, Beazer Homes regularly offers incentives such as financing assistance, upgrade credits, closing cost help, rate buy-downs, or pricing promotions. These incentives change frequently and may vary by community. As a contracted Beazer agent, Dr. Jan Duffy has access to current incentive information and can help structure your offer to maximize available benefits. Some incentives may be combinable, others may not.',
        },
        {
          q: 'What are closing costs?',
          a: 'Closing costs include lender fees, title insurance, appraisal, inspection, prepaid items (property taxes, insurance, HOA fees), and various other fees. They typically total 2-5% of the home\'s purchase price. Some builders, including Beazer, may offer incentives to help cover closing costs. Your buyer\'s agent will review all closing costs with you, help you understand each fee, and negotiate where possible.',
        },
        {
          q: 'Do I need a different type of loan for new construction?',
          a: 'For homes already under construction or completed (quick move-in), standard mortgages work. For homes that haven\'t started building yet, you may need a construction-to-permanent loan, which converts to a traditional mortgage after construction. Some builders, including Beazer, have preferred lenders who specialize in new construction financing. Dr. Jan Duffy can connect you with experienced lenders.',
        },
        {
          q: 'What about HOA fees?',
          a: 'Many Beazer Homes communities have homeowners associations (HOAs) that provide community amenities and maintenance. HOA fees vary by community and typically range from $50-$300+ per month. Fees cover things like landscaping, common areas, pools, and other amenities. Your buyer\'s agent will provide HOA information for each community and help you factor these costs into your budget.',
        },
        {
          q: 'What are property taxes in Las Vegas?',
          a: 'Nevada property taxes are relatively low compared to many states. In Clark County (Las Vegas area), the average effective property tax rate is around 0.6-0.7% of assessed value. New construction homes are assessed based on purchase price. Property taxes can be paid directly or included in your monthly mortgage payment through an escrow account. Dr. Jan Duffy can provide estimates for specific communities.',
        },
      ],
    },
    {
      category: 'Location & Communities',
      questions: [
        {
          q: 'What Beazer Homes communities are in Henderson?',
          a: 'Beazer Homes has several communities in Henderson, including Jasper Point, Juniper Trails, Cantata Point, Aria Crossing, and Westview Estates. Henderson is Nevada\'s second-largest city, known for nearby schools, master-planned communities, and community amenities. Dr. Jan Duffy represents buyers in all Henderson communities and can help you find the right one for your needs.',
        },
        {
          q: 'What Beazer Homes communities are in Las Vegas?',
          a: 'Beazer Homes has multiple communities in Las Vegas, including Sunterra, Emerson Estates, Rainbow Crossing, Rosa Point, Majestic Point South, and Marigold. Each community offers different floor plans, price points, and locations throughout the Las Vegas Valley. Dr. Jan Duffy knows all Las Vegas communities and can help you compare options and find the perfect fit.',
        },
        {
          q: 'Which community is right for me?',
          a: 'The best community depends on your budget, desired location, preferred floor plans, lifestyle needs, and priorities (schools, amenities, commute, etc.). Dr. Jan Duffy will ask about your preferences and help you compare communities based on your specific criteria. She can schedule tours and help you evaluate each community\'s pros and cons.',
        },
        {
          q: 'Are there Beazer Homes communities near nearby public schools?',
          a: 'Beazer Homes communities are served by Clark County School District campuses. Dr. Jan Duffy can provide information about school districts, ratings, and proximity to schools for each community. She can help you find communities in the attendance zones you want. Check current CCSD and Nevada state data for school ratings.',
        },
      ],
    },
    {
      category: 'About Dr. Jan Duffy',
      questions: [
        {
          q: 'Why should I choose Dr. Jan Duffy as my buyer\'s agent?',
          a: 'Dr. Jan Duffy is an Award Winning Buyer Agent with specialized expertise in Beazer Homes. She has direct relationships with Beazer sales teams, comprehensive knowledge of all Las Vegas area communities, extensive experience with new construction contracts, and provides dedicated advocacy throughout your purchase—all at no additional cost to you. She\'s helped countless clients successfully purchase Beazer homes.',
        },
        {
          q: 'What areas does Dr. Jan Duffy serve?',
          a: 'Dr. Jan Duffy serves all Beazer Homes communities in the greater Las Vegas area, including Henderson, Las Vegas, Boulder City, and Mesquite. Her office is located at 4670 S Fort Apache Rd, Las Vegas, NV 89147. She\'s knowledgeable about all these areas and can help you understand the benefits of each location.',
        },
        {
          q: 'How do I get started with Dr. Jan Duffy?',
          a: 'Simply contact Dr. Jan Duffy by phone at (702) 500-1955 or email at DrDuffySells@DuffyRealtyOfLasVegas.com to schedule a consultation. She\'ll discuss your home buying goals, budget, timeline, and preferences. Then she\'ll help you explore available Beazer Homes communities that match your criteria. There\'s no obligation, and the consultation is free.',
        },
        {
          q: 'Does Dr. Jan Duffy work with all Beazer communities?',
          a: 'Yes. As a contracted Beazer Homes top agent, Dr. Jan Duffy represents buyers across all of Beazer\'s Las Vegas area communities, including those in Henderson, Las Vegas, Boulder City, and Mesquite. She has direct access to inventory, pricing, and incentives for all communities.',
        },
        {
          q: 'What makes Dr. Jan Duffy an "Award Winning" agent?',
          a: 'Dr. Jan Duffy has earned recognition as an Award Winning Buyer Agent through her exceptional service, expertise, and results helping clients purchase Beazer homes. Her awards reflect her commitment to client advocacy, deep knowledge of the Las Vegas market, and successful track record helping buyers navigate the new construction process.',
        },
      ],
    },
    {
      category: 'Reviews & Testimonials',
      questions: [
        {
          q: 'What do customers say about Beazer Homes?',
          a: 'Many Beazer Homes customers appreciate the quality construction, energy-efficient features, thoughtful home designs, and comprehensive warranties. Reviews often highlight the smart home features that save money on utilities, the flexibility of Choice Plans and floor plan options, and the overall value. Working with a buyer\'s agent like Dr. Jan Duffy ensures you get the best experience and representation throughout your home buying journey.',
        },
        {
          q: 'How can I read reviews of Beazer Homes communities?',
          a: 'You can find reviews on various platforms, but the best way to learn about Beazer Homes communities is to speak directly with Dr. Jan Duffy, who has extensive experience helping clients purchase Beazer homes in Las Vegas. She can provide honest, first-hand insights about each community, floor plans, the buying process, builder responsiveness, and overall experience. Contact her at (702) 500-1955 for personalized guidance.',
        },
        {
          q: 'Can I talk to past clients of Dr. Jan Duffy?',
          a: 'Dr. Jan Duffy would be happy to connect you with satisfied clients who can share their experience working with her to purchase Beazer homes. These testimonials can provide valuable insights into her process, communication style, and results. Ask her about client references when you schedule your consultation.',
        },
      ],
    },
  ]

  // Flatten FAQs for schema
  const allFAQs = faqs.flatMap(category => 
    category.questions.map(q => ({ question: q.q, answer: q.a }))
  )
  
  const faqSchema = generateFAQPageSchema(allFAQs)
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.duffyrealtyoflasvegas.com' },
    { name: 'FAQ', url: 'https://www.duffyrealtyoflasvegas.com/faq' },
  ])

  return (
    <>
      <StructuredData data={faqSchema} />
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
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Common questions about buying Beazer Homes in Las Vegas
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {faqs.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">{category.category}</h2>
                  <div className="space-y-4">
                    {category.questions.map((faq, index) => (
                      <div key={index} className="bg-card p-6 rounded-lg border border-border">
                        <h3 className="text-lg font-semibold mb-3 text-foreground">
                          {faq.q}
                        </h3>
                        <p className="text-muted-foreground">
                          {faq.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Contact Dr. Jan Duffy directly to get answers to your specific questions about 
              buying a Beazer home in Las Vegas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
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
              <Button size="lg" variant="outline" asChild>
                <a href="mailto:DrDuffySells@DuffyRealtyOfLasVegas.com?subject=Questions About Buying Beazer Homes">
                  <Calendar className="w-5 h-5" />
                  Schedule Consultation
                </a>
              </Button>
            </div>
            <div className="text-sm text-muted-foreground">
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

