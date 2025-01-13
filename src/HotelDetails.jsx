import React from "react";
import { useParams } from "react-router-dom";

const HotelDetails = ({ hotels }) => {
    const { id } = useParams();
    const hotel = hotels.find((hotel) => hotel.id === parseInt(id));

    if (!hotel) {
        return <p style={styles.error}>Hotel not found.</p>;
    }

    return (
        <div style={styles.container}>
            <img src={hotel.image} alt={hotel.name} style={styles.image} />
            <h1 style={styles.title}>{hotel.name}</h1>
            <p style={styles.description}>{hotel.description}</p>
            <h3 style={styles.amenitiesTitle}>Amenities:</h3>
            <p style={styles.amenities}>{hotel.amenities}</p>
        </div>
    );
};

const styles = {
    container: {
        textAlign: "center",
        padding: "20px",
    },
    image: {
        width: "100%",
        maxWidth: "600px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    title: {
        fontSize: "24px",
        color: "#333",
    },
    description: {
        margin: "15px 0",
        fontSize: "16px",
        color: "#555",
    },
    amenitiesTitle: {
        marginTop: "20px",
        fontSize: "18px",
        fontWeight: "bold",
    },
    amenities: {
        fontSize: "14px",
        color: "#666",
    },
    error: {
        textAlign: "center",
        margin: "50px",
        fontSize: "18px",
        color: "red",
    },
};

export default HotelDetails;
