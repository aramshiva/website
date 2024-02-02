import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";

interface InputProps {
  id: string;
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => unknown;
  value: string;
  required?: boolean;
}

const Input = ({
  id,
  label,
  placeholder,
  value,
  onChange,
  required = false,
  ...rest
}: InputProps & Record<string, unknown>) => (
  <div className="mb-4">
    <label className="mb-2 block" htmlFor={`input__${id}`}>
      {label}
    </label>
    <input
      id={`input__${id}`}
      className="w-full rounded-2xl border border-gray-300 px-3 py-2"
      type="number"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      required={required}
      {...rest}
    />
  </div>
);

interface PizzaResponse {
  pricePerSquareInch?: number;
  pricePerSquareInchWithoutCrust?: number;
  percentOfPizzaIsCrust?: number;
  payForCrust?: number;
}

const PizzaCalculator = () => {
  const [pizzaSize, setPizzaSize] = useState("");
  const [pizzaCost, setPizzaCost] = useState("");
  const [calculateCrust, setCalculateCrust] = useState(false);
  const [crustSize, setCrustSize] = useState("");

  const [responseData, setResponseData] = useState<PizzaResponse>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
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
        ...(calculateCrust && { crustSize: parseFloat(crustSize) }),
      }),
    });

    const data = await response.json();
    setResponseData(data);
    setIsLoading(false);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="mx-auto max-w-md rounded-xl bg-white p-14 text-black shadow-lg">
        <h1 className="mb-4 text-3xl font-bold">Pizza Price Calculator</h1>
        <p>
          Ever wonder? Is this pizza cheaper than this pizza? This tool is a
          short tool, that will calculate the price of a pizza by square inches.
        </p>
        <form onSubmit={handleSubmit} className="py-5">
          <Input
            id="size"
            label="Pizze Size (diameter in inches):"
            placeholder="e.g. 12"
            onChange={(e) => setPizzaSize(e.target.value)}
            value={pizzaSize}
            required={true}
          />
          <Input
            id="cost"
            label="Pizza Cost ($):"
            placeholder="e.g. 12.99"
            onChange={(e) => setPizzaCost(e.target.value)}
            value={pizzaCost}
            required={true}
          />
          <div className="mb-4">
            <input
              type="checkbox"
              name="Calculate Crust"
              id="crust_checkbox"
              checked={calculateCrust}
              onChange={(e) => setCalculateCrust(e.target.checked)}
            />
            <label htmlFor="crust_checkbox" className="pl-1">
              I care about the crust
            </label>
          </div>

          {calculateCrust && (
            <Input
              id="crustSize"
              label="Size of crust (inches)"
              placeholder="e.g. 1"
              max={pizzaSize}
              onChange={(e) => setCrustSize(e.target.value)}
              value={crustSize}
              required={true}
            />
          )}

          <button
            className="w-full rounded-xl bg-blue-700 px-4 py-2 text-white"
            type="submit"
            disabled={isLoading}
          >
            Calculate
          </button>
        </form>

        {responseData.pricePerSquareInch != null && (
          <p className="mt-4">
            Price per square inch: ${responseData.pricePerSquareInch.toFixed(2)}
          </p>
        )}
        {responseData.pricePerSquareInchWithoutCrust != null && (
          <p className="mt-4">
            Price per square inch excluding crust: $
            {responseData.pricePerSquareInchWithoutCrust.toFixed(2)}
          </p>
        )}
        {responseData.percentOfPizzaIsCrust != null && (
          <p className="mt-4">
            Percent of pizza is crust:{" "}
            {(responseData.percentOfPizzaIsCrust * 100).toFixed(2)}%
          </p>
        )}
        {responseData.payForCrust != null && (
          <p className="mt-4">
            You pay just for crust: ${responseData.payForCrust.toFixed(2)}
          </p>
        )}
      </div>
    </div>
  );
};

export default PizzaCalculator;
