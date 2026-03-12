import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Globe,
  Search,
  MousePointerClick,
  Megaphone,
  Layout,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Calendar,
  Settings,
  Mail,
  Database,
  Zap,
} from 'lucide-react'
import CTASection from '@/components/home/CTASection'

export const metadata: Metadata = {
  title: 'Digital Marketing Services',
  description:
    'Explore SalesGrowthPro\'s full suite of digital marketing services: SEO, Google Ads, Facebook Ads, website development, landing pages, sales funnels, and Monday.com automation.',
}

const services = [
  {
    id: 'website-development',
    icon: Globe,
    title: 'Website Development',
    tagline: 'Your 24/7 Sales Machine',
    description:
      'Your website is the foundation of your digital presence. We build modern, fast, and conversion-optimized websites that look stunning on every device and are designed to turn visitors into customers.',
    whyItMatters:
      'A slow, outdated, or poorly designed website sends potential customers straight to your competitors. In today\'s digital world, your website is often the first impression — it needs to be perfect.',
    deliverables: [
      'Custom, responsive web design (mobile-first)',
      'Fast loading speeds (Core Web Vitals optimized)',
      'SEO-ready technical structure',
      'Contact forms and lead capture',
      'Google Analytics & conversion tracking setup',
      'CMS integration (WordPress, Webflow, or custom)',
      'SSL security and performance optimization',
      'Post-launch support and maintenance',
    ],
    ideal: ['Businesses without a website', 'Companies with outdated websites', 'Brands needing a redesign for better conversions'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'seo',
    icon: Search,
    title: 'SEO Services',
    tagline: 'Rank Higher. Get Found. Grow Faster.',
    description:
      'Our data-driven SEO strategies put your business at the top of Google search results — consistently driving qualified organic traffic that converts into leads and customers, month after month.',
    whyItMatters:
      '93% of online experiences begin with a search engine. If your business isn\'t on page one, you\'re invisible to potential customers actively searching for what you offer. SEO is the highest ROI long-term marketing investment.',
    deliverables: [
      'Comprehensive SEO audit & competitor analysis',
      'Keyword research and strategic targeting',
      'On-page SEO optimization (titles, meta, content)',
      'Technical SEO fixes (speed, schema, crawlability)',
      'Link building and domain authority growth',
      'Local SEO (Google Business Profile optimization)',
      'Monthly content creation for target keywords',
      'Transparent monthly ranking and traffic reports',
    ],
    ideal: ['Businesses wanting long-term organic growth', 'Local businesses targeting nearby customers', 'Companies competing for industry keywords'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 'google-ads',
    icon: MousePointerClick,
    title: 'Google Ads Management',
    tagline: 'Show Up When Customers Are Ready to Buy',
    description:
      'We manage Google Ads campaigns that put your business in front of high-intent buyers at the exact moment they\'re searching for your product or service. Every dollar is optimized for maximum ROI.',
    whyItMatters:
      'Google Ads delivers immediate results — unlike SEO, you can appear on page one today. But without expert management, most businesses waste 50-70% of their ad budget. We eliminate waste and maximize conversions.',
    deliverables: [
      'Campaign strategy, structure, and setup',
      'Keyword research and negative keyword management',
      'Compelling ad copywriting and A/B testing',
      'Landing page recommendations and optimization',
      'Bid management and budget optimization',
      'Conversion tracking and ROI reporting',
      'Google Shopping campaigns (for e-commerce)',
      'Remarketing campaigns to re-engage visitors',
    ],
    ideal: ['Businesses wanting immediate lead generation', 'Companies with existing ad accounts underperforming', 'E-commerce stores wanting more sales'],
    color: 'from-yellow-500 to-orange-500',
  },
  {
    id: 'facebook-ads',
    icon: Megaphone,
    title: 'Facebook Ads Management',
    tagline: 'Reach Your Ideal Customers Where They Scroll',
    description:
      'We create and manage highly targeted Facebook and Instagram ad campaigns that reach your exact ideal customer. From awareness to conversion, we build full-funnel strategies that drive real results.',
    whyItMatters:
      'With 2.9 billion active users, Facebook offers unparalleled targeting capabilities. Whether you\'re selling to consumers or businesses, we can put your offer in front of the right people at the right time — at a fraction of traditional advertising costs.',
    deliverables: [
      'Audience research, segmentation, and targeting',
      'Creative ad design (images, carousels, videos)',
      'Compelling ad copywriting optimized for conversions',
      'Full-funnel campaign strategy (TOF, MOF, BOF)',
      'Facebook Pixel setup and event tracking',
      'Retargeting campaigns for warm audiences',
      'Budget management and bid optimization',
      'Detailed performance reports and insights',
    ],
    ideal: ['B2C businesses wanting to reach local or national audiences', 'E-commerce brands wanting to scale revenue', 'Service businesses looking for consistent leads'],
    color: 'from-blue-600 to-indigo-600',
  },
  {
    id: 'landing-pages',
    icon: Layout,
    title: 'Landing Page Creation',
    tagline: 'Pages Built to Convert, Not Just Look Pretty',
    description:
      'We design and build high-converting landing pages that turn ad traffic into leads and leads into customers. Every element — headline, copy, design, and CTA — is strategically crafted to maximize conversions.',
    whyItMatters:
      'Sending paid traffic to your homepage is like pouring water into a leaky bucket. A dedicated landing page with a single, clear goal can 2x, 3x, or even 5x your conversion rate — dramatically lowering your cost per lead.',
    deliverables: [
      'Conversion-focused landing page strategy',
      'Persuasive copywriting (headlines, body, CTAs)',
      'Professional visual design aligned with your brand',
      'Mobile-optimized responsive layout',
      'Lead capture forms and CRM integration',
      'A/B testing setup for continuous optimization',
      'Page speed optimization for quality scores',
      'Analytics and conversion tracking setup',
    ],
    ideal: ['Businesses running Google or Facebook Ads', 'Companies promoting specific offers or services', 'Anyone looking to improve lead generation rates'],
    color: 'from-purple-500 to-violet-500',
  },
  {
    id: 'sales-funnels',
    icon: TrendingUp,
    title: 'Sales Funnel Creation',
    tagline: 'Turn Strangers Into Loyal, Paying Customers',
    description:
      'We build complete, automated sales systems — from initial awareness to closed sale — including strategic copywriting, CRM setup, and email marketing automation that works around the clock.',
    whyItMatters:
      'Most businesses lose up to 80% of potential customers because they have no systematic process to nurture prospects. A properly built sales funnel captures every lead and guides them to purchase automatically.',
    deliverables: [
      'Full funnel strategy and customer journey mapping',
      'Lead magnet creation (eBook, checklist, webinar)',
      'Opt-in page and thank you page creation',
      'Email marketing sequence (7-14 emails)',
      'CRM setup and pipeline configuration',
      'Automation workflows (triggers, tags, segmentation)',
      'Upsell/downsell offer creation',
      'Funnel analytics and conversion tracking',
    ],
    ideal: ['Service businesses wanting automated lead nurturing', 'Coaches and consultants selling high-ticket offers', 'E-commerce businesses wanting repeat customers'],
    color: 'from-rose-500 to-pink-500',
  },
  {
    id: 'monday-automation',
    icon: Settings,
    title: 'Monday.com Automation Setup',
    tagline: 'Streamline Operations, Save 10+ Hours a Week',
    description:
      'We build custom Monday.com workspaces, automated workflows, and integrations that streamline your business operations — so your team spends time on what matters, not on repetitive tasks.',
    whyItMatters:
      'Disorganized operations cost businesses thousands in lost productivity. Monday.com, properly configured, becomes the command center for your entire business — connecting your team, clients, and tools in one place.',
    deliverables: [
      'Monday.com workspace design and setup',
      'Custom board, group, and item structure',
      'Automation recipes for repetitive tasks',
      'Integration with CRM, email, and other tools',
      'Client portal and external access setup',
      'Team training and onboarding documentation',
      'Reporting dashboards and KPI tracking',
      'Ongoing optimization and support',
    ],
    ideal: ['Teams drowning in manual, repetitive tasks', 'Growing businesses needing operational structure', 'Companies wanting to automate client onboarding'],
    color: 'from-red-500 to-orange-500',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-brand-bright/20 blur-3xl" />
        </div>
        <div className="relative container-custom text-center max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-white text-sm font-medium mb-6 backdrop-blur-sm">
            Full-Service Digital Marketing
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Everything You Need to
            <span className="block text-blue-200">Dominate Online</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
            From building your online presence to running profitable ads and automating your sales — we offer every service your business needs to grow predictably.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="px-4 py-2 rounded-full bg-white/15 border border-white/25 text-white text-sm hover:bg-white/25 transition-colors"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services Detail Sections */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`section-padding ${index % 2 === 0 ? 'bg-white' : 'bg-gradient-subtle'}`}
        >
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Left: Content */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} text-white mb-6`}>
                  <service.icon className="w-6 h-6" />
                </div>

                <span className="badge-blue mb-3">{service.tagline}</span>
                <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 leading-tight">
                  {service.title}
                </h2>
                <p className="text-brand-muted leading-relaxed mb-6">{service.description}</p>

                <div className="p-4 rounded-xl bg-brand-light border border-brand-bright/20 mb-8">
                  <p className="text-sm font-semibold text-brand-deep mb-1">Why It Matters</p>
                  <p className="text-sm text-brand-muted leading-relaxed">{service.whyItMatters}</p>
                </div>

                {/* Ideal for */}
                <div className="mb-8">
                  <p className="text-sm font-semibold text-brand-dark mb-3">Ideal For:</p>
                  <div className="flex flex-col gap-2">
                    {service.ideal.map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-bright flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-brand-muted">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link href="/contact" className="btn-primary">
                  Get Started with {service.title}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Right: Deliverables */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="bg-white rounded-2xl shadow-card p-6 md:p-8 border border-gray-100">
                  <h3 className="font-bold text-brand-dark mb-6 flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full bg-gradient-to-br ${service.color}`} />
                    What You Get
                  </h3>
                  <ul className="space-y-3">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-light flex items-center justify-center mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-bright" />
                        </div>
                        <span className="text-sm text-brand-dark leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <Link
                      href="/contact"
                      className="w-full btn-primary justify-center"
                    >
                      Request a Quote
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <CTASection />
    </>
  )
}
