import React from 'react';
import HotelCard from './HotelCard';

const HotelList = ({ hotels }) => {
    return (
        <div style={styles.grid}>
            {hotels.map((hotel) => (
                <HotelCard
                    key={hotel.id}
                    image={hotel.image}
                    name={hotel.name}
                    description={hotel.description}
                    onViewDetails={() => alert(`Viewing details for ${hotel.name}`)}
                />
            ))}
        </div>
    );
};

const styles = {
    grid: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        padding: '20px',
    },
};

export default HotelList;
