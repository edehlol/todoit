import React, { useState } from 'react';
import { Card, Container, Form, ListGroup, Button } from 'react-bootstrap';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

import { TodoItem } from './TodoItem';
import { AddTaskBtn } from './AddTaskBtn';

const initialData = [
  { id: 1, title: 'Take out the garbage', description: 'is anyone there?' },
  { id: 2, title: 'Watch my favorite show' },
  { id: 3, title: 'Cook dinner' },
  { id: 4, title: 'Charge my phone' },
];

export const TodoList = () => {
  const [todos, setTodos] = useState(initialData);

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    if (result.destination.index === result.source.index) {
      return;
    }

    const reordered = reorder(todos, result.source.index, result.destination.index);
    setTodos(reordered);
  };

  const renderList = () => {
    return todos.map((todo, index) => (
      <TodoItem
        todo={todo}
        title={todo.title}
        description={todo.description}
        index={index}
        key={index}
      />
    ));
  };

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
