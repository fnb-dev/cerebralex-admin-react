import React from 'react';
import logo from "../../logo.svg";
import { Navbar, NavDropdown, Nav, Form, FormControl, Button } from 'react-bootstrap';

const Header = () => {
    return (
      <header className="header-section">
        <nav className="navbar navbar-expand-md navbar-dark bg-light-dark align-items-center">
          <button
            type="button"
            id="sidebarCollapse"
            className="btn text-white nav-icon mr-3"
          >
            <i className="fas fa-bars"></i>
          </button>
          <a className="navbar-brand" href="#">
            <img src={logo} className="brand-logo" alt="Logo" />
          </a>
          <div className="account-info text-white border-left pl-3 ml-3">
            <span className="toggler">
              Account Number One <i className="fas fa-chevron-down"></i>
            </span>
            <ul className="toggle-content list-group collapse">
                <li className="list-group-item list-group-item-action bg-dark text-white">Account Number Two</li>
                <li className="list-group-item list-group-item-action bg-dark text-white">Account Number Three</li>
            </ul>
          </div>
          <div className="notfications ml-auto">
            <a
              href="#submenu1"
              data-toggle="collapse"
              aria-expanded="false"
              className="bg-dark flex-column align-items-start"
            >
              <div className="d-flex w-100 justify-content-start align-items-center bell-icon">
                <i className="fas fa-bell"></i>
              </div>
            </a>
            <div id="submenu1" className="collapse sidebar-submenu">
              <div className="list-group-item list-group-item-action bg-dark text-white">
                <span>Notifications </span>
                <span>x</span>
              </div>
              <a
                href="#"
                className="list-group-item list-group-item-action bg-dark text-white"
              >
                <span className="menu-collapsed">Chahgag</span>
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action bg-dark text-white"
              >
                <span className="menu-collapsed">Reports</span>
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action bg-dark text-white"
              >
                <span className="menu-collapsed">Tables</span>
              </a>
            </div>
          </div>
          <div className="user-option text-white ml-4 d-none d-md-block">
            <span className="toggler">Nadav Kerzner <i className="fas fa-chevron-down"></i></span>
            <ul className="toggle-content list-group collapse">
                <li className="list-group-item list-group-item-action bg-dark text-white">Log Out</li>
                <li className="list-group-item list-group-item-action bg-dark text-white">Change Password</li>
            </ul>
          </div>
        </nav>
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
            <NavDropdown className="notfications" title="" id="collasible-notification-dropdown">
                <NavDropdown.Item href="#action/3.1">Log Out</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Change Password</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className="user-info" title="Nadav Kerzner" id="collasible-user-dropdown">
                <NavDropdown.Item href="#action/3.1">Log Out</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Change Password</NavDropdown.Item>
            </NavDropdown>
        </Nav>
      </Navbar>
      </header>
    );
}
export default Header;