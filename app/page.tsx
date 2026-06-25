'use client'

import { Button } from '@/components/ui/button'
import { Phone, Mail, Calendar, Award, Home, Users, MapPin } from 'lucide-react'
import Image from 'next/image'
import { generateOrganizationSchema, generatePersonSchema, generateRealEstateAgentSchema, generateLocalBusinessSchema, generateFAQPageSchema } from '@/lib/schema/structured-data'
import { StructuredData } from '@/components/StructuredData'

const HOME_FAQS = [
  {
    question: "Do I need a buyer's agent to buy a Beazer home?",
    answer:
      "While not required, working with a buyer's agent like Dr. Jan Duffy provides significant benefits at no additional cost to you. You get professional representation, contract review, negotiation, and expert guidance throughout your home buying journey.",
  },
  {
    question: 'How long does it take to build a new Beazer home?',
    answer:
      'Construction timelines typically range from 4-8 months, depending on whether the home is already under construction or a standard new build. Quick move-in homes can close in 30-90 days, while standard builds take 4-6 months from contract to closing.',
  },
  {
    question: 'What areas does Dr. Jan Duffy serve?',
    answer:
      'Dr. Jan Duffy serves all Beazer Homes communities throughout the greater Las Vegas area, including Henderson, Las Vegas, Boulder City, and Mesquite. Her office is located at 4670 S Fort Apache Rd, Las Vegas, NV 89147.',
  },
]

