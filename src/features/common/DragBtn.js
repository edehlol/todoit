import React from 'react';
import { GrDrag } from 'react-icons/gr';

export const DragBtn = ({ provided, isHovering }) => {
  return (
    <div
      {...provided.dragHandleProps}
      className="d-flex align-items-center text-secondary"
      style={{ marginLeft: '-1rem', visibility: isHovering ? 'visible' : 'hidden' }}
    >
      <GrDrag color="green" style={{ fill: 'green' }} />
    </div>
  );
};
