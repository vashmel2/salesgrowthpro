import Link from 'next/link'
import { TrendingUp, DollarSign, Users, Search, MousePointerClick, Zap, ArrowRight, ArrowDown, ArrowUp } from 'lucide-react'

const metrics = [
  { label: 'Lead Increase', value: '240%', icon: ArrowUp, prefix: '+', color: 'text-green-600' },
  { label: 'Revenue Growth', value: '3.2x', icon: DollarSign, prefix: '', color: 'text-brand-bright' },
  { label: 'Organic Traffic', value: '180%', icon: ArrowUp, prefix: '+', color: 'text-green-600' },
  { label: 'Cost Per Lead', value: '45%', icon: ArrowDown, prefix: '-', color: 'text-red-500' },
]

const benefits = [
  {
    icon: Users,
    title: 'Pre-Qualified Leads on Demand',
    before: 'Chasing cold prospects, hoping for referrals',
    after: 'Inbound leads from buyers ready to purchase',
  },
  {
    icon: DollarSign,
    title: 'Revenue You Can Predict',
    before: 'Revenue spikes and drops with no pattern',
    after: 'Consistent monthly revenue with a clear growth curve',
  },
  {
    icon: MousePointerClick,
    title: 'Lower Acquisition Costs',
    before: 'Paying $50+ per lead with declining quality',
    after: 'Getting more qualified leads for less every month',
  },
  {
    icon: Search,
    title: 'Page 1 Rankings That Stick',
    before: 'Invisible on Google, losing to competitors',
    after: 'Ranking for keywords that drive real business',
  },
  {
    icon: Zap,
    title: 'Sales That Close Themselves',
    before: 'Manually following up with every lead',
    after: 'Automated funnels that nurture and close 24/7',
  },
  {
    icon: TrendingUp,
    title: 'A Brand People Trust',
    before: 'Blending in with every other competitor',
    after: 'Recognized authority that customers choose first',
  },
]

export default function ResultsBenefits() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Metrics — visual impact with before/after framing */}
        <div className="bg-white rounded-3xl shadow-card border border-gray-100 p-8 md:p-10 mb-20">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-brand-dark">Average Client Results After 90 Days</h3>
            <p className="text-sm text-brand-muted mt-1">Based on data from 200+ client engagements</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <metric.icon className={`w-5 h-5 ${metric.color}`} />
                  <span className={`text-4xl md:text-5xl font-extrabold tracking-tight ${metric.color}`}>
                    {metric.prefix}{metric.value}
                  </span>
                </div>
                <div className="text-xs text-brand-muted font-medium uppercase tracking-wider">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Before → After Benefits */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="badge-blue mb-4">The Transformation</span>
          <h2 className="section-heading mb-5">
            Where You Are Now vs. Where
            <span className="gradient-text block mt-1">We&apos;ll Take You</span>
          </h2>
          <p className="section-subheading">
            Every business we work with goes through the same transformation.
            Here&apos;s what changes when SalesGrowthPro builds your growth engine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-white rounded-2xl p-6 shadow-card border border-gray-100 hover:border-brand-bright/30 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-xl bg-brand-light flex items-center justify-center text-brand-bright mb-4 group-hover:bg-gradient-brand group-hover:text-white transition-all duration-300">
                <benefit.icon className="w-5 h-5" />
              </div>

              <h3 className="text-base font-bold text-brand-dark mb-4">{benefit.title}</h3>

              {/* Before */}
              <div className="flex items-start gap-2 mb-2">
                <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center">
                  <span className="text-red-500 text-xs font-bold">✕</span>
                </span>
                <p className="text-sm text-brand-muted leading-snug">
                  <span className="font-medium text-brand-dark">Before: </span>
                  {benefit.before}
                </p>
              </div>

              {/* After */}
              <div className="flex items-start gap-2">
                <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 text-xs font-bold">✓</span>
                </span>
                <p className="text-sm text-brand-muted leading-snug">
                  <span className="font-medium text-brand-dark">After: </span>
                  {benefit.after}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Results CTA */}
        <div className="text-center">
          <Link
            href="/contact"
            className="btn-primary text-base px-8 py-4 group"
          >
            I Want These Results
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
