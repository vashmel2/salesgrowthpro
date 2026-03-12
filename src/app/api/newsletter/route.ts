import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  email: z.string().email(),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email } = schema.parse(body)

    const subscription = {
      email,
      subscribedAt: new Date().toISOString(),
      source: req.headers.get('referer') || 'website',
    }

    console.log('📬 New Newsletter Subscription:', subscription)

    // ─────────────────────────────────────────────────────────────────────────
    // PRODUCTION: Uncomment and configure your email service:
    //
    // Option 1: Mailchimp
    // const response = await fetch(
    //   `https://us1.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members`,
    //   {
    //     method: 'POST',
    //     headers: {
    //       Authorization: `Basic ${Buffer.from(`anystring:${process.env.MAILCHIMP_API_KEY}`).toString('base64')}`,
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ email_address: email, status: 'subscribed' }),
    //   }
    // )
    //
    // Option 2: ConvertKit
    // await fetch(`https://api.convertkit.com/v3/forms/${process.env.CONVERTKIT_FORM_ID}/subscribe`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ api_key: process.env.CONVERTKIT_API_KEY, email }),
    // })
    //
    // Option 3: Save to Supabase
    // const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_KEY!)
    // await supabase.from('newsletter_subscribers').insert([subscription])
    // ─────────────────────────────────────────────────────────────────────────

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
