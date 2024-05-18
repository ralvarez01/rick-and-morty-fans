import React, { createContext, useContext, useState } from 'react';

interface Character {
  id: number;
  name: string;
  
}

interface AppContextProps {
  favorites: Character[];
  addFavorite: (character: Character) => void;
  removeFavorite: (id: number) => void;
  isLoggedIn: boolean;
  login: () => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<Character[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const addFavorite = (character: Character) => {
    setFavorites(prevFavorites => [...prevFavorites, character]);
  };

  const removeFavorite = (id: number) => {
    setFavorites(prevFavorites => prevFavorites.filter(character => character.id !== id));
  };

  const login = () => {
    
    setIsLoggedIn(true);
  };

  const contextValue: AppContextProps = {
    favorites,
    addFavorite,
    removeFavorite,
    isLoggedIn,
    login,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

