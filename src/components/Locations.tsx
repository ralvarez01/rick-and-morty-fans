import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAppContext } from '../context/AppContext';

const Locations: React.FC = () => {
  const { addFavorite, isLoggedIn } = useAppContext();
  const [locations, setLocations] = useState<any[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/location?page=${page}`)
      .then(response => {
        setLocations([...locations, ...response.data.results]);
      })
      .catch(error => {
        console.error('Error fetching locations:', error);
      });
  }, [page]);

  const loadMore = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <h1>Ubicaciones 🎯</h1>
      <div>
        {locations.map(location => (
          <div key={location.id}>
            <h3>{location.name}</h3>
            {isLoggedIn && <button onClick={() => addFavorite(location)}>Agregar a Favoritos</button>}
          </div>
        ))}
      </div>
      <button onClick={loadMore}>Cargar más</button>
    </div>
  );
}

export default Locations;
