import React from 'react';

const Layout = ({ children }) => {
  return (
    <div style={{
      width: '100vw',              // ✅ Full viewport width
      minHeight: '100vh',          // ✅ Full viewport height
      backgroundColor: '#f9f9f9',  // optional background
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      paddingTop: '2rem',
      boxSizing: 'border-box',
    }}>
      <div style={{
        width: '100%',             // ✅ Inner width fills available space
        maxWidth: '1200px',        // ✅ But limits it for neat design
        padding: '2rem',
        backgroundColor: '#fff',   // Optional white content box
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        boxSizing: 'border-box'
      }}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
