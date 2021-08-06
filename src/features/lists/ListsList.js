import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { ListGroup } from 'react-bootstrap';
import { reorder } from '../../utils/dragAndDrop';
import { ListItem } from './ListItem';

const gg = [{ title: 'Home Chores' }, { title: 'Welcome' }, { title: 'Web Development' }];

export const ListsList = () => {
  const [lists, setLists] = useState(gg);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    if (result.source.index === result.destination.index) {
      return;
    }
    const reordered = reorder(lists, result.source.index, result.destination.index);
    setLists(reordered);
  };
  const renderList = () => {
    return lists.map((list, index) => (
      <Draggable draggableId={String(index)} index={index} key={index}>
        {(provided) => (
          <>
            <ListItem provided={provided} list={list} />
          </>
        )}
      </Draggable>
    ));
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="lists">
        {(provided) => (
          <ListGroup variant="flush" ref={provided.innerRef} {...provided.droppableProps}>
            {renderList()}
            {provided.placeholder}
          </ListGroup>
        )}
      </Droppable>
    </DragDropContext>
  );
};
