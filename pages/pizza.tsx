// pages/pizza.tsx

import { useState } from "react";

const PizzaCalculator = () => {
  const [pizzaSize, setPizzaSize] = useState("");
  const [pizzaCost, setPizzaCost] = useState("");
  const [pricePerSquareInch, setPricePerSquareInch] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const response = await fetch("/api/pizza", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pizzaSize: parseFloat(pizzaSize),
        pizzaCost: parseFloat(pizzaCost),
      }),
    });

    const data = await response.json();
    setPricePerSquareInch(data.pricePerSquareInch);
    setIsLoading(false);
  };

  return (
    <div className="mx-auto max-w-md rounded-xl bg-white p-14 shadow-lg">
      <h1 className="mb-4 text-3xl font-bold">Pizza Price Calculator</h1>
      <p>
        Ever wonder? Is this pizza cheaper than this pizza? This tool is a short
        tool, that will calculate the price of a pizza by square inches.
      </p>
      <form onSubmit={handleSubmit} className="py-5">
        <div className="mb-4">
          <label className="mb-2 block">
            Pizza Size (inches):
            <input
              className="w-full rounded-2xl border border-gray-300 px-3 py-2"
              type="number"
              value={pizzaSize}
              placeholder="e.g. 12"
              onChange={(e) => setPizzaSize(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="mb-2 block">
            Pizza Cost ($):
            <input
              className="w-full rounded-2xl border border-gray-300 px-3 py-2"
              type="number"
              placeholder="e.g. 12.99"
              value={pizzaCost}
              onChange={(e) => setPizzaCost(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <button
            className="w-full rounded-xl bg-blue-700 px-4 py-2 text-white"
            type="submit"
            disabled={isLoading}
          >
            Calculate
          </button>
        </div>
      </form>
      {pricePerSquareInch !== null && (
        <p className="mt-4">Price per square inch: ${pricePerSquareInch}</p>
      )}
    </div>
  );
};

export default PizzaCalculator;
