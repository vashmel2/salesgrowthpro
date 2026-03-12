'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Star } from 'lucide-react'

const stats = [
  { label: 'Revenue Generated', value: '$10M+' },
  { label: 'Active Clients', value: '200+' },
  { label: 'Average ROI', value: '320%' },
]

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-gradient-mesh opacity-60" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-brand-bright/20 blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-cyan-400/15 blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="relative container-custom pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center md:justify-start mb-8"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-white/[0.08] border border-white/[0.12] backdrop-blur-sm">
              <div className="flex -space-x-1.5">
                {['MS', 'JR', 'SC', 'AK'].map((initials, i) => (
                  <div key={i} className="w-6 h-6 rounded-full bg-gradient-brand flex items-center justify-center text-[9px] font-bold text-white border-2 border-white/20">
                    {initials}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1.5">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-white/60 text-xs font-medium">Trusted by 200+ businesses</span>
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-[4.25rem] font-extrabold text-white leading-[1.08] tracking-tight text-center md:text-left mb-6"
          >
            We Build Marketing Systems
            <span className="block mt-2 bg-gradient-to-r from-cyan-300 via-blue-200 to-white bg-clip-text text-transparent">
              That Print Revenue.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg md:text-xl text-white/65 leading-relaxed mb-8 max-w-2xl text-center md:text-left"
          >
            SEO, Google Ads, Facebook Ads, and sales funnels — engineered to generate
            <strong className="text-white/90"> predictable, scalable revenue</strong> for your business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2 mb-10"
          >
            {['No contracts — cancel anytime', 'Results in 30 days', 'Free strategy session'].map((point) => (
              <div key={point} className="flex items-center gap-2 text-sm text-white/50">
                <CheckCircle2 className="w-4 h-4 text-cyan-400/70 flex-shrink-0" />
                {point}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-16"
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2.5 px-7 py-4 bg-gradient-cta text-white font-bold text-[15px] rounded-xl shadow-cta hover:shadow-glow-cta hover:-translate-y-0.5 transition-all duration-300"
            >
              Get Your Free Growth Plan
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-4 text-white/80 font-medium text-[15px] rounded-xl border border-white/15 hover:bg-white/[0.06] hover:border-white/25 transition-all duration-300"
            >
              Explore Our Services
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex items-center justify-center md:justify-start gap-8 md:gap-12"
          >
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-3">
                {i > 0 && <div className="w-px h-10 bg-white/10 -ml-4 md:-ml-6 mr-4 md:mr-6" />}
                <div>
                  <div className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">{stat.value}</div>
                  <div className="text-[11px] text-white/40 font-medium uppercase tracking-wider mt-0.5">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  )
}
