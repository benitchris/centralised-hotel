import './App.css';
import Header from './Header.jsx';
import SearchBar from './SearchBar.jsx';
import HotelCard from './HotelCard.jsx';
import HotelList from './HotelList';

function App() {
    const hotels = [
        {
            id: 1,
            name: 'Hotel Kigali View',
            description: 'Luxury hotel with stunning city views.',
            image: 'https://via.placeholder.com/300x200?text=Hotel+Kigali+View',
        },
        {
          id: 1,
          name: 'Hotel Kigali View',
          description: 'Luxury hotel with stunning city views.',
          image: 'https://via.placeholder.com/300x200?text=Hotel+Kigali+View',
      },
      {
        id: 1,
        name: 'Hotel Kigali View',
        description: 'Luxury hotel with stunning city views.',
        image: 'https://via.placeholder.com/300x200?text=Hotel+Kigali+View',
    },
    {
      id: 1,
      name: 'Hotel Kigali View',
      description: 'Luxury hotel with stunning city views.',
      image: 'https://via.placeholder.com/300x200?text=Hotel+Kigali+View',
  },
  {
    id: 1,
    name: 'Hotel Kigali View',
    description: 'Luxury hotel with stunning city views.',
    image: 'https://via.placeholder.com/300x200?text=Hotel+Kigali+View',
},
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
            image: 'https://via.placeholder.com/300x200?text=Nyungwe+Paradise',
        },
        {
            id: 3,
            name: 'Volcanoes Retreat',
            description: 'Close to the gorilla trekking trails.',
            image: 'https://via.placeholder.com/300x200?text=Volcanoes+Retreat',
        },
    ];

    const handleSearch = (query) => {
        console.log('Searching for:', query);
        // We'll later connect this to the backend or filter hotel data.
    };

    return (
        <div>
            <Header />
            <SearchBar onSearch={handleSearch} />

            {/* Featured Hotels Section */}
            <div style={styles.hotelContainer}>
                {hotels.map((hotel) => (
                    <HotelCard key={hotel.id} hotel={hotel} />
                ))}
            </div>
        </div>
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
