import React, { useState } from 'react';
import { Container, Form, Navbar as BsNavbar } from 'react-bootstrap';
import { FiMenu } from 'react-icons/fi';
import { MdAccountCircle } from 'react-icons/md';
import { UserDropdown } from '../features/user/UserDropdown';

export const Navbar = ({ handleShow }) => {
  return (
    <BsNavbar>
      <Container>
        <div className="d-flex">
          <FiMenu size="2rem" style={{ marginRight: '2rem' }} onClick={handleShow} />
          <Form.Control style={{ maxWidth: '240px' }} type="text" placeholder="Search" />
        </div>

        {/* <MdAccountCircle size="2rem" /> */}
        <UserDropdown />
      </Container>
    </BsNavbar>
  );
};
