'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';

const TopMenu = () => (
  <Navbar bg="white" expand="lg" className="py-0 w-100">
    <Container fluid className="d-flex justify-content-between align-items-center">
      <Nav className="me-auto">
        <Nav.Link className="fw-light fs-5 me-3" href="#">SHOP</Nav.Link>
        <Nav.Link className="fw-light fs-5 me-4" href="#">INFO</Nav.Link>
        <Nav.Link className="fw-light fs-5" href="#"><Search /></Nav.Link>
      </Nav>
      <Navbar.Brand href="#" className="mx-auto">
        <img
          src="https://cdn.sanity.io/images/t9jjg1v5/production/01784231ba10b9a65fd12b444553531a23658279-1366x320.svg"
          alt="Baggu Logo"
          style={{ height: '25px', width: 'auto' }}
        />
      </Navbar.Brand>
      <Nav className="ms-auto">
        <Nav.Link className="fw-light fs-5" href="#">CART (0)</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

export default TopMenu;
