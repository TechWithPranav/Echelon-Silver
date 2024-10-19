"use client"

import React, { useState } from 'react'; // Import useState for email toggle

const UserProfile = ({
    age,
    areasOfInterest,
    email,
    fullname,
    occupation,
    username,
}) => {
    const [showEmail, setShowEmail] = useState(false); // State to control email visibility

    return (
        <div style={styles.userProfile}>
            <h2 style={styles.title}>{fullname}</h2>
            <div style={styles.details}>
                <p style={styles.detail}>
                    <span style={styles.label}>Username:</span> {username}
                </p>
                <p style={styles.detail}>
                    <span style={styles.label}>Age:</span> {age}
                </p>
                <p style={styles.detail}>
                    <span style={styles.label}>Occupation:</span> {occupation}
                </p>
                <p style={styles.detail}>
                    <span style={styles.label}>Areas of Interest:</span>{' '}
                    {areasOfInterest}
                </p>
                <p style={styles.detail}>
                    <span style={styles.label}>Email:</span>{' '}
                    {showEmail ? email : 'Protected'}
                    <button
                        style={styles.button}
                        onClick={() => setShowEmail(!showEmail)}
                    >
                        {showEmail ? 'Hide' : 'Show'}
                    </button>
                </p>
            </div>
        </div>
    );
};

// Inline styles
const styles = {
    userProfile: {
        backgroundColor: '#ffc0cb', // Light pink
        borderRadius: '10px',
        padding: '2rem',
        margin: '1rem auto',
        maxWidth: '500px', // Adjust for responsiveness
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    title: {
        fontSize: '2rem',
        fontWeight: 'bold',
        color: '#D5006D', // Pink color
    },
    details: {
        marginTop: '1rem',
    },
    detail: {
        color: '#4A4A4A', // Gray color
    },
    label: {
        fontWeight: 'bold',
        color: '#D5006D', // Pink color for labels
    },
    button: {
        marginLeft: '0.5rem',
        fontSize: '0.75rem',
        color: '#D5006D', // Pink color for button text
        cursor: 'pointer',
        textDecoration: 'underline',
        background: 'none',
        border: 'none',
        padding: '0',
    },
};

export default UserProfile;
