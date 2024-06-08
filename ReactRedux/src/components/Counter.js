import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../Redux/Slice/CounterSlice";

function Counter(){
    const count = useSelector( (state) =>
        state.counter.value
    )
    const dispatch = useDispatch();
    return (
      <div>
        <div>
          <button onClick={() => dispatch(increment())}>Increment</button>
        </div>
        <br></br>

        <div>{count}</div>
        <br></br>

        <div>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
      </div>
    );
}

export default Counter;