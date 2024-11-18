import React from 'react';
import { useNavigate } from 'react-router-dom';

const HotelCard = ({ hotel }) => {
    const navigate = useNavigate();

    // Fallback image if no image is provided
    const imageSrc = hotel.image || 'https://via.placeholder.com/300x200?text=No+Image';

    // Handle click to navigate to the hotel details page
    const handleClick = () => {
        navigate(`/hotels/${hotel.id}`);
    };

    return (
        <div style={styles.card} onClick={handleClick}>
            <img
                src={imageSrc}
                alt={hotel.name}
                style={styles.image}
                onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
                }}
            />
            <h3 style={styles.title}>{hotel.name}</h3>
            <p style={styles.description}>{hotel.description}</p>
        </div>
    );
};

const styles = {
    card: {
        width: '300px',
        margin: '15px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        textAlign: 'center',
        background: '#fff',
        cursor: 'pointer', // Makes it clear the card is clickable
    },
    image: {
        width: '100%',
        height: '200px',
        objectFit: 'cover',
        background: '#ccc',
    },
    title: {
        fontSize: '18px',
        margin: '10px 0',
    },
    description: {
        fontSize: '14px',
        color: '#555',
        padding: '0 10px 10px',
    },
};

export default HotelCard;
