import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { DragBtn } from '../common/DragBtn';

export const ListItem = ({ provided, list }) => {
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
        <div className="d-flex align-items-center">
          <DragBtn provided={provided} isHovering={isHovering} />
          <div>{list.title}</div>
        </div>
      </ListGroup.Item>
    </>
  );
};
