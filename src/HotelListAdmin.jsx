import React from "react";

const HotelListAdmin = ({ hotels, onEdit, onDelete }) => {
    return (
        <div>
            <h2>Manage Hotels</h2>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {hotels.map((hotel) => (
                        <tr key={hotel.id}>
                            <td>{hotel.name}</td>
                            <td>{hotel.description}</td>
                            <td>
                                <button
                                    style={styles.editButton}
                                    onClick={() => onEdit(hotel.id)}
                                >
                                    Edit
                                </button>
                                <button
                                    style={styles.deleteButton}
                                    onClick={() => onDelete(hotel.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const styles = {
    table: {
        width: "100%",
        borderCollapse: "collapse",
        marginTop: "20px",
    },
    editButton: {
        background: "#007bff",
        color: "#fff",
        border: "none",
        padding: "5px 10px",
        marginRight: "10px",
        borderRadius: "4px",
        cursor: "pointer",
    },
    deleteButton: {
        background: "#dc3545",
        color: "#fff",
        border: "none",
        padding: "5px 10px",
        borderRadius: "4px",
        cursor: "pointer",
    },
};

export default HotelListAdmin;
