import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { AddListModal } from './AddListModal';

export const AddListBtn = () => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <div style={{ cursor: 'pointer' }} onClick={toggleShow}>
        <AiOutlinePlus size="1.5rem" />
      </div>
      <AddListModal show={show} toggleShow={toggleShow} />
    </>
  );
};
