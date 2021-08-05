import React from 'react';
import { AiOutlineEdit } from 'react-icons/ai';

export const TodoEditBtn = ({ isHovering, onEditBtnClick }) => {
  return (
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
  );
};
