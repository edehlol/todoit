import React from 'react';
import { Popover, ListGroup, OverlayTrigger } from 'react-bootstrap';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsTrash, BsThreeDots } from 'react-icons/bs';

export const TodoActionsBtn = ({ isHovering }, props) => {
  const renderActions = (props) => {
    return (
      <Popover {...props}>
        <Popover.Body>
          <ListGroup variant="flush" style={{ cursor: 'pointer' }}>
            <ListGroup.Item className="d-flex align-items-center">
              <AiOutlineEdit style={{ marginRight: '.5rem' }} />
              Edit Task
            </ListGroup.Item>
            {/* <ListGroup.Item>gg</ListGroup.Item>
                    <ListGroup.Item>test</ListGroup.Item> */}
            <ListGroup.Item className="d-flex align-items-center">
              <BsTrash style={{ marginRight: '.5rem' }} />
              Delete Task
            </ListGroup.Item>
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
