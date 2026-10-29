import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Phone, Mail, Calendar, MapPin, Clock } from 'lucide-react'
import Link from 'next/link'
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '@/lib/schema/structured-data'
import { StructuredData } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Contact Dr. Jan Duffy | Beazer Homes Buyer Agent Las Vegas',
  description: 'Contact Dr. Jan Duffy, Award Winning Buyer Agent for Beazer Homes in Las Vegas. Call, email, or visit our office. Available to help you find your perfect new construction home.',
  alternates: {
    canonical: 'https://www.duffyrealtyoflasvegas.com/contact',
  },
  openGraph: {
    title: 'Contact Dr. Jan Duffy | Beazer Homes Buyer Agent',
    description: 'Get in touch with Dr. Jan Duffy to start your home buying journey.',
    url: 'https://www.duffyrealtyoflasvegas.com/contact',
    type: 'website',
  },
}

export default function ContactPage() {
  const localBusinessSchema = generateLocalBusinessSchema()
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.duffyrealtyoflasvegas.com' },
    { name: 'Contact', url: 'https://www.duffyrealtyoflasvegas.com/contact' },
  ])

  return (
    <>
      <StructuredData data={localBusinessSchema} />
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
              Contact Dr. Jan Duffy
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Let's start your journey to finding your perfect Beazer home. Get in touch today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Phone */}
              <div className="bg-card p-8 rounded-lg border border-border text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Call Me</h2>
                <p className="text-muted-foreground mb-4">
                  Speak directly with me about your home buying needs
                </p>
                <div className="space-y-3">
                  <Button size="lg" asChild className="w-full">
                    <a href="tel:7025001942">
                      <Phone className="w-5 h-5" />
                      (702) 500-1942
                    </a>
                  </Button>
                  <p className="text-sm text-muted-foreground">Professional Line</p>
                  <Button size="lg" variant="outline" asChild className="w-full">
                    <a href="tel:7025001955">
                      <Phone className="w-5 h-5" />
                      (702) 500-1955
                    </a>
                  </Button>
                  <p className="text-sm text-muted-foreground">Marketing/Urgent</p>
                </div>
              </div>

              {/* Email */}
              <div className="bg-card p-8 rounded-lg border border-border text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Email Me</h2>
                <p className="text-muted-foreground mb-4">
                  Send me a message and I'll get back to you promptly
                </p>
                <Button size="lg" asChild className="w-full">
                  <a href="mailto:DrDuffySells@DuffyRealtyOfLasVegas.com">
                    <Mail className="w-5 h-5" />
                    Send Email
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground mt-3 break-all">
                  DrDuffySells@DuffyRealtyOfLasVegas.com
                </p>
              </div>
            </div>

            {/* Office Location */}
            <div className="bg-card p-8 rounded-lg border border-border mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-4">Visit Our Office</h2>
                  <p className="text-lg text-muted-foreground mb-4">
                    4670 S Fort Apache Rd<br />
                    Las Vegas, NV 89147
                  </p>
                  <Button variant="outline" asChild>
                    <a
                      href="https://maps.google.com/?q=4670+S+Fort+Apache+Rd,+Las+Vegas,+NV+89147"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MapPin className="w-5 h-5" />
                      Get Directions
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="bg-card p-8 rounded-lg border border-border">
              <h2 className="text-2xl font-bold mb-4">Send a Message</h2>
              <p className="text-muted-foreground mb-6">
                Fill out the form below or email directly to get started.
              </p>
              <form action={`mailto:DrDuffySells@DuffyRealtyOfLasVegas.com`} method="get" className="space-y-4">
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="I'm interested in Beazer Homes"
                    className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="body" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="body"
                    name="body"
                    rows={5}
                    placeholder="Tell me about what you're looking for..."
                    className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground"
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  <Mail className="w-5 h-5" />
                  Send Message
                </Button>
              </form>
              <p className="text-sm text-muted-foreground mt-4">
                Or call directly: <a href="tel:7025001942" className="text-primary hover:underline">(702) 500-1942</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Consultation */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Schedule a Consultation
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss your home buying goals and how I can help you find your perfect Beazer home.
            </p>
            <Button size="lg" asChild>
              <a href="mailto:DrDuffySells@DuffyRealtyOfLasVegas.com?subject=Schedule Consultation">
                <Calendar className="w-5 h-5" />
                Schedule a Consultation
              </a>
            </Button>
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
                <h3 className="text-xl font-semibold mb-3">What's the best way to contact Dr. Jan Duffy?</h3>
                <p className="text-muted-foreground">
                  You can reach Dr. Jan Duffy by phone at (702) 500-1942, email at DrDuffySells@DuffyRealtyOfLasVegas.com, or visit her office at 4670 S Fort Apache Rd, Las Vegas, NV 89147. For urgent matters, you can also call (702) 500-1955.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">How quickly will Dr. Jan Duffy respond?</h3>
                <p className="text-muted-foreground">
                  Dr. Jan Duffy typically responds to inquiries within 24 hours, often much sooner. For urgent matters, calling directly ensures the fastest response.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">Can I schedule a consultation?</h3>
                <p className="text-muted-foreground">
                  Yes! You can schedule a consultation by emailing DrDuffySells@DuffyRealtyOfLasVegas.com with "Schedule Consultation" in the subject line, or by calling (702) 500-1942. Consultations can be done in person, over the phone, or via video call.
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

      {/* Contact Info Footer */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-2 text-sm opacity-80">
              <p className="font-semibold text-lg">Dr. Jan Duffy</p>
              <p>Buyers Agent Beazer Homes</p>
              <p>Dr Duffy Beazer Homes Group</p>
              <p>LIC# S.0197614.LLC</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

