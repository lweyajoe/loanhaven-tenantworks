import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export const LoanCalculator = () => {
  const [amount, setAmount] = useState("");
  const [term, setTerm] = useState("");
  const [rate, setRate] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculateLoan = () => {
    const principal = parseFloat(amount);
    const interestRate = parseFloat(rate) / 100 / 12;
    const numberOfPayments = parseFloat(term) * 12;

    const monthlyPayment =
      (principal * interestRate * Math.pow(1 + interestRate, numberOfPayments)) /
      (Math.pow(1 + interestRate, numberOfPayments) - 1);

    setResult(monthlyPayment);
  };

  return (
    <Card className="p-6 animate-fadeIn">
      <h3 className="text-lg font-semibold mb-4">Loan Calculator</h3>
      <div className="space-y-4">
        <div>
          <Label htmlFor="amount">Loan Amount</Label>
          <Input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter loan amount"
          />
        </div>
        <div>
          <Label htmlFor="term">Loan Term (Years)</Label>
          <Input
            id="term"
            type="number"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="Enter loan term"
          />
        </div>
        <div>
          <Label htmlFor="rate">Interest Rate (%)</Label>
          <Input
            id="rate"
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            placeholder="Enter interest rate"
          />
        </div>
        <Button onClick={calculateLoan} className="w-full">
          Calculate
        </Button>
        {result && (
          <div className="mt-4 p-4 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground">Monthly Payment:</p>
            <p className="text-2xl font-bold">${result.toFixed(2)}</p>
          </div>
        )}
      </div>
    </Card>
  );
};