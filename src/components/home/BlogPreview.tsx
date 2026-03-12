'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Clock } from 'lucide-react'
import { formatDate } from '@/lib/utils'

const posts = [
  {
    slug: '7-proven-strategies-to-increase-sales-with-google-ads',
    title: '7 Proven Strategies to Increase Sales with Google Ads in 2025',
    excerpt: 'The exact strategies we use to generate 3x more leads while reducing cost per click by 40%.',
    category: 'Google Ads',
    date: '2025-01-15',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80',
  },
  {
    slug: 'complete-seo-guide-for-small-businesses-philippines',
    title: 'The Complete SEO Guide for Small Businesses in the Philippines',
    excerpt: 'How to rank on page 1 of Google without a massive budget. Built for Philippine businesses.',
    category: 'SEO',
    date: '2025-01-08',
    readTime: '12 min',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80',
  },
  {
    slug: 'how-to-build-a-high-converting-sales-funnel',
    title: 'How to Build a Sales Funnel That Works on Autopilot',
    excerpt: 'The funnel framework we use to generate consistent revenue with minimal ongoing effort.',
    category: 'Sales Funnels',
    date: '2024-12-28',
    readTime: '10 min',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
]

const categoryColors: Record<string, string> = {
  'Google Ads': 'bg-blue-50 text-blue-700',
  SEO: 'bg-emerald-50 text-emerald-700',
  'Sales Funnels': 'bg-violet-50 text-violet-700',
}

function FadeInView({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.5, delay, ease: [0.23, 1, 0.32, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function BlogPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <FadeInView>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <span className="section-label">Free Resources</span>
              <h2 className="section-heading">
                Marketing Strategies &amp;
                <span className="gradient-text block mt-1">Expert Insights</span>
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-brand-bright font-semibold text-sm hover:gap-3 transition-all duration-200 flex-shrink-0"
            >
              View All Articles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeInView>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {posts.map((post, i) => (
            <FadeInView key={post.slug} delay={i * 0.1}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-brand-bright/20 hover:shadow-card-hover transition-all duration-300 h-full"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-lg ${categoryColors[post.category] || 'bg-gray-100 text-gray-600'}`}>
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-brand-dark text-[15px] leading-snug mb-2 group-hover:text-brand-bright transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-brand-muted leading-relaxed line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                    <div className="flex items-center gap-3 text-xs text-brand-muted">
                      <span>{formatDate(post.date)}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-bright group-hover:gap-2 transition-all">
                      Read <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  )
}
