import React from 'react';
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="text-centered">
          <div className="big-text">
            <h1>Save when you send worldwide</h1>
          </div>
          <div className="some-text">
            <p>Get your money moving internationally. Save up to 3.9x when you send with Wise.</p>
          </div>
          <div className="some-btns">
            <button className='btn poped'>Send money now</button>
            <button className='btn'>Open an account</button>
          </div>
          <div className="earth-video"></div>
        </div>
      </section>
    </>
  )
}

export default Hero