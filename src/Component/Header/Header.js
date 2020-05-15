import React from 'react';
import logo from "../../logo.svg";

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
      </header>
    );
}
export default Header;