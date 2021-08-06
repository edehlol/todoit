import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { DragBtn } from '../common/DragBtn';
import { BsThreeDots } from 'react-icons/bs';

export const ListItem = ({ provided, list, toggleEdit }) => {
  const [isHovering, setIsHovering] = useState(false);
  const mouseOver = () => setIsHovering(true);
  const mouseLeave = () => setIsHovering(false);
  return (
    <>
      <ListGroup.Item
        onMouseOver={mouseOver}
        onMouseLeave={mouseLeave}
        {...provided.draggableProps}
        ref={provided.innerRef}
      >
        <div className="d-flex align-items-center justify-content-between w-100">
          <div className="d-flex">
            <DragBtn provided={provided} isHovering={isHovering} />
            <div style={{ marginLeft: '1rem' }}>{list.title}</div>
          </div>

          <div onClick={toggleEdit} style={{ cursor: 'pointer' }}>
            {isHovering ? <BsThreeDots /> : ''}
          </div>
        </div>
      </ListGroup.Item>
    </>
  );
};
