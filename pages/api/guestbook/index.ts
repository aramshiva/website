import { Redis } from '@upstash/redis'
import type { NextApiRequest, NextApiResponse } from 'next'

const redis = new Redis({
    url: 'https://usw2-teaching-possum-31271.upstash.io',
    token: 'AXonASQgY2M2YmZlMjQtZTJmYy00ZDI1LWJiODItMjY0MzViOTZkZGZjNTYxZDQ0NDA4MDBmNGY1MjkyMzk4ZmJmMzM1ZTBmZDY=',
})

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    let cursor = 0;
    let keys = [];

    do {
        const res = await redis.scan(cursor);
        cursor = Number(res[0]);
        keys.push(...res[1]);
    } while (cursor !== 0);

    res.status(200).json(keys);
}