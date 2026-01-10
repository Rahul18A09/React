import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment,incrementByAmount , reset} from "./redux/features/counterSlice";

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const [num, setNum] = useState();

  return (
    <>
      <div>
        <h1>Count: {count}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(Number(num)))}>
          Increment By Amount
        </button>
        <input type="number" value={num} onChange={(e) => setNum(e.target.value)}/>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </>
  );
};

export default App;
