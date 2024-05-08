import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="bg-light text-center text-lg-start border-top border-bottom border-light ">
        <div className="container p-4 bg-dark text-light">
          <div
            className="row justify-content-center "
            style={{ backgroundColor: "#000000" }}
          >
            <div className="border-end pe-3 col-md-3 mb-md-0 mb-3 me-md-3 text-center">
              <h6>FREE DELIVERY</h6>
              <p>Nam liber tempor cumsolute nobis elefend option congue</p>
            </div>
            <div className="border-end pe-3 col-md-3 mb-md-0 mb-3 me-md-3 text-center">
              <h6>MONEY GUARANTEE</h6>
              <p>Nam liber tempor cumsolute nobis elefend option congue</p>
            </div>
            <div className="col-md-3 mb-md-0 mb-3 text-center">
              <h6>ONLINE SUPPORT</h6>
              <p>Nam liber tempor cumsolute nobis elefend option congue</p>
            </div>
          </div>
          <div className="row pb-md-4 pb-6 pt-md-4 pt-6 justify-content-left">
            <div className="col-md-3 mb-md-0 mb-3 pb-md-4 pb-6 text-left ">
              <h5 className="fw-bold">ABOUT US</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
                necessitatibus ullam dolorem aut ex provident, mollitia tempora
                tempore sapiente deleniti.
              </p>
              <div className="d-flex justify-content-start mb-4 ">
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

            <div className="col-md-3 mb-md-4 mb-3 text-
            left">
              <h5 className="fw-bold">INFORMATION</h5>
              <div className="row">
              <div className="col-md-6 mb-md-0 mb-3">
                <ul className="list-unstyled">
                  <li>
                    <a className="text-decoration-none text-light">About</a>
                  </li>
                  <li>
                    <a className="text-decoration-none text-light">
                      Delivery information
                    </a>
                  </li>

                  <li>
                    <a className="text-decoration-none text-light">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 mb-md-0 mb-3">
                <ul className="list-unstyled">
                  <li>
                    <a className="text-decoration-none text-light">Sales</a>
                  </li>
                  <li>
                    <a className="text-decoration-none text-light">
                      Terms & Conditions
                    </a>
                  </li>

                  <li>
                    <a className="text-decoration-none text-light">
                      EMI Payment
                    </a>
                  </li>
                </ul>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-md-0 mb-3 text-left">
              <h5 className="fw-bold">Contact US</h5>
              <ul className="list-unstyled">
                <p>
                  If you have any query please contact us:
                  <a className="text-decoration-none">vaishali@gmail.com</a>
                </p>
                <li>
                  <i className="fas fa-home me-3"></i> India
                </li>
                <li>
                  <i className="fas fa-phone me-3"></i> 9234567898
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center p-4 bg-dark text-light border-top">
          ©Copyright.2022.All Right Reserved
        </div>
      </footer>
    </div>
  );
}
