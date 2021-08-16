import React, { useEffect, useState } from 'react';
import { Card, Container, Form, ListGroup, Button } from 'react-bootstrap';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

import { TodoItem } from './TodoItem';
import { AddTaskBtn } from './AddTaskBtn';

import { reorder, onDragEnd } from '../../utils/dragAndDrop';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentTodoList, fetchTodos, reorderTasks } from './todosSlice';

// const initialData = [
//   { id: 1, title: 'Take out the garbage', description: 'is anyone there?' },
//   { id: 2, title: 'Watch my favorite show' },
//   { id: 3, title: 'Cook dinner' },
//   { id: 4, title: 'Charge my phone' },
// ];

export const TodoList = () => {
  const todos = useSelector((state) => selectCurrentTodoList(state, 0));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    if (result.destination.index === result.source.index) {
      return;
    }

    const reordered = reorder(todos.tasks, result.source.index, result.destination.index);
    dispatch(reorderTasks(reordered));
  };

  const renderList = () => {
    return todos.tasks.map((todo, index) => (
      <TodoItem
        todo={todo}
        title={todo.title}
        description={todo.description}
        index={index}
        key={index}
      />
    ));
  };
  // TODO: add scaffolding loading placeholder
  if (!todos) {
    return <div>loading</div>;
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId={'todo'}>
        {(provided) => (
          <ListGroup variant="flush" ref={provided.innerRef} {...provided.droppableProps}>
            {renderList()}
            {provided.placeholder}
            <AddTaskBtn />
          </ListGroup>
        )}
      </Droppable>
    </DragDropContext>
  );
};
