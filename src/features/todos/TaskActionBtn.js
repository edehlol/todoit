import React from 'react';
import { Popover, ListGroup, OverlayTrigger } from 'react-bootstrap';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsTrash, BsThreeDots } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { deleteTask } from './todosSlice';

const EditTaskBtn = () => {
  return (
    <ListGroup.Item className="d-flex align-items-center">
      <AiOutlineEdit style={{ marginRight: '.5rem' }} />
      Edit Task
    </ListGroup.Item>
  );
};

const DeleteTaskBtn = ({ taskId }) => {
  const dispatch = useDispatch();

  const onDeleteTask = () => {
    dispatch(deleteTask(taskId));
  };
  return (
    <ListGroup.Item className="d-flex align-items-center" onClick={onDeleteTask}>
      <BsTrash style={{ marginRight: '.5rem' }} />
      Delete Task
    </ListGroup.Item>
  );
};

export const TaskActionBtn = ({ isHovering, taskId }) => {
  const renderActions = (props) => {
    return (
      <Popover {...props}>
        <Popover.Body>
          <ListGroup variant="flush" style={{ cursor: 'pointer' }}>
            <EditTaskBtn />
            <DeleteTaskBtn taskId={taskId} />
          </ListGroup>
        </Popover.Body>
      </Popover>
    );
  };
  return (
    <div
      className="d-flex align-items-center"
      style={{
        marginLeft: '.5rem',
        marginRight: '-1rem',
        visibility: isHovering ? 'visible' : 'hidden',
      }}
    >
      <OverlayTrigger placement="auto" overlay={renderActions} trigger="click" rootClose>
        <div>
          <BsThreeDots />
        </div>
      </OverlayTrigger>
    </div>
  );
};
