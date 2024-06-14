import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'antd';

const Counter = () => {
  const count = useSelector((state) => state.example.count);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  return (
    <div>
      <h1>{count}</h1>
      <Button type="primary" onClick={increment}>Increment</Button>
    </div>
  );
};

export default Counter;