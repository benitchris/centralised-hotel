import React from 'react';
import { useNavigate } from 'react-router-dom';

const HotelCard = ({ hotel }) => {
    // Fallback image if no image is provided
    const imageSrc = hotel.image || 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjojY2NjOyI+PHRleHQgeD0iNTAiIHk9IjEwMCIgc3R5bGU9ImZpbGw6I2FhYTtmb250LXNpemU6MjBweDsiPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg==';

    return (
        <div style={styles.card} onClick={handleClick}>
            <img
                src={imageSrc}
                alt={hotel.name}
                style={styles.image}
                onError={(e) => {
                    e.target.src =
                        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjojY2NjOyI+PHRleHQgeD0iNTAiIHk9IjEwMCIgc3R5bGU9ImZpbGw6I2FhYTtmb250LXNpemU6MjBweDsiPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg==';
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
