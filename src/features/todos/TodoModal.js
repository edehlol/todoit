import React from 'react';
import { Form, Modal, Button } from 'react-bootstrap';

export const TodoModal = ({ show, toggle, todo }) => {
  return (
    <Modal show={show} onHide={toggle}>
      <Modal.Header closeButton>
        <Modal.Title>Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Control value={todo.title} className="mb-3" />
            <Form.Control value={todo.description} />
          </Form.Group>
          <Button style={{ marginRight: '1rem' }}>Save</Button>
          <Button variant="secondary" onClick={toggle}>
            Cancel
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
