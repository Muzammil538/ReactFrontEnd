import React from "react";
import "../Styles/support.css";

function Support() {
  window.addEventListener("load", () => {
    const supportBtn = document.querySelector("#supportbtn i");
    const supportBox = document.querySelector("#supportbox");
    const closeBtn = document.querySelector("#closebtn");

    supportBtn.addEventListener("click", () => {
      supportBox.classList.remove("hidden");
    });
    closeBtn.addEventListener("click", ()=>{
      supportBox.classList.add("hidden");
    });
  });

  return (
    <>
      <span id="supportbtn">
        <i className="bi bi-phone"></i>
      </span>
      <section id="supportbox" className="hidden">
        <div>
          <h3>
            We're here for you
            <span id="closebtn">
              <i className="bi bi-x"></i>
            </span>
          </h3>
          <h2>Figgers Customer Support</h2>
          <div className="imggif"></div>
          <p>
            Our professional dedicated customer support team is available to
            assist you at any time. You can connect with us by phone, chat, or
            email. We are here for you day or night.
          </p>
        </div>
        <div className="contactbox">
          <div>
            <span>
              <i className="bi bi-phone"></i>
            </span>
            <span>
              Call Us <br /> 1234567890
            </span>
          </div>
          <div>
            <span>
              <i className="bi bi-chat-left-dots"></i>
            </span>
            <span>
              Text Us <br /> 1234567890
            </span>
          </div>
          <div>
            <span>
              <i className="bi bi-chat-text"></i>
            </span>
            <span>Chat With Us</span>
          </div>
          <div>
            <span>
              <i className="bi bi-envelope-at"></i>
            </span>
            <span>Email Us</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Support;
