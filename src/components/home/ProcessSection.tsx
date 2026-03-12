'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Search, Rocket, BarChart3, TrendingUp } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Audit & Strategy',
    duration: 'Week 1',
    description: 'We dissect your current marketing, competitors, and market gaps. You get a clear action plan \u2014 even if you don\'t hire us.',
    highlights: ['Competitor gap analysis', 'Revenue opportunity map', 'Custom growth roadmap'],
  },
  {
    number: '02',
    icon: Rocket,
    title: 'Build & Launch',
    duration: 'Weeks 2\u20134',
    description: 'Websites, ads, funnels, SEO \u2014 whatever your strategy calls for, we build and launch it with precision.',
    highlights: ['Conversion-first builds', 'Campaign launch & tracking', 'CRM & automation wiring'],
  },
  {
    number: '03',
    icon: BarChart3,
    title: 'Optimize & Scale',
    duration: 'Ongoing',
    description: 'We monitor daily, A/B test everything, kill underperformers, and double down on winners. Your ROI improves weekly.',
    highlights: ['Daily performance checks', 'A/B split testing', 'Smart budget reallocation'],
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Report & Grow',
    duration: 'Ongoing',
    description: 'Transparent reporting, growth planning sessions, and aggressive scaling once we find your winning formula.',
    highlights: ['Clear dashboards', 'Monthly strategy reviews', 'Revenue scaling plans'],
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

export default function ProcessSection() {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <FadeInView className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-label">How It Works</span>
          <h2 className="section-heading mb-5">
            From First Call to
            <span className="gradient-text block mt-1">Predictable Revenue</span>
          </h2>
          <p className="section-subheading mx-auto">
            A proven 4-step system. Most clients see measurable results within 30 days.
          </p>
        </FadeInView>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-bright/20 via-brand-bright/10 to-transparent hidden md:block" />

          <div className="space-y-8 md:space-y-12">
            {steps.map((step, i) => (
              <FadeInView key={step.number} delay={i * 0.1}>
                <div className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-12 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-xl bg-gradient-brand items-center justify-center text-white font-extrabold text-sm shadow-glow z-10">
                    {step.number}
                  </div>

                  <div className={`flex-1 ${i % 2 === 0 ? 'md:pr-16' : 'md:pl-16'} ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-card hover:border-brand-bright/20 transition-all duration-300">
                      <div className={`flex items-center gap-3 mb-3 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <div className="md:hidden w-10 h-10 rounded-xl bg-gradient-brand flex items-center justify-center text-white font-extrabold text-sm">
                          {step.number}
                        </div>
                        <span className="text-[10px] font-bold text-brand-bright uppercase tracking-widest">{step.duration}</span>
                      </div>
                      <h3 className="text-lg font-bold text-brand-dark mb-2">{step.title}</h3>
                      <p className="text-sm text-brand-muted leading-relaxed mb-4">{step.description}</p>
                      <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                        {step.highlights.map((h) => (
                          <span key={h} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-brand-light/60 text-xs text-brand-deep font-medium">
                            <svg className="w-3 h-3 text-brand-bright flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block flex-1" />
                </div>
              </FadeInView>
            ))}
          </div>
        </div>

        <FadeInView className="text-center mt-16">
          <p className="text-sm text-brand-muted mb-4">
            Step 1 is free. No obligation. No hard sell.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-7 py-4 bg-gradient-cta text-white font-semibold text-[15px] rounded-xl shadow-cta hover:shadow-glow-cta hover:-translate-y-0.5 transition-all duration-300"
          >
            Start with a Free Strategy Audit
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </FadeInView>
      </div>
    </section>
  )
}
