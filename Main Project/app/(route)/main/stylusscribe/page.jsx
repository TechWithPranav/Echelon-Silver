// import React from 'react'
// import HandwritingToText from '@/components/HandwritingToText/HandwritingToText'

// const stylusscribe = () => {
//   return (
//     <div>
//     <div>stylusscribe</div>
   
//    <a href="http://127.0.0.1:5500/indexstylus.html">Try Now</a>
//     </div>
//   )
// }

// export default stylusscribe

"use client"
import React from 'react';
import HandwritingToText from '@/components/HandwritingToText/HandwritingToText';

// Optional: Create a CSS object for inline styling
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    // backgroundColor: '#f0f0f0',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '6.5rem',
    color: '#333',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '3.2rem',
    color: '#fff',
    backgroundColor: '#007BFF',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none', // Remove underline from link
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#0056b3', // Darker blue for hover effect
  },
};

const stylusscribe = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Stylus Scribe</h1>
      <a
        href="http://127.0.0.1:5500/indexstylus.html"
        style={styles.button}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
      >
        Try Now
      </a>
    </div>
  );
};

export default stylusscribe;
