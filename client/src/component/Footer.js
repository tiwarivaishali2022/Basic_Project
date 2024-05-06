import React from "react";


export default function Footer() {
  return (
    <div>
      <footer className="bg-light text-center text-lg-start border-top border-bottom border-light">
        <div className="container p-4 bg-secondary-subtle">
          <div className="me-5 d-none d-lg-block fw-bold text-danger">
            <span>Get connected with us on social networks:</span>
          </div>
          <div className="row">
            <div className="col-md-3 mb-md-0 mb-3">
              <h4 className="fw-bold">ABOUT US</h4>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae necessitatibus ullam dolorem aut ex provident, mollitia tempora tempore sapiente deleniti.</p>
              <div className="d-flex justify-content-end mb-4 ">
            <a href="#" className="text-reset me-4" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-reset me-4" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-reset me-4" aria-label="Google">
              <i className="fab fa-google"></i>
            </a>
            <a href="#" className="text-reset me-4" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-reset me-4" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-reset me-4" aria-label="Github">
              <i className="fab fa-github"></i>
            </a>
          </div>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
              <h4 className="fw-bold">INFORMATION</h4>
              <ul className="list-unstyled">
                <li>
                  <a
                    className="text-dark text-decoration-none"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="text-dark text-decoration-none"
                  >
                    Delivery information
                  </a>
                </li>

                <li>
                <a>
                   className="text-dark text-decoration-none" 
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
              <h4 className="fw-bold">Contact US</h4>
              <ul className="list-unstyled">
                <li>
                  <i className="fas fa-home me-3"></i> India
                </li>
                <li>
                  <i className="fas fa-envelope me-3"></i>info@example.com
                </li>
                <li>
                  <i className="fas fa-phone me-3"></i> 9234567898
                </li>
        
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center p-4 bg-secondary text-light ">
          ©Copyright.2022.All Right Reserved
        </div>
      </footer>
    </div>
  );
}

