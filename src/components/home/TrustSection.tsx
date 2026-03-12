'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Shield, TrendingUp, Clock, Zap, Quote } from 'lucide-react'

const trustPoints = [
  {
    icon: Shield,
    title: 'Google & Meta Certified',
    description: 'Managed by certified specialists — not juniors or bots.',
  },
  {
    icon: TrendingUp,
    title: '$10M+ Revenue Driven',
    description: 'Trackable revenue generated for clients across 3 continents.',
  },
  {
    icon: Clock,
    title: '30-Day Results',
    description: 'Most clients see measurable lift within the first month.',
  },
  {
    icon: Zap,
    title: 'No Lock-In Contracts',
    description: 'We earn your business monthly. 95% choose to stay.',
  },
]

const testimonials = [
  {
    name: 'Maria Santos',
    role: 'CEO, Santos Realty Group',
    content: 'Before SalesGrowthPro, we spent \u20B180K/month on ads with almost nothing to show. Within 90 days, the same budget generated 240% more leads. We hired two new agents to keep up.',
    result: '+240% leads in 90 days',
    rating: 5,
  },
  {
    name: 'James Reyes',
    role: 'Founder, TechStart PH',
    content: 'I was skeptical \u2014 I\'d been burned before. But they showed me data on day one. Cost per lead dropped from $45 to $12. We\'re closing 3x more deals from Google Ads alone.',
    result: 'CPL: $45 \u2192 $12',
    rating: 5,
  },
  {
    name: 'Sarah Chen',
    role: 'Marketing Director, EcoMart',
    content: 'The sales funnel they built generates \u20B1500K+ monthly on autopilot. Their understanding of customer psychology turned our email list into a revenue machine.',
    result: '\u20B1500K+/mo from one funnel',
    rating: 5,
  },
]

const logos = [
  'Google Partner', 'Meta Business Partner', 'HubSpot Certified', 'Shopify Partner',
  'Monday.com Partner', 'Semrush Certified', 'Google Analytics', 'Mailchimp Partner',
]

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

export default function TrustSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <FadeInView className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-label">Why Businesses Choose Us</span>
          <h2 className="section-heading mb-5">
            Trusted by 200+ Companies
            <span className="gradient-text block mt-1">to Drive Real Growth</span>
          </h2>
          <p className="section-subheading mx-auto">
            While your competitors invest in digital marketing, every day you wait costs you leads, revenue, and market share.
          </p>
        </FadeInView>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {trustPoints.map((point, i) => (
            <FadeInView key={point.title} delay={i * 0.1}>
              <div className="group relative p-6 rounded-2xl border border-gray-100 hover:border-brand-bright/20 hover:shadow-card bg-white transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center text-brand-bright mb-4 group-hover:bg-gradient-brand group-hover:text-white transition-all duration-300">
                  <point.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-brand-dark text-[15px] mb-1.5">{point.title}</h3>
                <p className="text-sm text-brand-muted leading-relaxed">{point.description}</p>
              </div>
            </FadeInView>
          ))}
        </div>

        <FadeInView className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-brand-dark">
              Real Results, Real Businesses
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <FadeInView key={t.name} delay={i * 0.1}>
                <div className="relative bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-card hover:border-brand-bright/20 transition-all duration-300 h-full flex flex-col">
                  <div className="inline-flex self-start items-center gap-1.5 px-3 py-1.5 rounded-lg bg-green-50 text-green-700 text-xs font-semibold mb-4">
                    <TrendingUp className="w-3 h-3" />
                    {t.result}
                  </div>
                  <Quote className="w-8 h-8 text-brand-light mb-3 -scale-x-100" />
                  <p className="text-brand-text text-sm leading-relaxed mb-6 flex-1">
                    {t.content}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                    <div>
                      <div className="font-semibold text-brand-dark text-sm">{t.name}</div>
                      <div className="text-xs text-brand-muted mt-0.5">{t.role}</div>
                    </div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </FadeInView>

        <FadeInView>
          <div className="relative overflow-hidden py-8 border-t border-gray-100">
            <div className="text-center mb-6">
              <p className="text-xs text-brand-muted uppercase tracking-widest font-medium">
                Certified & Partnered With
              </p>
            </div>
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
              <div className="flex animate-marquee">
                {[...logos, ...logos].map((logo, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 mx-6 px-5 py-2.5 rounded-lg border border-gray-100 bg-gray-50/50 text-sm font-medium text-brand-muted whitespace-nowrap"
                  >
                    {logo}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  )
}
