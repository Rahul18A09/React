import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  increament,
  decreament,
  reset,
  increamentByAmount,
} from "./feactures/counter/counterSlice";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncreament() {
    dispatch(increament());
  }

  function handleDecreament() {
    dispatch(decreament());
  }

  function handleReset() {
    dispatch(reset());
  }

function handleIncByAmount() {
  dispatch(increamentByAmount(amount));
}

  return (
    <div className="container">
      <button onClick={handleIncreament}>+</button>
      <p>Count: {count}</p>
      <button onClick={handleDecreament}>-</button>
      <button onClick={handleReset}>Reset</button>
      <br />
      <br />
      <input
        type="number"
        value={amount}
        min='0'
        placeholder="Enter amount"
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <button onClick={handleIncByAmount}>Inc By Amount</button>
    </div>
  );
}

export default App;
