import React, { useState } from 'react';
import Layout from '../components/Layout';

const OtpVerification = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState('email'); // 'email' or 'verify'
  const [message, setMessage] = useState('');

  const sendOtp = async () => {
    try {
      const res = await fetch(`http://localhost:8080/api/otp/send?email=${email}`, {
        method: 'POST'
      });
      const msg = await res.text();
      setMessage(msg);
      setStep('verify');
    } catch (err) {
      console.error(err);
      setMessage('Failed to send OTP');
    }
  };

  const verifyOtp = async () => {
    try {
      const res = await fetch(`http://localhost:8080/api/otp/verify?email=${email}&otp=${otp}`, {
        method: 'POST'
      });
      const msg = await res.text();
      setMessage(msg);
    } catch (err) {
      console.error(err);
      setMessage('Failed to verify OTP');
    }
  };

  return (
    <Layout>
      <h2>Email OTP Verification</h2>
      {step === 'email' && (
        <>
          <input
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br /><br />
          <button onClick={sendOtp}>Send OTP</button>
        </>
      )}

      {step === 'verify' && (
        <>
          <p>OTP sent to <strong>{email}</strong>. Enter below:</p>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <br /><br />
          <button onClick={verifyOtp}>Verify OTP</button>
        </>
      )}

      {message && (
        <div style={{ marginTop: '1rem', fontWeight: 'bold' }}>{message}</div>
      )}
    </Layout>
  );
};

export default OtpVerification;
