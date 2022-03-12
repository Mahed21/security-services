import React from 'react';
import { Container, Form, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../1-rem.png'


const Header = () => {
    return (
<div>

<Navbar bg="" expand="lg" className="nav-customize">
  <Container fluid>
  <div className="container-fluid p-4">
    <Nav.Link className="navbar-brand" href="#" className="text">
      <img src={logo} alt="" width="200" height="50" className="d-inline-block align-text-top me-2"/>
    </Nav.Link>
  </div>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
    
      </Nav>
      <Form className="d-flex">
        <Nav.Link href="/" className="text">Home</Nav.Link>
        <Nav.Link href="/" className="text ms-2">About</Nav.Link>
        <button  className="me-5 p-2 ps-4 pe-4 btn ms-2">ContactUs</button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>

</div>
    );
};

export default Header;