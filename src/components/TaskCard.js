import React from 'react';

const TaskCard = ({ task, updateTaskStatus }) => {
  const handleStatusChange = (e) => {
    updateTaskStatus(e.target.value);
  };

  return (
    <div className="task-card">
      <h5>{task.title}</h5>
      <p>{task.description}</p>
      <select value={task.status} onChange={handleStatusChange}>
        <option value="Tasks">Tasks</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
    </div>
  );
};

export default TaskCard;
