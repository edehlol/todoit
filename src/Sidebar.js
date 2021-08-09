import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { CgToday } from 'react-icons/cg';
import { HiOutlineClock } from 'react-icons/hi';
import { AiOutlineContainer } from 'react-icons/ai';
import { FiFlag } from 'react-icons/fi';
import { AddListBtn } from './features/lists/AddListBtn';
import { ListsList } from './features/lists/ListsList';

export const Sidebar = () => {
  return (
    <Container className="border border-top-0 border-bottom-0 vh-100">
      <ListGroup variant="flush" className="mb-3">
        <ListGroup.Item>
          <div className="d-flex align-items-center">
            <CgToday style={{ marginRight: '.5rem' }} />
            Today
          </div>
        </ListGroup.Item>
        <ListGroup.Item>
          <div className="d-flex align-items-center">
            <HiOutlineClock style={{ marginRight: '.5rem' }} />
            Scheduled
          </div>
        </ListGroup.Item>
        <ListGroup.Item>
          <div className="d-flex align-items-center">
            <AiOutlineContainer style={{ marginRight: '.5rem' }} />
            All
          </div>
        </ListGroup.Item>
        <ListGroup.Item>
          <div className="d-flex align-items-center">
            <FiFlag style={{ marginRight: '.5rem' }} />
            Flagged
          </div>
        </ListGroup.Item>
      </ListGroup>

      <div className="d-flex align-items-center justify-content-between">
        <h6 className="mb-0">My Lists</h6>
        <AddListBtn />
      </div>
      <ListsList />
    </Container>
  );
};
