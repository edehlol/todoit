import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { TasksList } from './TasksList';
import { fetchTodos, selectCurrentList, selectTitle } from './todosSlice';

export const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectCurrentList);
  if (!todos) {
    return <div>loading</div>;
  }
  return (
    <Container>
      <div className="d-flex justify-content-between">
        <h1>{todos.title}</h1>
        {/* <h1>{todos.tasks.length}</h1> */}
      </div>
      <TasksList />
    </Container>
  );
};
