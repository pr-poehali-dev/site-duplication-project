import { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [newNumber, setNewNumber] = useState(true);

  const handleNumber = (num: string) => {
    if (newNumber) {
      setDisplay(num);
      setNewNumber(false);
    } else {
      setDisplay(display === "0" ? num : display + num);
    }
  };

  const handleOperation = (op: string) => {
    const current = parseFloat(display);
    if (previousValue === null) {
      setPreviousValue(current);
    } else if (operation) {
      const result = calculate(previousValue, current, operation);
      setDisplay(String(result));
      setPreviousValue(result);
    }
    setOperation(op);
    setNewNumber(true);
  };

  const calculate = (a: number, b: number, op: string): number => {
    switch (op) {
      case "+": return a + b;
      case "-": return a - b;
      case "×": return a * b;
      case "÷": return a / b;
      default: return b;
    }
  };

  const handleEquals = () => {
    if (operation && previousValue !== null) {
      const current = parseFloat(display);
      const result = calculate(previousValue, current, operation);
      setDisplay(String(result));
      setPreviousValue(null);
      setOperation(null);
      setNewNumber(true);
    }
  };

  const handleClear = () => {
    setDisplay("0");
    setPreviousValue(null);
    setOperation(null);
    setNewNumber(true);
  };

  const handleDecimal = () => {
    if (!display.includes(".")) {
      setDisplay(display + ".");
      setNewNumber(false);
    }
  };

  const Button = ({ value, onClick, className = "" }: { value: string; onClick: () => void; className?: string }) => (
    <button
      onClick={onClick}
      className={`h-14 text-lg font-medium rounded hover:bg-opacity-80 transition-colors ${className}`}
    >
      {value}
    </button>
  );

  return (
    <div className="flex flex-col h-full bg-[#f3f3f3] p-2">
      <div className="bg-white mb-2 p-4 rounded text-right">
        <div className="text-sm text-gray-500 h-6">
          {operation && previousValue !== null ? `${previousValue} ${operation}` : ""}
        </div>
        <div className="text-4xl font-light text-gray-900 truncate">{display}</div>
      </div>

      <div className="grid grid-cols-4 gap-1 flex-1">
        <Button value="%" onClick={() => handleOperation("%")} className="bg-gray-200 text-gray-800" />
        <Button value="CE" onClick={handleClear} className="bg-gray-200 text-gray-800" />
        <Button value="C" onClick={handleClear} className="bg-gray-200 text-gray-800" />
        <Button value="⌫" onClick={() => setDisplay(display.slice(0, -1) || "0")} className="bg-gray-200 text-gray-800" />

        <Button value="1/x" onClick={() => setDisplay(String(1 / parseFloat(display)))} className="bg-gray-200 text-gray-800" />
        <Button value="x²" onClick={() => setDisplay(String(Math.pow(parseFloat(display), 2)))} className="bg-gray-200 text-gray-800" />
        <Button value="√x" onClick={() => setDisplay(String(Math.sqrt(parseFloat(display))))} className="bg-gray-200 text-gray-800" />
        <Button value="÷" onClick={() => handleOperation("÷")} className="bg-gray-200 text-gray-800" />

        <Button value="7" onClick={() => handleNumber("7")} className="bg-white text-gray-900" />
        <Button value="8" onClick={() => handleNumber("8")} className="bg-white text-gray-900" />
        <Button value="9" onClick={() => handleNumber("9")} className="bg-white text-gray-900" />
        <Button value="×" onClick={() => handleOperation("×")} className="bg-gray-200 text-gray-800" />

        <Button value="4" onClick={() => handleNumber("4")} className="bg-white text-gray-900" />
        <Button value="5" onClick={() => handleNumber("5")} className="bg-white text-gray-900" />
        <Button value="6" onClick={() => handleNumber("6")} className="bg-white text-gray-900" />
        <Button value="-" onClick={() => handleOperation("-")} className="bg-gray-200 text-gray-800" />

        <Button value="1" onClick={() => handleNumber("1")} className="bg-white text-gray-900" />
        <Button value="2" onClick={() => handleNumber("2")} className="bg-white text-gray-900" />
        <Button value="3" onClick={() => handleNumber("3")} className="bg-white text-gray-900" />
        <Button value="+" onClick={() => handleOperation("+")} className="bg-gray-200 text-gray-800" />

        <Button value="+/-" onClick={() => setDisplay(String(-parseFloat(display)))} className="bg-white text-gray-900" />
        <Button value="0" onClick={() => handleNumber("0")} className="bg-white text-gray-900" />
        <Button value="," onClick={handleDecimal} className="bg-white text-gray-900" />
        <Button value="=" onClick={handleEquals} className="bg-[#0078D4] text-white" />
      </div>
    </div>
  );
};

export default Calculator;
