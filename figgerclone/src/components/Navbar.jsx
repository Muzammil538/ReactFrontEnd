import React from "react";
import "../Styles/navbar.css";
import { Link } from 'react-router-dom';
import Support from "./Support";

function Navbar() {
  window.addEventListener("load", () => {
    const numOfLinks = document.querySelector(".links").children;
    const numOfLinkBars = document.querySelector(".bottomnav").children;
    const profileIcon = document.querySelector(".bi-person-circle");
    const myAcc = document.querySelector(".myacc");
    // console.log(numOfLinks.length);
    for (let a = 0; a < 4; a++) {
      numOfLinks[a].addEventListener("mouseover", () => {
        numOfLinkBars[a].classList.add("active");
      });
      numOfLinks[a].addEventListener("mouseout", () => {
        numOfLinkBars[a].classList.remove("active");
      });
    }
    profileIcon.addEventListener("mouseover", () => {
      myAcc.classList.add("active");
    });
    profileIcon.addEventListener("mouseout", () => {
      myAcc.classList.remove("active");
    });
  });

  return (
    <>
      <header>
        <div className="topnav">
          <div className="logo">
            <h1 className="logotxt">Figger</h1>
          </div>
          <div className="links">
            <span>Phone</span>
            <span>F-Buds</span>
            <span>Shop</span>
            <span>Plans</span>
            <span>Why Figgers</span>
            <span><Link to='/support' >Support</Link></span>
          </div>
          <div className="morelinks">
            <span>
              <i className="bi bi-cart">
                <span className="cartcc">0</span>
              </i>
            </span>
            <span>
              <i className="bi bi-person-circle"></i>
            </span>
            <div className="myacc">
              <span>My Account</span>
              <br />
              <span>Manage My Account</span>
              <span>Track My Account</span>
              <span>Express Payment</span>
            </div>
          </div>
        </div>
        <div className="bottomnav">
          <div>
            <span>DragonX (New)</span>
            <span>X3</span>
          </div>
          <div>
            <span>DragonX (New)</span>
            <span>X3</span>
          </div>
          <div>
            <span>DragonX (New)</span>
            <span>X3</span>
          </div>
          <div>
            <span>DragonX (New)</span>
            <span>X3</span>
          </div>
          <div>
            <span>DragonX (New)</span>
            <span>X3</span>
          </div>
          <div>
            <span>DragonX (New)</span>
            <span>X3</span>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
