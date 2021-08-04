import React, { useState } from 'react';
import { Col, Container, Form, Navbar, Offcanvas, Row } from 'react-bootstrap';
import { FiMenu } from 'react-icons/fi';
import { MdAccountCircle } from 'react-icons/md';
import { Sidebar } from './Sidebar';
import { TodoList } from './TodoList';

export const AppPage = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div>
      <Navbar>
        <Container>
          <div className="d-flex">
            <FiMenu size="2rem" style={{ marginRight: '2rem' }} onClick={handleShow} />
            <Form.Control style={{ maxWidth: '240px' }} type="text" placeholder="Search" />
          </div>

          <MdAccountCircle size="2rem" />
        </Container>
      </Navbar>

      <Row>
        {show && (
          <Col sm md="4" lg="3">
            <Sidebar />
          </Col>
        )}
        <Col sm>
          <TodoList />
        </Col>
      </Row>
    </div>
  );
};
