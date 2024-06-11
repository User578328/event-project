import React from 'react';
import TaskCard from './TaskCard';

const TaskList = ({ title, tasks, updateTaskStatus }) => {
  return (
    <div className="task-list">
      <h4>{title}</h4>
      {tasks.map((task, index) => (
        <TaskCard
          key={index}
          task={task}
          updateTaskStatus={(status) => updateTaskStatus(index, status)}
        />
      ))}
    </div>
  );
};

export default TaskList;
