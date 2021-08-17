import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { ListGroup } from 'react-bootstrap';

import { TaskModal } from './TaskModal';
import { TaskActionBtn } from './TaskActionBtn';
import { TaskEditBtn } from './TaskEditBtn';
import { TaskCheckbox } from './TaskCheckbox';
import { TaskContent } from './TaskContent';
import { DragBtn } from '../common/DragBtn';

export const Task = React.forwardRef(({ index, todo }, ref) => {
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
            <DragBtn provided={provided} isHovering={isHovering} />
            <TaskCheckbox completed={todo.completed} />

            <div className="d-flex justify-content-between w-100">
              <TaskContent todo={todo} />
              <TaskEditBtn isHovering={isHovering} onEditBtnClick={onEditBtnClick} />
            </div>
            <TaskActionBtn isHovering={isHovering} taskId={todo.id} />
            <TaskModal show={showEditModal} toggle={onEditBtnClick} todo={todo} />
          </div>
        </ListGroup.Item>
      )}
    </Draggable>
  );
});
