import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
// import { FiMenu } from 'react-icons/fi';
// import { MdAccountCircle } from 'react-icons/md';
import { Sidebar } from './Sidebar';
import { TodoList } from './features/todos/TodoList';
import { Todos } from './features/todos/Todos';
import { Navbar } from './app/Navbar';

export const AppPage = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div>
      <Navbar handleShow={handleShow} />

      <Row>
        {show && (
          <Col sm md="4" lg="3">
            <Sidebar />
          </Col>
        )}
        <Col sm>
          <Todos />
        </Col>
      </Row>
    </div>
  );
};
