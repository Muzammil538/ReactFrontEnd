import React from 'react';
import "./Hero.css";
import globePoster from "./globe.jpg";
import globeWebm from "./globe-3d.webm";
import globeMp from "./3d-globe.mp4"

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
          <div className="earth-video">
            <div className="contain">
              <video autoPlay loop muted playsInline poster={globePoster}>
                <source src={globeWebm} type='video/webm'/>
                <source src={globeMp} type='video/mp4'/>
              </video>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero