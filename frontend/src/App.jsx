import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Cart from './pages/Cart/Cart.jsx';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Footer from './components/footer/Footer.jsx';
import { useEffect, useState } from 'react';
import LoginPopUp from './components/Login/LoginPopUp.jsx';
import Verify from './pages/verify/Verify.jsx';
import MyOrders from './pages/MyOrders/MyOrders.jsx';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  return (
    <>
      {showLogin ? <LoginPopUp setShowLogin={setShowLogin} /> : <></>}
      <div className="app" id='up'>
        <Navbar setShowLogin={setShowLogin} isCart={location.pathname !== '/'  } />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/myorders" element={<MyOrders />} />
        </Routes>
      </div>
      <Footer />
      {showButton ?
        <a href='#up'>
          <button className="scollToTop icon-keyboard_arrow_up">
            &#8593;
          </button>
        </a> : null}
    </>
  );
}

export default App;
