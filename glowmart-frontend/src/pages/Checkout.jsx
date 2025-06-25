import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Layout from '../components/Layout';

const Checkout = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const user = JSON.parse(sessionStorage.getItem('user'));

  if (!user) {
    return (
      <Layout>
        <div className="form-container">
          <h2>Please <a href="/register?from=cart">register</a> or <a href="/login">login</a> to continue to checkout.</h2>
        </div>
      </Layout>
    );
  }

  const [formData, setFormData] = useState({
    fullName: user.fullName || '',
    address: '',
    mobile: user.mobile || '',
    email: user.email || ''
  });

  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [message, setMessage] = useState('');
  const [timer, setTimer] = useState(0);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const sendOtp = async () => {
    try {
      const res = await fetch(`http://localhost:8080/api/otp/send?email=${formData.email}`, {
        method: 'POST'
      });
      const text = await res.text();
      setMessage(text);
      setOtpSent(true);
      setOtpVerified(false);
      setTimer(300);
    } catch (err) {
      setMessage("Error sending OTP");
    }
  };

  const verifyOtp = async () => {
    try {
      const res = await fetch(`http://localhost:8080/api/otp/verify?email=${formData.email}&otp=${otp}`, {
        method: 'POST'
      });
      const text = await res.text();
      setMessage(text);
      if (text.toLowerCase().includes("success")) {
        setOtpVerified(true);
        setTimer(0);
      }
    } catch (err) {
      setMessage("Error verifying OTP");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user && !otpVerified) {
      setMessage("Please verify OTP first!");
      return;
    }

    const order = {
      customer: formData,
      items: cartItems,
      total: cartItems.reduce((acc, item) => acc + item.price, 0),
      userEmail: user.email
    };

    try {
      const res = await fetch('http://localhost:8080/api/orders/place', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(order)
      });

      if (res.ok) {
         clearCart();
        window.location.href = "/thank-you";
      } else {
        alert("Failed to place order");
      }
    } catch (error) {
      alert("Server error while placing order");
    }
  };

  useEffect(() => {
    if (timer <= 0) return;
    const interval = setInterval(() => setTimer(prev => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <Layout>
      <div className="form-container">
        <h2>Checkout</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
          <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
          <input type="text" name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />

          {/* OTP for guests only */}
          {!user && !otpSent && (
            <button type="button" onClick={sendOtp} disabled={!formData.email}>
              Send OTP
            </button>
          )}

          {!user && otpSent && !otpVerified && (
            <>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
              <button type="button" onClick={verifyOtp}>Verify OTP</button>
            </>
          )}

          {otpSent && !otpVerified && timer > 0 && (
            <p style={{ fontWeight: 'bold' }}>OTP valid for: {formatTime(timer)}</p>
          )}

          {otpSent && !otpVerified && timer === 0 && (
            <button type="button" onClick={sendOtp}>Resend OTP</button>
          )}

          {(user || otpVerified) && (
            <>
              <br />
              <button type="submit">Place Order</button>
            </>
          )}
        </form>

        {message && (
          <p style={{
            marginTop: '1rem',
            color: message.toLowerCase().includes("success") ? 'green' : 'red'
          }}>
            {message}
          </p>
        )}
      </div>
    </Layout>
  );
};

export default Checkout;
