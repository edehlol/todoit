import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { AddListForm } from './AddListForm';

export const AddListModal = ({ show, toggleShow }) => {
  return (
    <Modal show={show} onHide={toggleShow}>
      <Modal.Header closeButton>
        <Modal.Title>Add List</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddListForm />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={toggleShow}>
          Cancel
        </Button>
        <Button variant="primary" disabled>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
