import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../toolkitStore';
import { decrement, increment, incrementBy } from '../../toolkitStore/counterSlice';

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.num);
  const dispatch = useDispatch();
  const [input, setInput] = useState<number>(0);

  const handleClickPlus = () => {
    dispatch(increment());
  };

  const handleClickMinus = () => {
    dispatch(decrement());
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetValue = e.target.value;
    setInput(parseInt(targetValue));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      dispatch(incrementBy(input));
    }
  };

  const handleClickEnter = () => {
    dispatch(incrementBy(input));
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClickPlus}>
        <b>+</b>
      </button>
      <button onClick={handleClickMinus}>
        <b>-</b>
      </button>
      <input
        type="number"
        placeholder="please type the number"
        value={input}
        onChange={handleChangeInput}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleClickEnter}>
        <b>ENTER</b>
      </button>
    </div>
  );
};

export default Counter;
