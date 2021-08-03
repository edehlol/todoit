import React from 'react';
import { Container, Nav, Navbar, Button, Image } from 'react-bootstrap';
import { BiNotepad } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import bgImage from './assets/bg3.jpg';

export const HomePage = () => {
  return (
    <div>
      <Navbar className="mb-5">
        <Container>
          <Navbar.Brand>
            <div className="d-flex justify-content-center align-items-center">
              <BiNotepad size="2rem" style={{ marginBottom: '1px' }} />
              <h4 className="mb-0">Todoit</h4>
            </div>
          </Navbar.Brand>
          <Nav>
            <Nav.Link as={Link} to="/users/showlogin">
              Log in
            </Nav.Link>
            <Nav.Link as={Link} to="/users/showregister">
              Sign up
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container className="text-center">
        <div className="mb-3 ">
          <h1 className="mb-5">Organize it all with Todoit</h1>
          <Button as={Link} to="/users/showregister">
            Get Started
          </Button>
        </div>

        <Image fluid src={bgImage} />
      </Container>
    </div>
  );
};
