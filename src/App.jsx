import './App.css';
import Header from './Header.jsx';
import SearchBar from './SearchBar.jsx';
import HotelCard from './HotelCard.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HotelDetails from './HotelDetails.jsx';
import Dashboard from './Dashboard.jsx';
import HotelListAdmin from './HotelListAdmin.jsx';
import HotelForm from './HotelForm.jsx';
import { useState } from 'react';

function App() {
    const [hotels, setHotels] = useState([
        {
            id: 1,
            name: 'Hotel Kigali View',
            description: 'Luxury hotel with stunning city views.',
            image: 'https://via.placeholder.com/300x200?text=Hotel+Kigali+View',
        },
        {
            id: 2,
            name: 'Nyungwe Paradise',
            description: 'Nestled in nature with top amenities.',
            image: 'https://unsplash.com/photos/person-diving-on-pool-splashing-water-1qCSGzVEKKQ',
        },
        {
            id: 3,
            name: 'Volcanoes Retreat',
            description: 'Close to the gorilla trekking trails.',
            image: 'https://via.placeholder.com/300x200?text=Volcanoes+Retreat',
        },
        {
            id: 4,
            name: 'Volcanoes fuck up',
            description: 'Close to the gorilla trekking trails.',
            image: 'https://via.placeholder.com/300x200?text=Volcanoes+Retreat',
        },
    ]);

    // Handle search logic
    const handleSearch = (query) => {
        console.log('Searching for:', query);
        // Implement search logic here (filter hotels by query)
    };

    // Add a new hotel dynamically
    const handleAddHotel = (hotel) => {
        setHotels((prevHotels) => [
            ...prevHotels,
            {
                ...hotel,
                id: prevHotels.length + 1,
            },
        ]);
    };

    // Delete a hotel dynamically
    const handleDeleteHotel = (id) => {
        setHotels((prevHotels) => prevHotels.filter((hotel) => hotel.id !== id));
    };

    // Placeholder edit functionality
    const handleEditHotel = (id) => {
        console.log(`Edit hotel with ID: ${id}`);
        // Implement actual edit functionality if required
    };

    return (
        <Router>
            <div>
                <Header />
                <SearchBar onSearch={handleSearch} />
                <Routes>
                    {/* Home Page with Hotel Cards */}
                    <Route
                        path="/"
                        element={
                            <div style={styles.hotelContainer}>
                                {hotels.map((hotel) => (
                                    <HotelCard key={hotel.id} hotel={hotel} />
                                ))}
                            </div>
                        }
                    />
                    {/* Hotel Details Page */}
                    <Route
                        path="/hotels/:id"
                        element={<HotelDetails hotels={hotels} />}
                    />
                    {/* Dashboard */}
                    <Route path="/dashboard" element={<Dashboard />}>
                        {/* Manage Hotels */}
                        <Route
                            path="hotels"
                            element={
                                <HotelListAdmin
                                    hotels={hotels}
                                    onEdit={handleEditHotel}
                                    onDelete={handleDeleteHotel}
                                />
                            }
                        />
                        {/* Add Hotel */}
                        <Route
                            path="hotels/add"
                            element={<HotelForm onSave={handleAddHotel} />}
                        />
                    </Route>
                </Routes>
            </div>
        </Router>
    );
}

const styles = {
    hotelContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: '20px',
    },
};

export default App;
