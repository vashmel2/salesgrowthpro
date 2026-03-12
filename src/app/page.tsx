import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import TrustSection from '@/components/home/TrustSection'
import ServicesOverview from '@/components/home/ServicesOverview'
import ProcessSection from '@/components/home/ProcessSection'
import ResultsBenefits from '@/components/home/ResultsBenefits'
import BlogPreview from '@/components/home/BlogPreview'
import CTASection from '@/components/home/CTASection'

export const metadata: Metadata = {
  title: 'SalesGrowthPro | Digital Marketing Agency for Business Growth',
  description:
    'SalesGrowthPro helps businesses grow revenue through SEO, Google Ads, Facebook Ads, website development, and automated sales funnels. Book your free consultation today.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSection />
      <ServicesOverview />
      <ProcessSection />
      <ResultsBenefits />
      <BlogPreview />
      <CTASection />
    </>
  )
}
