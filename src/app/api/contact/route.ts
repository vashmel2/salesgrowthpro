import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { supabase } from '@/lib/supabase'

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

    const { error } = await supabase.from('contact_submissions').insert([
      {
        name: data.name,
        email: data.email,
        company: data.company || null,
        service: data.service,
        message: data.message,
        source: req.headers.get('referer') || 'direct',
        ip: req.headers.get('x-forwarded-for') || null,
      },
    ])

    if (error) {
      console.error('Supabase insert error:', error)
      return NextResponse.json(
        { error: 'Failed to save your message. Please try again.' },
        { status: 500 }
      )
    }

    // TODO: Send notification email via Resend once configured
    // import { Resend } from 'resend'
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({ ... })

    return NextResponse.json(
      { success: true, message: "Your message has been received. We'll be in touch within 24 hours." },
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
