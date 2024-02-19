import React from 'react';
import PropTypes from 'prop-types';
import { useStore } from '../store';
import './task.css';
import classNames from 'classnames';

export default function Task({ title }) {
  const task = useStore((store) =>
    store.tasks.find((task) => task.title === title),
  );
  const { deleteTask, updateTaskStatus } = useStore();

  const handleDelete = () => {
    if (task) {
      deleteTask(task.title);
    }
  };

  const handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', title);
    let dragImage = e.target.cloneNode(true);
    dragImage.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    dragImage.style.color = 'black';
    dragImage.style.border = '1px solid black';
    dragImage.style.boxSizing = 'border-box';
    dragImage.style.padding = '10px';
    dragImage.style.position = 'absolute';
    dragImage.style.top = '-1000px';
    document.body.appendChild(dragImage);
    e.dataTransfer.setDragImage(dragImage, 0, 0);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedTitle = e.dataTransfer.getData('text/plain');
    const status = task && task.state ? task.state : '';
    if (typeof updateTaskStatus === 'function') {
      updateTaskStatus(droppedTitle, status);
    }
  };

  return (
    <div
      className="Task"
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div>{task ? task.title : 'Loading...'}</div>
      <div className="BottomWrapper">
        <div>
          <i className="fas fa-trash" onClick={handleDelete}></i>
        </div>
        <div
          className={classNames('status', task ? task.state : '')}
          onClick={() => updateTaskStatus(title)}
        >
          {task ? task.state : ''}
        </div>
      </div>
    </div>
  );
}

Task.propTypes = {
  title: PropTypes.string.isRequired,
};
