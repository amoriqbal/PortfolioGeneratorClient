import React, { Component } from 'react';
import {Navbar, NavDropdown, Nav
} from 'react-bootstrap';

class Navmenu extends Component {

  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">Soumik Sen</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features">HOME</Nav.Link>
              <Nav.Link href="#pricing">RESUME</Nav.Link>
              <NavDropdown title="PROJECTS" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Project 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Project 2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Project 3</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Project 4</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More Information</Nav.Link>
              <Nav.Link eventKey={2} href="#">
                Personal Details
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }

}

export default Navmenu;
