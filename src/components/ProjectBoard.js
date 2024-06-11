import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const ProjectBoard = ({ project }) => {
  const [tasks, setTasks] = useState(project.tasks);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTaskStatus = (index, status) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, status } : task
    );
    setTasks(newTasks);
  };

  return (
    <div className="project-board">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <TaskForm addTask={addTask} />
      <div className="task-columns">
        <TaskList
          title="Tasks"
          tasks={tasks.filter((task) => task.status === 'Tasks')}
          updateTaskStatus={updateTaskStatus}
        />
        <TaskList
          title="In Progress"
          tasks={tasks.filter((task) => task.status === 'In Progress')}
          updateTaskStatus={updateTaskStatus}
        />
        <TaskList
          title="Done"
          tasks={tasks.filter((task) => task.status === 'Done')}
          updateTaskStatus={updateTaskStatus}
        />
      </div>
    </div>
  );
};

export default ProjectBoard;
