import React from 'react';
import { Card, Dropdown } from 'react-bootstrap';
import { MdAccountCircle } from 'react-icons/md';
import { FiSettings } from 'react-icons/fi';
import { ImExit } from 'react-icons/im';
import { FaPalette } from 'react-icons/fa';

export const UserDropdown = () => {
  return (
    <Dropdown drop="start">
      <Dropdown.Toggle as="div">
        <MdAccountCircle size="2rem" />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {/* <Dropdown.Item> */}
        <Card>
          <Card.Body>
            <Card.Text>Logo Name email@adress.com</Card.Text>
            <Card.Text className="d-flex align-items-center">
              <FiSettings />
              Settings
            </Card.Text>
          </Card.Body>
        </Card>
        {/* </Dropdown.Item> */}
        <Dropdown.Item>
          <FaPalette />
          Theme
        </Dropdown.Item>
        <Dropdown.Item>
          <ImExit /> Log out
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
