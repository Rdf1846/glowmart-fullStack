import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Register from './pages/Register';
import Login from './pages/Login';
import Checkout from './pages/Checkout';
import OtpVerification from './pages/OtpVerification';
import CartProvider from './context/CartContext';  
import MyOrders from './pages/MyOrders';
import ContactUs from './pages/ContactUs';
import FAQs from './pages/FAQs';
import ReturnPolicy from './pages/ReturnPolicy';
import ShippingInfo from './pages/ShippingInfo';
import AboutUs from './pages/AboutUs';
import CategoryProducts from './pages/CategoryProducts';
import ThankYou from './pages/ThankYou';


function App() {
  return (
    <CartProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/otp" element={<OtpVerification />} />
        <Route path="/my-orders" element={<MyOrders />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/faq" element={<FAQs />} />
        <Route path="/return-policy" element={<ReturnPolicy />} />
        <Route path="/shipping-info" element={<ShippingInfo />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/category/:categoryName" element={<CategoryProducts />} />
        <Route path="/thank-you" element={<ThankYou />} />


      </Routes>
      <Footer />
    </CartProvider>
  );
}

export default App;
