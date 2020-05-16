import React from 'react';
import logo from "../../logo.svg";
import { Navbar, NavDropdown, Nav, Form, FormControl, Button } from 'react-bootstrap';

const Header = () => {
    return (
      <header className="header-section">
        <Navbar className="bg-light-dark align-items-center" collapseOnSelect expand="md" variant="dark">
            <Navbar.Toggle className="d-block text-white nav-icon mr-3" aria-controls="basic-navbar-nav" />
            <Navbar.Brand href="#home">
                <img src={logo} className="brand-logo" alt="Logo" />
            </Navbar.Brand>
            <Nav className="text-white account-info border-left pl-3 ml-3">
                <NavDropdown title="Account Number One" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Account Number Two</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Account Number Three</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Account Number Four</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Nav className="text-white ml-auto">
                <NavDropdown className="notfications mr-3" title="" id="collasible-notification-dropdown">
                    <NavDropdown.Item href="#action/3.1">Log Out</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Change Password</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown className="user-info mr-2" title="Nadav Kerzner" id="collasible-user-dropdown">
                    <NavDropdown.Item href="#action/3.1">Log Out</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Change Password</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar>
      </header>
    );
}
export default Header;