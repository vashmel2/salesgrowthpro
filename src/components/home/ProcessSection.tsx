import Link from 'next/link'
import { ArrowRight, Search, Rocket, BarChart3, TrendingUp } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Free Strategy Audit',
    duration: 'Week 1',
    description:
      'We analyze your current marketing, competitors, and market opportunity. You walk away with a clear action plan — even if you don\'t hire us.',
    highlights: ['Competitor gap analysis', 'Revenue opportunity mapping', 'Custom growth roadmap'],
  },
  {
    number: '02',
    icon: Rocket,
    title: 'Launch & Execute',
    duration: 'Weeks 2-4',
    description:
      'Our team builds and launches your campaigns — fast. Websites, ads, funnels, SEO — whatever your strategy calls for, we execute with precision.',
    highlights: ['Conversion-optimized builds', 'Campaign launch & tracking', 'CRM & automation setup'],
  },
  {
    number: '03',
    icon: BarChart3,
    title: 'Optimize Relentlessly',
    duration: 'Ongoing',
    description:
      'We monitor every metric daily. A/B test everything. Kill what doesn\'t work. Double down on what does. Your ROI improves every single week.',
    highlights: ['Daily performance checks', 'A/B split testing', 'Budget reallocation'],
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Scale What Works',
    duration: 'Ongoing',
    description:
      'Once we find your winning formula, we scale it aggressively. More traffic. More leads. More revenue. You get transparent reports every step of the way.',
    highlights: ['Transparent reporting', 'Revenue scaling', 'Growth planning sessions'],
  },
]

export default function ProcessSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-blue mb-4">How It Works</span>
          <h2 className="section-heading mb-5">
            From &ldquo;We Need Help&rdquo; to
            <span className="gradient-text block mt-1">&ldquo;We Need to Hire More Staff&rdquo;</span>
          </h2>
          <p className="section-subheading">
            A simple, proven 4-step process. Most clients see measurable results within the first 30 days.
          </p>
        </div>

        {/* Horizontal steps — cleaner than zigzag */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-brand-deep/20 to-brand-bright/20 z-0" style={{ width: 'calc(100% - 3rem)', left: 'calc(50% + 1.5rem)' }} />
              )}

              <div className="relative bg-white rounded-2xl p-6 border border-gray-100 hover:border-brand-bright/30 hover:shadow-card transition-all duration-300 h-full">
                {/* Number + Icon */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center text-white font-extrabold text-lg shadow-md">
                    {step.number}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-brand-bright uppercase tracking-widest">{step.duration}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-brand-dark mb-2">{step.title}</h3>
                <p className="text-sm text-brand-muted leading-relaxed mb-4">{step.description}</p>

                <div className="space-y-1.5">
                  {step.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2 text-xs text-brand-muted">
                      <svg className="w-3.5 h-3.5 text-brand-bright flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {h}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process CTA */}
        <div className="text-center">
          <p className="text-sm text-brand-muted mb-4">
            Step 1 is free. No obligation. No hard sell.
          </p>
          <Link
            href="/contact"
            className="btn-primary text-base px-8 py-4 group"
          >
            Start with Your Free Strategy Audit
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
