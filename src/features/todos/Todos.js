import React from 'react';
import { Container } from 'react-bootstrap';
import { TodoList } from './TodoList';

export const Todos = () => {
  return (
    <Container>
      <div className="d-flex justify-content-between">
        <h1>Home Chores</h1>
        <h1>5</h1>
      </div>
      <TodoList />
    </Container>
  );
};
