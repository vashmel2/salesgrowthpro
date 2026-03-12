'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'
import Button from '@/components/ui/Button'

const navigation = [
  { name: 'Home', href: '/' },
  {
    name: 'Services',
    href: '/services',
    children: [
      { name: 'Website Development', href: '/services#website-development' },
      { name: 'SEO', href: '/services#seo' },
      { name: 'Google Ads', href: '/services#google-ads' },
      { name: 'Facebook Ads', href: '/services#facebook-ads' },
      { name: 'Landing Pages', href: '/services#landing-pages' },
      { name: 'Sales Funnels', href: '/services#sales-funnels' },
      { name: 'Monday.com Automation', href: '/services#monday-automation' },
    ],
  },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent py-4'
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo — use brightness/invert filter to make it white on dark hero, normal when scrolled */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image
              src="/sales-growth-pro.png"
              alt="SalesGrowthPro"
              width={180}
              height={48}
              className={cn(
                'h-10 w-auto transition-all duration-300',
                scrolled ? '' : 'brightness-0 invert'
              )}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navigation.map((item) =>
              item.children ? (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    className={cn(
                      'flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200',
                      scrolled ? 'text-brand-dark hover:text-brand-bright' : 'text-white/90 hover:text-white'
                    )}
                  >
                    {item.name}
                    <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                  </button>
                  {/* Dropdown */}
                  <div className="absolute top-full left-0 pt-3 w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                    <div className="bg-white rounded-2xl shadow-card-hover border border-gray-100 overflow-hidden py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-5 py-2.5 text-sm text-brand-dark hover:text-brand-bright hover:bg-brand-light/60 transition-colors duration-150"
                        >
                          {child.name}
                        </Link>
                      ))}
                      <div className="border-t border-gray-100 mt-2 pt-2 px-5 pb-2">
                        <Link
                          href="/services"
                          className="text-xs font-semibold text-brand-bright hover:underline"
                        >
                          View All Services →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200',
                    scrolled
                      ? 'text-brand-dark hover:text-brand-bright hover:bg-brand-light/60'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  )}
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+639XXXXXXXXX"
              className={cn(
                'flex items-center gap-1.5 text-sm font-medium transition-colors',
                scrolled ? 'text-brand-dark hover:text-brand-bright' : 'text-white/80 hover:text-white'
              )}
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden xl:inline">Call Us</span>
            </a>
            <Button
              variant={scrolled ? 'primary' : 'outline-white'}
              size="sm"
              onClick={() => (window.location.href = '/contact')}
            >
              Get Free Strategy Call
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className={cn(
              'lg:hidden p-2 rounded-lg transition-colors',
              scrolled ? 'text-brand-dark' : 'text-white'
            )}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'lg:hidden overflow-hidden transition-all duration-300',
          mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="bg-white border-t border-gray-100 shadow-lg">
          <nav className="container-custom py-4 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block px-4 py-3 text-sm font-medium text-brand-dark hover:text-brand-bright hover:bg-brand-light rounded-xl transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.name}
                </Link>
                {item.children && (
                  <div className="ml-4 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-brand-muted hover:text-brand-bright hover:bg-brand-light rounded-xl transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 px-4 border-t border-gray-100 space-y-2">
              <Button
                variant="primary"
                className="w-full"
                onClick={() => {
                  window.location.href = '/contact'
                  setMobileOpen(false)
                }}
              >
                Get Free Strategy Call
              </Button>
              <a
                href="tel:+639XXXXXXXXX"
                className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-medium text-brand-dark hover:text-brand-bright"
              >
                <Phone className="w-4 h-4" />
                Call Us Now
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
