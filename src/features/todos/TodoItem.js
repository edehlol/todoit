import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Button, ListGroup, Modal, OverlayTrigger, Popover, Tooltip } from 'react-bootstrap';
import { CgRadioCheck } from 'react-icons/cg';
import { CgRadioChecked } from 'react-icons/cg';
import { GrDrag, GrEdit } from 'react-icons/gr';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
import { TodoModal } from './TodoModal';

export const TodoItem = React.forwardRef(({ title, description, index, todo }, ref) => {
  const [completed, setCompleted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const toggleComplete = () => {
    setCompleted(!completed);
  };
  const onEditBtnClick = () => {
    setShowEditModal(!showEditModal);
  };
  const onOptionsBtnClick = () => {
    console.log('too');
  };
  const mouseOver = () => {
    setIsHovering(true);
  };
  const mouseLeave = () => {
    setIsHovering(false);
  };

  const renderCheckbox = () => {
    if (completed) {
      return (
        <CgRadioChecked size="1.5rem" style={{ marginRight: '1rem' }} onClick={toggleComplete} />
      );
    } else {
      return (
        <CgRadioCheck size="1.5rem" style={{ marginRight: '1rem' }} onClick={toggleComplete} />
      );
    }
  };
  const renderOptions = (props) => {
    return (
      <Popover {...props}>
        <Popover.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>test</ListGroup.Item>
            <ListGroup.Item>gg</ListGroup.Item>
            <ListGroup.Item>test</ListGroup.Item>
            <ListGroup.Item>delete</ListGroup.Item>
          </ListGroup>
        </Popover.Body>
      </Popover>
    );
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
            <div
              {...provided.dragHandleProps}
              className="d-flex align-items-center text-secondary"
              style={{ marginLeft: '-1rem', visibility: isHovering ? 'visible' : 'hidden' }}
            >
              <GrDrag color="green" style={{ fill: 'green' }} />
            </div>
            <div>{renderCheckbox()}</div>

            <div className="d-flex justify-content-between w-100">
              <div>
                <div style={{ textDecoration: completed ? 'line-through' : 'none' }}>{title}</div>
                <small className="text-secondary">{description}</small>
              </div>

              <div
                className="align-items-center d-flex"
                style={{
                  visibility: isHovering ? 'visible' : 'hidden',
                  cursor: 'pointer',
                }}
                onClick={onEditBtnClick}
              >
                <AiOutlineEdit size="1.25rem" />
              </div>
            </div>
            <div
              className="d-flex align-items-center"
              style={{
                marginLeft: '.5rem',
                marginRight: '-1rem',
                visibility: isHovering ? 'visible' : 'hidden',
              }}
              onClick={onOptionsBtnClick}
            >
              <OverlayTrigger placement="auto" overlay={renderOptions} trigger="click" rootClose>
                <div>
                  <BsThreeDots />
                </div>
              </OverlayTrigger>
            </div>

            <TodoModal show={showEditModal} toggle={onEditBtnClick} todo={todo} />
          </div>
        </ListGroup.Item>
      )}
    </Draggable>
  );
});
