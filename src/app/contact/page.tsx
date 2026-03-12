import type { Metadata } from 'next'
import { Mail, MapPin, Clock, Calendar, MessageCircle, ArrowRight } from 'lucide-react'
import ContactForm from '@/components/shared/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us — Book Your Free Consultation',
  description:
    'Get in touch with SalesGrowthPro. Book a free strategy consultation or send us a message. We respond to all inquiries within 24 hours.',
}

const contactInfo = [
  {
    icon: Mail,
    label: 'Email Us',
    value: 'hello@salesgrowthpro.com',
    description: 'For general inquiries and project quotes',
    href: 'mailto:hello@salesgrowthpro.com',
  },
  {
    icon: Clock,
    label: 'Response Time',
    value: 'Within 24 Hours',
    description: 'We respond to all messages within one business day',
  },
  {
    icon: MapPin,
    label: 'Based In',
    value: 'Philippines',
    description: 'Serving clients worldwide in your timezone',
  },
  {
    icon: Calendar,
    label: 'Free Consultation',
    value: '30-Minute Strategy Call',
    description: 'Get a personalized growth plan for your business',
  },
]

const faqs = [
  {
    q: 'How quickly can you start working on my project?',
    a: 'In most cases, we can begin onboarding within 3-5 business days after signing the agreement. We move fast because we know your business can\'t wait.',
  },
  {
    q: 'Do you require long-term contracts?',
    a: 'No. We operate on monthly rolling agreements because we believe our results should speak for themselves. You can cancel anytime with 30 days\' notice.',
  },
  {
    q: 'How much does it cost?',
    a: 'Our pricing varies depending on your needs, goals, and scope of work. We don\'t have one-size-fits-all packages — everything is custom-quoted after our initial consultation.',
  },
  {
    q: 'Do you work with businesses outside the Philippines?',
    a: 'Absolutely. While we\'re based in the Philippines, we serve clients across the USA, Australia, UK, Singapore, Canada, and many other countries. We work across all timezones.',
  },
  {
    q: 'What results can I expect?',
    a: 'Results vary by industry and starting point, but our clients typically see a 2-4x increase in leads within the first 3 months. We\'ll share realistic projections during your consultation.',
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero pt-32 pb-20 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/5 blur-3xl" />
        <div className="relative container-custom text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-white text-sm font-medium mb-6">
            Let&apos;s Talk Growth
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to Grow Your Business?
          </h1>
          <p className="text-lg text-white/80">
            Book a free 30-minute strategy consultation or send us a message. We&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left: Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-brand-dark mb-3">
                  Let&apos;s Start a Conversation
                </h2>
                <p className="text-brand-muted leading-relaxed">
                  Whether you have a specific project in mind or just want to explore what&apos;s possible, we&apos;d love to hear from you. Our team is ready to help you grow.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div
                    key={info.label}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-brand-light transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-brand flex items-center justify-center text-white flex-shrink-0">
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-brand-muted mb-0.5">{info.label}</div>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="font-semibold text-brand-dark hover:text-brand-bright transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="font-semibold text-brand-dark">{info.value}</div>
                      )}
                      <div className="text-xs text-brand-muted mt-0.5">{info.description}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* What to Expect */}
              <div className="bg-gradient-subtle rounded-2xl p-6 border border-brand-light">
                <h3 className="font-bold text-brand-dark mb-4">What Happens Next?</h3>
                <div className="space-y-3">
                  {[
                    { step: '1', text: 'We review your message and business details' },
                    { step: '2', text: 'You receive a personal reply within 24 hours' },
                    { step: '3', text: 'We schedule your free strategy consultation' },
                    { step: '4', text: 'You get a custom growth plan — no strings attached' },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-brand flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                        {item.step}
                      </div>
                      <span className="text-sm text-brand-muted">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <div className="card-base border border-gray-100">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-brand-dark mb-1">Send Us a Message</h3>
                  <p className="text-sm text-brand-muted">
                    Fill out the form below and we&apos;ll be in touch within 24 hours.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="badge-blue mb-4">FAQ</span>
            <h2 className="section-heading mb-4">Common Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="card-base">
                <h3 className="font-bold text-brand-dark mb-2 flex items-start gap-2">
                  <span className="text-brand-bright mt-0.5 flex-shrink-0">Q.</span>
                  {faq.q}
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed ml-5">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
