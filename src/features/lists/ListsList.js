import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { ListGroup } from 'react-bootstrap';
import { onDragEnd, reorder } from '../../utils/dragAndDrop';
import { ListItem } from './ListItem';
import { AddListModal } from './AddListModal';
import { useDispatch, useSelector } from 'react-redux';

import { selectLists, updateListOrder, patchUpdateListOrder } from '../todos/todosSlice';

const gg = [{ title: 'Home Chores' }, { title: 'Welcome' }, { title: 'Web Development' }];

export const ListsList = () => {
  const dispatch = useDispatch();
  const lists = useSelector(selectLists);
  // const [lists, setLists] = useState(gg);

  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  const reorderList = (result) => {
    const reordered = onDragEnd(result, lists);
    console.log(reordered);

    if (reordered) {
      dispatch(updateListOrder(reordered));
      dispatch(patchUpdateListOrder(reordered));
    }
  };
  const renderList = () => {
    return lists.map((list, index) => (
      <Draggable draggableId={String(index)} index={index} key={index}>
        {(provided) => (
          <>
            <ListItem provided={provided} list={list} toggleEdit={toggleShow} />
          </>
        )}
      </Draggable>
    ));
  };
  return (
    <>
      <DragDropContext onDragEnd={reorderList}>
        <Droppable droppableId="lists">
          {(provided) => (
            <ListGroup variant="flush" ref={provided.innerRef} {...provided.droppableProps}>
              {renderList()}
              {provided.placeholder}
            </ListGroup>
          )}
        </Droppable>
      </DragDropContext>
      <AddListModal show={show} toggleShow={toggleShow} />
    </>
  );
};
