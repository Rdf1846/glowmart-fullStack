import React, { useState } from 'react';
import Layout from '../components/Layout';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    password: ''
  });

  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [otpVerified, setOtpVerified] = useState(false);
  const [message, setMessage] = useState('');

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
      }
    } catch (err) {
      setMessage("Error verifying OTP");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!otpVerified) {
      setMessage("Please verify OTP first!");
      return;
    }

    try {
      const res = await fetch('http://localhost:8080/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        const data = await res.json(); // ✅ expect user object with id
        sessionStorage.setItem("user", JSON.stringify(data));
        setMessage("User registered successfully!");
        navigate("/checkout");
      } else {
        const text = await res.text();
        setMessage(text || "Registration failed.");
      }
    } catch (err) {
      setMessage("Registration failed: " + err.message);
    }
  };

  return (
    <Layout>
      <div className="form-container" style={{
        maxWidth: '400px',
        margin: '2rem auto',
        background: '#fff',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 0 15px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>User Registration</h2>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          {!otpSent && (
            <button type="button" onClick={sendOtp} style={buttonStyle}>Send OTP</button>
          )}

          {otpSent && !otpVerified && (
            <>
              <input
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                style={inputStyle}
              />
              <button type="button" onClick={verifyOtp} style={buttonStyle}>Verify OTP</button>
            </>
          )}

          {otpVerified && (
            <button type="submit" style={buttonStyle}>Register</button>
          )}
        </form>

        {message && (
          <p style={{
            marginTop: '1rem',
            color: message.toLowerCase().includes("success") ? 'green' : 'red',
            fontWeight: 'bold',
            textAlign: 'center'
          }}>
            {message}
          </p>
        )}
      </div>
    </Layout>
  );
};

const inputStyle = {
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '6px',
  fontSize: '16px'
};

const buttonStyle = {
  padding: '10px',
  background: 'linear-gradient(to right, #ff6b9d, #a56cf0)',
  color: '#fff',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '16px'
};

export default Register;
