import React, { useState } from 'react';
import { Form, Dropdown } from 'react-bootstrap';

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

const ColorCircle = ({ hex }) => {
  return (
    <div style={{ width: '1rem', height: '1rem', backgroundColor: hex, borderRadius: '50%' }}></div>
  );
};

export const AddListForm = () => {
  const [selectedColor, setSelectedColor] = useState(LIST_COLORS[0]);
  const renderListColors = () => {
    return LIST_COLORS.map((color) => renderColorObj(color));
  };
  const renderColorObj = (colorObj) => {
    return (
      <Dropdown.Item
        className="d-flex align-items-center justify-content-start p-0"
        key={colorObj.hex}
        onClick={() => setSelectedColor(colorObj)}
      >
        <div style={{ marginRight: '.5rem' }}>
          <ColorCircle hex={colorObj.hex} />
        </div>
        <div className="d-flex">{colorObj.name}</div>
      </Dropdown.Item>
    );
  };
  return (
    <Form>
      <Form.Label>Name</Form.Label>
      <Form.Control className="mb-3" placeholder="List Name" />
      <Form.Label>Color</Form.Label>

      <Dropdown>
        <Dropdown.Toggle as={'div'} className="form-control mb-3 ">
          <div className="d-inline-flex">{renderColorObj(selectedColor)}</div>
        </Dropdown.Toggle>
        <Dropdown.Menu className="w-100" style={{ padding: '.7rem' }}>
          {renderListColors()}
        </Dropdown.Menu>
      </Dropdown>
    </Form>
  );
};
