import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import { formatDate } from '@/lib/utils'

const posts = [
  {
    slug: '7-proven-strategies-to-increase-sales-with-google-ads',
    title: '7 Proven Strategies to Increase Sales with Google Ads in 2025',
    excerpt:
      'The exact strategies we use to generate 3x more leads while reducing cost per click by 40%. Steal our playbook.',
    category: 'Google Ads',
    date: '2025-01-15',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80',
  },
  {
    slug: 'complete-seo-guide-for-small-businesses-philippines',
    title: 'The Complete SEO Guide for Small Businesses in the Philippines',
    excerpt:
      'How to rank on page 1 of Google without a massive budget. A step-by-step guide built for Philippine businesses.',
    category: 'SEO',
    date: '2025-01-08',
    readTime: '12 min',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80',
  },
  {
    slug: 'how-to-build-a-high-converting-sales-funnel',
    title: 'How to Build a Sales Funnel That Works on Autopilot',
    excerpt:
      'The exact funnel framework we use to help clients generate consistent revenue with minimal ongoing effort.',
    category: 'Sales Funnels',
    date: '2024-12-28',
    readTime: '10 min',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
]

const categoryColors: Record<string, string> = {
  'Google Ads': 'bg-blue-50 text-blue-700 border-blue-200',
  SEO: 'bg-green-50 text-green-700 border-green-200',
  'Sales Funnels': 'bg-purple-50 text-purple-700 border-purple-200',
  'Facebook Ads': 'bg-indigo-50 text-indigo-700 border-indigo-200',
}

export default function BlogPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="badge-blue mb-4">Free Resources</span>
            <h2 className="section-heading">
              Steal Our Best
              <span className="gradient-text block mt-1">Marketing Strategies</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-brand-bright font-bold text-sm hover:gap-3 transition-all duration-200 flex-shrink-0"
          >
            View All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block bg-white rounded-2xl overflow-hidden shadow-card border border-gray-100 hover:border-brand-bright/30 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                  <span
                    className={`text-[10px] font-bold px-2 py-1 rounded-md border ${
                      categoryColors[post.category] || 'bg-gray-100 text-gray-600 border-gray-200'
                    }`}
                  >
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] text-white/80 font-medium">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-brand-dark text-sm leading-snug mb-2 group-hover:text-brand-bright transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-xs text-brand-muted leading-relaxed line-clamp-2 mb-4">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <span className="text-[11px] text-brand-muted">{formatDate(post.date)}</span>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-brand-bright group-hover:gap-2 transition-all">
                    Read <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
