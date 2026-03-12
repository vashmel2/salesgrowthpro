'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'
import { cn } from '@/lib/utils'

interface NewsletterSignupProps {
  variant?: 'light' | 'dark'
  className?: string
}

export default function NewsletterSignup({ variant = 'light', className }: NewsletterSignupProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus('loading')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (res.ok) {
        setStatus('success')
        setMessage('You\'re subscribed! Check your inbox.')
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className={cn('flex items-center gap-2 text-sm', variant === 'dark' ? 'text-green-400' : 'text-green-600', className)}>
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        {message}
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={cn('space-y-2', className)}>
      <div className="flex gap-2" suppressHydrationWarning>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          data-lpignore="true"
          data-form-type="other"
          autoComplete="off"
          className={cn(
            'flex-1 min-w-0 px-4 py-2.5 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-bright transition-all',
            variant === 'dark'
              ? 'bg-white/10 border border-white/20 text-white placeholder-gray-400'
              : 'bg-white border border-gray-200 text-brand-dark placeholder-gray-400'
          )}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="flex-shrink-0 px-4 py-2.5 bg-gradient-brand text-white rounded-xl text-sm font-medium hover:shadow-lg transition-all duration-200 disabled:opacity-60"
          aria-label="Subscribe"
        >
          {status === 'loading' ? (
            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
          ) : (
            <Send className="w-4 h-4" />
          )}
        </button>
      </div>
      {status === 'error' && (
        <p className="text-xs text-red-400">{message}</p>
      )}
      <p className={cn('text-xs', variant === 'dark' ? 'text-white/50' : 'text-gray-400')}>
        No spam. Unsubscribe anytime.
      </p>
    </form>
  )
}
