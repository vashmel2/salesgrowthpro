import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { supabase } from '@/lib/supabase'

const schema = z.object({
  email: z.string().email(),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email } = schema.parse(body)

    // Check for existing subscriber
    const { data: existing } = await supabase
      .from('newsletter_subscribers')
      .select('id')
      .eq('email', email)
      .maybeSingle()

    if (existing) {
      return NextResponse.json(
        { success: true, message: "You're already subscribed!" },
        { status: 200 }
      )
    }

    const { error } = await supabase.from('newsletter_subscribers').insert([
      {
        email,
        source: req.headers.get('referer') || 'website',
      },
    ])

    if (error) {
      console.error('Supabase insert error:', error)
      return NextResponse.json(
        { error: 'Failed to subscribe. Please try again.' },
        { status: 500 }
      )
    }

    // TODO: Add to Mailchimp or Resend audience once confirmed
    // if (process.env.MAILCHIMP_API_KEY) { ... }
    // if (process.env.RESEND_API_KEY) { ... }

    return NextResponse.json(
      { success: true, message: 'Successfully subscribed to the newsletter.' },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      )
    }

    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
