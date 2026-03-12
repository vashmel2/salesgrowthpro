'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Clock, ArrowRight } from 'lucide-react'
import { blogPosts, categories } from '@/lib/blog-data'
import { formatDate } from '@/lib/utils'

const categoryColors: Record<string, string> = {
  'Google Ads': 'bg-blue-50 text-blue-600',
  SEO: 'bg-green-50 text-green-600',
  'Sales Funnels': 'bg-purple-50 text-purple-600',
  'Facebook Ads': 'bg-indigo-50 text-indigo-600',
  'Website Development': 'bg-orange-50 text-orange-600',
  'Email Marketing': 'bg-pink-50 text-pink-600',
  'Business Growth': 'bg-teal-50 text-teal-600',
}

export default function BlogClient() {
  const [active, setActive] = useState('All')

  const featured = blogPosts.find((p) => p.featured)
  const filtered =
    active === 'All'
      ? blogPosts.filter((p) => !p.featured)
      : blogPosts.filter((p) => p.category === active && p.slug !== featured?.slug)

  const showFeatured = active === 'All' && featured

  return (
    <>
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              active === cat
                ? 'bg-gradient-brand text-white'
                : 'bg-gray-100 text-brand-muted hover:bg-brand-light hover:text-brand-bright'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured Post */}
      {showFeatured && (
        <Link href={`/blog/${featured.slug}`} className="group block mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300">
            <div className="relative h-64 lg:h-auto overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
              <span className="absolute top-4 left-4 bg-brand-bright text-white text-xs font-bold px-3 py-1.5 rounded-lg">
                Featured
              </span>
            </div>
            <div className="bg-white p-8 md:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-lg ${
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
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filtered.map((post) => (
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
                    className={`text-xs font-semibold px-2.5 py-1 rounded-lg ${
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
      ) : (
        <p className="text-brand-muted text-center py-12">No posts in this category yet.</p>
      )}
    </>
  )
}
