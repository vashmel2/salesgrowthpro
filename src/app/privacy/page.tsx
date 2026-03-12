import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'SalesGrowthPro Privacy Policy — how we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-gradient-hero pt-32 pb-16">
        <div className="container-custom max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-white/70">Last updated: January 1, 2025</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl mx-auto prose prose-brand">
          <div className="space-y-8 text-brand-muted">
            <div>
              <h2 className="text-xl font-bold text-brand-dark mb-3">1. Information We Collect</h2>
              <p className="leading-relaxed">
                We collect information you provide directly to us, including when you fill out our contact form, subscribe to our newsletter, or engage with our services. This includes your name, email address, company name, and any messages you send.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-dark mb-3">2. How We Use Your Information</h2>
              <p className="leading-relaxed">
                We use the information we collect to respond to your inquiries, provide our services, send marketing communications (only with your consent), improve our website and services, and comply with legal obligations.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-dark mb-3">3. Information Sharing</h2>
              <p className="leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our business, subject to confidentiality agreements.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-dark mb-3">4. Cookies</h2>
              <p className="leading-relaxed">
                Our website uses cookies to enhance your browsing experience. You can control cookie settings through your browser preferences. We use analytics cookies to understand how visitors use our website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-dark mb-3">5. Contact Us</h2>
              <p className="leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at{' '}
                <a href="mailto:hello@salesgrowthpro.com" className="text-brand-bright hover:underline">
                  hello@salesgrowthpro.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
