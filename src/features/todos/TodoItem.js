import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { ListGroup } from 'react-bootstrap';

import { TodoModal } from './TodoModal';
import { TodoActionsBtn } from './TodoActionsBtn';
import { TodoEditBtn } from './TodoEditBtn';
import { TodoDragBtn } from './TodoDragBtn';
import { TodoCheckbox } from './TodoCheckbox';
import { TodoContent } from './TodoContent';

export const TodoItem = React.forwardRef(({ index, todo }, ref) => {
  const [isHovering, setIsHovering] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const onEditBtnClick = () => {
    setShowEditModal(!showEditModal);
  };
  const mouseOver = () => {
    setIsHovering(true);
  };
  const mouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <Draggable draggableId={String(index)} index={index}>
      {(provided, snapshot) => (
        <ListGroup.Item
          ref={provided.innerRef}
          onMouseOver={mouseOver}
          onMouseLeave={mouseLeave}
          className="d-flex align-items-center"
          style={{ cursor: 'pointer !important' }}
          {...provided.draggableProps}
        >
          <div className="d-flex  w-100 ">
            <TodoDragBtn provided={provided} isHovering={isHovering} />
            <TodoCheckbox completed={todo.completed} />

            <div className="d-flex justify-content-between w-100">
              <TodoContent todo={todo} />
              <TodoEditBtn isHovering={isHovering} onEditBtnClick={onEditBtnClick} />
            </div>
            <TodoActionsBtn isHovering={isHovering} />
            <TodoModal show={showEditModal} toggle={onEditBtnClick} todo={todo} />
          </div>
        </ListGroup.Item>
      )}
    </Draggable>
  );
});
