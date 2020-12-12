import React from 'react';
import {Navbar, NavDropdown, Nav, Image} from 'react-bootstrap';
import {Link} from 'react-router-dom'; 

import imgLogo from '../../assets/img/logo.png'

function Header() {
  return (
 <Navbar collapseOnSelect expand="lg" scrolling fixed="top"> 
  <Navbar.Brand href="#home"><Image src={imgLogo} width={150} height={100} fluid /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav ">
    <Nav className="mr-auto d-none">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav className="ml-auto">
      <Nav.Link href="/"  style={{paddingRight:25}}>Home</Nav.Link>
      <Nav.Link eventKey={2} href="/catalog" style={{paddingRight:25}}>Catálogo</Nav.Link>
      <Nav.Link eventKey={2} href="/lessonplan" style={{paddingRight:25}}>Planos de Aula</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  );
}

export default Header;