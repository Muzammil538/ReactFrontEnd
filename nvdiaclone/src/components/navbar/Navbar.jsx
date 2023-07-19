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
            <span className='link'>Products</span>
            <span className='link'>Solutions</span>
            <span className='link'>Industries</span>
            <span className='link'>For You</span>
          </div>
          <div className="links-lvl-2">
            <span className='link'>Shop</span>
            <span className='link'>Drivers</span>
            <span className='link'>Support</span>
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