export default function HomePage() {
  const organizationSchema = generateOrganizationSchema()
  const personSchema = generatePersonSchema()
  const realEstateAgentSchema = generateRealEstateAgentSchema()
  const localBusinessSchema = generateLocalBusinessSchema()
  const faqSchema = generateFAQPageSchema(HOME_FAQS)

  return (
    <>
      <StructuredData data={organizationSchema} />
      <StructuredData data={personSchema} />
      <StructuredData data={realEstateAgentSchema} />
      <StructuredData data={localBusinessSchema} />
      <StructuredData data={faqSchema} />
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 via-background to-background py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 flex justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary">
                <Award className="w-5 h-5" />
                <span className="font-semibold">Award Winning Buyer Agent</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Ready to find your perfect home in Las Vegas?
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Dr. Jan Duffy is the Award Winning Buyer Agent for Beazer Homes, 
              helping you discover exceptional new construction homes in Las Vegas 
              and the surrounding areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="tel:7025001942">
                  <Phone className="w-5 h-5" />
                  Call (702) 500-1942
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="mailto:DrDuffySells@DuffyRealtyOfLasVegas.com">
                  <Mail className="w-5 h-5" />
                  Email Me
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">
                  <Calendar className="w-5 h-5" />
                  Schedule Consultation
                </a>
              </Button>
            </div>
            <div className="mt-8 text-sm text-muted-foreground">
              <p>LIC# S.0197614.LLC</p>
              <p>Dr Duffy Beazer Homes Group</p>
              <p className="mt-2">
                <a
                  href="https://maps.google.com/?q=4670+S+Fort+Apache+Rd,+Las+Vegas,+NV+89147"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground flex items-center justify-center gap-1"
                >
                  <MapPin className="w-4 h-4" />
                  4670 S Fort Apache Rd, Las Vegas, NV 89147
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reasons Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why choose Dr. Jan Duffy as your Buyer Agent?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Award Winning</h3>
                <p className="text-muted-foreground">
                  Recognized excellence in real estate services and commitment to client satisfaction.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Beazer Homes Expert</h3>
                <p className="text-muted-foreground">
                  Specialized knowledge of Beazer Homes communities, floor plans, and new construction process.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Personalized Service</h3>
                <p className="text-muted-foreground">
                  Dedicated support throughout your home buying journey, from search to closing.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
                <p className="text-muted-foreground">
                  In-depth knowledge of Las Vegas area neighborhoods, schools, and community amenities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Neighborhoods Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Find a neighborhood where you belong
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Explore the premier Las Vegas area communities where we help you find your perfect Beazer home.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Henderson */}
              <div className="group relative overflow-hidden rounded-lg bg-card border border-border hover:shadow-lg transition-shadow">
                <div className="relative h-64 bg-muted">
                  <Image
                    src="/images/henderson-city-hall.jpg"
                    alt="Henderson, Nevada"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Henderson</h3>
                  <p className="text-muted-foreground mb-4">
                    Henderson, Nevada's second-largest city, is celebrated for innovative planning, 
                    master-planned communities, and excellent public services. Located just 16 miles 
                    from Las Vegas, Henderson offers highly rated public and private schools, strong 
                    higher education opportunities, and year-round outdoor recreation in a stunning 
                    desert setting.
                  </p>
                  <Button variant="outline" asChild>
                    <a href="/communities">View Henderson Communities</a>
                  </Button>
                </div>
              </div>

              {/* Las Vegas */}
              <div className="group relative overflow-hidden rounded-lg bg-card border border-border hover:shadow-lg transition-shadow">
                <div className="relative h-64 bg-muted">
                  <Image
                    src="/images/las-vegas-strip.jpg"
                    alt="Las Vegas, Nevada"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Las Vegas</h3>
                  <p className="text-muted-foreground mb-4">
                    Las Vegas, set in the Nevada desert, is known worldwide for its dining, 
                    entertainment, and iconic casinos. Beyond the Strip, the city provides 
                    residents with respected schools, an expansive park system, and endless 
                    recreation. With Harry Reid International Airport connecting to destinations 
                    around the globe, Las Vegas offers convenience, opportunity, and excitement.
                  </p>
                  <Button variant="outline" asChild>
                    <a href="/communities">View Las Vegas Communities</a>
                  </Button>
                </div>
              </div>

              {/* Boulder City */}
              <div className="group relative overflow-hidden rounded-lg bg-card border border-border hover:shadow-lg transition-shadow">
                <div className="relative h-64 bg-muted">
                  <Image
                    src="/images/boulder-city-downtown.jpg"
                    alt="Boulder City, Nevada"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Boulder City</h3>
                  <p className="text-muted-foreground mb-4">
                    Boulder City, just 30 minutes from Las Vegas, is one of Nevada's most 
                    charming and historic communities. Known as the gateway to Hoover Dam and 
                    Lake Mead, the city combines small-town hospitality with easy access to 
                    outdoor adventure. With highly regarded schools, welcoming neighborhoods, 
                    and a relaxed pace of life, Boulder City offers a refreshing alternative.
                  </p>
                  <Button variant="outline" asChild>
                    <a href="/communities">View All Communities</a>
                  </Button>
                </div>
              </div>

              {/* Mesquite */}
              <div className="group relative overflow-hidden rounded-lg bg-card border border-border hover:shadow-lg transition-shadow">
                <div className="relative h-64 bg-muted">
                  <Image
                    src="/images/mesquite-golf.jpg"
                    alt="Mesquite, Nevada"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Mesquite</h3>
                  <p className="text-muted-foreground mb-4">
                    Mesquite, Nevada, located 80 miles northeast of Las Vegas near the Arizona 
                    border, is a growing community known for its golf courses, scenic desert 
                    landscapes, and welcoming small-town feel. Residents enjoy a relaxed lifestyle 
                    with access to parks, trails, and recreation, making Mesquite an attractive 
                    choice for families, retirees, and anyone seeking balance.
                  </p>
                  <Button variant="outline" asChild>
                    <a href="/communities">View All Communities</a>
                  </Button>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <Button size="lg" asChild>
                <a href="/communities">View All Beazer Homes Communities</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Discover what makes working with Dr. Jan Duffy special
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              As your dedicated Buyer Agent, I provide comprehensive support throughout your 
              new home journey with Beazer Homes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">Expert Guidance</h3>
                <p className="text-muted-foreground">
                  Navigate the new construction process with confidence. I'll help you understand 
                  floor plans, customization options, and the timeline for your new Beazer home.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">Community Knowledge</h3>
                <p className="text-muted-foreground">
                  Get insights into neighborhood amenities, school districts, commute times, and 
                  local attractions to find the perfect location for your lifestyle.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">Dedicated Support</h3>
                <p className="text-muted-foreground">
                  From initial consultation through closing and beyond, I'm here to answer questions 
                  and ensure a smooth, stress-free home buying experience.
                </p>
              </div>
            </div>
            <div className="text-center mt-8">
              <Button size="lg" variant="outline" asChild>
                <a href="/how-i-help">Learn How I Help as Your Buyer's Agent</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              What clients say
            </h2>
            <div className="space-y-8">
              <div className="bg-card p-8 rounded-lg border border-border">
                <p className="text-lg text-muted-foreground mb-4 italic">
                  "Dr. Jan Duffy made our home buying experience seamless. Her expertise with 
                  Beazer Homes and knowledge of the Las Vegas area helped us find our perfect 
                  home in Henderson. We couldn't be happier with our new home!"
                </p>
                <p className="font-semibold">— Happy Homeowner</p>
              </div>
              <div className="bg-card p-8 rounded-lg border border-border">
                <p className="text-lg text-muted-foreground mb-4 italic">
                  "Working with Dr. Duffy was a pleasure. She was always available to answer 
                  questions and provided excellent guidance throughout the entire process. 
                  Highly recommend!"
                </p>
                <p className="font-semibold">— Satisfied Client</p>
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
                <h3 className="text-xl font-semibold mb-3">Do I need a buyer's agent to buy a Beazer home?</h3>
                <p className="text-muted-foreground">
                  While not required, working with a buyer's agent like Dr. Jan Duffy provides significant benefits at no additional cost to you. You get professional representation, contract review, negotiation, and expert guidance throughout your home buying journey.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">How long does it take to build a new Beazer home?</h3>
                <p className="text-muted-foreground">
                  Construction timelines typically range from 4-8 months, depending on whether the home is already under construction or a standard new build. Quick move-in homes can close in 30-90 days, while standard builds take 4-6 months from contract to closing.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">What areas does Dr. Jan Duffy serve?</h3>
                <p className="text-muted-foreground">
                  Dr. Jan Duffy serves all Beazer Homes communities throughout the greater Las Vegas area, including Henderson, Las Vegas, Boulder City, and Mesquite. Her office is located at 4670 S Fort Apache Rd, Las Vegas, NV 89147.
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

      {/* Contact CTA Section */}
      <section id="contact" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to find your perfect Beazer home?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's start your home buying journey today. Contact me to schedule a consultation 
              or get more information about available Beazer Homes communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:7025001942">
                  <Phone className="w-5 h-5" />
                  Call (702) 500-1942
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
              <p className="mt-2">
                <a 
                  href="mailto:DrDuffySells@DuffyRealtyOfLasVegas.com" 
                  className="underline hover:no-underline"
                >
                  DrDuffySells@DuffyRealtyOfLasVegas.com
                </a>
              </p>
              <p>
                <a 
                  href="tel:7025001942" 
                  className="underline hover:no-underline"
                >
                  Direct: (702) 500-1942
                </a>
              </p>
            </div>
            
            {/* Footer Navigation */}
            <div className="mt-12 pt-12 border-t border-primary-foreground/20">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
                <div>
                  <h3 className="font-semibold mb-3">About</h3>
                  <ul className="space-y-2 opacity-80">
                    <li>
                      <a href="/about" className="hover:underline">About Dr. Jan Duffy</a>
                    </li>
                    <li>
                      <a href="/how-i-help" className="hover:underline">How I Help</a>
                    </li>
                    <li>
                      <a href="/services" className="hover:underline">Services</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Communities</h3>
                  <ul className="space-y-2 opacity-80">
                    <li>
                      <a href="/communities" className="hover:underline">All Communities</a>
                    </li>
                    <li>
                      <a href="/areas/henderson" className="hover:underline">Henderson</a>
                    </li>
                    <li>
                      <a href="/areas/las-vegas" className="hover:underline">Las Vegas</a>
                    </li>
                    <li>
                      <a href="/areas/boulder-city" className="hover:underline">Boulder City</a>
                    </li>
                    <li>
                      <a href="/areas/mesquite" className="hover:underline">Mesquite</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Resources</h3>
                  <ul className="space-y-2 opacity-80">
                    <li>
                      <a href="/buyers-guide" className="hover:underline">Buyer's Guide</a>
                    </li>
                    <li>
                      <a href="/first-time-buyers" className="hover:underline">First-Time Buyers</a>
                    </li>
                    <li>
                      <a href="/new-construction-process" className="hover:underline">New Construction Process</a>
                    </li>
                    <li>
                      <a href="/tips-buying-new-construction" className="hover:underline">Tips For Buying New Construction</a>
                    </li>
                    <li>
                      <a href="/faq" className="hover:underline">FAQ</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Contact</h3>
                  <ul className="space-y-2 opacity-80">
                    <li>
                      <a href="/contact" className="hover:underline">Contact Page</a>
                    </li>
                    <li>
                      <a href="/privacy" className="hover:underline">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
