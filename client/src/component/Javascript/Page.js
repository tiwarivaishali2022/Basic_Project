import React from "react";
import carImage2 from '../../assets/image.png';
// import carImage3 from '../assets/carlogo.png';
// import carImage4 from '../assets/carlogo.png';
import Image from '../../assets/best seller.png';



export default function () {
  return (
    <div>
      <section className="pb-md-4 pb-2 pt-3">
        <h3 className="text-center my-2">NEW ARRIVALS</h3>
        <p className="my-2 pt-3 pb-6">
          A pricing strategy is the approach you take to charging clients and
          members for your services.
        </p>
        <div className="boxes row justify-content-center">
          <div className="col-lg-4 col-md-6 mb-4" >
            <div className="card">
              <div className="card-body">
              <img className="card-title img-fluid" src={carImage2} alt="" />

                <ul className="list-unstyled">
                  <li className="highlighted"></li>
                
                </ul>
                <button className="btn btn-danger">ADD TO CART</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
              <img className="card-title img-fluid" src={carImage2} alt="" />
               <ul className="list-unstyled">

                </ul>
                <button className="btn btn-danger">ADD TO CART</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="card-body ">
                <img className="card-title img-fluid" src={carImage2} alt="" />
                <ul className="list-unstyled">
                  <li className="highlighted"></li>
                  <li></li>
    
                </ul>
                <button className="btn btn-danger">ADD TO CART</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    <img class="img-fluid" src={ Image } alt=""/>

    </div>
  );
}
