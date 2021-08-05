import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Button, ListGroup } from 'react-bootstrap';
import { CgRadioCheck } from 'react-icons/cg';
import { CgRadioChecked } from 'react-icons/cg';
import { GrDrag } from 'react-icons/gr';

export const TodoItem = React.forwardRef(({ title, description, index }, ref) => {
  const [completed, setCompleted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const toggleComplete = () => {
    setCompleted(!completed);
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
          className="d-flex align-items-center justify-content-between"
          style={{ cursor: 'pointer !important' }}
          {...provided.draggableProps}
        >
          <div className="d-flex">
            <div
              {...provided.dragHandleProps}
              className="d-flex align-items-center"
              style={{ marginLeft: '-1rem', visibility: isHovering ? 'visible' : 'hidden' }}
            >
              <GrDrag />
            </div>

            {completed ? (
              <CgRadioChecked
                size="1.5rem"
                style={{ marginRight: '1rem' }}
                onClick={toggleComplete}
              />
            ) : (
              <CgRadioCheck
                size="1.5rem"
                style={{ marginRight: '1rem' }}
                onClick={toggleComplete}
              />
            )}
            <div>
              <div style={{ textDecoration: completed ? 'line-through' : 'none' }}>{title}</div>
              <div className="text-secondary">
                <small>{description}</small>
              </div>
            </div>
          </div>
        </ListGroup.Item>
      )}
    </Draggable>
  );
});
