import React, { useState } from "react";
import carImage from '../assets/carlogo.png';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



export default function Navbar() {
  const [buttonText, setButtonText] = useState("BRANDS");



  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid bg-dark">
        <div className="logo font-bold flex items-center me-4" style={{ marginLeft: '50px' }}>
        <img className="img-fluid" src={ carImage } alt="" style={{ maxWidth: '100px' }} />

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
          <span className="navbar-toggler-icon bg-light"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav d-flex flex-row">
            <li className="nav-item ">
              <a href="/" className="nav-link text-light me-4">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a href="/shop" className="nav-link text-light me-4">
                SHOP
              </a>
            </li>
          
            
            <li className="nav-item me-4">
              <button className="btn btn-danger" onClick={() => {}}>
                {buttonText}
              </button>
            </li>
          </ul>
        </div>
        <div className="d-flex justify-content-end mb-4 ">
            <a href="/search" className="text-reset me-4">
              <i className="fas fa-search me-3 text-white"></i>
            </a>
            <a href="/cart" className="text-reset me-4">
              <i className="fas fa-shopping-cart me-3 text-white"></i>
            </a>
            <a href="/user" className="text-reset me-4">
              <i className="fas fa-user me-3 text-white"></i>
            </a>
          </div>

      </div>
      
    </nav>
  );
}

