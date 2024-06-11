import React, { useState } from 'react';
import ProjectForm from './ProjectForm';
import ProjectBoard from './ProjectBoard';

const Dashboard = ({ user }) => {
  const [projects, setProjects] = useState([]);

  const addProject = (project) => {
    setProjects([...projects, project]);
  };

  return (
    <div>
      <h1>Welcome, {user.username}</h1>
      <ProjectForm addProject={addProject} />
      {projects.map((project, index) => (
        <ProjectBoard key={index} project={project} />
      ))}
    </div>
  );
};

export default Dashboard;
