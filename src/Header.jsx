import React from 'react';

const Header = () => {
    return (
        <header style={styles.header}>
            <div style={styles.logoContainer}>
                <img
                    src="https://via.placeholder.com/50?text=Logo"
                    alt="Hotel Booking Logo"
                    style={styles.logo}
                />
                <h1 style={styles.title}>Hotel Booking System</h1>
            </div>
            <nav style={styles.nav}>
                <a href="#home" style={styles.link}>Home</a>
                <a href="#about" style={styles.link}>About</a>
                <a href="#contact" style={styles.link}>Contact</a>
                <a href="#login" style={styles.button}>Login</a>
            </nav>
        </header>
    );
};

const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#0073e6',
        color: 'white',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    logoContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    logo: {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        marginRight: '10px',
    },
    title: {
        fontSize: '20px',
        fontWeight: 'bold',
        margin: 0,
    },
    nav: {
        display: 'flex',
        gap: '20px',
        justifyContent: 'center',
        flex: 1,
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '16px',
        transition: 'color 0.3s',
        padding: '5px 10px',
    },
    linkHover: {
        color: '#80c1ff',
    },
    button: {
        color: '#0073e6',
        backgroundColor: 'white',
        padding: '8px 15px',
        borderRadius: '5px',
        textDecoration: 'none',
        fontSize: '16px',
        transition: 'background-color 0.3s, color 0.3s',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
    },
};

export default Header;
