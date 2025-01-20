import { useState } from "react";

const apiURL = "https://api.frankfurter.app/latest?";

const App = () => {
  const [amount, setAmount] = useState(0);
  const [fromCurrAmount, setFromCurrAmount] = useState(0);
  const [fromCurr, setFromCurr] = useState("USD");
  const [toCurr, setToCurr] = useState("INR");
  const [finalVal, setFinalVal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  async function handleBtnConvert() {
    // if two currencies are same no need to call api / convert currency
    if (fromCurr === toCurr) {
      setFinalVal(amount);
      return;
    }

    setIsLoading(true);
    const query = apiURL + `amount=${amount}&from=${fromCurr}&to=${toCurr}`;
    const res = await fetch(query);
    const data = await res.json();
    setFinalVal(data.rates[toCurr]);
    setFromCurrAmount(amount);
    setIsLoading(false);
  }

  return (
    <div>
      <h2>Convert Currency Value</h2>
      <div>
        <input
          type="text"
          placeholder="type in amount"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          disabled={isLoading}
        />
      </div>
      <div>
        <select onChange={(e) => setFromCurr(e.target.value)} value={fromCurr}>
          <option value="USD">USD</option>
          <option value="INR">INR</option>
          <option value="CAD">CAD</option>
          <option value="EUR">EUR</option>
        </select>
        <select onChange={(e) => setToCurr(e.target.value)} value={toCurr}>
          <option value="USD">USD</option>
          <option value="INR">INR</option>
          <option value="CAD">CAD</option>
          <option value="EUR">EUR</option>
        </select>
        {amount ? (
          <button onClick={async () => await handleBtnConvert()}>
            Convert
          </button>
        ) : (
          ""
        )}
      </div>
      <p>
        {fromCurrAmount}&nbsp;{fromCurr} = {finalVal}&nbsp;{toCurr}
      </p>
    </div>
  );
};

export default App;
