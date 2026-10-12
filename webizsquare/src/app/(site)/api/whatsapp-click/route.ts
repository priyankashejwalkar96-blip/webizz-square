import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}))
    const { page = '/', utmSource, utmMedium, utmCampaign } = body

    const payload = await getPayload({ config: configPromise })

    await payload.create({
      collection: 'leads',
      data: {
        name: `WhatsApp Visitor (${page})`,
        email: 'whatsapp-lead@webizsquare.com',
        phone: 'WhatsApp Intent',
        sourceType: 'whatsapp_click',
        status: 'new',
        priority: 'high',
        message: `Clicked WhatsApp button on page: ${page}`,
        landingPage: page,
        utmSource: utmSource || '',
        utmMedium: utmMedium || '',
        utmCampaign: utmCampaign || '',
      },
    })

    return NextResponse.json({ success: true })
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 })
  }
}
