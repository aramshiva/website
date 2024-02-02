// pages/api/calculate.js

export default function handler(req, res) {
  if (req.method === "POST") {
    const { pizzaSize, pizzaCost } = req.body;
    const radius = pizzaSize / 2;
    const area = Math.PI * radius * radius;
    const costPerSquareInch = pizzaCost / area;
    const price = Math.round(costPerSquareInch * 100) / 100;

    res.status(200).json({ pricePerSquareInch: price });
  } else {
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
