import type { Metadata } from 'next'
import NewsletterSignup from '@/components/shared/NewsletterSignup'
import BlogClient from '@/components/blog/BlogClient'

export const metadata: Metadata = {
  title: 'Blog — Digital Marketing Insights & Strategies',
  description:
    'Expert digital marketing insights, SEO tips, Google Ads strategies, and business growth advice from the SalesGrowthPro team.',
}

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero pt-32 pb-20 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/5 blur-3xl" />
        <div className="relative container-custom text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-white/15 border border-white/25 text-white text-sm font-medium mb-6">
            Marketing Intelligence
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Insights to Grow Your Business
          </h1>
          <p className="text-lg text-white/80">
            Actionable strategies, expert tips, and proven frameworks from our team of digital marketing specialists.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <BlogClient />
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
              Never Miss an Insight
            </h2>
            <p className="text-brand-muted mb-8">
              Join 5,000+ marketers and business owners who get our best content delivered straight to their inbox every week.
            </p>
            <div className="max-w-md mx-auto">
              <NewsletterSignup variant="light" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
