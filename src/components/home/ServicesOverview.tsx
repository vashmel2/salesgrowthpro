import Link from 'next/link'
import { Globe, Search, MousePointerClick, Megaphone, Layout, Filter, Calendar, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    tagline: 'Your 24/7 sales machine',
    description:
      'We build websites that don\'t just look beautiful — they convert visitors into leads. Fast, mobile-optimized, and designed to sell.',
    href: '/services#website-development',
  },
  {
    icon: Search,
    title: 'SEO Services',
    tagline: 'Rank #1, get found, get paid',
    description:
      'Appear at the top of Google when customers search for what you sell. Consistent organic traffic that grows month over month.',
    href: '/services#seo',
  },
  {
    icon: MousePointerClick,
    title: 'Google Ads',
    tagline: 'Instant qualified leads',
    description:
      'Show up at the exact moment someone is ready to buy. We\'ve cut cost-per-lead by 45% on average for our clients.',
    href: '/services#google-ads',
  },
  {
    icon: Megaphone,
    title: 'Facebook & Instagram Ads',
    tagline: 'Reach buyers where they scroll',
    description:
      'Precision-targeted campaigns that turn scrollers into customers. Full-funnel strategy from awareness to purchase.',
    href: '/services#facebook-ads',
  },
  {
    icon: Layout,
    title: 'Landing Pages',
    tagline: 'Pages that convert at 2-5x',
    description:
      'Stop sending ad traffic to your homepage. We build dedicated pages that double or triple your conversion rate.',
    href: '/services#landing-pages',
  },
  {
    icon: Filter,
    title: 'Sales Funnels',
    tagline: 'Revenue on autopilot',
    description:
      'Automated systems that capture, nurture, and close leads 24/7 with email sequences, CRM, and smart follow-ups.',
    href: '/services#sales-funnels',
  },
  {
    icon: Calendar,
    title: 'Monday.com Automation',
    tagline: 'Save 10+ hours per week',
    description:
      'Custom workflows, automations, and dashboards that eliminate repetitive tasks and keep your team focused.',
    href: '/services#monday-automation',
  },
]

export default function ServicesOverview() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="badge-blue mb-4">What We Do</span>
          <h2 className="section-heading mb-5">
            One Agency. Every Service You Need
            <span className="gradient-text block mt-1">To Dominate Online.</span>
          </h2>
          <p className="section-subheading">
            No more juggling 5 different vendors. We handle your entire digital growth engine —
            from the first click to the final sale.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group block bg-white rounded-2xl p-6 shadow-card border border-gray-100 hover:border-brand-bright/30 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-brand-light flex items-center justify-center text-brand-bright mb-4 group-hover:bg-gradient-brand group-hover:text-white transition-all duration-300">
                <service.icon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-brand-dark mb-1 group-hover:text-brand-bright transition-colors">
                {service.title}
              </h3>
              <p className="text-xs font-semibold text-brand-bright mb-3 uppercase tracking-wide">
                {service.tagline}
              </p>
              <p className="text-sm text-brand-muted leading-relaxed mb-4">
                {service.description}
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-brand-bright group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          ))}

          {/* CTA Card — stands out from service cards */}
          <div className="relative bg-gradient-brand rounded-2xl p-6 flex flex-col justify-between overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-white/10 blur-2xl" />
            <div className="relative">
              <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center text-white mb-4">
                <ArrowRight className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Not Sure Where to Start?</h3>
              <p className="text-sm text-white/80 leading-relaxed mb-6">
                Tell us your goals. We&apos;ll build the plan. Free, no-pressure strategy call.
              </p>
            </div>
            <Link
              href="/contact"
              className="relative inline-flex items-center justify-center gap-2 w-full py-3 bg-white text-brand-deep font-bold text-sm rounded-xl hover:bg-blue-50 transition-colors"
            >
              Book Free Strategy Call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
