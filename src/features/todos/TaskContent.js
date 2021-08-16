import React from 'react';
import { TodoTitle } from './TodoTitle';

export const TaskContent = ({ todo }) => {
  return (
    <div>
      <TodoTitle title={todo.title} completed={todo.completed} />
      <small className="text-secondary">{todo.description}</small>
    </div>
  );
};
