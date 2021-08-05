import React from 'react';

export const TodoTitle = ({ title, completed }) => {
  return <div style={{ textDecoration: completed ? 'line-through' : 'none' }}>{title}</div>;
};
