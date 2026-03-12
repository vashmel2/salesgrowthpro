import Link from 'next/link'
import { ArrowRight, Play, CheckCircle2, Star } from 'lucide-react'

const stats = [
  { label: 'Clients Served', value: '200+', detail: 'globally' },
  { label: 'Revenue Generated', value: '$10M+', detail: 'for clients' },
  { label: 'Avg. ROI Increase', value: '320%', detail: 'return' },
]

const proofPoints = [
  'No long-term contracts',
  'Results in 30 days or less',
  'Dedicated account manager',
]

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-gradient-hero">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-brand-bright/15 blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-blue-400/10 blur-[100px]" />
        {/* Dot grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative container-custom pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-4xl mx-auto text-center">
          {/* Social proof badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-8 backdrop-blur-sm">
            <div className="flex -space-x-2">
              {[
                'https://ui-avatars.com/api/?name=M+S&background=0993D1&color=fff&size=32',
                'https://ui-avatars.com/api/?name=J+R&background=00477F&color=fff&size=32',
                'https://ui-avatars.com/api/?name=S+C&background=0569A8&color=fff&size=32',
              ].map((src, i) => (
                <img key={i} src={src} alt="" className="w-7 h-7 rounded-full border-2 border-white/30" />
              ))}
            </div>
            <div className="flex items-center gap-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-white/80">Rated 5/5 by 200+ clients</span>
            </div>
          </div>

          {/* Headline — benefit-first, specific outcome */}
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
            Stop Wasting Ad Spend.
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-blue-200 to-white">
              Start Generating Predictable Revenue.
            </span>
          </h1>

          {/* Subheadline — specificity builds trust */}
          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl mx-auto">
            We build <strong className="text-white">SEO, Google Ads, Facebook Ads, and sales funnel systems</strong> that
            generated <strong className="text-white">$10M+ in client revenue</strong> last year alone.
            Your growth strategy is one call away.
          </p>

          {/* Proof points */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-10">
            {proofPoints.map((point) => (
              <div key={point} className="flex items-center gap-2 text-sm text-white/70">
                <CheckCircle2 className="w-4 h-4 text-cyan-300 flex-shrink-0" />
                {point}
              </div>
            ))}
          </div>

          {/* CTAs — primary action is unmissable */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-deep font-bold text-base rounded-full shadow-hero hover:shadow-[0_20px_60px_rgba(255,255,255,0.3)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Get Your Free Growth Strategy
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <span className="absolute -top-2.5 -right-2 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                Free
              </span>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold text-base rounded-full border-2 border-white/30 hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              See How We Do It
            </Link>
          </div>

          {/* Stats — more visual weight */}
          <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-xl mx-auto">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-4 md:p-5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 hover:bg-white/15 transition-colors"
              >
                <div className="text-3xl md:text-4xl font-extrabold text-white mb-0.5 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[11px] md:text-xs text-white/50 uppercase tracking-wider font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 80L60 74.7C120 69.3 240 58.7 360 53.3C480 48 600 48 720 53.3C840 58.7 960 69.3 1080 69.3C1200 69.3 1320 58.7 1380 53.3L1440 48V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}
