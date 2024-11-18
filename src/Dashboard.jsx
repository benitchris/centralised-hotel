import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div style={styles.container}>
            <aside style={styles.sidebar}>
                <h2 style={styles.sidebarTitle}>Admin Dashboard</h2>
                <nav>
                    <Link to="/dashboard/hotels" style={styles.link}>
                        Manage Hotels
                    </Link>
                   
                    <Link to="/dashboard/bookings" style={styles.link}>
                        Manage Bookings
                    </Link>
                </nav>
            </aside>
            <main style={styles.mainContent}>
                <Outlet />
            </main>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        height: "100vh",
    },
    sidebar: {
        width: "250px",
        background: "#333",
        color: "#fff",
        padding: "20px",
    },
    sidebarTitle: {
        marginBottom: "20px",
    },
    link: {
        display: "block",
        color: "#fff",
        textDecoration: "none",
        marginBottom: "10px",
        padding: "10px",
        borderRadius: "4px",
        transition: "background 0.3s",
    },
    linkHover: {
        background: "#444",
    },
    mainContent: {
        flex: 1,
        padding: "20px",
        background: "#f5f5f5",
    },
};

export default Dashboard;
