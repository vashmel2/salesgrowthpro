import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://salesgrowthpro.com'),
  title: {
    default: 'SalesGrowthPro | Digital Marketing Agency for Business Growth',
    template: '%s | SalesGrowthPro',
  },
  description:
    'SalesGrowthPro is a results-driven digital marketing agency specializing in SEO, Google Ads, Facebook Ads, website development, and sales funnels. We help businesses grow revenue and dominate their market.',
  keywords: [
    'digital marketing agency',
    'SEO services',
    'Google Ads management',
    'Facebook Ads',
    'website development',
    'sales funnel',
    'landing page',
    'Philippines digital marketing',
    'lead generation',
    'online marketing',
  ],
  authors: [{ name: 'SalesGrowthPro' }],
  creator: 'SalesGrowthPro',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://salesgrowthpro.com',
    siteName: 'SalesGrowthPro',
    title: 'SalesGrowthPro | Digital Marketing Agency for Business Growth',
    description:
      'Results-driven digital marketing agency specializing in SEO, Google Ads, Facebook Ads, and sales funnels. Grow your revenue with SalesGrowthPro.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SalesGrowthPro Digital Marketing Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SalesGrowthPro | Digital Marketing Agency',
    description: 'Results-driven digital marketing agency. Grow your revenue today.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
