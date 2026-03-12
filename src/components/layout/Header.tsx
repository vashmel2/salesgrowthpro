'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

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

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-glass py-3 border-b border-gray-100/50'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link href="/" className="relative flex items-center gap-2 flex-shrink-0 z-10">
            <Image
              src="/sales-growth-pro.png"
              alt="SalesGrowthPro"
              width={180}
              height={48}
              className={cn(
                'h-9 w-auto transition-all duration-500',
                scrolled ? '' : 'brightness-0 invert'
              )}
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) =>
              item.children ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    className={cn(
                      'flex items-center gap-1.5 px-4 py-2 text-[13px] font-medium rounded-lg transition-all duration-200',
                      scrolled
                        ? 'text-brand-text hover:text-brand-bright hover:bg-gray-50'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    )}
                  >
                    {item.name}
                    <ChevronDown className={cn(
                      'w-3.5 h-3.5 transition-transform duration-200',
                      servicesOpen && 'rotate-180'
                    )} />
                  </button>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                        className="absolute top-full left-0 pt-2 w-64"
                      >
                        <div className="bg-white rounded-xl shadow-card-hover border border-gray-100/80 overflow-hidden p-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block px-3 py-2.5 text-sm text-brand-text hover:text-brand-bright hover:bg-brand-light/50 rounded-lg transition-colors duration-150"
                            >
                              {child.name}
                            </Link>
                          ))}
                          <div className="border-t border-gray-100 mt-1 pt-1">
                            <Link
                              href="/services"
                              className="flex items-center gap-1.5 px-3 py-2.5 text-sm font-semibold text-brand-bright hover:bg-brand-light/50 rounded-lg transition-colors"
                            >
                              View All Services <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'px-4 py-2 text-[13px] font-medium rounded-lg transition-all duration-200',
                    scrolled
                      ? 'text-brand-text hover:text-brand-bright hover:bg-gray-50'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  )}
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className={cn(
                'inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300',
                scrolled
                  ? 'bg-gradient-brand text-white hover:shadow-glow hover:-translate-y-0.5'
                  : 'bg-white text-brand-deep hover:shadow-hero hover:-translate-y-0.5'
              )}
            >
              Book a Call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <button
            className={cn(
              'lg:hidden relative z-10 p-2 rounded-lg transition-colors',
              mobileOpen ? 'text-brand-dark' : scrolled ? 'text-brand-dark' : 'text-white'
            )}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-0 bg-white z-40 lg:hidden"
          >
            <div className="flex flex-col h-full pt-20 pb-8 px-6 overflow-y-auto">
              <nav className="flex-1 space-y-1">
                {navigation.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      className="block px-4 py-3.5 text-lg font-medium text-brand-dark hover:text-brand-bright rounded-xl transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.children && (
                      <div className="ml-4 space-y-0.5 mb-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-brand-muted hover:text-brand-bright rounded-lg transition-colors"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </nav>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-6 border-t border-gray-100"
              >
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-brand text-white font-semibold rounded-xl hover:shadow-glow transition-all"
                  onClick={() => setMobileOpen(false)}
                >
                  Book a Free Strategy Call
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
