'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Send, CheckCircle2 } from 'lucide-react'
import Button from '@/components/ui/Button'

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
})

type FormData = z.infer<typeof schema>

const services = [
  'Website Development',
  'SEO Services',
  'Google Ads Management',
  'Facebook Ads Management',
  'Landing Page Creation',
  'Sales Funnel Creation',
  'Monday.com Automation Setup',
  'Multiple Services / Full Package',
  'Not Sure — Need Consultation',
]

export default function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    setSubmitStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (res.ok) {
        setSubmitStatus('success')
        reset()
      } else {
        setSubmitStatus('error')
        setErrorMessage(json.error || 'Something went wrong. Please try again.')
      }
    } catch {
      setSubmitStatus('error')
      setErrorMessage('Something went wrong. Please try again.')
    }
  }

  if (submitStatus === 'success') {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-brand-dark mb-2">Message Sent!</h3>
        <p className="text-brand-muted mb-6">
          Thank you for reaching out. We&apos;ll get back to you within 24 hours with a personalized response.
        </p>
        <Button
          variant="secondary"
          onClick={() => setSubmitStatus('idle')}
          size="sm"
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="form-label">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            {...register('name')}
            type="text"
            placeholder="Your full name"
            className={`input-field ${errors.name ? 'border-red-400 focus:ring-red-400' : ''}`}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className="form-label">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            {...register('email')}
            type="email"
            placeholder="you@company.com"
            className={`input-field ${errors.email ? 'border-red-400 focus:ring-red-400' : ''}`}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Company */}
      <div>
        <label className="form-label">Company / Business Name</label>
        <input
          {...register('company')}
          type="text"
          placeholder="Your company name (optional)"
          className="input-field"
        />
      </div>

      {/* Service */}
      <div>
        <label className="form-label">
          Service You&apos;re Interested In <span className="text-red-500">*</span>
        </label>
        <select
          {...register('service')}
          className={`input-field ${errors.service ? 'border-red-400 focus:ring-red-400' : ''}`}
        >
          <option value="">Select a service...</option>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {errors.service && (
          <p className="mt-1 text-xs text-red-500">{errors.service.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label className="form-label">
          Tell Us About Your Business & Goals <span className="text-red-500">*</span>
        </label>
        <textarea
          {...register('message')}
          rows={5}
          placeholder="Tell us about your business, current challenges, and what you're hoping to achieve with digital marketing..."
          className={`input-field resize-none ${errors.message ? 'border-red-400 focus:ring-red-400' : ''}`}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
        )}
      </div>

      {/* Error */}
      {submitStatus === 'error' && (
        <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-sm text-red-600">
          {errorMessage}
        </div>
      )}

      {/* Submit */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        loading={submitStatus === 'loading'}
        className="w-full"
      >
        <Send className="w-4 h-4" />
        Send My Message
      </Button>

      <p className="text-xs text-brand-muted text-center">
        By submitting this form, you agree to our{' '}
        <a href="/privacy" className="text-brand-bright hover:underline">
          Privacy Policy
        </a>
        . We&apos;ll never spam or share your information.
      </p>
    </form>
  )
}
