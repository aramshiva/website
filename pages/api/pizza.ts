// pages/api/pizza.ts

interface RequestBody {
   pizzaSize?: number;
   pizzaCost?: number;
   crustSize?: number;
}

export default function handler(req: any, res: any) {
   if (req.method !== "POST") {
      res.status(405).end(`Method ${req.method} Not Allowed`);
      return;
   }

   const { pizzaSize, pizzaCost, crustSize } = req.body as RequestBody;

   if (!pizzaSize || !pizzaCost) {
      res.status(400).end("Missing required parameters");
      return;
   }

   const radius = pizzaSize / 2;
   const area = Math.PI * radius * radius;
   const pricePerSquareInch = pizzaCost / area;

   let pricePerSquareInchWithoutCrust;
   let percentOfPizzaIsCrust;
   let payForCrust;
   if (crustSize) {
      const radiusWithoutCrust = (pizzaSize - crustSize) / 2;
      const areaWithoutCrust =
         Math.PI * radiusWithoutCrust * radiusWithoutCrust;
      pricePerSquareInchWithoutCrust = pizzaCost / areaWithoutCrust;
      percentOfPizzaIsCrust = 1 - areaWithoutCrust / area;
      payForCrust = pizzaCost * percentOfPizzaIsCrust;
   }

   res.status(200).json({
      pricePerSquareInch,
      pricePerSquareInchWithoutCrust,
      percentOfPizzaIsCrust,
      payForCrust,
   });
}
