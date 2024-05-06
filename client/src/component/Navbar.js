import React, { useState } from "react";

export default function Navbar() {
  const [buttonText, setButtonText] = useState("Join Now");



  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="logo font-bold flex items-center">
      
            Your Fitness Gym
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto  mb-2 mb-lg-0 justify-content-end">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link">
                Shop
              </a>
            </li>
          
            
            <li className="nav-item">
              <button className="btn btn-danger" onClick={() => {}}>
                {buttonText}
              </button>
            </li>
          </ul>
        </div>
      </div>
      
    </nav>
  );
}

