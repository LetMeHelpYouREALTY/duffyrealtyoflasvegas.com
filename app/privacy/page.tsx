import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Duffy Realty of Las Vegas',
  description: 'Privacy Policy for Duffy Realty of Las Vegas and Dr. Jan Duffy, Beazer Homes Buyer Agent.',
  alternates: {
    canonical: 'https://www.duffyrealtyoflasvegas.com/privacy',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-16">
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
            
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Introduction</h2>
              <p className="text-muted-foreground mb-6">
                Duffy Realty of Las Vegas ("we," "our," or "us") respects your privacy and is committed 
                to protecting your personal information. This Privacy Policy explains how we collect, use, 
                disclose, and safeguard your information when you visit our website or use our services.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
              <p className="text-muted-foreground mb-4">We may collect information that you provide directly to us, including:</p>
              <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2 ml-4">
                <li>Name and contact information (email address, phone number, mailing address)</li>
                <li>Information about your home buying interests and preferences</li>
                <li>Questions or comments you submit through our contact forms</li>
                <li>Any other information you choose to provide</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2 ml-4">
                <li>Respond to your inquiries and provide customer service</li>
                <li>Send you information about properties, communities, and services that may interest you</li>
                <li>Schedule consultations and appointments</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">Information Sharing</h2>
              <p className="text-muted-foreground mb-6">
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2 ml-4">
                <li>Beazer Homes and their representatives, as necessary to assist with your home purchase</li>
                <li>Service providers who assist us in operating our website and conducting business</li>
                <li>Legal authorities when required by law or to protect our rights</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">Cookies and Tracking</h2>
              <p className="text-muted-foreground mb-6">
                Our website uses Google Analytics to help analyze how visitors use the site. Google Analytics 
                uses cookies to collect standard internet log information and visitor behavior information. 
                This information is used to evaluate visitor use of the website and compile statistical reports.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Your Rights</h2>
              <p className="text-muted-foreground mb-6">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2 ml-4">
                <li>Access and receive a copy of your personal information</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">Data Security</h2>
              <p className="text-muted-foreground mb-6">
                We implement appropriate security measures to protect your personal information. However, 
                no method of transmission over the internet or electronic storage is 100% secure.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
              <p className="text-muted-foreground mb-6">
                If you have questions about this Privacy Policy, please contact us:
              </p>
              <div className="bg-card p-6 rounded-lg border border-border mb-8">
                <p className="text-muted-foreground mb-2">
                  <strong className="text-foreground">Dr. Jan Duffy</strong><br />
                  Duffy Realty of Las Vegas<br />
                  4670 S Fort Apache Rd<br />
                  Las Vegas, NV 89147
                </p>
                <p className="text-muted-foreground mb-2">
                  <strong className="text-foreground">Phone:</strong>{' '}
                  <a href="tel:7025001955" className="text-primary hover:underline">
                    (702) 500-1955
                  </a>
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Email:</strong>{' '}
                  <a href="mailto:DrDuffySells@DuffyRealtyOfLasVegas.com" className="text-primary hover:underline">
                    DrDuffySells@DuffyRealtyOfLasVegas.com
                  </a>
                </p>
              </div>

              <h2 className="text-2xl font-bold mt-8 mb-4">Changes to This Policy</h2>
              <p className="text-muted-foreground mb-8">
                We may update this Privacy Policy from time to time. We will notify you of any changes 
                by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

