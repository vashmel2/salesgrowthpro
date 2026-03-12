'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

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

export default function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInView>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.06] border border-white/[0.1] text-white/70 text-sm font-medium mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Limited &mdash; we take 5 new clients per month
            </div>
          </FadeInView>

          <FadeInView delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-[1.12] tracking-tight">
              Ready to Grow Your Business?
              <span className="block mt-2 bg-gradient-to-r from-cyan-300 to-blue-200 bg-clip-text text-transparent">
                Let&apos;s Build Your Growth Engine.
              </span>
            </h2>
          </FadeInView>

          <FadeInView delay={0.2}>
            <p className="text-lg text-white/60 mb-6 leading-relaxed max-w-2xl mx-auto">
              Book a <strong className="text-white/90">free 30-minute strategy consultation</strong> with our team. We&apos;ll analyze your current marketing, identify your biggest growth opportunities, and show you exactly how we can help.
            </p>
          </FadeInView>

          <FadeInView delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-2 mb-10">
              {['Full competitor analysis', 'Custom growth roadmap', 'Revenue opportunity assessment'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-white/50">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400/60 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </FadeInView>

          <FadeInView delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-cta text-white font-bold text-base rounded-xl shadow-cta hover:shadow-glow-cta hover:-translate-y-0.5 transition-all duration-300"
              >
                Book Your Free Strategy Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 text-white/70 font-medium text-base rounded-xl border border-white/10 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300"
              >
                Explore Our Services
              </Link>
            </div>
          </FadeInView>

          <FadeInView delay={0.5}>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1.5">
              {['No credit card required', 'No long-term contracts', '30-day results guarantee'].map((item) => (
                <span key={item} className="text-xs text-white/30 font-medium">
                  {item}
                </span>
              ))}
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  )
}
