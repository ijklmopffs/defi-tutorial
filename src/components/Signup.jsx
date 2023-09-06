import React from "react";
import "./Signup.css";
import crypto from "../assets/trade.png";

export default function Signup() {
  return (
    <div className="signup">
      <div className="container">
        {/* left */}
        <div className="left">
          <img src={crypto} alt="" />
        </div>
        {/* right */}
        <div className="right">
          <h2>Earn passive income with crypto.</h2>
          <p>
            Earn up to 12% annual revenue on 30+ digital assets. Simply hold
          </p>
          <div className="input-container">
            <input type="email" placeholder="Enter your email" />
            <button className="btn">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}
