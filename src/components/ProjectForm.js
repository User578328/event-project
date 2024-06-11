import React, { useState } from 'react';

const ProjectForm = ({ addProject }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addProject({ title, description, tasks: [] });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create a new project</h2>
      <input
        type="text"
        placeholder="Project Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Project Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Project</button>
    </form>
  );
};

export default ProjectForm;
