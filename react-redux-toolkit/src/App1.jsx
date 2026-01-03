import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increament,
  decreament,
  reset,
  increamentByAmount,
} from "./redux1/CounterSlice";

function App1(props) {
  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="d-flex justify-content-center">
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increament())}>Increament</button>
      <button onClick={() => dispatch(decreament())}>Decreament</button>
      <input
        type="number"
        value={amount}
        placeholder="Enter amount"
        min='0'
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={() => dispatch(increamentByAmount(amount))}>Inc By Amount</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

export default App1;
