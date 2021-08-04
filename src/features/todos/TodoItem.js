import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Button, ListGroup } from 'react-bootstrap';
import { CgRadioCheck } from 'react-icons/cg';
import { CgRadioChecked } from 'react-icons/cg';
import { BsThreeDots } from 'react-icons/bs';

export const TodoItem = React.forwardRef(({ title, description, index }, ref) => {
  const [completed, setCompleted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const toggleComplete = () => {
    setCompleted(!completed);
  };
  const mouseOver = (event) => {
    setIsHovering(true);
  };
  const mouseLeave = (event) => {
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
          {...provided.dragHandleProps}
        >
          <div className="d-flex">
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

{
  /* {isHovering ? (
        <Button className="m-0" variant="light" size="sm">
          <BsThreeDots />
        </Button>
      ) : (
        ''
      )} */
}
