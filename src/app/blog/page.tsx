import type { Metadata } from 'next'
import Link from 'next/link'
import { Clock, ArrowRight, Tag } from 'lucide-react'
import { blogPosts, categories } from '@/lib/blog-data'
import { formatDate } from '@/lib/utils'
import NewsletterSignup from '@/components/shared/NewsletterSignup'

export const metadata: Metadata = {
  title: 'Blog — Digital Marketing Insights & Strategies',
  description:
    'Expert digital marketing insights, SEO tips, Google Ads strategies, and business growth advice from the SalesGrowthPro team.',
}

const categoryColors: Record<string, string> = {
  'Google Ads': 'bg-blue-50 text-blue-600',
  SEO: 'bg-green-50 text-green-600',
  'Sales Funnels': 'bg-purple-50 text-purple-600',
  'Facebook Ads': 'bg-indigo-50 text-indigo-600',
  'Website Development': 'bg-orange-50 text-orange-600',
  'Email Marketing': 'bg-pink-50 text-pink-600',
  'Business Growth': 'bg-teal-50 text-teal-600',
}

export default function BlogPage() {
  const featured = blogPosts.find((p) => p.featured)
  const rest = blogPosts.filter((p) => !p.featured)

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero pt-32 pb-20 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/5 blur-3xl" />
        <div className="relative container-custom text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-white text-sm font-medium mb-6">
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
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  cat === 'All'
                    ? 'bg-gradient-brand text-white'
                    : 'bg-gray-100 text-brand-muted hover:bg-brand-light hover:text-brand-bright'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          {featured && (
            <Link
              href={`/blog/${featured.slug}`}
              className="group block mb-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300">
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                  <span className="absolute top-4 left-4 bg-brand-bright text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    Featured
                  </span>
                </div>
                <div className="bg-white p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                        categoryColors[featured.category] || 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {featured.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-brand-muted">
                      <Clock className="w-3 h-3" />
                      {featured.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4 leading-tight group-hover:text-brand-bright transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-brand-muted leading-relaxed mb-6">{featured.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={featured.author.avatar}
                        alt={featured.author.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <div className="text-sm font-medium text-brand-dark">{featured.author.name}</div>
                        <div className="text-xs text-brand-muted">{formatDate(featured.date)}</div>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-bright group-hover:gap-2 transition-all">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block card-base overflow-hidden p-0"
              >
                <div className="relative h-48 overflow-hidden rounded-t-2xl">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                        categoryColors[post.category] || 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-brand-muted">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-bold text-brand-dark mb-2 leading-snug group-hover:text-brand-bright transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-brand-muted leading-relaxed line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                    <div className="flex items-center gap-2">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-6 h-6 rounded-full"
                      />
                      <span className="text-xs text-brand-muted">{post.author.name}</span>
                    </div>
                    <span className="text-xs text-brand-muted">{formatDate(post.date)}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination placeholder */}
          <div className="flex items-center justify-center gap-2">
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                className={`w-10 h-10 rounded-full text-sm font-medium transition-colors ${
                  page === 1
                    ? 'bg-gradient-brand text-white'
                    : 'bg-gray-100 text-brand-muted hover:bg-brand-light hover:text-brand-bright'
                }`}
              >
                {page}
              </button>
            ))}
            <button className="w-10 h-10 rounded-full bg-gray-100 text-brand-muted hover:bg-brand-light hover:text-brand-bright transition-colors text-sm font-medium">
              →
            </button>
          </div>
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
