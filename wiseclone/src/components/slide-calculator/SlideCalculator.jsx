import React, { useState } from 'react';
import "./SlideCalculator.css";

const SlideCalculator = () => {
  const [inputValue , setInputValue] = useState("10000");

  return (
    <>
      <section className="slide-calculator">
        <div className="slide-wraper">
          <div className="contain-txt">
            <h2>Make your money move, fast</h2>
            <p>Send to 70+ countries, fast. Free from hidden fees and exchange rate markups</p>
          </div>
          <div className="contain-calculator">
            <div className="calc-wraper">
              <div className="calc-container">
                <div className="calc-content">
                  <div className="money-sent-field">
                    <label htmlFor="moneySentInput">You Have Sent</label>
                    <div className="input-field-area">
                      <input type="number" id='moneySentInput' name='moneySentInput' inputMode='decimal' autoComplete='off' value={inputValue} onChange={e => setInputValue(e.target.value)}/>
                      <button>INR </button>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SlideCalculator