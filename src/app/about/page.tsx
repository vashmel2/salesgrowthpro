import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Target,
  Heart,
  Globe,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Users,
  Award,
  Lightbulb,
  Shield,
} from 'lucide-react'
import CTASection from '@/components/home/CTASection'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about SalesGrowthPro — a results-driven digital marketing agency based in the Philippines, serving businesses worldwide with SEO, ads management, and sales funnel expertise.',
}

const values = [
  {
    icon: Target,
    title: 'Results-Obsessed',
    description:
      'Every strategy, campaign, and tactic we deploy is measured against one metric: your revenue. We don\'t celebrate vanity metrics — we celebrate your growth.',
  },
  {
    icon: Heart,
    title: 'Genuinely Invested',
    description:
      'We treat every client\'s business as if it were our own. When you succeed, we succeed. Your growth is our mission, not just a contract.',
  },
  {
    icon: Lightbulb,
    title: 'Always Learning',
    description:
      'Digital marketing evolves daily. Our team stays at the cutting edge of strategies, platforms, and tools so you always have a competitive advantage.',
  },
  {
    icon: Shield,
    title: 'Radically Transparent',
    description:
      'No smoke and mirrors. You\'ll always know exactly what we\'re doing, why we\'re doing it, and what results it\'s producing.',
  },
]

const team = [
  {
    name: 'Alex Rivera',
    role: 'Founder & CEO',
    bio: 'Digital marketing veteran with 10+ years of experience building growth systems for businesses across Southeast Asia and beyond.',
    avatar: 'https://ui-avatars.com/api/?name=Alex+Rivera&background=00477F&color=fff&size=200',
  },
  {
    name: 'Maria Lim',
    role: 'Head of Paid Media',
    bio: 'Google & Meta certified ads specialist who has managed over $5M in ad spend with an average 4x ROAS across all clients.',
    avatar: 'https://ui-avatars.com/api/?name=Maria+Lim&background=0993D1&color=fff&size=200',
  },
  {
    name: 'Carlo Santos',
    role: 'Lead SEO Strategist',
    bio: 'SEO expert specializing in technical and content SEO, with a track record of ranking businesses on page one for competitive keywords.',
    avatar: 'https://ui-avatars.com/api/?name=Carlo+Santos&background=0569A8&color=fff&size=200',
  },
  {
    name: 'Joanna Cruz',
    role: 'Web Development Lead',
    bio: 'Full-stack developer who builds lightning-fast, conversion-optimized websites that combine beautiful design with technical excellence.',
    avatar: 'https://ui-avatars.com/api/?name=Joanna+Cruz&background=2C353E&color=fff&size=200',
  },
]

const milestones = [
  { year: '2018', title: 'Founded in the Philippines', description: 'SalesGrowthPro was born from a vision to bring world-class digital marketing to businesses of all sizes.' },
  { year: '2019', title: 'First 50 Clients', description: 'Grew our client base to 50 businesses within our first year, earning a reputation for delivering results.' },
  { year: '2021', title: 'Expanded Globally', description: 'Started serving international clients across the USA, Australia, UK, and Singapore.' },
  { year: '2023', title: '$10M in Client Revenue', description: 'Crossed the milestone of $10M in tracked revenue generated for our clients.' },
  { year: '2025', title: '200+ Businesses Served', description: 'Proudly serving 200+ businesses worldwide with a full team of certified digital marketing experts.' },
]

const stats = [
  { value: '200+', label: 'Businesses Served', icon: Users },
  { value: '$10M+', label: 'Revenue Generated', icon: TrendingUp },
  { value: '7+', label: 'Years of Experience', icon: Award },
  { value: '15+', label: 'Global Markets', icon: Globe },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero pt-32 pb-20 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/5 blur-3xl" />
        <div className="relative container-custom text-center max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-white text-sm font-medium mb-6 backdrop-blur-sm">
            Our Story
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            We&apos;re More Than an Agency —
            <span className="block text-blue-200">We&apos;re Your Growth Partner</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Based in the Philippines. Serving clients worldwide. Obsessed with one thing: growing your revenue through intelligent digital marketing.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-10 h-10 rounded-xl bg-gradient-brand flex items-center justify-center text-white mx-auto mb-3">
                  <stat.icon className="w-5 h-5" />
                </div>
                <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-sm text-brand-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="badge-blue mb-4">Our Mission</span>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6 leading-tight">
                Democratizing World-Class Digital Marketing for Every Business
              </h2>
              <p className="text-brand-muted leading-relaxed mb-5">
                SalesGrowthPro was founded with a bold mission: to make enterprise-level digital marketing accessible to businesses of all sizes. We believe every business deserves a fair shot at growth — regardless of budget.
              </p>
              <p className="text-brand-muted leading-relaxed mb-5">
                Based in the Philippines, we combine the best of world-class marketing expertise with the Filipino work ethic known globally for dedication, creativity, and results-orientation. Our team works as your in-house marketing department — at a fraction of the cost.
              </p>
              <p className="text-brand-muted leading-relaxed mb-8">
                We focus on measurable outcomes. Every strategy we recommend, every campaign we run, and every dollar we manage is held accountable to one standard: your return on investment.
              </p>
              <div className="space-y-3">
                {[
                  'Certified Google, Meta, and HubSpot professionals',
                  'Data-driven decisions, never guesswork',
                  'Transparent reporting with real-time dashboards',
                  'Serving clients in the Philippines and globally',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-bright flex-shrink-0 mt-0.5" />
                    <span className="text-brand-dark text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual side */}
            <div className="relative">
              <div className="bg-gradient-brand rounded-3xl p-8 md:p-10 text-white">
                <div className="text-5xl mb-6">🇵🇭</div>
                <h3 className="text-2xl font-bold mb-4">Based in the Philippines, Built for the World</h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  The Philippines is home to some of the most talented digital marketing professionals in the world. We leverage this exceptional talent pool to deliver premium services at rates that make sense for growing businesses everywhere.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Time Zone', value: 'GMT+8 (PH)' },
                    { label: 'Languages', value: 'English, Filipino' },
                    { label: 'Response Time', value: '< 24 hours' },
                    { label: 'Clients Served', value: '15+ Countries' },
                  ].map((item) => (
                    <div key={item.label} className="bg-white/10 rounded-xl p-3">
                      <div className="text-xs text-white/60 mb-1">{item.label}</div>
                      <div className="font-semibold text-sm">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="badge-blue mb-4">What We Stand For</span>
            <h2 className="section-heading mb-4">Our Core Values</h2>
            <p className="section-subheading">
              The principles that guide every decision, every campaign, and every client relationship we have.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="card-base text-center">
                <div className="w-14 h-14 rounded-2xl bg-gradient-brand flex items-center justify-center text-white mx-auto mb-5">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-brand-dark mb-3">{value.title}</h3>
                <p className="text-sm text-brand-muted leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="badge-blue mb-4">Meet the Team</span>
            <h2 className="section-heading mb-4">The Experts Behind Your Growth</h2>
            <p className="section-subheading">
              A team of dedicated digital marketing professionals who genuinely care about your business success.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="card-base text-center group">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-brand-light group-hover:border-brand-bright transition-colors"
                />
                <h3 className="font-bold text-brand-dark mb-1">{member.name}</h3>
                <p className="text-sm text-brand-bright font-medium mb-3">{member.role}</p>
                <p className="text-xs text-brand-muted leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="badge-blue mb-4">Our Journey</span>
            <h2 className="section-heading mb-4">From Startup to Growth Engine</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-deep to-brand-bright" />
              <div className="space-y-8">
                {milestones.map((m, i) => (
                  <div key={m.year} className="relative flex gap-6 items-start">
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-brand flex items-center justify-center text-white font-bold text-xs text-center z-10">
                      {m.year}
                    </div>
                    <div className="card-base flex-1 py-4 px-5">
                      <h3 className="font-bold text-brand-dark mb-1">{m.title}</h3>
                      <p className="text-sm text-brand-muted">{m.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
