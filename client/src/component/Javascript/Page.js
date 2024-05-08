import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import carImage2 from "../../assets/image.png";
import Image from "../../assets/best seller.png";

export default function NewArrivals() {
  return (
    <div>
      <section className="pb-md-4 pb-2 pt-3">
        <h3 className="text-center my-2">NEW ARRIVALS</h3>
        <p className="my-2 pt-3 pb-6">
          A pricing strategy is the approach you take to charging clients and
          members for your services.
        </p>
        <div className="boxes row justify-content-center">
          <ProductCard imgSrc={carImage2} price="120.00" solidStars={5} regularStars={0} />
          <ProductCard imgSrc={carImage2} price="150.00" solidStars={3} regularStars={2} />
          <ProductCard imgSrc={carImage2} price="100.00" solidStars={0} regularStars={4} />
        </div>
      </section>
      <img className="img-fluid" src={Image} alt="" />
    </div>
  );
}

function ProductCard({ imgSrc, price, solidStars, regularStars }) {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card">
        <div className="card-body">
          <img className="card-title img-fluid" src={imgSrc} alt="" />
          <ul className="list-unstyled">
            <li>
              {[...Array(solidStars)].map((_, index) => (
                <FontAwesomeIcon key={index} icon={solidStar} className="text-warning" />
              ))}
              {[...Array(regularStars)].map((_, index) => (
                <FontAwesomeIcon key={index} icon={regularStar} className="text-warning" />
              ))}
              <span className="ml-2">1 review</span>
            </li>
            <li className="highlighted text-danger">₹{price}</li>
          </ul>
          <button className="btn btn-danger">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
}
