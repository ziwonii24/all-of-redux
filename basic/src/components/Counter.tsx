import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../store/store";
import { increment, decrement, incrementBy } from "../reducers/counterSlice";

import "../styles/Counter.scss";

const Counter: React.FC = () => {
  const ref = useRef<HTMLInputElement>(null);
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const handleClickMinus = () => dispatch(decrement());

  const handleClickPlus = () => dispatch(increment());

  const enter = (val: number) => dispatch(incrementBy(val));

  const handleKeyup = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      enter(parseInt(e.currentTarget.value));
    }
  };

  const handleClickEnter = () => {
    if (ref && ref.current) {
      enter(parseInt(ref.current.value));
    }
  };

  return (
    <div className="counter">
      <div className="counter-up">
        <button onClick={handleClickMinus}>-</button>
        <h3>{count}</h3>
        <button onClick={handleClickPlus}>+</button>
      </div>
      <div className="counter-down">
        <input type="number" ref={ref} onKeyUp={handleKeyup} />
        <button onClick={handleClickEnter}>Enter</button>
      </div>
    </div>
  );
};

export default Counter;
