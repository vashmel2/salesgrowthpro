import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Clock, ArrowLeft, Tag, Share2, Twitter, Facebook, Linkedin } from 'lucide-react'
import { blogPosts } from '@/lib/blog-data'
import { formatDate } from '@/lib/utils'
import NewsletterSignup from '@/components/shared/NewsletterSignup'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
    },
  }
}

// Simple markdown-like renderer for the content
function renderContent(content: string) {
  const lines = content.trim().split('\n')
  const elements: React.ReactNode[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="text-2xl font-bold text-brand-dark mt-8 mb-4">
          {line.replace('## ', '')}
        </h2>
      )
    } else if (line.startsWith('**') && line.endsWith('**')) {
      elements.push(
        <p key={i} className="font-semibold text-brand-dark mb-2">
          {line.replace(/\*\*/g, '')}
        </p>
      )
    } else if (line.startsWith('- ')) {
      const listItems = []
      while (i < lines.length && lines[i].startsWith('- ')) {
        listItems.push(<li key={i}>{lines[i].replace('- ', '')}</li>)
        i++
      }
      elements.push(
        <ul key={`ul-${i}`} className="list-disc list-inside space-y-1.5 text-brand-muted mb-4 ml-4">
          {listItems}
        </ul>
      )
      continue
    } else if (line.match(/^\d+\. /)) {
      const listItems = []
      while (i < lines.length && lines[i].match(/^\d+\. /)) {
        listItems.push(<li key={i}>{lines[i].replace(/^\d+\. /, '')}</li>)
        i++
      }
      elements.push(
        <ol key={`ol-${i}`} className="list-decimal list-inside space-y-1.5 text-brand-muted mb-4 ml-4">
          {listItems}
        </ol>
      )
      continue
    } else if (line.trim() === '') {
      // skip empty lines
    } else {
      // Parse inline bold and links
      const parsed = line
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-brand-bright hover:underline font-medium">$1</a>')

      elements.push(
        <p
          key={i}
          className="text-brand-muted leading-relaxed mb-4"
          dangerouslySetInnerHTML={{ __html: parsed }}
        />
      )
    }
    i++
  }

  return elements
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) notFound()

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3)

  const otherPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3 - relatedPosts.length)

  const suggested = [...relatedPosts, ...otherPosts].slice(0, 3)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: post.author.name,
    },
    publisher: {
      '@type': 'Organization',
      name: 'SalesGrowthPro',
      logo: { '@type': 'ImageObject', url: 'https://salesgrowthpro.com/sales-growth-pro.png' },
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-hero pt-32 pb-0 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/5 blur-3xl" />
        <div className="relative container-custom max-w-4xl mx-auto pb-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="flex items-center gap-3 mb-5">
            <span className="px-3 py-1 rounded-lg bg-white/20 text-white text-xs font-semibold">
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-white/60 text-xs">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full border-2 border-white/30"
              />
              <div>
                <div className="text-sm font-semibold text-white">{post.author.name}</div>
                <div className="text-xs text-white/60">
                  {post.author.role} · {formatDate(post.date)}
                </div>
              </div>
            </div>

            {/* Share */}
            <div className="flex items-center gap-2">
              <span className="text-white/60 text-xs">Share:</span>
              {[
                { icon: Twitter, label: 'Twitter', color: 'hover:bg-sky-500' },
                { icon: Facebook, label: 'Facebook', color: 'hover:bg-blue-600' },
                { icon: Linkedin, label: 'LinkedIn', color: 'hover:bg-blue-700' },
              ].map((s) => (
                <button
                  key={s.label}
                  aria-label={`Share on ${s.label}`}
                  className={`w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white/70 hover:text-white ${s.color} transition-colors`}
                >
                  <s.icon className="w-3.5 h-3.5" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <article className="lg:col-span-2 prose max-w-none">
                <div className="w-full h-52 md:h-72 overflow-hidden rounded-2xl mb-6">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                </div>
                <p className="text-lg text-brand-muted leading-relaxed mb-6 font-medium">
                  {post.excerpt}
                </p>
                {renderContent(post.content)}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-gray-100">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-3 py-1.5 bg-brand-light text-brand-bright text-xs font-medium rounded-lg"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              </article>

              {/* Sidebar */}
              <aside className="space-y-6">
                {/* Author Card */}
                <div className="card-base text-center">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-16 h-16 rounded-full mx-auto mb-3 border-4 border-brand-light"
                  />
                  <h4 className="font-bold text-brand-dark mb-1">{post.author.name}</h4>
                  <p className="text-sm text-brand-bright mb-2">{post.author.role}</p>
                  <p className="text-xs text-brand-muted">Expert digital marketer at SalesGrowthPro</p>
                </div>

                {/* Newsletter */}
                <div className="card-base bg-gradient-brand text-white">
                  <h4 className="font-bold text-white mb-2">Get Weekly Insights</h4>
                  <p className="text-xs text-white/80 mb-4">
                    Join 5,000+ business owners getting actionable marketing tips.
                  </p>
                  <NewsletterSignup variant="dark" />
                </div>

                {/* CTA */}
                <div className="card-base border-2 border-brand-light text-center">
                  <h4 className="font-bold text-brand-dark mb-2">Ready to Grow?</h4>
                  <p className="text-sm text-brand-muted mb-4">
                    Book a free consultation with our team.
                  </p>
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-cta text-white font-semibold text-sm rounded-xl shadow-cta hover:shadow-glow-cta hover:-translate-y-0.5 transition-all duration-300">
                    Get Free Consultation
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {suggested.length > 0 && (
        <section className="py-16 bg-gradient-subtle">
          <div className="container-custom">
            <h3 className="text-2xl font-bold text-brand-dark mb-8">More Articles You Might Like</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {suggested.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group block card-base overflow-hidden p-0"
                >
                  <div className="h-40 overflow-hidden rounded-t-2xl">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <span className="section-label text-xs mb-2 inline-block">{p.category}</span>
                    <h4 className="font-bold text-brand-dark text-sm leading-snug group-hover:text-brand-bright transition-colors line-clamp-2">
                      {p.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
