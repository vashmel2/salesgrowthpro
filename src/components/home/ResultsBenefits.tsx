'use client'

import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { TrendingUp, DollarSign, Users, Search, MousePointerClick, Zap, ArrowRight, ArrowDown, ArrowUp } from 'lucide-react'

const metrics = [
  { label: 'Lead Increase', value: 240, suffix: '%', prefix: '+', icon: ArrowUp, color: 'text-emerald-500' },
  { label: 'Revenue Growth', value: 3.2, suffix: 'x', prefix: '', icon: DollarSign, color: 'text-brand-bright', decimals: 1 },
  { label: 'Organic Traffic', value: 180, suffix: '%', prefix: '+', icon: ArrowUp, color: 'text-emerald-500' },
  { label: 'Cost Per Lead', value: 45, suffix: '%', prefix: '-', icon: ArrowDown, color: 'text-rose-500' },
]

const benefits = [
  { icon: Users, title: 'Qualified Leads on Demand', before: 'Chasing cold prospects hoping for referrals', after: 'Inbound leads from buyers actively searching for you' },
  { icon: DollarSign, title: 'Predictable Revenue', before: 'Revenue spikes and drops with no pattern', after: 'Consistent monthly growth with a clear trajectory' },
  { icon: MousePointerClick, title: 'Lower Acquisition Cost', before: 'Paying $50+ per lead with declining quality', after: 'More qualified leads for less, every month' },
  { icon: Search, title: 'Page 1 Rankings', before: 'Invisible on Google, losing to competitors', after: 'Ranking for keywords that drive real business' },
  { icon: Zap, title: 'Automated Sales', before: 'Manually following up with every single lead', after: 'Funnels that nurture and close leads 24/7' },
  { icon: TrendingUp, title: 'Brand Authority', before: 'Blending in with every other competitor', after: 'The brand customers recognize and choose first' },
]

function AnimatedCounter({ value, prefix = '', suffix = '', decimals = 0 }: { value: number; prefix?: string; suffix?: string; decimals?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(current)
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <span ref={ref}>
      {prefix}{decimals ? count.toFixed(decimals) : Math.round(count)}{suffix}
    </span>
  )
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

export default function ResultsBenefits() {
  return (
    <section className="section-padding bg-brand-surface">
      <div className="container-custom">
        <FadeInView className="mb-20">
          <div className="bg-white rounded-2xl border border-gray-100 p-8 md:p-10">
            <div className="text-center mb-8">
              <h3 className="text-lg font-bold text-brand-dark">Average Client Results &mdash; First 90 Days</h3>
              <p className="text-sm text-brand-muted mt-1">Based on 200+ client engagements</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((metric) => (
                <div key={metric.label} className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <metric.icon className={`w-4 h-4 ${metric.color}`} />
                    <span className={`text-3xl md:text-4xl font-extrabold tracking-tight ${metric.color}`}>
                      <AnimatedCounter value={metric.value} prefix={metric.prefix} suffix={metric.suffix} decimals={metric.decimals || 0} />
                    </span>
                  </div>
                  <div className="text-xs text-brand-muted font-medium uppercase tracking-wider">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeInView>

        <FadeInView className="text-center max-w-3xl mx-auto mb-14">
          <span className="section-label">The Transformation</span>
          <h2 className="section-heading mb-5">
            Where You Are vs. Where
            <span className="gradient-text block mt-1">We Take You</span>
          </h2>
        </FadeInView>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {benefits.map((benefit, i) => (
            <FadeInView key={benefit.title} delay={i * 0.06}>
              <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-brand-bright/20 hover:shadow-card transition-all duration-300 group h-full">
                <div className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center text-brand-bright mb-4 group-hover:bg-gradient-brand group-hover:text-white transition-all duration-300">
                  <benefit.icon className="w-5 h-5" />
                </div>
                <h3 className="text-[15px] font-bold text-brand-dark mb-4">{benefit.title}</h3>
                <div className="space-y-2.5">
                  <div className="flex items-start gap-2.5">
                    <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-md bg-rose-50 flex items-center justify-center">
                      <span className="text-rose-400 text-xs font-bold">&times;</span>
                    </span>
                    <p className="text-sm text-brand-muted leading-snug">{benefit.before}</p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-md bg-emerald-50 flex items-center justify-center">
                      <span className="text-emerald-500 text-xs font-bold">&#10003;</span>
                    </span>
                    <p className="text-sm text-brand-text leading-snug font-medium">{benefit.after}</p>
                  </div>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>

        <FadeInView className="text-center">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-7 py-4 bg-gradient-brand text-white font-semibold text-[15px] rounded-xl shadow-glow hover:shadow-glow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            I Want These Results
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </FadeInView>
      </div>
    </section>
  )
}
