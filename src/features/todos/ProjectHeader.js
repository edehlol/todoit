import React from 'react';

export const ProjectHeader = ({ title, amountOfTasks }) => {
  return (
    <div className="d-flex justify-content-between">
      <h1>{title}</h1>
      <h1>{amountOfTasks}</h1>
    </div>
  );
};
