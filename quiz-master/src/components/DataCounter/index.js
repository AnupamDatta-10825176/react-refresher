import { useReducer } from "react";

import { counterReducer } from "../../reducers";

const DataCounter = () => {
  const initialState = {
    count: 0,
    step: 1,
  };
  //   const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(counterReducer, initialState);

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + state.count);

  const defineStep = (e) => {
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  };

  const dec = () => {
    dispatch({ type: "dec", payload: state.step });
  };

  const defineCount = (e) => {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  };

  const inc = () => {
    dispatch({ type: "inc", payload: state.step });
  };

  const reset = () => {
    dispatch({ type: "reset" });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={state.step}
          onChange={defineStep}
        />
        <span>{state.step}</span>
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
