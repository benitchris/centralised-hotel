import React from 'react';

const HotelCard = ({ hotel }) => {
    return (
        <div style={styles.card}>
            <img
                src={hotel.image}
                alt={hotel.name}
                style={styles.image}
            />
            <div style={styles.content}>
                <h3 style={styles.title}>{hotel.name}</h3>
                <p style={styles.description}>{hotel.description}</p>
            </div>
        </div>
    );
};

const styles = {
    card: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        margin: '10px',
        width: '300px',
    },
    image: {
        width: '100%',
        height: '200px',
        objectFit: 'cover',
    },
    content: {
        padding: '15px',
    },
    title: {
        margin: '0 0 10px',
        fontSize: '18px',
        color: '#333',
    },
    description: {
        fontSize: '14px',
        color: '#666',
    },
};

export default HotelCard;
