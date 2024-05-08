import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import carImage1 from '../../assets/red car.png';
// import Img1 from '../../assets/band 1.png';
import Img2 from '../../assets/band 2.png';
import Img3 from '../../assets/band 3.png';



export default function Home() {
  return (
    <div className='pb-md-4 pb-2'>
    <img className="img-fluid" src={ carImage1 } alt=""/>
    <img src={ Img2 } alt=""/>
    <img src={ Img3 } alt=""/>
    {/* <img src={ Img1 } alt="" style={{ maxWidth: '300px', maxHeight: '900px'}} /> */}
  </div>
  )
}
