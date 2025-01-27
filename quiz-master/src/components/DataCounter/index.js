import { useState } from "react";

const DataCounter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const defineStep = (e) => {
    setStep(Number(e.target.value));
  };

  const dec = () => {
    setCount((prevCount) => prevCount - step);
  };

  const defineCount = (e) => {
    setCount(Number(e.target.value));
  };

  const inc = () => {
    setCount((prevCount) => prevCount + step);
  };

  const reset = () => {
    setCount(0);
    setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default DataCounter;
