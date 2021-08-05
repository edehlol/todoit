import React, { useState } from 'react';
import { Button, Dropdown, Form, Modal } from 'react-bootstrap';
import { AiOutlinePlus } from 'react-icons/ai';

const ColorCircle = ({ hex }) => {
  return (
    <div style={{ width: '1rem', height: '1rem', backgroundColor: hex, borderRadius: '50%' }}></div>
  );
};

const LIST_COLORS = [
  { name: 'Blue', hex: '#007bff' },
  //   { name: 'Indigo', hex: '#6610f2' },
  { name: 'Purple', hex: '#6f42c1' },
  { name: 'Red', hex: '#dc3545' },
  { name: 'Orange', hex: '#fd7e14' },
  { name: 'Yellow', hex: '#ffc107' },
  { name: 'Green', hex: '#28a745' },
  { name: 'Teal', hex: '#20c997' },
  { name: 'Cyan', hex: '#17a2b8' },
];

export const AddListBtn = () => {
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow(!show);
  };
  const renderListColors = () => {
    return LIST_COLORS.map((color) => (
      <Dropdown.Item className="d-flex align-items-center justify-content-start" key={color.hex}>
        <div style={{ marginRight: '.5rem' }}>
          <ColorCircle hex={color.hex} />
        </div>
        {color.name}
      </Dropdown.Item>
    ));
  };
  return (
    <>
      <div style={{ cursor: 'pointer' }} onClick={toggleShow}>
        <AiOutlinePlus size="1.5rem" />
      </div>
      <Modal show={show} onHide={toggleShow}>
        <Modal.Header closeButton>
          <Modal.Title>Add List</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Label>Name</Form.Label>
            <Form.Control className="mb-3" />
            <Form.Label>Color</Form.Label>
            {/* <Form.Select>
              <option>
                <div style={{ width: '0.1rem', height: '0.1rem', backgroundColor: 'red' }}></div>
                Grey
              </option>
            </Form.Select> */}
            <Dropdown>
              <Dropdown.Toggle>Colors</Dropdown.Toggle>
              <Dropdown.Menu>
                {renderListColors()}
                {/* <Dropdown.Item className="d-flex align-items-center justify-content-start">
                  <div style={{ marginRight: '.5rem' }}>
                    <ColorCircle hex={LIST_COLORS[0].hex} />
                  </div>
                  {LIST_COLORS[0].name}
                </Dropdown.Item>
                <Dropdown.Item>Red</Dropdown.Item>
                <Dropdown.Item>Blue</Dropdown.Item> */}
              </Dropdown.Menu>
            </Dropdown>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleShow}>
            Cancel
          </Button>
          <Button variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
