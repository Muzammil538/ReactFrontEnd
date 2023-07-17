import React from 'react';
import nvdia_logo from "./nvdia-logo.svg";

const Navbar = () => {
  return (
    <>
      <section className="navbar cursored">
        <div className="brand-logo">
          <img src={nvdia_logo} alt="" />
        </div>
        <div className="nav_links">
          <div className="links-lvl-1">
            <span>Products</span>
            <span>Solutions</span>
            <span>Industries</span>
            <span>For You</span>
          </div>
          <div className="links-lvl-2">
            <span>Shop</span>
            <span>Drivers</span>
            <span>Support</span>
          </div>
        </div>
        <div className="nav-icons">
          <span><i className="bi bi-search"></i></span>
          <span><i className="bi bi-person-circle"></i></span>
        </div>
      </section>
    </>
  )
}

export default Navbar