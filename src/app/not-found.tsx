import Link from 'next/link'
import { ArrowLeft, Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-brand-bright/20 blur-3xl" />

      <div className="relative text-center px-4">
        <div className="text-8xl font-black text-white/10 mb-0 leading-none">404</div>
        <div className="-mt-4 mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Page Not Found</h1>
          <p className="text-white/70 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="btn-primary text-base px-8 py-4">
            <Home className="w-5 h-5" />
            Go Home
          </Link>
          <Link href="/contact" className="btn-outline-white text-base px-8 py-4">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
