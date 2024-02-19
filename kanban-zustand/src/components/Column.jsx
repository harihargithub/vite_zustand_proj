import PropTypes from 'prop-types';
import './Column.css';
import Task from './Task';
import { useStore } from '../store';
import { useState } from 'react';

function Column({ state }) {
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false); // A modal is open if open is true

  const tasks = useStore((store) =>
    store.tasks.filter((task) => task.state === state),
  );

  const addTask = useStore((store) => store.addTask);
  const updateTaskStatus = useStore((store) => store.updateTaskStatus);

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedTitle = e.dataTransfer.getData('text/plain');
    if (typeof updateTaskStatus === 'function') {
      updateTaskStatus(droppedTitle, state);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="Column" onDrop={handleDrop} onDragOver={handleDragOver}>
      <div className="titleWrapper">
        <p>{state}</p>
        <button onClick={() => setOpen(true)} className="addButton">
          Add
        </button>
      </div>
      {tasks.map((task) => (
        <Task key={task.title} title={task.title} />
      ))}
      {open && (
        <div className="Modal">
          <div className="modalContent">
            <input onChange={(e) => setText(e.target.value)} value={text} />
            <button
              onClick={() => {
                addTask(text, state);
                setText('');
                setOpen(false);
              }}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

Column.propTypes = {
  state: PropTypes.string.isRequired,
};

export default Column;
