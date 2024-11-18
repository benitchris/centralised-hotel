import React, { useState } from "react";

const HotelListAdmin = ({ hotels, onEdit, onDelete, onAdd }) => {
    const [newHotel, setNewHotel] = useState({
        name: "",
        description: "",
        image: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewHotel((prev) => ({ ...prev, [name]: value }));
    };

    const handleAddHotel = (e) => {
        e.preventDefault();
        if (newHotel.name && newHotel.description) {
            onAdd(newHotel);
            setNewHotel({ name: "", description: "", image: "" }); // Reset form
        }
    };

    return (
        <div>
            <h1>Manage Hotels</h1>

            {/* Add Hotel Form */}
            <form onSubmit={handleAddHotel} style={styles.form}>
                <h2>Add a New Hotel</h2>
                <input
                    type="text"
                    name="name"
                    placeholder="Hotel Name"
                    value={newHotel.name}
                    onChange={handleInputChange}
                    style={styles.input}
                />
                <textarea
                    name="description"
                    placeholder="Hotel Description"
                    value={newHotel.description}
                    onChange={handleInputChange}
                    style={styles.textarea}
                ></textarea>
                <input
                    type="text"
                    name="image"
                    placeholder="Image URL (optional)"
                    value={newHotel.image}
                    onChange={handleInputChange}
                    style={styles.input}
                />
                <button type="submit" style={styles.addButton}>
                    Add Hotel
                </button>
            </form>

            {/* List of Hotels */}
            <div style={styles.hotelList}>
                {hotels.map((hotel) => (
                    <div key={hotel.id} style={styles.hotelCard}>
                        <div
                            style={{
                                ...styles.imageContainer,
                                backgroundImage: `url(${hotel.image || "https://via.placeholder.com/300x200?text=No+Image"})`,
                            }}
                        ></div>
                        <div style={styles.details}>
                            <h3>{hotel.name}</h3>
                            <p>{hotel.description}</p>
                            <button
                                onClick={() => onEdit(hotel)} // Pass the entire hotel object
                                style={styles.editButton}
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => onDelete(hotel.id)}
                                style={styles.deleteButton}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        marginBottom: "20px",
    },
    input: {
        padding: "10px",
        fontSize: "16px",
        border: "1px solid #ccc",
        borderRadius: "5px",
    },
    textarea: {
        padding: "10px",
        fontSize: "16px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        resize: "none",
    },
    addButton: {
        padding: "10px",
        backgroundColor: "#28a745",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    },
    hotelList: {
        display: "flex",
        flexDirection: "column",
        gap: "20px",
    },
    hotelCard: {
        display: "flex",
        alignItems: "center",
        background: "#f9f9f9",
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "10px",
    },
    imageContainer: {
        width: "100px",
        height: "100px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "5px",
        marginRight: "15px",
        backgroundColor: "#ddd", // Fallback for missing image
    },
    details: {
        flex: 1,
    },
    editButton: {
        marginRight: "10px",
        padding: "5px 10px",
        backgroundColor: "#ffc107",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    },
    deleteButton: {
        padding: "5px 10px",
        backgroundColor: "#dc3545",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    },
};

export default HotelListAdmin;
