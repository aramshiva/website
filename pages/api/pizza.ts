// pages/api/calculate.js

export default function handler(req, res) {
  if (req.method === "POST") {
    const { precision, pizzaSize, pizzaCost } = req.body;
    const calculatedPi = calculatePi(precision, precision);
    const radius = pizzaSize / 2;
    const area = calculatedPi * radius * radius;
    const costPerSquareInch = pizzaCost / area;
    const price = Math.round(costPerSquareInch * 100) / 100;

    res.status(200).json({ pricePerSquareInch: price });
  } else {
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

function calculatePi(precision, square) {
  let count = 0;
  const radius = square / 2;
  for (let i = 0; i < precision; i++) {
    const x = Math.floor(Math.random() * (square + 1)) - radius;
    const y = Math.floor(Math.random() * (square + 1)) - radius;
    const distance = Math.sqrt(x * x + y * y);
    if (distance < radius) count++;
  }
  return (4 * count) / precision;
}
