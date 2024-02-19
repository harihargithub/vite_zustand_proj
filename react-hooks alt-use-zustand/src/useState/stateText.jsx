// stateText.jsx

import { useStore } from '../store';

const ChangeText = () => {
  const { inputText, setinputText } = useStore();

  return (
    <div>
      <input
        placeholder="Get your thoughts displayed.."
        type="text"
        value={inputText}
        onChange={(e) => setinputText(e.target.value)}
      />
      <p>{inputText || 'hks'}</p>
    </div>
  );
};

export default ChangeText;
