import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({ city: 'Seattle', state: 'WA', country: 'US', slack_id: 'U0616280E6P', extra: 'hi! this is my website! made using next, and a bit more!' });
}