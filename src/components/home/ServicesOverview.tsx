'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { Globe, Search, MousePointerClick, Megaphone, Layout, Filter, Calendar, ArrowRight, Sparkles } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    tagline: 'Your 24/7 sales machine',
    description: 'Websites engineered to convert visitors into leads. Fast, mobile-first, and built to sell.',
    href: '/services#website-development',
    featured: true,
  },
  {
    icon: Search,
    title: 'SEO Services',
    tagline: 'Own page one of Google',
    description: 'Dominate search results for the keywords your customers actually use.',
    href: '/services#seo',
  },
  {
    icon: MousePointerClick,
    title: 'Google Ads',
    tagline: 'Instant qualified traffic',
    description: 'Show up the moment someone searches for what you sell. Average 45% lower CPL.',
    href: '/services#google-ads',
    featured: true,
  },
  {
    icon: Megaphone,
    title: 'Facebook & Instagram Ads',
    tagline: 'Turn scrollers into buyers',
    description: 'Precision-targeted campaigns across the full funnel \u2014 awareness to purchase.',
    href: '/services#facebook-ads',
  },
  {
    icon: Layout,
    title: 'Landing Pages',
    tagline: '2-5x higher conversions',
    description: 'Dedicated pages that double or triple your conversion rate from ad traffic.',
    href: '/services#landing-pages',
  },
  {
    icon: Filter,
    title: 'Sales Funnels',
    tagline: 'Revenue on autopilot',
    description: 'Automated systems that capture, nurture, and close leads 24/7.',
    href: '/services#sales-funnels',
  },
  {
    icon: Calendar,
    title: 'Monday.com Automation',
    tagline: 'Save 10+ hours/week',
    description: 'Custom workflows and automations that eliminate busywork.',
    href: '/services#monday-automation',
  },
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

export default function ServicesOverview() {
  return (
    <section className="section-padding bg-brand-surface">
      <div className="container-custom">
        <FadeInView className="text-center max-w-3xl mx-auto mb-14">
          <span className="section-label">
            <Sparkles className="w-3.5 h-3.5" />
            What We Do
          </span>
          <h2 className="section-heading mb-5">
            Full-Stack Digital Marketing
            <span className="gradient-text block mt-1">Under One Roof</span>
          </h2>
          <p className="section-subheading mx-auto">
            Stop juggling five vendors. We handle every layer of your digital growth engine &mdash; from click to close.
          </p>
        </FadeInView>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <FadeInView
              key={service.title}
              delay={i * 0.06}
              className={service.featured ? 'sm:col-span-2' : ''}
            >
              <Link
                href={service.href}
                className="group block h-full bg-white rounded-2xl p-6 border border-gray-100 hover:border-brand-bright/20 hover:shadow-card-hover transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center text-brand-bright group-hover:bg-gradient-brand group-hover:text-white transition-all duration-300">
                    <service.icon className="w-5 h-5" />
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-brand-bright group-hover:translate-x-1 transition-all duration-300" />
                </div>

                <h3 className="text-[15px] font-bold text-brand-dark mb-1 group-hover:text-brand-bright transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs font-semibold text-brand-bright/70 uppercase tracking-wide mb-3">
                  {service.tagline}
                </p>
                <p className="text-sm text-brand-muted leading-relaxed">
                  {service.description}
                </p>
              </Link>
            </FadeInView>
          ))}

          <FadeInView delay={0.5}>
            <div className="relative h-full bg-gradient-brand rounded-2xl p-6 flex flex-col justify-between overflow-hidden">
              <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -bottom-16 -left-16 w-40 h-40 rounded-full bg-cyan-400/10 blur-3xl" />
              <div className="relative">
                <h3 className="text-lg font-bold text-white mb-2">Not sure where to start?</h3>
                <p className="text-sm text-white/70 leading-relaxed mb-6">
                  Tell us your goals. We&apos;ll build the plan. Free &mdash; no strings attached.
                </p>
              </div>
              <Link
                href="/contact"
                className="relative inline-flex items-center justify-center gap-2 w-full py-3.5 bg-white text-brand-deep font-semibold text-sm rounded-xl hover:bg-blue-50 transition-colors"
              >
                Get a Free Strategy Call
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  )
}
