import React, { useState } from 'react';
import { Card, Form, Button, ListGroup } from 'react-bootstrap';
import { AiOutlinePlus } from 'react-icons/ai';

export const AddTaskBtn = () => {
  const [show, setShow] = useState(false);
  const toggleAddNewTask = () => {
    setShow(!show);
  };
  if (show) {
    return (
      <>
        <Card border="light">
          <Card.Body>
            <Form>
              <Form.Control className="mb-3" placeholder="Task name" />
              <Form.Control
                as="textarea"
                size="sm"
                className="mb-3"
                placeholder="Task description"
              />
              <div className="d-flex justify-content-start">
                <Button style={{ marginRight: '1rem' }}>Add Task</Button>
                <Button className="btn-secondary" onClick={toggleAddNewTask}>
                  Cancel
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </>
    );
  } else {
    return (
      <>
        <ListGroup.Item
          className="d-flex align-items-center"
          onClick={toggleAddNewTask}
          style={{ cursor: 'pointer' }}
        >
          <AiOutlinePlus size="1.5rem" style={{ marginRight: '1rem' }} />
          <div className="text-secondary">Add Task</div>
        </ListGroup.Item>
      </>
    );
  }
};
