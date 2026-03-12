import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  company: z.string().max(100).optional(),
  service: z.string().min(1),
  message: z.string().min(20).max(5000),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = schema.parse(body)

    // Log submission (replace with your actual DB/email logic)
    const submission = {
      ...data,
      timestamp: new Date().toISOString(),
      source: req.headers.get('referer') || 'direct',
      ip: req.headers.get('x-forwarded-for') || 'unknown',
    }

    console.log('📧 New Contact Form Submission:', submission)

    // ─────────────────────────────────────────────────────────────────────────
    // PRODUCTION: Uncomment and configure ONE of the options below:
    //
    // Option 1: Send email via Resend
    // import { Resend } from 'resend'
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'SalesGrowthPro <noreply@salesgrowthpro.com>',
    //   to: 'hello@salesgrowthpro.com',
    //   subject: `New inquiry from ${data.name} — ${data.service}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${data.name}</p>
    //     <p><strong>Email:</strong> ${data.email}</p>
    //     <p><strong>Company:</strong> ${data.company || 'N/A'}</p>
    //     <p><strong>Service:</strong> ${data.service}</p>
    //     <p><strong>Message:</strong> ${data.message}</p>
    //   `,
    // })
    //
    // Option 2: Save to database (e.g., Supabase)
    // import { createClient } from '@supabase/supabase-js'
    // const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_KEY!)
    // await supabase.from('contact_submissions').insert([submission])
    //
    // Option 3: Send to a webhook (e.g., Zapier, Make)
    // await fetch(process.env.WEBHOOK_URL!, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(submission),
    // })
    // ─────────────────────────────────────────────────────────────────────────

    return NextResponse.json(
      { success: true, message: 'Your message has been received. We\'ll be in touch within 24 hours.' },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid form data. Please check your inputs and try again.', details: error.errors },
        { status: 400 }
      )
    }

    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    )
  }
}
