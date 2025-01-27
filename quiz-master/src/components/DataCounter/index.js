import { useState, useReducer } from "react";

import { counterReducer } from "../../reducers";

const DataCounter = () => {
  const initialState = {
    count: 0,
  };
  //   const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const [step, setStep] = useState(1);

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + state.count);

  const defineStep = (e) => {
    setStep(Number(e.target.value));
  };

  const dec = () => {
    dispatch({ type: "dec", payload: step });
  };

  const defineCount = (e) => {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  };

  const inc = () => {
    dispatch({ type: "inc", payload: step });
  };

  const reset = () => {
    dispatch({ type: "reset" });
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
        <input value={state.count} onChange={defineCount} />
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
