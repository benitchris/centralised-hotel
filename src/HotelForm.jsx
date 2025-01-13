import React, { useState } from "react";

const HotelForm = ({ onSave }) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newHotel = { name, description };
        onSave(newHotel);
        setName(""); // Clear the form fields
        setDescription("");
    };

    return (
        <div>
            <h2>Add New Hotel</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div>
                    <label>Hotel Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        style={styles.input}
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        style={styles.textarea}
                    />
                </div>
                <button type="submit" style={styles.button}>
                    Save Hotel
                </button>
            </form>
        </div>
    );
};

const styles = {
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        marginTop: "20px",
    },
    input: {
        width: "100%",
        padding: "8px",
        fontSize: "16px",
        borderRadius: "4px",
        border: "1px solid #ccc",
    },
    textarea: {
        width: "100%",
        height: "80px",
        padding: "8px",
        fontSize: "16px",
        borderRadius: "4px",
        border: "1px solid #ccc",
    },
    button: {
        background: "#007bff",
        color: "#fff",
        padding: "10px 20px",
        fontSize: "16px",
        borderRadius: "4px",
        cursor: "pointer",
        border: "none",
    },
};

export default HotelForm;
