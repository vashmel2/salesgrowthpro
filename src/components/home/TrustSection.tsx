import { Star, Shield, Award, Users, TrendingUp, BadgeCheck, Clock, Zap } from 'lucide-react'

const trustPoints = [
  {
    icon: BadgeCheck,
    title: 'Google & Meta Certified',
    description: 'Your campaigns are managed by certified specialists — not interns or AI bots.',
    stat: '15+ Certifications',
  },
  {
    icon: TrendingUp,
    title: '$10M+ Revenue Generated',
    description: 'We\'ve driven over $10 million in trackable revenue for our clients in the last 3 years.',
    stat: 'Proven Results',
  },
  {
    icon: Clock,
    title: 'Results in 30 Days',
    description: 'Most clients see measurable improvement within their first month. We move fast.',
    stat: 'Avg. 30 Day Impact',
  },
  {
    icon: Zap,
    title: 'No Long-Term Contracts',
    description: 'We earn your business every month. If we don\'t perform, you can leave. Simple.',
    stat: '95% Retention Rate',
  },
]

const testimonials = [
  {
    name: 'Maria Santos',
    role: 'CEO, Santos Realty Group',
    avatar: 'https://ui-avatars.com/api/?name=Maria+Santos&background=0993D1&color=fff&size=80',
    content:
      'Before SalesGrowthPro, we were spending ₱80,000/month on ads with almost nothing to show for it. Within 90 days, they turned that same budget into 240% more leads. We had to hire two new agents just to keep up.',
    result: '240% more leads in 90 days',
    rating: 5,
  },
  {
    name: 'James Reyes',
    role: 'Founder, TechStart PH',
    avatar: 'https://ui-avatars.com/api/?name=James+Reyes&background=00477F&color=fff&size=80',
    content:
      'I was skeptical about hiring an agency — I\'d been burned before. But SalesGrowthPro showed me the data on day one. Our cost per lead dropped from $45 to $12 and we\'re closing 3x more deals from Google Ads alone.',
    result: 'CPL reduced from $45 to $12',
    rating: 5,
  },
  {
    name: 'Sarah Chen',
    role: 'Marketing Director, EcoMart',
    avatar: 'https://ui-avatars.com/api/?name=Sarah+Chen&background=0569A8&color=fff&size=80',
    content:
      'The sales funnel they built generates ₱500,000+ in revenue every month on autopilot. We barely touch it. Their understanding of customer psychology turned our email list into a revenue machine.',
    result: '₱500K+/month from one funnel',
    rating: 5,
  },
]

export default function TrustSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section header with urgency */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="badge-blue mb-4">Why Top Businesses Choose Us</span>
          <h2 className="section-heading mb-5">
            Your Competitors Are Already Using
            <span className="gradient-text block mt-1">Digital Marketing to Win. Are You?</span>
          </h2>
          <p className="section-subheading">
            Every day you wait, your competitors capture the leads that should be yours.
            Here&apos;s why 200+ businesses trust SalesGrowthPro to grow their revenue.
          </p>
        </div>

        {/* Trust Points — with stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {trustPoints.map((point) => (
            <div
              key={point.title}
              className="relative p-6 rounded-2xl border border-gray-100 hover:border-brand-bright/30 hover:shadow-card transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center text-brand-bright mb-4 group-hover:bg-gradient-brand group-hover:text-white transition-all duration-300">
                <point.icon className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-brand-dark mb-2">{point.title}</h3>
              <p className="text-sm text-brand-muted leading-relaxed mb-3">{point.description}</p>
              <span className="text-xs font-bold text-brand-bright uppercase tracking-wider">
                {point.stat}
              </span>
            </div>
          ))}
        </div>

        {/* Testimonials — with specific results */}
        <div className="text-center mb-10">
          <span className="badge-blue mb-4">Client Success Stories</span>
          <h3 className="text-2xl md:text-3xl font-bold text-brand-dark">
            Don&apos;t Take Our Word for It — See the Numbers
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative card-base flex flex-col overflow-hidden"
            >
              {/* Result highlight banner */}
              <div className="bg-gradient-brand text-white text-center py-2 -mx-6 md:-mx-8 -mt-6 md:-mt-8 mb-6 px-4">
                <span className="text-sm font-bold">{t.result}</span>
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-brand-dark text-sm leading-relaxed mb-6 flex-1">
                &ldquo;{t.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full border-2 border-brand-light"
                />
                <div>
                  <div className="font-bold text-brand-dark text-sm">{t.name}</div>
                  <div className="text-xs text-brand-muted">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Industry logos / Certification badges */}
        <div className="mt-16 pt-12 border-t border-gray-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-sm text-brand-muted uppercase tracking-wide font-semibold mb-1">
                Trusted across industries
              </p>
              <p className="text-xs text-brand-muted">
                Real Estate, E-Commerce, SaaS, Healthcare, Education, Retail & more
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              {[
                { label: 'Google Partner', color: 'bg-blue-50 text-blue-700 border-blue-200' },
                { label: 'Meta Certified', color: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
                { label: 'HubSpot Certified', color: 'bg-orange-50 text-orange-700 border-orange-200' },
                { label: 'Shopify Partner', color: 'bg-green-50 text-green-700 border-green-200' },
              ].map((badge) => (
                <span
                  key={badge.label}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold border ${badge.color}`}
                >
                  {badge.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
