import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Header = () => {
  const { cartItems } = useContext(CartContext);
  const user = JSON.parse(sessionStorage.getItem('user'));

  const handleLogout = () => {
    sessionStorage.removeItem('user');
    window.location.reload(); // refresh page to re-render header
  };

  return (
    <header style={headerStyle}>
      <div style={logoStyle}>🌸 GlowMart</div>

      <nav style={navStyle}>
        <Link to="/about" style={navLinkStyle}>About Us</Link>
        <Link to="/" style={navLinkStyle}>Home</Link>
        <Link to="/products" style={navLinkStyle}>All Products</Link>
        <Link to="/cart" style={navLinkStyle}>
          Cart 🛒 <span style={badgeStyle}>{cartItems.length}</span>
        </Link>

        {!user && (
          <>
            <Link to="/register" style={navLinkStyle}>Register</Link>
            <Link to="/login" style={navLinkStyle}>Login</Link>
          </>
        )}

        

        {user && (
          <>
            <Link to="/my-orders" style={navLinkStyle}>My Orders</Link>
            <span style={{ fontWeight: 'bold', color: 'white' }}>
              Hi, {user.fullName.split(' ')[0]} 👋
            </span>
            <button onClick={handleLogout} style={logoutButtonStyle}>
              Logout
            </button>
          </>
        )}
      </nav>
    </header>
  );
};

const headerStyle = {
  padding: '1rem 2rem',
  background: 'linear-gradient(to right, #ff6b9d, #a56cf0)',
  color: 'white',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'sticky',
  top: 0,
  zIndex: 1000
};

const logoStyle = {
  fontSize: '1.8rem',
  fontWeight: 'bold'
};

const navStyle = {
  display: 'flex',
  gap: '20px',
  alignItems: 'center'
};

const navLinkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontWeight: '500',
  position: 'relative'
};

const badgeStyle = {
  backgroundColor: 'white',
  color: '#ff6b9d',
  borderRadius: '50%',
  padding: '2px 8px',
  fontSize: '0.8rem',
  marginLeft: '4px'
};

const logoutButtonStyle = {
  marginLeft: '10px',
  background: 'transparent',
  color: 'white',
  border: '1px solid white',
  borderRadius: '5px',
  padding: '4px 8px',
  cursor: 'pointer',
  fontWeight: '500'
};

export default Header;
