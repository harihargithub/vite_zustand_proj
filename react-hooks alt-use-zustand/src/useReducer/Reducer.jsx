// Reducer.jsx

import { useStore } from '../store';

const Reducer = () => {
  // Use the useStore hook to access the store
  const { count, showText, increment, toggleShowText } = useStore();

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          increment();
          toggleShowText();
        }}
      >
        Click Here
      </button>
      {showText && <p>This is a text</p>}
    </div>
  );
};

export default Reducer;
