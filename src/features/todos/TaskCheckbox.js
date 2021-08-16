import React, { useState } from 'react';
import { CgRadioCheck } from 'react-icons/cg';
import { CgRadioChecked } from 'react-icons/cg';

// TODO: completed paramter passed
export const TaskCheckbox = () => {
  const [completed, setCompleted] = useState(false);
  const toggleComplete = () => {
    setCompleted(!completed);
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
  return <div>{renderCheckbox()}</div>;
};
