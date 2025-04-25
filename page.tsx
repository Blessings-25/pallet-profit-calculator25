import { useState } from "react";

export default function PalletProfitCalculator() {
  const [retail, setRetail] = useState(5123);
  const [unitCount, setUnitCount] = useState(177);
  const [shipping, setShipping] = useState(634.67);
  const [variance, setVariance] = useState(5);
  const [margin, setMargin] = useState(70);
  const [result, setResult] = useState(null);

  const calculate = () => {
    const adjustedRetail = retail * (1 - variance / 100);
    const targetRevenue = adjustedRetail * (margin / 100);
    const maxTotalBid = targetRevenue - shipping;
    const maxBid = Math.max(maxTotalBid, 0);
    const avgCost = unitCount > 0 ? (maxBid + shipping) / unitCount : 0;

    setResult({ adjustedRetail, targetRevenue, maxTotalBid, maxBid, avgCost });
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Pallet Profit Calculator</h1>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <label>Retail Value ($)
          <input type="number" value={retail} onChange={e => setRetail(+e.target.value)} className="w-full p-2 border rounded" />
        </label>
        <label>Unit Count
          <input type="number" value={unitCount} onChange={e => setUnitCount(+e.target.value)} className="w-full p-2 border rounded" />
        </label>
        <label>Shipping Cost ($)
          <input type="number" value={shipping} onChange={e => setShipping(+e.target.value)} className="w-full p-2 border rounded" />
        </label>
        <label>Variance (%)
          <input type="number" value={variance} onChange={e => setVariance(+e.target.value)} className="w-full p-2 border rounded" />
        </label>
        <label>Target Margin (%)
          <input type="number" value={margin} onChange={e => setMargin(+e.target.value)} className="w-full p-2 border rounded" />
        </label>
      </div>

      <button onClick={calculate} className="bg-blue-600 text-white px-4 py-2 rounded">Calculate</button>

      {result && (
        <div className="mt-6 border-t pt-4">
          <p><strong>Adjusted Retail (after variance):</strong> ${result.adjustedRetail.toFixed(2)}</p>
          <p><strong>Target Revenue (at margin):</strong> ${result.targetRevenue.toFixed(2)}</p>
          <p><strong>Max Total Bid (Product + Shipping):</strong> ${result.maxTotalBid.toFixed(2)}</p>
          <p><strong>Max Bid (Before Shipping):</strong> ${result.maxBid.toFixed(2)}</p>
          <p><strong>Average Max Cost Per Unit:</strong> ${result.avgCost.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}
