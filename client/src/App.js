// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Javascript/Home";
import Shop from "./component/Javascript/Shop";
import Footer from './component/Footer';
// import '@fortawesome/fontawesome-free/css/all.css';




function App() {
  return (
    <div className='container mx-auto"'>
        <Navbar />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
      
    </div>
  );
}

export default App;
