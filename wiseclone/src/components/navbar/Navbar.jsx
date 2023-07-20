import React from "react";
import logo from "./wise-logo.svg";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <header className="navbar">
        <div className="navbar-lvl-0">
          <div className="brand-logo">
            <img src={logo} alt="Wise" />
          </div>
          <span className="nav-link poped">Personal</span>
          <span className="nav-link">Business</span>
        </div>
        <div className="navbar-lvl-1">
          <span className="nav-link">Features</span>
          <span className="nav-link">Pricing</span>
          <span className="nav-link">Help</span>
          <span className="nav-link">EN</span>
          <span className="nav-link">Log in</span>
          <span className="nav-link poped">Register</span>
        </div>
      </header>
    </>
  );
};

export default Navbar;
