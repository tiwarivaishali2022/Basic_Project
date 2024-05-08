

// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import carImage1 from '../../assets/red car.png';
// import Img1 from '../../assets/band 1.png';
// import Img2 from '../../assets/band 2.png';
// import Img3 from '../../assets/band 3.png';

// export default function Home() {
//   return (
//     <div className='pb-md-4 pb-2'>
//       <img className="img-fluid" src={carImage1} alt="" />
//       <img src={Img2} alt="" style={{ width: '435px', height: '200px' }} />
//       <img src={Img3} alt="" style={{ width: '430px', height: '200px' }} />
//       <img src={Img1} alt="" style={{ width: '430px', height: '200px' }} />
//     </div>
//   );
// }


import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import carImage1 from '../../assets/red car.png';
import Img1 from '../../assets/band 1.png';
import Img2 from '../../assets/band 2.png';
import Img3 from '../../assets/band 3.png';

export default function Home() {
  return (
    <div className='container'>
      <div className='row pb-md-4 pb-2'>
        <div className='col-md-12'>
          <img className="img-fluid" src={carImage1} alt="" />
        </div>
        <div className='col-md-4'>
          <img src={Img2} alt="" className="img-fluid" />
        </div>
        <div className='col-md-4'>
          <img src={Img3} alt="" className="img-fluid" />
        </div>
        <div className='col-md-4'>
          <img src={Img1} alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}
