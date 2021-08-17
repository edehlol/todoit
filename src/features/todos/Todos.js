import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { ProjectHeader } from './ProjectHeader';
import { TasksList } from './TasksList';
import { fetchTodos, selectCurrentList, selectTitle } from './todosSlice';

export const Todos = () => {
  const todos = useSelector(selectCurrentList);
  if (!todos) {
    return <div>loading</div>;
  }
  return (
    <Container>
      <ProjectHeader title={todos.title} amountOfTasks={todos.tasks.length} />
      <TasksList />
    </Container>
  );
};
