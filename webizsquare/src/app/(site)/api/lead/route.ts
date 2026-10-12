import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const {
      name,
      email,
      phone,
      company,
      serviceInterested,
      budgetRange,
      timeline,
      message,
      sourceType = 'quote_form',
      utmSource,
      utmMedium,
      utmCampaign,
      utmTerm,
      utmContent,
      gclid,
      fbclid,
      landingPage,
      referrer,
      honeypot, // Anti-spam honeypot
    } = body

    // 1. Anti-spam honeypot check
    if (honeypot) {
      // Silently return success to bot without saving
      return NextResponse.json({ success: true, message: 'Received' })
    }

    // 2. Validation
    if (!name || (!email && !phone)) {
      return NextResponse.json(
        { success: false, error: 'Name and either email or phone number are required.' },
        { status: 400 }
      )
    }

    // 3. Save to Payload CMS Leads collection
    const payload = await getPayload({ config: configPromise })

    const lead = await payload.create({
      collection: 'leads',
      data: {
        name,
        email: email || 'no-email@lead.local',
        phone: phone || '',
        company: company || '',
        serviceInterested: serviceInterested || 'Website Development',
        budgetRange: budgetRange || 'under_25k',
        timeline: timeline || '1_month',
        message: message || '',
        sourceType,
        status: 'new',
        priority: 'medium',
        utmSource: utmSource || '',
        utmMedium: utmMedium || '',
        utmCampaign: utmCampaign || '',
        utmTerm: utmTerm || '',
        utmContent: utmContent || '',
        gclid: gclid || '',
        fbclid: fbclid || '',
        landingPage: landingPage || '',
        referrer: referrer || '',
      },
    })

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your inquiry has been received. Our team will contact you within 24 hours.',
      leadId: lead.id,
    })
  } catch (error: any) {
    console.error('Error submitting lead:', error)
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to submit inquiry' },
      { status: 500 }
    )
  }
}
