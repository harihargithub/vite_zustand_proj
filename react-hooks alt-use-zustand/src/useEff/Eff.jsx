// Eff.jsx
import { useEffect } from 'react';
import { useStore } from '../store';

export const Effect = () => {
  const { data, inc, axiosget, counter } = useStore((state) => ({
    data: state.data,
    inc: state.inc,
    axiosget: state.axiosget,
    counter: state.counter,
  }));

  useEffect(() => {
    axiosget();
    console.log('useEffect called');
  }, [axiosget, counter]); // Removed 'data' from the dependency array

  return (
    <>
      <h1>useEffect @ Zustant</h1>
      <p>{counter}</p>
      <p>{data[0]?.email}</p>
      {data.slice(0, 4).map((item, index) => (
        <p key={index}>{JSON.stringify(item)}</p>
      ))}
      <button onClick={inc}>inc</button>
    </>
  );
};
