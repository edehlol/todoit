import React from 'react';
import {
  Container,
  Form,
  Button,
  Card,
  InputGroup,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap';
import { BiNotepad } from 'react-icons/bi';
import { FaFacebook, FaGoogle, FaApple, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const LoginPage = () => {
  const renderTooltip = (props) => <Tooltip {...props}>Hide password</Tooltip>;
  return (
    <Container
      className="d-flex align-items-center justify-content-center my-4"
      style={{ maxWidth: '480px' }}
    >
      <Card className="w-100">
        <Card.Body className="p-5">
          <div className="d-flex align-items-center mb-3">
            <BiNotepad size="2rem" style={{ marginBottom: '1px' }} />
            <h2 className="mb-0">Todoit</h2>
          </div>
          <h1 className="mb-5">Log in</h1>
          <Form>
            <Form.Group>
              <Button className="d-flex align-items-center justify-content-center w-100 mb-3 btn-light btn-outline-dark">
                <FaGoogle style={{ marginRight: '.25rem' }} />
                Continue with Google
              </Button>
              <Button className=" d-flex align-items-center justify-content-center w-100 mb-3 btn-light btn-outline-dark">
                <FaFacebook style={{ marginRight: '.25rem' }} />
                Continue with Facebook
              </Button>
              <Button className="d-flex align-items-center justify-content-center w-100 mb-3 btn-light btn-outline-dark">
                <FaApple style={{ marginRight: '.25rem' }} /> Continue with Apple
              </Button>
            </Form.Group>
            <hr />
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control className="mb-3" />
              <Form.Label>Password</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control type="password" />
                <OverlayTrigger placement="bottom" overlay={renderTooltip}>
                  <InputGroup.Text style={{ cursor: 'pointer' }}>
                    <FaEyeSlash />
                  </InputGroup.Text>
                </OverlayTrigger>
              </InputGroup>
            </Form.Group>
            <Button type="submit" className="w-100 mb-3">
              Log in
            </Button>
            <Form.Check checked label="Keep me logged in" className="text-secondary" />
            <a href="#" className="text-secondary">
              Forgot your password?
            </a>
            <hr />
            <div className="text-center">
              Don't have an account? <Link to="/users/showregister">Sign Up</Link>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};
