import React, { useState } from 'react';
import { Card, Container, Form, ListGroup, Button } from 'react-bootstrap';
import { CgRadioCheck } from 'react-icons/cg';
import { CgRadioChecked } from 'react-icons/cg';
import { AiOutlinePlus } from 'react-icons/ai';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

const initialData = [
  { id: 1, title: 'Take out the garbage' },
  { id: 2, title: 'Watch my favorite show' },
  { id: 3, title: 'Cook dinner' },
  { id: 4, title: 'Charge my phone' },
];

const TodoItem = React.forwardRef(({ title, description, provided }, ref) => {
  const [completed, setCompleted] = useState(false);
  const toggleComplete = () => {
    setCompleted(!completed);
  };
  return (
    <ListGroup.Item
      className="d-flex align-items-center"
      style={{ cursor: 'pointer' }}
      ref={ref}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
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
});

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

export const TodoList = () => {
  const [todos, setTodos] = useState(initialData);

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    if (result.destination.index === result.source.index) {
      return;
    }

    const reordered = reorder(todos, result.source.index, result.destination.index);
    setTodos(reordered);
  };

  const renderList = () => {
    return todos.map((todo, index) => {
      return (
        <Draggable key={index} draggableId={String(index)} index={index}>
          {(provided) => (
            <TodoItem title={todo.title} ref={provided.innerRef} provided={provided} />
          )}
        </Draggable>
      );
    });
  };
  return (
    <Container>
      <div className="d-flex justify-content-between">
        <h1>Home Chores</h1>

        <h1>5</h1>
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId={'todo'}>
          {(provided) => (
            <ListGroup variant="flush" ref={provided.innerRef} {...provided.droppableProps}>
              {renderList()}
              {provided.placeholder}
              <AddTaskBtn />
            </ListGroup>
          )}
        </Droppable>
      </DragDropContext>
    </Container>
  );
};
