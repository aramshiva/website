import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({ city: 'Seattle', state: 'WA', country: 'US', slack_id: 'U0616280E6P', extra: 'hi! this is my website! made using next, and a bit more!' });
}