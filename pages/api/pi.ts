// pages/api/pi.ts

import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const precision = parseInt(req.query.precision as string);
  const square = parseInt(req.query.square as string);

  if (!precision || !square) {
    res.status(400).json({ error: 'Please provide both precision and square parameters.' });
    return;
  }

  const pi = estimatePi(precision, square);
  res.status(200).json({ pi });
}

function estimatePi(precision: number, square: number): number {
  let count = 0;
  const radius = square / 2;
  const r2 = radius * radius;

  for (let i = 0; i < precision; i++) {
    const x = Math.floor(Math.random() * square) - radius;
    const y = Math.floor(Math.random() * square) - radius;
    const d2 = x * x + y * y;

    if (d2 < r2) {
      count++;
    }
  }

  return 4 * count / precision;
}
