import Link from 'next/link'
import { ArrowRight, Calendar, CheckCircle2, Star } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-hero overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-brand-bright/15 blur-[100px]" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-blue-400/10 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`,
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="relative container-custom">
        <div className="max-w-3xl mx-auto text-center">
          {/* Urgency badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            We only take on 5 new clients per month to ensure quality
          </div>

          {/* Headline — consequence-driven */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-[1.15] tracking-tight">
            Every Day Without a Growth Strategy
            <span className="block text-cyan-200 mt-2">Is Revenue You&apos;ll Never Get Back.</span>
          </h2>

          {/* Subheadline — what they get */}
          <p className="text-lg md:text-xl text-white/80 mb-6 leading-relaxed max-w-2xl mx-auto">
            Book your <strong className="text-white">free 30-minute strategy call</strong> and walk away with a custom growth plan — even if you never hire us.
          </p>

          {/* What you get in the call */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-2 mb-10">
            {[
              'Full competitor analysis',
              'Custom growth roadmap',
              'Revenue opportunity assessment',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-white/70">
                <CheckCircle2 className="w-4 h-4 text-cyan-300 flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-deep font-bold text-base rounded-full shadow-hero hover:shadow-[0_20px_60px_rgba(255,255,255,0.3)] hover:-translate-y-0.5 transition-all duration-300"
            >
              <Calendar className="w-5 h-5" />
              Claim Your Free Strategy Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Risk reversal / trust strip */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5">
            {[
              'No credit card required',
              'No long-term contracts',
              'Results in 30 days or we work free',
            ].map((item) => (
              <span key={item} className="text-xs text-white/50 font-medium">
                ✓ {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
