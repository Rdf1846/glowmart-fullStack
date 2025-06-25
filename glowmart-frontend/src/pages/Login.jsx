import React, { useState } from 'react';
import Layout from '../components/Layout';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    emailOrMobile: '',
    password: ''
  });

  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const sendOtp = async () => {
    try {
      const res = await fetch(`http://localhost:8080/api/otp/send?email=${formData.emailOrMobile}`, {
        method: 'POST'
      });
      const text = await res.text();
      setMessage(text);
      setOtpSent(true);
    } catch (err) {
      setMessage('Error sending OTP');
    }
  };

  const verifyOtp = async () => {
    try {
      const res = await fetch(`http://localhost:8080/api/otp/verify?email=${formData.emailOrMobile}&otp=${otp}`, {
        method: 'POST'
      });
      const text = await res.text();
      setMessage(text);
      if (text.toLowerCase().includes('success')) {
        setOtpVerified(true);
        loginAfterOtp();
      }
    } catch (err) {
      setMessage('Error verifying OTP');
    }
  };

  const loginAfterOtp = async () => {
    try {
      const res = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        sessionStorage.setItem('user', JSON.stringify(data));
        navigate('/my-orders');
      } else {
        setMessage(data.message || 'Invalid credentials');
      }
    } catch (err) {
      setMessage('Login failed');
    }
  };

  return (
    <Layout>
      <div className="form-container">
        <h2>User Login</h2>

        <form>
          <input
            type="text"
            name="emailOrMobile"
            placeholder="Email or Mobile"
            value={formData.emailOrMobile}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          {!otpSent && (
            <button type="button" onClick={sendOtp}>Send OTP</button>
          )}

          {otpSent && !otpVerified && (
            <>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
              <button type="button" onClick={verifyOtp}>Verify OTP & Login</button>
            </>
          )}
        </form>

        {message && (
          <p style={{
            marginTop: '1rem',
            color: message.toLowerCase().includes('success') ? 'green' : 'red'
          }}>
            {message}
          </p>
        )}
      </div>
    </Layout>
  );
};

export default Login;
