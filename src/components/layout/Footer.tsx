import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react'
import NewsletterSignup from '@/components/shared/NewsletterSignup'

const services = [
  { name: 'Website Development', href: '/services#website-development' },
  { name: 'SEO Services', href: '/services#seo' },
  { name: 'Google Ads Management', href: '/services#google-ads' },
  { name: 'Facebook Ads Management', href: '/services#facebook-ads' },
  { name: 'Landing Page Creation', href: '/services#landing-pages' },
  { name: 'Sales Funnel Creation', href: '/services#sales-funnels' },
  { name: 'Monday.com Automation', href: '/services#monday-automation' },
]

const company = [
  { name: 'About Us', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
]

const socials = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Twitter / X', href: '#', icon: Twitter },
  { name: 'YouTube', href: '#', icon: Youtube },
]

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/sales-growth-pro.png"
                alt="SalesGrowthPro"
                width={160}
                height={42}
                className="h-9 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              We help businesses grow revenue through smart, data-driven digital marketing strategies. Based in the Philippines, serving clients worldwide.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-brand-bright hover:text-white transition-all duration-200"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-semibold text-white mb-5">Services</h4>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-brand-bright transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold text-white mb-5">Company</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-brand-bright transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <a
                href="mailto:hello@salesgrowthpro.com"
                className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-brand-bright transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                hello@salesgrowthpro.com
              </a>
              <div className="flex items-center gap-2.5 text-sm text-gray-400">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                Philippines (Serving Worldwide)
              </div>
            </div>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="font-semibold text-white mb-5">Stay Updated</h4>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              Get the latest digital marketing tips, strategies, and insights delivered to your inbox.
            </p>
            <NewsletterSignup variant="dark" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} SalesGrowthPro. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Built with ❤️ in the Philippines
          </p>
        </div>
      </div>
    </footer>
  )
}
