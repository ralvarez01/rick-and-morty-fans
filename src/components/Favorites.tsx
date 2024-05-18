import React from 'react';
import { useAppContext } from '../context/AppContext';

const Favorites: React.FC = () => {
  const { favorites, removeFavorite } = useAppContext();

  return (
    <div>
      <h1>Favoritos🌟</h1>
      <div>
        {favorites.map(favorite => (
          <div key={favorite.id}>
            <h3>{favorite.name}</h3>
            <button onClick={() => removeFavorite(favorite.id)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
