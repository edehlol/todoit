import React, { useEffect, useState } from 'react';
import { Card, Container, Form, ListGroup, Button } from 'react-bootstrap';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

import { Task } from './Task';
import { AddTaskBtn } from './AddTaskBtn';

import { reorder, onDragEnd } from '../../utils/dragAndDrop';
import { useDispatch, useSelector } from 'react-redux';
import { reorderTasks, selectTasks } from './todosSlice';

export const TasksList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    if (result.destination.index === result.source.index) {
      return;
    }

    const reordered = reorder(tasks, result.source.index, result.destination.index);
    dispatch(reorderTasks(reordered));
  };

  const renderList = () => {
    return tasks.map((todo, index) => (
      <Task
        todo={todo}
        title={todo.title}
        description={todo.description}
        index={index}
        key={index}
      />
    ));
  };
  // TODO: add scaffolding loading placeholder
  if (!tasks) {
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
