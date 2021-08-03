import React, { useState } from 'react';
import { Card, Container, Form, ListGroup, Button } from 'react-bootstrap';
import { CgRadioCheck } from 'react-icons/cg';
import { CgRadioChecked } from 'react-icons/cg';
import { AiOutlinePlus } from 'react-icons/ai';

const TodoItem = ({ title, description }) => {
  const [completed, setCompleted] = useState(false);
  const toggleComplete = () => {
    setCompleted(!completed);
  };
  return (
    <ListGroup.Item className="d-flex align-items-center" style={{ cursor: 'pointer' }}>
      {completed ? (
        <CgRadioChecked size="1.5rem" style={{ marginRight: '1rem' }} onClick={toggleComplete} />
      ) : (
        <CgRadioCheck size="1.5rem" style={{ marginRight: '1rem' }} onClick={toggleComplete} />
      )}

      <div>
        <div>{title}</div>
        <div className="text-secondary">
          <small>{description}</small>
        </div>
      </div>
    </ListGroup.Item>
  );
};

const AddTaskBtn = () => {
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
        <ListGroup.Item className="d-flex align-items-center" onClick={toggleAddNewTask}>
          <AiOutlinePlus size="1.5rem" style={{ marginRight: '1rem' }} />
          <div className="text-secondary">Add Task</div>
        </ListGroup.Item>
      </>
    );
  }
};

export const TodoList = () => {
  return (
    <Container>
      <div className="d-flex justify-content-between">
        <h1>Home Chores</h1>
        <h1>5</h1>
      </div>
      <div>
        <ListGroup variant="flush">
          <TodoItem title="Schedule this task" description="Do this by friday" />
          <TodoItem title="Mow the lawn"></TodoItem>
          <TodoItem title="Work on painting"></TodoItem>
          <AddTaskBtn />
        </ListGroup>
      </div>
    </Container>
  );
};
