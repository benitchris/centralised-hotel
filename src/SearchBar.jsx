import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        onSearch(query);
        setQuery(''); // Clear input after search
    };

    return (
        <div style={styles.container}>
            <input
                type="text"
                placeholder="Search hotels..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={styles.input}
            />
            <button onClick={handleSearch} style={styles.button}>
                Search
            </button>
        </div>
    );
};

const styles = {
    container: {
       
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px', // Proper spacing between input and button
    },
    input: {
        width: '800px',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        fontSize: '16px',
        outline: 'none',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Apply shadow directly to the input
    },
    button: {
        padding: '10px 20px',
        border: 'none',
        backgroundColor: 'rgba(0, 115, 230, 0.9)',
        color: 'white',
        fontSize: '16px',
        borderRadius: '10px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Apply shadow directly to the button
    },
    buttonHover: {
        backgroundColor: 'rgba(0, 91, 181, 0.9)',
    },
};

export default SearchBar;
